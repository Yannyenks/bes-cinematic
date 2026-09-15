"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/data/process";

export function ProcessTimeline() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="relative mt-16">
      <div className="pointer-events-none absolute left-0 right-0 top-[2.4rem] hidden h-px bg-white/10 md:block" />
      <div
        className="pointer-events-none absolute left-0 top-[2.4rem] hidden h-px bg-cyan transition-all duration-[1600ms] ease-out md:block"
        style={{ width: active ? "100%" : "0%" }}
      />

      <div className="grid gap-10 md:grid-cols-4 md:gap-6">
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={step.title}
            className="relative"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "none" : "translateY(24px) scale(0.94)",
              transition: `opacity 700ms ease-out ${300 + i * 220}ms, transform 700ms cubic-bezier(0.16,1,0.3,1) ${300 + i * 220}ms`,
            }}
          >
            <span
              className={`font-display relative z-10 mb-4 block text-5xl font-extrabold ${
                i % 2 === 0 ? "text-magenta" : "text-cyan"
              }`}
            >
              0{i + 1}
            </span>
            <h3 className="font-display text-lg font-bold text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-[0.94rem] leading-relaxed text-white/55">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
