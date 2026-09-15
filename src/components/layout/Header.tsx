"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#agence", label: "L'agence" },
  { href: "#empreinte", label: "Notre empreinte" },
  { href: "#expertises", label: "Expertises" },
  { href: "#process", label: "Process" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#temoignages", label: "Témoignages" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#accueil"
          className="font-display flex items-center gap-3 text-lg font-extrabold tracking-tight text-white"
        >
          BES
          <span className="hidden rounded-md bg-magenta px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white sm:inline-block">
            L&apos;innovation événementielle
          </span>
        </a>

        <nav className="hidden gap-8 text-sm font-semibold text-white/80 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-magenta after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#devis"
            className="font-display hidden rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition-colors hover:bg-magenta hover:text-white sm:inline-block"
          >
            Demander un devis
          </a>
          <button
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-2 lg:hidden"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-black/95 px-6 py-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-semibold text-white/85"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#devis"
            onClick={() => setOpen(false)}
            className="font-display mt-2 rounded-full bg-magenta px-5 py-3 text-center text-sm font-bold text-white"
          >
            Demander un devis
          </a>
        </nav>
      )}
    </header>
  );
}
