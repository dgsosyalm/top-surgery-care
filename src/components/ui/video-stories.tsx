"use client";

import { useCallback, useEffect, useRef, useState, type RefObject, type WheelEvent } from "react";
import { ArrowRightIcon, ImagePendingIcon } from "@/components/icons";
import type { VideoStoryItem } from "@/data/videos";
import { useLocale } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

const CARD_WIDTH = "clamp(220px, 22vw, 280px)";

// Browsers cap how many <video> elements can hold decoded/loading data at
// once, and also cap concurrent connections per origin — mounting every
// source up front starves whichever cards come later in the row, and on a
// wide viewport a large margin lets most/all ten qualify simultaneously,
// each opening its own connection that competes with the rest of the
// page's images. Kept small enough to still preload just ahead of scroll
// (avoiding pop-in) without letting more than a couple of cards activate
// at once.
const ACTIVATE_ROOT_MARGIN = "0px 150px 0px 150px";

function PlayGlyph({ playing }: { playing: boolean }) {
  return playing ? (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 translate-x-[1px]" aria-hidden="true">
      <path d="M7 4.5v15l13-7.5-13-7.5z" />
    </svg>
  );
}

function MuteGlyph({ muted }: { muted: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z" />
      {muted ? (
        <path d="M16 9l4.5 6M20.5 9L16 15" />
      ) : (
        <path d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" />
      )}
    </svg>
  );
}

function VideoStoryCard({
  item,
  index,
  rowRef,
}: {
  item: VideoStoryItem;
  index: number;
  rowRef: RefObject<HTMLDivElement | null>;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const userPausedRef = useRef(false);
  const locale = useLocale();
  const t = uiContent[locale].videoStories;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper || isActive) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { root: rowRef.current, rootMargin: ACTIVATE_ROOT_MARGIN }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [isActive, rowRef]);

  useEffect(() => {
    if (isActive) videoRef.current?.load();
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper || hasError || !isActive) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (userPausedRef.current) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [hasError, isActive]);

  const togglePlay = () => {
    if (hasError) return;
    if (!isActive) {
      setIsActive(true);
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      video.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      ref={wrapperRef}
      className="group/card relative shrink-0 snap-start overflow-hidden rounded-[3px] bg-paper-deep transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:scale-[1.015] focus-within:-translate-y-1 focus-within:scale-[1.015]"
      style={{ width: CARD_WIDTH, aspectRatio: "3 / 4" }}
    >
      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-faint">
          <ImagePendingIcon className="h-8 w-8" />
          <span className="sr-only">{t.unavailable}</span>
        </div>
      ) : (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          onError={() => setHasError(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          {isActive && <source src={item.src} type={item.type} />}
        </video>
      )}

      {!hasError && (
        <>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? `${t.pausePrefix} ${index + 1}` : `${t.playPrefix} ${index + 1}`}
            className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 focus-visible:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur-sm transition-opacity duration-300 ease-[var(--ease-premium)] ${
                isPlaying
                  ? "opacity-0 group-hover/card:opacity-90 group-focus-within/card:opacity-90"
                  : "opacity-90"
              }`}
            >
              <PlayGlyph playing={isPlaying} />
            </span>
          </button>

          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? `${t.unmutePrefix} ${index + 1}` : `${t.mutePrefix} ${index + 1}`}
            className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <MuteGlyph muted={isMuted} />
          </button>
        </>
      )}
    </div>
  );
}

export function VideoStoryRow({ items }: { items: readonly VideoStoryItem[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const locale = useLocale();
  const t = uiContent[locale].videoStories;

  const updateScrollState = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;
    setCanScrollLeft(row.scrollLeft > 8);
    setCanScrollRight(row.scrollWidth - row.scrollLeft - row.clientWidth > 8);
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    updateScrollState();

    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(row);
    row.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      row.removeEventListener("scroll", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollNext = () => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: Math.min(row.clientWidth * 0.8, 560), behavior: "smooth" });
  };

  const scrollPrev = () => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: -Math.min(row.clientWidth * 0.8, 560), behavior: "smooth" });
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const row = rowRef.current;
    if (!row || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

    const atStart = row.scrollLeft <= 0;
    const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 1;
    if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) return;

    event.preventDefault();
    row.scrollLeft += event.deltaY;
  };

  return (
    <div className="relative">
      <div
        ref={rowRef}
        onWheel={handleWheel}
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 lg:mx-0 lg:gap-6 lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => (
          <VideoStoryCard key={item.id} item={item} index={index} rowRef={rowRef} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-r from-transparent to-paper transition-opacity duration-500 ease-[var(--ease-premium)] md:w-24 lg:w-28 ${
          canScrollRight ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        type="button"
        onClick={scrollPrev}
        aria-label={t.scrollPrev}
        tabIndex={canScrollLeft ? 0 : -1}
        className={`absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_4px_20px_rgba(20,23,31,0.16)] ring-1 ring-line transition-all duration-300 ease-[var(--ease-premium)] hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:h-11 sm:w-11 md:left-4 ${
          canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowRightIcon className="h-5 w-5 rotate-180" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        aria-label={t.scrollNext}
        tabIndex={canScrollRight ? 0 : -1}
        className={`absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_4px_20px_rgba(20,23,31,0.16)] ring-1 ring-line transition-all duration-300 ease-[var(--ease-premium)] hover:bg-ink hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:h-11 sm:w-11 md:right-4 ${
          canScrollRight ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
