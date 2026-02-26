import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ana Paula S.",
    location: "Belo Horizonte, MG",
    text: "Comecei sem saber nada de vendas e hoje ja ganho mais de R$ 2.000 por mes! As pecas sao lindas e se vendem sozinhas.",
    stars: 5,
  },
  {
    name: "Mariana O.",
    location: "Sao Paulo, SP",
    text: "O melhor e que nao precisei investir nada. Recebi as pecas, comecei a mostrar para as amigas e as vendas aconteceram naturalmente.",
    stars: 5,
  },
  {
    name: "Carla F.",
    location: "Rio de Janeiro, RJ",
    text: "O suporte da Paiva Morais e incrivel. Sempre me ajudam com dicas de venda e materiais prontos. Me sinto valorizada!",
    stars: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Mulheres reais que mudaram suas vidas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Veja o que nossas revendedoras dizem sobre a experiencia com a
            Paiva Morais.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-base leading-relaxed text-foreground mb-6">
                {`"${t.text}"`}
              </blockquote>

              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
