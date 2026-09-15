import { Reveal } from "@/components/ui/Reveal";
import { ScrubVideo } from "@/components/ui/ScrubVideo";

export function TransitionBand() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black">
      <ScrubVideo
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        src="/media/videos/transition-final.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(229,0,125,0.14), transparent 65%)",
        }}
      />

      <Reveal direction="scale" className="relative z-10 px-6 text-center">
        <h2 className="font-display mx-auto max-w-4xl text-[clamp(1.9rem,4.6vw,3.4rem)] font-extrabold leading-[1.18] text-white">
          Nous faisons muter vos projets événementiels en{" "}
          <em className="not-italic text-cyan">expériences identitaires</em>{" "}
          <strong className="inline-block -rotate-1 rounded-xl bg-white px-4 text-magenta">
            immersives !
          </strong>
        </h2>
      </Reveal>
    </section>
  );
}
