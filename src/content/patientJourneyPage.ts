// Copy specific to /patient-journey that isn't already shared elsewhere.
// The step content itself lives in src/data/patientJourney.ts (shared with
// the homepage preview and the Top Surgery page's recap) — this file only
// holds the page framing text that's genuinely new to this page.

export const patientJourneyPageContent = {
  intro: {
    eyebrow: "Patient Journey",
    heading: "A clear path for patients travelling from abroad",
  },
  stages: {
    eyebrow: "The Journey, Step by Step",
    heading: "What to expect, from first contact to recovery",
  },
} as const;
