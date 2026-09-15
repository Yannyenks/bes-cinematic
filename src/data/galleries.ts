export type GallerySlot = {
  span?: "tall" | "wide";
};

export type Gallery = {
  tag: string;
  title: string;
  color: string;
  slots: GallerySlot[];
};

export const AGENCY_GALLERIES: Gallery[] = [
  {
    tag: "L'étincelle",
    title: "Séquence 01 — L'étincelle",
    color: "#16255C",
    slots: [
      { span: "tall" },
      {},
      {},
      { span: "wide" },
      {},
      {},
      {},
      { span: "tall" },
    ],
  },
  {
    tag: "Le déclic",
    title: "Séquence 02 — Le déclic",
    color: "#2FA8E0",
    slots: [
      {},
      { span: "wide" },
      {},
      {},
      { span: "tall" },
      {},
      {},
      { span: "wide" },
    ],
  },
  {
    tag: "La mission",
    title: "Séquence 03 — La mission",
    color: "#E5007D",
    slots: [
      { span: "tall" },
      {},
      { span: "wide" },
      {},
      {},
      {},
      { span: "tall" },
      {},
    ],
  },
  {
    tag: "Le protocole",
    title: "Séquence 04 — Le protocole",
    color: "#0E1A44",
    slots: [
      {},
      {},
      { span: "tall" },
      {},
      { span: "wide" },
      {},
      {},
      { span: "tall" },
    ],
  },
  {
    tag: "L'impact",
    title: "Séquence 05 — L'impact",
    color: "#16255C",
    slots: [
      { span: "wide" },
      {},
      {},
      { span: "tall" },
      {},
      {},
      { span: "wide" },
      {},
    ],
  },
];
