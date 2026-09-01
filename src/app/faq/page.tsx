import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/lib/site";

const PAGE_TITLE = "Frequently Asked Questions";
const PAGE_DESCRIPTION =
  "Answers to common questions about FTM top surgery, technique options, and what to expect as an international patient at Top Surgery Care.";
const PAGE_PATH = "/faq";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Generated directly from the same faqItems the page renders below,
        // so the structured data can never drift from what's on screen.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            url: `${siteConfig.url}${PAGE_PATH}`,
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <section className="border-b border-line">
        <Container className="py-20 md:py-28">
          <h1 className="font-display text-display font-medium leading-[1.05] text-ink">
            {PAGE_TITLE}
          </h1>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <FaqAccordion items={faqItems} className="max-w-3xl" />
        </Container>
      </section>
    </>
  );
}
