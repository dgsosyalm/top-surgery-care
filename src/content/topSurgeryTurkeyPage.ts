// Copy specific to /top-surgery-turkey, plus this page's metadata.
//
// Everything on this page restates facts that are already approved and
// published elsewhere on the site (doctor summary, technique list, Patient
// Journey steps, the Istanbul coordination partner, the recovery wording,
// the UK note) — no new medical claims, timelines, statistics, prices or
// hospital/clinic names. The techniques, Patient Journey steps and
// coordination support items themselves are pulled from their single
// sources (src/data/techniques.ts, src/data/patientJourney.ts,
// src/content/home.ts) at render time in src/app/top-surgery-turkey/page.tsx
// instead of being duplicated here.

type LinkSentence = { prefix: string; linkLabel: string; suffix: string };

type TopSurgeryTurkeyPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: {
    eyebrow: string;
    heading: string;
    lead: string;
    consultationCtaLabel: string;
    journeyCtaLabel: string;
  };
  overview: { eyebrow: string; heading: string; body: string[] };
  surgeon: { eyebrow: string; heading: string; body: string; cta: { label: string; href: string } };
  techniques: { eyebrow: string; heading: string; description: string; allTechniquesLabel: string };
  journey: { eyebrow: string; heading: string; cta: { label: string; href: string } };
  arrival: { eyebrow: string; heading: string; body: string; itemsLabel: string };
  recovery: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: { label: string; href: string };
    /** Short sentence linking to /faq. */
    faqNote: LinkSentence;
  };
  uk: {
    eyebrow: string;
    heading: string;
    body: string;
    /** Short sentence linking to /patient-journey. */
    journeyNote: LinkSentence;
  };
};

