"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useEffect, useState } from "react"

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

const proof1Images = [
  "/images/vertical1.jpg",
  "/images/vertical2.jpg",
  "/images/vertical3.jpg",
]

const proof2Images = [
  "/images/proof-2.jpg",
  "/images/horizontal.jpg",
  "/images/horizontal2.jpg",
]

const proof3Images = [
  "/images/proof-3.jpg",
  "/images/paivamorais3.jpeg",
  "/images/paivamorais4.jpeg",
  "/images/paivamorais5.jpeg",
]

type DominoRotatingImageProps = {
  images: string[]
  alt: string
  aspectClass: string
  delay?: number
}

function DominoRotatingImage({
  images,
  alt,
  aspectClass,
  delay = 0,
}: DominoRotatingImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [previousIndex, setPreviousIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setPreviousIndex(currentIndex => currentIndex)
        setCurrentIndex(currentIndex => (currentIndex + 1) % images.length)
        setIsAnimating(true)

        setTimeout(() => {
          setIsAnimating(false)
          setPreviousIndex(null)
        }, 700)
      }, 5000)

      ;(window as any)[`__domino_interval_${alt}`] = interval
    }, delay)

    return () => {
      clearTimeout(startTimeout)
      const savedInterval = (window as any)[`__domino_interval_${alt}`]
      if (savedInterval) clearInterval(savedInterval)
    }
  }, [images.length, delay, alt])

  return (
    <div className={`relative w-full overflow-hidden ${aspectClass}`}>
      {previousIndex !== null && (
        <div
          className={`absolute inset-0 z-10 transition-transform duration-700 ease-in-out ${
            isAnimating ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <Image
            src={images[previousIndex]}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div
        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
          isAnimating ? "translate-x-0" : previousIndex !== null ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export function ProofAndCTASection() {
  return (
    <section id="cadastro" className="relative bg-muted py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 -top-10 h-80 w-80 animate-pulse rounded-full bg-primary/15 blur-[100px]" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 right-0 h-96 w-96 animate-pulse rounded-full bg-primary/15 blur-[100px]" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Uma oportunidade bonita de apresentar e simples de começar
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Veja a apresentação das peças, entenda o valor percebido do produto
            e deixe seu cadastro para falar com nossa equipe.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* coluna esquerda */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[28px] border border-border/60 bg-card shadow-sm sm:row-span-2">
                <DominoRotatingImage
                  images={proof1Images}
                  alt="Semijoias Paiva Morais em destaque"
                  aspectClass="aspect-[3/5]"
                  delay={0}
                />
              </div>

              <div className="overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-sm">
                <DominoRotatingImage
                  images={proof2Images}
                  alt="Detalhes das peças Paiva Morais"
                  aspectClass="aspect-[5/4]"
                  delay={800}
                />
              </div>

              <div className="overflow-hidden rounded-[24px] border border-border/60 bg-card shadow-sm">
                <DominoRotatingImage
                  images={proof3Images}
                  alt="Apresentação das semijoias Paiva Morais"
                  aspectClass="aspect-[5/4]"
                  delay={1600}
                />
              </div>
            </div>

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
            <div className="h-fit rounded-[32px] border border-border/60 bg-background/95 p-7 shadow-xl backdrop-blur lg:sticky lg:top-24">
              <h3 className="text-2xl font-semibold text-foreground">
                Faça seu cadastro
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Preencha seus dados e nossa equipe entra em contato para te
                explicar como funciona, tirar dúvidas e orientar os próximos
                passos.
              </p>

              <div className="mt-8 flex justify-center">
                <Button
                  asChild
                  className="w-full rounded-full py-6 text-base font-semibold"
                >
                  <a href="#cadastro">Quero começar agora</a>
                </Button>
              </div>

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