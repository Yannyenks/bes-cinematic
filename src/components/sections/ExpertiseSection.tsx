import { Reveal } from "@/components/ui/Reveal";
import { ExpertiseIcon } from "@/components/ui/ExpertiseIcon";
import { EXPERTISE } from "@/data/expertise";

const DIRECTIONS = ["left", "right", "left", "right"] as const;
const OFFSETS = ["md:mt-0", "md:mt-16", "md:mt-16", "md:mt-0"];

export function ExpertiseSection() {
  return (
    <section
      id="expertises"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div
        className="pointer-events-none absolute -left-1/4 top-1/3 h-[40rem] w-[40rem] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(47,168,224,0.6), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-magenta">
            <span className="h-px w-9 bg-gradient-to-r from-magenta to-cyan" />
            Nos domaines d&apos;expertise
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] text-white">
            Quatre laboratoires, une même exigence.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/60">
            Chaque projet mobilise le bon protocole : nous combinons
            stratégie, production et communication pour transformer vos
            objectifs en rendez-vous mémorables.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {EXPERTISE.map((item, i) => (
            <Reveal
              key={item.title}
              direction={DIRECTIONS[i]}
              delay={i * 90}
              className={OFFSETS[i]}
            >
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-9 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-magenta to-cyan transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-magenta transition-colors duration-300 group-hover:text-cyan">
                  <ExpertiseIcon icon={item.icon} />
                </div>

                <h3 className="font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-relaxed text-white/60">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.refs.map((ref) => (
                    <span
                      key={ref}
                      className="rounded-full bg-white/5 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-white/70"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
