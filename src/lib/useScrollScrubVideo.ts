"use client";

import { useEffect, useRef } from "react";

/** Drives a <video>'s currentTime from its scroll position through the viewport, instead of autoplaying. */
export function useScrollScrubVideo<T extends HTMLVideoElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.autoplay = true;
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    let ready = false;
    let raf: number;

    const onLoaded = () => {
      ready = true;
    };
    video.addEventListener("loadedmetadata", onLoaded);
    video.pause();

    const update = () => {
      if (ready && video.duration) {
        const rect = video.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const total = rect.height + vh;
        const passed = vh - rect.top;
        const progress = Math.min(1, Math.max(0, passed / total));
        const target = progress * video.duration;

        if (Math.abs(video.currentTime - target) > 0.04) {
          video.currentTime = target;
        }
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  return ref;
}
