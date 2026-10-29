// Copy specific to /top-surgery that isn't already shared elsewhere.
// Content that already exists as verified, shared data (the "what is top
// surgery" explanation, the technique-selection note, the Patient Journey
// steps, the final CTA) is pulled directly from its existing
// source at render time in src/app/top-surgery/page.tsx rather than
// duplicated here — this file only holds the small amount of copy that's
// genuinely new to this page, plus this page's metadata.

type TopSurgeryPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: {
    eyebrow: string;
    heading: string;
    /** One-line alternative name — the same term the approved FAQ answer
     *  uses ("chest masculinization surgery"), kept visible on this page
     *  now that the shared FAQ accordion isn't repeated here. */
    alsoCalled: string;
  };
  /** Jump links under the H1 — same pattern as /top-surgery/techniques and
   *  /top-surgery/recovery. Every href must match a section id rendered in
   *  src/app/top-surgery/page.tsx. */
  onThisPage: { label: string; items: { href: string; label: string }[] };
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
    /** Questions to bring to the consultation. Deliberately left
     *  unanswered: they cover details that depend on the individual patient
     *  and on the surgeon's own clinical practice (anaesthesia, duration,
     *  hospital stay, drains, compression, time in Istanbul, requirements,
     *  individual risks). Do not add answers, durations, rates or typical
     *  practice here until the surgeon has approved them. */
    consultationQuestions: { heading: string; intro: string; items: string[] };
    /** Short sentence linking to /faq. The shared FAQ is no longer repeated
     *  on this page — every one of its questions is already answered by a
     *  section here, and it stays in full on /faq. */
    faqNote: { prefix: string; linkLabel: string; suffix: string };
  };
  recovery: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: { label: string; href: string };
    /** Short sentence linking to /top-surgery/recovery. */
    guideNote: { prefix: string; linkLabel: string; suffix: string };
  };
};

export const topSurgeryPageContent: { en: TopSurgeryPageContent; de: TopSurgeryPageContent } = {
  en: {
    metaTitle: "FTM Top Surgery: Techniques, Risks & Recovery",
    metaDescription:
      "Compare double incision, keyhole and periareolar FTM top surgery, learn about risks, scars and recovery, and see how surgery in Istanbul is planned.",
    intro: {
      eyebrow: "Top Surgery",
      heading: "FTM Top Surgery",
      alsoCalled: "FTM (female-to-male) top surgery is also called chest masculinization surgery.",
    },
    onThisPage: {
      label: "On this page",
      items: [
        { href: "#techniques", label: "Techniques" },
        { href: "#your-surgeon", label: "Your surgeon" },
        { href: "#patient-journey", label: "Patient Journey" },
        { href: "#before-you-decide", label: "Before you decide" },
        { href: "#recovery", label: "Recovery" },
      ],
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
      consultationQuestions: {
        heading: "Questions to ask your surgeon",
        intro:
          "Some details depend on your individual situation and on how your surgeon works, so they aren't answered on this page. They're worth raising during your consultation:",
        items: [
          "Which technique would you recommend for my chest, and why?",
          "What type of anaesthesia will be used?",
          "How long will the operation take, and will I stay in hospital overnight?",
          "Will I have drains, or need to wear a compression garment?",
          "How long should I plan to stay in Istanbul after surgery?",
          "How will my follow-up work once I'm back home?",
          "Are there any documents or requirements I need before surgery?",
          "Which risks apply to my situation, and how are they managed?",
        ],
      },
      faqNote: {
        prefix: "Have another question? See our",
        linkLabel: "frequently asked questions",
        suffix: ".",
      },
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
  },
  de: {
    metaTitle: "FTM Top Surgery: Techniken, Risiken & Genesung",
    metaDescription:
      "Doppelinzision, Keyhole oder periareolär: FTM-Top-Surgery-Techniken vergleichen, Risiken, Narben und Genesung verstehen und sehen, wie die OP in Istanbul abläuft.",
    intro: {
      eyebrow: "Top Surgery",
      heading: "FTM Top Surgery",
      alsoCalled: "Die FTM-Top-Surgery wird auch als brustmaskulinisierende Operation bezeichnet.",
    },
    onThisPage: {
      label: "Auf dieser Seite",
      items: [
        { href: "#techniques", label: "Techniken" },
        { href: "#your-surgeon", label: "Ihr Chirurg" },
        { href: "#patient-journey", label: "Patientenreise" },
        { href: "#before-you-decide", label: "Vor Ihrer Entscheidung" },
        { href: "#recovery", label: "Genesung" },
      ],
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
      consultationQuestions: {
        heading: "Fragen an Ihren Chirurgen",
        intro:
          "Manche Einzelheiten hängen von Ihrer individuellen Situation und der Arbeitsweise Ihres Chirurgen ab und werden daher auf dieser Seite nicht beantwortet. Es lohnt sich, sie im Beratungsgespräch anzusprechen:",
        items: [
          "Welche Technik empfehlen Sie für meinen Brustkorb, und warum?",
          "Welche Art von Narkose wird eingesetzt?",
          "Wie lange dauert die Operation, und bleibe ich über Nacht im Krankenhaus?",
          "Bekomme ich Drainagen, oder muss ich ein Kompressionskleidungsstück tragen?",
          "Wie lange sollte ich nach der Operation in Istanbul bleiben?",
          "Wie läuft die Nachsorge, wenn ich wieder zu Hause bin?",
          "Welche Unterlagen oder Voraussetzungen brauche ich vor der Operation?",
          "Welche Risiken betreffen meine Situation, und wie wird mit ihnen umgegangen?",
        ],
      },
      faqNote: {
        prefix: "Sie haben eine weitere Frage? Lesen Sie unsere",
        linkLabel: "häufig gestellten Fragen",
        suffix: ".",
      },
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
  },
};
