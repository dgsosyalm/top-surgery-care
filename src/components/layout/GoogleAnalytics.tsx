import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/lib/site";

// GA4 site measurement only — no other tracking/marketing pixels. Uses the
// official @next/third-parties helper (version-pinned to this exact Next.js
// release) instead of a hand-rolled <Script> pair, so the window.gtag /
// window.dataLayer wiring is the same one Vercel/Next ship and test against
// this App Router version. Skipped outside production so local/dev traffic
// never pollutes the analytics data.
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  return <NextGoogleAnalytics gaId={siteConfig.analytics.gaMeasurementId} />;
}
