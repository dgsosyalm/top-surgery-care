"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { ResultsAgeGate } from "@/components/ui/ResultsAgeGate";
import { results } from "@/data/results";
import { useLocale } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

export function ResultsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const locale = useLocale();
  const images = results[locale];
  const { openLargerViewPrefix } = uiContent[locale].resultsPage;

  return (
    <ResultsAgeGate>
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {images.map((image, index) => (
          <Reveal key={image.id} delay={index * 70}>
            <button
              type="button"
              id={image.id}
              onClick={() => setOpenIndex(index)}
              className="group relative block aspect-square w-full scroll-mt-24 overflow-hidden rounded-[2px]"
              aria-label={`${openLargerViewPrefix}${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-[transform,filter] duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.03] group-hover:brightness-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </ResultsAgeGate>
  );
}
