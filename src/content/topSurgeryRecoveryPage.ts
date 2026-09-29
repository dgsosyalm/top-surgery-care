// Copy specific to /top-surgery/recovery, plus this page's metadata.
//
// Every statement here restates recovery wording that is already approved
// and published elsewhere on the site — the "Recover" Patient Journey step
// (src/data/patientJourney.ts), the recovery sections on /top-surgery and
// /top-surgery-turkey, and the Medical Disclaimer (individual factors,
// no guaranteed recovery timeline, discussing risks with the surgeon, local
// emergency services) — plus general, non-prescriptive guidance (rest,
// follow your surgeon's instructions, wound care as instructed, attend
// planned follow-up). Nothing new is claimed: no recovery timelines,
// activity restrictions, medication or wound-care instructions, symptom
// lists, complication rates, outcomes or prices.

import type { FaqItem } from "@/data/faq";

type LinkSentence = { prefix: string; linkLabel: string; suffix: string };

type TopSurgeryRecoveryPageContent = {
  metaTitle: string;
  metaDescription: string;
  intro: { eyebrow: string; heading: string; lead: string };
  onThisPage: { label: string; items: { href: string; label: string }[] };
  whatItInvolves: {
    eyebrow: string;
    heading: string;
    body: string[];
    /** Short sentence linking to /top-surgery/techniques. */
    techniquesNote: LinkSentence;
  };
  earlyRecovery: {
    eyebrow: string;
    heading: string;
    description: string;
    itemsLabel: string;
    items: string[];
    note: string;
  };
  everydayActivities: { eyebrow: string; heading: string; body: string[] };
  internationalFollowUp: {
    eyebrow: string;
    heading: string;
    body: string[];
    /** Short sentence linking to /patient-journey. */
    journeyNote: LinkSentence;
  };
  contactTeam: { eyebrow: string; heading: string; body: string[] };
  faq: { eyebrow: string; heading: string; items: FaqItem[] };
  nextSteps: {
    eyebrow: string;
    heading: string;
    /** Split around links to /top-surgery, /patient-journey and /contact. */
    prefix: string;
    topSurgeryLabel: string;
    journeyPrefix: string;
    journeyLabel: string;
    contactPrefix: string;
    contactLabel: string;
    suffix: string;
    consultationCtaLabel: string;
  };
};

