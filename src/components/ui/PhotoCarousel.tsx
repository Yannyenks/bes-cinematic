"use client";

import { useRef, useState } from "react";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function PhotoCarousel({
  count,
  color,
}: {
  count: number;
  color: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function goTo(i: number) {
    const clamped = Math.max(0, Math.min(count - 1, i));
    setIndex(clamped);
    const track = trackRef.current;
    const child = track?.children[clamped] as HTMLElement | undefined;
    child?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const track = e.currentTarget;
    const child = track.children[0] as HTMLElement | undefined;
    if (!child) return;
    const step = child.offsetWidth + 16;
    const i = Math.round(track.scrollLeft / step);
    const clamped = Math.max(0, Math.min(count - 1, i));
    if (clamped !== index) setIndex(clamped);
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="relative aspect-video w-[80%] flex-shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[60%] md:w-[50%]"
            style={{ background: color }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <MediaPlaceholder label={`Photo ${i + 1}`} kind="photo" />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Photo précédente"
        onClick={() => goTo(index - 1)}
        disabled={index === 0}
        className="absolute left-1 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-opacity hover:bg-white hover:text-black disabled:opacity-0 sm:flex"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Photo suivante"
        onClick={() => goTo(index + 1)}
        disabled={index === count - 1}
        className="absolute right-1 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-opacity hover:bg-white hover:text-black disabled:opacity-0 sm:flex"
      >
        →
      </button>

      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="font-display text-[0.76rem] font-semibold text-white/40">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
