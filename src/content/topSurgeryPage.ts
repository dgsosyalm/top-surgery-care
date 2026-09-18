// Copy specific to /top-surgery that isn't already shared elsewhere.
// Content that already exists as verified, shared data (the "what is top
// surgery" explanation, the technique-selection note, the Patient Journey
// steps, the FAQ, the final CTA) is pulled directly from its existing
// source at render time in src/app/top-surgery/page.tsx rather than
// duplicated here — this file only holds the small amount of copy that's
// genuinely new to this page, plus this page's metadata.

type TopSurgeryPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: { eyebrow: string; heading: string };
  whoMayConsider: { eyebrow: string; heading: string; body: string };
  techniques: {
    eyebrow: string;
    heading: string;
    considerationsLabel: string;
    /** Short sentence linking to /top-surgery/techniques, shown under the heading. */
    compareNote: { prefix: string; linkLabel: string; suffix: string };
  };
  techniqueSelection: {
    eyebrow: string;
    heading: string;
    /** Rendered as a short sentence around a link to /about-dr-serkan-dinar,
     *  right after the shared technique-selection note — kept local to this
     *  page rather than touching the shared note itself. */
    doctorNotePrefix: string;
    doctorNoteSuffix: string;
  };
  journey: {
    eyebrow: string;
    heading: string;
    /** Short sentence linking to /top-surgery-turkey, shown under the heading. */
    turkeyNote: { prefix: string; linkLabel: string; suffix: string };
  };
  recovery: { eyebrow: string; heading: string; body: string; cta: { label: string; href: string } };
  faq: { eyebrow: string; heading: string };
};

export const topSurgeryPageContent: { en: TopSurgeryPageContent; de: TopSurgeryPageContent } = {
  en: {
    metaTitle: "FTM Top Surgery",
    metaDescription:
      "Learn what FTM top surgery involves, the surgical techniques available, and what to expect as a patient travelling abroad to Top Surgery Care in Istanbul, Turkey.",
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
      compareNote: {
        prefix: "Want to see them side by side? Read our guide to",
        linkLabel: "top surgery techniques",
        suffix: ", including double incision vs keyhole.",
      },
    },
    techniqueSelection: {
      eyebrow: "Choosing a Technique",
      heading: "How technique selection is determined",
      doctorNotePrefix: "This decision is made together with",
      doctorNoteSuffix: "during your consultation.",
    },
    journey: {
      eyebrow: "Patient Journey",
      heading: "What the process looks like",
      turkeyNote: {
        prefix: "Travelling to Istanbul for your surgery? Read our guide to",
        linkLabel: "top surgery in Turkey",
        suffix: " for international patients.",
      },
    },
    recovery: {
      eyebrow: "Recovery",
      heading: "Recovery and aftercare",
      body: "Aftercare guidance and follow-up support continue as you heal, whether you're recovering locally or preparing to travel back after your surgery abroad. Recovery is planned individually as part of your Patient Journey, not a fixed timeline applied to everyone.",
      cta: { label: "See the full Patient Journey", href: "/patient-journey" },
    },
    faq: {
      eyebrow: "Questions",
      heading: "Frequently asked questions",
    },
  },
  de: {
    metaTitle: "FTM Top Surgery",
    metaDescription:
      "Erfahren Sie, was eine FTM-Top-Surgery beinhaltet, welche OP-Techniken zur Verfügung stehen und was Sie als international anreisender Patient bei Top Surgery Care in Istanbul, Türkei, erwartet.",
    intro: {
      eyebrow: "Top Surgery",
      heading: "FTM Top Surgery",
    },
    whoMayConsider: {
      eyebrow: "Für wen geeignet",
      heading: "Für wen eine Top Surgery infrage kommt",
      body: "Top Surgery wird am häufigsten von trans Männern in Anspruch genommen. Sie steht auch nicht-binären Patienten offen, die eine flachere, männlichere Brustkontur wünschen — nicht nur jenen, die sich ausschließlich als männlich identifizieren.",
    },
    techniques: {
      eyebrow: "OP-Techniken",
      heading: "Die Techniken, mit denen wir arbeiten",
      considerationsLabel: "Wichtige Faktoren",
      compareNote: {
        prefix: "Sie möchten die Techniken direkt vergleichen? Lesen Sie unseren Leitfaden zu den",
        linkLabel: "Top Surgery Techniken",
        suffix: " — auch zu Doppelinzision vs. Keyhole.",
      },
    },
    techniqueSelection: {
      eyebrow: "Wahl der Technik",
      heading: "Wie die Technik ausgewählt wird",
      doctorNotePrefix: "Diese Entscheidung wird gemeinsam mit",
      doctorNoteSuffix: "in Ihrem Beratungsgespräch getroffen.",
    },
    journey: {
      eyebrow: "Patientenreise",
      heading: "So läuft der Ablauf",
      turkeyNote: {
        prefix: "Reisen Sie für Ihre Operation nach Istanbul? Lesen Sie unseren Leitfaden zur",
        linkLabel: "Top Surgery in der Türkei",
        suffix: " für internationale Patienten.",
      },
    },
    recovery: {
      eyebrow: "Genesung",
      heading: "Genesung und Nachsorge",
      body: "Die Nachsorge und Begleitung setzen sich fort, während Sie heilen — ob vor Ort oder bei der Vorbereitung Ihrer Rückreise nach Ihrer Operation im Ausland. Die Genesung wird individuell als Teil Ihrer Patientenreise geplant, nicht nach einem starren Zeitplan für alle.",
      cta: { label: "Die vollständige Patientenreise ansehen", href: "/patient-journey" },
    },
    faq: {
      eyebrow: "Fragen",
      heading: "Häufig gestellte Fragen",
    },
  },
};
