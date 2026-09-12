# SEO Audit — Top Surgery Care (topsurgerycare.com)

**Phase:** 1 — Audit only. No application code was changed to produce this report.
**Date:** 2026-09-12
**Scope:** Full technical SEO inspection of the current Next.js 16.3.2 App Router codebase, cross-referenced against the historical planning documents (`PROJECT-HANDOFF.md`, `PROJECT-SPECIFICATION.md`, `REFERENCE-ANALYSIS.md`) and the SEO priorities/keyword list supplied for this task.
**Method:** Every claim below was verified directly against the codebase (file/line references given) or against live HTTP responses from the local dev server (`next build` + the running instance on `localhost:3001`), not assumed from the historical documents or from general Next.js conventions. Where the historical documents describe an architecture that was never actually built (notably locale-prefixed URLs), this is called out explicitly rather than treated as current fact.

**What this audit does not do:** it does not report Google Search Console impressions, clicks, rankings, or indexing status — no GSC export or API access was provided for this task. Section O states plainly what has and hasn't been confirmed as "done" in GSC, based only on what was stated in the request. It also does not run a live Lighthouse/PageSpeed/CrUX pass (no browser automation tool was available in this environment); Core Web Vitals findings (Section N) are architectural risk factors identified from the code, not measured field data.

---

## A. Current Technical SEO Status

| Area | Status |
|---|---|
| Indexable routes | 11 real `page.tsx` routes under `src/app` (verified by listing, not assumed) |
| Sitemap | `src/app/sitemap.ts` exists, builds, serves `200` with valid XML, 11 URLs, no `vercel.app` (added in a prior session) |
| Robots.txt | **Missing.** No `robots.txt`, no `app/robots.ts`. Confirmed absent by directory search. |
| Canonical tags | Present on every page via `alternates.canonical`, self-referencing. **3 of 11 pages declare a canonical URL that itself 308-redirects** (see Section J — this is the single most important finding in this audit). |
| hreflang | **Not implemented anywhere.** Zero occurrences of `hreflang` or `alternates.languages` in the codebase. |
| `<html lang>` | Correctly dynamic per request (`en`/`de`) via the locale cookie (`src/app/layout.tsx:70`). Verified live. |
| Open Graph / Twitter | Present on every page (root layout default + 10 page-level overrides). One page (`/results`) sets a real, gated patient photo as its OG image — see Critical Issues. |
| JSON-LD | Present on 5 of 11 pages (`Person`, `MedicalProcedure`, `FAQPage`, `BreadcrumbList` ×2). Missing on Home, `/results`, and all 4 legal pages. |
| Turkey geo-block | `src/proxy.ts`, IP-header-based (`x-vercel-ip-country`), applies to every request (no matcher). Verified live: non-TR traffic and a simulated Googlebot request both get `200`; simulated `TR` gets `451` with `noindex, nofollow`. Untouched by this audit. |
| Trailing slash | Inconsistent by design choice, not by Next.js config — `next.config.ts` sets no `trailingSlash` option, so Next's default (redirect trailing-slash → no-slash) applies. 3 pages fight this default (see Section J). |
| Redirects | No custom redirects/rewrites configured in `next.config.ts`. The only redirects on the site are Next's automatic trailing-slash `308`s described above. |
| robots meta on non-indexable pages | Next's built-in 404 correctly serves `noindex` (verified live). The geo-block page correctly serves `noindex, nofollow` + `451` (verified in `src/proxy.ts:30,80`). No accidental indexable non-content pages found. |

---

## B. Critical Issues

