// Copy specific to /patient-journey that isn't already shared elsewhere,
// plus this page's metadata. The step content itself lives in
// src/data/patientJourney.ts (shared with the homepage preview and the
// Top Surgery page's recap).

type PatientJourneyPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: { eyebrow: string; heading: string };
  stages: { eyebrow: string; heading: string };
};

export const patientJourneyPageContent: { en: PatientJourneyPageContent; de: PatientJourneyPageContent } = {
  en: {
    metaTitle: "Patient Journey",
    metaDescription:
      "What to expect as an international patient at Top Surgery Care, from your first consultation through arrival, surgery, and recovery.",
    intro: {
      eyebrow: "Patient Journey",
      heading: "A clear path for patients travelling from abroad",
    },
    stages: {
      eyebrow: "The Journey, Step by Step",
      heading: "What to expect, from first contact to recovery",
    },
  },
  de: {
    metaTitle: "Patientenreise",
    metaDescription:
      "Was Sie als internationaler Patient bei Top Surgery Care erwartet — von Ihrem ersten Beratungsgespräch über die Ankunft und die Operation bis zur Genesung.",
    intro: {
      eyebrow: "Patientenreise",
      heading: "Ein klarer Weg für Patienten aus dem Ausland",
    },
    stages: {
      eyebrow: "Die Reise, Schritt für Schritt",
      heading: "Was Sie erwartet — vom ersten Kontakt bis zur Genesung",
    },
  },
};
