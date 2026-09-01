# PROJECT-HANDOFF.md — Top Surgery Care

Session handoff. Research and planning phase complete. No application code, design, or the existing Next.js scaffold has been touched beyond initial project setup — this document is the entry point for the next session.

---

## 1. Current Project Status

**Phase:** Planning and research complete. Implementation has **not** started — no components, pages, styling, or content have been built yet.

**What exists today:** a working Next.js + TypeScript + Tailwind scaffold (verified building and running), the official logo, four planning/reference documents, and client-supplied source data (doctor profile + keyword CSVs).

**What does not exist yet:** any actual site design, page implementation, copy, or code beyond the default Next.js starter output.

---

## 2. Completed Setup

- Next.js (App Router, Turbopack) + TypeScript + Tailwind CSS scaffold — created, verified with `npm run build` and `npm run dev` (HTTP 200 confirmed)
- `src/` directory structure with `@/*` import alias
- Project files: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `.gitignore`
- No git repository initialized (git is not installed in this environment — flagged previously, not resolved)
- Official logo added: `public/images/logo/top-surgery-care-logo.jpeg` — **final, do not touch**

---

## 3. All Confirmed Client Requirements

- **Brand:** Top Surgery Care · **Domain:** topsurgerycare.com
- **Positioning:** must read as global/international — must NOT feel Turkey-focused or like a medical-tourism template
- **Scope:** FTM Top Surgery only — no bottom surgery, no other procedures
- **Languages:** English (primary), German (secondary) — professional localization only, no machine translation
- **Doctor:** Dr. Serkan Dinar — full CV supplied and saved (see Section 7); note the open flag in Section 8
- **Prohibited:** Retouchbody, Serkan Dinar Aesthetic Clinic, any hospital name, any unapproved clinic affiliation
- **No pricing anywhere:** no prices, ranges, "starting from," packages, discounts, financing, or monetary estimates in any content, including FAQ and metadata
- **Conversion goal:** patient consultation/contact
- **Contact channels:** WhatsApp +90 530 295 09 63 · Instagram instagram.com/topsurgerycare · YouTube youtube.com/@topsurgeryturkey (handle mismatch noted, unconfirmed if intentional)
- **Contact form:** must be real and production-ready (proper backend/API, not a fake submission), delivering to email + a WhatsApp flow, working on desktop and mobile, with privacy/consent wording
- **German support model:** support happens after contact is made — the site must not claim a dedicated German-speaking medical team exists
- **SEO:** strong technical foundation built in from day one (semantic HTML, metadata, canonical, sitemap, robots.txt, OG, structured data, clean URLs, internal linking, alt text, performance, mobile-first, hreflang); the **monthly SEO campaign itself is out of scope** for development

---

## 4. Current Sitemap

```
/                            Home
/top-surgery/                Top Surgery (pillar)
/about-dr-serkan-dinar/      Dr. Serkan Dinar
/patient-journey/            Patient Journey
/results/                    Results (gallery + testimonials — pending assets)
/faq/                        FAQ
/contact/                    Contact (form + WhatsApp)
/privacy-policy/  /terms/  /medical-disclaimer/    Legal

Phase 2 (post-launch): /recovery/  /blog/
Explicitly excluded: any clinic/hospital page
```

Locale-prefixed in implementation: `/en/...` (default), `/de/...`. Full detail, including homepage section-by-section structure, is in `PROJECT-SPECIFICATION.md` Sections 12–13.

---

## 5. SEO Strategy and Keyword Decisions

Full detail in `PROJECT-SPECIFICATION.md` Section 15. Source: two client-supplied Google Ads search-term CSVs (`CLIENT-DATA/`), 2021–2026, read in full — paid-campaign data, not organic Search Console data, and every row shows 0.00 conversions (interest signal only, not proven conversion value).

**Key conclusions:**
- Core demand clusters on `top surgery` / `ftm top surgery`, with a strong "private healthcare" modifier — audience is largely UK-based, comparing private vs. public pathways.
- `top surgery turkey` is the single largest specific query (370 clicks) — real demand, but per the global-positioning rule it will be served as factual content on Patient Journey/FAQ/Contact, **not** as homepage or brand-defining messaging.
- International "abroad" terms (`top surgery abroad`, `top surgery europe`, etc.) support leading with global framing.
- `dr serkan top surgery` already has real branded search volume (108 clicks) — anchor for About-page metadata and structured data.
- **Excluded:** all price/cost/payment-plan queries (policy conflict), competitor brand names (Neda, Cadogan Clinic, Cosmedicare, Anne Healthcare, named competing doctors), out-of-scope procedures (nullification surgery, testosterone treatment), and single-city micro-geo pages (would read as a medical-tourism template).
- No page was added to the sitemap solely because a keyword existed — page-to-keyword mapping table is in Section 15 of the spec.

---

## 6. Reference Website Research Conclusions

Full detail in `REFERENCE-ANALYSIS.md`. Four client-approved references analyzed for UX/IA/trust/conversion patterns only — no text, design, or code copied from any of them.

