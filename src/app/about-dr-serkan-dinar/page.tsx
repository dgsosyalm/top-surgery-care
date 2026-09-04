import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { doctorProfileContent } from "@/content/doctorProfile";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/about-dr-serkan-dinar/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const p = doctorProfileContent[locale];

  return {
    title: `${p.name} — ${p.title}`,
    description: p.metaDescription,
    alternates: {
      canonical: PAGE_PATH,
    },
    openGraph: {
      title: `${p.name} — ${p.title}`,
      description: p.metaDescription,
      url: PAGE_PATH,
      type: "profile",
      images: [
        {
          url: "/images/doctor/serkandinar.jpg",
          alt: p.photoAlt,
        },
      ],
    },
  };
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line" aria-label={title}>
      <Container className="py-14 md:py-16">
        <Reveal>
          <h2 className="font-display text-h3 font-medium text-ink">{title}</h2>
          <div className="mt-8">{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}

function PlainList({ items }: { items: readonly string[] }) {
  return (
    <ul className="divide-y divide-line">
      {items.map((item) => (
        <li key={item} className="py-4 text-base leading-relaxed text-ink-soft first:pt-0">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function AboutDrSerkanDinarPage() {
  const locale = await getLocale();
  const p = doctorProfileContent[locale];
  const s = p.sections;

  return (
    <>
      <script
        type="application/ld+json"
        // Static, approved content only — safe to embed directly.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: p.name,
            jobTitle: p.title,
            description: p.metaDescription,
            image: `${siteConfig.url}/images/doctor/serkandinar.jpg`,
            url: `${siteConfig.url}${PAGE_PATH}`,
            alumniOf: p.education
              .filter((item) => item.institution.toLowerCase().includes("university"))
              .map((item) => item.institution),
          }),
        }}
      />

      {/* Intro */}
      <section className="border-b border-line">
        <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2px] bg-paper-deep">
              <Image
                src="/images/doctor/serkandinar.jpg"
                alt={p.photoAlt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              {p.title}
            </p>
            <h1 className="font-display text-display font-medium leading-[1.05] text-ink">{p.name}</h1>
          </Reveal>
        </Container>
      </section>

      {/* Biography */}
      <SubSection title={s.biography}>
        <div className="max-w-2xl space-y-5">
          {p.biography.map((paragraph) => (
            <p key={paragraph} className="text-lead text-ink-soft text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      </SubSection>

      {/* Education */}
      <SubSection title={s.education}>
        <ul className="divide-y divide-line">
          {p.education.map((item) => (
            <li key={item.degree} className="py-4 first:pt-0">
              <p className="text-base font-medium text-ink">{item.degree}</p>
              <p className="mt-1 text-sm text-ink-soft">{item.institution}</p>
            </li>
          ))}
        </ul>
      </SubSection>

      {/* Professional Experience */}
      <SubSection title={s.experience}>
        <ul className="divide-y divide-line">
          {p.experience.map((item) => (
            <li
              key={item.place}
              className="flex flex-col justify-between gap-1 py-4 first:pt-0 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <div>
                <p className="text-base font-medium text-ink">{item.place}</p>
                <p className="mt-1 text-sm text-ink-soft">{item.role}</p>
              </div>
              <p className="shrink-0 text-sm text-ink-faint">{item.period}</p>
            </li>
          ))}
        </ul>
      </SubSection>

      {/* Areas of Expertise */}
      <SubSection title={s.expertise}>
        <PlainList items={p.expertise} />
      </SubSection>

      {/* Scientific Publications */}
      <SubSection title={s.publications}>
        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              {s.publicationsInternational}
            </h3>
            <ul className="mt-4 divide-y divide-line">
              {p.publications.international.map((item) => (
                <li key={item.title} className="py-4 first:pt-0">
                  <p className="text-base text-ink">{item.title}</p>
                  <p className="mt-1 text-sm italic text-ink-soft">{item.venue}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              {s.publicationsNational}
            </h3>
            <ul className="mt-4 divide-y divide-line">
              {p.publications.national.map((item) => (
                <li key={item.title} className="py-4 first:pt-0">
                  <p className="text-base text-ink">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SubSection>

      {/* Scientific Presentations */}
      <SubSection title={s.presentations}>
        <div className="space-y-10">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              {s.presentationsInternational}
            </h3>
            <div className="mt-4">
              <PlainList items={p.presentations.international} />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
              {s.presentationsNational}
            </h3>
            <div className="mt-4">
              <PlainList items={p.presentations.national} />
            </div>
          </div>
        </div>
      </SubSection>

      {/* Specialization Thesis */}
      <SubSection title={s.thesis}>
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft">{p.thesis}</p>
      </SubSection>

      {/* Congresses and Scientific Meetings */}
      <SubSection title={s.congresses}>
        <PlainList items={p.congresses} />
      </SubSection>

      {/* International Courses and Training */}
      <SubSection title={s.courses}>
        <PlainList items={p.courses} />
      </SubSection>

      {/* International Social Responsibility */}
      <SubSection title={s.volunteer}>
        <p className="text-base font-medium text-ink">{p.volunteer.heading}</p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">{p.volunteer.body}</p>
      </SubSection>

      {/* Closing CTA */}
      <section className="bg-paper-alt/45">
        <Container className="py-20 text-center md:py-24">
          <Reveal className="mx-auto max-w-lg">
            <p className="font-display text-h3 font-medium text-ink">{p.cta.heading}</p>
            <p className="mt-3 text-base text-ink-soft">{p.cta.body}</p>
            <Button href={p.cta.href} variant="secondary" size="md" showArrow className="mt-8">
              {p.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
