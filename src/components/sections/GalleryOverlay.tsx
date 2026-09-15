"use client";

import { useEffect } from "react";
import { useCursorStore } from "@/lib/cursorStore";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Gallery } from "@/data/galleries";

export function GalleryOverlay({
  gallery,
  index,
  onClose,
}: {
  gallery: Gallery | null;
  index: number | null;
  onClose: () => void;
}) {
  const setCursor = useCursorStore((s) => s.set);
  const resetCursor = useCursorStore((s) => s.reset);
  const open = gallery !== null;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[130] overflow-y-auto p-4 transition-all duration-500 md:p-10 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="fixed inset-0 -z-10 bg-black/92 backdrop-blur-xl"
        onClick={onClose}
      />

      <div
        className={`mx-auto max-w-6xl transition-all duration-500 ${
          open ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
        }`}
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <span className="font-display block text-[0.72rem] font-bold uppercase tracking-[0.18em] text-cyan">
              Galerie {index !== null ? `0${index + 1}` : ""}
            </span>
            <h3 className="font-display mt-2 text-2xl font-extrabold text-white md:text-3xl">
              {gallery?.title}
            </h3>
          </div>
          <button
            aria-label="Fermer la galerie"
            onClick={onClose}
            onMouseEnter={() => setCursor("close", "✕")}
            onMouseLeave={resetCursor}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-4 pb-10 sm:grid-cols-4 md:auto-rows-[180px]">
          {gallery?.slots.map((slot, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${
                slot.span === "tall" ? "row-span-2" : ""
              } ${slot.span === "wide" ? "col-span-2" : ""}`}
              style={{ background: gallery.gradient }}
            >
              <div className="absolute inset-0 bg-black/25" />
              <MediaPlaceholder label={`Photo ${i + 1}`} kind="photo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
