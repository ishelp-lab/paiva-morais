import Image from "next/image"
import { Check } from "lucide-react"

const audiences = [
  "Maes e donas de casa que querem ganhar dinheiro sem sair de casa",
  "Mulheres que ja trabalham, mas precisam de uma renda extra",
  "Pessoas sem experiencia que querem uma oportunidade facil de comecar",
  "Apaixonadas por moda e acessorios que amam produtos de qualidade",
]

export function AudienceSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/reseller-woman.jpg"
              alt="Revendedora Paiva Morais trabalhando de casa"
              width={640}
              height={480}
              className="w-full object-cover aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Para quem e
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
              Quem pode ser uma revendedora Paiva Morais?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Se voce se identifica com algum desses perfis, essa oportunidade
              foi feita para voce:
            </p>

            <ul className="mt-8 flex flex-col gap-5">
              {audiences.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
