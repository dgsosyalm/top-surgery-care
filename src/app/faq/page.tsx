import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/lib/site";
import { getLocale } from "@/i18n/getLocale";
import { uiContent } from "@/content/ui";

const PAGE_PATH = "/faq";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { faqPage } = uiContent[locale];

  return {
    title: faqPage.metaTitle,
    description: faqPage.metaDescription,
    alternates: {
      canonical: PAGE_PATH,
    },
    openGraph: {
      title: faqPage.metaTitle,
      description: faqPage.metaDescription,
      url: PAGE_PATH,
      type: "website",
    },
  };
}

export default async function FaqPage() {
  const locale = await getLocale();
  const { faqPage } = uiContent[locale];
  const items = faqItems[locale];

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
            mainEntity: items.map((item) => ({
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
            {faqPage.metaTitle}
          </h1>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <FaqAccordion items={items} className="max-w-3xl" />
        </Container>
      </section>
    </>
  );
}
