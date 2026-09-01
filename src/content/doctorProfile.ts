// Full "About Dr. Serkan Dinar" profile content — translated faithfully from
// CLIENT-DATA/doctor-profile.md, the approved source of truth. Nothing here
// should be added, embellished, or claimed beyond what that source states.
// The homepage "Your Surgeon" section (src/content/home.ts → doctorIntro)
// stays a short teaser; this is the full profile it links to.

export const doctorProfileContent = {
  name: "Dr. Serkan Dinar",
  title: "Plastic, Reconstructive and Aesthetic Surgery Specialist",
  photoAlt: "Dr. Serkan Dinar, plastic, reconstructive and aesthetic surgery specialist",

  biography: [
    "Dr. Serkan Dinar completed his medical degree at Dokuz Eylül University Faculty of Medicine before completing his specialization in Plastic, Reconstructive and Aesthetic Surgery at Kocaeli University Faculty of Medicine. With more than 20 years of experience in aesthetic and reconstructive surgery, he has worked throughout his career across public hospitals, university hospitals, and private healthcare institutions.",
    "His work has particularly focused on facial rejuvenation surgery, body contouring procedures, fat injection techniques, burn treatment, and reconstructive surgery. He has been treating patients at his own clinic since 2010.",
  ],

  education: [
    { degree: "Plastic, Reconstructive and Aesthetic Surgery Specialization", institution: "Kocaeli University Faculty of Medicine" },
    { degree: "Doctor of Medicine", institution: "Dokuz Eylül University Faculty of Medicine" },
    { degree: "High School", institution: "İzmir Atatürk High School (İEL)" },
    { degree: "Foreign Language", institution: "English" },
  ],

  experience: [
    { place: "Özel Fors Polikliniği", role: "Plastic Surgery Specialist and Clinic Owner", period: "2010 – Present" },
    { place: "Gayrettepe Florence Nightingale Hospital", role: "Plastic Surgery Specialist", period: "2008 – 2010" },
    { place: "Siirt State Hospital", role: "Head of Plastic Surgery", period: "2007" },
    { place: "Elazığ Military Hospital", role: "Head of Plastic Surgery", period: "2006" },
    { place: "Kocaeli University Faculty of Medicine Hospital", role: "General Surgery and Specialization Training", period: "1999 – 2005" },
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

  publications: {
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
  },

  presentations: {
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
  },

  thesis: "Investigation of the Effect on Fibrovascular Ingrowth in Porous Polyethylene Implanted Under Burn Scar in Rats",

  congresses: [
    "TPRECD Regional Meeting — Approach to Vascular Anomalies",
    "TPRECD Regional Meeting — Skin Tumors",
    "TPRECD Alloplastic Material Applications Symposium",
    "Secondary Interventions in Cleft Lip and Palate — Workshop and Panel",
    "25th TPRECD National Congress",
    "Obstetric Brachial Plexus Injuries Symposium",
    "Cerrahpaşa Plastic Surgery Days",
  ],

  courses: [
    "International Practical Course in Microsurgery of Vessels and Nerves",
    "Laboratory Animal Use and Ethics Course",
    "2nd Maxillofacial Surgery Workshop and Course",
    "Workshop Including Hands-on Training in Laser Liposuction",
  ],

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
} as const;
