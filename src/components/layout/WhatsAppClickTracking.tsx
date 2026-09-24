"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site";
import { trackWhatsAppClick } from "@/lib/analytics";

// Fires the GA4 `whatsapp_click` event for every click on a link that goes
// to our WhatsApp number, wherever it appears (header, footer, final CTA,
// contact page, the floating WhatsApp button, ...). A single delegated
// listener on the document instead of instrumenting each call site, so it
// covers every current link — and any future one — without touching their
// markup, styling, or behavior.
export function WhatsAppClickTracking() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (!link.href.startsWith(siteConfig.contact.whatsappHref)) return;

      trackWhatsAppClick();
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
