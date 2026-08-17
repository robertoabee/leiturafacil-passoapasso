import { CalendarCheck, Printer, TrendingUp, Shuffle } from "lucide-react";

const items = [
  {
    icon: CalendarCheck,
    title: "Sequência organizada",
    text: "Você sabe qual caminho seguir sem precisar montar tudo do zero.",
  },
  {
    icon: Printer,
    title: "Pronto para imprimir",
    text: "Escolha a atividade, imprima e aplique.",
  },
  {
    icon: TrendingUp,
    title: "Progressão de aprendizagem",
    text: "Atividades organizadas para acompanhar diferentes níveis de leitura.",
  },
  {
    icon: Shuffle,
    title: "Uso flexível",
    text: "Utilize em sala de aula, reforço escolar ou atendimento individual.",
  },
];

export function Benefits() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Menos tempo procurando atividades. Mais tempo ensinando.
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl bg-card p-6 shadow-soft"
            >
              <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
