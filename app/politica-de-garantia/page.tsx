import Link from "next/link"

export const metadata = {
  title: "Política de Garantia | Paiva Morais Semijoias",
  description:
    "Política de Garantia da Paiva Morais Semijoias — saiba mais sobre as coberturas, prazos e cuidados com as suas peças.",
}

export default function PoliticaDeGarantia() {
  return (
    <main className="min-h-screen bg-background py-16 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          ← Voltar para o início
        </Link>

        <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
          Política de Garantia
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: abril de 2026
        </p>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">
          
          {/* Informações da garantia - Baseadas no padrão de semijoias */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              1. Prazos e Cobertura
            </h2>
            <p>
              Nossas semijoias possuem garantia contra <strong>defeitos de fabricação</strong> e <strong>problemas no banho</strong>. O prazo de validade da garantia começa a contar a partir da data da compra.
            </p>
            <p className="text-muted-foreground italic mt-2">
              6 meses.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              2. O que a garantia não cobre
            </h2>
            <p>
              A garantia não se aplica a danos decorrentes de mau uso, acidentes ou desgaste natural do produto. Não estão cobertos pela garantia:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Peças amassadas, riscadas ou quebradas por atrito ou queda;</li>
              <li>Rompimento de correntes ou pulseiras;</li>
              <li>Perda ou quebra de pedras por choque físico;</li>
              <li>Escurecimento ou oxidação devido ao contato com produtos químicos, cosméticos, água do mar ou piscina;</li>
              <li>Desgaste natural pelo uso contínuo.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              3. Cuidados essenciais com as suas peças
            </h2>
            <p>
              Para preservar a beleza e a integridade do banho da sua semijoia, recomendamos:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Evitar o uso durante atividades físicas, banho, praia ou piscina;</li>
              <li>Não aplicar perfumes, cremes, protetor solar ou produtos de limpeza diretamente sobre as peças (aguarde a pele secar antes de colocá-las);</li>
              <li>Limpar a semijoia após o uso com uma flanela macia e seca para remover suor e impurezas;</li>
              <li>Guardar as peças separadamente em locais secos e limpos, evitando a exposição à luz e umidade excessivas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              4. Como acionar a garantia
            </h2>
            <p>
              Caso a sua peça apresente algum defeito coberto pela garantia, entre em contato com nosso atendimento ao cliente apresentando o <strong>certificado de garantia</strong> e/ou o número do pedido, juntamente com fotos ou vídeos que demonstrem o problema.
            </p>
            <p className="mt-2">
              Nossa equipe fará uma avaliação e, constatado o defeito de fabricação ou problema no banho, providenciará o conserto ou a troca da peça (sujeito à disponibilidade em estoque).
            </p>
            <p className="mt-4">
              Canal de atendimento:{" "}
              <a
                href="mailto:paivamoraiscamilawanderson@gmail.com"
                className="text-primary underline"
              >
                paivamoraiscamilawanderson@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            © {new Date().getFullYear()} Paiva Morais Semijoias. Todos os
            direitos reservados.
          </Link>
        </div>
      </div>
    </main>
  )
}
