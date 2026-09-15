import { Reveal } from "@/components/ui/Reveal";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-black via-midnight to-black py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal direction="right">
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-cyan">
            <span className="h-px w-9 bg-gradient-to-r from-cyan to-magenta" />
            Notre process
          </span>
        </Reveal>
        <Reveal direction="right" delay={80}>
          <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] text-white">
            Du prélèvement d&apos;ADN à la révélation.
          </h2>
        </Reveal>
        <Reveal direction="right" delay={140}>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/60">
            Un protocole éprouvé, en quatre étapes, pour transformer votre
            identité en expérience évènementielle.
          </p>
        </Reveal>

        <ProcessTimeline />
      </div>
    </section>
  );
}
