// Single source of truth for before/after result images — shown as a small
// preview composition on the homepage (src/components/sections/ResultsPreview.tsx)
// and in full on /results (src/app/results/page.tsx).
//
// Each file already contains a paired before/after composition in one
// image. Never split, crop apart, or recreate these — every consumer must
// render the file whole.

export type ResultImage = {
  id: string;
  src: string;
  alt: string;
};

export const results: ResultImage[] = [
  { id: "case-01", src: "/images/results/1.jpg", alt: "Top surgery before and after result — case 01" },
  { id: "case-02", src: "/images/results/2.jpg", alt: "Top surgery before and after result — case 02" },
  { id: "case-03", src: "/images/results/3.jpg", alt: "Top surgery before and after result — case 03" },
];
