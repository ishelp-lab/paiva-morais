"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Star } from "lucide-react"

const proofItems = [
  "Peças com visual sofisticado e ótima aceitação",
  "Modelo simples para começar com mais segurança",
  "Atendimento próximo para orientar os próximos passos",
]

const testimonials = [
  {
    name: "Mariana",
    text: "Gostei porque é uma forma mais leve de começar. As peças são lindas e fáceis de apresentar para as clientes.",
  },
  {
    name: "Juliana",
    text: "O que mais me chamou atenção foi conseguir começar sem precisar investir alto logo no início.",
  },
]

export function ProofAndCTASection() {
  return (
    <section
      id="cadastro"
      className="relative overflow-hidden bg-muted py-20 md:py-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* topo */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Uma oportunidade bonita de apresentar e simples de começar
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-background md:text-lg">
            Veja a apresentação das peças, entenda o valor percebido do produto
            e deixe seu cadastro para falar com nossa equipe.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* coluna esquerda */}
          <div>
            {/* galeria */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-sm sm:row-span-2">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/images/proof-1.jpg"
                    alt="Semijoias Paiva Morais em destaque"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/proof-2.jpg"
                    alt="Detalhes das peças Paiva Morais"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/proof-3.jpg"
                    alt="Apresentação das semijoias Paiva Morais"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* depoimentos curtos */}
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-border/60 bg-background p-5 shadow-sm"
                >
                  <div className="mb-3 flex gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    “{item.text}”
                  </p>

                  <p className="mt-4 text-sm font-semibold text-foreground">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* coluna direita */}
          <div className="lg:pl-4">
            <div className="sticky top-24 rounded-[32px] border border-border/60 bg-background/95 p-7 shadow-xl backdrop-blur">
              <h3 className="text-2xl font-semibold text-foreground">
                Faça seu cadastro
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Preencha seus dados e nossa equipe entra em contato para te
                explicar como funciona, tirar dúvidas e orientar os próximos
                passos.
              </p>

              <form className="mt-7 space-y-4">
                <div>
                  <label
                    htmlFor="nome"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Seu nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    placeholder="Digite seu nome"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cidade"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Cidade / Estado
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    placeholder="Digite sua cidade"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full py-6 text-base font-semibold"
                >
                  Quero começar agora
                </Button>
              </form>

              <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/8 p-4">
                <p className="text-sm leading-relaxed text-foreground/90">
                  Cadastro rápido, sem compromisso e com atendimento humanizado.
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Seus dados são usados apenas para contato sobre a oportunidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}