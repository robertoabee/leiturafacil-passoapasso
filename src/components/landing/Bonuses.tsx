import { Gift } from "lucide-react";
import { BONUSES } from "@/content/site";

export function Bonuses() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          E você ainda recebe materiais extras
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {BONUSES.map((b) => (
            <article
              key={b.title}
              className="rounded-3xl border-2 border-dashed border-accent/40 bg-card p-6 shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/12">
                  <Gift className="h-5 w-5 text-accent" aria-hidden="true" />
                </span>
                <span className="font-display text-xs font-bold uppercase tracking-widest text-accent">
                  {b.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
