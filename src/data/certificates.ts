// Single source of truth for the footer's authorization certificate images.
// These are official client-provided documents — never crop, recolor, or
// otherwise alter the files themselves. File paths/dimensions are identical
// across locales — only the alt text is translated.

export type CertificateImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const certificates: { en: CertificateImage[]; de: CertificateImage[] } = {
  en: [
    {
      id: "certificate-1",
      src: "/images/certificates/yetki1.jpeg",
      alt: "Top Surgery Care authorization certificate 1",
      width: 2048,
      height: 1430,
    },
    {
      id: "certificate-2",
      src: "/images/certificates/yetki2.jpeg",
      alt: "Top Surgery Care authorization certificate 2",
      width: 1320,
      height: 1737,
    },
  ],
  de: [
    {
      id: "certificate-1",
      src: "/images/certificates/yetki1.jpeg",
      alt: "Zulassungszertifikat von Top Surgery Care 1",
      width: 2048,
      height: 1430,
    },
    {
      id: "certificate-2",
      src: "/images/certificates/yetki2.jpeg",
      alt: "Zulassungszertifikat von Top Surgery Care 2",
      width: 1320,
      height: 1737,
    },
  ],
};
