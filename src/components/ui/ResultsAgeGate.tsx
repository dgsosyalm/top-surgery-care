"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { EyeOffIcon } from "@/components/icons";
import { useLocale } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

// Content warning for the real surgical before/after photos in the Results
// section. Not an age-verification system — a per-view confirmation held
// only in React state, deliberately not persisted anywhere (no sessionStorage,
// localStorage, or cookies), so it reappears on every fresh mount: a page
// refresh, or navigating away and back. Initial state is `false` on both
// server and client, so there's nothing to reconcile on hydration and no
// frame where the protected content could be exposed unblurred.
export function ResultsAgeGate({
  children,
  compact = false,
}: {
  children: ReactNode;
  // Mobile only: the /results gallery stacks to a single column on small
  // screens, so its natural (blurred) content height can run to several
  // screens tall. An `absolute inset-0` dialog inherits that height,
  // making the backdrop look like one giant panel bleeding into whatever
  // comes after it. `compact` pins the dialog to the viewport instead
  // (`fixed`) below `sm`, and tightens the card's own spacing — `sm:` and
  // up (and every other ResultsAgeGate usage, which doesn't pass this
  // prop) render exactly as before.
  compact?: boolean;
}) {
  const [confirmed, setConfirmed] = useState(false);
  const headingId = useId();
  const descId = useId();
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const locale = useLocale();
  const { resultsGate: t } = uiContent[locale];

  useEffect(() => {
    if (!confirmed) {
      // preventScroll: focusing this button must not yank the viewport down
      // to wherever this gate happens to sit on the page (e.g. the homepage
      // preview, well below Hero/DoctorIntro/etc.) — it should only move
      // keyboard focus, never the scroll position.
      confirmButtonRef.current?.focus({ preventScroll: true });
    }
  }, [confirmed]);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={`relative ${confirmed ? "" : "min-h-[500px] sm:min-h-0"}`}>
      <div
        aria-hidden={!confirmed}
        inert={!confirmed || undefined}
        className={
          confirmed
            ? undefined
            : "overflow-hidden pointer-events-none scale-105 select-none blur-[44px] brightness-[0.32] saturate-50"
        }
      >
        {children}
      </div>

      {!confirmed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={headingId}
          aria-describedby={descId}
          className={`${compact ? "fixed sm:absolute" : "absolute"} inset-0 z-20 flex items-center justify-center p-4 sm:p-6`}
        >
          <div className="absolute inset-0 bg-[#071A2B]/85" />

          <div
            className={`relative w-full max-w-md border border-white/10 bg-[#071A2B] text-center shadow-2xl sm:px-10 sm:py-10 ${
              compact ? "px-5 py-5" : "px-6 py-6"
            }`}
          >
            <span className="mx-auto mb-1 block h-px w-10 bg-linear-to-r from-[#A9DDF5] via-white to-[#F3C2D4]" />

            <span
              className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#A9DDF5]/40 text-[#A9DDF5] sm:mt-6 ${
                compact ? "mt-3" : "mt-4"
              }`}
            >
              <EyeOffIcon className="h-5 w-5" />
            </span>

            <h2
              id={headingId}
              className={`font-display text-xl font-medium text-white sm:mt-5 sm:text-2xl ${compact ? "mt-3" : "mt-4"}`}
            >
              {t.heading}
            </h2>
            <p
              id={descId}
              className={`text-sm leading-relaxed text-white/70 sm:mt-4 ${compact ? "mt-2" : "mt-3"}`}
            >
              {t.body}
            </p>

            <div className={`flex flex-col gap-3 sm:mt-8 ${compact ? "mt-5" : "mt-6"}`}>
              <button
                ref={confirmButtonRef}
                type="button"
                onClick={handleConfirm}
                className="w-full bg-[#A9DDF5] px-6 py-3 text-sm font-medium text-[#071A2B] transition-colors duration-200 ease-[var(--ease-premium)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9DDF5]"
              >
                {t.confirmLabel}
              </button>
              <button
                type="button"
                onClick={handleGoBack}
                className="w-full border border-white/20 px-6 py-3 text-sm font-medium text-white/75 transition-colors duration-200 ease-[var(--ease-premium)] hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9DDF5]"
              >
                {t.goBackLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
