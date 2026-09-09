import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { LegalPageCopy } from "@/content/legalPages";

export function LegalPageLayout({ copy }: { copy: LegalPageCopy }) {
  return (
    <>
      <section className="border-b border-line">
        <Container className="py-16 md:py-20">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              {copy.eyebrow}
            </p>
            <h1 className="font-display text-display font-medium leading-[1.05] text-ink text-balance">
              {copy.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-ink-soft text-pretty">{copy.intro}</p>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl space-y-10">
            {copy.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-display text-h3 font-medium text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-body text-ink-soft">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
