const steps = [
  {
    n: "Etapa 1",
    title: "Construção e fortalecimento da leitura",
    color: "bg-primary text-primary-foreground",
  },
  {
    n: "Etapa 2",
    title: "Avanço para palavras e estruturas mais complexas",
    color: "bg-sun text-sun-foreground",
  },
  {
    n: "Etapa 3",
    title: "Treino para desenvolver mais segurança e fluência",
    color: "bg-accent text-accent-foreground",
  },
];

export function LearningPath() {
  return (
    <section className="bg-sky/40 pb-16 sm:pb-24">
      <div className="section-shell">
        <ol className="relative flex flex-col gap-5 border-l-2 border-dashed border-primary/40 pl-7 sm:grid sm:grid-cols-3 sm:gap-6 sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-9">
          {steps.map((s, i) => (
            <li key={s.n} className="relative rise" style={{ animationDelay: `${i * 90}ms` }}>
              <span
                className={`absolute -left-[2.4rem] top-4 flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold shadow-soft sm:-top-[3.4rem] sm:left-0 ${s.color}`}
              >
                {i + 1}
              </span>
              <div className="rounded-3xl bg-card p-5 shadow-card">
                <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">
                  {s.n}
                </p>
                <p className="mt-2 text-base font-semibold leading-snug">
                  {s.title}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
