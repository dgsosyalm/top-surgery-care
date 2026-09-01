// Server-only. Reads GOOGLE_MAPS_API_KEY / GOOGLE_MAPS_PLACE_ID and calls the
// Places API (New) Place Details endpoint. Never import this from a Client
// Component — it must only run inside a Server Component or route handler,
// so the API key never reaches the browser bundle.

export type GoogleReview = {
  id: string;
  authorName: string;
  authorProfileUri?: string;
  authorPhotoUri?: string;
  rating?: number;
  /** Original-language review text, preferred over a translated version. */
  text?: string;
  /** Set when `text` is a Google-provided translation, not the reviewer's own words. */
  isTranslated: boolean;
  originalLanguageCode?: string;
  relativePublishTimeDescription?: string;
  publishTime?: string;
};

export type GooglePlaceReviews = {
  placeDisplayName: string;
  placeGoogleMapsUri: string;
  rating?: number;
  userRatingCount?: number;
  reviews: GoogleReview[];
};

export type GooglePlaceReviewsResult =
  | { status: "not_configured" }
  | { status: "error"; reason: string }
  | { status: "ok"; data: GooglePlaceReviews };

type PlacesApiLocalizedText = { text: string; languageCode: string };

type PlacesApiReview = {
  name: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: PlacesApiLocalizedText;
  originalText?: PlacesApiLocalizedText;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime?: string;
};

type PlacesApiPlaceDetails = {
  id: string;
  displayName?: PlacesApiLocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesApiReview[];
};

const FIELD_MASK = "id,displayName,rating,userRatingCount,googleMapsUri,reviews";

export async function getPlaceReviews(): Promise<GooglePlaceReviewsResult> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_MAPS_PLACE_ID;

  if (!apiKey || !placeId) {
    return { status: "not_configured" };
  }

  let response: Response;
  try {
    response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": FIELD_MASK,
      },
      // Reviews don't need to be fetched on every request — cache for an
      // hour and let Next.js revalidate in the background.
      next: { revalidate: 3600 },
    });
  } catch {
    return { status: "error", reason: "network_error" };
  }

  if (!response.ok) {
    return { status: "error", reason: `places_api_${response.status}` };
  }

  const place = (await response.json()) as PlacesApiPlaceDetails;

  if (!place.googleMapsUri || !place.displayName) {
    return { status: "error", reason: "malformed_response" };
  }

  const reviews: GoogleReview[] = (place.reviews ?? [])
    .filter((review) => Boolean(review.authorAttribution?.displayName))
    .map((review) => {
      // Prefer the reviewer's original-language text over a translated one.
      // Only fall back to `text` (which may be machine-translated) if no
      // original is available, and flag it clearly when that happens.
      const original = review.originalText;
      const translated = review.text;
      const usingTranslation = !original && Boolean(translated);

      return {
        id: review.name,
        authorName: review.authorAttribution!.displayName!,
        authorProfileUri: review.authorAttribution?.uri,
        authorPhotoUri: review.authorAttribution?.photoUri,
        rating: review.rating,
        text: original?.text ?? translated?.text,
        isTranslated: usingTranslation,
        originalLanguageCode: original?.languageCode ?? translated?.languageCode,
        relativePublishTimeDescription: review.relativePublishTimeDescription,
        publishTime: review.publishTime,
      };
    })
    .filter((review) => Boolean(review.text));

  return {
    status: "ok",
    data: {
      placeDisplayName: place.displayName.text,
      placeGoogleMapsUri: place.googleMapsUri,
      rating: place.rating,
      userRatingCount: place.userRatingCount,
      reviews,
    },
  };
}
