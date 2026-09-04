// Homepage copy, keyed by locale. Google review text
// (patientStories.manualReviews[].text/.authorName) is verbatim,
// client-approved quotes and is intentionally identical in both locales —
// never translate or paraphrase it.

type ManualReview = {
  id: string;
  authorName: string;
  isTranslated: boolean;
  rating: number;
  text: string;
};

type HomeContent = {
  hero: {
    badge: string;
    headlineLead: string;
    headlineMain: string;
    headlineTail: string;
    subtext: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    rotatingText: string;
  };
  patientCoordination: {
    eyebrow: string;
    heading: string;
    role: string;
    body: string;
    imagePendingLabel: string;
    supportItems: { name: string }[];
    transition: string;
  };
  doctorIntro: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: { label: string; href: string };
    portraitPendingLabel: string;
  };
  topSurgeryOverview: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: { label: string; href: string };
  };
  surgicalApproach: {
    eyebrow: string;
    heading: string;
    note: string;
    cta: { label: string; href: string };
    learnMoreLabel: string;
  };
  patientJourney: {
    eyebrow: string;
    heading: string;
    cta: { label: string; href: string };
  };
  affordableCare: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  videoStories: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  resultsPreview: {
    heading: string;
  };
  patientStories: {
    eyebrow: string;
    heading: string;
    body: string;
    sourceLinkLabel: string;
    moreReviewsLabel: string;
    attributionNote: string;
    translatedNote: string;
    pendingHeading: string;
    pendingBody: string;
    googleMapsUri: string;
    manualReviews: ManualReview[];
  };
  faqPreview: {
    eyebrow: string;
    heading: string;
    cta: { label: string; href: string };
  };
  finalCta: {
    eyebrow: string;
    heading: string;
    body: string;
  };
};

// Reused verbatim in both locales — real, client-approved Google review
// quotes. Never translate or edit these.
const manualReviews: ManualReview[] = [
  {
    id: "manual-kaster-shepherd",
    authorName: "Kaster Shepherd",
    isTranslated: false,
    rating: 5,
    text: "Highly recommend going to this clinic as they’re super helpful about everything and anything, as well as being well looked after before and after the surgery. Dr Serkan was very nice and helpful, never making me feel nervous and anxious while the agency translator Miss S was great at keeping the vibes up and flowing around the surgery and being overall a calming presence. Could not recommend further",
  },
  {
    id: "manual-matty-roman-bodhi-ash-quane",
    authorName: "Matty Roman Bodhi Ash Quane",
    isTranslated: false,
    rating: 5,
    text: "I had my top surgery done on 4th May 2026 and I have to say that it was the best experience I’ve ever had. Everything on surgery morning from the moment I got to the hospital was very fast but very well explained to me. The staff at the hospital were amazing too. Very friendly spoke good English and checked on me multiple times throughout my 1 night stay at the hospital. Neda has been great from pre surgery info and after surgery answering and questions I have. I would very much recommend having top surgery in turkey.",
  },
  {
    id: "manual-xavier-zacny",
    authorName: "Xavier Zacny",
    isTranslated: false,
    rating: 5,
    text: "absolutely amazing team from start to finish. i’d never had surgery before and was so nervous, especially to have it abroad, but everybody was so helpful and calmed me down so quickly. Miss S, the translator, was so light hearted and kind with a great sense of humour which made everything so easy. Dr Serkan is absolutely incredible and has amazing results, i can’t recommend enough!! the price is so cheap, it feels like it should be too good to be true, but it really isn’t! from the moment i arrived in istanbul i was taken great care of and that lasted until i left. they even have a whatsapp group chat you can join to ask loads of questions if you’re still hesitant with people who’ve had the surgery, so don’t hesitate!! they are the best!!!! thank you to the great team☺️🥳",
  },
];

// Confirmed listing: "Neda Deniz Health Tourism Agency" (İzmir, Türkiye).
// Used as the fallback source link while the live Places API integration
// (src/lib/googlePlaces.ts) has no API credentials configured yet.
const googleMapsUri = "https://maps.app.goo.gl/rDRAVYCZRbfR6KQc6?g_st=ic";

