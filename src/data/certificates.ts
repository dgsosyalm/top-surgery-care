// Single source of truth for the footer's authorization certificate images.
// These are official client-provided documents — never crop, recolor, or
// otherwise alter the files themselves.

export type CertificateImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const certificates: CertificateImage[] = [
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
];
