"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-[#050505]/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "border-white/10 shadow-[0_1px_0_0_rgba(0,0,0,0.4)]" : "border-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo/top-surgery-care-logo.jpeg"
              alt="Top Surgery Care logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="font-display text-lg leading-none text-paper">
            Top Surgery Care
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {siteConfig.primaryNav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} className="py-1 text-sm text-paper" />
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageToggle />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-paper lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050505] lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {siteConfig.primaryNav.map((item, index) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 text-lg first:pt-0"
                  isActive={pathname.replace(/\/$/, "") === item.href.replace(/\/$/, "")}
                  entranceDelayMs={index * 70}
                />
              ))}
            </nav>
            <div className="flex items-center justify-between pt-6">
              <LanguageToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

// Desktop-only. FTM-inspired hover/focus micro-interaction: the label
// crossfades into a soft blue → white → soft pink gradient with a slow
// internal drift, and a thin gradient underline reveals from the center
// outward. Uses a second, aria-hidden gradient copy of the label stacked
// via absolute positioning — deliberately not reused on mobile (see
// MobileNavLink below), since that stacked-copy technique is what caused
// visible duplicate/misaligned text at mobile's larger tap-target size.
function NavLink({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative transition-colors duration-300 hover:text-white focus-visible:text-white active:text-white motion-reduce:transition-none after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-linear-to-r after:from-accent-sky after:via-white after:to-accent-rose after:opacity-0 after:transition-all after:duration-[380ms] after:ease-[var(--ease-premium)] motion-reduce:after:transition-none hover:after:w-[70%] hover:after:opacity-80 focus-visible:after:w-[70%] focus-visible:after:opacity-80 active:after:w-[70%] active:after:opacity-80 ${className}`}
    >
      <span className="transition-opacity duration-300 motion-reduce:transition-none group-hover:opacity-0 group-focus-visible:opacity-0 group-active:opacity-0">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-[ftm-flow_7s_linear_infinite] bg-linear-to-r from-accent-sky via-white to-accent-rose bg-[length:200%_100%] bg-clip-text text-transparent opacity-0 transition-opacity duration-300 motion-reduce:animate-none motion-reduce:transition-none group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
      >
        {label}
      </span>
    </Link>
  );
}

// Mobile-only. Exactly one text node per item — no stacked duplicate layer.
// The FTM gradient is applied directly to the link's own text via the
// `.ftm-text` utility (globals.css), which animates CSS custom properties
// feeding a background-clip:text gradient, so the same element can
// transition smoothly between its normal off-white color and the gradient.
// It only activates on real touch/keyboard interaction (:active /
// :focus-visible) — never automatically. The entrance uses a plain
// opacity/position fade with no color change, so opening the menu never
// triggers a color "flash". `isActive` leaves a persistent low-opacity
// gradient underline (a pseudo-element, not a second text node) on the
// current route.
function MobileNavLink({
  href,
  label,
  onClick,
  className = "",
  isActive = false,
  entranceDelayMs,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
  entranceDelayMs?: number;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      style={entranceDelayMs !== undefined ? { animationDelay: `${entranceDelayMs}ms` } : undefined}
      className={`ftm-text relative block animate-[menu-item-in_400ms_ease-out_both] motion-reduce:animate-none after:absolute after:bottom-0 after:left-1/2 after:h-px after:-translate-x-1/2 after:bg-linear-to-r after:from-accent-sky after:via-white after:to-accent-rose after:transition-all after:duration-[380ms] after:ease-[var(--ease-premium)] motion-reduce:after:transition-none focus-visible:after:w-[70%] focus-visible:after:opacity-80 active:after:w-[70%] active:after:opacity-80 ${
        isActive ? "after:w-[70%] after:opacity-30" : "after:w-0 after:opacity-0"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

function LanguageToggle() {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-paper/60">
      <span className="text-paper" aria-current="true">
        EN
      </span>
      <span aria-hidden="true">/</span>
      <span
        className="cursor-not-allowed text-paper/40"
        title="German localization is coming soon"
      >
        DE
      </span>
    </div>
  );
}
