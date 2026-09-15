export type Expertise = {
  title: string;
  description: string;
  refs: string[];
  icon: "conference" | "corporate" | "network" | "marketing";
};

export const EXPERTISE: Expertise[] = [
  {
    title: "Conférences & forums",
    description:
      "Conception et orchestration de grands rendez-vous institutionnels et économiques : plénières, panels de haut niveau, sommets multi-acteurs.",
    refs: ["PML", "CIF"],
    icon: "conference",
  },
  {
    title: "Évènements corporate",
    description:
      "Séminaires, conventions, célébrations d'entreprise et activations internes qui fédèrent vos équipes autour de votre identité.",
    refs: ["BFC", "DPWS"],
    icon: "corporate",
  },
  {
    title: "Networking, salons & affaires",
    description:
      "Espaces de rencontre B2B, salons professionnels, afterworks et formats d'affaires qui créent des connexions à forte valeur ajoutée.",
    refs: ["150 ans PAD", "Afterwork SGS"],
    icon: "network",
  },
  {
    title: "Marketing & communication institutionnelle",
    description:
      "Stratégies de visibilité, campagnes de notoriété et dispositifs de communication qui prolongent l'impact de vos évènements.",
    refs: ["DPWS", "DDLP Tchad"],
    icon: "marketing",
  },
];
