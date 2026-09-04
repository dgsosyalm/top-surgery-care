"use server";

import { cookies } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "@/i18n/config";

// Writing a cookie is only permitted from a Server Action or Route Handler
// in this Next.js version — never from a Server Component during render —
// so this is the one place allowed to persist the language choice.
export async function setLocaleCookie(locale: Locale) {
  const store = await cookies();
  store.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
