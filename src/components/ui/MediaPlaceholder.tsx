const ICONS = {
  photo: (
    <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  ),
  video: <path d="M4 6h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm16 2 4-2v12l-4-2" />,
};

export function MediaPlaceholder({
  label,
  kind = "photo",
  className,
}: {
  label: string;
  kind?: "photo" | "video";
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-3 z-20 flex items-start justify-end ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 rounded-full border border-dashed border-white/35 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 text-white/60"
        >
          {ICONS[kind]}
        </svg>
        <span className="font-display text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white/60">
          {label}
        </span>
      </div>
    </div>
  );
}
