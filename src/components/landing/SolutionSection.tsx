import tioBeto from "@/assets/tio-beto.png";

export function SolutionSection() {
  return (
    <section className="bg-sky/40 py-14 sm:py-20">
      <div className="section-shell">
        <h2 className="text-2xl font-extrabold leading-tight sm:text-4xl">
          Uma trilha para desenvolver a leitura passo a passo
        </h2>

        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
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
          <img
            src={tioBeto}
            alt="Mascote Tio Beto segurando um livro"
            loading="lazy"
            width={768}
            height={768}
            className="mx-auto w-32 shrink-0 sm:w-44"
          />
        </div>
      </div>
    </section>
  );
}
