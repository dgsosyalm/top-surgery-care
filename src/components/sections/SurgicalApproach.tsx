import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { homeContent } from "@/content/home";
import { techniques } from "@/data/techniques";

export function SurgicalApproach() {
  const { surgicalApproach } = homeContent;

  return (
    <section aria-label={surgicalApproach.eyebrow}>
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={surgicalApproach.eyebrow}
            title={surgicalApproach.heading}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((technique, index) => (
            <Reveal key={technique.id} delay={index * 100}>
              <a
                href={`/top-surgery#${technique.id}`}
                className="group flex h-full flex-col overflow-hidden border border-line bg-paper transition-colors duration-300 ease-[var(--ease-premium)] hover:border-ink-faint"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-deep">
                  <Image
                    src={technique.image}
                    alt={technique.imageAlt}
                    fill
                    quality={100}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-[var(--ease-premium)] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-h3 font-medium text-ink">
                    {technique.name}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft">
                    {technique.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-ink-soft">
                    {surgicalApproach.learnMoreLabel}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-sm italic text-ink-soft">
            {surgicalApproach.note}
          </p>
          <Button
            href={surgicalApproach.cta.href}
            variant="secondary"
            size="md"
            showArrow
            className="mt-8"
          >
            {surgicalApproach.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
