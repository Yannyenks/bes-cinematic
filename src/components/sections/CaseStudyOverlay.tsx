"use client";

import { useEffect } from "react";
import { useCursorStore } from "@/lib/cursorStore";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Project } from "@/data/projects";

export function CaseStudyOverlay({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const setCursor = useCursorStore((s) => s.set);
  const resetCursor = useCursorStore((s) => s.reset);
  const open = project !== null;

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
      className={`fixed inset-0 z-[120] flex items-center justify-center p-4 transition-all duration-500 md:p-10 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />

      <div
        className={`relative max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/12 bg-midnight transition-all duration-500 ${
          open ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
        }`}
      >
        <div
          className="relative flex h-64 items-end p-8 md:h-80"
          style={{ background: project?.gradient }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-black/20 to-transparent" />
          <MediaPlaceholder label="Vidéo à venir" kind="video" />
          <small className="font-display relative z-10 block text-[0.78rem] font-bold uppercase tracking-[0.18em] text-cyan">
            {project?.category}
          </small>
        </div>

        <div className="p-8 md:p-10">
          <h3 className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] font-extrabold leading-tight text-white">
            {project?.title}
          </h3>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-white/60">
            Étude de cas à venir : objectifs, dispositif scénographique,
            chiffres clés et retombées. Contenu en cours de finalisation avec
            le client.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Stratégie", "Production", "Communication"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3.5 py-1.5 text-[0.76rem] font-bold uppercase tracking-wide text-white/60"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="font-display mt-10 mb-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/40">
            Galerie photo de l&apos;évènement
          </p>
          <div className="grid auto-rows-[110px] grid-cols-3 gap-3 sm:grid-cols-4 md:auto-rows-[130px]">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ background: project?.gradient }}
              >
                <div className="absolute inset-0 bg-black/25" />
                <MediaPlaceholder label={`Photo ${i + 1}`} kind="photo" />
              </div>
            ))}
          </div>

          <a
            href="#devis"
            onClick={onClose}
            className="font-display mt-10 inline-flex items-center gap-2 rounded-full bg-magenta px-7 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Discuter d&apos;un projet similaire
          </a>
        </div>

        <button
          aria-label="Fermer"
          onClick={onClose}
          onMouseEnter={() => setCursor("close", "✕")}
          onMouseLeave={resetCursor}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