export const topSurgeryRecoveryPageContent: {
  en: TopSurgeryRecoveryPageContent;
  de: TopSurgeryRecoveryPageContent;
} = {
  en: {
    metaTitle: "Top Surgery Recovery & Aftercare",
    metaDescription:
      "Top surgery recovery and aftercare: what FTM top surgery recovery involves, and how follow-up works for international patients after travelling home.",
    intro: {
      eyebrow: "Recovery & Aftercare",
      heading: "Top Surgery Recovery",
      lead: "Recovery is an important part of the FTM top surgery journey, not a separate step after it. This page explains, in general terms, how recovery and aftercare are approached — including for patients travelling from abroad.",
    },
    onThisPage: {
      label: "On this page",
      items: [
        { href: "#what-recovery-involves", label: "What recovery involves" },
        { href: "#early-recovery", label: "Early recovery" },
        { href: "#everyday-activities", label: "Everyday activities" },
        { href: "#international-follow-up", label: "Follow-up for international patients" },
        { href: "#contact-your-medical-team", label: "Contacting your medical team" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    whatItInvolves: {
      eyebrow: "The Recovery Process",
      heading: "What recovery after top surgery involves",
      body: [
        "Recovery begins with your procedure, hospital stay, and immediate post-operative care, and continues with aftercare guidance and follow-up support as you heal — at home or before you travel back.",
        "There is no fixed timeline applied to everyone. Recovery is planned individually as part of your Patient Journey, and healing is influenced by individual factors — including anatomy, skin elasticity, and general health — so it varies from person to person.",
      ],
      techniquesNote: {
        prefix: "Your surgical plan, including the technique, is decided individually based on chest size, skin elasticity, and your desired result. Read how each approach works in our guide to",
        linkLabel: "top surgery techniques",
        suffix: ".",
      },
    },
    earlyRecovery: {
      eyebrow: "Early Recovery",
      heading: "Early recovery: the first priorities",
      description:
        "In the period right after surgery, the focus is on giving your body time to heal and following the guidance you're given.",
      itemsLabel: "In general terms, that means",
      items: [
        "Resting and allowing your body time to heal",
        "Following your surgeon's instructions closely",
        "Caring for your wounds exactly as instructed",
        "Attending your planned follow-up",
      ],
      note: "Your surgeon will give you aftercare instructions for your individual situation. Those instructions always take priority over the general information on this website.",
    },
    everydayActivities: {
      eyebrow: "Everyday Activities",
      heading: "Returning to everyday activities",
      body: [
        "When you can return to work, exercise, and other everyday activities varies from person to person and depends on your procedure and how you heal, so this page doesn't set a timeline for it.",
        "Your surgeon's individual instructions take priority. If you're unsure whether you're ready to resume an activity, ask your medical team first.",
      ],
    },
    internationalFollowUp: {
      eyebrow: "International Patients",
      heading: "Follow-up for international patients",
      body: [
        "If you're travelling for top surgery — for example, to Istanbul — your recovery continues after you return home. Aftercare guidance and follow-up support continue as you heal, and once the initial coordination is complete, your care continues with your surgeon.",
        "Before you travel back, make sure you're clear on how your follow-up will be coordinated and how to stay in communication with your medical team from home. Keeping that line of communication open while you heal means any questions can be raised with the people who know your procedure.",
      ],
      journeyNote: {
        prefix: "See how recovery fits into the full",
        linkLabel: "Patient Journey",
        suffix: ", from your first consultation to follow-up.",
      },
    },
    contactTeam: {
      eyebrow: "Staying Safe",
      heading: "When to contact your medical team",
      body: [
        "If you have questions or concerns about how you're healing, or something doesn't feel right, contact your medical team rather than waiting. They know your procedure and can advise on your individual situation.",
        "As with any surgical procedure, top surgery carries inherent risks and the possibility of complications, which should be discussed directly with your surgeon.",
        "This website is not intended for use in a medical emergency. If you are experiencing a medical emergency, contact local emergency services immediately.",
      ],
    },
    faq: {
      eyebrow: "Questions",
      heading: "Top surgery recovery: frequently asked questions",
      items: [
        {
          id: "recovery-timeline",
          question: "How long does top surgery recovery take?",
          answer:
            "There is no single timeline that applies to everyone. Recovery is planned individually as part of your Patient Journey, and healing varies from person to person depending on factors such as anatomy, skin elasticity, and general health. Your surgeon will advise on your individual recovery.",
        },
        {
          id: "aftercare",
          question: "What does aftercare after top surgery involve?",
          answer:
            "Aftercare guidance and follow-up support continue as you heal, whether at home or before you travel back. Your surgeon's aftercare instructions are specific to you and always take priority over general information.",
        },
        {
          id: "recovering-at-home",
          question: "Can I continue my recovery at home after travelling abroad for top surgery?",
          answer:
            "Yes. Aftercare guidance and follow-up support continue as you heal, at home or before you travel back. Once the initial coordination is complete, your care continues with your surgeon, so it's important to stay in communication with your medical team after you return home.",
        },
        {
          id: "everyday-activities",
          question: "When can I return to work or exercise after top surgery?",
          answer:
            "This varies from person to person and depends on your procedure and how you heal. Your surgeon will give you individual instructions, and those take priority over any general guidance.",
        },
        {
          id: "concerns",
          question: "Who should I contact if I have concerns during recovery?",
          answer:
            "Contact your medical team with any questions or concerns about how you're healing. In a medical emergency, contact local emergency services immediately.",
        },
      ],
    },
    nextSteps: {
      eyebrow: "Next Steps",
      heading: "Plan your top surgery with recovery in mind",
      prefix: "Learn more about",
      topSurgeryLabel: "FTM top surgery",
      journeyPrefix: ", see each stage of the",
      journeyLabel: "Patient Journey",
      contactPrefix: ", or",
      contactLabel: "get in touch",
      suffix: " to arrange a consultation.",
      consultationCtaLabel: "Book a consultation",
    },
  },
  de: {
    metaTitle: "Top Surgery Genesung & Nachsorge",
    metaDescription:
      "Genesung und Nachsorge nach der Top Surgery: was die Genesung nach einer FTM-Top-Surgery umfasst und wie internationale Patienten nach der Heimreise begleitet werden.",
    intro: {
      eyebrow: "Genesung & Nachsorge",
      heading: "Genesung nach der Top Surgery",
      lead: "Die Genesung ist ein wichtiger Teil der FTM-Top-Surgery-Reise — kein separater Schritt danach. Diese Seite erklärt in allgemeiner Form, wie Genesung und Nachsorge ablaufen — auch für Patienten, die aus dem Ausland anreisen.",
    },
    onThisPage: {
      label: "Auf dieser Seite",
      items: [
        { href: "#what-recovery-involves", label: "Was die Genesung umfasst" },
        { href: "#early-recovery", label: "Frühe Genesung" },
        { href: "#everyday-activities", label: "Alltagsaktivitäten" },
        { href: "#international-follow-up", label: "Nachsorge für internationale Patienten" },
        { href: "#contact-your-medical-team", label: "Kontakt zu Ihrem Behandlungsteam" },
        { href: "#faq", label: "FAQ" },
      ],
    },
    whatItInvolves: {
      eyebrow: "Der Genesungsprozess",
      heading: "Was die Genesung nach der Top Surgery umfasst",
      body: [
        "Die Genesung beginnt mit Ihrem Eingriff, dem Krankenhausaufenthalt und der unmittelbaren postoperativen Betreuung und setzt sich mit Nachsorge und Begleitung fort, während Sie heilen — zu Hause oder vor Ihrer Rückreise.",
        "Es gibt keinen starren Zeitplan für alle. Die Genesung wird individuell als Teil Ihrer Patientenreise geplant, und der Heilungsverlauf wird von individuellen Faktoren beeinflusst — unter anderem Anatomie, Hautelastizität und allgemeinem Gesundheitszustand — und fällt daher von Person zu Person unterschiedlich aus.",
      ],
      techniquesNote: {
        prefix: "Ihr OP-Plan, einschließlich der Technik, wird individuell anhand von Brustgröße, Hautelastizität und Ihrem gewünschten Ergebnis festgelegt. Wie die einzelnen Verfahren funktionieren, lesen Sie in unserem Leitfaden zu den",
        linkLabel: "Top Surgery Techniken",
        suffix: ".",
      },
    },
    earlyRecovery: {
      eyebrow: "Frühe Genesung",
      heading: "Frühe Genesung: die ersten Prioritäten",
      description:
        "In der Zeit direkt nach der Operation steht im Mittelpunkt, Ihrem Körper Zeit zur Heilung zu geben und den Anweisungen zu folgen, die Sie erhalten.",
      itemsLabel: "Allgemein bedeutet das",
      items: [
        "Ruhe halten und Ihrem Körper Zeit zur Heilung geben",
        "Die Anweisungen Ihres Chirurgen genau befolgen",
        "Die Wundversorgung genau nach Anweisung durchführen",
        "Die geplanten Nachsorgetermine wahrnehmen",
      ],
      note: "Ihr Chirurg gibt Ihnen Nachsorgeanweisungen für Ihre individuelle Situation. Diese Anweisungen haben stets Vorrang vor den allgemeinen Informationen auf dieser Website.",
    },
    everydayActivities: {
      eyebrow: "Alltagsaktivitäten",
      heading: "Rückkehr zu Alltagsaktivitäten",
      body: [
        "Wann Sie wieder arbeiten, Sport treiben oder anderen Alltagsaktivitäten nachgehen können, ist von Person zu Person unterschiedlich und hängt von Ihrem Eingriff und Ihrem Heilungsverlauf ab — daher nennt diese Seite dafür keinen Zeitplan.",
        "Die individuellen Anweisungen Ihres Chirurgen haben Vorrang. Wenn Sie unsicher sind, ob Sie eine Aktivität wieder aufnehmen können, fragen Sie zuerst Ihr Behandlungsteam.",
      ],
    },
    internationalFollowUp: {
      eyebrow: "Internationale Patienten",
      heading: "Nachsorge für internationale Patienten",
      body: [
        "Wenn Sie für Ihre Top Surgery anreisen — zum Beispiel nach Istanbul —, setzt sich Ihre Genesung nach der Heimreise fort. Nachsorge und Begleitung setzen sich fort, während Sie heilen, und sobald die anfängliche Koordination abgeschlossen ist, wird Ihre Betreuung bei Ihrem Chirurgen fortgesetzt.",
        "Klären Sie vor Ihrer Rückreise, wie Ihre Nachsorge koordiniert wird und wie Sie von zu Hause aus mit Ihrem Behandlungsteam in Kontakt bleiben. Bleibt dieser Kontakt während der Heilung bestehen, können Fragen direkt mit den Menschen besprochen werden, die Ihren Eingriff kennen.",
      ],
      journeyNote: {
        prefix: "Wie sich die Genesung in den gesamten Ablauf einfügt, sehen Sie auf der Seite",
        linkLabel: "Patientenreise",
        suffix: " — vom ersten Beratungsgespräch bis zur Nachsorge.",
      },
    },
    contactTeam: {
      eyebrow: "Sicherheit",
      heading: "Wann Sie Ihr Behandlungsteam kontaktieren sollten",
      body: [
        "Wenn Sie Fragen oder Bedenken zu Ihrem Heilungsverlauf haben oder sich etwas nicht richtig anfühlt, wenden Sie sich an Ihr Behandlungsteam, statt abzuwarten. Es kennt Ihren Eingriff und kann Sie zu Ihrer individuellen Situation beraten.",
        "Wie jeder chirurgische Eingriff birgt auch eine Top-Surgery inhärente Risiken und die Möglichkeit von Komplikationen, die direkt mit Ihrem Chirurgen besprochen werden sollten.",
        "Diese Website ist nicht für die Nutzung in einem medizinischen Notfall bestimmt. Wenden Sie sich bei einem medizinischen Notfall bitte umgehend an den lokalen Rettungsdienst.",
      ],
    },
    faq: {
      eyebrow: "Fragen",
      heading: "Genesung nach der Top Surgery: häufig gestellte Fragen",
      items: [
        {
          id: "recovery-timeline",
          question: "Wie lange dauert die Genesung nach einer Top Surgery?",
          answer:
            "Es gibt keinen einheitlichen Zeitplan, der für alle gilt. Die Genesung wird individuell als Teil Ihrer Patientenreise geplant, und der Heilungsverlauf ist von Person zu Person unterschiedlich — abhängig von Faktoren wie Anatomie, Hautelastizität und allgemeinem Gesundheitszustand. Ihr Chirurg berät Sie zu Ihrer individuellen Genesung.",
        },
        {
          id: "aftercare",
          question: "Was umfasst die Nachsorge nach einer Top Surgery?",
          answer:
            "Nachsorge und Begleitung setzen sich fort, während Sie heilen — zu Hause oder vor Ihrer Rückreise. Die Nachsorgeanweisungen Ihres Chirurgen sind auf Sie zugeschnitten und haben stets Vorrang vor allgemeinen Informationen.",
        },
        {
          id: "recovering-at-home",
          question: "Kann ich meine Genesung nach einer Top Surgery im Ausland zu Hause fortsetzen?",
          answer:
            "Ja. Nachsorge und Begleitung setzen sich fort, während Sie heilen — zu Hause oder vor Ihrer Rückreise. Sobald die anfängliche Koordination abgeschlossen ist, wird Ihre Betreuung bei Ihrem Chirurgen fortgesetzt. Deshalb ist es wichtig, nach Ihrer Heimreise mit Ihrem Behandlungsteam in Kontakt zu bleiben.",
        },
        {
          id: "everyday-activities",
          question: "Wann kann ich nach einer Top Surgery wieder arbeiten oder Sport treiben?",
          answer:
            "Das ist von Person zu Person unterschiedlich und hängt von Ihrem Eingriff und Ihrem Heilungsverlauf ab. Ihr Chirurg gibt Ihnen individuelle Anweisungen, und diese haben Vorrang vor allgemeinen Hinweisen.",
        },
        {
          id: "concerns",
          question: "An wen wende ich mich, wenn ich während der Genesung Bedenken habe?",
          answer:
            "Wenden Sie sich mit Fragen oder Bedenken zu Ihrem Heilungsverlauf an Ihr Behandlungsteam. Bei einem medizinischen Notfall wenden Sie sich bitte umgehend an den lokalen Rettungsdienst.",
        },
      ],
    },
    nextSteps: {
      eyebrow: "Nächste Schritte",
      heading: "Planen Sie Ihre Top Surgery mit Blick auf die Genesung",
      prefix: "Erfahren Sie mehr über die",
      topSurgeryLabel: "FTM-Top-Surgery",
      journeyPrefix: ", sehen Sie jede Etappe der",
      journeyLabel: "Patientenreise",
      contactPrefix: " an oder",
      contactLabel: "nehmen Sie Kontakt auf",
      suffix: ", um ein Beratungsgespräch zu vereinbaren.",
      consultationCtaLabel: "Beratungsgespräch vereinbaren",
    },
  },
};
