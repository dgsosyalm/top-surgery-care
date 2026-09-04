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

export const techniques: { en: Technique[]; de: Technique[] } = {
  en: [
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
  ],
  de: [
    {
      id: "double-incision",
      name: "Doppelinzision",
      image: "/images/techniques/double-incision.png",
      imageAlt: "Markierung des Schnittverlaufs der Doppelinzisionstechnik auf dem Brustkorb",
      shortDescription:
        "Die häufigste Methode für größere Brüste: Über zwei horizontale Schnitte wird Gewebe entfernt und der Brustwarzen-Warzenhof-Komplex neu positioniert.",
      detailedDescription:
        "Die Doppelinzisionstechnik ist die häufigste Methode für größere Brüste. Über zwei horizontale Schnitte im Brustbereich wird Brustgewebe entfernt und der Brustwarzen-Warzenhof-Komplex neu positioniert. Sie kommt in der Regel infrage, wenn der Brustkorb größer ist oder die Haut weniger elastisch ist, da sie eine umfassendere Neuformung ermöglicht als Techniken, die auf das natürliche Zurückziehen der Haut angewiesen sind.",
      considerations: ["Größe und Form des Brustkorbs", "Hautelastizität", "Ihre gewünschte Endkontur"],
    },
    {
      id: "periareolar",
      name: "Periareolär",
      image: "/images/techniques/periareolar.png",
      imageAlt: "Markierung des periareolären Schnittverlaufs um den Warzenhof",
      shortDescription:
        "Eine Technik für kleinere Brüste mit guter Hautelastizität: Über einen Schnitt um den Warzenhof zieht sich die Haut natürlich zu einer flacheren Kontur zurück.",
      detailedDescription:
        "Bei der periareolären Technik erfolgt der Zugang über einen Schnitt um den Warzenhof. Da kein separater Schnitt über den Brustkorb nötig ist, hängt diese Methode davon ab, dass sich die Haut anschließend von selbst zu einer flacheren Kontur zurückzieht — deshalb kommt sie in der Regel eher für kleinere Brüste mit guter Hautelastizität infrage als für größere oder weniger elastische.",
      considerations: ["Größe und Form des Brustkorbs", "Hautelastizität", "Ihre gewünschte Endkontur"],
    },
    {
      id: "keyhole",
      name: "Keyhole",
      image: "/images/techniques/keyhole.png",
      imageAlt: "Markierung des Keyhole-Schnittverlaufs an der Basis des Warzenhofs",
      shortDescription:
        "Eine minimalinvasive Option für kleinere Brüste: Über einen kleinen Schnitt an der Basis des Warzenhofs und Liposuktion wird Gewebe entfernt, die Brustwarze bleibt weitgehend intakt.",
      detailedDescription:
        "Keyhole ist eine minimalinvasivere Option: Über einen kleinen Schnitt an der Basis des Warzenhofs wird in Kombination mit Liposuktion Gewebe entfernt, während die Brustwarze weitgehend intakt bleibt. Da keine Neupositionierung oder Größenänderung des Brustwarzen-Warzenhof-Komplexes nötig ist, kommt diese Technik in der Regel für kleinere Brüste infrage, bei denen weniger Gewebe entfernt werden muss.",
      considerations: ["Größe und Form des Brustkorbs", "Hautelastizität", "Ihre gewünschte Endkontur"],
    },
  ],
};
