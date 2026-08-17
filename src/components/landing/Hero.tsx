import mockup from "@/assets/mockup-kit.png";
import { CTAButton } from "./CTAButton";

const benefits = [
  { icon: "📚", text: "3 materiais completos em PDF" },
  { icon: "🖨️", text: "Prontos para imprimir e aplicar" },
  { icon: "⚡", text: "Acesso imediato" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div className="section-shell">
        <span className="inline-block rounded-full bg-primary/12 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary">
          Bê a Bá da Leitura
        </span>

        <h1 className="mt-5 text-[1.85rem] font-extrabold leading-[1.15] sm:text-5xl">
          Ajude seus alunos a avançarem da leitura travada para uma leitura mais
          segura e fluida.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Uma trilha de atividades organizada em sequência para desenvolver a
          leitura de palavras simples e complexas, fortalecer a fluência e
          facilitar sua aplicação em sala de aula.
        </p>

        <ul className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
          {benefits.map((b) => (
            <li
              key={b.text}
              className="flex items-center gap-2.5 rounded-2xl bg-card px-4 py-3 text-sm font-semibold shadow-soft"
            >
              <span aria-hidden="true">{b.icon}</span>
              {b.text}
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl bg-card p-4 shadow-card sm:p-8">
          <img
            src={mockup}
            alt="Os três materiais do Bê a Bá da Leitura reunidos"
            width={1280}
            height={960}
            className="mx-auto w-full max-w-xl"
          />
        </div>

        <div className="mt-8">
          <CTAButton target="offer">
            QUERO CONHECER O BÊ A BÁ DA LEITURA
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
