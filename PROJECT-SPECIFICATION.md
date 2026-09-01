# PROJECT-SPECIFICATION.md

**Status:** Confirmed specification. No code has been written yet; no existing files (including the logo) have been modified.
**Last updated:** this document reflects the most recent client confirmation and supersedes any conflicting detail in earlier planning documents (`REFERENCE-ANALYSIS.md` remains valid for its UX/content research; this file is the authoritative source for confirmed requirements).

---

## 1. Brand & Domain

| Field | Value |
|---|---|
| Brand name | Top Surgery Care |
| Domain | topsurgerycare.com |
| Service scope | **FTM Top Surgery / Top Surgery only** — no other procedures |
| Doctor | Dr. Serkan Dinar (name only — see Section 5) |

## 2. Positioning Rules

- The site **must read as global and international.**
- It must **not** feel Turkey-focused or like a generic medical-tourism template.
- Location/travel logistics may be addressed functionally (patient journey), but the overall tone, imagery, and framing must center the patient and the doctor's expertise — not "surgery destination" marketing.

## 3. Prohibited Content

Do not mention, imply, or reference anywhere on the site:
- Retouchbody
- Serkan Dinar Aesthetic Clinic
- Any hospital name
- Any clinic affiliation that has not been explicitly approved by the client

**No pricing of any kind, anywhere:**
- No prices or price ranges
- No "starting from" pricing
- No package pricing
- No discounts or promotions
- No financing/payment-plan language
- No monetary estimates in any form (including FAQ answers, blog content, or metadata)

## 4. Doctor Information Policy

Only the name **Dr. Serkan Dinar** is confirmed for use at this stage.

**Flag:** this update references "the complete doctor information supplied by the client in the previous project instructions." Reviewing the full project history, no biography, credentials, education history, certifications, memberships, or clinical claims for Dr. Dinar have actually been supplied at any point — every prior document marks this as **[CLIENT INPUT REQUIRED]**. Nothing has been invented to fill this gap, and nothing will be. If a biography document exists, please share it directly (as a file, or pasted text); otherwise this remains the single largest open content item (see Section 14).

No credentials, memberships, certifications, hospital affiliations, awards, statistics, or medical claims will be written unless explicitly supplied and approved by the client.

## 5. Conversion Goal

The site exists to drive **patient consultation / contact** — every page should have a clear, low-friction path to WhatsApp or the contact form. No other conversion goal (e-commerce, newsletter, etc.) applies.

## 6. Official Contact Channels

| Channel | Value |
|---|---|
| WhatsApp | +90 530 295 09 63 |
| Instagram | https://www.instagram.com/topsurgerycare |
| YouTube | https://youtube.com/@topsurgeryturkey |

*Note: the YouTube handle currently reads `@topsurgeryturkey`, not `@topsurgerycare`. Recorded as supplied — flagged in case this is meant to change before launch (Section 14).*

## 7. Contact Form Requirements

A real, production-ready contact form is required — **not a placeholder or a fake/non-functional form.**

- Collects patient inquiry information (fields to be finalized during build: name, contact method, country, message, at minimum)
- On submission, delivers the inquiry to **both**:
  1. Email
  2. A WhatsApp contact flow (e.g., submission triggers a WhatsApp-ready handoff or notification — exact mechanism to be defined during technical planning, not invented here)
- Must work correctly on both desktop and mobile
- Must use a proper backend/API or an appropriate production-ready form-delivery service — no client-side-only fake submission
- Must include clear privacy/consent wording at the point of submission (what data is collected, why, and consent to be contacted) — required given the international/EU-facing (German) audience

## 8. Language Structure

- **Primary language:** English
- **Secondary language:** German
- German content must be **professionally localized** — machine translation (Google Translate-style) is explicitly disallowed.
- **German support model:** German-speaking patients are supported *after* they make contact. The site must **not** state or imply that a separate, dedicated German-speaking medical team exists — no such claim should appear anywhere in English or German copy.

## 9. Assets

### Logo — confirmed, final
- **Path:** `public/images/logo/top-surgery-care-logo.jpeg`
- **Status:** official, final. Do not replace, redesign, regenerate, or modify it in any way. Any resizing/format work needed for technical use (favicons, responsive variants) must preserve the original as the untouched source.

### Still required from client
See Section 14 for the full list (doctor photos, before/after photography with consent, video, etc.).

