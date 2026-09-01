import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";

export function DoctorIntro() {
  const { doctorIntro } = homeContent;

  return (
    <section className="border-b border-line" aria-label={doctorIntro.eyebrow}>
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2px] bg-paper-deep">
            <Image
              src="/images/doctor/serkandinar.jpg"
              alt="Dr. Serkan Dinar, plastic, reconstructive and aesthetic surgeon at Top Surgery Care"
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
            <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
            {doctorIntro.eyebrow}
          </p>
          <h2 className="font-display text-h2 font-medium leading-[1.1] text-ink">
            {doctorIntro.heading}
          </h2>
          <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">
            {doctorIntro.body}
          </p>
          <Button href={doctorIntro.cta.href} variant="secondary" size="md" showArrow className="mt-8">
            {doctorIntro.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
