const objections = [
  {
    question: "Sem investimento inicial?",
    answer:
      "Sim! Voce recebe as pecas em consignacao e so paga pelo que vender. Zero risco.",
  },
  {
    question: "Sem experiencia?",
    answer:
      "Nosso suporte ensina tudo que voce precisa saber. Oferecemos materiais e treinamento completo.",
  },
  {
    question: "Sem clientes?",
    answer:
      "Te ensinamos a vender pelo WhatsApp e Instagram. As pecas se vendem praticamente sozinhas!",
  },
  {
    question: "E se eu nao vender?",
    answer:
      "As pecas podem ser trocadas ou devolvidas sem nenhum custo. Voce nao perde nada.",
  },
]

export function ObjectionsSection() {
  return (
    <section className="py-24 md:py-32 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-balance">
            Suas duvidas, nossas respostas
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {objections.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-accent-foreground/10 bg-accent-foreground/5 p-8"
            >
              <h3 className="text-xl font-bold text-primary mb-3">
                {item.question}
              </h3>
              <p className="text-base leading-relaxed text-accent-foreground/80">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
