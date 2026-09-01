"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import { certificates } from "@/data/certificates";

export function FooterCertificates() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-5">
      <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-navy-soft">
        Certifications
      </h3>
      <div className="mt-3 flex flex-wrap gap-3">
        {certificates.map((cert, index) => (
          <button
            key={cert.id}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={`Open larger view: ${cert.alt}`}
            className="w-[85px] shrink-0 overflow-hidden rounded-[2px] border border-paper/20 bg-paper p-1 transition-opacity hover:opacity-90 sm:w-[100px] md:w-[115px]"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={cert.width}
              height={cert.height}
              sizes="(min-width: 768px) 115px, (min-width: 640px) 100px, 85px"
              className="h-auto w-full object-contain"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          images={certificates}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </div>
  );
}
