import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";

export function AffordableCare() {
  const { affordableCare } = homeContent;

  return (
    <section className="border-b border-line" aria-label={affordableCare.eyebrow}>
      <Container className="py-14 md:py-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              {affordableCare.eyebrow}
            </p>
            <h3 className="font-display text-h3 font-medium leading-[1.15] text-ink text-balance">
              {affordableCare.heading}
            </h3>
            <p className="mt-4 text-lead text-ink-soft text-pretty">
              {affordableCare.body}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
