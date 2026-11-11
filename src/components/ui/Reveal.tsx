"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      // --reveal-delay feeds the CSS-only first-paint animation
      // (`.reveal[data-reveal-now]` in globals.css) the same delay the
      // scroll-triggered transition uses.
      style={
        {
          transitionDelay: visible ? `${delay}ms` : "0ms",
          "--reveal-delay": `${delay}ms`,
        } as CSSProperties
      }
      // The root layout's pre-hydration script may add data-reveal-now to
      // this element before React hydrates it; that attribute is expected.
      suppressHydrationWarning
    >
      {children}
    </div>
  );
}
