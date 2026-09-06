// Single source of truth for before/after result images — shown as a small
// preview composition on the homepage (src/components/sections/ResultsPreview.tsx)
// and in full on /results (src/app/results/page.tsx).
//
// Each file already contains a paired before/after composition in one
// image. Never split, crop apart, or recreate these — every consumer must
// render the file whole. Image order and file paths are identical across
// locales — only the alt text is translated.

export type ResultImage = {
  id: string;
  src: string;
  alt: string;
};

export const results: { en: ResultImage[]; de: ResultImage[] } = {
  en: [
    { id: "case-01", src: "/images/results/1.jpg", alt: "Top surgery before and after result — case 01" },
    { id: "case-02", src: "/images/results/2.jpg", alt: "Top surgery before and after result — case 02" },
    { id: "case-03", src: "/images/results/3.jpg", alt: "Top surgery before and after result — case 03" },
    { id: "case-04", src: "/images/results/4.jpg", alt: "Top surgery before and after result — case 04" },
    { id: "case-05", src: "/images/results/5.jpg", alt: "Top surgery before and after result — case 05" },
    { id: "case-06", src: "/images/results/6.jpg", alt: "Top surgery before and after result — case 06" },
    { id: "case-07", src: "/images/results/7.jpg", alt: "Top surgery before and after result — case 07" },
    { id: "case-08", src: "/images/results/8.jpg", alt: "Top surgery before and after result — case 08" },
    { id: "case-09", src: "/images/results/9.jpg", alt: "Top surgery before and after result — case 09" },
    { id: "case-10", src: "/images/results/10.jpg", alt: "Top surgery before and after result — case 10" },
  ],
  de: [
    { id: "case-01", src: "/images/results/1.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 01" },
    { id: "case-02", src: "/images/results/2.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 02" },
    { id: "case-03", src: "/images/results/3.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 03" },
    { id: "case-04", src: "/images/results/4.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 04" },
    { id: "case-05", src: "/images/results/5.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 05" },
    { id: "case-06", src: "/images/results/6.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 06" },
    { id: "case-07", src: "/images/results/7.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 07" },
    { id: "case-08", src: "/images/results/8.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 08" },
    { id: "case-09", src: "/images/results/9.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 09" },
    { id: "case-10", src: "/images/results/10.jpg", alt: "Top Surgery Vorher-Nachher-Ergebnis — Fall 10" },
  ],
};