export const homeContent: { en: HomeContent; de: HomeContent } = {
  en: {
    hero: {
      badge: "TOP SURGERY CARE · INTERNATIONAL",
      headlineLead: "Top Surgery.",
      headlineMain: "Made",
      headlineTail: "personal.",
      subtext: "A focused FTM top surgery experience for international patients.",
      ctaPrimary: { label: "Explore Top Surgery", href: "/top-surgery" },
      ctaSecondary: { label: "Start Your Journey", href: "/patient-journey/" },
      rotatingText: "TOP SURGERY CARE · TOP SURGERY CARE · TOP SURGERY CARE · ",
    },
    patientCoordination: {
      eyebrow: "Your Journey Starts Here",
      heading: "Neda Deniz",
      role: "Founder · Neda Deniz International Medical Tourism and Travel Agency",
      body: "Neda Deniz International Medical Tourism and Travel Agency introduces the person who welcomes international patients from the moment they land in Istanbul. Its founder, Neda Deniz, holds the title of sworn translator certified by a notary, and in line with the company's policy, provides consultancy to guests throughout their stay in Istanbul.",
      imagePendingLabel: "Portrait — pending",
      supportItems: [
        { name: "Airport Transfer" },
        { name: "Accommodation" },
        { name: "Medical Treatment Coordination" },
        { name: "Guided City Tours" },
      ],
      transition: "Once the journey is coordinated, your surgical care continues with your surgeon.",
    },
    doctorIntro: {
      eyebrow: "Your Surgeon",
      heading: "Dr. Serkan Dinar",
      body: "Dr. Serkan Dinar is a plastic, reconstructive, and aesthetic surgeon with more than 20 years of surgical experience. He completed his medical degree at Dokuz Eylül University Faculty of Medicine before specializing in Plastic, Reconstructive and Aesthetic Surgery at Kocaeli University Faculty of Medicine, and has contributed to international peer-reviewed research throughout his career.",
      cta: { label: "Meet Dr. Dinar", href: "/about-dr-serkan-dinar/" },
      portraitPendingLabel: "Doctor portrait — pending",
    },
    topSurgeryOverview: {
      eyebrow: "The Procedure",
      heading: "What FTM top surgery involves",
      body: "Top surgery reshapes the chest by removing breast tissue and contouring the chest wall for a flatter, more masculine profile. It's one of the most common gender-affirming procedures for transgender men and non-binary people, and the right technique depends on your anatomy and goals.",
      cta: { label: "Read the full Top Surgery guide", href: "/top-surgery" },
    },
    surgicalApproach: {
      eyebrow: "Technique",
      heading: "Finding the right approach for your chest",
      note: "Your surgical plan is decided individually, based on chest size, skin elasticity, and your desired result — not a fixed formula.",
      cta: { label: "View all techniques", href: "/top-surgery" },
      learnMoreLabel: "Learn more",
    },
    patientJourney: {
      eyebrow: "Patient Journey",
      heading: "A clear path for patients travelling from abroad",
      cta: { label: "Explore the Journey", href: "/patient-journey/" },
    },
    affordableCare: {
      eyebrow: "Top Surgery Abroad",
      heading: "Affordable Top Surgery for International Patients",
      body: "A tailored approach to FTM top surgery, with clear guidance and support throughout your international patient journey.",
    },
    videoStories: {
      eyebrow: "In Motion",
      heading: "A Closer Look",
      body: "A few moments from the Top Surgery Care experience, in motion.",
    },
    resultsPreview: {
      heading: "Results",
    },
    patientStories: {
      eyebrow: "Reviews",
      heading: "Patient Stories",
      body: "Real experiences shared through Google.",
      sourceLinkLabel: "View on Google Maps",
      moreReviewsLabel: "Read more reviews on Google Maps",
      attributionNote: "Reviews are sourced directly from Google Maps and belong to their original authors.",
      translatedNote: "Translated by Google.",
      pendingHeading: "Patient reviews are being connected",
      pendingBody: "This section will show genuine reviews from our official Google Maps listing once that connection is configured — not before.",
      googleMapsUri,
      manualReviews,
    },
    faqPreview: {
      eyebrow: "Questions",
      heading: "Frequently asked questions",
      cta: { label: "See all FAQs", href: "/faq" },
    },
    finalCta: {
      eyebrow: "Get in Touch",
      heading: "Start with a consultation, not a commitment",
      body: "Message us on WhatsApp or send a consultation request. Every plan starts with your goals, your anatomy, and your questions.",
    },
  },
  de: {
    hero: {
      badge: "TOP SURGERY CARE · INTERNATIONAL",
      headlineLead: "Top Surgery.",
      headlineMain: "Ganz",
      headlineTail: "persönlich.",
      subtext: "Eine auf Sie zugeschnittene FTM-Top-Surgery für internationale Patienten.",
      ctaPrimary: { label: "Top Surgery entdecken", href: "/top-surgery" },
      ctaSecondary: { label: "Ihre Reise beginnen", href: "/patient-journey/" },
      rotatingText: "TOP SURGERY CARE · TOP SURGERY CARE · TOP SURGERY CARE · ",
    },
    patientCoordination: {
      eyebrow: "Hier beginnt Ihre Reise",
      heading: "Neda Deniz",
      role: "Gründerin · Neda Deniz International Medical Tourism and Travel Agency",
      body: "Die Neda Deniz International Medical Tourism and Travel Agency stellt die Person vor, die internationale Patienten vom Moment ihrer Ankunft in Istanbul an begleitet. Gründerin Neda Deniz ist notariell vereidigte Übersetzerin und berät Gäste gemäß den Grundsätzen des Unternehmens während ihres gesamten Aufenthalts in Istanbul.",
      imagePendingLabel: "Porträt — folgt in Kürze",
      supportItems: [
        { name: "Flughafentransfer" },
        { name: "Unterkunft" },
        { name: "Koordination der medizinischen Behandlung" },
        { name: "Begleitete Stadtrundgänge" },
      ],
      transition: "Sobald Ihre Reise organisiert ist, setzt sich Ihre chirurgische Betreuung bei Ihrem Chirurgen fort.",
    },
    doctorIntro: {
      eyebrow: "Ihr Chirurg",
      heading: "Dr. Serkan Dinar",
      body: "Dr. Serkan Dinar ist Facharzt für Plastische, Rekonstruktive und Ästhetische Chirurgie mit mehr als 20 Jahren chirurgischer Erfahrung. Er schloss sein Medizinstudium an der Medizinischen Fakultät der Dokuz-Eylül-Universität ab, bevor er sich an der Medizinischen Fakultät der Kocaeli-Universität auf Plastische, Rekonstruktive und Ästhetische Chirurgie spezialisierte, und hat im Laufe seiner Karriere zu international begutachteter Forschung beigetragen.",
      cta: { label: "Dr. Dinar kennenlernen", href: "/about-dr-serkan-dinar/" },
      portraitPendingLabel: "Porträt des Arztes — folgt in Kürze",
    },
    topSurgeryOverview: {
      eyebrow: "Der Eingriff",
      heading: "Was eine FTM-Top-Surgery beinhaltet",
      body: "Bei der Top-Surgery wird der Brustkorb neu geformt: Brustgewebe wird entfernt und die Brustkontur für ein flacheres, männlicheres Profil modelliert. Sie zählt zu den häufigsten geschlechtsangleichenden Eingriffen für trans Männer und nicht-binäre Personen — die passende Technik richtet sich nach Ihrer Anatomie und Ihren Zielen.",
      cta: { label: "Den vollständigen Top-Surgery-Ratgeber lesen", href: "/top-surgery" },
    },
    surgicalApproach: {
      eyebrow: "Technik",
      heading: "Die richtige Methode für Ihren Brustkorb finden",
      note: "Ihr OP-Plan wird individuell festgelegt — anhand von Brustgröße, Hautelastizität und Ihrem gewünschten Ergebnis, nicht nach einem starren Schema.",
      cta: { label: "Alle Techniken ansehen", href: "/top-surgery" },
      learnMoreLabel: "Mehr erfahren",
    },
    patientJourney: {
      eyebrow: "Patientenreise",
      heading: "Ein klarer Weg für Patienten aus dem Ausland",
      cta: { label: "Die Reise entdecken", href: "/patient-journey/" },
    },
    affordableCare: {
      eyebrow: "Top Surgery im Ausland",
      heading: "Erschwingliche Top Surgery für internationale Patienten",
      body: "Ein auf Sie zugeschnittener Ansatz für die FTM-Top-Surgery, mit klarer Orientierung und Unterstützung während Ihrer gesamten Reise als internationaler Patient.",
    },
    videoStories: {
      eyebrow: "In Bewegung",
      heading: "Ein näherer Blick",
      body: "Ein paar Momente aus dem Alltag von Top Surgery Care, in Bewegtbild.",
    },
    resultsPreview: {
      heading: "Ergebnisse",
    },
    patientStories: {
      eyebrow: "Bewertungen",
      heading: "Erfahrungsberichte",
      body: "Echte Erfahrungen, geteilt über Google.",
      sourceLinkLabel: "Auf Google Maps ansehen",
      moreReviewsLabel: "Weitere Bewertungen auf Google Maps lesen",
      attributionNote: "Die Bewertungen stammen direkt von Google Maps und gehören ihren jeweiligen Verfasserinnen und Verfassern.",
      translatedNote: "Von Google übersetzt.",
      pendingHeading: "Patientenbewertungen werden eingebunden",
      pendingBody: "Dieser Bereich zeigt echte Bewertungen aus unserem offiziellen Google-Maps-Eintrag, sobald diese Verbindung eingerichtet ist — nicht früher.",
      googleMapsUri,
      manualReviews,
    },
    faqPreview: {
      eyebrow: "Fragen",
      heading: "Häufig gestellte Fragen",
      cta: { label: "Alle FAQs ansehen", href: "/faq" },
    },
    finalCta: {
      eyebrow: "Kontakt aufnehmen",
      heading: "Beginnen Sie mit einem Beratungsgespräch — unverbindlich",
      body: "Schreiben Sie uns auf WhatsApp oder senden Sie eine Anfrage für ein Beratungsgespräch. Jeder Plan beginnt mit Ihren Zielen, Ihrer Anatomie und Ihren Fragen.",
    },
  },
};
