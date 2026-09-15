"use client";

import dynamic from "next/dynamic";
import { Typewriter } from "@/components/ui/Typewriter";
import { useScrollReveal } from "@/lib/useScrollReveal";

const ParticleField = dynamic(
  () => import("@/three/ParticleField").then((m) => m.ParticleField),
  { ssr: false },
);

const TITLE = "Bienvenue dans cet univers aux possibilités infinies…";

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

export function Hero() {
  const [rootRef, progress] = useScrollReveal<HTMLDivElement>(0.9);

  const videoOpacity = 1 - clamp01(progress / 0.35);
  const eyebrowP = clamp01((progress - 0.04) / 0.14);
  const titleP = clamp01((progress - 0.14) / 0.42);
  const leadP = clamp01((progress - 0.58) / 0.16);
  const actionsP = clamp01((progress - 0.68) / 0.16);
  const hintOpacity = 1 - clamp01(progress / 0.2);

  return (
    <section
      id="accueil"
      ref={rootRef}
      className="relative flex min-h-[145vh] items-start justify-center bg-black"
    >
      <div className="sticky top-0 flex min-h-screen w-full items-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: videoOpacity }}
          src="/media/videos/hero-dna.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="pointer-events-none absolute inset-0 hidden opacity-70 md:block">
          <ParticleField className="h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-16 text-center md:px-10">
          <span
            className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-magenta"
            style={{
              opacity: eyebrowP,
              transform: `translateY(${(1 - eyebrowP) * 20}px)`,
            }}
          >
            <span className="h-px w-9 bg-magenta" />
            Business Event Solutions
            <span className="h-px w-9 bg-magenta" />
          </span>

          <h1 className="font-display min-h-[3.2em] text-[clamp(2rem,5.4vw,4rem)] font-extrabold leading-[1.12] text-white md:min-h-[2.3em]">
            <Typewriter text={TITLE} progress={titleP} />
          </h1>

          <p
            className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-white/75"
            style={{
              opacity: leadP,
              transform: `translateY(${(1 - leadP) * 20}px)`,
            }}
          >
            BES est le catalyseur de vos idées : nous partons de votre
            identité pour matérialiser vos évènements et révéler ce qui vous
            rend unique.
          </p>

          <div
            className="mt-10 flex flex-wrap justify-center gap-4"
            style={{
              opacity: actionsP,
              transform: `translateY(${(1 - actionsP) * 20}px)`,
            }}
          >
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

        <div
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/60"
          style={{ opacity: hintOpacity }}
        >
          Défiler
          <span className="h-9 w-px bg-white/30" />
        </div>
      </div>
    </section>
  );
}
