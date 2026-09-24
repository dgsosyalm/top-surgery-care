import Script from "next/script";
import { siteConfig } from "@/lib/site";

// GA4 site measurement only — no other tracking/marketing pixels.
// Loaded after the page is interactive so it never blocks or delays
// rendering, and skipped outside production so local/dev traffic never
// pollutes the analytics data.
export function GoogleAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;

  const { gaMeasurementId } = siteConfig.analytics;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `}
      </Script>
    </>
  );
}