## 10. SEO Technical Foundation

Monthly/ongoing SEO campaign work is out of scope for development and will not be performed now. The following must be built into the technical foundation from day one:

- Semantic HTML (`header` / `nav` / `main` / `section` / `footer`, meaningful structure — not div soup)
- Correct heading hierarchy (single H1 per page, logical H2/H3 nesting)
- Metadata infrastructure (unique title/description per page, per language)
- Canonical URLs (self-referencing per locale)
- XML sitemap (covering both languages, with hreflang alternates)
- robots.txt
- Open Graph tags (per page, per language — important since WhatsApp is a primary contact/share channel)
- Structured data / schema where appropriate (e.g. Physician, MedicalProcedure, FAQPage, BreadcrumbList — populated only with confirmed, real information; no fields will be filled with placeholder or invented data)
- Clean URL architecture (locale-prefixed, kebab-case, shallow depth)
- Internal linking architecture (hub-and-spoke from the Top Surgery pillar page)
- Image alt text as a required field in the content/data model, not an afterthought
- Optimized images (proper formats/sizing, no unoptimized uploads served directly)
- Fast loading (framework-level image optimization, deferred third-party scripts, minimal render-blocking resources)
- Responsive / mobile-first architecture throughout
- English/German international SEO structure (hreflang en/de/x-default, locale-specific metadata)

**Keyword CSV:** the client has referenced a supplied keyword CSV that should inform content and URL architecture. A full scan of the project directory was performed and **no CSV or spreadsheet file is currently present in the project.** Content and URL architecture below follow an intent-based framework only; keyword-level decisions are pending the actual file (see Section 14).

## 11. Reference Material — Usage Rules

- **Existing site content:** `src/app/reference/` (4 saved HTML pages from the current site) — used only to understand verifiable current information architecture and confirmed facts. Not copied.
- **Reference sites** (design/UX/IA/trust/conversion benchmarks only, per prior analysis in `REFERENCE-ANALYSIS.md`):
  - gallagherplasticsurgery.com
  - milesgberry.com/f2m-top-surgery-miles-berry-surgeon/
  - cranects.com/top-surgery/
  - ioannisntanos.com
- No text, code, branding, images, or literal design from any reference site will be copied. These inform structure and strategy only.

## 12. Final Sitemap

```
/                            Home
/top-surgery/                Top Surgery (pillar)
/about-dr-serkan-dinar/      Dr. Serkan Dinar
/patient-journey/            Patient Journey
/results/                    Results (gallery + testimonials, pending assets)
/faq/                        FAQ
/contact/                    Contact (form + WhatsApp)
/privacy-policy/             Legal
/terms/                      Legal
/medical-disclaimer/         Legal

Phase 2 (post-launch): /recovery/  /blog/
Explicitly excluded: any clinic/hospital page
```

Locale-prefixed in implementation: `/en/...` (default), `/de/...`.

## 13. Homepage Structure (confirmed direction)

1. Hero — global/international framing, single doctor, single procedure clarity
2. Trust strip — confirmed credentials only (currently empty pending Section 4)
3. Doctor introduction (teaser) → links to full About page
4. Top Surgery overview → links to full pillar page
5. Patient Journey overview → links to full page
6. Results preview → links to full page (pending photography)
7. Testimonials (pending reuse permission or new testimonials — see Section 14)
8. FAQ preview → links to full FAQ page
9. Final CTA band — WhatsApp + contact form
10. Footer — sitemap, legal, language switcher, WhatsApp, Instagram, YouTube

## 14. Remaining Client Input

**Content**
- [ ] Dr. Serkan Dinar's complete biography, credentials, education, certifications, memberships — referenced as "previously supplied" but not found anywhere in the project; please resend
- [ ] Confirmation of whether the 6 existing testimonials from the current site may be reused, or whether new testimonials will be supplied
- [x] Keyword CSV — received: `CLIENT-DATA/Searches(Search_2021.04.17-2026.08.21).csv` and `CLIENT-DATA/Searches(Word_2021.04.17-2026.08.21).csv`. Analyzed in Section 15.

**Media**
- [ ] Doctor professional photos (portrait + clinical/professional setting)
- [ ] Before/after photography with signed usage consent
- [ ] Confirmation of whether the existing site's "Intro vLog" video should be reused (file/link needed) or whether new video content will be supplied

