"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

export function SignupForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulating form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="cadastro" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Cadastre-se agora
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Comece hoje mesmo a transformar sua vida
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Preencha o formulario ao lado e nossa equipe entrara em contato
              pelo WhatsApp para te guiar em cada etapa. Sem compromisso, sem
              investimento.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              {[
                "100% consignado — sem risco",
                "Suporte completo pelo WhatsApp",
                "Comece a lucrar no mesmo dia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Cadastro realizado!
                </h3>
                <p className="text-base text-muted-foreground max-w-sm">
                  Obrigada pelo interesse! Nossa equipe entrara em contato pelo
                  WhatsApp em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="text-center mb-2">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    Quero ser revendedora
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Preencha seus dados e comece agora
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    className="rounded-xl border-border bg-background h-12 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                    WhatsApp com DDD *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    required
                    className="rounded-xl border-border bg-background h-12 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="city" className="text-sm font-medium text-foreground">
                    Cidade *
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Sua cidade"
                    required
                    className="rounded-xl border-border bg-background h-12 text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox id="consent" required className="mt-1" />
                  <Label
                    htmlFor="consent"
                    className="text-sm leading-relaxed text-muted-foreground cursor-pointer"
                  >
                    Concordo em fornecer meus dados para receber contato sobre a
                    oportunidade de revenda Paiva Morais.
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-14 text-base font-semibold"
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Quero comecar agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Seus dados estao protegidos. Nao compartilhamos suas
                  informacoes com terceiros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
