import { Instagram, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Topo do footer */}
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
              href="https://www.instagram.com/paivamorais_semijoias/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Instagram Paiva Morais"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden sm:inline">@paivamorais_semijoias</span>
            </a>
            <a
              href="https://www.paivamoraissemijoias.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Loja Online Paiva Morais"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="hidden sm:inline">Loja Online</span>
            </a>
          </div>
        </div>

        {/* Informações jurídicas */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground/70 leading-relaxed">
            <strong className="text-muted-foreground">
              Paiva Morais Semi joias Ltda.
            </strong>{" "}
            | CNPJ: 18.411.261.0001-60 | Pátio Tiradentes | Av. Tiradentes, 108, Centro, Araguari/MG | CEP 38400-090
            <br />
            E-mail:{" "}
            <a
              href="mailto:paivamoraiscamilawanderson@gmail.com"
              className="underline underline-offset-2 hover:text-primary transition-colors"
            >
              paivamoraiscamilawanderson@gmail.com
            </a>
          </p>

          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <p className="text-xs text-muted-foreground/70 text-center">
              © {currentYear} Paiva Morais Semijoias. Todos os direitos
              reservados.
            </p>
            <span className="hidden sm:inline text-muted-foreground/40 text-xs">
              ·
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="/politica-de-privacidade"
                className="text-xs text-muted-foreground/70 underline underline-offset-2 hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="text-muted-foreground/40 text-xs">
                ·
              </span>
              <Link
                href="/politica-de-garantia"
                className="text-xs text-muted-foreground/70 underline underline-offset-2 hover:text-primary transition-colors"
              >
                Política de Garantia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
