"use client";

import { useParallax } from "@/lib/useParallax";
import { useCursorStore } from "@/lib/cursorStore";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Project } from "@/data/projects";

export function ProjectPanel({
  project,
  index,
  total,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
}) {
  const bgRef = useParallax<HTMLDivElement>(0.06);
  const setCursor = useCursorStore((s) => s.set);
  const resetCursor = useCursorStore((s) => s.reset);

  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setCursor("view", "Voir")}
      onMouseLeave={resetCursor}
      className="group relative flex h-[82vh] w-full items-end overflow-hidden border-t border-white/10 text-left first:border-t-0"
    >
      <div
        ref={bgRef}
        className="absolute -inset-8 scale-105 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ background: project.gradient }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/50 transition-opacity duration-500 group-hover:from-black/75" />
      <MediaPlaceholder label="Vidéo / photo à venir" kind="video" />

      <span className="font-display absolute left-6 top-8 text-sm font-bold text-white/40 md:left-10">
        {String(index + 1).padStart(2, "0")}
        <span className="text-white/20"> / {String(total).padStart(2, "0")}</span>
      </span>

      <div className="relative z-10 w-full px-6 pb-10 md:px-10 md:pb-14">
        <small className="font-display block text-[0.78rem] font-bold uppercase tracking-[0.18em] text-cyan">
          {project.category}
        </small>
        <h3 className="font-display mt-3 max-w-3xl text-[clamp(1.8rem,5vw,4.2rem)] font-extrabold leading-[1.02] text-white transition-transform duration-500 group-hover:translate-x-2">
          {project.title}
        </h3>
      </div>

      <span className="font-display absolute bottom-10 right-6 hidden items-center gap-2 text-sm font-bold text-white/50 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:right-10 md:flex md:translate-x-3">
        Voir le projet
        <span aria-hidden>→</span>
      </span>
    </button>
  );
}
