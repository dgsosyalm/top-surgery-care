import { NextResponse, type NextRequest } from "next/server";

// Turkey geo-block.
//
// How it works: every request that reaches this deployment through
// Vercel's edge network is stamped with `x-vercel-ip-country` — a
// two-letter ISO 3166-1 country code derived from the visitor's IP
// address (https://vercel.com/docs/edge-network/headers#x-vercel-ip-country).
// Vercel sets this header itself at the edge and strips/overwrites any
// copy a client tries to send, so it cannot be spoofed by a request
// header alone. We read it directly instead of adding a package —
// `@vercel/functions`'s `geolocation()` helper reads this exact same
// header under the hood, so a dependency buys nothing extra here.
//
// Limits (important — do not oversell this):
// - It is IP-based geolocation, not identity verification. A VPN, proxy,
//   or an IP range that Vercel's provider misattributes can make a
//   visitor physically in Turkey appear as another country, and vice
//   versa. This blocks the ordinary case, not a determined bypass.
// - The header is only present on requests actually served by Vercel's
//   network. It is absent in local `next dev` and other hosting, so
//   nothing is blocked there — there is no country to detect.
const BLOCKED_COUNTRY = "TR";

const BLOCKED_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Not available in your region</title>
    <style>
      :root { color-scheme: light; }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 32px;
        background: #faf8f4;
        color: #14171f;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
      }
      main { max-width: 30rem; text-align: center; }
      .flag { display: block; margin: 0 auto 20px; }
      h1 { font-size: 1.375rem; font-weight: 600; margin: 0 0 12px; }
      p { margin: 0; font-size: 0.95rem; line-height: 1.6; color: #4b4f5a; }
    </style>
  </head>
  <body>
    <main>
      <svg class="flag" width="56" height="36" viewBox="0 0 56 36" role="img" aria-label="Transgender Pride flag">
        <defs>
          <clipPath id="flagClip"><rect x="0.5" y="0.5" width="55" height="35" rx="4" /></clipPath>
        </defs>
        <g clip-path="url(#flagClip)">
          <rect x="0" y="0" width="56" height="7.2" fill="#5BCEFA" />
          <rect x="0" y="7.2" width="56" height="7.2" fill="#F5A9B8" />
          <rect x="0" y="14.4" width="56" height="7.2" fill="#FFFFFF" />
          <rect x="0" y="21.6" width="56" height="7.2" fill="#F5A9B8" />
          <rect x="0" y="28.8" width="56" height="7.2" fill="#5BCEFA" />
        </g>
        <rect x="0.5" y="0.5" width="55" height="35" rx="4" fill="none" stroke="#e2ded4" stroke-width="1" />
      </svg>
      <h1>This site isn't available in your region</h1>
      <p>We're sorry — this website is currently not accessible from your location.</p>
    </main>
  </body>
</html>`;

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();

  if (country === BLOCKED_COUNTRY) {
    return new NextResponse(BLOCKED_HTML, {
      // 451 Unavailable For Legal Reasons — the status code meant for
      // exactly this: content withheld based on the requester's location.
      status: 451,
      headers: {
        "content-type": "text/html; charset=utf-8",
        // Never let a CDN/browser cache this response under a shared key —
        // a cached 451 must never be served to a non-TR visitor, and a
        // cached 200 must never be served to a TR one.
        "cache-control": "no-store",
      },
    });
  }

  return NextResponse.next();
}

// No matcher: Proxy then runs on every request — pages, the public/
// folder, and _next/static and _next/image alike — so a TR visitor can't
// reach any asset or route by going around the app shell.
