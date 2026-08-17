import { PRICE } from "@/content/site";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <div className="rounded-3xl bg-primary px-6 py-10 text-center text-primary-foreground shadow-card sm:px-12">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
            A próxima atividade de leitura dos seus alunos já pode estar pronta.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-90 sm:text-base">
            Tenha uma sequência organizada de atividades para trabalhar leitura
            e fluência sem precisar criar tudo do zero.
          </p>
          <p className="mt-6 font-display text-lg font-bold">
            Bê a Bá da Leitura — {PRICE.short}
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton>QUERO O BÊ A BÁ DA LEITURA</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
