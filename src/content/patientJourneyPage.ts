// Copy specific to /patient-journey that isn't already shared elsewhere,
// plus this page's metadata. The step content itself lives in
// src/data/patientJourney.ts (shared with the homepage preview and the
// Top Surgery page's recap).

type PatientJourneyPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: { eyebrow: string; heading: string };
  stages: { eyebrow: string; heading: string };
  ukNote: { eyebrow: string; heading: string; body: string };
};

export const patientJourneyPageContent: { en: PatientJourneyPageContent; de: PatientJourneyPageContent } = {
  en: {
    metaTitle: "Patient Journey",
    metaDescription:
      "What to expect as an international patient, including those travelling from the UK, from your first consultation through arrival, surgery, and recovery.",
    intro: {
      eyebrow: "Patient Journey",
      heading: "A clear path for patients travelling from abroad",
    },
    stages: {
      eyebrow: "The Journey, Step by Step",
      heading: "What to expect, from first contact to recovery",
    },
    ukNote: {
      eyebrow: "For Patients in the UK",
      heading: "Travelling from the UK",
      body: "A number of our patients are based in the UK and choose to arrange their top surgery privately, abroad — travelling to Istanbul, Turkey for their procedure with Dr. Serkan Dinar. Wherever you're travelling from, the process works the same way: an initial consultation over WhatsApp, a surgical plan agreed before you travel, and coordination support from arrival through recovery, as set out step by step above.",
    },
  },
  de: {
    metaTitle: "Patientenreise",
    metaDescription:
      "Was Sie als internationaler Patient erwartet — auch aus dem Vereinigten Königreich (UK) — von Ihrem ersten Beratungsgespräch bis zur Genesung.",
    intro: {
      eyebrow: "Patientenreise",
      heading: "Ein klarer Weg für Patienten aus dem Ausland",
    },
    stages: {
      eyebrow: "Die Reise, Schritt für Schritt",
      heading: "Was Sie erwartet — vom ersten Kontakt bis zur Genesung",
    },
    ukNote: {
      eyebrow: "Für Patienten aus dem UK",
      heading: "Anreise aus dem Vereinigten Königreich (UK)",
      body: "Ein Teil unserer Patienten kommt aus dem Vereinigten Königreich (UK) und entscheidet sich dafür, die Top-Surgery privat im Ausland durchführen zu lassen — mit der Anreise nach Istanbul, Türkei, für den Eingriff bei Dr. Serkan Dinar. Unabhängig davon, von wo aus Sie anreisen, läuft der Ablauf gleich: ein erstes Beratungsgespräch über WhatsApp, ein OP-Plan, der vor Ihrer Anreise gemeinsam festgelegt wird, und Begleitung von der Ankunft bis zur Genesung — wie oben Schritt für Schritt beschrieben.",
    },
  },
};
