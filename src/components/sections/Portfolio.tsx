"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectPanel } from "@/components/sections/ProjectPanel";
import { CaseStudyOverlay } from "@/components/sections/CaseStudyOverlay";
import { PROJECTS } from "@/data/projects";

export function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal direction="scale">
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-magenta">
            <span className="h-px w-9 bg-magenta" />
            Nos réalisations
          </span>
        </Reveal>
        <Reveal direction="scale" delay={80}>
          <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] text-white">
            L&apos;album de nos expériences.
          </h2>
        </Reveal>
      </div>

      <div className="relative z-10 mt-16">
        {PROJECTS.map((project, i) => (
          <ProjectPanel
            key={project.title}
            project={project}
            index={i}
            total={PROJECTS.length}
            onOpen={() => setOpenIndex(i)}
          />
        ))}
      </div>

      <CaseStudyOverlay
        project={openIndex !== null ? PROJECTS[openIndex] : null}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}
