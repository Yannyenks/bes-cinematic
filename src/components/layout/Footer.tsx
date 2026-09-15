const NAV = [
  { href: "#agence", label: "L'agence" },
  { href: "#expertises", label: "Expertises" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#devis", label: "Devis" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 pb-8 pt-16 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl font-extrabold text-white">
            BES
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            Business Event Solutions — agence événementielle. De la
            conception stratégique à la valorisation des retombées.
          </p>
        </div>
        <div>
          <h4 className="font-display mb-4 text-sm font-bold text-white">
            Navigation
          </h4>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="mb-2.5 block text-sm text-white/60 transition-colors hover:text-cyan"
            >
              {n.label}
            </a>
          ))}
        </div>
        <div>
          <h4 className="font-display mb-4 text-sm font-bold text-white">
            Contact
          </h4>
          <a
            href="mailto:contact@bes-agence.com"
            className="mb-2.5 block text-sm text-white/60 transition-colors hover:text-cyan"
          >
            contact@bes-agence.com
          </a>
          <a
            href="tel:+237000000000"
            className="mb-2.5 block text-sm text-white/60 transition-colors hover:text-cyan"
          >
            +237 6XX XX XX XX
          </a>
          <span className="block text-sm text-white/60">
            Douala — Cameroun
          </span>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-between gap-2 text-[0.78rem] text-white/40">
        <span>© 2026 Business Event Solutions. Tous droits réservés.</span>
        <span>L&apos;innovation événementielle.</span>
      </div>
    </footer>
  );
}
