// English homepage copy, kept separate from markup so a matching `home.de.ts`
// can be added later without touching component structure.

export const homeContent = {
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

  // Step content lives in src/data/patientJourney.ts (shared with the
  // dedicated /patient-journey page and the Top Surgery page's recap) —
  // only the section framing stays here.
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
    // Confirmed listing: "Neda Deniz Health Tourism Agency" (İzmir, Türkiye).
    // Used as the fallback source link while the live Places API integration
    // (src/lib/googlePlaces.ts) has no API credentials configured yet.
    googleMapsUri: "https://maps.app.goo.gl/rDRAVYCZRbfR6KQc6?g_st=ic",
    // Manually transcribed, verbatim, from the confirmed Google Maps listing
    // above — provided directly by the client on 2026-08-23. No date or
    // avatar data was supplied for these, so those fields are intentionally
    // omitted rather than invented. The client confirmed on 2026-09-01 that
    // all three are 5-star Google reviews, so `rating: 5` below reflects
    // that confirmation, not an assumption. Remove this fallback once
    // GOOGLE_MAPS_API_KEY / GOOGLE_MAPS_PLACE_ID are configured and the live
    // integration in PatientStories.tsx returns real reviews instead.
    manualReviews: [
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
    ],
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
} as const;
