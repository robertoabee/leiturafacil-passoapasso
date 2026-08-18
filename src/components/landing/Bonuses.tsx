import { Gift, BadgeCheck } from "lucide-react";
import { BONUS } from "@/content/site";

export function Bonuses() {
  return (
    <section className="bg-sun/25 py-14 sm:py-20">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] border border-accent/25 bg-card shadow-card">
          <div className="grid gap-0 sm:grid-cols-2">
            <div className="flex items-center justify-center bg-gradient-to-b from-sky/40 via-cream to-card p-6 sm:p-8">
              <img
                src={BONUS.image}
                alt="Capa do bônus Fichas de Leitura das Letras"
                loading="lazy"
                className="w-full max-w-sm rounded-2xl shadow-card"
              />
            </div>

            <div className="p-6 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/12">
                  <Gift className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                  {BONUS.tag}
                </span>
              </div>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl">
                {BONUS.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {BONUS.description}
              </p>

              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-soft">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                {BONUS.seal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
