"use client";

import { useState } from "react";

// Reviews are long and shouldn't be silently truncated — clamp to a
// readable preview only when the text is long enough to need it, and
// always give the reader an explicit way to see the rest.
const CLAMP_THRESHOLD = 240;

export function ExpandableReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > CLAMP_THRESHOLD;

  return (
    <div>
      <p
        className={`text-sm leading-relaxed text-ink-soft ${
          isLong && !expanded ? "line-clamp-6" : ""
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mt-2 rounded-sm text-xs font-medium text-ink underline decoration-ink-faint/40 underline-offset-2 transition-colors duration-300 ease-[var(--ease-premium)] hover:text-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-sky/50"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
