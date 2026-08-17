import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-14 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-card p-7 text-center shadow-soft sm:flex-row sm:text-left">
          <span className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full bg-primary/12 text-primary">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
            <span className="font-display text-xs font-bold">7 dias</span>
          </span>
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">
              Você tem 7 dias para conhecer o material
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Após a compra, você poderá acessar e conhecer o Bê a Bá da
              Leitura. Caso o material não atenda às suas expectativas, poderá
              solicitar o cancelamento dentro do prazo de garantia oferecido
              pela plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
