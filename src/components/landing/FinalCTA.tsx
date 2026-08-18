import { PRICE, MICRO } from "@/content/site";
import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <div className="rounded-[2rem] bg-primary px-6 py-10 text-center text-primary-foreground shadow-card sm:px-12">
          <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
            Quanto tempo você ainda quer perder procurando atividades de leitura
            uma por uma?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed opacity-90 sm:text-base">
            Com o Bê a Bá da Leitura, você recebe uma trilha organizada, pronta
            para imprimir e utilizar de acordo com a necessidade dos seus
            alunos.
          </p>

          <div className="mx-auto mt-7 max-w-xs rounded-2xl bg-card px-5 py-5 text-foreground">
            {PRICE.showReference && (
              <p className="text-sm font-semibold text-muted-foreground line-through">
                {PRICE.reference}
              </p>
            )}
            <p className="font-display text-4xl font-extrabold text-primary">
              {PRICE.current}
            </p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              Pagamento único
            </p>
          </div>

          <p className="mt-6 font-display text-sm font-bold opacity-90">
            {MICRO.final}
          </p>

          <div className="mt-3 flex justify-center">
            <CTAButton>QUERO COMEÇAR AGORA</CTAButton>
          </div>

          <p className="mt-4 text-xs opacity-80">
            7 dias de garantia • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
}
