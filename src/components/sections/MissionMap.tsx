"use client";

import dynamic from "next/dynamic";

const MissionMap3D = dynamic(
  () => import("@/three/MissionMap3D").then((m) => m.MissionMap3D),
  { ssr: false },
);

const LABELS = [
  "L'étincelle",
  "Le déclic",
  "La mission",
  "Le protocole",
  "L'impact",
];

export function MissionMap({
  selected,
  onSelect,
}: {
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="relative h-[62vh] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent md:h-[68vh]">
      <MissionMap3D onSelect={onSelect} selected={selected} />

      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5 md:p-7">
        <span className="font-display rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm">
          Carte de mission — glisser pour explorer
        </span>
        <span className="font-display hidden rounded-full border border-white/15 bg-black/40 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm sm:inline-block">
          {selected !== null ? `Nœud 0${selected + 1} sélectionné` : "Faites défiler pour déverrouiller"}
        </span>
      </div>

      {selected !== null && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-7">
          <span className="font-display inline-block rounded-full bg-white px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black">
            0{selected + 1} — {LABELS[selected]}
          </span>
        </div>
      )}
    </div>
  );
}