**B1 — `/results` Open Graph image exposes a real, gated patient photo to link-preview scrapers, completely bypassing the 18+ age gate.**
`src/app/results/page.tsx:28-33` sets `openGraph.images` to `/images/results/1.jpg` — a real before/after photo, the same kind of content `ResultsAgeGate` (`src/components/ui/ResultsAgeGate.tsx`) exists specifically to gate behind an explicit adult-content confirmation. Open Graph images are fetched **server-side** by WhatsApp, iMessage, Slack, Facebook, X, etc. when a link is shared — there is no client-side JS execution and no gate involved at all. Anyone who shares (or a bot that crawls) a link to `/results` will surface this exact photo as an unfurled preview thumbnail to any viewer, gate or no gate. This directly undermines the stated purpose of the age gate (see the gate's own code comment: *"Content warning for the real surgical before/after photos"*) on every surface except the page itself.
*Recommendation (Phase 2 code change, not this phase): replace this with a neutral, non-patient image — the logo, or a text/brand card — the same way the root layout's default OG image already does.*

**B2 — Three pages' canonical URLs point to a URL that immediately 308-redirects away from itself.**
`src/app/about-dr-serkan-dinar/page.tsx`, `src/app/contact/page.tsx`, and `src/app/patient-journey/page.tsx` all declare `PAGE_PATH` with a trailing slash (e.g. `/contact/`) and use it as their `alternates.canonical`. Verified live:
```
GET /contact/  → 308 → /contact
GET /contact   → 200, <link rel="canonical" href="https://topsurgerycare.com/contact/">
```
The page that actually returns `200` declares a canonical pointing at the URL that redirects away from it. This is the opposite of what a canonical tag is supposed to do (declare the actual, final URL). The same 3 URLs are also what `src/app/sitemap.ts` submits to Search Console — meaning the sitemap that's already been submitted contains 3 redirect-then-200 entries instead of 3 direct `200` entries. The other 8 pages (`/`, `/faq`, `/results`, `/top-surgery`, `/privacy-policy`, `/terms`, `/medical-disclaimer`, `/kvkk-consent-form`) do not have this problem — their `PAGE_PATH` has no trailing slash and matches their live, non-redirecting URL. Internal links to the 3 affected pages consistently use the trailing-slash form too (`siteConfig.contact.pageHref = "/contact/"`, etc.), so every internal navigation to these pages also takes an unnecessary redirect hop.
*This is not catastrophic — Google generally follows and consolidates simple redirect chains — but it is a real, confirmed defect, it's cheap to fix, and it's the clearest "why is this page not the canonical winner" risk on the site.*

---

## C. High-Priority Fixes

**C1 — No `robots.txt`.** Nothing is being blocked by its absence (Google defaults to "crawl everything" with no file present), but there's no explicit `Sitemap:` pointer, and Search Console's "robots.txt" report will show it as missing rather than confirmed-permissive. Next.js supports this via the same file-convention family as the sitemap (`app/robots.ts`, unchanged in Next 16 — verified against the bundled docs), so it can reuse `siteConfig.url` the same way `sitemap.ts` already does.

**C2 — About-page metadata doesn't contain the one branded term it exists to capture.**
`src/app/about-dr-serkan-dinar/page.tsx:18` sets `title: `${p.name} — ${p.title}`` → renders as **"Dr. Serkan Dinar — Plastic, Reconstructive and Aesthetic Surgery Specialist | Top Surgery Care."** `doctorProfile.ts:128-129`'s `metaDescription` also never uses the words "top surgery." Per the historical keyword data (`PROJECT-SPECIFICATION.md` §15, and repeated in this task's own keyword list as `dr serkan top surgery`), this is real, existing branded search volume this exact page is meant to own, and its title/description currently don't contain the phrase at all.

**C3 — Organization structured data doesn't exist anywhere.**
No page (including the root layout) emits `Organization`/`WebSite` JSON-LD. Every fact needed for a minimal, fully-truthful `Organization` block already exists in `src/lib/site.ts`: `name`, `url`, the logo path, and three real, live social profiles (`instagram`, `youtube`, `reddit` — all already rendered as real links in the footer). This can be added with zero invented fields.

**C4 — `v1.mp4` is 281MB and is directly referenced by the site.**
`src/data/videos.ts:24` serves `/images/video/v1.mp4` (281MB, confirmed by file size) directly — every other video in that file (`v2-web.mp4` through `v10-web.mp4`) is a compressed "web" re-encode between 3.6MB–12.3MB. The video-row component already lazy-mounts sources on scroll-into-view (a real, working optimization, confirmed in `src/components/ui/video-stories.tsx`), but that only delays the download — it doesn't shrink it. Any visitor who scrolls the first video into view on mobile data triggers a 281MB transfer. This is a real Core Web Vitals / mobile-data-cost risk, not a hypothetical one.

---

## D. Medium-Priority Fixes

