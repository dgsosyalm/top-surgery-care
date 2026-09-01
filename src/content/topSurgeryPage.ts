// Copy specific to /top-surgery that isn't already shared elsewhere.
// Content that already exists as verified, shared data (the "what is top
// surgery" explanation, the technique-selection note, the Patient Journey
// steps, the FAQ, the final CTA) is pulled directly from its existing
// source at render time in src/app/top-surgery/page.tsx rather than
// duplicated here — this file only holds the small amount of copy that's
// genuinely new to this page.

export const topSurgeryPageContent = {
  intro: {
    eyebrow: "Top Surgery",
    heading: "FTM Top Surgery",
  },
  whoMayConsider: {
    eyebrow: "Who It's For",
    heading: "Who may consider top surgery",
    body: "Top surgery is most commonly sought by transgender men. It's also available to non-binary patients seeking a flatter, more masculine chest contour — not only those who identify strictly as male.",
  },
  techniques: {
    eyebrow: "Surgical Techniques",
    heading: "The techniques we work with",
    considerationsLabel: "Key considerations",
  },
  techniqueSelection: {
    eyebrow: "Choosing a Technique",
    heading: "How technique selection is determined",
  },
  journey: {
    eyebrow: "Patient Journey",
    heading: "What the process looks like",
  },
  recovery: {
    eyebrow: "Recovery",
    heading: "Recovery and aftercare",
    body: "Aftercare guidance and follow-up support continue as you heal, whether you're recovering locally or preparing to travel back. Recovery is planned individually as part of your Patient Journey, not a fixed timeline applied to everyone.",
    cta: { label: "See the full Patient Journey", href: "/patient-journey/" },
  },
  faq: {
    eyebrow: "Questions",
    heading: "Frequently asked questions",
  },
} as const;
