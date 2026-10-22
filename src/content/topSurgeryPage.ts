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
  /** "Your surgeon" block. Eyebrow, heading and bio are pulled from the
   *  approved homeContent.doctorIntro at render time; only the link labels
   *  live here. */
  surgeon: {
    profileLinkLabel: string;
    /** Short sentence linking to /results (age-gated gallery). */
    resultsNote: { prefix: string; linkLabel: string; suffix: string };
  };
  journey: {
    eyebrow: string;
    heading: string;
    /** Short sentence linking to /top-surgery-turkey, shown under the heading. */
    turkeyNote: { prefix: string; linkLabel: string; suffix: string };
  };
  /** Short answers to common pre-surgery questions, each pointing to the
   *  page that covers it in full. Every answer only restates wording that
   *  is already approved and published elsewhere on the site:
   *  - prepare: FAQ "first-consultation" + Patient Journey "prepare" step
   *  - surgeryDay: Patient Journey "surgery" step
   *  - risks: Medical Disclaimer "Surgical Risk"
   *  - scars: techniques data (incision patterns) + Medical Disclaimer
   *    "Individual results may vary" / "No guaranteed outcomes"
   *  No durations, anaesthesia details, drains, hospital-stay length,
   *  eligibility criteria, risk rates or alternatives — those need the
   *  surgeon's sign-off before they can be added. */
  beforeYouDecide: {
    eyebrow: string;
    heading: string;
    items: {
      id: string;
      question: string;
      answer: string;
      link: { label: string; href: string };
      secondaryLink?: { label: string; href: string };
    }[];
  };
  recovery: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: { label: string; href: string };
    /** Short sentence linking to /top-surgery/recovery. */
    guideNote: { prefix: string; linkLabel: string; suffix: string };
  };
  faq: { eyebrow: string; heading: string };
};