**D1 — The homepage duplicates the entire FAQ page verbatim.**
`src/components/sections/FaqPreview.tsx:13` renders `faqItems[locale]` — **all** FAQ items, not a subset — inside the homepage. `src/app/faq/page.tsx` renders the exact same `faqItems` data as the dedicated FAQ page. The historical spec (`PROJECT-SPECIFICATION.md` §13: *"FAQ preview → 4–5 top questions, linking to the full FAQ page"*) explicitly planned a truncated preview; what shipped duplicates 100% of the content. `/faq` does carry its own `FAQPage` JSON-LD and the homepage doesn't duplicate that schema (good — avoids a structured-data duplication problem), but the visible text duplication itself is still a real, avoidable overlap between two indexable URLs answering the identical query.

**D2 — `Person` schema on the About page doesn't use the more specific, equally-truthful `Physician` type.**
`src/app/about-dr-serkan-dinar/page.tsx:82` uses `"@type": "Person"`. `doctorProfileContent.title` (`src/content/doctorProfile.ts:131`) is the already-approved, real string *"Plastic, Reconstructive and Aesthetic Surgery Specialist."* schema.org's `Physician` type (a `MedicalBusiness`/`Person` subtype Google explicitly supports) plus a `medicalSpecialty` value drawn from that exact same already-approved string would be more specific and equally fabrication-free — no new fact is required, just a more precise type for a fact already on the page.

**D3 — No `BreadcrumbList` on `/faq`, `/top-surgery`, `/results`, or `/about-dr-serkan-dinar`.**
`/contact` and `/patient-journey` already have it (`src/app/contact/page.tsx:84-100`, `src/app/patient-journey/page.tsx:42-58`) — the pattern exists and works, it's just not applied to the other content pages.

