import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ProductsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Qualidade Premium
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Pecas que encantam e se vendem sozinhas
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Semijoias com banho de ouro 18k, prata 925 e design exclusivo.
              Qualidade que suas clientes vao amar e que facilita suas vendas
              todos os dias.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {[
                "Banho de ouro 18k de alta durabilidade",
                "Prata 925 legitima com garantia",
                "Design exclusivo e tendencia",
                "Embalagens premium para presentear",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base text-foreground"
                >
                  <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold"
            >
              <a href="#cadastro">Quero revender essas pecas</a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl">
            <Image
              src="/images/jewelry-collection.jpg"
              alt="Colecao de semijoias Paiva Morais"
              width={640}
              height={480}
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
