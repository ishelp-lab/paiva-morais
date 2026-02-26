import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="py-24 md:py-32 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          Pronta para comecar a lucrar?
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-accent-foreground/70 max-w-2xl mx-auto">
          Junte-se a centenas de mulheres que ja transformaram suas vidas
          revendendo semijoias Paiva Morais. O proximo passo e seu.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-lg font-semibold"
        >
          <a href="#cadastro">
            Quero ser revendedora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  )
}
