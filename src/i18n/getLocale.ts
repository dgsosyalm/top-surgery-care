import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";

// Server-only locale read, cached per request (React's cache()) so every
// Server Component/page in one render tree shares a single cookie read
// instead of each calling cookies() independently.
export const getLocale = cache(async (): Promise<Locale> => {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
});
