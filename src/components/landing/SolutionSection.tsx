import { ListOrdered, Clock4, Layers } from "lucide-react";

const points = [
  {
    icon: ListOrdered,
    title: "Sequência clara",
    text: "Você sabe exatamente o que trabalhar em cada etapa da leitura.",
  },
  {
    icon: Clock4,
    title: "Economia de tempo",
    text: "Sem precisar procurar atividades diferentes todos os dias.",
  },
  {
    icon: Layers,
    title: "Atividades progressivas",
    text: "Do simples ao complexo, respeitando o ritmo de cada criança.",
  },
];

export function SolutionSection() {
  return (
    <section className="bg-sky/40 py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Uma trilha para desenvolver a leitura passo a passo
        </h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            O Bê a Bá da Leitura organiza atividades em uma progressão lógica
            para que o professor tenha materiais para trabalhar diferentes
            níveis da leitura sem precisar começar do zero a cada aula.
          </p>
          <p>
            A criança avança gradualmente, enquanto o professor consegue
            acompanhar e estimular seu desenvolvimento.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-card p-5 shadow-soft">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="mt-3 text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
