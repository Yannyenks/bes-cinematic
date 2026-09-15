export type Project = {
  category: string;
  title: string;
  color: string;
  span?: "tall" | "wide";
};

export const PROJECTS: Project[] = [
  {
    category: "Conférence internationale",
    title: "Port Management Leadership — PML",
    color: "#16255C",
    span: "tall",
  },
  {
    category: "Célébration institutionnelle",
    title: "150 ans du PAD",
    color: "#2FA8E0",
  },
  {
    category: "Networking d'affaires",
    title: "Afterwork SGS",
    color: "#E5007D",
  },
  {
    category: "Forum économique",
    title: "CIF",
    color: "#0E1A44",
  },
  {
    category: "Communication institutionnelle",
    title: "DPWS & DDLP — Tchad",
    color: "#16255C",
    span: "wide",
  },
];