**Operational**
- [ ] Confirm YouTube handle `@topsurgeryturkey` is correct as-is, or should be updated
- [ ] Confirm WhatsApp response hours/process (who responds, and when German-speaking support becomes available after contact)
- [ ] Confirm exact contact-form field list and the specific email address inquiries should be delivered to
- [ ] Confirm the WhatsApp delivery mechanism preference for form submissions (e.g., an automated notification vs. a manual handoff), so the technical implementation matches actual working process

**Legal**
- [ ] Any specific legal/regulatory text required for the privacy policy, terms, or medical disclaimer (beyond standard GDPR-compliant baseline)
- [ ] Sign-off process for any medical claims used in copy

---

## 15. SEO Keyword Architecture (from client-supplied search data)

**Data source:** `CLIENT-DATA/Searches(Search_2021.04.17-2026.08.21).csv` (101 queries) and `CLIENT-DATA/Searches(Word_2021.04.17-2026.08.21).csv` (68 word/n-gram rollups), both read in full. **Precision note:** this is a Google Ads *search terms* report (paid campaign data — Cost, Clicks, Impressions, Conversions columns), not an organic Search Console export. It is authoritative real-world query language and intent data, but every row shows `0.00` conversions across both files — either conversion tracking was not implemented on the source account or no conversions were attributed. Click/impression volume below should be read as **interest signal, not proven conversion value.**

No keywords were invented; nothing in this section goes beyond what appears in the two files.

### Primary keyword themes
`top surgery` (core term, highest impressions: 10,448), `ftm top surgery` / `ftm surgery` / `ftm chest surgery` (procedure variants), `gender clinic` / `gender identity clinic` (broader entry point), `private` as a recurring modifier (226 clicks across variants — signals a UK audience comparing private vs. public/NHS pathways).

### Secondary keyword themes
Technique terms (`keyhole top surgery`, `types of top surgery`), transition-adjacent terms (`female to male transition`, `gender dysphoria`, `female to male gender reassignment surgery`), geographic modifiers (`uk`, `turkey`, `istanbul`, `europe`, `ireland`, `sweden`, `england`, `manchester`, `london`), and a large cluster of competitor brand names (see "Keywords to Exclude").

### Top Surgery / FTM keyword clusters
`top surgery`, `ftm top surgery`, `ftm surgery`, `ftm chest surgery`, `female to male surgery`, `top surgery ftm`, `non binary top surgery uk`, `keyhole top surgery` (+ `uk` variant), `types of top surgery` / `different types of top surgery`.

### International / abroad search intent
`top surgery abroad` (56 clicks), `top surgery europe` (37), `ftm top surgery europe` (7), `top surgery ireland` (20), `top surgery sweden` (6), `top surgery england` (6). This is real, measurable demand for care outside the patient's home country — it directly supports the Patient Journey page and the site's international framing, without needing to name Turkey as the lead.

### Turkey-related search intent
`top surgery turkey` (370 clicks — the single largest query after the generic terms), `turkey top surgery` (111), `top surgery in turkey` (82), `ftm top surgery turkey` (36), `top surgery istanbul` (47), `istanbul top surgery` (24), `transgender surgery turkey` (6), `dr serkan istanbul top surgery` (9). This cluster is real and too large to ignore architecturally — but per the confirmed global positioning, it will be served as **factual, practical content** (Patient Journey logistics, FAQ, Contact) rather than as homepage/brand-defining messaging. Turkey is stated as fact where relevant, not used as the site's identity.

### Doctor-related searches
`dr serkan top surgery` (108 clicks, 407 impressions) and `dr serkan istanbul top surgery` (9) — meaningful existing branded search equity in the doctor's name specifically tied to top surgery. This should anchor the About page's metadata and Physician structured data. It does not, on its own, establish top-surgery specialization — see the open flag in Section 14 regarding `CLIENT-DATA/doctor-profile.md` not documenting FTM/gender-affirming experience.

### Informational searches
`types of top surgery`, `different types of top surgery`, `keyhole top surgery`, `female to male transition`, `female to male gender reassignment surgery`, `gender dysphoria`, `nhs top surgery waiting list` (context signal for "why patients look beyond their home system," to be handled factually and without naming or disparaging any specific national health system).

