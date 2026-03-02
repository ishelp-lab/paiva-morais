"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-jewelry.jpg"
          alt="Mulher usando semijoias Paiva Morais"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:py-40 w-full">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
  {/* COLUNA ESQUERDA (texto) */}
  <div>
    <span className="inline-block mb-6 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
      Oportunidade exclusiva
    </span>

    <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-card sm:text-5xl md:text-6xl lg:text-7xl text-balance">
      Ganhe dinheiro revendendo semijoias de alta qualidade
    </h1>

    {/* VÍDEO MOBILE (aparece só no mobile) */}
    <div className="mt-8 md:hidden">
      <div className="overflow-hidden rounded-2xl border border-card/15 bg-black/30 shadow-lg">
        <div className="aspect-[9/16] w-full">
          <video
            className="h-full w-full object-cover"
            src="/videos/vsl-mobile.mp4"
            controls
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </div>

    <p className="mt-6 text-lg leading-relaxed text-card/80 md:text-xl max-w-lg">
      Comece sem investir nada. Receba as pecas em consignacao e pague
      apenas pelo que vender. Simples assim.
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold"
      >
        <a href="#cadastro">Quero ser revendedora</a>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-full px-8 py-6 text-base font-semibold border-card/30 text-card bg-transparent hover:bg-card/10 hover:text-card"
      >
        <a href="#como-funciona">Como funciona</a>
      </Button>
    </div>
  </div>

  {/* COLUNA DIREITA (vídeo desktop) */}
  <div className="hidden md:block">
    <div className="overflow-hidden rounded-2xl border border-card/15 bg-black/30 shadow-lg">
      <div className="aspect-video w-full">
        <video
          className="h-full w-full object-cover"
          src="/videos/vsl-desktop.mp4"
          controls
          playsInline
          preload="metadata"
          poster="/images/vsl-poster.jpg"
          muted
        />
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#beneficios" aria-label="Rolar para baixo">
          <ArrowDown className="h-6 w-6 text-card/60" />
        </a>
      </div>
    </section>
  )
}
