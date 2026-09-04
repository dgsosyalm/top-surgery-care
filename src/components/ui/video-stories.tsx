"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePendingIcon } from "@/components/icons";
import type { VideoStoryItem } from "@/data/videos";
import { useLocale } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

const CARD_WIDTH = "clamp(220px, 22vw, 280px)";

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

function VideoStoryCard({ item, index }: { item: VideoStoryItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const userPausedRef = useRef(false);
  const locale = useLocale();
  const t = uiContent[locale].videoStories;

  useEffect(() => {
    const video = videoRef.current;
    const wrapper = wrapperRef.current;
    if (!video || !wrapper || hasError) return;

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
  }, [hasError]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video || hasError) return;
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
          <source src={item.src} type={item.type} />
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
  return (
    <div
      className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] md:-mx-10 md:px-10 lg:mx-0 lg:snap-none lg:justify-center lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
    >
      {items.map((item, index) => (
        <VideoStoryCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}