### Commercial / transactional searches
`private top surgery uk` (103), `top surgery near me` (22), `best top surgery surgeons uk` (14), `best ftm top surgeons uk` (7), `where to get top surgery` (6), `best place to get top surgery` (10) — legitimate decision-stage queries, targetable through credentials and outcomes rather than price. Separately, a large price/cost-driven sub-cluster (`cheapest top surgery uk` at 104 clicks, `top surgery prices`, `cheapest top surgery`, `ftm top surgery payment plans`, etc.) directly conflicts with the no-price policy — see "Keywords to Exclude."

### Questions and FAQ opportunities
"What types of top surgery are there?" / "What's the difference between techniques?" (from `types of top surgery`, `different types of top surgery`, `keyhole top surgery`), "What is female-to-male gender reassignment surgery?" (definitional), "Is top surgery available for non-binary patients?" (from `non binary top surgery uk`), and a carefully-worded "why do patients travel for care" answer (inspired by the `nhs top surgery waiting list` signal, phrased without naming or disparaging any specific system).

### Keywords that must NOT be targeted
1. **All price/cost/financing queries** — conflicts directly with the no-price policy: `cheapest top surgery uk` (104 clicks), `cheapest top surgery`, `cheapest place to get top surgery`, `cheapest top surgery ftm`, `top surgery prices`, `top surgery prices uk`, `ftm top surgery payment plans`.
2. **Competitor brand/name queries** — not ours to target: `neda top surgery`, `top surgery by neda`, `neda transgender surgery`, `transgendersurgerybyneda`, `dr ergin top surgery`, `dr braso top surgery`, `dr lembas`, `dr medalie top surgery`, `cadogan clinic top surgery`, `cosmedicare top surgery`, `anne healthcare`, `anne health`. Recorded here as competitive-landscape awareness only.
3. **Out-of-scope procedures** — `nullification surgery` (genital nullification, a bottom-surgery procedure) and `private testosterone treatment uk ftm` (hormone therapy) fall outside the confirmed FTM Top Surgery–only scope.
4. **Single-city/country micro-geo terms as dedicated pages** — `top surgery manchester`, `london transgender clinic`, `gender clinic london`, `top surgery sweden`, `top surgery england`, `top surgery ireland`. Building thin, per-city landing pages would both contradict the "not a medical-tourism template" positioning and risk keyword cannibalization; this demand is served through the general international framing on Patient Journey/FAQ instead.

### Recommended page-to-keyword mapping

| Page | Primary terms served |
|---|---|
| Home | `top surgery`, `ftm top surgery` (core, generic-intent traffic) |
| Top Surgery (pillar) | `ftm top surgery`, `ftm chest surgery`, `types of top surgery`, `keyhole top surgery`, `female to male surgery`, `non binary top surgery` |
| About Dr. Serkan Dinar | `dr serkan top surgery`, `dr serkan istanbul top surgery` (branded) |
| Patient Journey | `top surgery abroad`, `top surgery europe`, practical Turkey/Istanbul logistics content (factual, not headline-level) |
| FAQ | `types of top surgery` / `different types of top surgery`, `keyhole top surgery`, `non binary top surgery uk`, `female to male gender reassignment surgery`, the NHS-wait-inspired "why travel for care" question |
| Results | `best top surgery surgeons uk` / `best ftm top surgeons uk` (served via outcomes/credentials, not claims of ranking) |
| Contact | `private top surgery uk`, `where to get top surgery`, `best place to get top surgery` (decision-stage, routed to consultation) |

No page was created solely because a keyword exists — every mapping above lands on a page already confirmed in the Section 12 sitemap.

### Recommended URL structure
No change to the sitemap confirmed in Section 12. Specifically, **no** geo-specific URLs are recommended (no `/top-surgery-turkey/`, `/top-surgery-uk/`, `/top-surgery-manchester/`, etc.) — geographic and "abroad" intent is served through content within the existing locale-prefixed pages (`/en/patient-journey/`, `/en/faq/`), not through additional thin pages.

### Internal linking opportunities
Home → Top Surgery (anchor: "FTM top surgery"); Top Surgery → FAQ (technique/candidacy questions); Top Surgery → Patient Journey (anchor: "traveling for your procedure"); About → Top Surgery (doctor-approach anchor — wording pending the credentials clarification already flagged in Section 14); FAQ → Contact (soft CTA on every answer); Patient Journey → Contact (booking CTA).
