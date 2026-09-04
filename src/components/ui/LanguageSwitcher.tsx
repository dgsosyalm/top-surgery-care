"use client";

import { useLocaleSwitcher } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocaleSwitcher();
  const dict = uiContent[locale];

  return (
    <div className={`flex items-center gap-1.5 text-sm font-medium ${className}`}>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={`inline-flex items-center gap-1 transition-colors ${
          locale === "en" ? "text-paper" : "text-paper/40 hover:text-paper/70"
        }`}
      >
        <span aria-hidden="true">🇬🇧</span>
        {dict.languageSwitcher.en}
      </button>
      <span aria-hidden="true" className="text-paper/40">
        /
      </span>
      <button
        type="button"
        onClick={() => setLocale("de")}
        aria-current={locale === "de" ? "true" : undefined}
        className={`inline-flex items-center gap-1 transition-colors ${
          locale === "de" ? "text-paper" : "text-paper/40 hover:text-paper/70"
        }`}
      >
        <span aria-hidden="true">🇩🇪</span>
        {dict.languageSwitcher.de}
      </button>
    </div>
  );
}
