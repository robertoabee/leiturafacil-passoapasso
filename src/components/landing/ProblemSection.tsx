const items = [
  "Leem de forma muito lenta",
  "Silabam praticamente todas as palavras",
  "Trocam ou confundem sons",
  "Têm dificuldade com palavras mais complexas",
  "Demonstram insegurança ao ler em voz alta",
];

export function ProblemSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Seu aluno conhece as letras… mas ainda trava na hora de ler?
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          Algumas crianças conseguem identificar sílabas e palavras, mas ainda:
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <li
              key={t}
              className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold shadow-soft sm:text-base"
            >
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-7 text-base leading-relaxed text-muted-foreground">
          E o problema fica ainda maior quando o professor precisa procurar ou
          criar novas atividades todos os dias sem saber exatamente qual deve
          ser o próximo passo.
        </p>

        <p className="mt-6 rounded-2xl bg-sun/40 px-5 py-4 font-display text-lg font-bold text-sun-foreground">
          Foi para facilitar esse processo que criamos o Bê a Bá da Leitura.
        </p>
      </div>
    </section>
  );
}
