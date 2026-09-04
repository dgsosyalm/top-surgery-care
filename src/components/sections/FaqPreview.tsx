import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/faq";
import { homeContent } from "@/content/home";
import { getLocale } from "@/i18n/getLocale";

export async function FaqPreview() {
  const locale = await getLocale();
  const { faqPreview } = homeContent[locale];
  const items = faqItems[locale];

  return (
    <section aria-label={faqPreview.eyebrow}>
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading eyebrow={faqPreview.eyebrow} title={faqPreview.heading} />
        </Reveal>

        <FaqAccordion items={items} className="mt-10 max-w-3xl" />

        <Reveal delay={items.length * 60}>
          <Button href={faqPreview.cta.href} variant="secondary" size="md" showArrow className="mt-8">
            {faqPreview.cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
