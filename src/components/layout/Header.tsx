"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#agence", label: "L'agence" },
  { href: "#empreinte", label: "Empreinte" },
  { href: "#expertises", label: "Expertises" },
  { href: "#process", label: "Process" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#temoignages", label: "Témoignages" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (open) {
        lastY.current = y;
        return;
      }
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 140);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <>
      <a
        href="#accueil"
        className="font-display fixed left-6 top-6 z-50 text-lg font-extrabold tracking-tight text-white mix-blend-difference md:left-10 md:top-8"
      >
        BES
      </a>

      <button
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-6 top-6 z-50 flex flex-col gap-1.5 rounded-full border border-white/15 bg-white/10 p-3 backdrop-blur-xl md:hidden"
      >
        <span
          className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Floating translucent pill nav */}
      <nav
        className={`fixed inset-x-0 bottom-6 z-50 hidden justify-center px-4 transition-all duration-500 ease-out md:flex ${
          hidden
            ? "pointer-events-none translate-y-24 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.06] p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2.5 text-[0.86rem] font-semibold text-white/65 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devis"
            className="font-display ml-1 rounded-full bg-white px-5 py-2.5 text-[0.86rem] font-bold text-black transition-colors hover:bg-magenta hover:text-white"
          >
            Devis
          </a>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-end bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`m-4 rounded-3xl border border-white/12 bg-white/[0.06] p-3 backdrop-blur-2xl transition-transform duration-300 ${
            open ? "translate-y-0" : "translate-y-6"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devis"
            onClick={() => setOpen(false)}
            className="font-display mt-1 block rounded-2xl bg-magenta px-4 py-3 text-center text-sm font-bold text-white"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </>
  );
}
