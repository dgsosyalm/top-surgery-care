// Static illustrated service icons for the Neda Deniz coordination list.
// Each is a small self-contained "premium badge" illustration — a
// navy-to-soft-blue gradient square with a filled white glyph and a small
// soft-pink/blue accent — rather than a generic single-glyph line icon.
// Purely static: no transitions, no hover/focus classes, no motion.

const NAVY = "#12172a";
const SKY = "#8fbbe3";
const ROSE = "#e7a6bc";

function BadgeDefs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-bg`} x1="8" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor={NAVY} />
        <stop offset="60%" stopColor="#3d5c85" />
        <stop offset="100%" stopColor={SKY} />
      </linearGradient>
      <clipPath id={`${id}-clip`}>
        <rect x="4" y="4" width="56" height="56" rx="16" />
      </clipPath>
    </defs>
  );
}

function BadgeBackground({ id }: { id: string }) {
  return (
    <g clipPath={`url(#${id}-clip)`}>
      <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#${id}-bg)`} />
      <ellipse cx="18" cy="16" rx="22" ry="15" fill="#ffffff" opacity="0.14" />
    </g>
  );
}

function AirportIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <BadgeDefs id={id} />
      <BadgeBackground id={id} />
      <path
        d="M11 47c5-15 18-28 33-33"
        stroke="#ffffff"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M50 14 L16 32 L30 34 L20 46 Z" fill="#ffffff" />
      <path d="M50 14 L30 34 L20 46 Z" fill="#e3ecf6" />
      <circle cx="53" cy="11" r="4" fill={ROSE} />
      <circle cx="53" cy="11" r="4" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />
    </svg>
  );
}

function AccommodationIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <BadgeDefs id={id} />
      <BadgeBackground id={id} />
      <path d="M22 20 L32 11 L42 20 Z" fill="#ffffff" />
      <rect x="20" y="20" width="24" height="30" rx="2" fill="#ffffff" />
      <rect x="29" y="42" width="6" height="8" rx="1.5" fill={NAVY} />
      <rect x="24" y="25" width="4.5" height="4.5" rx="1" fill={SKY} />
      <rect x="35.5" y="25" width="4.5" height="4.5" rx="1" fill={ROSE} />
      <rect x="24" y="33" width="4.5" height="4.5" rx="1" fill={ROSE} />
      <rect x="35.5" y="33" width="4.5" height="4.5" rx="1" fill={SKY} />
    </svg>
  );
}

function CoordinationIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <BadgeDefs id={id} />
      <BadgeBackground id={id} />
      <rect x="24" y="10" width="10" height="6" rx="2" fill="#e3ecf6" />
      <rect x="16" y="14" width="26" height="34" rx="3" fill="#ffffff" />
      <rect x="21" y="23" width="16" height="2.4" rx="1.2" fill="#c7d5e7" />
      <rect x="21" y="29" width="16" height="2.4" rx="1.2" fill="#c7d5e7" />
      <rect x="21" y="35" width="10" height="2.4" rx="1.2" fill="#c7d5e7" />
      <path d="M23 43.5h8" stroke="#c7d5e7" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="21" cy="43.5" r="2.2" fill={SKY} />
      <circle cx="33" cy="43.5" r="2.2" fill={ROSE} />
      {/* Small, subordinate coordination badge — deliberately minor, so it
          reads as scheduling/support context, not a claim of personally
          providing treatment. */}
      <circle cx="47" cy="47" r="8.5" fill={NAVY} />
      <circle cx="47" cy="47" r="8.5" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.4" />
      <path d="M47 43v8M43 47h8" stroke={SKY} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CityTourIllustration({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
      <BadgeDefs id={id} />
      <BadgeBackground id={id} />
      <rect x="13" y="42" width="7" height="12" rx="1" fill={SKY} />
      <rect x="22" y="36" width="7" height="18" rx="1" fill={ROSE} />
      <rect x="33" y="44" width="7" height="10" rx="1" fill={SKY} />
      <path
        d="M17 39c4-9 13-17 21-21"
        stroke="#ffffff"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M42 8a12 12 0 00-12 12c0 9 12 22 12 22s12-13 12-22a12 12 0 00-12-12z"
        fill="#ffffff"
      />
      <circle cx="42" cy="20" r="5" fill={NAVY} />
      <circle cx="42" cy="20" r="2.2" fill={ROSE} />
    </svg>
  );
}

const illustrations = {
  airport: AirportIllustration,
  accommodation: AccommodationIllustration,
  coordination: CoordinationIllustration,
  "city-tour": CityTourIllustration,
} as const;

export type NedaServiceIconType = keyof typeof illustrations;

export function NedaServiceIcon({
  type,
  className = "",
}: {
  type: NedaServiceIconType;
  className?: string;
}) {
  const Illustration = illustrations[type];
  // Only four instances ever render on the page, one per type, so the type
  // itself is a stable, collision-free id for this icon's local <defs>.
  return (
    <span className={`inline-flex shrink-0 ${className}`}>
      <Illustration id={`nsi-${type}`} />
    </span>
  );
}
