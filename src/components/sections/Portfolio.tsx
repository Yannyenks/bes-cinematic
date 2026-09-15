import { Reveal } from "@/components/ui/Reveal";
import { ProjectTile } from "@/components/sections/ProjectTile";
import { PROJECTS } from "@/data/projects";

export function Portfolio() {
  return (
    <section
      id="realisations"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal direction="scale">
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-magenta">
            <span className="h-px w-9 bg-gradient-to-r from-magenta to-cyan" />
            Nos réalisations
          </span>
        </Reveal>
        <Reveal direction="scale" delay={80}>
          <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] text-white">
            L&apos;album de nos expériences.
          </h2>
        </Reveal>

        <Reveal direction="scale" delay={160}>
          <div className="mt-14 grid auto-rows-[230px] grid-cols-2 gap-5 sm:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectTile key={project.title} project={project} />
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-sm italic text-white/40">
          Les visuels de cette section seront remplacés par les photographies
          officielles des évènements.
        </p>
      </div>
    </section>
  );
}
