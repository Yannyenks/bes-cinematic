"use client";

/** Renders `text` progressively based on a 0..1 progress value (scroll-driven, no internal timer). */
export function Typewriter({
  text,
  progress,
  className,
}: {
  text: string;
  progress: number;
  className?: string;
}) {
  const count = Math.round(Math.min(1, Math.max(0, progress)) * text.length);
  const done = count >= text.length;

  return (
    <span className={className}>
      {text.slice(0, count)}
      {progress > 0 && !done && (
        <span
          aria-hidden
          className="ml-1 inline-block w-[3px] bg-white align-middle"
          style={{ height: "0.85em", animation: "pulse-line 0.9s step-end infinite" }}
        />
      )}
    </span>
  );
}
