import { Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold text-foreground">
              Paiva Morais
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Semijoias de alta qualidade
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/paivamoraissemijoias/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram Paiva Morais"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden sm:inline">@paivamoraissemijoias</span>
            </a>
            <a
              href="https://www.paivamoraissemijoias.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Loja Online
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${currentYear} Paiva Morais Semijoias. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
