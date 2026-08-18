import { BookOpenText, Printer, Zap } from "lucide-react";
import mockupAsset from "@/assets/mockup-kit.png.asset.json";
import { MICRO } from "@/content/site";
import { CTAButton } from "./CTAButton";

const cards = [
  {
    icon: BookOpenText,
    title: "3 materiais completos",
    text: "Trilha organizada de leitura",
  },
  {
    icon: Printer,
    title: "Pronto para imprimir",
    text: "Baixe e aplique nas suas aulas",
  },
  {
    icon: Zap,
    title: "Acesso imediato",
    text: "Receba os arquivos após a compra",
  },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background pb-14 pt-10 sm:pb-20 sm:pt-14">
      <div className="section-shell">
        <span className="inline-block rounded-full bg-primary/12 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary">
          Bê a Bá da Leitura
        </span>

        <h1 className="mt-5 text-[1.85rem] font-extrabold leading-[1.15] sm:text-5xl">
          Ajude seus alunos a avançarem da{" "}
          <span className="rounded-lg bg-accent/15 px-1.5 text-accent">
            leitura travada
          </span>{" "}
          para uma leitura mais{" "}
          <span className="text-primary underline decoration-sun decoration-4 underline-offset-4">
            segura
          </span>{" "}
          e{" "}
          <span className="text-primary underline decoration-sun decoration-4 underline-offset-4">
            fluida
          </span>
          .
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Uma trilha de atividades organizada em sequência para desenvolver a
          leitura de palavras simples e complexas, fortalecer a fluência e
          economizar o seu tempo de preparação.
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-4 shadow-soft"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold leading-snug">
                  {title}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {text}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-b from-sky/40 via-cream to-white p-3 shadow-card sm:p-6">
          <img
            src={mockupAsset.url}
            alt="Os três materiais do Bê a Bá da Leitura reunidos"
            width={1672}
            height={941}
            className="mx-auto w-full max-w-3xl drop-shadow-sm"
          />
        </div>

        <p className="mt-8 font-display text-sm font-bold text-primary">
          {MICRO.hero}
        </p>
        <div className="mt-3">
          <CTAButton target="offer">
            QUERO CONHECER O BÊ A BÁ DA LEITURA
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
