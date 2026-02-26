import {
  DollarSign,
  ShieldCheck,
  Headphones,
  Clock,
  TrendingUp,
  Gift,
} from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Sem investimento inicial",
    description:
      "Receba as pecas em consignacao. Voce so paga pelo que vender.",
  },
  {
    icon: TrendingUp,
    title: "Lucro garantido",
    description:
      "Margem atrativa em todas as pecas. Revenda com precos competitivos e lucre muito.",
  },
  {
    icon: ShieldCheck,
    title: "Troca garantida",
    description:
      "Nao vendeu? Sem problema. Troque as pecas por outras sem nenhum custo adicional.",
  },
  {
    icon: Headphones,
    title: "Suporte completo",
    description:
      "Materiais de venda, fotos profissionais e atendimento via WhatsApp sempre que precisar.",
  },
  {
    icon: Clock,
    title: "Flexibilidade total",
    description:
      "Trabalhe no seu ritmo, de onde quiser. Seja de casa, no trabalho ou nas redes sociais.",
  },
  {
    icon: Gift,
    title: "Premiacoes exclusivas",
    description:
      "As melhores revendedoras ganham bonus, brindes e acesso antecipado a lancamentos.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Beneficios
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Por que revender Paiva Morais?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Tudo o que voce precisa para comecar a lucrar, sem complicacao e
            com total seguranca.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
