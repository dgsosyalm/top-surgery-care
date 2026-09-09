// Content for the four Legal footer pages: Privacy Policy, Terms &
// Conditions, Medical Disclaimer, and the KVKK Consent Form.
//
// Everything here is written from facts already established elsewhere in
// this codebase (siteConfig, the consultation form's actual WhatsApp-only
// behavior, the results-gallery age gate, the locale cookie) — no company
// details, addresses, registration numbers, or legal facts are invented.
// The KVKK Consent Form page does not reproduce or translate the PDF's
// legal text; it only links/embeds the existing document as-is.

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string;
  sections: LegalSection[];
};

export type KvkkPageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  intro: string[];
  documentTitle: string;
  openLabel: string;
  fallbackNote: string;
};

export const privacyPolicyContent: { en: LegalPageCopy; de: LegalPageCopy } = {
  en: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Top Surgery Care handles information in connection with your use of this website.",
    eyebrow: "Legal",
    heading: "Privacy Policy",
    intro:
      "This Privacy Policy explains how Top Surgery Care (topsurgerycare.com) handles information in connection with your use of this website. It applies to the website itself; it does not cover the separate KVKK consent form you may be asked to sign in connection with medical tourism services in Turkey, which is governed by its own terms and by Turkish Law No. 6698 on the Protection of Personal Data.",
    sections: [
      {
        heading: "Who We Are",
        paragraphs: [
          "Top Surgery Care is an informational website about FTM (female-to-male) top surgery, built around the surgical work of Dr. Serkan Dinar and the coordination support provided to international patients by Neda Deniz International Medical Tourism and Travel Agency in Istanbul, Turkey.",
        ],
      },
      {
        heading: "Information You Provide to Us",
        paragraphs: [
          "When you use the consultation form on this website, you may provide information such as your name, country, and a short message describing your inquiry.",
          "This form does not submit your information to our servers or store it in a database. Instead, it prepares a WhatsApp message on your own device and opens WhatsApp so you can choose to send that message directly to Top Surgery Care. If you send it, that message and any reply are handled within WhatsApp, subject to WhatsApp's own privacy policy and terms of service.",
          "If you contact us directly through WhatsApp, Instagram, YouTube, Reddit, or another third-party platform linked from this website, the information you share is processed by that platform under its own privacy policy, as well as being visible to us as the recipient of your message.",
        ],
      },
      {
        heading: "Information Collected Automatically",
        paragraphs: [
          "Like most websites, this site may generate standard technical information as part of normal operation and hosting, such as the pages requested and general browser information.",
          "This website uses a single functional cookie to remember your chosen language (English or German) between visits. We do not use this cookie for advertising or analytics, and we are not currently using additional analytics, tracking, or advertising cookies on this website.",
        ],
      },
      {
        heading: "How We Use Information",
        paragraphs: [
          "Where information is shared with us — for example, through a WhatsApp message you choose to send — we use it to respond to your inquiry, discuss your interest in top surgery, and help coordinate a consultation if you decide to move forward.",
          "We do not use information submitted through this website for any purpose unrelated to responding to your inquiry, unless required by law.",
        ],
      },
      {
        heading: "The Results Gallery and Age Confirmation",
        paragraphs: [
          "Certain pages of this website contain surgical before-and-after photographs. To view them, you are asked to confirm that you wish to proceed. This confirmation is held only in your browser for the current visit; it is not stored in a cookie, in local storage, or on our servers, and is not linked to any personal information.",
        ],
      },
      {
        heading: "Data Security",
        paragraphs: [
          "We take reasonable steps appropriate to a website of this kind to protect information from loss, misuse, or unauthorized access. However, no method of transmission over the internet, and no method of electronic storage, can be guaranteed to be completely secure.",
        ],
      },
      {
        heading: "Third-Party Links and Services",
        paragraphs: [
          "This website links to third-party platforms, including WhatsApp, Instagram, YouTube, and Reddit. These platforms are operated independently of Top Surgery Care. We encourage you to review their respective privacy policies, as we are not responsible for their content or privacy practices.",
        ],
      },
      {
        heading: "Data Retention",
        paragraphs: [
          "We keep information shared with us only for as long as reasonably necessary for the purposes described in this Privacy Policy, or as required by applicable law.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "Depending on your location, you may have rights in relation to personal information you have shared with us, such as asking what information we hold, requesting a correction, or asking us to delete it. You can exercise these rights by contacting us through our Contact page.",
          "If you sign a separate KVKK consent form in connection with medical tourism services provided in Turkey, that document sets out specific rights available to you under Turkish Law No. 6698 on the Protection of Personal Data, and governs the personal and health data covered by that form.",
        ],
      },
      {
        heading: "Not Directed at Children",
        paragraphs: [
          "This website is intended for adults. It is not directed at, and should not be used by, individuals under the age of 18 — the results gallery on this website specifically asks visitors to confirm they are 18 or older before viewing it.",
        ],
      },
      {
        heading: "Changes to This Policy",
        paragraphs: [
          "We may update this Privacy Policy from time to time to reflect changes to the website or for other operational or legal reasons. The updated version will be posted on this page.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about this Privacy Policy or how your information is handled, please get in touch through our Contact page.",
        ],
      },
    ],
  },
  de: {
    metaTitle: "Datenschutzerklärung",
    metaDescription:
      "Wie Top Surgery Care im Zusammenhang mit der Nutzung dieser Website mit Informationen umgeht.",
    eyebrow: "Rechtliches",
    heading: "Datenschutzerklärung",
    intro:
      "Diese Datenschutzerklärung erläutert, wie Top Surgery Care (topsurgerycare.com) im Zusammenhang mit der Nutzung dieser Website mit Informationen umgeht. Sie gilt für die Website selbst; sie erfasst nicht die gesonderte KVKK-Einwilligungserklärung, die Ihnen im Zusammenhang mit medizintouristischen Leistungen in der Türkei zur Unterschrift vorgelegt werden kann und die eigenen Bedingungen sowie dem türkischen Gesetz Nr. 6698 zum Schutz personenbezogener Daten unterliegt.",
    sections: [
      {
        heading: "Wer wir sind",
        paragraphs: [
          "Top Surgery Care ist eine informative Website zum Thema FTM-Top-Surgery (weiblich-zu-männlich), die sich auf die chirurgische Tätigkeit von Dr. Serkan Dinar und die Koordinationsunterstützung stützt, die internationalen Patienten durch die Neda Deniz International Medical Tourism and Travel Agency in Istanbul, Türkei, geboten wird.",
        ],
      },
      {
        heading: "Informationen, die Sie uns bereitstellen",
        paragraphs: [
          "Wenn Sie das Beratungsformular auf dieser Website nutzen, können Sie Angaben wie Ihren Namen, Ihr Land und eine kurze Nachricht zu Ihrem Anliegen machen.",
          "Dieses Formular übermittelt Ihre Angaben nicht an unsere Server und speichert sie nicht in einer Datenbank. Stattdessen erstellt es auf Ihrem eigenen Gerät eine WhatsApp-Nachricht und öffnet WhatsApp, damit Sie diese Nachricht bei Bedarf direkt an Top Surgery Care senden können. Wenn Sie sie senden, werden diese Nachricht und jede Antwort darauf innerhalb von WhatsApp verarbeitet und unterliegen der eigenen Datenschutzerklärung und den Nutzungsbedingungen von WhatsApp.",
          "Wenn Sie uns direkt über WhatsApp, Instagram, YouTube, Reddit oder eine andere von dieser Website verlinkte Plattform Dritter kontaktieren, werden die von Ihnen geteilten Informationen von dieser Plattform gemäß deren eigener Datenschutzerklärung verarbeitet und sind zugleich für uns als Empfänger Ihrer Nachricht sichtbar.",
        ],
      },
      {
        heading: "Automatisch erfasste Informationen",
        paragraphs: [
          "Wie die meisten Websites kann auch diese Website im Rahmen des normalen Betriebs und Hostings übliche technische Informationen erzeugen, etwa zu aufgerufenen Seiten und allgemeinen Browserangaben.",
          "Diese Website verwendet ein einziges funktionales Cookie, um Ihre gewählte Sprache (Englisch oder Deutsch) zwischen Ihren Besuchen zu speichern. Wir verwenden dieses Cookie nicht für Werbung oder Analysezwecke und setzen derzeit keine weiteren Analyse-, Tracking- oder Werbe-Cookies auf dieser Website ein.",
        ],
      },
      {
        heading: "Wie wir Informationen verwenden",
        paragraphs: [
          "Sofern uns Informationen mitgeteilt werden — etwa über eine WhatsApp-Nachricht, die Sie senden möchten —, verwenden wir diese, um auf Ihre Anfrage zu antworten, Ihr Interesse an einer Top-Surgery zu besprechen und, falls Sie sich dafür entscheiden, die Koordination eines Beratungsgesprächs zu unterstützen.",
          "Wir verwenden über diese Website übermittelte Informationen nicht für Zwecke, die nichts mit der Beantwortung Ihrer Anfrage zu tun haben, es sei denn, dies ist gesetzlich vorgeschrieben.",
        ],
      },
      {
        heading: "Die Ergebnisgalerie und die Altersbestätigung",
        paragraphs: [
          "Bestimmte Seiten dieser Website enthalten chirurgische Vorher-Nachher-Fotos. Um diese anzusehen, werden Sie gebeten zu bestätigen, dass Sie fortfahren möchten. Diese Bestätigung wird nur für den aktuellen Besuch in Ihrem Browser gehalten; sie wird nicht in einem Cookie, im lokalen Speicher oder auf unseren Servern gespeichert und ist mit keinen personenbezogenen Daten verknüpft.",
        ],
      },
      {
        heading: "Datensicherheit",
        paragraphs: [
          "Wir treffen angemessene, für eine Website dieser Art übliche Maßnahmen, um Informationen vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen. Allerdings kann weder für die Übertragung von Daten über das Internet noch für die elektronische Speicherung eine vollständige Sicherheit garantiert werden.",
        ],
      },
      {
        heading: "Links und Dienste Dritter",
        paragraphs: [
          "Diese Website verlinkt auf Plattformen Dritter, darunter WhatsApp, Instagram, YouTube und Reddit. Diese Plattformen werden unabhängig von Top Surgery Care betrieben. Wir empfehlen Ihnen, deren jeweilige Datenschutzerklärungen zu prüfen, da wir für deren Inhalte oder Datenschutzpraktiken nicht verantwortlich sind.",
        ],
      },
      {
        heading: "Speicherdauer",
        paragraphs: [
          "Wir bewahren uns mitgeteilte Informationen nur so lange auf, wie dies für die in dieser Datenschutzerklärung beschriebenen Zwecke angemessen erforderlich oder gesetzlich vorgeschrieben ist.",
        ],
      },
      {
        heading: "Ihre Rechte",
        paragraphs: [
          "Je nach Ihrem Standort können Ihnen Rechte in Bezug auf personenbezogene Daten zustehen, die Sie uns mitgeteilt haben — etwa das Recht zu erfahren, welche Informationen wir gespeichert haben, eine Berichtigung zu verlangen oder deren Löschung zu beantragen. Sie können diese Rechte ausüben, indem Sie uns über unsere Kontaktseite kontaktieren.",
          "Wenn Sie im Zusammenhang mit medizintouristischen Leistungen in der Türkei eine gesonderte KVKK-Einwilligungserklärung unterzeichnen, legt dieses Dokument die konkreten Rechte fest, die Ihnen nach dem türkischen Gesetz Nr. 6698 zum Schutz personenbezogener Daten zustehen, und regelt die von diesem Dokument erfassten personenbezogenen und gesundheitsbezogenen Daten.",
        ],
      },
      {
        heading: "Nicht an Kinder gerichtet",
        paragraphs: [
          "Diese Website richtet sich an Erwachsene. Sie ist nicht für Personen unter 18 Jahren bestimmt und sollte von ihnen nicht genutzt werden — die Ergebnisgalerie auf dieser Website bittet Besucherinnen und Besucher ausdrücklich um die Bestätigung, dass sie mindestens 18 Jahre alt sind, bevor sie angezeigt wird.",
        ],
      },
      {
        heading: "Änderungen dieser Erklärung",
        paragraphs: [
          "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen an der Website oder anderen betrieblichen oder rechtlichen Gründen Rechnung zu tragen. Die aktualisierte Fassung wird auf dieser Seite veröffentlicht.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Wenn Sie Fragen zu dieser Datenschutzerklärung oder zum Umgang mit Ihren Informationen haben, wenden Sie sich bitte über unsere Kontaktseite an uns.",
        ],
      },
    ],
  },
};

