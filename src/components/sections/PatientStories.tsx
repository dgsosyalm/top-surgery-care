import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ExpandableReviewText } from "@/components/ui/ExpandableReviewText";
import { StarIcon, ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";
import { homeContent } from "@/content/home";
import { getPlaceReviews, type GoogleReview } from "@/lib/googlePlaces";
import { getLocale } from "@/i18n/getLocale";
import { uiContent } from "@/content/ui";
import type { Locale } from "@/i18n/config";

type PatientStoriesData = {
  reviews: readonly GoogleReview[];
  placeGoogleMapsUri: string;
  rating?: number;
  userRatingCount?: number;
};

function StarRow({
  rating,
  size = "h-3.5 w-3.5",
  starsAriaSuffix,
}: {
  rating: number;
  size?: string;
  starsAriaSuffix: string;
}) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} ${starsAriaSuffix}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`${size} ${i < Math.round(rating) ? "text-[#F4B942]" : "text-line"}`}
        />
      ))}
    </div>
  );
}

// Small, factual "this came from Google" source mark — not a claim of
// endorsement/verification. The four-color G is Google's own brand mark,
// used only to identify the source at a glance.
function GoogleGMark({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
      />
    </svg>
  );
}

function GoogleReviewBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-line/70 bg-paper-alt px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] text-ink-soft">
      <GoogleGMark className="h-2.5 w-2.5" />
      {label}
    </span>
  );
}

function ReviewerAvatar({ review }: { review: GoogleReview }) {
  if (review.authorPhotoUri) {
    return (
      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-paper-deep">
        <Image
          src={review.authorPhotoUri}
          alt=""
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>
    );
  }

  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-paper-deep font-display text-base text-ink-soft"
      aria-hidden="true"
    >
      {review.authorName.charAt(0).toUpperCase()}
    </span>
  );
}

function ReviewCard({
  review,
  placeGoogleMapsUri,
  sourceLinkLabel,
  translatedNote,
  googleReviewBadge,
  starsAriaSuffix,
}: {
  review: GoogleReview;
  placeGoogleMapsUri: string;
  sourceLinkLabel: string;
  translatedNote: string;
  googleReviewBadge: string;
  starsAriaSuffix: string;
}) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[3px] border border-line bg-paper p-7 shadow-[0_1px_2px_rgba(20,23,31,0.04),0_8px_24px_-16px_rgba(20,23,31,0.18)] transition-[transform,box-shadow,border-color] duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-ink-faint hover:shadow-[0_2px_4px_rgba(20,23,31,0.05),0_16px_32px_-18px_rgba(20,23,31,0.24),0_0_28px_-8px_rgba(169,221,245,0.4),0_0_28px_-8px_rgba(243,194,212,0.35)]">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, #A9DDF5, #FFFFFF, #F3C2D4)" }}
      />

      <div className="flex items-center gap-3.5">
        <ReviewerAvatar review={review} />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">{review.authorName}</p>
          {review.relativePublishTimeDescription && (
            <p className="text-xs text-ink-faint">{review.relativePublishTimeDescription}</p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {typeof review.rating === "number" && (
          <StarRow rating={review.rating} starsAriaSuffix={starsAriaSuffix} />
        )}
        <GoogleReviewBadge label={googleReviewBadge} />
      </div>

      <div className="mt-4">
        <ExpandableReviewText text={review.text ?? ""} />
      </div>

      {review.isTranslated && (
        <p className="mt-3 text-xs italic text-ink-faint">{translatedNote}</p>
      )}

      <a
        href={placeGoogleMapsUri}
        target="_blank"
        rel="noopener noreferrer"
        className="group/link mt-6 inline-flex items-center gap-1.5 self-start text-xs font-medium uppercase tracking-[0.08em] text-ink-soft transition-colors duration-300 ease-[var(--ease-premium)] hover:text-ink"
      >
        {sourceLinkLabel}
        <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/link:translate-x-1" />
      </a>
    </div>
  );
}

export async function PatientStories() {
  const locale: Locale = await getLocale();
  const { patientStories } = homeContent[locale];
  const uiT = uiContent[locale].patientStories;
  const result = await getPlaceReviews();

  if (result.status === "error") {
    console.error(`[PatientStories] Google Places request failed: ${result.reason}`);
  }

  // Prefer the live Places API once it's configured; until then, fall back
  // to the reviews the client provided directly from the confirmed listing.
  const data: PatientStoriesData | null =
    result.status === "ok" && result.data.reviews.length > 0
      ? result.data
      : patientStories.manualReviews.length > 0
        ? {
            reviews: patientStories.manualReviews,
            placeGoogleMapsUri: patientStories.googleMapsUri,
          }
        : null;

  if (!data) {
    return (
      <section className="bg-paper-alt/45" aria-label={patientStories.eyebrow}>
        <Container className="py-20 md:py-28">
          <Reveal className="mx-auto max-w-xl text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              {patientStories.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-medium leading-[1.1] text-ink">
              {patientStories.pendingHeading}
            </h2>
            <p className="mt-5 text-lead text-ink-soft text-pretty">
              {patientStories.pendingBody}
            </p>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-paper-alt" aria-label={patientStories.eyebrow}>
      <Container className="py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={patientStories.eyebrow}
            title={patientStories.heading}
            description={patientStories.body}
            align="center"
          />
          {typeof data.rating === "number" && data.userRatingCount && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-soft">
              <StarRow rating={data.rating} starsAriaSuffix={uiT.starsAriaSuffix} />
              <span>
                {data.rating.toFixed(1)} · {data.userRatingCount} {uiT.googleReviewsSuffix}
              </span>
            </div>
          )}
        </Reveal>

        <div className="mt-14 grid items-start gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 80}>
              <ReviewCard
                review={review}
                placeGoogleMapsUri={data.placeGoogleMapsUri}
                sourceLinkLabel={patientStories.sourceLinkLabel}
                translatedNote={patientStories.translatedNote}
                googleReviewBadge={uiT.googleReviewBadge}
                starsAriaSuffix={uiT.starsAriaSuffix}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={data.reviews.length * 80}>
          <div className="mt-10 flex flex-col items-start gap-3 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs text-ink-faint">{patientStories.attributionNote}</p>
            <a
              href={data.placeGoogleMapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-ink-soft"
            >
              {patientStories.moreReviewsLabel}
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
