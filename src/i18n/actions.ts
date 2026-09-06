"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { LOCALE_COOKIE, type Locale } from "@/i18n/config";

// Writing a cookie is only permitted from a Server Action or Route Handler
// in this Next.js version — never from a Server Component during render —
// so this is the one place allowed to persist the language choice.
//
// revalidatePath("/", "layout") is required, not optional: router.refresh()
// (called by LocaleProvider after this resolves) only clears the client
// router cache for the *current* route. Every other route the browser has
// already prefetched (Link prefetches on hover/viewport by default) would
// otherwise keep serving its stale pre-switch RSC payload — the site
// "reverts" to the old language the moment you navigate. Revalidating the
// root layout purges the client cache for every route in one call.
export async function setLocaleCookie(locale: Locale) {
  const store = await cookies();
  store.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  revalidatePath("/", "layout");
}