export const termsContent: { en: LegalPageCopy; de: LegalPageCopy } = {
  en: {
    metaTitle: "Terms & Conditions",
    metaDescription: "The terms that govern your use of the Top Surgery Care website.",
    eyebrow: "Legal",
    heading: "Terms & Conditions",
    intro:
      "These Terms & Conditions govern your use of the Top Surgery Care website (topsurgerycare.com). By using this website, you agree to these terms. Please read them together with our Privacy Policy and Medical Disclaimer.",
    sections: [
      {
        heading: "Informational Purpose of This Website",
        paragraphs: [
          "This website provides general information about FTM top surgery, the surgical techniques discussed on it, and the patient journey for international patients considering treatment with Dr. Serkan Dinar. The content on this website is provided for general informational purposes and does not constitute medical advice. Please see our Medical Disclaimer for further detail.",
        ],
      },
      {
        heading: "Eligibility",
        paragraphs: [
          "This website is intended for adults. Some content, including the before-and-after results gallery, is restricted behind an age confirmation and is intended for visitors aged 18 and over.",
        ],
      },
      {
        heading: "Use of This Website",
        paragraphs: [
          "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use and enjoyment of, this website by anyone else. In particular:",
        ],
        list: [
          "You may not copy, reproduce, republish, or redistribute content from this website without our prior permission.",
          "You may not attempt to gain unauthorized access to any part of this website or its underlying systems.",
          "You may not use automated means, such as scraping tools or bots, to extract content from this website without our prior permission.",
        ],
      },
      {
        heading: "Contacting Us",
        paragraphs: [
          "Where this website invites you to get in touch — for example, through the consultation form, or the WhatsApp, Instagram, YouTube, or Reddit links in the footer — doing so does not guarantee a particular response time, and does not by itself create a doctor-patient relationship. Any such relationship is only formed through direct, individualized consultation regarding your specific situation.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "Unless otherwise indicated, the text, images, videos, and other content on this website, including its name and logo, belong to or are used with permission by Top Surgery Care and are protected by applicable intellectual property laws. Before-and-after photographs and video testimonials are shared with the permission of the patients shown.",
          "You may view and share pages of this website for personal, non-commercial purposes. You may not otherwise copy, modify, or use this content, including for commercial purposes, without our prior written permission.",
        ],
      },
      {
        heading: "Third-Party Links",
        paragraphs: [
          "This website contains links to third-party platforms such as WhatsApp, Instagram, YouTube, and Reddit. These links are provided for convenience. We do not control, and are not responsible for, the content, policies, or practices of any third-party platform or website.",
        ],
      },
      {
        heading: "No Guarantee of Medical Outcome",
        paragraphs: [
          "Nothing on this website should be understood as a guarantee, promise, or assurance of any particular surgical result. Please see our Medical Disclaimer for more information about individual variation in surgical outcomes.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          'This website and its content are provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including as to accuracy, completeness, or availability.',
          "To the fullest extent permitted by applicable law, Top Surgery Care will not be liable for any loss or damage arising from your use of, or reliance on, this website or its content, or from your inability to access it.",
        ],
      },
      {
        heading: "Governing Context",
        paragraphs: [
          "The surgical services described on this website are provided in Istanbul, Turkey. These Terms are intended to be read and applied in a manner consistent with the laws applicable in the Republic of Turkey.",
        ],
      },
      {
        heading: "Changes to These Terms",
        paragraphs: [
          "We may update these Terms & Conditions from time to time. Continued use of this website after an update constitutes acceptance of the revised Terms.",
        ],
      },
      {
        heading: "Contact Us",
        paragraphs: [
          "If you have questions about these Terms & Conditions, please get in touch through our Contact page.",
        ],
      },
    ],
  },
  de: {
    metaTitle: "Allgemeine Geschäftsbedingungen",
    metaDescription: "Die Bedingungen für die Nutzung der Website von Top Surgery Care.",
    eyebrow: "Rechtliches",
    heading: "Allgemeine Geschäftsbedingungen",
    intro:
      "Diese Allgemeinen Geschäftsbedingungen (AGB) regeln Ihre Nutzung der Website von Top Surgery Care (topsurgerycare.com). Mit der Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie sie gemeinsam mit unserer Datenschutzerklärung und unserem Medizinischen Hinweis.",
    sections: [
      {
        heading: "Informativer Zweck dieser Website",
        paragraphs: [
          "Diese Website bietet allgemeine Informationen zur FTM-Top-Surgery, zu den darauf beschriebenen OP-Techniken und zur Patientenreise für internationale Patienten, die eine Behandlung bei Dr. Serkan Dinar in Erwägung ziehen. Die Inhalte dieser Website dienen ausschließlich allgemeinen Informationszwecken und stellen keine medizinische Beratung dar. Weitere Einzelheiten finden Sie in unserem Medizinischen Hinweis.",
        ],
      },
      {
        heading: "Nutzungsberechtigung",
        paragraphs: [
          "Diese Website richtet sich an Erwachsene. Bestimmte Inhalte, darunter die Vorher-Nachher-Ergebnisgalerie, sind durch eine Altersbestätigung geschützt und für Besucherinnen und Besucher ab 18 Jahren bestimmt.",
        ],
      },
      {
        heading: "Nutzung dieser Website",
        paragraphs: [
          "Sie verpflichten sich, diese Website nur für rechtmäßige Zwecke und so zu nutzen, dass die Rechte anderer nicht verletzt und deren Nutzung der Website nicht eingeschränkt oder beeinträchtigt wird. Insbesondere gilt:",
        ],
        list: [
          "Sie dürfen Inhalte dieser Website nicht ohne unsere vorherige Zustimmung kopieren, vervielfältigen, erneut veröffentlichen oder weiterverbreiten.",
          "Sie dürfen nicht versuchen, sich unbefugten Zugang zu Teilen dieser Website oder den zugrundeliegenden Systemen zu verschaffen.",
          "Sie dürfen keine automatisierten Mittel, etwa Scraping-Tools oder Bots, verwenden, um ohne unsere vorherige Zustimmung Inhalte dieser Website zu extrahieren.",
        ],
      },
      {
        heading: "Kontaktaufnahme mit uns",
        paragraphs: [
          "Wo diese Website Sie zur Kontaktaufnahme einlädt — etwa über das Beratungsformular oder die WhatsApp-, Instagram-, YouTube- oder Reddit-Links in der Fußzeile —, garantiert dies keine bestimmte Reaktionszeit und begründet für sich genommen kein Arzt-Patienten-Verhältnis. Ein solches Verhältnis entsteht ausschließlich durch ein direktes, individuelles Beratungsgespräch zu Ihrer konkreten Situation.",
        ],
      },
      {
        heading: "Geistiges Eigentum",
        paragraphs: [
          "Sofern nicht anders angegeben, gehören die Texte, Bilder, Videos und sonstigen Inhalte dieser Website, einschließlich ihres Namens und Logos, Top Surgery Care oder werden mit entsprechender Erlaubnis genutzt und sind durch die geltenden Rechte des geistigen Eigentums geschützt. Vorher-Nachher-Fotos und Video-Erfahrungsberichte werden mit der Erlaubnis der gezeigten Patientinnen und Patienten veröffentlicht.",
          "Sie dürfen Seiten dieser Website für persönliche, nicht kommerzielle Zwecke ansehen und teilen. Eine darüber hinausgehende Vervielfältigung, Änderung oder Nutzung dieser Inhalte, auch zu kommerziellen Zwecken, ist ohne unsere vorherige schriftliche Zustimmung nicht gestattet.",
        ],
      },
      {
        heading: "Links zu Websites Dritter",
        paragraphs: [
          "Diese Website enthält Links zu Plattformen Dritter wie WhatsApp, Instagram, YouTube und Reddit. Diese Links werden aus Gründen der Nutzerfreundlichkeit bereitgestellt. Wir haben keinen Einfluss auf die Inhalte, Richtlinien oder Praktiken dieser Plattformen oder Websites Dritter und übernehmen hierfür keine Verantwortung.",
        ],
      },
      {
        heading: "Keine Garantie eines medizinischen Ergebnisses",
        paragraphs: [
          "Nichts auf dieser Website ist als Garantie, Zusicherung oder Versprechen eines bestimmten OP-Ergebnisses zu verstehen. Weitere Informationen zur individuellen Schwankungsbreite chirurgischer Ergebnisse finden Sie in unserem Medizinischen Hinweis.",
        ],
      },
      {
        heading: "Haftungsbeschränkung",
        paragraphs: [
          'Diese Website und ihre Inhalte werden "wie besehen" und "wie verfügbar" bereitgestellt, ohne Gewährleistung jeglicher Art, weder ausdrücklich noch stillschweigend, einschließlich hinsichtlich Richtigkeit, Vollständigkeit oder Verfügbarkeit.',
          "Soweit gesetzlich zulässig, haftet Top Surgery Care nicht für Verluste oder Schäden, die aus der Nutzung dieser Website oder ihrer Inhalte, dem Vertrauen darauf oder der Unmöglichkeit des Zugriffs darauf entstehen.",
        ],
      },
      {
        heading: "Rechtlicher Rahmen",
        paragraphs: [
          "Die auf dieser Website beschriebenen chirurgischen Leistungen werden in Istanbul, Türkei, erbracht. Diese Bedingungen sind so auszulegen und anzuwenden, dass sie mit dem in der Republik Türkei geltenden Recht im Einklang stehen.",
        ],
      },
      {
        heading: "Änderungen dieser Bedingungen",
        paragraphs: [
          "Wir können diese Allgemeinen Geschäftsbedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung dieser Website nach einer Aktualisierung gilt als Zustimmung zu den geänderten Bedingungen.",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Wenn Sie Fragen zu diesen Allgemeinen Geschäftsbedingungen haben, wenden Sie sich bitte über unsere Kontaktseite an uns.",
        ],
      },
    ],
  },
};

