"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { ResultsAgeGate } from "@/components/ui/ResultsAgeGate";
import { results } from "@/data/results";

// Desktop bento rhythm: large / small / small, alternating which side is
// featured per row. Every tile stays a true aspect-square (matching the
// source images exactly, zero crop) — only the grid footprint varies, never
// the image's own proportions.
const TILE_SPAN = ["md:col-span-2", "md:col-span-1", "md:col-span-1"];
// Mobile/tablet rhythm: alternating width and offset so a single column
// still reads as composed, not a plain stacked list.
const TILE_RHYTHM = [
  "mb-8 sm:mb-0",
  "mb-14 sm:mb-0 sm:mt-10 md:mt-0 max-w-[85%] mx-auto sm:max-w-none sm:mx-0",
  "mb-8 sm:mb-0",
];

export function ResultsGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ResultsAgeGate>
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
        {results.map((image, index) => (
          <Reveal key={image.id} delay={index * 70} className={`${TILE_SPAN[index]} ${TILE_RHYTHM[index]}`}>
            <button
              type="button"
              id={image.id}
              onClick={() => setOpenIndex(index)}
              className="group relative block aspect-square w-full scroll-mt-24 overflow-hidden rounded-[2px]"
              aria-label={`Open larger view: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
                className="object-cover transition-[transform,filter] duration-500 ease-[var(--ease-premium)] group-hover:scale-[1.03] group-hover:brightness-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={results}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </ResultsAgeGate>
  );
}
