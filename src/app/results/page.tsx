import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { ArrowRightIcon } from "@/components/icons";

const PAGE_TITLE = "Results";
const PAGE_DESCRIPTION =
  "A curated set of before and after results from Top Surgery Care, shown as a full editorial gallery.";
const PAGE_PATH = "/results";

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
    images: [
      {
        url: "/images/results/1.jpg",
        alt: "Top surgery before and after result — case 01",
      },
    ],
  },
};

export default function ResultsPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              Before &amp; After
            </p>
            <h1 className="font-display text-display font-medium leading-[1.05] text-ink text-balance">
              Results
            </h1>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 md:py-24">
          <ResultsGallery />
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-3 py-14 sm:flex-row sm:items-center sm:justify-between md:py-16">
          <p className="max-w-md text-base text-ink-soft">
            Curious what happens next, or have a question of your own?
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/patient-journey/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-soft"
            >
              See the Patient Journey
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-soft"
            >
              Contact us
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
