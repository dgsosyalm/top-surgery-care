import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";
import { getPatientJourneyPreviewSteps } from "@/data/patientJourney";
import { getLocale } from "@/i18n/getLocale";

export async function PatientJourney() {
  const locale = await getLocale();
  const { patientJourney } = homeContent[locale];
  const patientJourneyPreviewSteps = getPatientJourneyPreviewSteps(locale);

  return (
    <section className="bg-paper-alt/45" aria-label={patientJourney.eyebrow}>
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={patientJourney.eyebrow}
            title={patientJourney.heading}
          />
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {patientJourneyPreviewSteps.map((step, index) => (
            <li key={step.id}>
              <Reveal delay={index * 100} className="border-t border-ink pt-6">
                <span className="font-display text-3xl font-medium text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-h3 font-medium text-ink">
                  {step.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={300}>
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
  );
}
