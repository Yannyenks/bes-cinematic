"use client";

import { useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const ParticleField = dynamic(
  () => import("@/three/ParticleField").then((m) => m.ParticleField),
  { ssr: false },
);

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const targets = [
        eyebrowRef.current,
        headingRef.current,
        leadRef.current,
        actionsRef.current,
      ];

      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0 });
        gsap.set(hintRef.current, { opacity: 1 });
        return;
      }

      gsap.set(targets, { opacity: 0, y: 28 });
      gsap.set(hintRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(
          headingRef.current,
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.45",
        )
        .to(
          leadRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.55",
        )
        .to(
          actionsRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        )
        .to(hintRef.current, { opacity: 1, duration: 0.6 }, "-=0.2");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accueil"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/media/videos/hero-dna.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
      <div
        className="absolute inset-0 opacity-70 mix-blend-screen"
        style={{
          background:
            "radial-gradient(55% 60% at 80% 15%, rgba(47,168,224,0.22), transparent 60%), radial-gradient(45% 55% at 12% 90%, rgba(229,0,125,0.16), transparent 60%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 hidden opacity-60 md:block">
        <ParticleField className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 md:px-10">
        <div className="max-w-3xl">
          <span
            ref={eyebrowRef}
            className="font-display mb-5 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-magenta"
          >
            <span className="h-px w-9 bg-gradient-to-r from-magenta to-cyan" />
            Business Event Solutions
          </span>

          <h1
            ref={headingRef}
            className="font-display text-[clamp(2.2rem,5.2vw,4.2rem)] font-extrabold leading-[1.08] text-white"
          >
            Bienvenue dans cet univers aux{" "}
            <span className="bg-gradient-to-r from-magenta to-cyan bg-clip-text text-transparent">
              possibilités infinies…
            </span>
          </h1>

          <p
            ref={leadRef}
            className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-white/75"
          >
            BES est le catalyseur de vos idées : nous partons de votre
            identité pour matérialiser vos évènements et révéler ce qui vous
            rend unique.
          </p>

          <div ref={actionsRef} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#devis"
              className="font-display inline-flex items-center gap-2 rounded-full bg-magenta px-8 py-4 text-sm font-bold text-white shadow-[0_14px_34px_-12px_rgba(229,0,125,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Passez au laboratoire
            </a>
            <a
              href="#agence"
              className="font-display inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-4 text-sm font-bold text-white transition-colors hover:border-white"
            >
              Découvrir l&apos;agence
            </a>
          </div>
        </div>
      </div>

      <div
        ref={hintRef}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/60"
      >
        Défiler
        <span className="h-9 w-px bg-gradient-to-b from-magenta to-transparent" />
      </div>
    </section>
  );
}
