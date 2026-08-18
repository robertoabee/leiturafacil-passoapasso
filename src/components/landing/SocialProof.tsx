import { Quote } from "lucide-react";
import { TESTIMONIAL_EXAMPLES } from "@/content/site";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function SocialProof() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Quem trabalha com alfabetização sabe a diferença que um material
          organizado pode fazer.
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Veja o tipo de experiência que queremos proporcionar aos professores
          que utilizarem o Bê a Bá da Leitura.
        </p>

        <Carousel
          opts={{ align: "start" }}
          className="mt-8 [&_.embla\\_\\_viewport]:overflow-visible"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIAL_EXAMPLES.map((t, i) => (
              <CarouselItem
                key={i}
                className="basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card">
                  {/* EXEMPLO — SUBSTITUIR POR DEPOIMENTO REAL */}
                  <span className="self-start rounded-full bg-muted px-3 py-1 font-display text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">
                    Exemplo de layout
                  </span>

                  {t.image ? (
                    // Espaço preparado para prints reais (WhatsApp/Instagram)
                    <img
                      src={t.image}
                      alt="Mensagem de professora"
                      loading="lazy"
                      className="mt-4 w-full rounded-2xl"
                    />
                  ) : (
                    <>
                      <Quote
                        className="mt-4 h-6 w-6 text-primary/50"
                        aria-hidden="true"
                      />
                      <p className="mt-3 flex-1 text-sm leading-relaxed sm:text-base">
                        “{t.text}”
                      </p>
                      <p className="mt-5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                        {t.role}
                      </p>
                    </>
                  )}
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Os textos acima são exemplos ilustrativos do tipo de experiência que
          buscamos proporcionar e não representam avaliações de clientes.
        </p>
      </div>
    </section>
  );
}
