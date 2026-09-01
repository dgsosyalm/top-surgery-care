import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { NedaServiceIcon, type NedaServiceIconType } from "@/components/ui/neda-service-icon";
import { homeContent } from "@/content/home";

const supportIconTypes: NedaServiceIconType[] = ["airport", "accommodation", "coordination", "city-tour"];

export function PatientCoordination() {
  const { patientCoordination } = homeContent;

  return (
    <section className="border-b border-line" aria-label={patientCoordination.eyebrow}>
      <Container className="grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2px] bg-paper-deep">
            <Image
              src="/images/neda/nedadeniz.jpeg"
              alt="Neda Deniz"
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-3 flex items-center gap-3 text-left text-xs font-medium uppercase leading-none tracking-[0.12em] text-ink-soft">
            <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
            {patientCoordination.eyebrow}
          </p>
          <h2 className="font-display text-h2 font-medium leading-[1.1] text-ink">
            {patientCoordination.heading}
          </h2>
          <p className="mt-3 text-sm text-ink-faint">{patientCoordination.role}</p>
          <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">
            {patientCoordination.body}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {patientCoordination.supportItems.map((item, index) => (
              <div
                key={item.name}
                tabIndex={0}
                className="group flex items-center gap-3 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent-sky/50 focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
              >
                <NedaServiceIcon
                  type={supportIconTypes[index]}
                  className="h-[38px] w-[38px] sm:h-[42px] sm:w-[42px] lg:h-[46px] lg:w-[46px]"
                />
                <span className="text-sm text-ink-soft transition-colors duration-300 ease-[var(--ease-premium)] group-hover:text-ink group-focus-visible:text-ink group-active:text-ink">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-xl text-sm italic text-ink-soft">
            {patientCoordination.transition}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
