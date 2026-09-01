// Copy specific to /contact. Reuses the already-approved "Get in Touch"
// wording from the homepage's final CTA (src/content/home.ts → finalCta)
// rather than inventing new framing text.

export const contactPageContent = {
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
} as const;
