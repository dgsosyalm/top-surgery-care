// Copy specific to /top-surgery/techniques, plus this page's metadata.
//
// Every statement here is re-organised from technique facts that are
// already approved and published in src/data/techniques.ts and on
// /top-surgery (where each incision sits, what happens to the
// nipple-areola complex, what each technique is "generally considered
// for", and the three shared selection factors). Nothing new is claimed:
// no outcomes, recovery times, scarring, risks, suitability rules,
// comparisons of "better/worse", prices, or hospital/clinic names. The
// technique names, images and the three shared consideration factors are
// pulled from src/data/techniques.ts at render time in
// src/app/top-surgery/techniques/page.tsx instead of being duplicated here.

type LinkSentence = { prefix: string; linkLabel: string; suffix: string };

export type TechniqueId = "double-incision" | "periareolar" | "keyhole";

type TechniqueDetail = {
  heading: string;
  body: string[];
  /** Short "at a glance" rows — each value restates an approved fact. */
  facts: { label: string; value: string }[];
};

type TopSurgeryTechniquesPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: { eyebrow: string; heading: string; lead: string };
  onThisPage: {
    label: string;
    items: { href: string; label: string }[];
  };
  introduction: {
    eyebrow: string;
    heading: string;
    body: string;
    /** Second paragraph, with a link to /top-surgery. */
    overviewNote: LinkSentence;
  };
  factsLabel: string;
  details: Record<TechniqueId, TechniqueDetail>;
  compare: {
    eyebrow: string;
    heading: string;
    description: string;
    caption: string;
    featureLabel: string;
    doubleIncisionLabel: string;
    keyholeLabel: string;
    rows: { label: string; doubleIncision: string; keyhole: string }[];
    note: string;
  };
  selection: {
    eyebrow: string;
    heading: string;
    description: string;
    /** Rendered around a link to /about-dr-serkan-dinar. */
    doctorNote: LinkSentence;
    factorsLabel: string;
    abroadNote: string;
    journeyNote: LinkSentence;
    turkeyNote: LinkSentence;
    consultationCtaLabel: string;
  };
};

