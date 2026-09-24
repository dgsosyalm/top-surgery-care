declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fires the GA4 `whatsapp_click` event. Safe to call unconditionally —
// no-ops on the server and whenever gtag hasn't loaded (dev/preview,
// see src/components/layout/GoogleAnalytics.tsx).
export function trackWhatsAppClick(details?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "whatsapp_click", details);
}
