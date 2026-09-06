"use client";

import type { ComponentType } from "react";
import { useLocaleSwitcher } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";
import type { Locale } from "@/i18n/config";

// Windows' emoji font renders 🇬🇧/🇩🇪 as their fallback letter pair ("GB",
// "DE") instead of a flag glyph, so the flag must be drawn — an emoji
// character alone isn't a reliable visible flag across platforms. These are
// small inline SVGs (not raster assets) so no new files are needed.
function GbFlag() {
  return (
    <svg
      viewBox="0 0 30 20"
      width="18"
      height="12"
      aria-hidden="true"
      className="shrink-0 rounded-[1.5px]"
    >
      <rect width="30" height="20" fill="#00247D" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFF" strokeWidth="4" fill="none" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" strokeWidth="1.5" fill="none" />
      <path d="M15,0 V20 M0,10 H30" stroke="#FFF" strokeWidth="6" fill="none" />
      <path d="M15,0 V20 M0,10 H30" stroke="#CF142B" strokeWidth="3.5" fill="none" />
    </svg>
  );
}

function DeFlag() {
  return (
    <svg
      viewBox="0 0 30 20"
      width="18"
      height="12"
      aria-hidden="true"
      className="shrink-0 rounded-[1.5px]"
    >
      <rect width="30" height="20" fill="#000" />
      <rect width="30" height="13.33" y="6.67" fill="#DD0000" />
      <rect width="30" height="6.67" y="13.33" fill="#FFCE00" />
    </svg>
  );
}

const options: { locale: Locale; Flag: ComponentType }[] = [
  { locale: "en", Flag: GbFlag },
  { locale: "de", Flag: DeFlag },
];

// A minimal segmented pill, not inline text — the active language reads as a
// solid paper-colored chip against the dark header, everything else stays
// quiet. Kept deliberately restrained (no gradient fill) so it sits inside
// the header without competing with the FTM gradient reserved for nav hover.
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocaleSwitcher();
  const dict = uiContent[locale];

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-white/15 bg-white/[0.04] p-1 ${className}`}
    >
      {options.map(({ locale: optionLocale, Flag }) => {
        const isActive = locale === optionLocale;
        return (
          <button
            key={optionLocale}
            type="button"
            onClick={() => setLocale(optionLocale)}
            aria-current={isActive ? "true" : undefined}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-300 ease-[var(--ease-premium)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky/60 ${
              isActive
                ? "bg-paper text-ink shadow-[0_1px_4px_rgba(0,0,0,0.25)]"
                : "text-paper/45 hover:bg-white/8 hover:text-paper/75"
            }`}
          >
            <Flag />
            {dict.languageSwitcher[optionLocale]}
          </button>
        );
      })}
    </div>
  );
}
