"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const count = TESTIMONIALS.length;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % count), 6500);
    return () => clearInterval(t);
  }, [count]);

  const go = (i: number) => setIdx((i + count) % count);
  const current = TESTIMONIALS[idx];

  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-midnight py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10">
        <Reveal direction="left">
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-cyan">
            <span className="h-px w-9 bg-cyan" />
            Leurs retours sur expérience
          </span>
        </Reveal>
        <Reveal direction="left" delay={80}>
          <h2 className="font-display max-w-2xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] text-white">
            Ils nous ont confié leur ADN.
          </h2>
        </Reveal>

        <Reveal direction="left" delay={160}>
          <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-sm md:p-14">
            <div
              key={idx}
              className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center"
              style={{ animation: "fade-in 600ms ease-out" }}
            >
              <span className="font-display text-6xl font-extrabold leading-none text-magenta">
                &ldquo;
              </span>
              <div>
                <blockquote className="text-[1.1rem] font-medium leading-relaxed text-white/85">
                  {current.quote}
                </blockquote>
                <cite className="font-display mt-6 block text-sm font-bold not-italic text-white">
                  {current.author}
                  <span className="mt-1 block text-[0.8rem] font-semibold text-magenta">
                    {current.role}
                  </span>
                </cite>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            aria-label="Témoignage précédent"
            onClick={() => go(idx - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/15 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Aller au témoignage ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-6 bg-magenta" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Témoignage suivant"
            onClick={() => go(idx + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/15 text-white transition-colors hover:border-white hover:bg-white hover:text-black"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
