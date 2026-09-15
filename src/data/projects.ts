export type Project = {
  category: string;
  title: string;
  gradient: string;
  span?: "tall" | "wide";
};

export const PROJECTS: Project[] = [
  {
    category: "Conférence internationale",
    title: "Port Management Leadership — PML",
    gradient: "linear-gradient(160deg,#1B2F73,#E5007D)",
    span: "tall",
  },
  {
    category: "Célébration institutionnelle",
    title: "150 ans du PAD",
    gradient: "linear-gradient(160deg,#2FA8E0,#16255C)",
  },
  {
    category: "Networking d'affaires",
    title: "Afterwork SGS",
    gradient: "linear-gradient(160deg,#E5007D,#7A1FA0)",
  },
  {
    category: "Forum économique",
    title: "CIF",
    gradient: "linear-gradient(160deg,#16255C,#2FA8E0)",
  },
  {
    category: "Communication institutionnelle",
    title: "DPWS & DDLP — Tchad",
    gradient: "linear-gradient(160deg,#0E1A44,#E5007D 130%)",
    span: "wide",
  },
];
