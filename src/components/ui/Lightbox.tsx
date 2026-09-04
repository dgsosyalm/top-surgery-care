"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { CloseIcon, ArrowRightIcon } from "@/components/icons";
import { useLocale } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

const SWIPE_THRESHOLD_PX = 40;

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: {
  images: readonly { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const { lightbox: t } = uiContent[locale];
  const touchStartX = useRef<number | null>(null);

  const showPrev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange]
  );
  const showNext = useCallback(
    () => onIndexChange((index + 1) % images.length),
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, showPrev, showNext]);

  const image = images[index];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm outline-none md:p-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (delta > SWIPE_THRESHOLD_PX) showPrev();
        else if (delta < -SWIPE_THRESHOLD_PX) showNext();
        touchStartX.current = null;
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.close}
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white md:right-8 md:top-8"
      >
        <CloseIcon className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={showPrev}
        aria-label={t.previous}
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white md:left-6"
      >
        <ArrowRightIcon className="h-6 w-6 rotate-180" />
      </button>

      <button
        type="button"
        onClick={showNext}
        aria-label={t.next}
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white md:right-6"
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>

      <div className="relative aspect-square w-full max-w-2xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 768px) 640px, 90vw"
          className="object-contain"
          priority
        />
      </div>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/50 md:bottom-8">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