- **gallagherplasticsurgery.com** — premium multi-procedure practice; strong credential-forward trust sequencing, generous whitespace as the "premium" signal, gender-affirming content given equal structural weight to other procedures.
- **milesgberry.com** (F2M page) — strong credential opening, but a clear cautionary example: no FAQ, no technique explanation, no patient journey. Noted as "what not to leave out."
- **cranects.com/top-surgery** — identity-first navigation (Trans Men/Trans Women/Non-Binary) is a strong pattern for a multi-audience practice, but **not applicable** to our single-procedure, single-doctor site — explicitly excluded from our IA.
- **ioannisntanos.com** — the closest structural analog: single surgeon, international patients, explicit "prepare → operation → after" patient journey, WPATH-style credential badges, restrained CTAs. This is the primary structural model for Patient Journey and doctor positioning.

**Cross-site pattern adopted:** progressive disclosure — short answers at the top level, deeper technique/process detail on linked pages — replacing the existing site's single giant page.

---

## 7. Files Created and Their Locations

| File | Purpose |
|---|---|
| `PROJECT-SPECIFICATION.md` | Authoritative, current source of truth for all confirmed requirements, sitemap, homepage structure, technical SEO requirements, and keyword architecture (Sections 1–15) |
| `REFERENCE-ANALYSIS.md` | Full UX/IA/design research on the existing site and the 4 approved reference sites |
| `CLIENT-DATA/doctor-profile.md` | Dr. Serkan Dinar's full CV, verbatim as supplied by the client |
| `CLIENT-DATA/Searches(Search_2021.04.17-2026.08.21).csv` | Client-supplied keyword source data (search terms) |
| `CLIENT-DATA/Searches(Word_2021.04.17-2026.08.21).csv` | Client-supplied keyword source data (word/n-gram rollup) |
| `public/images/logo/top-surgery-care-logo.jpeg` | Official, final logo |
| `src/app/reference/*.html` (4 files) | Saved pages from the existing topsurgeryturkey.com site, used as first-party source material |
| `PROJECT-HANDOFF.md` | This document |

---

## 8. Remaining Client Inputs

**Blocking / highest priority**
- [ ] Clarify Dr. Dinar's connection to FTM top surgery specifically — `doctor-profile.md` documents 20+ years in plastic/reconstructive surgery (face lift, body contouring, burns, reconstruction) but **does not mention gender-affirming or top surgery experience anywhere**. Nothing has been invented to bridge this gap; it needs to come from the client before the About page can be written credibly.
- [ ] Doctor photos (portrait + professional setting)
- [ ] Before/after photography with signed consent
- [ ] Permission to reuse the 6 existing testimonials from topsurgeryturkey.com, or new testimonials

**Operational**
- [ ] Confirm YouTube handle `@topsurgeryturkey` is correct, or should change
- [ ] WhatsApp response hours and languages (when German support becomes available after contact)
- [ ] Exact contact-form field list and destination email address
- [ ] Preferred WhatsApp delivery mechanism for form submissions

**Content/legal**
- [ ] Confirmation of the "Intro vLog" video reuse (file/link) or new video content
- [ ] Any specific legal text required for privacy policy / terms / medical disclaimer
- [ ] Sign-off process for medical claims used in copy

Full checklist with rationale: `PROJECT-SPECIFICATION.md` Section 14.

---

## 9. What Must NOT Be Changed

- **The logo** (`public/images/logo/top-surgery-care-logo.jpeg`) — final, official, must not be replaced, redesigned, regenerated, or modified.
- **No pricing** anywhere on the site, in any form.
- **No mention** of Retouchbody, Serkan Dinar Aesthetic Clinic, any hospital name, or any unapproved clinic affiliation.
- **No claim** of a dedicated German-speaking medical team.
- **No invented doctor credentials, certifications, memberships, awards, or statistics** — only what's in `CLIENT-DATA/doctor-profile.md`, verbatim-sourced.
- **No content beyond FTM Top Surgery** — no bottom surgery, no general "FTM Surgery" scope creep (the mistake identified on the existing site).
- **No Turkey-first positioning** — Turkey/Istanbul content stays factual and secondary (Patient Journey, FAQ, Contact), never the homepage lead.
- **No identity-segmented navigation** (Crane Center pattern) — explicitly evaluated and rejected for this single-procedure site.
- **No dedicated micro-geo landing pages** (Manchester, London, Sweden, etc.) — evaluated and rejected.
- **No literal copying** of text, design, code, or branding from any of the 4 reference sites.

---

## 10. Exact Next Step for Tomorrow

**Begin visual design and implementation, starting with the design system, then the homepage.**

Suggested order:
1. Design system: color tokens, typography pairing, spacing scale, button/card/nav component styles (premium-international direction, informed by Gallagher/Ntanos — not a literal copy of either)
2. Base layout shell: header/nav (incl. EN/DE switcher), footer, sticky WhatsApp
3. Homepage, section by section, per `PROJECT-SPECIFICATION.md` Section 13 — using placeholder-marked gaps (doctor photo, before/after, testimonials) wherever real assets are still pending, never inventing stand-in content that looks final

This should begin only after the client has reviewed this handoff and given approval to proceed — no design or code has been started in this session.
