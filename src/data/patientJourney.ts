// Canonical Patient Journey content — the single source for the homepage
// preview (PatientJourney.tsx), the Top Surgery page's journey recap, and
// the dedicated /patient-journey page, so these steps are only ever written
// once. `body` is the short line already approved for the homepage/recap
// use; `detail` expands it for the dedicated page using only copy already
// approved elsewhere in the project (patientCoordination, doctorIntro,
// surgicalApproach) — no invented timelines, travel restrictions, hospital
// specifics, or guarantees.

import type { Locale } from "@/i18n/config";

export type PatientJourneyStep = {
  id: string;
  name: string;
  body: string;
  detail: string;
};

const en: PatientJourneyStep[] = [
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
];

const de: PatientJourneyStep[] = [
  {
    id: "prepare",
    name: "Vorbereitung",
    body: "Beratungsgespräch, Überprüfung der Krankengeschichte und ein individueller OP-Plan, vereinbart vor Ihrer Anreise.",
    detail:
      "Jeder Plan beginnt mit einem Beratungsgespräch — Ihren Zielen, Ihrer Anatomie und Ihren Fragen. Ihre Krankengeschichte wird geprüft, und ein OP-Plan wird individuell festgelegt, anhand von Brustgröße, Hautelastizität und Ihrem gewünschten Ergebnis, nicht nach einem starren Schema, und vor Ihrer Anreise mit Ihrem Chirurgen abgestimmt.",
  },
  {
    id: "arrival",
    name: "Ankunft & Koordination",
    body: "Flughafentransfer, Unterkunft und Koordination der medizinischen Behandlung nach Ihrer Ankunft in Istanbul.",
    detail:
      "Die Neda Deniz International Medical Tourism and Travel Agency koordiniert Ihren Aufenthalt vom Moment Ihrer Ankunft in Istanbul an — Flughafentransfer, Unterkunft, Koordination der medizinischen Behandlung und begleitete Stadtrundgänge — bevor Ihre chirurgische Betreuung beginnt.",
  },
  {
    id: "surgery",
    name: "Operation",
    body: "Ihr Eingriff, der Krankenhausaufenthalt und die unmittelbare postoperative Betreuung.",
    detail:
      "Ihr Eingriff, der Krankenhausaufenthalt und die unmittelbare postoperative Betreuung, geleitet von Dr. Serkan Dinar, Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie mit mehr als 20 Jahren chirurgischer Erfahrung.",
  },
  {
    id: "recover",
    name: "Genesung",
    body: "Nachsorge und Begleitung während Ihrer Genesung, zu Hause oder vor Ihrer Rückreise.",
    detail:
      "Nachsorge und Begleitung während Ihrer Genesung, zu Hause oder vor Ihrer Rückreise — Ihre Betreuung wird bei Ihrem Chirurgen fortgesetzt, sobald die anfängliche Koordination abgeschlossen ist.",
  },
];

export const patientJourneySteps: { en: PatientJourneyStep[]; de: PatientJourneyStep[] } = { en, de };

// The homepage and Top Surgery page recap show a concise 3-step preview;
// the dedicated /patient-journey page shows the full set above.
export const patientJourneyPreviewIds = ["prepare", "surgery", "recover"] as const;

export function getPatientJourneyPreviewSteps(locale: Locale): PatientJourneyStep[] {
  return patientJourneySteps[locale].filter((step) =>
    (patientJourneyPreviewIds as readonly string[]).includes(step.id),
  );
}
