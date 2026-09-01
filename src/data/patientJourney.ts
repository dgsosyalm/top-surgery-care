// Canonical Patient Journey content — the single source for the homepage
// preview (PatientJourney.tsx), the Top Surgery page's journey recap, and
// the dedicated /patient-journey page, so these steps are only ever written
// once. `body` is the short line already approved for the homepage/recap
// use; `detail` expands it for the dedicated page using only copy already
// approved elsewhere in the project (patientCoordination, doctorIntro,
// surgicalApproach) — no invented timelines, travel restrictions, hospital
// specifics, or guarantees.

export type PatientJourneyStep = {
  id: string;
  name: string;
  body: string;
  detail: string;
};

export const patientJourneySteps: readonly PatientJourneyStep[] = [
  {
    id: "prepare",
    name: "Prepare",
    body: "Consultation, medical history review, and a personalized surgical plan agreed before you travel.",
    detail:
      "Every plan starts with a consultation — your goals, your anatomy, and your questions. Your medical history is reviewed, and a surgical plan is decided individually, based on chest size, skin elasticity, and your desired result, not a fixed formula, and agreed with your surgeon before you travel.",
  },
  {
    id: "arrival",
    name: "Arrival & Coordination",
    body: "Airport transfer, accommodation, and medical treatment coordination once you land in Istanbul.",
    detail:
      "Neda Deniz International Medical Tourism and Travel Agency coordinates your stay from the moment you land in Istanbul — airport transfer, accommodation, medical treatment coordination, and guided city tours — before your surgical care begins.",
  },
  {
    id: "surgery",
    name: "Surgery",
    body: "Your procedure, hospital stay, and immediate post-operative care.",
    detail:
      "Your procedure, hospital stay, and immediate post-operative care, led by Dr. Serkan Dinar, a plastic, reconstructive, and aesthetic surgeon with more than 20 years of surgical experience.",
  },
  {
    id: "recover",
    name: "Recover",
    body: "Aftercare guidance and follow-up support as you heal, at home or before you travel back.",
    detail:
      "Aftercare guidance and follow-up support as you heal, at home or before you travel back — your care continues with your surgeon once the initial coordination is complete.",
  },
] as const;

// The homepage and Top Surgery page recap show a concise 3-step preview;
// the dedicated /patient-journey page shows the full set above.
export const patientJourneyPreviewIds = ["prepare", "surgery", "recover"] as const;

export const patientJourneyPreviewSteps = patientJourneySteps.filter((step) =>
  (patientJourneyPreviewIds as readonly string[]).includes(step.id),
);
