"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollFocus } from "@/components/ui/ScrollFocus";
import { AGENCY_BEATS } from "@/data/agencyBeats";

export function NarrativeSequence({
  activeIndex = null,
}: {
  activeIndex?: number | null;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={railRef} className="relative space-y-10 pl-8 md:pl-10">
      <div className="absolute bottom-0 left-0 top-1 hidden w-px bg-white/10 md:block" />
      <div
        className="absolute left-0 top-1 hidden w-px bg-cyan transition-all duration-[2200ms] ease-out md:block"
        style={{ height: active ? "100%" : "0%" }}
      />

      {AGENCY_BEATS.map((beat, i) => {
        const parts = beat.text.split("Business Event Solutions");
        const isActive = activeIndex === i;
        return (
          <ScrollFocus key={beat.tag}>
            <div
              id={`beat-${i}`}
              className={`relative -mx-4 rounded-2xl px-4 py-2 transition-colors duration-500 md:-mx-5 md:px-5 ${
                isActive ? "bg-white/[0.05]" : "bg-transparent"
              }`}
            >
              <span
                className={`absolute -left-8 top-1.5 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full transition-all duration-500 md:block ${
                  isActive
                    ? "scale-150 bg-white shadow-[0_0_16px_4px_rgba(255,255,255,0.85)]"
                    : "bg-cyan shadow-[0_0_12px_2px_rgba(47,168,224,0.7)]"
                }`}
              />
              <div className="font-display mb-2 flex items-center gap-2.5 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-cyan/85">
                <span className="tabular-nums text-white/30">0{i + 1}</span>
                Séquence — {beat.tag}
              </div>
              <p className="text-[1.02rem] leading-relaxed text-white/70">
                {parts.length === 2 ? (
                  <>
                    {parts[0]}
                    <strong className="text-white">
                      Business Event Solutions
                    </strong>
                    {parts[1]}
                  </>
                ) : (
                  beat.text
                )}
              </p>
            </div>
          </ScrollFocus>
        );
      })}
    </div>
  );
}
