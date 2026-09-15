import type { Expertise } from "@/data/expertise";

const PATHS: Record<Expertise["icon"], React.ReactNode> = {
  conference: (
    <path d="M4 20h16M6 20V9l6-4 6 4v11M10 20v-5h4v5" />
  ),
  corporate: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 15h4" />
    </>
  ),
  network: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="15" r="3" />
      <path d="M10.5 10 14.5 13M8 11v6a2 2 0 0 0 2 2h4" />
    </>
  ),
  marketing: (
    <path d="M3 11l14-6v14L3 13v-2zM17 8a4 4 0 0 1 0 8M7 13v5a2 2 0 0 0 4 0v-3" />
  ),
};

export function ExpertiseIcon({ icon }: { icon: Expertise["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      {PATHS[icon]}
    </svg>
  );
}
