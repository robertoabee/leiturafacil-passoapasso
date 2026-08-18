import { Check, ShieldCheck, Lock, Zap } from "lucide-react";
import mockupAsset from "@/assets/mockup-kit.png.asset.json";
import { PRICE, MICRO, OFFER_INCLUDES, BONUS } from "@/content/site";
import { CTAButton } from "./CTAButton";

export function Offer() {
  return (
    <section
      id="oferta"
      className="scroll-mt-4 bg-primary py-14 text-primary-foreground sm:py-20"
    >
      <div className="section-shell">
        <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-4xl">
          Leve hoje a trilha completa Bê a Bá da Leitura
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed opacity-90 sm:text-base">
          Tenha atividades organizadas e prontas para trabalhar a leitura dos
          seus alunos sem precisar criar tudo do zero.
        </p>

        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] bg-card p-5 text-foreground shadow-card sm:p-9">
          <div className="grid gap-4 sm:grid-cols-[1.6fr_1fr] sm:items-center">
            <div className="rounded-2xl bg-gradient-to-b from-sky/40 via-cream to-white p-3">
              <img
                src={mockupAsset.url}
                alt="Os três materiais do Bê a Bá da Leitura"
                loading="lazy"
                width={1672}
                height={941}
                className="mx-auto w-full"
              />
            </div>
            <div className="rounded-2xl bg-sun/25 p-3">
              <img
                src={BONUS.image}
                alt="Bônus Fichas de Leitura das Letras"
                loading="lazy"
                className="mx-auto w-full max-w-[200px] rounded-xl shadow-soft"
              />
              <p className="mt-2 text-center font-display text-[0.7rem] font-bold uppercase tracking-widest text-sun-foreground">
                Bônus incluso
              </p>
            </div>
          </div>

          <p className="mt-8 font-display text-sm font-extrabold uppercase tracking-widest text-primary">
            Você recebe:
          </p>
          <ul className="mt-4 space-y-2.5">
            {OFFER_INCLUDES.map((i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-semibold sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </span>
                {i}
              </li>
            ))}
          </ul>

          <hr className="my-7 border-dashed border-border" />

          <div className="rounded-2xl bg-sun/35 px-5 py-6 text-center">
            {PRICE.showReference && (
              <p className="text-sm font-semibold text-sun-foreground/70">
                Valor de referência{" "}
                <span className="line-through">{PRICE.reference}</span>
              </p>
            )}
            <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-sun-foreground/80">
              Condição atual
            </p>
            <p className="font-display text-4xl font-extrabold text-sun-foreground sm:text-5xl">
              {PRICE.current}
            </p>
            <p className="mt-1 text-sm font-semibold text-sun-foreground/80">
              Pagamento único
            </p>
            {PRICE.showReference && (
              <p className="mx-auto mt-4 max-w-md rounded-xl bg-card px-4 py-3 text-sm font-semibold">
                {PRICE.anchorNote}
              </p>
            )}
          </div>

          <p className="mt-6 text-center font-display text-sm font-bold text-primary">
            {MICRO.offer}
          </p>

          <div className="mt-3">
            <CTAButton className="w-full sm:w-full">
              QUERO O BÊ A BÁ DA LEITURA
            </CTAButton>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" /> Acesso imediato
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5" aria-hidden="true" /> Pagamento seguro
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Garantia
              de 7 dias
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
