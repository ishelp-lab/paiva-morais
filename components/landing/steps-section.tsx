import { ClipboardList, Package, Store, Banknote } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Cadastre-se",
    description:
      "Preencha o formulario abaixo com seus dados. E rapido e sem compromisso.",
  },
  {
    number: "02",
    icon: Package,
    title: "Receba seu kit",
    description:
      "Retire ou receba em casa seu kit de semijoias Paiva Morais para comecar a vender.",
  },
  {
    number: "03",
    icon: Store,
    title: "Comece a vender",
    description:
      "Venda para amigas, vizinhas, colegas ou pelas redes sociais. Voce escolhe como!",
  },
  {
    number: "04",
    icon: Banknote,
    title: "Lucre",
    description:
      "Pague apenas pelo que vendeu e fique com todo o lucro. Simples e sem burocracia.",
  },
]

export function StepsSection() {
  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Passo a passo
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Comece a ganhar dinheiro em 4 passos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            O processo e simples, rapido e sem burocracia. Veja como funciona:
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number */}
              <span className="mb-6 font-serif text-6xl font-bold text-primary/20">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <step.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
