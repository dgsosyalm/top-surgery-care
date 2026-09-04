import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { homeContent } from "@/content/home";
import { patientJourneyPageContent } from "@/content/patientJourneyPage";
import { patientJourneySteps } from "@/data/patientJourney";
import { siteConfig } from "@/lib/site";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/patient-journey/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = patientJourneyPageContent[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: PAGE_PATH,
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: PAGE_PATH,
      type: "website",
    },
  };
}

export default async function PatientJourneyPage() {
  const locale = await getLocale();
  const copy = patientJourneyPageContent[locale];
  const { hero } = homeContent[locale];
  const steps = patientJourneySteps[locale];

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
                name: copy.metaTitle,
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
            <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">
              {hero.subtext}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Full journey, step by step */}
      <section className="bg-paper-alt/45">
        <Container className="py-20 md:py-28">
          <Reveal>
            <SectionHeading eyebrow={copy.stages.eyebrow} title={copy.stages.heading} />
          </Reveal>

          <ol className="mt-14 divide-y divide-line border-t border-line">
            {steps.map((step, index) => (
              <li key={step.id}>
                <Reveal delay={index * 80}>
                  <div className="grid gap-4 py-10 md:grid-cols-[minmax(0,0.25fr)_minmax(0,1fr)] md:gap-10 md:py-12">
                    <span className="font-display text-3xl font-medium text-ink-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-h3 font-medium text-ink">{step.name}</h3>
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
