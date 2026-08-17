import { Check } from "lucide-react";

const items = [
  "Estão iniciando o processo de alfabetização",
  "Já reconhecem letras e sílabas, mas apresentam dificuldade para ler",
  "Fazem uma leitura muito silabada",
  "Precisam desenvolver mais segurança",
  "Têm dificuldade com palavras simples ou complexas",
  "Necessitam de atividades extras para fortalecer a leitura",
];

export function Audience() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          O Bê a Bá da Leitura é indicado para crianças que…
        </h2>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-2xl bg-card px-5 py-4 shadow-soft"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <Check className="h-4 w-4 text-primary" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold sm:text-base">{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-muted-foreground">
          O professor pode selecionar as atividades de acordo com o nível e a
          necessidade de cada criança.
        </p>
      </div>
    </section>
  );
}
