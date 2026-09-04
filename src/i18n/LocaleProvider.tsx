"use client";

import { createContext, useContext, useState, useTransition } from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { setLocaleCookie } from "@/i18n/actions";
import type { Locale } from "@/i18n/config";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  isPending: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

// Seeded from the root layout's server-resolved locale (from the cookie),
// so the very first client render already matches the server-rendered
// language — no flash. Switching updates local state immediately (client
// components re-render in the new language right away) and persists the
// choice via a Server Action, then refreshes so server-rendered parts of
// the tree pick it up too. The URL never changes.
export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState(initialLocale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    setLocaleState(next);
    startTransition(async () => {
      await setLocaleCookie(next);
      router.refresh();
    });
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isPending }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx.locale;
}

export function useLocaleSwitcher() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocaleSwitcher must be used within a LocaleProvider");
  return ctx;
}
