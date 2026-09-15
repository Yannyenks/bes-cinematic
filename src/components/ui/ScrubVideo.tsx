"use client";

import { useScrollScrubVideo } from "@/lib/useScrollScrubVideo";

export function ScrubVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const ref = useScrollScrubVideo<HTMLVideoElement>();

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      muted
      playsInline
      preload="auto"
    />
  );
}
