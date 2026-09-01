export const siteConfig = {
  name: "Top Surgery Care",
  tagline: "Care. Confidence. You.",
  url: "https://topsurgerycare.com",
  description:
    "Top Surgery Care provides FTM top surgery for international patients, led by Dr. Serkan Dinar. Explore techniques, the patient journey, and how to arrange a consultation.",
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
  primaryNav: [
    { label: "Top Surgery", href: "/top-surgery" },
    { label: "The Journey", href: "/patient-journey/" },
    { label: "Results", href: "/results" },
    { label: "Dr. Serkan Dinar", href: "/about-dr-serkan-dinar/" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact/" },
  ],
  legalNav: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Medical Disclaimer", href: "/medical-disclaimer" },
  ],
} as const;
