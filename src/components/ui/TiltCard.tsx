"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

/** A holographic, cursor-tilted card — game-card reveal feel. */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const el = panelRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 14}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 14}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  }

  function handleLeave() {
    const el = panelRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      className={`[perspective:1200px] ${className ?? ""}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <div
        ref={panelRef}
        className="group/tilt relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform:
            "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateZ(0)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.22), transparent 45%)",
          }}
        />
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background:
              "linear-gradient(120deg, transparent, rgba(47,168,224,0.25), transparent 60%)",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
