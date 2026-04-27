import Link from "next/link"

export const metadata = {
  title: "Política de Privacidade | Paiva Morais Semijoias",
  description:
    "Política de Privacidade da Paiva Morais Semijoias — saiba como coletamos, usamos e protegemos seus dados pessoais.",
}

export default function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: abril de 2026
        </p>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-8 text-foreground/80 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              1. Quem somos
            </h2>
            <p>
              A <strong>Paiva Morais Semi Joias Ltda.</strong>, inscrita no CNPJ sob o nº <strong>18.411.261.0001-60</strong>, com sede na Av. Tiradentes, 108, Centro, Araguari/MG - 38440-170, é a controladora dos dados pessoais tratados por meio deste site e de suas lojas virtuais.
            </p>
            <p className="mt-2">
              Canal de contato para assuntos de privacidade:{" "}
              <a
                href="mailto:paivamoraiscamilawanderson@gmail.com"
                className="text-primary underline"
              >
                paivamoraiscamilawanderson@gmail.com
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              2. Quais dados coletamos
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Dados de identificação:</strong> nome, e-mail, telefone
                e endereço, fornecidos voluntariamente ao preencher formulários
                ou realizar compras.
              </li>
              <li>
                <strong>Dados de navegação:</strong> endereço IP, tipo de
                dispositivo, navegador, páginas visitadas e tempo de sessão,
                coletados automaticamente por cookies e tecnologias similares.
              </li>
              <li>
                <strong>Dados de preferências:</strong> seleções de filtros,
                itens salvos e histórico de pesquisa dentro da plataforma.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              3. Finalidade do tratamento
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processar pedidos e gerenciar relacionamento com clientes.</li>
              <li>
                Enviar comunicações comerciais e novidades (mediante
                consentimento).
              </li>
              <li>
                Melhorar a experiência de navegação e personalizar conteúdo.
              </li>
              <li>Cumprir obrigações legais e regulatórias.</li>
              <li>Prevenir fraudes e garantir a segurança da plataforma.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              4. Base legal (LGPD — Lei nº 13.709/2018)
            </h2>
            <p>
              Os tratamentos realizados estão fundados nas seguintes bases
              legais previstas na LGPD:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>
                <strong>Execução de contrato</strong> — art. 7º, V, para
                processar pedidos.
              </li>
              <li>
                <strong>Consentimento</strong> — art. 7º, I, para envio de
                marketing.
              </li>
              <li>
                <strong>Legítimo interesse</strong> — art. 7º, IX, para
                segurança e melhoria dos serviços.
              </li>
              <li>
                <strong>Cumprimento de obrigação legal</strong> — art. 7º, II,
                para fins fiscais e contábeis.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              5. Cookies
            </h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e,
              mediante seu consentimento, cookies analíticos e de marketing.
              Você pode gerenciar ou revogar seu consentimento a qualquer
              momento nas configurações do seu navegador.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              6. Compartilhamento de dados
            </h2>
            <p>
              Seus dados poderão ser compartilhados com parceiros
              estritamente necessários à prestação dos serviços, como
              plataformas de pagamento, serviços de entrega e ferramentas de
              análise, sempre sob contrato com cláusulas de confidencialidade
              e proteção de dados. Não vendemos dados pessoais a terceiros.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              7. Armazenamento e segurança
            </h2>
            <p>
              Os dados são armazenados em servidores localizados no Brasil
              e/ou em nuvem com certificação de segurança. Adotamos medidas
              técnicas e organizacionais para proteger suas informações contra
              acesso não autorizado, perda ou destruição.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              8. Seus direitos
            </h2>
            <p>
              Nos termos da LGPD, você tem direito a:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Confirmar a existência de tratamento dos seus dados.</li>
              <li>Acessar os dados que possuímos sobre você.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>
                Solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários.
              </li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>
                Solicitar a portabilidade dos dados a outro fornecedor.
              </li>
            </ul>
            <p className="mt-2">
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a
                href="mailto:paivamoraiscamilawanderson@gmail.com"
                className="text-primary underline"
              >
                paivamoraiscamilawanderson@gmail.com
              </a>
              .
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              9. Retenção de dados
            </h2>
            <p>
              Os dados pessoais são mantidos pelo tempo necessário para
              cumprir as finalidades para as quais foram coletados, respeitando
              os prazos legais e regulatórios aplicáveis (ex.: 5 anos para
              dados fiscais, conforme legislação tributária).
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              10. Alterações nesta política
            </h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente.
              Notificaremos alterações relevantes por meio de aviso no site ou
              por e-mail. O uso continuado do site após as alterações implica
              na aceitação da nova versão.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-foreground mb-3">
              11. Foro
            </h2>
            <p>
              Fica eleito o Foro da Comarca de <strong>Araguari/MG</strong>{" "}
              para dirimir eventuais controvérsias decorrentes desta Política,
              com renúncia de qualquer outro, por mais privilegiado que seja.
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