export const topSurgeryTurkeyPageContent: {
  en: TopSurgeryTurkeyPageContent;
  de: TopSurgeryTurkeyPageContent;
} = {
  en: {
    metaTitle: "Top Surgery in Turkey: FTM in Istanbul",
    metaDescription:
      "Considering top surgery abroad? Learn about FTM top surgery in Istanbul, Turkey with Dr. Serkan Dinar: techniques, arrival coordination, recovery and follow-up.",
    intro: {
      eyebrow: "International Patients",
      heading: "Top Surgery in Turkey",
      lead: "FTM top surgery in Istanbul with Dr. Serkan Dinar, planned around you — from your first consultation through to your recovery.",
      consultationCtaLabel: "Book a consultation",
      journeyCtaLabel: "See the Patient Journey",
    },
    overview: {
      eyebrow: "Top Surgery Abroad",
      heading: "FTM top surgery in Istanbul, for patients travelling from abroad",
      body: [
        "Top Surgery Care provides FTM top surgery in Istanbul, Turkey, for international patients. Top surgery, also called chest masculinization surgery, removes breast tissue and reshapes the chest to create a flatter, more masculine contour. It's one of the most common gender-affirming procedures for transgender men and non-binary patients.",
        "Having top surgery abroad involves more than the operation itself. This page brings together what you'll want to know in one place: who your surgeon is, which techniques are available, how travel and arrival are coordinated, and how recovery and follow-up are supported.",
      ],
    },
    surgeon: {
      eyebrow: "Your Surgeon",
      heading: "Dr. Serkan Dinar",
      body: "Your surgery is led by Dr. Serkan Dinar, a plastic, reconstructive, and aesthetic surgeon with more than 20 years of surgical experience. Which technique and surgical plan are considered for you is decided together with Dr. Dinar during your consultation.",
      cta: { label: "Meet Dr. Dinar", href: "/about-dr-serkan-dinar" },
    },
    techniques: {
      eyebrow: "Surgical Techniques",
      heading: "Available surgical techniques",
      description:
        "Three techniques are available: Double Incision, Periareolar and Keyhole. Which one is considered depends on chest size, skin elasticity, and your desired result — decided individually with your surgeon, not by a fixed formula.",
      allTechniquesLabel: "Compare the techniques in detail",
    },
    journey: {
      eyebrow: "International Patient Journey",
      heading: "From your first message to your recovery",
      cta: { label: "See the full Patient Journey", href: "/patient-journey" },
    },
    arrival: {
      eyebrow: "Travel & Arrival",
      heading: "Coordinated from the moment you land in Istanbul",
      body: "Neda Deniz International Medical Tourism and Travel Agency coordinates your stay from the moment you land in Istanbul. Its founder, Neda Deniz, is a sworn translator certified by a notary and provides consultancy to guests throughout their stay in Istanbul.",
      itemsLabel: "Coordination support includes",
    },
    recovery: {
      eyebrow: "Recovery & Follow-up",
      heading: "Recovery and follow-up care",
      body: "Aftercare guidance and follow-up support continue as you heal, at home or before you travel back. Once the initial coordination is complete, your care continues with your surgeon. Recovery is planned individually as part of your Patient Journey, not a fixed timeline applied to everyone.",
      cta: { label: "See the full Patient Journey", href: "/patient-journey" },
      faqNote: {
        prefix: "Have more questions? Our",
        linkLabel: "FAQ",
        suffix: " answers the most common ones.",
      },
    },
    uk: {
      eyebrow: "For Patients in the UK",
      heading: "Top surgery in Turkey for patients from the UK",
      body: "If you're based in the UK and considering top surgery abroad, the process is the same as for every international patient: an initial consultation over WhatsApp, a surgical plan agreed before you travel, and coordination support from arrival through recovery. A number of our patients travel from the UK to Istanbul to arrange their top surgery privately.",
      journeyNote: {
        prefix: "You can follow every stage in detail on the",
        linkLabel: "Patient Journey",
        suffix: " page.",
      },
    },
  },
  de: {
    metaTitle: "Top Surgery in der Türkei: FTM in Istanbul",
    metaDescription:
      "Top Surgery im Ausland? FTM-Top-Surgery in Istanbul, Türkei, bei Dr. Serkan Dinar: Techniken, Ankunftskoordination, Genesung und Nachsorge.",
    intro: {
      eyebrow: "Internationale Patienten",
      heading: "Top Surgery in der Türkei",
      lead: "FTM-Top-Surgery in Istanbul bei Dr. Serkan Dinar, individuell auf Sie abgestimmt — vom ersten Beratungsgespräch bis zur Genesung.",
      consultationCtaLabel: "Beratungsgespräch vereinbaren",
      journeyCtaLabel: "Zur Patientenreise",
    },
    overview: {
      eyebrow: "Top Surgery im Ausland",
      heading: "FTM-Top-Surgery in Istanbul für Patienten aus dem Ausland",
      body: [
        "Top Surgery Care bietet FTM-Top-Surgery in Istanbul, Türkei, für internationale Patienten an. Bei der Top Surgery, auch brustmaskulinisierende Operation genannt, wird Brustgewebe entfernt und der Brustkorb neu geformt, um eine flachere, männlichere Kontur zu schaffen. Sie zählt zu den häufigsten geschlechtsangleichenden Eingriffen für trans Männer und nicht-binäre Patienten.",
        "Eine Top Surgery im Ausland umfasst mehr als den Eingriff selbst. Diese Seite fasst an einem Ort zusammen, was Sie wissen möchten: wer Ihr Chirurg ist, welche Techniken zur Verfügung stehen, wie Reise und Ankunft koordiniert werden und wie Genesung und Nachsorge begleitet werden.",
      ],
    },
    surgeon: {
      eyebrow: "Ihr Chirurg",
      heading: "Dr. Serkan Dinar",
      body: "Ihre Operation wird von Dr. Serkan Dinar geleitet, Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie mit mehr als 20 Jahren chirurgischer Erfahrung. Welche Technik und welcher OP-Plan für Sie infrage kommen, wird in Ihrem Beratungsgespräch gemeinsam mit Dr. Dinar festgelegt.",
      cta: { label: "Dr. Dinar kennenlernen", href: "/about-dr-serkan-dinar" },
    },
    techniques: {
      eyebrow: "OP-Techniken",
      heading: "Verfügbare OP-Techniken",
      description:
        "Zur Verfügung stehen die Doppelinzision, die periareoläre Technik und Keyhole. Welche in Betracht kommt, richtet sich nach Brustgröße, Hautelastizität und Ihrem gewünschten Ergebnis — sie wird individuell mit Ihrem Chirurgen festgelegt, nicht nach einem starren Schema.",
      allTechniquesLabel: "Die Techniken im Detail vergleichen",
    },
    journey: {
      eyebrow: "Patientenreise für internationale Patienten",
      heading: "Vom ersten Kontakt bis zur Genesung",
      cta: { label: "Die vollständige Patientenreise ansehen", href: "/patient-journey" },
    },
    arrival: {
      eyebrow: "Reise & Ankunft",
      heading: "Koordiniert ab dem Moment Ihrer Ankunft in Istanbul",
      body: "Die Neda Deniz International Medical Tourism and Travel Agency koordiniert Ihren Aufenthalt vom Moment Ihrer Ankunft in Istanbul an. Gründerin Neda Deniz ist notariell vereidigte Übersetzerin und berät Gäste während ihres gesamten Aufenthalts in Istanbul.",
      itemsLabel: "Die Koordination umfasst",
    },
    recovery: {
      eyebrow: "Genesung & Nachsorge",
      heading: "Genesung und Nachsorge",
      body: "Nachsorge und Begleitung setzen sich fort, während Sie heilen — zu Hause oder vor Ihrer Rückreise. Sobald die anfängliche Koordination abgeschlossen ist, wird Ihre Betreuung bei Ihrem Chirurgen fortgesetzt. Die Genesung wird individuell als Teil Ihrer Patientenreise geplant, nicht nach einem starren Zeitplan für alle.",
      cta: { label: "Die vollständige Patientenreise ansehen", href: "/patient-journey" },
      faqNote: {
        prefix: "Noch Fragen? Unsere",
        linkLabel: "FAQ",
        suffix: " beantwortet die häufigsten.",
      },
    },
    uk: {
      eyebrow: "Für Patienten aus dem UK",
      heading: "Top Surgery in der Türkei für Patienten aus dem Vereinigten Königreich (UK)",
      body: "Wenn Sie im Vereinigten Königreich (UK) leben und eine Top Surgery im Ausland in Erwägung ziehen, läuft der Ablauf wie bei jedem internationalen Patienten: ein erstes Beratungsgespräch über WhatsApp, ein OP-Plan, der vor Ihrer Anreise gemeinsam festgelegt wird, und Begleitung von der Ankunft bis zur Genesung. Ein Teil unserer Patienten reist aus dem UK nach Istanbul, um die Top Surgery privat durchführen zu lassen.",
      journeyNote: {
        prefix: "Jede Etappe im Detail finden Sie auf der Seite",
        linkLabel: "Patientenreise",
        suffix: ".",
      },
    },
  },
};
