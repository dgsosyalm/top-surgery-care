"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { homeContent } from "@/content/home";
import { useLocale } from "@/i18n/LocaleProvider";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const locale = useLocale();
  const { hero } = homeContent[locale];

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#8fbbe3", "#5f7fa3", "#12172a", "#e7a6bc"]}
        speed={0.3}
      />
      <MeshGradient
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
          isActive ? "opacity-80" : "opacity-60"
        }`}
        colors={["#000000", "#ffffff", "#8fbbe3", "#e7a6bc"]}
        speed={0.2}
      />

      {/*
        Subtle human figure layer, sitting above the shader but below the text/CTA
        and rotating brand circle (both z-20/z-30). Desktop and mobile use separate
        crops/positions rather than one scaled the same — a radial mask dissolves the
        edges into the shader so there is no visible photo rectangle, and opacity is
        nudged a few points on hover, mirroring the second MeshGradient above.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-[46%] select-none overflow-hidden sm:block lg:w-[40%]"
      >
        <motion.div
          className="relative h-full w-full"
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image
            src="/images/manken/manken.jpeg"
            alt=""
            fill
            sizes="(min-width: 1024px) 40vw, 46vw"
            className={`object-cover object-[38%_38%] saturate-[0.9] transition-opacity duration-700 ${
              isActive ? "opacity-[0.38]" : "opacity-[0.32]"
            }`}
            style={{
              maskImage:
                "radial-gradient(65% 68% at 62% 38%, black 0%, black 30%, rgba(0,0,0,0.5) 58%, transparent 88%)",
              WebkitMaskImage:
                "radial-gradient(65% 68% at 62% 38%, black 0%, black 30%, rgba(0,0,0,0.5) 58%, transparent 88%)",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 block h-[54%] select-none overflow-hidden sm:hidden"
      >
        <Image
          src="/images/manken/manken.jpeg"
          alt=""
          fill
          sizes="100vw"
          className={`object-cover object-[28%_28%] saturate-[0.9] transition-opacity duration-700 ${
            isActive ? "opacity-[0.36]" : "opacity-[0.5]"
          }`}
          style={{
            maskImage:
              "radial-gradient(78% 82% at 88% 30%, black 0%, black 34%, rgba(0,0,0,0.55) 62%, transparent 88%)",
            WebkitMaskImage:
              "radial-gradient(78% 82% at 88% 30%, black 0%, black 34%, rgba(0,0,0,0.55) 62%, transparent 88%)",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>

      {/*
        Mobile: the CTA block and the rotating brand circle are stacked in normal
        document flow (flex-col + gap) so they can never occupy the same vertical
        band — no shared "bottom-8" anchor to collide on. Desktop (sm+) restores
        the original absolute, corner-anchored composition unchanged.
      */}
      <div className="flex min-h-screen flex-col justify-end gap-12 px-8 pb-8 sm:block sm:min-h-0 sm:gap-0 sm:p-0">
        <main className="z-20 max-w-2xl sm:absolute sm:bottom-8 sm:left-8">
          <div className="text-left">
            <div className="mb-6 flex w-full justify-center sm:block sm:w-auto">
              <motion.div
                className="inline-flex w-fit max-w-[90vw] items-center justify-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm relative border border-white/10 mx-auto sm:mx-0 sm:max-w-none"
                style={{
                  filter: "url(#glass-effect)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
                <span className="text-white/90 text-xs sm:text-sm font-medium relative z-10 tracking-wide text-center sm:text-left">
                  {hero.badge}
                </span>
              </motion.div>
            </div>

            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="relative mb-2 block">
                {/*
                  Localized contrast pad: the shader background cycles through
                  the same pink used in this line's own gradient fill, so at
                  certain animation phases the text can match its background
                  almost exactly. A soft navy radial glow sitting only behind
                  this line guarantees luminosity contrast regardless of which
                  color the gradient (or the shader) is showing — it darkens
                  the patch of shader directly behind the letters without
                  boxing/badging the text or dimming the rest of the Hero. A
                  radial fade (rather than a flat blurred pill) has no edge to
                  read as a shape at all, just a soft aura.
                */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-3 -inset-y-2 hidden md:block md:-inset-x-10 md:-inset-y-6 lg:-inset-x-14 lg:-inset-y-8"
                  style={{
                    background:
                      "radial-gradient(ellipse 55% 70% at 50% 50%, rgba(7,26,43,0.65) 0%, rgba(7,26,43,0.42) 35%, rgba(7,26,43,0.18) 60%, rgba(7,26,43,0) 82%)",
                  }}
                />
                <motion.span
                  className="relative block font-light text-white/90 text-4xl md:text-5xl lg:text-6xl tracking-wider"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, var(--color-accent-sky) 30%, var(--color-accent-rose) 70%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "url(#text-glow)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  {hero.headlineLead}
                </motion.span>
              </span>
              <span className="block font-black text-white drop-shadow-2xl">{hero.headlineMain}</span>
              <span className="block font-light text-white/80 italic">{hero.headlineTail}</span>
            </motion.h1>

            <motion.p
              className="text-lg font-light text-white/70 mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              className="flex items-center gap-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={hero.ctaPrimary.href}
                  className="inline-flex px-10 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-[var(--color-accent-sky)] hover:text-white cursor-pointer backdrop-blur-sm"
                >
                  {hero.ctaPrimary.label}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={hero.ctaSecondary.href}
                  className="inline-flex px-10 py-4 rounded-full bg-gradient-to-r from-[var(--color-accent-sky)] to-[var(--color-accent-rose)] text-black font-semibold text-sm transition-all duration-300 hover:opacity-90 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  {hero.ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </main>

        <div className="z-30 flex justify-end sm:absolute sm:bottom-8 sm:right-8">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <PulsingBorder
              colors={["#8fbbe3", "#5f7fa3", "#e7a6bc", "#b79ad6", "#f2efe9", "#ffffff", "#12172a"]}
              colorBack="#00000000"
              speed={1.5}
              roundness={1}
              thickness={0.1}
              softness={0.2}
              intensity={5}
              spots={5}
              spotSize={0.1}
              pulse={0.1}
              smoke={0.5}
              smokeSize={4}
              scale={0.65}
              rotation={0}
              frame={9161408.251009725}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
              }}
            />

            <span className="absolute h-7 w-7 overflow-hidden rounded-full ring-1 ring-white/40 z-10">
              <Image
                src="/images/logo/top-surgery-care-logo.jpeg"
                alt="Top Surgery Care"
                fill
                sizes="28px"
                className="object-cover"
              />
            </span>

            {/* Rotating brand text around the pulsing border */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ transform: "scale(1.6)" }}
            >
              <defs>
                <path id="hero-circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="text-sm fill-white/80 font-medium">
                <textPath href="#hero-circle" startOffset="0%">
                  {hero.rotatingText}
                </textPath>
              </text>
            </motion.svg>
          </div>
        </div>
      </div>
    </div>
  );
}
