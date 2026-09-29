// Copy specific to /patient-journey that isn't already shared elsewhere,
// plus this page's metadata. The step content itself lives in
// src/data/patientJourney.ts (shared with the homepage preview and the
// Top Surgery page's recap).

type PatientJourneyPageContent = {
  metaTitle: string;
  metaDescription: string;
  /** BreadcrumbList name — kept stable independently of the SEO title. */
  breadcrumbName: string;
  intro: { eyebrow: string; heading: string };
  stages: {
    eyebrow: string;
    heading: string;
    /** Short sentence after the step list, linking to /results and /contact. */
    nextPrefix: string;
    resultsLabel: string;
    nextMiddle: string;
    consultationLabel: string;
    nextSuffix: string;
    /** Short sentence after that, linking to /top-surgery-turkey. */
    turkeyNote: { prefix: string; linkLabel: string; suffix: string };
  };
  ukNote: {
    eyebrow: string;
    heading: string;
    /**
     * Split around links to /top-surgery, /about-dr-serkan-dinar and
     * /top-surgery/techniques, in that order.
     */
    bodyPrefix: string;
    topSurgeryLabel: string;
    doctorPrefix: string;
    doctorLabel: string;
    techniquesPrefix: string;
    techniquesLabel: string;
    bodySuffix: string;
    /** Closing sentence split around a link to /contact. */
    contactPrefix: string;
    contactLabel: string;
    contactSuffix: string;
  };
};

export const patientJourneyPageContent: { en: PatientJourneyPageContent; de: PatientJourneyPageContent } = {
  en: {
    metaTitle: "Top Surgery Abroad from the UK: Patient Journey",
    metaDescription:
      "Private FTM top surgery abroad for UK patients: from WhatsApp consultation and travel to Istanbul to surgery with Dr. Serkan Dinar and recovery.",
    breadcrumbName: "Patient Journey",
    intro: {
      eyebrow: "Patient Journey",
      heading: "Top surgery abroad: a clear path for patients from the UK and beyond",
    },
    stages: {
      eyebrow: "The Journey, Step by Step",
      heading: "Your top surgery journey to Istanbul, from first contact to recovery",
      nextPrefix: "Curious what's possible? Take a look at our",
      resultsLabel: "results",
      nextMiddle: ", or get in touch to arrange a",
      consultationLabel: "consultation",
      nextSuffix: ".",
      turkeyNote: {
        prefix: "Planning to travel to Istanbul? Read more about",
        linkLabel: "top surgery in Turkey",
        suffix: ", including the surgical techniques and how recovery is followed up.",
      },
    },
    ukNote: {
      eyebrow: "For Patients in the UK",
      heading: "Private top surgery abroad, travelling from the UK",
      bodyPrefix: "A number of our patients are based in the UK and choose to arrange private",
      topSurgeryLabel: "FTM top surgery",
      doctorPrefix: " abroad — travelling to Istanbul, Turkey for their procedure with",
      doctorLabel: "Dr. Serkan Dinar",
      techniquesPrefix:
        ", a plastic, reconstructive, and aesthetic surgeon with more than 20 years of surgical experience. Wherever you're travelling from, the process works the same way: an initial consultation over WhatsApp, and a surgical plan agreed before you travel — including the choice between",
      techniquesLabel: "top surgery techniques",
      bodySuffix:
        ", decided individually based on chest size, skin elasticity, and your desired result — then coordination support from arrival through recovery, as set out step by step above.",
      contactPrefix: "If you're in the UK and considering top surgery abroad,",
      contactLabel: "get in touch",
      contactSuffix: " to start with a consultation.",
    },
  },
  de: {
    metaTitle: "Top Surgery im Ausland aus dem UK: Patientenreise",
    metaDescription:
      "Private FTM-Top-Surgery im Ausland für Patienten aus dem UK: von der WhatsApp-Beratung über die Anreise nach Istanbul bis zur OP bei Dr. Serkan Dinar.",
    breadcrumbName: "Patientenreise",
    intro: {
      eyebrow: "Patientenreise",
      heading: "Top Surgery im Ausland: ein klarer Weg für Patienten aus dem UK und anderen Ländern",
    },
    stages: {
      eyebrow: "Die Reise, Schritt für Schritt",
      heading: "Ihre Top-Surgery-Reise nach Istanbul — vom ersten Kontakt bis zur Genesung",
      nextPrefix: "Neugierig, was möglich ist? Werfen Sie einen Blick auf unsere",
      resultsLabel: "Ergebnisse",
      nextMiddle: ", oder nehmen Sie Kontakt auf, um ein",
      consultationLabel: "Beratungsgespräch",
      nextSuffix: " zu vereinbaren.",
      turkeyNote: {
        prefix: "Sie planen die Reise nach Istanbul? Lesen Sie mehr zur",
        linkLabel: "Top Surgery in der Türkei",
        suffix: " — mit den OP-Techniken und der Nachsorge nach dem Eingriff.",
      },
    },
    ukNote: {
      eyebrow: "Für Patienten aus dem UK",
      heading: "Private Top Surgery im Ausland — Anreise aus dem UK",
      bodyPrefix:
        "Ein Teil unserer Patienten kommt aus dem Vereinigten Königreich (UK) und entscheidet sich dafür, die",
      topSurgeryLabel: "FTM-Top-Surgery",
      doctorPrefix:
        " privat im Ausland durchführen zu lassen — mit der Anreise nach Istanbul, Türkei, für den Eingriff bei",
      doctorLabel: "Dr. Serkan Dinar",
      techniquesPrefix:
        ", Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie mit mehr als 20 Jahren chirurgischer Erfahrung. Unabhängig davon, von wo aus Sie anreisen, läuft der Ablauf gleich: ein erstes Beratungsgespräch über WhatsApp und ein OP-Plan, der vor Ihrer Anreise gemeinsam festgelegt wird — einschließlich der Wahl zwischen den",
      techniquesLabel: "Top-Surgery-Techniken",
      bodySuffix:
        ", individuell anhand von Brustgröße, Hautelastizität und Ihrem gewünschten Ergebnis — und danach Begleitung von der Ankunft bis zur Genesung, wie oben Schritt für Schritt beschrieben.",
      contactPrefix: "Sie leben im UK und denken über eine Top Surgery im Ausland nach?",
      contactLabel: "Nehmen Sie Kontakt auf",
      contactSuffix: ", um mit einem Beratungsgespräch zu beginnen.",
    },
  },
};
