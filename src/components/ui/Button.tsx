import type { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost" | "invert";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-paper border border-ink hover:bg-navy",
  secondary: "bg-transparent text-ink border border-ink hover:bg-paper-alt",
  ghost: "bg-transparent text-ink border border-transparent hover:bg-paper-alt",
  invert: "bg-transparent text-paper border border-paper hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-[2px] font-medium tracking-tight transition-all duration-200 ease-[var(--ease-premium)] hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler;
  "aria-label"?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
  ...aria
}: ButtonProps) {
  const classes = `${sharedClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    <>
      {children}
      {showArrow && <ArrowRightIcon className="h-4 w-4" />}
    </>
  );

  if (href) {
    const isExternal = /^https?:|^mailto:|^tel:/.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes} target={target} rel={rel} {...aria}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} target={target} rel={rel} {...aria}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...aria}
    >
      {content}
    </button>
  );
}