**D4 — No contextual link from About → Top Surgery.**
The About page's only CTA (`doctorProfile.ts:165-168`) goes to Contact. The historical strategy (`PROJECT-SPECIFICATION.md` §15, "Internal linking opportunities": *"About → Top Surgery (doctor-approach anchor)"*) called for a link back to the pillar page from the doctor's own page; it was never added. (Header/Footer nav do link every page to every other page globally, so this isn't a connectivity gap — it's a missed **contextual, in-content** link specifically tying the doctor's authority to the procedure page.)

**D5 — Home page meta description is 170 characters** (root layout, `src/content/ui.ts` `rootMetadata.description`), past Google's typical ~155–160 character display comfort zone. Not a ranking penalty, just a likely-truncated snippet in results.

---

## E. Low-Priority Improvements

- **E1.** Twitter Card is `summary` (small image) rather than `summary_large_image`, and no explicit `twitter.images` is set anywhere — it currently relies on X falling back to the Open Graph image. Low-effort, minor social-CTR polish only.
- **E2.** `/results` meta description is 99 characters — noticeably shorter/thinner than every other page's (99–170 range elsewhere). Room to be more descriptive without becoming keyword-stuffed.
- **E3.** No web app manifest / `apple-touch-icon`. `favicon.ico` exists (`src/app/favicon.ico`); no `manifest.json`/`site.webmanifest` or dedicated Apple touch icon. Not an indexing or ranking factor; a minor mobile "add to home screen" polish item.
- **E4.** `public/images/video/V4.mp4`–`V10.mp4` and `v2.mp4` (unencoded originals, 25MB–107MB each) sit in `public/` unreferenced by any page or the sitemap. No SEO impact (nothing links to them, so Google won't discover or crawl them), but they add unnecessary deployment weight — a housekeeping item, not an SEO one.
- **E5.** One live, real patient testimonial quote on the homepage (`src/content/home.ts:119`) includes the phrase "the price is so cheap" — verbatim user-generated content, not site copy, so it does not violate the no-pricing-in-our-own-copy policy the same way marketing copy would. Flagged for awareness only, since the brief for this task is explicit about price language; no code or content change is recommended here without client sign-off, since it's a real testimonial already live before this audit.

---

## F. Page-by-Page SEO Assessment

| Page | Canonical (live) | Title (rendered) | JSON-LD | H1 | Assessment |
|---|---|---|---|---|---|
| `/` | `https://topsurgerycare.com` | "Top Surgery Care \| FTM Top Surgery with Dr. Serkan Dinar" | None | Yes, via `motion.h1` in `Hero.tsx` — not caught by a naive `<h1` grep, confirmed present by rendering | Good title/H1 keyword alignment ("Top Surgery," "FTM top surgery," "international patients" in subtext). No Organization/WebSite schema. No Turkey-first violation found — Turkey/Istanbul mentions on this page are confined to real testimonial quotes and a factual Neda Deniz coordination-partner description, not headline copy. |
| `/top-surgery` | `/top-surgery` (clean) | "FTM Top Surgery \| Top Surgery Care" | `MedicalProcedure` | 1 | Pillar page, correctly the deepest technique content on the site. Good candidate for the technique/recovery/preparation keyword cluster. |
| `/about-dr-serkan-dinar/` | **redirects to `/about-dr-serkan-dinar`** (canonical mismatch, see B2) | "Dr. Serkan Dinar — Plastic, Reconstructive and Aesthetic Surgery Specialist \| Top Surgery Care" | `Person` | 1 | Title/description don't contain "top surgery" (C2). Real, substantive CV data (education, publications, congresses in `doctorProfile.ts`) is under-leveraged in both metadata and schema (D2). |
| `/patient-journey/` | **redirects to `/patient-journey`** (canonical mismatch, see B2) | "Patient Journey \| Top Surgery Care" | `BreadcrumbList` | 1 | The historically-correct home for Turkey-as-destination and international/abroad logistics content, per the positioning rule. Zero mentions of "UK"/"NHS" anywhere on the page currently (see Section M) despite this being the natural home for that content. |
| `/results` | `/results` (clean) | "Results \| Top Surgery Care" | None | 1 | Gated content rendering is correct (`ResultsAgeGate`); OG image is not (B1). No `BreadcrumbList`. |
| `/faq` | `/faq` (clean) | "Frequently Asked Questions \| Top Surgery Care" | `FAQPage` | 1 | Well-formed FAQPage schema. Content is 100% duplicated on the homepage (D1). |
| `/contact/` | **redirects to `/contact`** (canonical mismatch, see B2) | "Contact \| Top Surgery Care" | `BreadcrumbList` | 1 | Low organic-traffic-value page by nature (mostly branded/direct/referral traffic) — fine as-is content-wise. |
| `/privacy-policy`, `/terms`, `/medical-disclaimer`, `/kvkk-consent-form` | All clean, no redirect | Each has a distinct, real title | None | 1 each (shared `LegalPageLayout`, or page-local for KVKK) | Correctly not keyword-targeted — legal pages shouldn't compete for commercial terms. No issues found. |

---

## G. UK Keyword-to-Page Mapping

Built from this task's supplied keyword list, cross-checked against the historical Google Ads data in `PROJECT-SPECIFICATION.md` §15 (real interest signal, zero recorded conversions — treated as directional, not authoritative volume) and against what each page can **honestly** support today.

| Keyword | Target page | Basis |
|---|---|---|
| `top surgery`, `ftm top surgery` | `/` and `/top-surgery` | Core/generic entry terms — home for brand-level entry, pillar page for informational depth. Already reasonably well aligned (Section F). |
| `top surgery abroad` | `/patient-journey/` (and supporting mentions on `/`) | Matches the international-patient framing already in the page's own metadata description. |
| `top surgery uk`, `private top surgery uk` | `/patient-journey/` and `/faq` | **Not currently served anywhere** — zero "UK"/"NHS"/"Britain" mentions found in any content file (Section M). Needs new content, not a metadata-only fix. |
| `top surgery turkey`, `turkey top surgery`, `top surgery in turkey` | `/patient-journey/` | Consistent with the historical strategy's own conclusion (`PROJECT-SPECIFICATION.md` §15: served as factual logistics content, never as homepage/brand-defining messaging) and with the current site's actual Turkey/Istanbul mentions (Section F). |
| `dr serkan top surgery` | `/about-dr-serkan-dinar/` | Real branded equity per historical data; page currently doesn't contain the phrase in its metadata (C2) — needs a metadata fix, not new content. |
| `neda top surgery` | `/patient-journey/` and the homepage's existing Neda Deniz section | **Reconciliation needed with historical guidance:** `PROJECT-SPECIFICATION.md` §15 listed `neda top surgery` under **excluded competitor-brand queries**, written when "Neda" was assumed to be an unrelated third party. The current, shipped site already factually credits **Neda Deniz International Medical Tourism and Travel Agency** as the real Istanbul-based coordination partner (`src/content/home.ts:142-144`, `src/data/patientJourney.ts:32`, and the KVKK consent form itself is issued by this same company — `public/docs/legal/kvkk-consent-form.pdf`). This is no longer a competitor-exclusion case; it's an own-partner term. Any optimization toward it should stay strictly limited to what's already published and approved (the existing, factual Neda Deniz mentions) — not an invitation to add new claims about Neda's role. |
| `cheapest top surgery uk`, `top surgery prices`, any price/cost query | **Do not target on any page.** | Direct conflict with the confirmed no-pricing policy (`PROJECT-SPECIFICATION.md` §3, restated in this task's own instructions). Unchanged conclusion from the historical exclusion list. |
| Technique/recovery/preparation informational queries (`types of top surgery`, `keyhole top surgery`, etc.) | `/top-surgery` and `/faq` | Already the two pages with the deepest relevant content; no conflict. |

---

## H. Keyword Cannibalization Risks

1. **FAQ content, home vs. `/faq` (real, confirmed).** Identical Q&A text lives at two indexable URLs (Section D1). `/faq` has the stronger signal (its own canonical + `FAQPage` schema; the homepage has neither), so it should win by default, but the duplication itself is unnecessary and easy to remove by truncating the homepage preview, as originally planned.
2. **Generic "top surgery" / "ftm top surgery" on `/` vs. `/top-surgery` (expected, low risk).** Both pages legitimately target the head term at different intents (brand entry vs. informational depth) — this is normal pillar-page structure, not a defect, as long as neither page's *metadata* is optimized to compete for the exact same long-tail phrase. Checked: they aren't (Section F).
3. **`dr serkan top surgery` — currently not actually competed for anywhere**, since the About page's metadata doesn't contain the phrase at all (C2). Not a cannibalization risk today, but worth confirming when C2 is fixed that no *other* page's metadata is independently optimized for the doctor's name.
4. **Turkey-related terms (`top surgery turkey`, etc.) — home vs. patient journey.** No current risk found: the homepage's Turkey/Istanbul mentions are testimonial quotes and a factual partner description, not metadata-level targeting (Section F). Worth re-checking if homepage copy is ever revised, so it doesn't drift into competing with Patient Journey for this cluster.

---

## I. EN/DE International SEO Assessment

- **Architecture:** locale is chosen via a cookie (`top-surgery-care-locale`, `src/i18n/config.ts:4`) read server-side per request (`src/i18n/getLocale.ts`), **not** via a URL path or query parameter. Every page's canonical URL is identical regardless of which language is being displayed.
- **`<html lang>` is correct** — confirmed dynamically switching between `en`/`de` per request (`src/app/layout.tsx:70`).
- **Consequence for crawling (the important part):** a fresh crawl request (Googlebot or otherwise) carries no locale cookie. `getLocale()` falls back to `defaultLocale = "en"` (`src/i18n/config.ts:3`, confirmed by code and by the live behavior of every `curl` test performed for this audit, none of which sent a locale cookie and all of which returned English). **This means Google can only ever discover and index the English version of every page.** The German content exists and is real (professionally written, not machine-translated, per the historical spec), but there is no URL Google can crawl to reach it, and no hreflang signal pointing at it, because no distinct URL for it exists.
- **This is architecturally correct given the stated priorities.** The task's own SEO priority order puts the UK (English) market first and doesn't list a German-speaking market at all. A cookie-based locale switch that happens to always show crawlers the English version is, right now, a coincidentally acceptable trade-off rather than an urgent problem — but it should be understood as a real, structural limitation, not a temporary bug.
- **hreflang cannot be correctly added on top of the current architecture.** hreflang exists to tell Google "here is the equivalent page at a different URL." There is no different URL here — English and German are the same URL with different rendered content depending on a cookie Google will never carry. Adding `alternates.languages` pointing `en` and `de` at the *same* URL would be syntactically valid but semantically meaningless, and would not change what Google indexes.
- **Recommendation, per this task's explicit instruction: do not implement URL-based locale routing now.** Flagging it here as the separate architectural recommendation requested: *if German-market organic visibility becomes a real business priority in the future, the only way to make German content independently crawlable and indexable is locale-prefixed URLs (`/de/...`) with proper hreflang — which the original planning documents assumed would be built (`PROJECT-HANDOFF.md` §4, §5; `PROJECT-SPECIFICATION.md` §12) but which was never implemented in the shipped app.* This is a genuine, load-bearing divergence between the historical plan and the current codebase, not a small detail.

---

## J. Canonical / hreflang Assessment

- **Canonical:** implemented on all 11 pages via `alternates.canonical`, self-referencing, resolved to absolute URLs through `metadataBase` (`src/app/layout.tsx:31`) — verified live (`og:url` and `<link rel="canonical">` both resolve to full `https://topsurgerycare.com/...` URLs, confirming `metadataBase` resolution works correctly; this is **not** a bug, despite every page passing a relative `PAGE_PATH` — Next resolves it as designed).
- **The one real defect:** 3 of 11 canonicals (`/about-dr-serkan-dinar/`, `/contact/`, `/patient-journey/`) point at a URL that 308-redirects to a different URL, rather than at the URL that actually serves `200` (Section B2). This is the highest-value, lowest-risk fix in this entire audit — it's a one-line change per page (drop the trailing slash from `PAGE_PATH`), plus updating the handful of internal links that already point at the trailing-slash form, plus updating the 3 matching entries in `sitemap.ts`.
- **hreflang:** not implemented; correctly not recommended for implementation now (Section I).

---

## K. Structured Data Recommendations

**Already implemented (working, no change needed):**
- `Person` — About page
- `MedicalProcedure` — Top Surgery page
- `FAQPage` — FAQ page
- `BreadcrumbList` — Contact, Patient Journey

**Recommended additions, all fully supportable by facts already in the codebase (no invention required):**
- **`Organization`** (site-wide, e.g. root layout): `name` ("Top Surgery Care"), `url`, `logo` (`/images/logo/top-surgery-care-logo.jpeg`), `sameAs` (the three real, already-linked profiles: Instagram, YouTube, Reddit from `src/lib/site.ts`). No rating, review, address, or phone field should be added — none of that is confirmed.
- **Upgrade `Person` → `Physician`** on the About page, with `medicalSpecialty` set from the already-approved `doctorProfile.title` string (Section D2). No new fact required.
- **`BreadcrumbList`** on `/faq`, `/top-surgery`, `/results`, `/about-dr-serkan-dinar/` — same pattern already proven on 2 other pages.

**Explicitly not recommended (would require fabrication, per this task's own rules):**
- `AggregateRating` / `Review` — no real, structured review data exists in the codebase to mark up (the homepage's Google review cards are rendered as plain content, not schema, and this audit does not recommend changing that without a confirmed, compliant data source).
- `VideoObject` for the 10 homepage videos — `src/data/videos.ts` only has `id`/`src`/`type` per video; there is no title, description, thumbnail, or upload date for any individual video. `VideoObject` requires that information to be filled honestly; right now it would have to be invented. **This is a content gap, not a code gap** — see Section M and the "Needs Client Input" bucket.
- `MedicalOrganization`/hospital/clinic schema — explicitly out of scope; no hospital/clinic entity has ever been confirmed (`PROJECT-SPECIFICATION.md` §4, restated as still open).

---

## L. Internal Linking Recommendations

- **Header + Footer already give every one of the 11 pages a site-wide link to every other primary page and all 4 legal pages** (`src/components/layout/Header.tsx`, `Footer.tsx`, driven by `nav.primary`/`nav.legal` in `src/content/ui.ts`) — the site does not have a "some pages are orphaned" problem.
- **Missing contextual (in-content) link: About → Top Surgery** (Section D4). Low-effort, directly matches the historical strategy's own recommendation.
- **Existing contextual links are otherwise sound:** `/results` → Patient Journey + Contact; `/top-surgery` → Patient Journey, Recovery-adjacent CTA, FAQ; homepage sections each link to their own full page. This is a working hub-and-spoke pattern already, not something to rebuild.
- Once the canonical/trailing-slash fix (B2) lands, the 3 internal links currently pointing at the trailing-slash form (`siteConfig.contact.pageHref`, the `/patient-journey/` link on `/results`, etc.) should be updated in the same pass so internal navigation stops taking an unnecessary redirect hop.

---

## M. Content Gaps

1. **Zero UK-specific content anywhere on the site.** Confirmed by search: no occurrence of "UK," "United Kingdom," "NHS," "Britain," or "British" in any content file. Given the UK is the **#1 stated SEO priority**, this is the single largest content gap relative to the stated strategy. The historical keyword data already identified the shape of this content (`PROJECT-SPECIFICATION.md` §15: an "NHS wait-time" -inspired FAQ answer, phrased carefully without naming or disparaging any specific health system) — it was planned and never written.
2. **No `/recovery` or `/blog` page.** Both were explicitly scoped as "Phase 2 (post-launch)" in the original sitemap (`PROJECT-HANDOFF.md` §4) and never built. `/top-surgery` currently folds a `recovery` teaser section into the pillar page instead (`topSurgeryPageContent.recovery`) — functional today, but a dedicated recovery/aftercare page would better serve the "technique / recovery / preparation informational searches" priority (#5) and create another indexable, internally-linked page rather than one more section on an already-long pillar page.
3. **Per-video metadata does not exist** (Section K) — blocks any honest `VideoObject` implementation.
4. **No client-confirmed hospital/clinic/address information** — unchanged from the original planning documents; still explicitly deferred, not a new gap introduced by this audit.

---

## N. Core Web Vitals / Performance Opportunities

No live Lighthouse/PageSpeed/CrUX data was collected for this audit (no browser automation available in this environment) — the items below are architectural risk factors identified from the code, not measured field metrics.

- **`v1.mp4` at 281MB** (Section C4) is the single largest concrete performance risk found. Re-encoding it the same way `v2.mp4`→`v2-web.mp4` etc. were already handled would bring it in line with every other video on the site (3.6–12.3MB).
- **The homepage Hero (`src/components/ui/Hero.tsx`) is a fully client-rendered (`"use client"`) component** using two animated `MeshGradient` shader layers (`@paper-design/shaders-react`) plus `framer-motion` fade-ins staged up to 1.0s after mount for the primary CTA row. The H1 itself animates in via `motion.h1` with its own opacity/transform transition. This is a real, plausible LCP/INP risk on the homepage specifically (the page most likely to receive the most organic entry traffic) — worth measuring with real Lighthouse/CrUX data before deciding whether it needs simplifying, rather than assuming.
- **No raw `<img>` tags anywhere** — every image goes through `next/image` (verified by search). This is a positive, already-correct finding, not a gap.
- **Video lazy-loading is already implemented well:** `VideoStoryRow` only mounts each `<source>` once a card scrolls within 600px of the row's visible edge (`src/components/ui/video-stories.tsx`), which is exactly the right pattern — it just doesn't help with `v1.mp4`'s absolute file size once it does load.
- **`next/font` is used correctly** with `display: "swap"` for both font families (`src/app/layout.tsx:13-24`) — avoids invisible-text-during-font-load; no action needed.

---

## O. Google Search Console Actions Already Completed

Per this task's own stated context (not independently verified — no GSC access was provided):
- Google Search Console: **verified**.
- `sitemap.xml`: **live and submitted**.

Nothing else about GSC status (coverage report contents, manual actions, current impressions/clicks, indexing issues Google has already flagged) was provided, so nothing else is stated here. Once `sitemap.ts`'s 3 redirect-canonical URLs (Section B2) are fixed, it would be worth checking the Coverage/Pages report specifically for those 3 URLs to confirm Google re-crawls and consolidates them cleanly.

---

## P. Recommended 30/60/90-Day SEO Roadmap

**0–30 days (technical foundation, low-risk, code-only):**
- Fix the 3 canonical/trailing-slash mismatches (B2) and update the matching `sitemap.ts` entries and internal links in the same pass.
- Add `app/robots.ts` referencing the live sitemap (C1).
- Fix the `/results` Open Graph image (B1) — replace the gated patient photo with a neutral image.
- Fix About-page title/description to include "top surgery" (C2).
- Add `Organization` JSON-LD (C3) and upgrade `Person` → `Physician` with `medicalSpecialty` (D2).
- Add `BreadcrumbList` to the 4 pages missing it (D3).
- Truncate the homepage FAQ preview to a genuine subset instead of duplicating all items (D1).
- Add the About → Top Surgery contextual link (D4).
- Re-encode `v1.mp4` (C4).

**30–60 days (content, once the above is live and re-crawled):**
- Write the UK-market content gap (M1): an NHS-wait-time-inspired FAQ answer and/or Patient Journey content, phrased carefully and factually, without naming or disparaging any specific health system — this needs the same legal-caution sign-off process already noted in the historical spec for any medical-adjacent claim.
- Monitor Search Console Coverage/Performance for the technical fixes above (did the 3 redirect-canonical URLs consolidate cleanly; did indexed-page count change).

**60–90 days (content depth, dependent on real performance data):**
- Evaluate a dedicated `/recovery` page (M2) once there's real query data (Search Console, not just the historical Google Ads set) showing whether recovery/aftercare informational queries are actually reaching the site and where they land.
- Revisit Hero performance (Section N) with real Lighthouse/CrUX data collected after the technical fixes above are live, before deciding whether the animation/shader approach needs simplifying.
- Only at this point, if German-market SEO becomes an actual business priority: scope the locale-prefixed URL migration flagged in Section I as a dedicated architectural project — not a quick add-on.

---

## Q. Which Changes Should Be Implemented Immediately

- B1 (Results OG image), B2 (canonical/redirect mismatch), C1 (robots.txt), C2 (About metadata), C3 (Organization schema), C4 (v1.mp4 re-encode), D1–D4 (FAQ duplication, Physician schema, BreadcrumbList, About→Top Surgery link).
- These are all code/config-only, zero new facts required, zero content-approval dependency, and directly fix confirmed defects rather than chase unconfirmed opportunities.

## R. Which Changes Should Wait Until Search Console Provides New Data

- The `/recovery` page decision (M2, roadmap 60–90 days) — the historical data is Google Ads paid-search terms with zero recorded conversions, not organic query data; real Search Console Performance data (queries, impressions, position) will show whether this is worth the content investment.
- Any further Hero/homepage performance simplification beyond the concrete `v1.mp4` fix — needs real Core Web Vitals field data (CrUX) or at minimum a Lighthouse run against the live production deployment, not architectural inference alone.
- Whether the 3 canonical fixes (B2) actually change indexing/ranking behavior — worth a specific before/after check in Coverage once live.

## S. Which Items Require Client/Company Information Before Implementation

- **UK-market content (M1):** any NHS-related phrasing needs the same sign-off process the historical spec already flagged for medical-adjacent claims — this audit will not draft that copy without that process being followed.
- **Per-video titles/descriptions** needed before any honest `VideoObject` schema can be added (Section K, M3).
- **Hospital/clinic/address information** — still explicitly deferred by the client per the original planning documents; unchanged by this audit.
- **The `neda top surgery` keyword reconciliation (Section G):** confirm with the client that the currently-published Neda Deniz description is the full extent of what may be used for this term — this audit recommends staying within it, not expanding it.

---

## Final Summary

### 1. DO NOW
- B1, B2, C1, C2, C3, C4, D1, D2, D3, D4, D5

### 2. DO AFTER SEARCH CONSOLE DATA
- `/recovery` page build decision (M2)
- Further Hero/homepage performance work beyond the `v1.mp4` fix
- Before/after verification that the B2 canonical fix changed indexing behavior for the 3 affected URLs

### 3. NEEDS CLIENT INPUT
- UK/NHS-related content copy and its sign-off (M1)
- Per-video titles/descriptions for `VideoObject` schema (K, M3)
- Hospital/clinic/address confirmation (unchanged open item from original planning docs)
- Confirmation of scope for the `neda top surgery` term (Section G)

### 4. PHASE 2 CONTENT
- UK-market FAQ/Patient Journey content (M1)
- Dedicated `/recovery` page (M2)
- Dedicated `/blog` (never built, originally scoped Phase 2 in `PROJECT-HANDOFF.md` §4)
- Locale-prefixed URL migration for real German-market SEO visibility (Section I) — only if/when that becomes an actual business priority
