// Single source of truth for FAQ content — shown as a short preview on the
// homepage (src/components/sections/FaqPreview.tsx) and in full on /faq
// (src/app/faq/page.tsx). Update questions/answers only here; neither
// consumer should ever hardcode its own copy of these.

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: { en: FaqItem[]; de: FaqItem[] } = {
  en: [
    {
      question: "What is FTM top surgery?",
      answer:
        "FTM top surgery (chest masculinization surgery) removes breast tissue and reshapes the chest to create a flatter, more masculine contour. It's one of the most common gender-affirming procedures for transgender men and non-binary patients.",
    },
    {
      question: "What techniques are available?",
      answer:
        "The two most common approaches are Double Incision and Periareolar (Keyhole) surgery. Which one fits you best depends on chest size, skin elasticity, and your desired outcome — this is covered in detail during your consultation.",
    },
    {
      question: "Is top surgery available if I'm non-binary?",
      answer:
        "Yes. Chest masculinization surgery is available to transgender men and non-binary patients seeking a flatter chest contour, not only those who identify strictly as male.",
    },
    {
      question: "Do you see patients travelling from abroad?",
      answer:
        "Yes — Top Surgery Care is built around international patients. Our Patient Journey page walks through what to prepare before you travel, what to expect around surgery, and how recovery is supported afterward.",
    },
    {
      question: "What happens during my first consultation?",
      answer:
        "We review your goals, medical history, and chest anatomy together, so your surgical plan is built around you rather than a standard package.",
    },
  ],
  de: [
    {
      question: "Was ist eine FTM-Top-Surgery?",
      answer:
        "Bei der FTM-Top-Surgery (brustmaskulinisierende Operation) wird Brustgewebe entfernt und der Brustkorb neu geformt, um eine flachere, männlichere Kontur zu schaffen. Sie zählt zu den häufigsten geschlechtsangleichenden Eingriffen für trans Männer und nicht-binäre Patienten.",
    },
    {
      question: "Welche Techniken stehen zur Verfügung?",
      answer:
        "Die zwei gängigsten Verfahren sind die Doppelinzisionstechnik und die periareoläre (Keyhole-)Operation. Welche für Sie geeignet ist, hängt von Brustgröße, Hautelastizität und Ihrem gewünschten Ergebnis ab — dies wird im Detail während Ihres Beratungsgesprächs besprochen.",
    },
    {
      question: "Ist Top Surgery auch möglich, wenn ich nicht-binär bin?",
      answer:
        "Ja. Die brustmaskulinisierende Operation steht trans Männern und nicht-binären Patienten offen, die eine flachere Brustkontur wünschen — nicht nur jenen, die sich ausschließlich als männlich identifizieren.",
    },
    {
      question: "Betreuen Sie auch Patienten, die aus dem Ausland anreisen?",
      answer:
        "Ja — Top Surgery Care ist ganz auf internationale Patienten ausgerichtet. Unsere Seite zur Patientenreise führt Sie durch die Vorbereitung vor der Reise, den Ablauf rund um die Operation und die Unterstützung bei der Genesung danach.",
    },
    {
      question: "Was passiert bei meinem ersten Beratungsgespräch?",
      answer:
        "Wir besprechen gemeinsam Ihre Ziele, Ihre Krankengeschichte und die Anatomie Ihres Brustkorbs, damit Ihr OP-Plan individuell auf Sie zugeschnitten wird und kein Standardpaket ist.",
    },
  ],
};
