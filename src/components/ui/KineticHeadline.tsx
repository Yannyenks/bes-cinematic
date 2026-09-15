"use client";

import { useEffect, useRef, useState } from "react";

export function KineticHeadline({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [active, setActive] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <span
            className="inline-block"
            style={{
              transform: active ? "none" : "translateY(115%) rotate(3deg)",
              opacity: active ? 1 : 0,
              transition: `transform 750ms cubic-bezier(0.16,1,0.3,1) ${i * 48}ms, opacity 500ms ease-out ${i * 48}ms`,
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </h2>
  );
}
