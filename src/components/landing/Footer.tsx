import { BRAND, FOOTER_LINKS } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted pb-28 pt-12 sm:pb-12">
      <div className="section-shell">
        <p className="font-display text-lg font-extrabold text-primary">
          {BRAND.name}
        </p>

        <nav className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
          {FOOTER_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>

        <p className="mt-6 text-xs text-muted-foreground">
          © {BRAND.year} {BRAND.name}. Todos os direitos reservados.
        </p>
        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground/80">
          Os resultados de aprendizagem podem variar de acordo com o nível da
          criança, frequência de aplicação, acompanhamento e outros fatores
          pedagógicos.
        </p>
      </div>
    </footer>
  );
}
