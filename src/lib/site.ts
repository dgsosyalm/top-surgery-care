export const siteConfig = {
  name: "Top Surgery Care",
  url: "https://topsurgerycare.com",
  doctor: {
    name: "Dr. Serkan Dinar",
  },
  // Single shared source for every contact detail on the site (Header,
  // Footer, ConsultationForm, homepage Contact section, /contact page).
  // Never hardcode these values a second time — import them from here.
  contact: {
    whatsappDisplay: "+90 530 295 09 63",
    whatsappHref: "https://wa.me/905302950963",
    instagram: "https://www.instagram.com/topsurgerycare",
    youtube: "https://youtube.com/@topsurgeryturkey",
    reddit: "https://www.reddit.com/r/topsurgeryturkey/",
    // No official email has been provided/approved yet — do not invent
    // one. Once approved, add it here and it will appear on the Contact
    // page and in the footer automatically.
    email: null as string | null,
    pageHref: "/contact/",
  },
  // Nav labels (primary + legal) are translated — see src/content/ui.ts
  // → uiContent[locale].nav. Only hrefs live here.
} as const;
