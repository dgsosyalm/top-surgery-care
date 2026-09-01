import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { results } from "@/data/results";
import { homeContent } from "@/content/home";

const IMAGE_CLASS =
  "group relative block aspect-square w-full overflow-hidden rounded-[2px]";
const PHOTO_CLASS =
  "object-cover transition-[transform,filter] duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.03] group-hover:brightness-105";

export function ResultsPreview() {
  const { resultsPreview } = homeContent;
  const [featured, ...rest] = results.slice(0, 3);

  return (
    <section aria-label={resultsPreview.heading}>
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading title={resultsPreview.heading} description={resultsPreview.body} />
        </Reveal>

        <div className="mt-10 grid grid-cols-3 items-start gap-3 md:gap-4">
          <Reveal className="col-span-2 row-span-2">
            <Link href={`/results#${featured.id}`} className={IMAGE_CLASS} aria-label={featured.alt}>
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                sizes="(min-width: 768px) 44vw, 66vw"
                className={PHOTO_CLASS}
              />
            </Link>
          </Reveal>

          {rest.map((image, index) => (
            <Reveal key={image.id} delay={80 + index * 60}>
              <Link href={`/results#${image.id}`} className={IMAGE_CLASS} aria-label={image.alt}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 33vw"
                  className={PHOTO_CLASS}
                />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <Link
            href="/results"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-soft"
          >
            View all results
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
