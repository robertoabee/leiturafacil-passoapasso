import mockupAsset from "@/assets/mockup-kit.png.asset.json";
import { PRICE } from "@/content/site";
import { CTAButton } from "./CTAButton";

const includes = [
  "3 materiais principais",
  "Trilha progressiva de leitura",
  "Materiais em PDF",
  "Acesso imediato",
  "Bônus complementares",
];

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-4 bg-secondary/60 py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-center text-2xl font-extrabold leading-tight sm:text-4xl">
          Comece a trabalhar a leitura dos seus alunos com uma trilha pronta
          para aplicar.
        </h2>

        <div className="mx-auto mt-8 max-w-2xl rounded-3xl bg-card p-6 shadow-card sm:p-9">
          <img
            src={mockupAsset.url}
            alt="Materiais e bônus do Bê a Bá da Leitura"
            loading="lazy"
            width={1672}
            height={941}
            className="mx-auto w-full max-w-xl"
          />

          <h3 className="mt-6 text-center font-display text-xl font-extrabold">
            Bê a Bá da Leitura
          </h3>

          <ul className="mt-5 space-y-2.5">
            {includes.map((i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm font-semibold sm:text-base">
                <span className="text-primary" aria-hidden="true">
                  ✓
                </span>
                {i}
              </li>
            ))}
          </ul>

          <div className="mt-7 rounded-2xl bg-sun/40 px-5 py-5 text-center">
            <p className="font-display text-3xl font-extrabold text-sun-foreground sm:text-4xl">
              {PRICE.current}
            </p>
            <p className="mt-1 text-sm font-semibold text-sun-foreground/80">
              {PRICE.note}
            </p>
          </div>

          <div className="mt-6">
            <CTAButton className="w-full sm:w-full">QUERO COMEÇAR AGORA</CTAButton>
          </div>

          <div className="mt-4 space-y-1 text-center text-xs text-muted-foreground">
            <p>🔒 Compra segura</p>
            <p>⚡ Acesso após confirmação do pagamento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
