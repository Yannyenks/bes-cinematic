export type GallerySlot = {
  span?: "tall" | "wide";
};

export type Gallery = {
  tag: string;
  title: string;
  gradient: string;
  slots: GallerySlot[];
};

export const AGENCY_GALLERIES: Gallery[] = [
  {
    tag: "L'étincelle",
    title: "Séquence 01 — L'étincelle",
    gradient: "linear-gradient(160deg,#1B2F73,#E5007D)",
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
    gradient: "linear-gradient(160deg,#2FA8E0,#16255C)",
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
    gradient: "linear-gradient(160deg,#E5007D,#7A1FA0)",
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
    gradient: "linear-gradient(160deg,#16255C,#2FA8E0)",
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
    gradient: "linear-gradient(160deg,#0E1A44,#E5007D 130%)",
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
