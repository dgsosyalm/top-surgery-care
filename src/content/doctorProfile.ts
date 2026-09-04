// Full "About Dr. Serkan Dinar" profile content — translated faithfully from
// CLIENT-DATA/doctor-profile.md, the approved source of truth. Nothing here
// should be added, embellished, or claimed beyond what that source states.
// The homepage "Your Surgeon" section (src/content/home.ts → doctorIntro)
// stays a short teaser; this is the full profile it links to.
//
// Translation policy for German: descriptive/marketing prose (biography,
// volunteer summary, CTA) is translated. Factual academic/professional
// records — institution names, publication and presentation titles,
// congress/course names, the thesis title — are kept verbatim in both
// locales, the same way the Google review quotes are: these are real
// published/attended records, not copy to localize, and inventing a German
// title for an English-language journal article would misrepresent it.

type EducationItem = { degree: string; institution: string };
type ExperienceItem = { place: string; role: string; period: string };
type PublicationItem = { title: string; venue?: string };

type DoctorProfileContent = {
  metaDescription: string;
  name: string;
  title: string;
  photoAlt: string;
  biography: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  expertise: string[];
  publications: { international: PublicationItem[]; national: PublicationItem[] };
  presentations: { international: string[]; national: string[] };
  thesis: string;
  congresses: string[];
  courses: string[];
  volunteer: { heading: string; body: string };
  cta: { heading: string; body: string; label: string; href: string };
  sections: {
    biography: string;
    education: string;
    experience: string;
    expertise: string;
    publications: string;
    publicationsInternational: string;
    publicationsNational: string;
    presentations: string;
    presentationsInternational: string;
    presentationsNational: string;
    thesis: string;
    congresses: string;
    courses: string;
    volunteer: string;
  };
};

// Real, published/attended records — identical in both locales (see policy
// note above).
const education: EducationItem[] = [
  { degree: "Plastic, Reconstructive and Aesthetic Surgery Specialization", institution: "Kocaeli University Faculty of Medicine" },
  { degree: "Doctor of Medicine", institution: "Dokuz Eylül University Faculty of Medicine" },
  { degree: "High School", institution: "İzmir Atatürk High School (İEL)" },
  { degree: "Foreign Language", institution: "English" },
];

const experiencePlacesAndPeriods = [
  { place: "Özel Fors Polikliniği", period: "2010 – Present" },
  { place: "Gayrettepe Florence Nightingale Hospital", period: "2008 – 2010" },
  { place: "Siirt State Hospital", period: "2007" },
  { place: "Elazığ Military Hospital", period: "2006" },
  { place: "Kocaeli University Faculty of Medicine Hospital", period: "1999 – 2005" },
] as const;

const publications = {
  international: [
    {
      title: "A New Material for Standard Burn Model: Allevyn Adhesive",
      venue: "Plastic and Reconstructive Surgery, Volume 117, Issue 2, February 2006",
    },
    {
      title: "A Simple and Effective Procedure for Treating Burn Contractures: Releasing Incision and Quadra Z Technique",
      venue: "Burns, 2006",
    },
    {
      title: "Effects of Hyperbaric Oxygen Therapy on Fibrovascular Ingrowth in Porous Polyethylene Blocks Implanted Under Burn Scar Tissue: An Experimental Study",
      venue: "Burns, 2007",
    },
  ],
  national: [
    {
      title: "Regional Anesthesia Applications in the 2005 Nakhchivan Interplast Activity",
      venue: undefined,
    },
  ],
} satisfies DoctorProfileContent["publications"];

const presentations = {
  international: [
    "Management of Burn Injuries Without a Burn Unit: Kocaeli Experience",
    "Lower Extremity Reconstruction Experience in 175 Patients",
    "A Modification of Incision Graft Technique for Burn Contractures",
  ],
  national: [
    "Necrotizing Fasciitis of the Scalp: Case Report",
    "Our Principles in Approaching Lower Extremity Wounds and Our Repair Preferences",
    "The Effect of Hyperbaric Oxygen Therapy on Fibrovascular Ingrowth in Porous Polyethylene Implants Placed Under Burn Scar in Rats",
  ],
} satisfies DoctorProfileContent["presentations"];

