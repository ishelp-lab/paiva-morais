"use client"

import Image from "next/image"
import { CheckCircle2, Package, DollarSign, Sparkles, UserCheck } from "lucide-react"

const steps = [
  {
    icon: Package,
    title: "Receba as peças",
    description:
      "Você recebe as semijoias em consignação, sem precisar investir para começar.",
  },
  {
    icon: DollarSign,
    title: "Venda no seu ritmo",
    description:
      "Divulgue para amigas, clientes e redes sociais, com liberdade para vender no seu tempo.",
  },
  {
    icon: CheckCircle2,
    title: "Pague só o que vender",
    description:
      "Você paga apenas pelas peças vendidas e fica com sua margem de lucro.",
  },
]

const benefits = [
  "Sem investimento inicial",
  "Baixo risco para começar",
  "Peças de alta qualidade",
  "Suporte da marca",
]

const audienceItems = [
  "Quer começar sem investimento inicial",
  "Busca uma forma mais simples de gerar renda",
  "Quer trabalhar no próprio ritmo",
  "Procura uma oportunidade com baixo risco",
  "Valoriza produtos com boa aceitação e qualidade",
  "Quer vender com apoio e orientação da marca",
]

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="relative bg-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* topo */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Como funciona
          </span>

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Uma forma simples de começar a revender com segurança
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Tudo foi pensado para facilitar sua entrada: você recebe as peças,
            vende no seu ritmo e paga apenas pelo que realmente vender.
          </p>
        </div>

        {/* bloco principal */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* imagem */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-border/60 bg-muted shadow-sm">
              <div className="relative aspect-[4/5] w-full md:aspect-[16/11] lg:aspect-[4/5]">
                <Image
                  src="/images/how-it-works-main.jpg"
                  alt="Mulher usando semijoias Paiva Morais"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* card flutuante */}
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border/60 bg-background/95 p-4 shadow-lg backdrop-blur md:left-8 md:right-auto md:max-w-xs">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Comece sem estoque próprio
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Um modelo mais leve para iniciar, com menos barreira e mais
                    segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* conteúdo */}
          <div className="lg:pl-6">
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.title}
                    className="group rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                            Etapa {index + 1}
                          </span>
                        </div>

                        <h3 className="mt-1 text-lg font-semibold text-foreground">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* bloco inferior */}
        <div className="mt-20 grid gap-6 lg:grid-cols-2">

          {/* para quem é */}
          <div className="relative overflow-hidden rounded-[28px] border border-border/60 bg-muted/40 p-7 shadow-sm">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2.5">
                  <UserCheck className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground">
                  Ideal para você que:
                </h3>
              </div>

              <ul className="mt-6 space-y-4">
                {audienceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/8 p-4">
                <p className="text-sm leading-relaxed text-foreground/90">
                  Mesmo sem experiência, você pode começar de forma mais segura,
                  com apoio e uma operação mais simples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}