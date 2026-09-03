import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { ArrowRightIcon } from "@/components/icons";
import { techniques } from "@/data/techniques";
import { faqItems } from "@/data/faq";
import { patientJourneyPreviewSteps } from "@/data/patientJourney";
import { homeContent } from "@/content/home";
import { topSurgeryPageContent as copy } from "@/content/topSurgeryPage";
import { siteConfig } from "@/lib/site";

const PAGE_TITLE = "FTM Top Surgery";
const PAGE_DESCRIPTION =
  "Learn what FTM top surgery involves, the surgical techniques available, and what to expect as an international patient at Top Surgery Care.";
const PAGE_PATH = "/top-surgery";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
  },
};

export default function TopSurgeryPage() {
  const { topSurgeryOverview, surgicalApproach, patientJourney } = homeContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "FTM Top Surgery",
            alternateName: "Chest Masculinization Surgery",
            description: topSurgeryOverview.body,
            url: `${siteConfig.url}${PAGE_PATH}`,
          }),
        }}
      />
      <script
        type="application/ld+json"
        // Generated directly from faqItems, so it can never drift from what
        // the page actually renders below.
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
            <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">
              {homeContent.hero.subtext}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* What is Top Surgery */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={topSurgeryOverview.eyebrow}
              title={topSurgeryOverview.heading}
              description={topSurgeryOverview.body}
            />
          </Reveal>
        </Container>
      </section>

      {/* Who may consider */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.whoMayConsider.eyebrow}
              title={copy.whoMayConsider.heading}
              description={copy.whoMayConsider.body}
            />
          </Reveal>
        </Container>
      </section>

      {/* Surgical Techniques — compact overview grid, then full detail per technique */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20 md:pb-28">
          <Reveal>
            <SectionHeading eyebrow={copy.techniques.eyebrow} title={copy.techniques.heading} />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {techniques.map((technique, index) => (
              <Reveal key={technique.id} delay={index * 100}>
                <a
                  href={`#${technique.id}`}
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
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 md:mt-20">
            {techniques.map((technique, index) => (
              <div
                key={technique.id}
                id={technique.id}
                className="scroll-mt-24 border-t border-line py-14 first:border-t-0 first:pt-0"
              >
                <Reveal>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-paper-deep">
                        <Image
                          src={technique.image}
                          alt={technique.imageAlt}
                          fill
                          quality={100}
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <h3 className="font-display text-h2 font-medium leading-[1.1] text-ink">
                        {technique.name}
                      </h3>
                      <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                        {technique.detailedDescription}
                      </p>
                      <p className="mt-7 text-xs font-medium uppercase tracking-[0.14em] text-ink-faint">
                        {copy.techniques.considerationsLabel}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {technique.considerations.map((factor) => (
                          <li key={factor} className="flex items-center gap-2.5 text-sm text-ink-soft">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How technique selection is determined */}
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.techniqueSelection.eyebrow}
              title={copy.techniqueSelection.heading}
              description={surgicalApproach.note}
            />
          </Reveal>
        </Container>
      </section>

      {/* Patient Journey */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.journey.eyebrow} title={copy.journey.heading} />
          </Reveal>

          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {patientJourneyPreviewSteps.map((step, index) => (
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

          <Reveal delay={patientJourneyPreviewSteps.length * 100}>
            <Button
              href={patientJourney.cta.href}
              variant="secondary"
              size="md"
              showArrow
              className="mt-12"
            >
              {patientJourney.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Recovery */}
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
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.heading} />
          </Reveal>
          <FaqAccordion items={faqItems} className="mt-10 max-w-3xl" />
          <Reveal delay={faqItems.length * 60}>
            <Button href="/faq" variant="secondary" size="md" showArrow className="mt-8">
              See all FAQs
            </Button>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
