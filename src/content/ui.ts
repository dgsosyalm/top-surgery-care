// Centralized translations for UI "chrome" strings that don't belong to any
// single page's content file: navigation, footer, the Results 18+ gate,
// forms, and misc component strings, plus metadata/headings for the few
// pages that have no dedicated content file of their own (root layout,
// /faq, /results).

type NavLink = { label: string; href: string };

type UiContent = {
  skipToContent: string;
  nav: {
    primary: NavLink[];
    legal: NavLink[];
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  footer: {
    tagline: string;
    exploreHeading: string;
    legalHeading: string;
    contactHeading: string;
    contactPageLabel: string;
    whatsappLabel: string;
    instagramLabel: string;
    youtubeLabel: string;
    redditLabel: string;
    copyrightSuffix: string;
    strapline: string;
  };
  languageSwitcher: { en: string; de: string };
  resultsGate: {
    heading: string;
    body: string;
    confirmLabel: string;
    goBackLabel: string;
  };
  lightbox: {
    close: string;
    previous: string;
    next: string;
  };
  consultationForm: {
    fullName: string;
    email: string;
    country: string;
    preferredContactMethod: string;
    message: string;
    messagePlaceholder: string;
    contactOptionWhatsapp: string;
    contactOptionEmail: string;
    consentPrefix: string;
    consentLinkLabel: string;
    consentSuffix: string;
    submitLabel: string;
    submitNote: string;
    whatsappIntro: string;
    whatsappNameLabel: string;
    whatsappEmailLabel: string;
    whatsappCountryLabel: string;
    whatsappContactMethodLabel: string;
    whatsappMessageLabel: string;
  };
  finalCta: {
    whatsappLabel: string;
    reachUsLabel: string;
  };
  whatsappButton: { ariaLabel: string };
  footerCertificates: { heading: string; openLargerPrefix: string };
  videoStories: {
    unavailable: string;
    pausePrefix: string;
    playPrefix: string;
    unmutePrefix: string;
    mutePrefix: string;
  };
  patientStories: {
    googleReviewBadge: string;
    googleReviewsSuffix: string;
    starsAriaSuffix: string;
  };
  rootMetadata: {
    titleSuffix: string;
    defaultTitle: string;
    description: string;
    ogLocale: string;
    ogImageAlt: string;
  };
  faqPage: { metaTitle: string; metaDescription: string };
  resultsPage: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heading: string;
    imageAlt1: string;
    viewAllLabel: string;
    openLargerViewPrefix: string;
    closing: {
      body: string;
      patientJourneyLabel: string;
      contactLabel: string;
    };
  };
};

