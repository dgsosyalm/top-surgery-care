import Script from "next/script";

// OnlyContact live chat widget, loaded once for every page from the root
// layout. Independent of Google Analytics / Search Console.
//
// Load order:
//  1. The config script uses `beforeInteractive`, so Next.js writes it into
//     the server HTML <head>. It runs before any client code, which means
//     window.OnlyContactChat is set before the widget script runs.
//  2. The widget uses `afterInteractive`, so it loads after hydration and
//     doesn't hold up first paint.
//
// Loading only once:
//  - Each <Script> has a fixed `id`. Next.js won't inject a script with the
//    same id twice, even across client-side navigations.
//  - The widget checks window.__onlyContactChatLoaded itself and returns early
//    on a second run.
//  - The config only sets window.OnlyContactChat if it isn't already defined.
const ONLYCONTACT_KEY = "14d7273364595110a35cd9cc1a4f7ed9";
const ONLYCONTACT_BASE = "https://onlycontact.net/";

export function OnlyContactChat() {
  return (
    <>
      {/* App Router: beforeInteractive belongs in the root layout (see
          node_modules/next/dist/docs/.../script.md); this lint rule is a
          Pages Router leftover. */}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        id="onlycontact-config"
        strategy="beforeInteractive"
        data-no-optimize="1"
        data-cfasync="false"
      >
        {`window.OnlyContactChat = window.OnlyContactChat || { key: "${ONLYCONTACT_KEY}", base: "${ONLYCONTACT_BASE}" };`}
      </Script>
      <Script
        id="onlycontact-widget"
        src={`${ONLYCONTACT_BASE}assets/js/livechat-widget.js`}
        strategy="afterInteractive"
        data-key={ONLYCONTACT_KEY}
        data-no-optimize="1"
        data-cfasync="false"
      />
    </>
  );
}
