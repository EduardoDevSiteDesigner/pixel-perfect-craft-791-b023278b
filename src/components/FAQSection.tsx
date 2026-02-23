import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const faqItems = [
  {
    question: "TODOS OS AUTORES PARTICIPANTES DA ANTOLOGIA TERÃO PERÍODO PARA AUTÓGRAFOS NA BIENAL DO LIVRO SÃO PAULO 2026?",
    answer: (
      <div className="space-y-4">
        <p>Sim. Todos os autores dos textos selecionados, que enviarem corretamente preenchida e assinada a CARTA DE ADESÃO e realizarem o pagamento do Kit de publicação de sua escolha:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>terão seus textos publicados no livro POEMAS DE AMOR PARA CURAR O MUNDO – volume 2 - 2026;</li>
          <li>participarão como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SP 2026;</li>
          <li>estarão automaticamente concorrendo à PREMIAÇÃO.</li>
        </ul>
        <p>Todos os autores participantes receberão credenciais de autor para entrada na Bienal do Livro SP 2026.</p>
        <p>Será de inteira responsabilidade dos autores, transporte de seu local de origem ao Lançamento do livro 'POEMAS DE AMOR PARA CURAR O MUNDO' volume 2 na BIENAL DO LIVRO SÃO PAULO 2026; e de seu retorno, assim como de hospedagem, caso se faça necessária.</p>
      </div>
    )
  },
  {
    question: "A CHANCE DE PUBLICAR SEU PRÓPRIO LIVRO (PREMIAÇÃO)",
    answer: (
      <div className="space-y-4">
        <p>Todos os autores estarão automaticamente concorrendo à PREMIAÇÃO, que inclui a Publicação de um livro completo do(a) autor(a) vencedor(a) pela Editora Articule. Esta obra terá versão impressa (100 exemplares) e deverá ter no máximo: 100 páginas. A Editora Articule será responsável por:</p>
        <ul className="list-disc pl-10 space-y-2">
          <li>edição de texto (copidesque);</li>
          <li>diagramação (projeto gráfico);</li>
          <li>revisão final;</li>
          <li>registro ISBN e ficha catalográfica;</li>
          <li>produção gráfica;</li>
          <li>impressão;</li>
          <li>organização da cerimônia de lançamento do livro.</li>
        </ul>
      </div>
    )
  },
  {
    question: "QUAL O TEMA DA ANTOLOGIA?",
    answer: (
      <div className="space-y-4">
        <p>O tema é AMOR e serão aceitos textos inéditos no gênero: POEMA.</p>
        <p className="italic">'Um POEMA DE AMOR não fala apenas de romance, mas também de empatia, compaixão, ternura e esperança. Esses elementos, quando semeados no coração das pessoas, podem gerar mudanças significativas na forma como nos relacionamos uns com os outros e com o mundo ao nosso redor.'</p>
      </div>
    )
  },
  {
    question: "CIRCULAÇÃO DO LIVRO POR TODO O BRASIL (DIVULGAÇÃO)",
    answer: (
      <p>Reunimos poetas de todas as regiões do país: Norte, Nordeste, Centro-Oeste, Sudeste e Sul. Um livro que automaticamente circula e é distribuído por todo o Brasil.</p>
    )
  },
  {
    question: "QUEM PODE PARTICIPAR?",
    answer: (
      <div className="space-y-4">
        <p>Podem participar, dessa antologia, autores de qualquer nacionalidade residentes no Brasil e brasileiros residentes no exterior, que tenham idade mínima de 16 anos, completos a partir da data de inscrição.</p>
        <p>Menores de 18 anos deverão enviar a autorização de responsável legal para a organização. O modelo de autorização pode ser solicitado pelo whatsApp (21) 99472-8748.</p>
      </div>
    )
  },
  {
    question: "É POSSÍVEL INSCREVER TEXTOS DE MAIS DE UM AUTOR(A)?",
    answer: (
      <p>Não. Cada inscrição deverá ser feita, obrigatoriamente, por um único autor. Não será aceita coautoria.</p>
    )
  },
  {
    question: "QUANTOS TEXTOS CADA AUTOR PODE INSCREVER?",
    answer: (
      <p>Os autores podem inscrever até 05 (cinco) poemas. Nesse caso, devem realizar uma inscrição para cada um dos textos.</p>
    )
  },
  {
    question: "A INSCRIÇÃO É GRATUITA? QUAL O PRAZO DE INSCRIÇÃO?",
    answer: (
      <div className="space-y-4">
        <p>As inscrições são GRATUITAS e podem ser feitas até 27 DE MARÇO DE 2026, mediante preenchimento de formulário e envio do texto. O formulário pode ser encontrado no site:</p>
        <p><a href="https://articule.art.br/poemasdeamor" className="text-accent underline" target="_blank" rel="noopener noreferrer">articule.art.br/poemasdeamor</a></p>
      </div>
    )
  },
  {
    question: "EXISTE ALGUM FORMATO E REGRA PARA O ENVIO DO TEXTO?",
    answer: (
      <div className="space-y-4">
        <p>Sim. Os textos devem ser escritos em língua portuguesa no seguinte formato:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>A extensão máxima dos textos é de 1 (uma) página com até 30 linhas;</li>
          <li>digitados em página tamanho A4;</li>
          <li>com margens de 3 cm;</li>
          <li>fonte Times New Roman tamanho 12;</li>
          <li>espaçamento entre as linhas é livre.</li>
        </ul>
        <p>Os arquivos devem ser anexados em formato WORD. O título do texto deve constar na parte superior da página, alinhado à esquerda.</p>
      </div>
    )
  },
  {
    question: "PAGAMENTO DO KIT DE PUBLICAÇÃO",
    answer: (
      <div className="space-y-4">
        <p>Ao ter seu texto aprovado, para que ele esteja confirmado na antologia, é necessário adquirir um kit. Ele ajuda no custeio da produção editorial (Revisão, diagramação, ficha catalográfica, registros, arte-final, produção gráfica e impressão) e garante ao autor, exemplares e brindes a preço de atacado, podendo ser revendido com lucro.</p>
        <p>Ao enviar seu(s) texto(s), o(a) autor(a) concorda que terá de arcar com o pagamento do KIT de sua escolha, caso seja selecionado.</p>
        <p className="italic">*O autor só pagará pelo kit após ter seu texto aprovado.</p>
        <p className="font-bold mt-4">VALOR DOS KITS PARA PUBLICAÇÃO APÓS TEXTO SER APROVADO:</p>
        <p>O(a) autor(a) poderá optar por um dos KITS:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>KIT BRONZE: R$ 297,00</strong> (ou 12 x 30,22 no cartão de crédito)<br />que inclui: 01 (um) texto a ser publicado no livro impresso + 02 (dois) livros impressos POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + 02 (dois) marcadores POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026 + Envio dos livros pelos Correios. Frete Grátis (Brasil) + Certificado de participação.</li>
          <li><strong>KIT PRATA: R$ 594,00</strong> (ou 12 x 60,44 no cartão de crédito)<br />que inclui: 01 (um) texto a ser publicado no livro impresso + 04 (quatro) livros impressos POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + 04 (quatro) marcadores POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026 + Envio dos livros pelos Correios. Frete Grátis (Brasil) + Certificado de participação + Fotografia profissional (03 fotos digitais) de sua participação como autor(a) no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026.</li>
          <li><strong>KIT OURO: R$ 891,00</strong> (ou 12 x 90,67 no cartão de crédito)<br />que inclui: 01 (um) texto a ser publicado no livro impresso + 06 (seis) livros impressos POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + 06 (seis) marcadores POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026 + Envio dos livros pelos Correios. Frete Grátis (Brasil) + Certificado de participação + Fotografia profissional (03 fotos digitais) de sua participação como autor(a) no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026.</li>
          <li><strong>KIT DIAMANTE: R$ 1.485,00</strong> (ou 12 x 151,11 no cartão de crédito)<br />que inclui: 01 (um) texto a ser publicado no livro impresso + 10 (dez) livros impressos POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + 10 (dez) marcadores POEMAS DE AMOR PARA CURAR O MUNDO (volume 2) + Participação como autor(a), com período para autógrafos no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026 + Envio dos livros pelos Correios. Frete Grátis (Brasil) + Certificado de participação + Fotografia profissional (03 fotos digitais) de sua participação como autor(a) no estande da Editora Articule na BIENAL DO LIVRO SÃO PAULO 2026 + Gravação do seu texto em áudio por locutor(a) profissional (em estúdio).</li>
        </ul>
      </div>
    )
  },
  {
    question: "VENDA E DIREITOS AUTORAIS",
    answer: (
      <div className="space-y-4">
        <p>A Editora envia a quantidade de exemplares adquiridos do livro impresso para cada autor selecionado, por isso cobramos o kit de publicação por texto, para a impressão e custos com os serviços de primeira edição como: revisão gramatical, capa profissional, diagramação e projeto gráfico profissional, registro na Câmara Brasileira do Livro, impressão, etc.</p>
        <p>Os direitos autorais permanecerão com o autor(a), que poderá usar seu texto livremente após a publicação. O autor concede à Editora Articule o direito de publicação do texto, somente no LIVRO: POEMAS DE AMOR PARA CURAR O MUNDO – volume 2 – 2026.</p>
        <p>Por se tratar de antologias com dezenas de participantes, não serão repassados royalties de vendas dos exemplares da edição que será comercializada pela Editora no site, livrarias e/ou feiras. No entanto, sempre trabalhamos com exemplares em preços de atacado para que os participantes possam comercializar e, dependendo da tiragem adquirida, obterem lucro com a revenda dos livros, além da recuperação do investimento inicial.</p>
      </div>
    )
  },
  {
    question: "CRONOGRAMA",
    answer: (
      <div className="space-y-2">
        <p>a. Período de Inscrições - 23 FEV A 27 MAR 2025</p>
        <p>b. Divulgação lista AUTORES que irão compor a antologia - 08 MAI 2026</p>
        <p>c. Divulgação lista de AUTORES FINALISTAS - 15 MAI 2026</p>
        <p>d. Divulgação lista de AUTORES VENCEDORES - 22 MAI 2026</p>
        <p>e. Agendamento Sessão Autógrafos na Bienal SP 2026 - 19 MAI A 12 JUN 2026</p>
        <p>f. Envio dos livros (kits de publicação) pelos CORREIOS - 06 JUL A 07 AGO 2026</p>
        <p>g. LANÇAMENTO NA BIENAL DO LIVRO SÃO PAULO 2026 - DE 04 A 13 SET 2026</p>
      </div>
    )
  },
  {
    question: "FRETE GRATUITO PARA TODO BRASIL",
    answer: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li>O FRETE FIXO GRATUITO já estará incluso para todo o BRASIL, e será entregue via Correios (via impresso módico) ou através da transportadora e empresa de logística atuante em todo território brasileiro.</li>
          <li>Uma segunda tentativa de envio, caso o pacote retorne à editora, será cotado e cobrado à parte.</li>
          <li>Caso o autor esteja morando fora do Brasil, faremos uma cotação individual para o envio.</li>
          <li>Caso o autor opte pela compra de mais unidades após o lançamento do livro, faremos uma cotação individual para o envio.</li>
        </ul>
      </div>
    )
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 md:py-16" style={{
      background: 'linear-gradient(135deg, hsl(220 60% 20%), hsl(230 55% 30%), hsl(220 50% 40%))'
    }}>
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-10 text-left">
          RESPOSTAS PARA<br />PERGUNTAS FREQUENTES
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-none rounded-md overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-4 text-navy font-heading font-bold text-sm md:text-base text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-navy text-base md:text-lg leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
