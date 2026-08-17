const steps = [
  {
    title: "Identifique o nível da criança",
    text: "Observe onde estão as principais dificuldades.",
  },
  {
    title: "Escolha a etapa adequada",
    text: "Utilize os materiais de acordo com o momento de aprendizagem.",
  },
  {
    title: "Aplique e acompanhe",
    text: "Use as atividades progressivamente e acompanhe a evolução da leitura.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-sky/40 py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Simples de aplicar no dia a dia
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-3xl bg-card p-6 shadow-soft">
              <span className="font-display text-3xl font-extrabold text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
