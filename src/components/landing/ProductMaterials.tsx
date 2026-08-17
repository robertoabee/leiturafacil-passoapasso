import { MATERIALS } from "@/content/site";

export function ProductMaterials() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Tudo organizado e pronto para você aplicar
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {MATERIALS.map((m, i) => (
            <article
              key={m.number}
              className="rise rounded-3xl border border-border bg-card p-5 shadow-card"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl bg-muted">
                {m.image ? (
                  <img
                    src={m.image}
                    alt={`Capa do ${m.number}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="px-4 text-center text-sm text-muted-foreground">
                    Espaço para o mockup da capa
                  </span>
                )}
              </div>
              <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-primary">
                {m.number}
              </p>
              <h3 className="mt-1 text-lg font-bold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {m.description}
              </p>
              <p className="mt-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                {m.pages}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-2xl bg-muted px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Você recebe todos os materiais em formato digital PDF para baixar,
          imprimir e utilizar de acordo com a necessidade dos seus alunos.
        </p>
      </div>
    </section>
  );
}
