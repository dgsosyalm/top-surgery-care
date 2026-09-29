import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { topSurgeryPageContent } from "@/content/topSurgeryPage";
import { topSurgeryRecoveryPageContent } from "@/content/topSurgeryRecoveryPage";
import { uiContent } from "@/content/ui";
import { siteConfig } from "@/lib/site";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/top-surgery/recovery";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = topSurgeryRecoveryPageContent[locale];
  const { rootMetadata } = uiContent[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: PAGE_PATH,
    },
    // A page-level openGraph replaces the layout's whole openGraph object
    // (Next merges metadata shallowly), so siteName/locale/images are
    // restated here to keep this page's link preview identical to the rest
    // of the site's — the neutral brand logo, never a patient photo.
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: PAGE_PATH,
      siteName: siteConfig.name,
      locale: rootMetadata.ogLocale,
      type: "website",
      images: [
        {
          url: "/images/logo/top-surgery-care-logo.jpeg",
          width: 1250,
          height: 1250,
          alt: rootMetadata.ogImageAlt,
        },
      ],
    },
  };
}

const inlineLinkClass = "text-ink underline underline-offset-2 hover:text-ink-soft";

const eyebrowClass =
  "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft";
const eyebrowRule = "h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky";
const metaLabelClass = "text-xs font-medium uppercase tracking-[0.14em] text-ink-faint";
const bodyClass = "mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft text-pretty";

export default async function TopSurgeryRecoveryPage() {
  const locale = await getLocale();
  const copy = topSurgeryRecoveryPageContent[locale];
  const parentCopy = topSurgeryPageContent[locale];
  const faqItems = copy.faq.items;

  return (
    <>
      <script
        type="application/ld+json"
        // Generated directly from the same items the FAQ section renders
        // below, so the structured data can never drift from what's on screen.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            url: `${siteConfig.url}${PAGE_PATH}`,
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: locale === "de" ? "Startseite" : "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: parentCopy.metaTitle,
                item: `${siteConfig.url}/top-surgery`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: copy.intro.heading,
                item: `${siteConfig.url}${PAGE_PATH}`,
              },
            ],
          }),
        }}
      />

      {/* Intro */}
      <section className="border-b border-line">
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className={eyebrowClass}>
              <span className={eyebrowRule} />
              {copy.intro.eyebrow}
            </p>
            <h1 className="font-display text-display font-medium leading-[1.05] text-ink text-balance">
              {copy.intro.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">{copy.intro.lead}</p>
            <nav aria-label={copy.onThisPage.label} className="mt-10">
              <p className={metaLabelClass}>{copy.onThisPage.label}</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {copy.onThisPage.items.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className={inlineLinkClass}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </Container>
      </section>

      {/* What recovery involves */}
      <section id="what-recovery-involves" className="scroll-mt-24 border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.whatItInvolves.eyebrow} title={copy.whatItInvolves.heading} />
            <div className={bodyClass}>
              {copy.whatItInvolves.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {copy.whatItInvolves.techniquesNote.prefix}{" "}
                <Link href="/top-surgery/techniques" className={inlineLinkClass}>
                  {copy.whatItInvolves.techniquesNote.linkLabel}
                </Link>
                {copy.whatItInvolves.techniquesNote.suffix}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Early recovery */}
      <section id="early-recovery" className="scroll-mt-24 border-b border-line">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow={copy.earlyRecovery.eyebrow}
                title={copy.earlyRecovery.heading}
                description={copy.earlyRecovery.description}
              />
            </Reveal>
            <Reveal delay={100}>
              <p className={metaLabelClass}>{copy.earlyRecovery.itemsLabel}</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {copy.earlyRecovery.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 py-4 text-base text-ink">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">{copy.earlyRecovery.note}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Returning to everyday activities */}
      <section id="everyday-activities" className="scroll-mt-24 border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.everydayActivities.eyebrow}
              title={copy.everydayActivities.heading}
            />
            <div className={bodyClass}>
              {copy.everydayActivities.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Follow-up for international patients */}
      <section id="international-follow-up" className="scroll-mt-24 border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.internationalFollowUp.eyebrow}
              title={copy.internationalFollowUp.heading}
            />
            <div className={bodyClass}>
              {copy.internationalFollowUp.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {copy.internationalFollowUp.journeyNote.prefix}{" "}
                <Link href="/patient-journey" className={inlineLinkClass}>
                  {copy.internationalFollowUp.journeyNote.linkLabel}
                </Link>
                {copy.internationalFollowUp.journeyNote.suffix}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* When to contact your medical team — general and safety-focused only:
          no symptom list, no timelines, no medication guidance. */}
      <section id="contact-your-medical-team" className="scroll-mt-24 border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.contactTeam.eyebrow} title={copy.contactTeam.heading} />
            <div className={bodyClass}>
              {copy.contactTeam.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.heading} />
          </Reveal>
          <FaqAccordion items={faqItems} className="mt-10 max-w-3xl" />
        </Container>
      </section>

      {/* Next steps */}
      <section className="bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.nextSteps.eyebrow} title={copy.nextSteps.heading} />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {copy.nextSteps.prefix}{" "}
              <Link href="/top-surgery" className={inlineLinkClass}>
                {copy.nextSteps.topSurgeryLabel}
              </Link>
              {copy.nextSteps.journeyPrefix}{" "}
              <Link href="/patient-journey" className={inlineLinkClass}>
                {copy.nextSteps.journeyLabel}
              </Link>
              {copy.nextSteps.contactPrefix}{" "}
              <Link href={siteConfig.contact.pageHref} className={inlineLinkClass}>
                {copy.nextSteps.contactLabel}
              </Link>
              {copy.nextSteps.suffix}
            </p>
            <Button
              href={siteConfig.contact.pageHref}
              variant="primary"
              size="lg"
              showArrow
              className="mt-8"
            >
              {copy.nextSteps.consultationCtaLabel}
            </Button>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
