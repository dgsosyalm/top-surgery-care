// Single source of truth for FAQ content — shown as a short preview on the
// homepage (src/components/sections/FaqPreview.tsx) and in full on /faq
// (src/app/faq/page.tsx). Update questions/answers only here; neither
// consumer should ever hardcode its own copy of these.

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
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
];