const thesis =
  "Investigation of the Effect on Fibrovascular Ingrowth in Porous Polyethylene Implanted Under Burn Scar in Rats";

const congresses: string[] = [
  "TPRECD Regional Meeting — Approach to Vascular Anomalies",
  "TPRECD Regional Meeting — Skin Tumors",
  "TPRECD Alloplastic Material Applications Symposium",
  "Secondary Interventions in Cleft Lip and Palate — Workshop and Panel",
  "25th TPRECD National Congress",
  "Obstetric Brachial Plexus Injuries Symposium",
  "Cerrahpaşa Plastic Surgery Days",
];

const courses: string[] = [
  "International Practical Course in Microsurgery of Vessels and Nerves",
  "Laboratory Animal Use and Ethics Course",
  "2nd Maxillofacial Surgery Workshop and Course",
  "Workshop Including Hands-on Training in Laser Liposuction",
];

export const doctorProfileContent: { en: DoctorProfileContent; de: DoctorProfileContent } = {
  en: {
    metaDescription:
      "Dr. Serkan Dinar is a plastic, reconstructive, and aesthetic surgeon with more than 20 years of surgical experience, education, and clinical publications.",
    name: "Dr. Serkan Dinar",
    title: "Plastic, Reconstructive and Aesthetic Surgery Specialist",
    photoAlt: "Dr. Serkan Dinar, plastic, reconstructive and aesthetic surgery specialist",
    biography: [
      "Dr. Serkan Dinar completed his medical degree at Dokuz Eylül University Faculty of Medicine before completing his specialization in Plastic, Reconstructive and Aesthetic Surgery at Kocaeli University Faculty of Medicine. With more than 20 years of experience in aesthetic and reconstructive surgery, he has worked throughout his career across public hospitals, university hospitals, and private healthcare institutions.",
      "His work has particularly focused on facial rejuvenation surgery, body contouring procedures, fat injection techniques, burn treatment, and reconstructive surgery. He has been treating patients at his own clinic since 2010.",
    ],
    education,
    experience: [
      { place: experiencePlacesAndPeriods[0].place, role: "Plastic Surgery Specialist and Clinic Owner", period: experiencePlacesAndPeriods[0].period },
      { place: experiencePlacesAndPeriods[1].place, role: "Plastic Surgery Specialist", period: experiencePlacesAndPeriods[1].period },
      { place: experiencePlacesAndPeriods[2].place, role: "Head of Plastic Surgery", period: experiencePlacesAndPeriods[2].period },
      { place: experiencePlacesAndPeriods[3].place, role: "Head of Plastic Surgery", period: experiencePlacesAndPeriods[3].period },
      { place: experiencePlacesAndPeriods[4].place, role: "General Surgery and Specialization Training", period: experiencePlacesAndPeriods[4].period },
    ],
    expertise: [
      "Face Lift Surgery",
      "BodyTite RF-Assisted Liposuction",
      "Fat Injection (Fat Transfer)",
      "Vitiligo Treatments",
      "Burn Treatments",
      "Burn Scars and Post-Burn Reconstruction",
      "Microskin Grafting",
      "Reconstructive Surgery Applications",
      "Aesthetic Facial and Body Surgery",
    ],
    publications,
    presentations,
    thesis,
    congresses,
    courses,
    volunteer: {
      heading: "Physicians for Peace – Interplast",
      body: "Contributed to the free surgical treatment of hundreds of patients with cleft lip and palate, congenital facial anomalies, and burn deformities during international relief missions conducted in Nakhchivan and Iğdır.",
    },
    cta: {
      heading: "Questions about your care team?",
      body: "Get in touch and we'll help you find the answers you need.",
      label: "Contact us",
      href: "/contact/",
    },
    sections: {
      biography: "Biography",
      education: "Education",
      experience: "Professional Experience",
      expertise: "Areas of Expertise",
      publications: "Scientific Publications",
      publicationsInternational: "International Peer-Reviewed Journal Articles",
      publicationsNational: "National Peer-Reviewed Journal Articles",
      presentations: "Scientific Presentations",
      presentationsInternational: "International Scientific Presentations",
      presentationsNational: "National Scientific Presentations",
      thesis: "Specialization Thesis",
      congresses: "Congresses and Scientific Meetings",
      courses: "International Courses and Training",
      volunteer: "International Social Responsibility and Volunteer Surgical Activities",
    },
  },
  de: {
    metaDescription:
      "Dr. Serkan Dinar ist Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie mit mehr als 20 Jahren chirurgischer Erfahrung, Ausbildung und wissenschaftlichen Publikationen.",
    name: "Dr. Serkan Dinar",
    title: "Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie",
    photoAlt: "Dr. Serkan Dinar, Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie",
    biography: [
      "Dr. Serkan Dinar schloss sein Medizinstudium an der Medizinischen Fakultät der Dokuz-Eylül-Universität ab, bevor er seine Facharztausbildung in Plastischer, Rekonstruktiver und Ästhetischer Chirurgie an der Medizinischen Fakultät der Kocaeli-Universität abschloss. Mit mehr als 20 Jahren Erfahrung in der ästhetischen und rekonstruktiven Chirurgie war er im Laufe seiner Karriere an öffentlichen Krankenhäusern, Universitätskliniken und privaten Gesundheitseinrichtungen tätig.",
      "Sein Schwerpunkt liegt insbesondere auf der Gesichtsverjüngung, Körperkonturierung, Fettinjektionstechniken, Verbrennungsbehandlung und rekonstruktiven Chirurgie. Seit 2010 behandelt er Patienten in seiner eigenen Praxis.",
    ],
    education,
    experience: [
      { place: experiencePlacesAndPeriods[0].place, role: "Facharzt für Plastische Chirurgie und Praxisinhaber", period: experiencePlacesAndPeriods[0].period },
      { place: experiencePlacesAndPeriods[1].place, role: "Facharzt für Plastische Chirurgie", period: experiencePlacesAndPeriods[1].period },
      { place: experiencePlacesAndPeriods[2].place, role: "Leiter der Plastischen Chirurgie", period: experiencePlacesAndPeriods[2].period },
      { place: experiencePlacesAndPeriods[3].place, role: "Leiter der Plastischen Chirurgie", period: experiencePlacesAndPeriods[3].period },
      { place: experiencePlacesAndPeriods[4].place, role: "Weiterbildung in Allgemeinchirurgie und Facharztausbildung", period: experiencePlacesAndPeriods[4].period },
    ],
    expertise: [
      "Facelift-Chirurgie",
      "BodyTite RF-unterstützte Liposuktion",
      "Fettinjektion (Fetttransfer)",
      "Vitiligo-Behandlungen",
      "Verbrennungsbehandlungen",
      "Verbrennungsnarben und Rekonstruktion nach Verbrennungen",
      "Microskin-Transplantation",
      "Rekonstruktive chirurgische Verfahren",
      "Ästhetische Gesichts- und Körperchirurgie",
    ],
    publications,
    presentations,
    thesis,
    congresses,
    courses,
    volunteer: {
      heading: "Physicians for Peace – Interplast",
      body: "Beteiligung an der kostenfreien chirurgischen Behandlung von hunderten Patienten mit Lippen-Kiefer-Gaumen-Spalten, angeborenen Gesichtsfehlbildungen und Verbrennungsdeformitäten im Rahmen internationaler Hilfseinsätze in Nachitschewan und Iğdır.",
    },
    cta: {
      heading: "Fragen zu Ihrem Behandlungsteam?",
      body: "Nehmen Sie Kontakt auf — wir helfen Ihnen, die Antworten zu finden, die Sie brauchen.",
      label: "Kontaktieren Sie uns",
      href: "/contact/",
    },
    sections: {
      biography: "Werdegang",
      education: "Ausbildung",
      experience: "Berufserfahrung",
      expertise: "Schwerpunkte",
      publications: "Wissenschaftliche Publikationen",
      publicationsInternational: "Internationale, begutachtete Fachartikel",
      publicationsNational: "Nationale, begutachtete Fachartikel",
      presentations: "Wissenschaftliche Vorträge",
      presentationsInternational: "Internationale wissenschaftliche Vorträge",
      presentationsNational: "Nationale wissenschaftliche Vorträge",
      thesis: "Facharztarbeit",
      congresses: "Kongresse und wissenschaftliche Tagungen",
      courses: "Internationale Kurse und Fortbildungen",
      volunteer: "Internationales soziales Engagement und ehrenamtliche chirurgische Einsätze",
    },
  },
};
