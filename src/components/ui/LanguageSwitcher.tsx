"use client";

import { useLocaleSwitcher } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";
import type { Locale } from "@/i18n/config";

const options: { locale: Locale; flag: string }[] = [
  { locale: "en", flag: "🇬🇧" },
  { locale: "de", flag: "🇩🇪" },
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
      {options.map(({ locale: optionLocale, flag }) => {
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
            <span aria-hidden="true" className="text-sm leading-none">
              {flag}
            </span>
            {dict.languageSwitcher[optionLocale]}
          </button>
        );
      })}
    </div>
  );
}
