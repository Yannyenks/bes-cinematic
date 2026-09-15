"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

/**
 * Monotonic 0..1 progress driven by how far the viewport has scrolled past
 * the top of `ref`'s element, over `range` * element height. Stops updating
 * (and stays at 1) once fully revealed — cheap for the rest of the page's life.
 */
export function useScrollReveal<T extends HTMLElement>(
  range = 0.8,
): [RefObject<T | null>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let raf: number;

    const tick = () => {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = Math.max(1, rect.height * range);
        const p = Math.min(1, Math.max(0, -rect.top / total));
        setProgress((prev) => Math.max(prev, p));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        }
      } else {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [range]);

  return [ref, progress];
}
