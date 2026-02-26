import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso investir algum dinheiro para comecar?",
    answer:
      "Nao! Voce recebe as pecas em consignacao e so paga pelo que vender. Nao precisa comprar nada antecipadamente.",
  },
  {
    question: "Como funciona a consignacao?",
    answer:
      "Voce recebe um kit de pecas para vender. Apos o periodo combinado, voce paga apenas pelas pecas vendidas e devolve as que nao vendeu. Sem custo nenhum.",
  },
  {
    question: "Quanto posso ganhar como revendedora?",
    answer:
      "O lucro depende do seu esforco e dedicacao. Nossas revendedoras ativas ganham entre R$ 1.000 e R$ 3.000 por mes, dependendo do volume de vendas.",
  },
  {
    question: "Preciso ter experiencia com vendas?",
    answer:
      "Nao precisa! Oferecemos treinamento completo, materiais de apoio e suporte via WhatsApp para te ajudar em cada passo.",
  },
  {
    question: "As pecas tem garantia?",
    answer:
      "Sim! Todas as nossas semijoias possuem garantia contra defeitos de fabricacao. Trabalhamos com materiais de alta qualidade para garantir a satisfacao das suas clientes.",
  },
  {
    question: "Posso revender pela internet?",
    answer:
      "Claro! Muitas revendedoras vendem pelo WhatsApp, Instagram e outras redes sociais. Fornecemos fotos profissionais e materiais prontos para facilitar suas vendas online.",
  },
  {
    question: "Para quais regioes voces atendem?",
    answer:
      "Atendemos revendedoras em todo o Brasil. A entrega do kit inicial e combinada conforme sua localizacao.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Perguntas frequentes
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            Ainda tem duvidas?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Encontre as respostas para as perguntas mais comuns sobre a revenda
            Paiva Morais.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
