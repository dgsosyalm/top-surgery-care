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
  /** SEO-only title tag — kept separate from `name`/`title` below, which
   *  are the visible on-page heading/eyebrow and must stay exactly as the
   *  approved CV states them. */
  metaTitle: string;
  metaDescription: string;
  name: string;
  title: string;
  /** Shared portrait alt — also used by the homepage and /top-surgery. */
  photoAlt: string;
  /** Alt text for the portrait on this profile page only. */
  profilePhotoAlt: string;
  /** Lead paragraph under the H1. */
  intro: string;
  /** "FTM Top Surgery with Dr. Dinar" section, directly after the intro.
   *  Only restates facts already published elsewhere on the site
   *  (techniques, technique-selection factors, WhatsApp consultation, UK
   *  patients travelling to Istanbul) plus the client-confirmed fact that
   *  Dr. Dinar personally performs the operations. No numbers, rates,
   *  hospital names or credentials beyond the CV. */
  topSurgery: {
    heading: string;
    paragraphs: string[];
    links: { label: string; href: string }[];
  };
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
  /** Short sentence, rendered above the CTA, linking to /top-surgery. */
  topSurgeryNote: { prefix: string; linkLabel: string; suffix: string };
  /** Short sentence rendered under topSurgeryNote, linking to /top-surgery-turkey. */
  turkeyNote: { prefix: string; linkLabel: string; suffix: string };
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
    metaTitle: "Dr. Serkan Dinar – FTM Top Surgery Surgeon in Istanbul",
    metaDescription:
      "Dr. Serkan Dinar personally performs FTM top surgery in Istanbul, Turkey. Plastic surgeon with 20+ years of experience: education, background and surgical approach.",
    name: "Dr. Serkan Dinar",
    title: "Plastic, Reconstructive and Aesthetic Surgery Specialist",
    photoAlt: "Dr. Serkan Dinar, plastic, reconstructive and aesthetic surgery specialist",
    profilePhotoAlt: "Dr. Serkan Dinar, plastic surgeon performing FTM top surgery in Istanbul",
    intro:
      "Dr. Serkan Dinar is the plastic surgeon who personally performs FTM top surgery for Top Surgery Care patients in Istanbul, Turkey. Your surgical plan is agreed with him, and he carries out the operation himself.",
    topSurgery: {
      heading: "FTM Top Surgery with Dr. Dinar",
      paragraphs: [
        "Dr. Dinar performs FTM top surgery (chest masculinization) himself. Before any decision is made, your goals, medical history and chest anatomy are reviewed, and your surgical plan is agreed with him rather than picked from a menu or a fixed formula.",
        "Three techniques are available: Double Incision, Periareolar and Keyhole. Which one is considered depends on your chest size, skin elasticity and the result you want, and it is decided together with Dr. Dinar during your consultation.",
        "A number of his patients travel to Istanbul from abroad, including the UK. The process starts with an initial consultation over WhatsApp, and your plan is agreed before you travel.",
      ],
      links: [
        { label: "Read the FTM top surgery guide", href: "/top-surgery" },
        { label: "Compare top surgery techniques", href: "/top-surgery/techniques" },
        { label: "View before-and-after results (18+)", href: "/results" },
      ],
    },
    biography: [
      "Dr. Serkan Dinar completed his medical degree at Dokuz Eylül University Faculty of Medicine before completing his specialization in Plastic, Reconstructive and Aesthetic Surgery at Kocaeli University Faculty of Medicine. With more than 20 years of experience in aesthetic and reconstructive surgery, he has worked throughout his career across public hospitals, university hospitals, and private healthcare institutions.",
      "His work has particularly focused on facial rejuvenation surgery, body contouring procedures, fat injection techniques, burn treatment, and reconstructive surgery. He has been treating patients at his own clinic since 2010.",
      "Alongside this background in aesthetic and reconstructive surgery, Dr. Dinar performs FTM top surgery for patients of Top Surgery Care, including international patients who travel to Istanbul for their procedure.",
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
      "FTM Top Surgery (Chest Masculinization)",
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
      heading: "Considering top surgery with Dr. Dinar?",
      body: "Message us on WhatsApp or send a consultation request, and we'll help with your questions about the procedure, the techniques and travelling to Istanbul.",
      label: "Request a consultation",
      href: "/contact",
    },
    topSurgeryNote: {
      prefix: "Learn more about the",
      linkLabel: "FTM top surgery",
      suffix: " we provide.",
    },
    turkeyNote: {
      prefix: "International patients can also read about",
      linkLabel: "top surgery in Turkey",
      suffix: ".",
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
    metaTitle: "Dr. Serkan Dinar – Chirurg für FTM Top Surgery in Istanbul",
    metaDescription:
      "Dr. Serkan Dinar führt FTM-Top-Surgery in Istanbul, Türkei, persönlich durch. Plastischer Chirurg mit über 20 Jahren Erfahrung: Ausbildung, Werdegang und chirurgischer Ansatz.",
    name: "Dr. Serkan Dinar",
    title: "Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie",
    photoAlt: "Dr. Serkan Dinar, Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie",
    profilePhotoAlt: "Dr. Serkan Dinar, plastischer Chirurg für FTM-Top-Surgery in Istanbul",
    intro:
      "Dr. Serkan Dinar ist der plastische Chirurg, der die FTM-Top-Surgery für Patienten von Top Surgery Care in Istanbul, Türkei, persönlich durchführt. Ihr OP-Plan wird mit ihm abgestimmt, und er nimmt den Eingriff selbst vor.",
    topSurgery: {
      heading: "FTM Top Surgery bei Dr. Dinar",
      paragraphs: [
        "Dr. Dinar führt die FTM-Top-Surgery (Mastektomie zur Brustmaskulinisierung) selbst durch. Bevor eine Entscheidung fällt, werden Ihre Ziele, Ihre Krankengeschichte und Ihre Brustanatomie besprochen, und Ihr OP-Plan wird mit ihm abgestimmt — nicht aus einem Katalog oder nach einer festen Formel gewählt.",
        "Drei Techniken stehen zur Verfügung: Double Incision, Periareolar und Keyhole. Welche infrage kommt, hängt von Ihrer Brustgröße, Ihrer Hautelastizität und dem gewünschten Ergebnis ab und wird gemeinsam mit Dr. Dinar im Beratungsgespräch entschieden.",
        "Ein Teil seiner Patienten reist aus dem Ausland nach Istanbul, auch aus dem UK. Der Ablauf beginnt mit einem ersten Beratungsgespräch über WhatsApp, und Ihr Plan wird abgestimmt, bevor Sie anreisen.",
      ],
      links: [
        { label: "Den Leitfaden zur FTM Top Surgery lesen", href: "/top-surgery" },
        { label: "Top-Surgery-Techniken vergleichen", href: "/top-surgery/techniques" },
        { label: "Vorher-Nachher-Ergebnisse ansehen (18+)", href: "/results" },
      ],
    },
    biography: [
      "Dr. Serkan Dinar schloss sein Medizinstudium an der Medizinischen Fakultät der Dokuz-Eylül-Universität ab, bevor er seine Facharztausbildung in Plastischer, Rekonstruktiver und Ästhetischer Chirurgie an der Medizinischen Fakultät der Kocaeli-Universität abschloss. Mit mehr als 20 Jahren Erfahrung in der ästhetischen und rekonstruktiven Chirurgie war er im Laufe seiner Karriere an öffentlichen Krankenhäusern, Universitätskliniken und privaten Gesundheitseinrichtungen tätig.",
      "Sein Schwerpunkt liegt insbesondere auf der Gesichtsverjüngung, Körperkonturierung, Fettinjektionstechniken, Verbrennungsbehandlung und rekonstruktiven Chirurgie. Seit 2010 behandelt er Patienten in seiner eigenen Praxis.",
      "Neben diesem Hintergrund in der ästhetischen und rekonstruktiven Chirurgie führt Dr. Dinar die FTM-Top-Surgery für Patienten von Top Surgery Care durch, darunter internationale Patienten, die für ihren Eingriff nach Istanbul reisen.",
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
      "FTM-Top-Surgery (Brustmaskulinisierung)",
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
      heading: "Top Surgery bei Dr. Dinar in Erwägung?",
      body: "Schreiben Sie uns über WhatsApp oder senden Sie eine Beratungsanfrage — wir helfen Ihnen bei Fragen zum Eingriff, zu den Techniken und zur Anreise nach Istanbul.",
      label: "Beratung anfragen",
      href: "/contact",
    },
    topSurgeryNote: {
      prefix: "Erfahren Sie mehr über die von uns angebotene",
      linkLabel: "FTM Top Surgery",
      suffix: ".",
    },
    turkeyNote: {
      prefix: "Internationale Patienten finden weitere Informationen zur",
      linkLabel: "Top Surgery in der Türkei",
      suffix: ".",
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
