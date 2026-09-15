import { Reveal } from "@/components/ui/Reveal";
import { LOCATIONS } from "@/data/locations";
import { ScrubVideo } from "@/components/ui/ScrubVideo";

export function Footprint() {
  return (
    <section
      id="empreinte"
      className="relative overflow-hidden bg-midnight py-28 md:py-36"
    >
      <div className="absolute inset-0">
        <ScrubVideo
          className="h-full w-full object-cover opacity-35"
          src="/media/videos/footprint-network.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/85 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-cyan">
              <span className="h-px w-9 bg-gradient-to-r from-cyan to-magenta" />
              Notre rayonnement
            </span>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-[1.12] text-white">
              Nous y avons déposé notre empreinte.
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-white/60">
              D&apos;un continent à l&apos;autre, chaque évènement porte la
              signature BES : rigueur, immersion et impact mesurable.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 70}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan/50 hover:bg-white/[0.08]">
                <div className="mb-4 text-3xl">{loc.flag}</div>
                <h3 className="font-display text-base font-bold text-white">
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-white/50">{loc.zone}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-cyan to-magenta transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className="relative z-10 mt-20 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
        }}
        aria-hidden
      >
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-16">
          {[...LOCATIONS, ...LOCATIONS].map((loc, i) => (
            <span
              key={i}
              className="font-display whitespace-nowrap text-4xl font-extrabold uppercase text-transparent"
              style={{ WebkitTextStroke: "1.4px rgba(255,255,255,0.22)" }}
            >
              {loc.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