export const topSurgeryPageContent: { en: TopSurgeryPageContent; de: TopSurgeryPageContent } = {
  en: {
    metaTitle: "FTM Top Surgery: Procedure & Techniques",
    metaDescription:
      "Learn what FTM top surgery involves, the surgical techniques available, and what international patients can expect at Top Surgery Care in Istanbul, Turkey.",
    intro: {
      eyebrow: "Top Surgery",
      heading: "FTM Top Surgery",
    },
    whoMayConsider: {
      eyebrow: "Who It's For",
      heading: "Who may consider FTM top surgery",
      body: "Top surgery is most commonly sought by transgender men. It's also available to non-binary patients seeking a flatter, more masculine chest contour — not only those who identify strictly as male.",
    },
    techniques: {
      eyebrow: "Surgical Techniques",
      heading: "The FTM top surgery techniques we work with",
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
    surgeon: {
      profileLinkLabel: "Read Dr. Serkan Dinar's full profile",
      resultsNote: {
        prefix: "You can also view",
        linkLabel: "before-and-after results",
        suffix: " shared by individual patients (18+).",
      },
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
    beforeYouDecide: {
      eyebrow: "Before You Decide",
      heading: "What to know before top surgery",
      items: [
        {
          id: "prepare",
          question: "How do I prepare for top surgery?",
          answer:
            "Preparation starts with a consultation. Your goals, medical history, and chest anatomy are reviewed together, and a personalized surgical plan is agreed with your surgeon before you travel.",
          link: { label: "See how to prepare", href: "/patient-journey" },
        },
        {
          id: "surgery-day",
          question: "What happens on the day of surgery?",
          answer:
            "The surgery stage covers your procedure, hospital stay, and immediate post-operative care, led by Dr. Serkan Dinar. The details of your own procedure are discussed with your surgeon during your consultation.",
          link: { label: "See each stage of the Patient Journey", href: "/patient-journey" },
        },
        {
          id: "risks",
          question: "What are the risks of top surgery?",
          answer:
            "As with any surgical procedure, top surgery carries inherent risks and the possibility of complications. These risks should be discussed directly and in detail with your surgeon before you decide to proceed.",
          link: { label: "Read our Medical Disclaimer", href: "/medical-disclaimer" },
        },
        {
          id: "scars-healing",
          question: "What about scars and healing?",
          answer:
            "Each technique uses a different incision pattern. Scarring, sensation, and recovery are influenced by individual factors — including anatomy, skin elasticity, healing, and general health — so they vary from person to person and can't be guaranteed.",
          link: { label: "Compare incision patterns by technique", href: "/top-surgery/techniques" },
          secondaryLink: { label: "Read the recovery guide", href: "/top-surgery/recovery" },
        },
      ],
    },
    recovery: {
      eyebrow: "Recovery",
      heading: "Recovery and aftercare",
      body: "Aftercare guidance and follow-up support continue as you heal, whether you're recovering locally or preparing to travel back after top surgery abroad. Recovery is planned individually as part of your Patient Journey, not a fixed timeline applied to everyone.",
      cta: { label: "See the full Patient Journey", href: "/patient-journey" },
      guideNote: {
        prefix: "Read more in our guide to",
        linkLabel: "top surgery recovery and aftercare",
        suffix: ".",
      },
    },
    faq: {
      eyebrow: "Questions",
      heading: "Frequently asked questions",
    },
  },
  de: {
    metaTitle: "FTM Top Surgery: Ablauf & OP-Techniken",
    metaDescription:
      "Erfahren Sie, was FTM-Top-Surgery beinhaltet, welche OP-Techniken es gibt und was internationale Patienten bei Top Surgery Care in Istanbul, Türkei erwartet.",
    intro: {
      eyebrow: "Top Surgery",
      heading: "FTM Top Surgery",
    },
    whoMayConsider: {
      eyebrow: "Für wen geeignet",
      heading: "Für wen eine FTM-Top-Surgery infrage kommt",
      body: "Top Surgery wird am häufigsten von trans Männern in Anspruch genommen. Sie steht auch nicht-binären Patienten offen, die eine flachere, männlichere Brustkontur wünschen — nicht nur jenen, die sich ausschließlich als männlich identifizieren.",
    },
    techniques: {
      eyebrow: "OP-Techniken",
      heading: "Die FTM-Top-Surgery-Techniken, mit denen wir arbeiten",
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
    surgeon: {
      profileLinkLabel: "Das vollständige Profil von Dr. Serkan Dinar lesen",
      resultsNote: {
        prefix: "Sie können sich auch",
        linkLabel: "Vorher-Nachher-Ergebnisse",
        suffix: " einzelner Patienten ansehen (ab 18 Jahren).",
      },
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
    beforeYouDecide: {
      eyebrow: "Vor Ihrer Entscheidung",
      heading: "Was Sie vor der Top Surgery wissen sollten",
      items: [
        {
          id: "prepare",
          question: "Wie bereite ich mich auf die Top Surgery vor?",
          answer:
            "Die Vorbereitung beginnt mit einem Beratungsgespräch. Ihre Ziele, Ihre Krankengeschichte und die Anatomie Ihres Brustkorbs werden gemeinsam besprochen, und ein individueller OP-Plan wird vor Ihrer Anreise mit Ihrem Chirurgen vereinbart.",
          link: { label: "So bereiten Sie sich vor", href: "/patient-journey" },
        },
        {
          id: "surgery-day",
          question: "Was passiert am Tag der Operation?",
          answer:
            "Die Phase der Operation umfasst Ihren Eingriff, den Krankenhausaufenthalt und die unmittelbare postoperative Betreuung, geleitet von Dr. Serkan Dinar. Die Einzelheiten Ihres eigenen Eingriffs werden in Ihrem Beratungsgespräch mit Ihrem Chirurgen besprochen.",
          link: { label: "Alle Phasen der Patientenreise ansehen", href: "/patient-journey" },
        },
        {
          id: "risks",
          question: "Welche Risiken hat eine Top Surgery?",
          answer:
            "Wie jeder chirurgische Eingriff birgt auch eine Top-Surgery inhärente Risiken und die Möglichkeit von Komplikationen. Diese Risiken sollten vor Ihrer Entscheidung ausführlich und direkt mit Ihrem Chirurgen besprochen werden.",
          link: { label: "Unseren medizinischen Hinweis lesen", href: "/medical-disclaimer" },
        },
        {
          id: "scars-healing",
          question: "Wie sieht es mit Narben und Heilung aus?",
          answer:
            "Jede Technik nutzt einen anderen Schnittverlauf. Narbenbildung, Empfindungsfähigkeit und Genesung werden von individuellen Faktoren beeinflusst — unter anderem Anatomie, Hautelastizität, Heilungsverlauf und allgemeinem Gesundheitszustand — und fallen daher von Person zu Person unterschiedlich aus; sie können nicht garantiert werden.",
          link: { label: "Schnittverläufe der Techniken vergleichen", href: "/top-surgery/techniques" },
          secondaryLink: { label: "Den Genesungsleitfaden lesen", href: "/top-surgery/recovery" },
        },
      ],
    },
    recovery: {
      eyebrow: "Genesung",
      heading: "Genesung und Nachsorge",
      body: "Die Nachsorge und Begleitung setzen sich fort, während Sie heilen — ob vor Ort oder bei der Vorbereitung Ihrer Rückreise nach der Top Surgery im Ausland. Die Genesung wird individuell als Teil Ihrer Patientenreise geplant, nicht nach einem starren Zeitplan für alle.",
      cta: { label: "Die vollständige Patientenreise ansehen", href: "/patient-journey" },
      guideNote: {
        prefix: "Mehr dazu in unserem Leitfaden zu",
        linkLabel: "Genesung und Nachsorge nach der Top Surgery",
        suffix: ".",
      },
    },
    faq: {
      eyebrow: "Fragen",
      heading: "Häufig gestellte Fragen",
    },
  },
};