export const uiContent: { en: UiContent; de: UiContent } = {
  en: {
    skipToContent: "Skip to content",
    nav: {
      primary: [
        { label: "Top Surgery", href: "/top-surgery" },
        { label: "The Journey", href: "/patient-journey/" },
        { label: "Results", href: "/results" },
        { label: "Dr. Serkan Dinar", href: "/about-dr-serkan-dinar/" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact/" },
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
        { label: "Medical Disclaimer", href: "/medical-disclaimer" },
      ],
      openMenuLabel: "Open menu",
      closeMenuLabel: "Close menu",
    },
    footer: {
      tagline: "Care. Confidence. You.",
      exploreHeading: "Explore",
      legalHeading: "Legal",
      contactHeading: "Contact",
      contactPageLabel: "Contact page",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      youtubeLabel: "YouTube",
      redditLabel: "Reddit Community",
      copyrightSuffix: "All rights reserved.",
      strapline: "FTM top surgery for international patients.",
    },
    languageSwitcher: { en: "EN", de: "DE" },
    resultsGate: {
      heading: "18+ Content Warning",
      body: "This section contains real surgical before-and-after images. These images are provided for medical and informational purposes.",
      confirmLabel: "I am 18+ — View Results",
      goBackLabel: "Go Back",
    },
    lightbox: {
      close: "Close",
      previous: "Previous image",
      next: "Next image",
    },
    consultationForm: {
      fullName: "Full name",
      email: "Email",
      country: "Country",
      preferredContactMethod: "Preferred contact method",
      message: "Message",
      messagePlaceholder: "Tell us a little about what you're looking for.",
      contactOptionWhatsapp: "WhatsApp",
      contactOptionEmail: "Email",
      consentPrefix: "I consent to Top Surgery Care contacting me about my inquiry. See our ",
      consentLinkLabel: "Privacy Policy",
      consentSuffix: " for how your information is handled.",
      submitLabel: "Request a Consultation",
      submitNote: "Submitting opens WhatsApp with your details pre-filled, ready to send.",
      whatsappIntro: "New consultation request from topsurgerycare.com",
      whatsappNameLabel: "Name",
      whatsappEmailLabel: "Email",
      whatsappCountryLabel: "Country",
      whatsappContactMethodLabel: "Preferred contact method",
      whatsappMessageLabel: "Message:",
    },
    finalCta: {
      whatsappLabel: "Message on WhatsApp",
      reachUsLabel: "See every way to reach us",
    },
    whatsappButton: { ariaLabel: "Chat with Top Surgery Care on WhatsApp" },
    footerCertificates: { heading: "Certifications", openLargerPrefix: "Open larger view: " },
    videoStories: {
      unavailable: "Video preview unavailable",
      pausePrefix: "Pause video",
      playPrefix: "Play video",
      unmutePrefix: "Unmute video",
      mutePrefix: "Mute video",
    },
    patientStories: {
      googleReviewBadge: "Google Review",
      googleReviewsSuffix: "Google reviews",
      starsAriaSuffix: "out of 5 stars",
    },
    rootMetadata: {
      titleSuffix: "Top Surgery Care",
      defaultTitle: "Top Surgery Care | FTM Top Surgery with Dr. Serkan Dinar",
      description:
        "Top Surgery Care provides FTM top surgery for international patients, led by Dr. Serkan Dinar. Explore techniques, the patient journey, and how to arrange a consultation.",
      ogLocale: "en_US",
      ogImageAlt: "Top Surgery Care logo",
    },
    faqPage: {
      metaTitle: "Frequently Asked Questions",
      metaDescription:
        "Answers to common questions about FTM top surgery, technique options, and what to expect as an international patient at Top Surgery Care.",
    },
    resultsPage: {
      metaTitle: "Results",
      metaDescription:
        "A curated set of before and after results from Top Surgery Care, shown as a full editorial gallery.",
      eyebrow: "Before & After",
      heading: "Results",
      imageAlt1: "Top surgery before and after result — case 01",
      viewAllLabel: "View all results",
      openLargerViewPrefix: "Open larger view: ",
      closing: {
        body: "Curious what happens next, or have a question of your own?",
        patientJourneyLabel: "See the Patient Journey",
        contactLabel: "Contact us",
      },
    },
  },
  de: {
    skipToContent: "Zum Inhalt springen",
    nav: {
      primary: [
        { label: "Top Surgery", href: "/top-surgery" },
        { label: "Die Reise", href: "/patient-journey/" },
        { label: "Ergebnisse", href: "/results" },
        { label: "Dr. Serkan Dinar", href: "/about-dr-serkan-dinar/" },
        { label: "FAQ", href: "/faq" },
        { label: "Kontakt", href: "/contact/" },
      ],
      legal: [
        { label: "Datenschutz", href: "/privacy-policy" },
        { label: "AGB", href: "/terms" },
        { label: "Medizinischer Hinweis", href: "/medical-disclaimer" },
      ],
      openMenuLabel: "Menü öffnen",
      closeMenuLabel: "Menü schließen",
    },
    footer: {
      tagline: "Fürsorge. Vertrauen. Sie.",
      exploreHeading: "Entdecken",
      legalHeading: "Rechtliches",
      contactHeading: "Kontakt",
      contactPageLabel: "Kontaktseite",
      whatsappLabel: "WhatsApp",
      instagramLabel: "Instagram",
      youtubeLabel: "YouTube",
      redditLabel: "Reddit-Community",
      copyrightSuffix: "Alle Rechte vorbehalten.",
      strapline: "FTM-Top-Surgery für internationale Patienten.",
    },
    languageSwitcher: { en: "EN", de: "DE" },
    resultsGate: {
      heading: "Altershinweis (18+)",
      body: "Dieser Bereich enthält echte chirurgische Vorher-Nachher-Bilder. Diese Bilder dienen medizinischen und informativen Zwecken.",
      confirmLabel: "Ich bin 18+ — Ergebnisse ansehen",
      goBackLabel: "Zurück",
    },
    lightbox: {
      close: "Schließen",
      previous: "Vorheriges Bild",
      next: "Nächstes Bild",
    },
    consultationForm: {
      fullName: "Vollständiger Name",
      email: "E-Mail",
      country: "Land",
      preferredContactMethod: "Bevorzugte Kontaktart",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns kurz, wonach Sie suchen.",
      contactOptionWhatsapp: "WhatsApp",
      contactOptionEmail: "E-Mail",
      consentPrefix: "Ich bin damit einverstanden, dass Top Surgery Care mich bezüglich meiner Anfrage kontaktiert. Informationen zum Umgang mit Ihren Daten finden Sie in unserer ",
      consentLinkLabel: "Datenschutzerklärung",
      consentSuffix: ".",
      submitLabel: "Beratungsgespräch anfragen",
      submitNote: "Beim Absenden öffnet sich WhatsApp mit Ihren Angaben, bereit zum Versenden.",
      whatsappIntro: "Neue Anfrage für ein Beratungsgespräch von topsurgerycare.com",
      whatsappNameLabel: "Name",
      whatsappEmailLabel: "E-Mail",
      whatsappCountryLabel: "Land",
      whatsappContactMethodLabel: "Bevorzugte Kontaktart",
      whatsappMessageLabel: "Nachricht:",
    },
    finalCta: {
      whatsappLabel: "Auf WhatsApp schreiben",
      reachUsLabel: "Alle Kontaktmöglichkeiten ansehen",
    },
    whatsappButton: { ariaLabel: "Mit Top Surgery Care auf WhatsApp chatten" },
    footerCertificates: { heading: "Zertifizierungen", openLargerPrefix: "Größere Ansicht öffnen: " },
    videoStories: {
      unavailable: "Videovorschau nicht verfügbar",
      pausePrefix: "Video pausieren",
      playPrefix: "Video abspielen",
      unmutePrefix: "Ton einschalten für Video",
      mutePrefix: "Ton ausschalten für Video",
    },
    patientStories: {
      googleReviewBadge: "Google-Bewertung",
      googleReviewsSuffix: "Google-Bewertungen",
      starsAriaSuffix: "von 5 Sternen",
    },
    rootMetadata: {
      titleSuffix: "Top Surgery Care",
      defaultTitle: "Top Surgery Care | FTM-Top-Surgery mit Dr. Serkan Dinar",
      description:
        "Top Surgery Care bietet FTM-Top-Surgery für internationale Patienten, unter der Leitung von Dr. Serkan Dinar. Entdecken Sie die Techniken, die Patientenreise und wie Sie ein Beratungsgespräch vereinbaren.",
      ogLocale: "de_DE",
      ogImageAlt: "Top Surgery Care Logo",
    },
    faqPage: {
      metaTitle: "Häufig gestellte Fragen",
      metaDescription:
        "Antworten auf häufige Fragen zur FTM-Top-Surgery, den verfügbaren Techniken und dazu, was Sie als internationaler Patient bei Top Surgery Care erwartet.",
    },
    resultsPage: {
      metaTitle: "Ergebnisse",
      metaDescription:
        "Eine ausgewählte Sammlung von Vorher-Nachher-Ergebnissen von Top Surgery Care, präsentiert als vollständige redaktionelle Galerie.",
      eyebrow: "Vorher & Nachher",
      heading: "Ergebnisse",
      imageAlt1: "Top Surgery Vorher-Nachher-Ergebnis — Fall 01",
      viewAllLabel: "Alle Ergebnisse ansehen",
      openLargerViewPrefix: "Größere Ansicht öffnen: ",
      closing: {
        body: "Neugierig, wie es weitergeht, oder haben Sie eine eigene Frage?",
        patientJourneyLabel: "Die Patientenreise ansehen",
        contactLabel: "Kontaktieren Sie uns",
      },
    },
  },
};