export const medicalDisclaimerContent: { en: LegalPageCopy; de: LegalPageCopy } = {
  en: {
    metaTitle: "Medical Disclaimer",
    metaDescription:
      "Important information about the limits of the content on this website and why it does not replace individual medical advice.",
    eyebrow: "Legal",
    heading: "Medical Disclaimer",
    intro: "Please read this Medical Disclaimer carefully before relying on any information on this website.",
    sections: [
      {
        heading: "General Information Only",
        paragraphs: [
          "The content on this website — including descriptions of surgical techniques, the patient journey, recovery information, and answers to frequently asked questions — is provided for general educational and informational purposes only.",
        ],
      },
      {
        heading: "Not Medical Advice",
        paragraphs: [
          "Nothing on this website constitutes individual medical advice, diagnosis, or treatment. Every patient's anatomy, health history, and goals are different, and information written for a general audience cannot account for your individual circumstances.",
        ],
      },
      {
        heading: "No Substitute for Consultation with a Qualified Surgeon",
        paragraphs: [
          "This website does not replace an individualized consultation with Dr. Serkan Dinar or another qualified surgeon. Whether a particular technique is appropriate for you, and what outcome you might reasonably expect, can only be assessed through direct clinical evaluation.",
        ],
      },
      {
        heading: "Individual Results Vary",
        paragraphs: [
          "Before-and-after photographs, videos, and patient stories shown on this website reflect the experience of individual patients and are shared as illustrative examples, not as a guarantee, promise, or prediction of the outcome any other person will achieve.",
          "Surgical outcomes are influenced by many individual factors — including anatomy, skin elasticity, healing, and general health — and will vary from person to person.",
        ],
      },
      {
        heading: "No Guaranteed Outcomes",
        paragraphs: [
          "Top Surgery Care makes no guarantee, warranty, or assurance regarding the result of any procedure, including its aesthetic outcome, scarring, sensation, or recovery timeline.",
        ],
      },
      {
        heading: "Surgical Risk",
        paragraphs: [
          "As with any surgical procedure, top surgery carries inherent risks and the possibility of complications. These risks should be discussed directly and in detail with your surgeon before you decide to proceed.",
        ],
      },
      {
        heading: "Testimonials and Reviews",
        paragraphs: [
          "Patient testimonials, reviews, and video stories featured on this website reflect individual, personal experiences and opinions. They are not intended as, and should not be relied upon as, a guarantee of a similar experience or outcome.",
        ],
      },
      {
        heading: "Not for Medical Emergencies",
        paragraphs: [
          "This website is not intended for use in a medical emergency. If you are experiencing a medical emergency, please contact local emergency services immediately.",
        ],
      },
      {
        heading: "Seek Qualified Medical Advice",
        paragraphs: [
          "Always seek the advice of a qualified surgeon or other qualified health provider with any questions you may have about a medical condition or a planned procedure.",
        ],
      },
    ],
  },
  de: {
    metaTitle: "Medizinischer Hinweis",
    metaDescription:
      "Wichtige Informationen zu den Grenzen der Inhalte dieser Website und dazu, warum sie keine individuelle medizinische Beratung ersetzen.",
    eyebrow: "Rechtliches",
    heading: "Medizinischer Hinweis",
    intro:
      "Bitte lesen Sie diesen Medizinischen Hinweis sorgfältig durch, bevor Sie sich auf Informationen dieser Website verlassen.",
    sections: [
      {
        heading: "Nur allgemeine Informationen",
        paragraphs: [
          "Die Inhalte dieser Website — einschließlich der Beschreibungen von OP-Techniken, der Patientenreise, Informationen zur Genesung und Antworten auf häufig gestellte Fragen — dienen ausschließlich allgemeinen Bildungs- und Informationszwecken.",
        ],
      },
      {
        heading: "Keine medizinische Beratung",
        paragraphs: [
          "Nichts auf dieser Website stellt eine individuelle medizinische Beratung, Diagnose oder Behandlung dar. Anatomie, Krankengeschichte und Ziele sind bei jedem Patienten und jeder Patientin unterschiedlich, und für ein allgemeines Publikum verfasste Informationen können Ihre individuelle Situation nicht berücksichtigen.",
        ],
      },
      {
        heading: "Kein Ersatz für die Beratung durch einen qualifizierten Chirurgen",
        paragraphs: [
          "Diese Website ersetzt kein individuelles Beratungsgespräch mit Dr. Serkan Dinar oder einem anderen qualifizierten Chirurgen. Ob eine bestimmte Technik für Sie geeignet ist und welches Ergebnis Sie realistischerweise erwarten können, lässt sich nur durch eine direkte klinische Untersuchung beurteilen.",
        ],
      },
      {
        heading: "Individuelle Ergebnisse können abweichen",
        paragraphs: [
          "Vorher-Nachher-Fotos, Videos und Patientengeschichten auf dieser Website spiegeln die Erfahrung einzelner Patientinnen und Patienten wider und werden als anschauliche Beispiele geteilt — nicht als Garantie, Zusicherung oder Vorhersage des Ergebnisses, das eine andere Person erzielen wird.",
          "Chirurgische Ergebnisse werden von vielen individuellen Faktoren beeinflusst — unter anderem Anatomie, Hautelastizität, Heilungsverlauf und allgemeinem Gesundheitszustand — und fallen von Person zu Person unterschiedlich aus.",
        ],
      },
      {
        heading: "Keine garantierten Ergebnisse",
        paragraphs: [
          "Top Surgery Care übernimmt keine Garantie, Zusicherung oder Gewährleistung hinsichtlich des Ergebnisses eines Eingriffs, einschließlich des ästhetischen Ergebnisses, der Narbenbildung, der Empfindungsfähigkeit oder des Genesungsverlaufs.",
        ],
      },
      {
        heading: "Chirurgisches Risiko",
        paragraphs: [
          "Wie jeder chirurgische Eingriff birgt auch eine Top-Surgery inhärente Risiken und die Möglichkeit von Komplikationen. Diese Risiken sollten vor Ihrer Entscheidung ausführlich und direkt mit Ihrem Chirurgen besprochen werden.",
        ],
      },
      {
        heading: "Erfahrungsberichte und Bewertungen",
        paragraphs: [
          "Erfahrungsberichte, Bewertungen und Video-Geschichten von Patientinnen und Patienten auf dieser Website spiegeln individuelle, persönliche Erfahrungen und Meinungen wider. Sie sind nicht als Garantie für eine ähnliche Erfahrung oder ein ähnliches Ergebnis gedacht und sollten auch nicht als solche verstanden werden.",
        ],
      },
      {
        heading: "Nicht für medizinische Notfälle",
        paragraphs: [
          "Diese Website ist nicht für die Nutzung in einem medizinischen Notfall bestimmt. Wenden Sie sich bei einem medizinischen Notfall bitte umgehend an den lokalen Rettungsdienst.",
        ],
      },
      {
        heading: "Qualifizierten medizinischen Rat einholen",
        paragraphs: [
          "Holen Sie bei Fragen zu einer medizinischen Erkrankung oder einem geplanten Eingriff stets den Rat eines qualifizierten Chirurgen oder einer anderen qualifizierten medizinischen Fachperson ein.",
        ],
      },
    ],
  },
};

