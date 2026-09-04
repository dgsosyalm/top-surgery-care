// Copy specific to /contact, including this page's metadata and the
// contact-method list labels (hrefs/display handles stay in src/lib/site.ts
// and src/app/contact/page.tsx — only translatable labels live here).

type ContactPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: { eyebrow: string; heading: string };
  methods: { heading: string };
  form: { heading: string };
  methodLabels: {
    whatsapp: string;
    instagram: string;
    youtube: string;
    reddit: string;
    email: string;
  };
};

export const contactPageContent: { en: ContactPageContent; de: ContactPageContent } = {
  en: {
    metaTitle: "Contact",
    metaDescription:
      "Get in touch with Top Surgery Care on WhatsApp, Instagram, or YouTube, or send a consultation request directly.",
    intro: {
      eyebrow: "Get in Touch",
      heading: "Contact",
    },
    methods: {
      heading: "Ways to reach us",
    },
    form: {
      heading: "Send a consultation request",
    },
    methodLabels: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      youtube: "YouTube",
      reddit: "Reddit Community",
      email: "Email",
    },
  },
  de: {
    metaTitle: "Kontakt",
    metaDescription:
      "Nehmen Sie Kontakt zu Top Surgery Care auf — über WhatsApp, Instagram oder YouTube, oder senden Sie direkt eine Anfrage für ein Beratungsgespräch.",
    intro: {
      eyebrow: "Kontakt aufnehmen",
      heading: "Kontakt",
    },
    methods: {
      heading: "So erreichen Sie uns",
    },
    form: {
      heading: "Anfrage für ein Beratungsgespräch senden",
    },
    methodLabels: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      youtube: "YouTube",
      reddit: "Reddit-Community",
      email: "E-Mail",
    },
  },
};
