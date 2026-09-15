"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ScrubVideo } from "@/components/ui/ScrubVideo";
import { KineticHeadline } from "@/components/ui/KineticHeadline";
import { NarrativeSequence } from "@/components/sections/NarrativeSequence";
import { MissionMap } from "@/components/sections/MissionMap";
import { GalleryOverlay } from "@/components/sections/GalleryOverlay";
import { AGENCY_GALLERIES } from "@/data/galleries";

export function Agency() {
  const [selected, setSelected] = useState<number | null>(null);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  function handleSelect(i: number) {
    setSelected(i);
    setGalleryIndex(i);
    document
      .getElementById(`beat-${i}`)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <section
      id="agence"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div className="absolute inset-0">
        <ScrubVideo
          className="h-full w-full object-cover opacity-40"
          src="/media/videos/agency-space.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <AmbientGlow className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-cyan">
            <span className="h-px w-9 bg-gradient-to-r from-cyan to-magenta" />
            Qui sommes-nous ? — niveau 01
          </span>
        </Reveal>

        <KineticHeadline
          text="Chaque grande transformation commence rarement dans une salle de conférence."
          className="font-display max-w-4xl text-[clamp(1.9rem,4.2vw,3.4rem)] font-extrabold leading-[1.12] text-white"
        />

        <Reveal delay={120} className="mt-12">
          <MissionMap selected={selected} onSelect={handleSelect} />
          <p className="mt-4 text-center text-[0.8rem] text-white/35">
            Cliquez un nœud pour ouvrir sa galerie photo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal delay={140} className="md:sticky md:top-32 md:self-start">
            <TiltCard>
              <span className="font-display inline-flex items-center gap-1.5 rounded-full bg-cyan/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-cyan">
                Objectif déverrouillé
              </span>
              <p className="font-display mt-4 text-2xl font-bold leading-snug text-magenta md:text-3xl">
                C&apos;est là que nous intervenons !
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Vision, valeurs, publics, objectifs — l&apos;ADN de votre
                projet, décodé et mis en mouvement.
              </p>
            </TiltCard>
          </Reveal>

          <NarrativeSequence activeIndex={selected} />
        </div>
      </AmbientGlow>

      <GalleryOverlay
        gallery={galleryIndex !== null ? AGENCY_GALLERIES[galleryIndex] : null}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
      />
    </section>
  );
}
