import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArrowRightIcon } from "@/components/icons";
import { techniques } from "@/data/techniques";
import { patientJourneySteps } from "@/data/patientJourney";
import { homeContent } from "@/content/home";
import { topSurgeryPageContent } from "@/content/topSurgeryPage";
import { topSurgeryTurkeyPageContent } from "@/content/topSurgeryTurkeyPage";
import { uiContent } from "@/content/ui";
import { siteConfig } from "@/lib/site";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/top-surgery-turkey";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = topSurgeryTurkeyPageContent[locale];
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

export default async function TopSurgeryTurkeyPage() {
  const locale = await getLocale();
  const copy = topSurgeryTurkeyPageContent[locale];
  const parentCopy = topSurgeryPageContent[locale];
  const { patientCoordination, surgicalApproach } = homeContent[locale];
  const techniqueList = techniques[locale];
  const journeySteps = patientJourneySteps[locale];

  return (
    <>
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
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              {copy.intro.eyebrow}
            </p>
            <h1 className="font-display text-display font-medium leading-[1.05] text-ink text-balance">
              {copy.intro.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">{copy.intro.lead}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Button href={siteConfig.contact.pageHref} variant="primary" size="lg" showArrow>
                {copy.intro.consultationCtaLabel}
              </Button>
              <Button href="/patient-journey" variant="secondary" size="lg">
                {copy.intro.journeyCtaLabel}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Top surgery in Turkey — overview for international patients */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.overview.eyebrow} title={copy.overview.heading} />
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft text-pretty">
              {copy.overview.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Surgeon */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.surgeon.eyebrow}
              title={copy.surgeon.heading}
              description={copy.surgeon.body}
            />
            <Button
              href={copy.surgeon.cta.href}
              variant="secondary"
              size="md"
              showArrow
              className="mt-8"
            >
              {copy.surgeon.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Available surgical techniques — each card links to its full detail on /top-surgery */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.techniques.eyebrow}
              title={copy.techniques.heading}
              description={copy.techniques.description}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {techniqueList.map((technique, index) => (
              <Reveal key={technique.id} delay={index * 100}>
                <Link
                  href={`/top-surgery#${technique.id}`}
                  className="group relative flex h-full flex-col overflow-hidden border border-line bg-paper transition-colors duration-300 ease-[var(--ease-premium)] hover:border-ink-faint"
                >
                  <span className="absolute inset-x-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-linear-to-r from-accent-sky to-accent-rose transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-x-100" />
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-deep">
                    <Image
                      src={technique.image}
                      alt={technique.imageAlt}
                      fill
                      quality={100}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-h3 font-medium text-ink">{technique.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {technique.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-ink-soft">
                      {surgicalApproach.learnMoreLabel}
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={techniqueList.length * 100}>
            <Button href="/top-surgery" variant="secondary" size="md" showArrow className="mt-12">
              {copy.techniques.allTechniquesLabel}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* International patient journey */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.journey.eyebrow} title={copy.journey.heading} />
          </Reveal>

          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {journeySteps.map((step, index) => (
              <li key={step.id}>
                <Reveal delay={index * 100} className="border-t border-ink pt-6">
                  <span className="font-display text-3xl font-medium text-ink-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-h3 font-medium text-ink">{step.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal delay={journeySteps.length * 100}>
            <Button
              href={copy.journey.cta.href}
              variant="secondary"
              size="md"
              showArrow
              className="mt-12"
            >
              {copy.journey.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Travel / arrival coordination */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow={copy.arrival.eyebrow}
                title={copy.arrival.heading}
                description={copy.arrival.body}
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
                {copy.arrival.itemsLabel}
              </p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {patientCoordination.supportItems.map((item) => (
                  <li key={item.name} className="flex items-center gap-3 py-4 text-base text-ink">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {item.name}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                {patientCoordination.transition}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Recovery and follow-up */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.recovery.eyebrow}
              title={copy.recovery.heading}
              description={copy.recovery.body}
            />
            <Button
              href={copy.recovery.cta.href}
              variant="secondary"
              size="md"
              showArrow
              className="mt-8"
            >
              {copy.recovery.cta.label}
            </Button>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">
              {copy.recovery.faqNote.prefix}{" "}
              <Link href="/faq" className={inlineLinkClass}>
                {copy.recovery.faqNote.linkLabel}
              </Link>
              {copy.recovery.faqNote.suffix}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Patients travelling from the UK — factual and process-focused only:
          no pricing, waiting-time or healthcare-system comparisons. */}
      <section className="bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.uk.eyebrow} title={copy.uk.heading} />
            <p className="mt-4 max-w-2xl text-lead text-ink-soft text-pretty">{copy.uk.body}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {copy.uk.journeyNote.prefix}{" "}
              <Link href="/patient-journey" className={inlineLinkClass}>
                {copy.uk.journeyNote.linkLabel}
              </Link>
              {copy.uk.journeyNote.suffix}
            </p>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
