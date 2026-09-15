"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** A cursor-tracked ambient spotlight, layered behind content. */
export function AmbientGlow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} onPointerMove={handleMove} className={`relative ${className ?? ""}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(420px circle at var(--gx,50%) var(--gy,20%), rgba(47,168,224,0.14), transparent 70%)",
        }}
      />
      {children}
    </div>
  );
}
