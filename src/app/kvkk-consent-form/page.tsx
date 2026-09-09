import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ImagePendingIcon } from "@/components/icons";
import { kvkkPageContent } from "@/content/legalPages";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/kvkk-consent-form";
const PDF_PATH = "/docs/legal/kvkk-consent-form.pdf";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = kvkkPageContent[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: PAGE_PATH,
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: PAGE_PATH,
      type: "website",
    },
  };
}

export default async function KvkkConsentFormPage() {
  const locale = await getLocale();
  const copy = kvkkPageContent[locale];

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
            {copy.intro.map((paragraph) => (
              <p key={paragraph} className="mt-6 max-w-2xl text-lead text-ink-soft text-pretty">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-20">
          <Reveal className="max-w-3xl">
            <Button href={PDF_PATH} target="_blank" rel="noopener noreferrer" showArrow>
              {copy.openLabel}
            </Button>

            {/* Inline preview for desktop/tablet, where browsers reliably render
                PDFs in an <object>. Mobile browsers are inconsistent here, so
                mobile visitors rely on the button above, which always works. */}
            <div className="mt-6 hidden overflow-hidden rounded-[2px] border border-line bg-paper-deep md:block">
              <object data={PDF_PATH} type="application/pdf" className="h-[75vh] w-full" title={copy.documentTitle}>
                <p className="p-8 text-sm text-ink-soft">{copy.fallbackNote}</p>
              </object>
            </div>

            <div className="mt-6 flex items-center gap-3 border border-dashed border-line bg-paper-deep p-5 text-sm text-ink-soft md:hidden">
              <ImagePendingIcon className="h-6 w-6 shrink-0 text-ink-faint" />
              <p>{copy.fallbackNote}</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
