"use client";

import { useEffect, useId, useRef, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { EyeOffIcon } from "@/components/icons";

// Session-only content warning for the real surgical before/after photos in
// the Results section. Not an age-verification system — a confirmation the
// visitor can dismiss, remembered only for this browser session so it
// reappears after the tab/browser is closed.
const STORAGE_KEY = "top-surgery-care-results-18-confirmed";
// Same-tab sessionStorage writes don't fire the native "storage" event (that
// only fires in *other* tabs), so confirming re-broadcasts this event itself
// to notify every mounted gate — e.g. the homepage preview and /results —
// in the current tab.
const CONFIRM_EVENT = "top-surgery-care:results-gate-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CONFIRM_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CONFIRM_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    // sessionStorage unavailable (private browsing, etc.) — the warning
    // simply asks again, which is the safe default.
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

export function ResultsAgeGate({ children }: { children: ReactNode }) {
  const confirmed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const headingId = useId();
  const descId = useId();
  const confirmButtonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!confirmed) {
      confirmButtonRef.current?.focus();
    }
  }, [confirmed]);

  const handleConfirm = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore — worst case the warning re-appears on the next image.
    }
    window.dispatchEvent(new Event(CONFIRM_EVENT));
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden={!confirmed}
        inert={!confirmed || undefined}
        className={
          confirmed
            ? undefined
            : "pointer-events-none scale-105 select-none blur-[44px] brightness-[0.32] saturate-50"
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
          className="absolute inset-0 z-20 flex items-center justify-center p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-[#071A2B]/85" />

          <div className="relative w-full max-w-md border border-white/10 bg-[#071A2B] px-6 py-8 text-center shadow-2xl sm:px-10 sm:py-10">
            <span className="mx-auto mb-1 block h-px w-10 bg-linear-to-r from-[#A9DDF5] via-white to-[#F3C2D4]" />

            <span className="mx-auto mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#A9DDF5]/40 text-[#A9DDF5]">
              <EyeOffIcon className="h-5 w-5" />
            </span>

            <h2 id={headingId} className="mt-5 font-display text-xl font-medium text-white sm:text-2xl">
              18+ Content Warning
            </h2>
            <p id={descId} className="mt-4 text-sm leading-relaxed text-white/70">
              This section contains real surgical before-and-after images. These images
              are provided for medical and informational purposes.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <button
                ref={confirmButtonRef}
                type="button"
                onClick={handleConfirm}
                className="w-full bg-[#A9DDF5] px-6 py-3 text-sm font-medium text-[#071A2B] transition-colors duration-200 ease-[var(--ease-premium)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9DDF5]"
              >
                I am 18+ — View Results
              </button>
              <button
                type="button"
                onClick={handleGoBack}
                className="w-full border border-white/20 px-6 py-3 text-sm font-medium text-white/75 transition-colors duration-200 ease-[var(--ease-premium)] hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9DDF5]"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
