import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { techniques } from "@/data/techniques";
import { topSurgeryPageContent } from "@/content/topSurgeryPage";
import { topSurgeryTechniquesPageContent, type TechniqueId } from "@/content/topSurgeryTechniquesPage";
import { uiContent } from "@/content/ui";
import { siteConfig } from "@/lib/site";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/top-surgery/techniques";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = topSurgeryTechniquesPageContent[locale];
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

export default async function TopSurgeryTechniquesPage() {
  const locale = await getLocale();
  const copy = topSurgeryTechniquesPageContent[locale];
  const parentCopy = topSurgeryPageContent[locale];
  const techniqueList = techniques[locale];
  // The three selection factors are identical for every technique in
  // src/data/techniques.ts — shown once here, in the selection section.
  const sharedConsiderations = techniqueList[0].considerations;

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

      {/* Introduction */}
      <section className="border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={copy.introduction.eyebrow} title={copy.introduction.heading} />
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-ink-soft text-pretty">
              <p>{copy.introduction.body}</p>
              <p>
                {copy.introduction.overviewNote.prefix}{" "}
                <Link href="/top-surgery" className={inlineLinkClass}>
                  {copy.introduction.overviewNote.linkLabel}
                </Link>
                {copy.introduction.overviewNote.suffix}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* One section per technique — Double Incision, Periareolar, Keyhole */}
      {techniqueList.map((technique, index) => {
        const detail = copy.details[technique.id as TechniqueId];
        const imageFirst = index % 2 === 0;

        return (
          <section
            key={technique.id}
            id={technique.id}
            className={`scroll-mt-24 border-b border-line ${index % 2 === 1 ? "bg-paper-alt/45" : ""}`}
          >
            <Container className="py-16 md:py-20">
              <Reveal>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className={imageFirst ? "" : "lg:order-2"}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-paper-deep">
                      <Image
                        src={technique.image}
                        alt={technique.imageAlt}
                        fill
                        quality={100}
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={imageFirst ? "" : "lg:order-1"}>
                    <h2 className="font-display text-h2 font-medium leading-[1.1] text-ink text-balance">
                      {detail.heading}
                    </h2>
                    <div className="mt-5 max-w-xl space-y-4 text-base leading-relaxed text-ink-soft">
                      {detail.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <p className={`mt-7 ${metaLabelClass}`}>{copy.factsLabel}</p>
                    <dl className="mt-3 max-w-xl divide-y divide-line border-y border-line">
                      {detail.facts.map((fact) => (
                        <div
                          key={fact.label}
                          className="grid gap-1 py-3 sm:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] sm:gap-6"
                        >
                          <dt className="text-sm font-medium text-ink">{fact.label}</dt>
                          <dd className="text-sm text-ink-soft">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      {/* Double Incision vs Keyhole */}
      <section id="double-incision-vs-keyhole" className="scroll-mt-24 border-b border-line bg-paper-alt/45">
        <Container className="py-16 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow={copy.compare.eyebrow}
              title={copy.compare.heading}
              description={copy.compare.description}
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto border border-line bg-paper">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <caption className="sr-only">{copy.compare.caption}</caption>
                <thead>
                  <tr className="border-b border-line bg-paper-alt/45">
                    <th scope="col" className="w-[24%] px-5 py-4">
                      <span className="sr-only">{copy.compare.featureLabel}</span>
                    </th>
                    <th scope="col" className="px-5 py-4 font-display text-h3 font-medium text-ink">
                      {copy.compare.doubleIncisionLabel}
                    </th>
                    <th scope="col" className="px-5 py-4 font-display text-h3 font-medium text-ink">
                      {copy.compare.keyholeLabel}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {copy.compare.rows.map((row) => (
                    <tr key={row.label}>
                      <th scope="row" className="px-5 py-4 align-top text-sm font-medium text-ink">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 align-top text-sm leading-relaxed text-ink-soft">
                        {row.doubleIncision}
                      </td>
                      <td className="px-5 py-4 align-top text-sm leading-relaxed text-ink-soft">
                        {row.keyhole}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft">{copy.compare.note}</p>
          </Reveal>
        </Container>
      </section>

      {/* How technique selection is discussed + consultation CTA */}
      <section id="choosing-a-technique" className="scroll-mt-24">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow={copy.selection.eyebrow}
                title={copy.selection.heading}
                description={copy.selection.description}
              />
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
                {copy.selection.doctorNote.prefix}{" "}
                <Link href="/about-dr-serkan-dinar" className={inlineLinkClass}>
                  {copy.selection.doctorNote.linkLabel}
                </Link>
                {copy.selection.doctorNote.suffix}
              </p>
              <Button
                href={siteConfig.contact.pageHref}
                variant="primary"
                size="lg"
                showArrow
                className="mt-8"
              >
                {copy.selection.consultationCtaLabel}
              </Button>
            </Reveal>

            <Reveal delay={100}>
              <p className={metaLabelClass}>{copy.selection.factorsLabel}</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {sharedConsiderations.map((factor) => (
                  <li key={factor} className="flex items-center gap-3 py-4 text-base text-ink">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {factor}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base leading-relaxed text-ink-soft">{copy.selection.abroadNote}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {copy.selection.journeyNote.prefix}{" "}
                <Link href="/patient-journey" className={inlineLinkClass}>
                  {copy.selection.journeyNote.linkLabel}
                </Link>
                {copy.selection.journeyNote.suffix}
              </p>
              <p className="mt-2 text-base leading-relaxed text-ink-soft">
                {copy.selection.turkeyNote.prefix}{" "}
                <Link href="/top-surgery-turkey" className={inlineLinkClass}>
                  {copy.selection.turkeyNote.linkLabel}
                </Link>
                {copy.selection.turkeyNote.suffix}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
