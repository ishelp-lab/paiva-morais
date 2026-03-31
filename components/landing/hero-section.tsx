"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, CheckCircle2, Sparkles, PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="Mulher usando semijoias Paiva Morais"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
          {/* Coluna esquerda */}
          <div className="text-center md:text-left">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Oportunidade exclusiva
            </span>

            <h1
              className="bg-clip-text font-serif text-3xl font-bold leading-tight tracking-tight text-balance text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ backgroundImage: "url('/images/jewerly-text.jpg')" }}
            >
              Ganhe dinheiro revendendo semijoias de alta qualidade
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-card/85 sm:text-lg md:mx-0 md:text-xl">
              Comece sem investir nada. Receba as peças em consignação e pague
              apenas pelo que vender. Uma forma simples, segura e elegante de
              começar a revender com apoio da Paiva Morais.
            </p>

            {/* VSL mobile */}
            <div className="mt-8 md:hidden">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[1/1] w-full">
                  <video
                    className="h-full w-full object-cover"
                    src="/videos/vsl-mobile.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/vsl-poster-mobile.jpg"
                  />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:items-start md:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
              >
                <a href="#cadastro">Quero ser revendedora</a>
              </Button>
            </div>

            <p className="mt-4 text-sm text-card/70">
              Cadastro rápido e sem compromisso.
            </p>
          </div>

          {/* Coluna direita - VSL desktop */}
          <div id="video" className="relative hidden md:flex justify-center">
            <div className="w-[92%] overflow-hidden rounded-[32px] border border-white/10 bg-black/30 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[1/1] w-full">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/vsl-desktop.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/vsl-poster.jpg"
                />
              </div>
            </div>

            {/* Card flutuante */}
            <div className="absolute -bottom-6 -left-2 max-w-xs rounded-2xl border border-white/10 bg-background/90 p-4 shadow-xl backdrop-blur md:left-0">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Assista à apresentação
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Entenda como funciona a revenda e veja por que essa
                    oportunidade é <b>para você</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#como-funciona" aria-label="Ir para a próxima seção">
          <ArrowDown className="h-6 w-6 text-card/60" />
        </a>
      </div>
    </section>
  )
}