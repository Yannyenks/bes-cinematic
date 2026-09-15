"use client";

import { useParallax } from "@/lib/useParallax";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Project } from "@/data/projects";

export function ProjectTile({ project }: { project: Project }) {
  const ref = useParallax<HTMLDivElement>(0.04);

  return (
    <a
      href="#devis"
      className={`group relative block overflow-hidden rounded-2xl shadow-2xl ${
        project.span === "tall" ? "row-span-2" : ""
      } ${project.span === "wide" ? "sm:col-span-2" : ""}`}
    >
      <div
        ref={ref}
        className="absolute -inset-6 transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ background: project.gradient }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <MediaPlaceholder label="Photo à venir" kind="photo" />
      <div className="absolute inset-0 flex items-end p-6">
        <div className="translate-y-2 transition-transform duration-400 group-hover:translate-y-0">
          <small className="font-display block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/70">
            {project.category}
          </small>
          <h3 className="font-display mt-1.5 text-lg font-bold text-white">
            {project.title}
          </h3>
        </div>
      </div>
    </a>
  );
}