export const kvkkPageContent: { en: KvkkPageCopy; de: KvkkPageCopy } = {
  en: {
    metaTitle: "KVKK Consent Form",
    metaDescription:
      "The official KVKK Consent Form for the Processing of Personal Data, provided as issued.",
    eyebrow: "Legal",
    heading: "KVKK Consent Form",
    intro: [
      "This page provides the official Consent Form for the Processing of Personal Data used by Neda Deniz International Medical Tourism and Travel Agency, in line with Turkish Law No. 6698 on the Protection of Personal Data (KVKK), for patients receiving health and health tourism services.",
      "The document below is provided exactly as issued and is not altered, shortened, or translated on this page. You can read it directly below, or open it in a new tab.",
    ],
    documentTitle: "KVKK Consent Form for the Processing of Personal Data",
    openLabel: "Open PDF in a new tab",
    fallbackNote: "If the document does not display below, use the link above to view it directly.",
  },
  de: {
    metaTitle: "KVKK-Einwilligungserklärung",
    metaDescription:
      "Die offizielle KVKK-Einwilligungserklärung zur Verarbeitung personenbezogener Daten, unverändert bereitgestellt.",
    eyebrow: "Rechtliches",
    heading: "KVKK Consent Form",
    intro: [
      "Diese Seite enthält die offizielle Einwilligungserklärung zur Verarbeitung personenbezogener Daten, die von der Neda Deniz International Medical Tourism and Travel Agency in Übereinstimmung mit dem türkischen Gesetz Nr. 6698 zum Schutz personenbezogener Daten (KVKK) für Patientinnen und Patienten verwendet wird, die Gesundheits- und medizintouristische Leistungen in Anspruch nehmen.",
      "Das nachstehende Dokument wird genau in der ausgestellten Fassung bereitgestellt und auf dieser Seite nicht verändert, gekürzt oder übersetzt. Sie können es direkt unten lesen oder in einem neuen Tab öffnen.",
    ],
    documentTitle: "KVKK-Einwilligungserklärung zur Verarbeitung personenbezogener Daten",
    openLabel: "PDF in neuem Tab öffnen",
    fallbackNote: "Falls das Dokument unten nicht angezeigt wird, nutzen Sie bitte den obigen Link, um es direkt zu öffnen.",
  },
};
