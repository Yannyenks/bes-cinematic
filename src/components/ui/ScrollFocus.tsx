"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Sharpens/brightens content into focus as it scrolls through the viewport, like a focus-pull. */
export function ScrollFocus({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    const steps = Array.from({ length: 21 }, (_, i) => i / 20);
    const io = new IntersectionObserver(
      ([entry]) => {
        setProgress((p) => Math.max(p, entry.intersectionRatio));
      },
      { threshold: steps },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0.22 + progress * 0.78,
        filter: `blur(${(1 - progress) * 5}px)`,
        transform: `translateY(${(1 - progress) * 16}px)`,
        transition:
          "opacity 90ms linear, filter 90ms linear, transform 90ms linear",
      }}
    >
      {children}
    </div>
  );
}
