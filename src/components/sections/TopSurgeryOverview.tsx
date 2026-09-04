import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { homeContent } from "@/content/home";
import { getLocale } from "@/i18n/getLocale";

export async function TopSurgeryOverview() {
  const locale = await getLocale();
  const { topSurgeryOverview } = homeContent[locale];

  return (
    <section className="bg-paper-alt/45" aria-label={topSurgeryOverview.eyebrow}>
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={topSurgeryOverview.eyebrow}
            title={topSurgeryOverview.heading}
            description={topSurgeryOverview.body}
          />
          <Button
            href={topSurgeryOverview.cta.href}
            variant="secondary"
            size="md"
            showArrow
            className="mt-8"
          >
            {topSurgeryOverview.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
