"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";

const LAB_TAGS = [
  "Institutionnel",
  "Notoriété",
  "Impact",
  "Leadership",
  "Connectivité",
  "Business",
  "Partenariat",
];

const EVENT_TYPES = [
  "Conférence / forum",
  "Évènement corporate",
  "Networking / salon / affaires",
  "Marketing & communication institutionnelle",
  "Autre",
];

export function Devis() {
  const [status, setStatus] = useState<{
    tone: "idle" | "error" | "ok";
    message: string;
  }>({
    tone: "idle",
    message:
      "Vos informations restent confidentielles et servent uniquement à l'étude de votre demande.",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim();

    if (!email || !email.includes("@")) {
      setStatus({
        tone: "error",
        message:
          "Merci de renseigner un email valide pour que le labo puisse vous répondre.",
      });
      return;
    }

    setStatus({
      tone: "ok",
      message:
        "✔ Prélèvement reçu ! Notre équipe vous recontacte sous 48 h ouvrées.",
    });
    e.currentTarget.reset();
  }

  return (
    <section
      id="devis"
      className="relative overflow-hidden bg-gradient-to-b from-black to-midnight py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-10">
        <Reveal direction="left">
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-magenta">
            <span className="h-px w-9 bg-gradient-to-r from-magenta to-cyan" />
            Devis
          </span>
          <h2 className="font-display text-[clamp(1.7rem,3.6vw,2.6rem)] font-extrabold leading-[1.15] text-white">
            Passez au laboratoire, donnez-nous votre ADN !
          </h2>
          <p className="mt-6 text-[1rem] leading-relaxed text-white/60">
            Décrivez-nous votre projet : nous l&apos;analysons, nous le
            séquençons et nous revenons vers vous avec une proposition
            taillée sur mesure.
          </p>
          <p className="mt-3 text-[1rem] leading-relaxed text-white/60">
            Réponse sous 48 heures ouvrées.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {LAB_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-dashed border-magenta/50 px-3.5 py-1.5 text-[0.78rem] font-bold text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border-t-4 border-magenta bg-white/[0.04] p-8 backdrop-blur-sm md:p-11"
          >
            <h3 className="font-display mb-7 text-lg font-bold text-white">
              Fiche de prélèvement — votre projet
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom & prénom" name="nom" placeholder="Votre nom complet" />
              <Field label="Organisation" name="organisation" placeholder="Entreprise / institution" />
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="vous@organisation.com"
              />
              <Field label="Téléphone" name="tel" type="tel" placeholder="+237 ..." />
            </div>

            <div className="mt-5">
              <label
                htmlFor="f-type"
                className="mb-2 block text-sm font-bold text-white/80"
              >
                Type d&apos;évènement
              </label>
              <select
                id="f-type"
                name="type"
                className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-magenta"
              >
                {EVENT_TYPES.map((t) => (
                  <option key={t} value={t} className="bg-midnight">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="f-msg"
                className="mb-2 block text-sm font-bold text-white/80"
              >
                Votre projet en quelques lignes
              </label>
              <textarea
                id="f-msg"
                name="message"
                placeholder="Contexte, objectifs, date envisagée, nombre de participants…"
                className="min-h-[110px] w-full resize-y rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-magenta"
              />
            </div>

            <button
              type="submit"
              className="font-display mt-7 w-full rounded-full bg-magenta py-4 text-sm font-bold text-white shadow-[0_14px_34px_-12px_rgba(229,0,125,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Envoyer mon ADN au labo
            </button>

            <p
              className={`mt-4 text-[0.78rem] ${
                status.tone === "error"
                  ? "text-magenta"
                  : status.tone === "ok"
                    ? "text-cyan"
                    : "text-white/45"
              }`}
            >
              {status.message}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={`f-${name}`}
        className="mb-2 block text-sm font-bold text-white/80"
      >
        {label}
      </label>
      <input
        id={`f-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-magenta"
      />
    </div>
  );
}