export const topSurgeryTechniquesPageContent: {
  en: TopSurgeryTechniquesPageContent;
  de: TopSurgeryTechniquesPageContent;
} = {
  en: {
    metaTitle: "Top Surgery Techniques: Double Incision vs Keyhole",
    metaDescription:
      "Compare the top surgery techniques we work with: double incision, periareolar and keyhole. How each works, and how the right approach is chosen for you.",
    intro: {
      eyebrow: "Surgical Techniques",
      heading: "Top Surgery Techniques",
      lead: "Double incision, periareolar and keyhole: how each technique works, when it's generally considered, and how the right one is chosen for you.",
    },
    onThisPage: {
      label: "On this page",
      items: [
        { href: "#double-incision", label: "Double incision" },
        { href: "#periareolar", label: "Periareolar" },
        { href: "#keyhole", label: "Keyhole" },
        { href: "#double-incision-vs-keyhole", label: "Double incision vs keyhole" },
        { href: "#choosing-a-technique", label: "Choosing a technique" },
      ],
    },
    introduction: {
      eyebrow: "Introduction",
      heading: "There isn't one top surgery technique that suits everyone",
      body: "Top surgery reshapes the chest by removing breast tissue for a flatter, more masculine contour, and there is more than one way to do it. At Top Surgery Care we work with three techniques: double incision, periareolar and keyhole. They differ mainly in where the incisions are placed and in how the chest is reshaped.",
      overviewNote: {
        prefix:
          "This page explains each technique in turn, compares double incision with keyhole side by side, and describes how the choice is made. For the wider picture, see our guide to",
        linkLabel: "FTM top surgery",
        suffix: ".",
      },
    },
    factsLabel: "At a glance",
    details: {
      "double-incision": {
        heading: "Double incision top surgery",
        body: [
          "Double incision is the most common approach for larger chests. Two horizontal incisions are made across the chest, through which breast tissue is removed and the chest is reshaped, and the nipple-areola complex is repositioned.",
          "Because the final contour doesn't depend on the skin retracting on its own, this technique allows a fuller reshaping than those that do. That's why it's generally considered where a chest is larger or skin elasticity is lower.",
        ],
        facts: [
          { label: "Incisions", value: "Two horizontal incisions across the chest" },
          { label: "Nipple-areola complex", value: "Repositioned" },
          { label: "Generally considered for", value: "Larger chests, or chests with less skin elasticity" },
        ],
      },
      periareolar: {
        heading: "Periareolar top surgery",
        body: [
          "Periareolar surgery is performed through an incision around the areola, with no separate incision across the chest.",
          "Without that second incision, the flatter contour comes from the skin retracting naturally afterwards. Skin elasticity therefore plays an especially important part in whether this technique is considered: it's generally considered for smaller chests with good skin elasticity rather than for larger or less elastic ones.",
        ],
        facts: [
          { label: "Incision", value: "An incision around the areola" },
          { label: "Contour", value: "Depends on the skin retracting naturally afterwards" },
          { label: "Generally considered for", value: "Smaller chests with good skin elasticity" },
        ],
      },
      keyhole: {
        heading: "Keyhole top surgery",
        body: [
          "Keyhole is a more minimally invasive option. A small incision is made at the base of the areola and combined with liposuction to remove tissue.",
          "The nipple is left largely intact, since the nipple-areola complex isn't repositioned or resized. It's generally considered for smaller chests, where less tissue needs to be removed.",
        ],
        facts: [
          { label: "Incision", value: "A small incision at the base of the areola" },
          { label: "Tissue removal", value: "Combined with liposuction" },
          { label: "Nipple-areola complex", value: "Left largely intact: not repositioned or resized" },
          { label: "Generally considered for", value: "Smaller chests, where less tissue needs to be removed" },
        ],
      },
    },
    compare: {
      eyebrow: "Side by Side",
      heading: "Double incision vs keyhole",
      description:
        "The two differ in how they're performed and in the kind of chest they're generally considered for. Here is how they compare on the points described above.",
      caption: "Double incision compared with keyhole top surgery",
      featureLabel: "Feature",
      doubleIncisionLabel: "Double incision",
      keyholeLabel: "Keyhole",
      rows: [
        {
          label: "Incisions",
          doubleIncision: "Two horizontal incisions across the chest",
          keyhole: "A small incision at the base of the areola",
        },
        {
          label: "Tissue removal",
          doubleIncision: "Breast tissue is removed through the incisions",
          keyhole: "Liposuction, combined with the small incision",
        },
        {
          label: "Nipple-areola complex",
          doubleIncision: "Repositioned",
          keyhole: "Left largely intact; not repositioned or resized",
        },
        {
          label: "Approach",
          doubleIncision: "Allows a fuller reshaping of the chest",
          keyhole: "A more minimally invasive option",
        },
        {
          label: "Generally considered for",
          doubleIncision: "Larger chests, or chests with less skin elasticity",
          keyhole: "Smaller chests, where less tissue needs to be removed",
        },
      ],
      note: "Neither is better in itself. Which one is considered depends on your chest size and shape, your skin elasticity and the contour you want, and it's decided together with your surgeon.",
    },
    selection: {
      eyebrow: "Choosing a Technique",
      heading: "How technique selection is discussed",
      description: "Your technique isn't picked from a menu or by a fixed formula.",
      doctorNote: {
        prefix:
          "In your consultation, your goals, medical history and chest anatomy are reviewed together, and the technique is decided with",
        linkLabel: "Dr. Serkan Dinar",
        suffix: " based on the factors below.",
      },
      factorsLabel: "Key considerations",
      abroadNote:
        "If you're travelling from abroad, this conversation happens before you travel: an initial consultation over WhatsApp, and a surgical plan agreed in advance.",
      journeyNote: {
        prefix: "You can follow the full process on the",
        linkLabel: "Patient Journey",
        suffix: " page.",
      },
      turkeyNote: {
        prefix: "Considering surgery in Istanbul? Read about",
        linkLabel: "top surgery in Turkey",
        suffix: ".",
      },
      consultationCtaLabel: "Book a consultation",
    },
  },
  de: {
    metaTitle: "Top Surgery Techniken: Doppelinzision & Keyhole",
    metaDescription:
      "Die Top-Surgery-Techniken im Vergleich: Doppelinzision, periareolär und Keyhole. So funktioniert jede Methode und so wird die passende für Sie gewählt.",
    intro: {
      eyebrow: "OP-Techniken",
      heading: "Top Surgery Techniken",
      lead: "Doppelinzision, periareolär und Keyhole: wie jede Technik funktioniert, wann sie in der Regel infrage kommt und wie die passende für Sie ausgewählt wird.",
    },
    onThisPage: {
      label: "Auf dieser Seite",
      items: [
        { href: "#double-incision", label: "Doppelinzision" },
        { href: "#periareolar", label: "Periareolär" },
        { href: "#keyhole", label: "Keyhole" },
        { href: "#double-incision-vs-keyhole", label: "Doppelinzision vs. Keyhole" },
        { href: "#choosing-a-technique", label: "Wahl der Technik" },
      ],
    },
    introduction: {
      eyebrow: "Einführung",
      heading: "Es gibt nicht die eine Top-Surgery-Technik, die für alle passt",
      body: "Bei der Top Surgery wird der Brustkorb neu geformt, indem Brustgewebe für eine flachere, männlichere Kontur entfernt wird — und dafür gibt es mehr als einen Weg. Bei Top Surgery Care arbeiten wir mit drei Techniken: Doppelinzision, periareolär und Keyhole. Sie unterscheiden sich vor allem darin, wo die Schnitte gesetzt werden und wie der Brustkorb neu geformt wird.",
      overviewNote: {
        prefix:
          "Diese Seite erklärt jede Technik der Reihe nach, stellt Doppelinzision und Keyhole direkt gegenüber und beschreibt, wie die Wahl getroffen wird. Einen breiteren Überblick finden Sie in unserem Ratgeber zur",
        linkLabel: "FTM Top Surgery",
        suffix: ".",
      },
    },
    factsLabel: "Auf einen Blick",
    details: {
      "double-incision": {
        heading: "Doppelinzision",
        body: [
          "Die Doppelinzision ist die häufigste Methode für größere Brüste. Über zwei horizontale Schnitte im Brustbereich wird Brustgewebe entfernt und der Brustkorb neu geformt; der Brustwarzen-Warzenhof-Komplex wird neu positioniert.",
          "Da die endgültige Kontur nicht davon abhängt, dass sich die Haut von selbst zurückzieht, ermöglicht diese Technik eine umfassendere Neuformung als Methoden, die darauf angewiesen sind. Deshalb kommt sie in der Regel infrage, wenn der Brustkorb größer oder die Haut weniger elastisch ist.",
        ],
        facts: [
          { label: "Schnitte", value: "Zwei horizontale Schnitte im Brustbereich" },
          { label: "Brustwarzen-Warzenhof-Komplex", value: "Neu positioniert" },
          { label: "Kommt in der Regel infrage bei", value: "Größeren Brüsten oder weniger elastischer Haut" },
        ],
      },
      periareolar: {
        heading: "Periareoläre Technik",
        body: [
          "Die periareoläre Operation erfolgt über einen Schnitt um den Warzenhof, ohne separaten Schnitt über den Brustkorb.",
          "Ohne diesen zweiten Schnitt entsteht die flachere Kontur dadurch, dass sich die Haut anschließend von selbst zurückzieht. Die Hautelastizität spielt deshalb eine besonders wichtige Rolle dafür, ob diese Technik infrage kommt: In der Regel kommt sie eher für kleinere Brüste mit guter Hautelastizität infrage als für größere oder weniger elastische.",
        ],
        facts: [
          { label: "Schnitt", value: "Ein Schnitt um den Warzenhof" },
          { label: "Kontur", value: "Hängt davon ab, dass sich die Haut anschließend natürlich zurückzieht" },
          { label: "Kommt in der Regel infrage bei", value: "Kleineren Brüsten mit guter Hautelastizität" },
        ],
      },
      keyhole: {
        heading: "Keyhole-Technik",
        body: [
          "Keyhole ist eine minimalinvasivere Option. Ein kleiner Schnitt an der Basis des Warzenhofs wird mit Liposuktion kombiniert, um Gewebe zu entfernen.",
          "Die Brustwarze bleibt weitgehend intakt, da der Brustwarzen-Warzenhof-Komplex weder neu positioniert noch in der Größe verändert wird. In der Regel kommt die Technik für kleinere Brüste infrage, bei denen weniger Gewebe entfernt werden muss.",
        ],
        facts: [
          { label: "Schnitt", value: "Ein kleiner Schnitt an der Basis des Warzenhofs" },
          { label: "Gewebeentfernung", value: "In Kombination mit Liposuktion" },
          {
            label: "Brustwarzen-Warzenhof-Komplex",
            value: "Bleibt weitgehend intakt: weder neu positioniert noch in der Größe verändert",
          },
          {
            label: "Kommt in der Regel infrage bei",
            value: "Kleineren Brüsten, bei denen weniger Gewebe entfernt werden muss",
          },
        ],
      },
    },
    compare: {
      eyebrow: "Im direkten Vergleich",
      heading: "Doppelinzision vs. Keyhole",
      description:
        "Die beiden Techniken unterscheiden sich in der Durchführung und darin, für welche Art von Brustkorb sie in der Regel infrage kommen. So vergleichen sie sich anhand der oben beschriebenen Punkte.",
      caption: "Doppelinzision im Vergleich zur Keyhole-Technik",
      featureLabel: "Merkmal",
      doubleIncisionLabel: "Doppelinzision",
      keyholeLabel: "Keyhole",
      rows: [
        {
          label: "Schnitte",
          doubleIncision: "Zwei horizontale Schnitte im Brustbereich",
          keyhole: "Ein kleiner Schnitt an der Basis des Warzenhofs",
        },
        {
          label: "Gewebeentfernung",
          doubleIncision: "Brustgewebe wird über die Schnitte entfernt",
          keyhole: "Liposuktion in Kombination mit dem kleinen Schnitt",
        },
        {
          label: "Brustwarzen-Warzenhof-Komplex",
          doubleIncision: "Neu positioniert",
          keyhole: "Bleibt weitgehend intakt; weder neu positioniert noch in der Größe verändert",
        },
        {
          label: "Ansatz",
          doubleIncision: "Ermöglicht eine umfassendere Neuformung des Brustkorbs",
          keyhole: "Eine minimalinvasivere Option",
        },
        {
          label: "Kommt in der Regel infrage bei",
          doubleIncision: "Größeren Brüsten oder weniger elastischer Haut",
          keyhole: "Kleineren Brüsten, bei denen weniger Gewebe entfernt werden muss",
        },
      ],
      note: "Keine der beiden Techniken ist für sich genommen besser. Welche infrage kommt, hängt von Größe und Form Ihres Brustkorbs, Ihrer Hautelastizität und der gewünschten Kontur ab — und wird gemeinsam mit Ihrem Chirurgen festgelegt.",
    },
    selection: {
      eyebrow: "Wahl der Technik",
      heading: "Wie die Technik ausgewählt wird",
      description: "Ihre Technik wird nicht aus einem Menü oder nach einem starren Schema gewählt.",
      doctorNote: {
        prefix:
          "In Ihrem Beratungsgespräch werden Ihre Ziele, Ihre Krankengeschichte und die Anatomie Ihres Brustkorbs gemeinsam besprochen, und die Technik wird gemeinsam mit",
        linkLabel: "Dr. Serkan Dinar",
        suffix: " anhand der folgenden Faktoren festgelegt.",
      },
      factorsLabel: "Wichtige Faktoren",
      abroadNote:
        "Wenn Sie aus dem Ausland anreisen, findet dieses Gespräch vor Ihrer Reise statt: ein erstes Beratungsgespräch über WhatsApp und ein OP-Plan, der vorab gemeinsam festgelegt wird.",
      journeyNote: {
        prefix: "Den gesamten Ablauf finden Sie auf der Seite",
        linkLabel: "Patientenreise",
        suffix: ".",
      },
      turkeyNote: {
        prefix: "Sie erwägen eine Operation in Istanbul? Lesen Sie mehr zur",
        linkLabel: "Top Surgery in der Türkei",
        suffix: ".",
      },
      consultationCtaLabel: "Beratungsgespräch vereinbaren",
    },
  },
};
