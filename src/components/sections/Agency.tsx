import { Reveal } from "@/components/ui/Reveal";
import { ScrollFocus } from "@/components/ui/ScrollFocus";
import { TiltCard } from "@/components/ui/TiltCard";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ScrubVideo } from "@/components/ui/ScrubVideo";

export function Agency() {
  return (
    <section
      id="agence"
      className="relative overflow-hidden bg-black py-28 md:py-36"
    >
      <div className="absolute inset-0">
        <ScrubVideo
          className="h-full w-full object-cover opacity-40"
          src="/media/videos/agency-space.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      <AmbientGlow className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <span className="font-display mb-6 inline-flex items-center gap-3 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-cyan">
            <span className="h-px w-9 bg-gradient-to-r from-cyan to-magenta" />
            Qui sommes-nous ?
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display max-w-4xl text-[clamp(1.9rem,4.2vw,3.4rem)] font-extrabold leading-[1.12] text-white">
            Chaque grande transformation commence rarement dans une salle de
            conférence.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal delay={140} className="md:sticky md:top-32 md:self-start">
            <TiltCard>
              <p className="font-display text-2xl font-bold leading-snug text-magenta md:text-3xl">
                C&apos;est là que nous intervenons !
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Vision, valeurs, publics, objectifs — l&apos;ADN de votre
                projet, décodé et mis en mouvement.
              </p>
            </TiltCard>
          </Reveal>

          <div className="space-y-7 text-[1.02rem] leading-relaxed text-white/70">
            <ScrollFocus>
              <p>
                Elle commence par une idée, une conviction : une rencontre qui
                mérite d&apos;exister. Puis vient le moment où cette idée doit
                quitter les documents de travail pour prendre vie.
              </p>
            </ScrollFocus>
            <ScrollFocus>
              <p>
                Une poignée de mains qui ouvre un marché. Une conversation qui
                devient un partenariat. Une idée qui quitte une salle de
                conférence pour transformer une organisation. Un territoire
                qui révèle enfin son potentiel au monde.
              </p>
            </ScrollFocus>
            <ScrollFocus>
              <p>
                Chez <strong className="text-white">Business Event Solutions</strong>,
                nous concevons des évènements d&apos;impact où les
                institutions, les entreprises, les territoires et les acteurs
                économiques se rencontrent pour faire avancer des visions
                communes.
              </p>
            </ScrollFocus>
            <ScrollFocus>
              <p>
                De la conception stratégique à l&apos;opérationnalisation
                complète jusqu&apos;à la valorisation des retombées, nous
                orchestrons des expériences immersives taillées sur mesure qui
                créent de la valeur pour les organisations, leurs publics et
                les écosystèmes dans lesquels elles évoluent.
              </p>
            </ScrollFocus>
            <ScrollFocus>
              <p>
                À l&apos;échelle nationale, sous-régionale ou internationale,
                nous faisons plus que produire des événements.{" "}
                <strong className="text-white">
                  Nous donnons vie aux rendez-vous qui façonnent
                  l&apos;économie, renforcent les institutions et accélèrent
                  le développement.
                </strong>
              </p>
            </ScrollFocus>
          </div>
        </div>
      </AmbientGlow>
    </section>
  );
}
