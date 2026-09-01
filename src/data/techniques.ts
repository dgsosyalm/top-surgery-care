// Single source of truth for surgical technique content — shown as a short
// preview grid on the homepage (src/components/sections/SurgicalApproach.tsx)
// and in full detail on /top-surgery (src/app/top-surgery/page.tsx).
// Update technique copy only here; neither consumer should hardcode its own.
//
// Only techniques explicitly verified for this project are listed.
// Augmentation is not currently used. Techniques seen only on unrelated
// reference sites (Inferior Ellipse, Buttonhole, Inverted-T, etc.) must not
// be added here without explicit client/doctor confirmation.

export type Technique = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  /** Short card-length summary — used on the homepage preview grid. */
  shortDescription: string;
  /** Fuller explanation for the /top-surgery detail section — expands on
   *  shortDescription using only the same already-approved facts, framed
   *  as "generally considered for," never as a universal recommendation. */
  detailedDescription: string;
  /** Shared factors patients and their surgeon weigh together — the same
   *  three factors already stated in the approved technique-selection note,
   *  not technique-specific contraindications or invented criteria. */
  considerations: string[];
};

export const techniques: Technique[] = [
  {
    id: "double-incision",
    name: "Double Incision",
    image: "/images/techniques/double-incision.png",
    imageAlt: "Double incision top surgery incision pattern marked on the chest",
    shortDescription:
      "The most common approach for larger chests, using two horizontal incisions to remove tissue and reposition the nipple-areola complex.",
    detailedDescription:
      "Double incision is the most common approach for larger chests. Two horizontal incisions are made across the chest, breast tissue is removed, and the nipple-areola complex is repositioned. It's generally considered when a chest is larger or has less skin elasticity, since it allows for a fuller reshaping than techniques that rely on the skin retracting on its own.",
    considerations: ["Chest size and shape", "Skin elasticity", "Your desired final contour"],
  },
  {
    id: "periareolar",
    name: "Periareolar",
    image: "/images/techniques/periareolar.png",
    imageAlt: "Periareolar top surgery incision marked around the areola",
    shortDescription:
      "A technique for smaller chests with good skin elasticity, working through an incision around the areola while the skin naturally retracts to a flatter contour.",
    detailedDescription:
      "Periareolar works through an incision around the areola. Because there's no separate incision across the chest, this approach depends on the skin naturally retracting afterward to create a flatter contour — which is why it's generally considered for smaller chests with good skin elasticity, rather than larger or less elastic ones.",
    considerations: ["Chest size and shape", "Skin elasticity", "Your desired final contour"],
  },
  {
    id: "keyhole",
    name: "Keyhole",
    image: "/images/techniques/keyhole.png",
    imageAlt: "Keyhole top surgery incision marked at the base of the areola",
    shortDescription:
      "A minimally invasive option for smaller chests, using a small incision at the base of the areola and liposuction to remove tissue while leaving the nipple largely intact.",
    detailedDescription:
      "Keyhole is a more minimally invasive option, using a small incision at the base of the areola combined with liposuction to remove tissue, while leaving the nipple largely intact. Because it doesn't involve repositioning or resizing the nipple-areola complex, it's generally considered for smaller chests where less tissue needs to be removed.",
    considerations: ["Chest size and shape", "Skin elasticity", "Your desired final contour"],
  },
];
