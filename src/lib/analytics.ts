import { sendGAEvent } from "@next/third-parties/google";

// Fires the GA4 `whatsapp_click` event via the official @next/third-parties
// helper, which pushes straight onto window.dataLayer — the same queue
// src/components/layout/GoogleAnalytics.tsx's <GoogleAnalytics> sets up, and
// one gtag.js drains itself once loaded, so this doesn't depend on
// window.gtag already existing as a callable at click time.
//
// Takes no data parameters: GA4 already records page_location / page_title
// automatically, and this guarantees nothing a visitor typed (name,
// message, ...) can ever be attached to the event — GA4 silently drops hits
// it detects as carrying personal data.
//
// transport_type: "beacon" is the one parameter set, and it isn't data —
// it tells gtag.js to send this specific hit via navigator.sendBeacon
// instead of a normal request. wa.me links hand off to the WhatsApp app
// (or navigate away) immediately on click, which can tear down the page
// before a regular async request finishes; sendBeacon is designed to
// survive exactly that.
export function trackWhatsAppClick() {
  sendGAEvent("event", "whatsapp_click", { transport_type: "beacon" });
}
