import logoArticule from "@/assets/logo-articule.png";
import imgExpodance from "@/assets/realizacao-expodance.png";
import imgFabricaCultural from "@/assets/realizacao-fabrica-cultural.png";
import imgRockBrasil from "@/assets/realizacao-rock-brasil.png";
import imgTeatro from "@/assets/realizacao-teatro.png";
import imgIncluaSe from "@/assets/realizacao-inclua-se.png";
import imgPublicacoes from "@/assets/realizacao-publicacoes.png";
import imgShows from "@/assets/realizacao-shows.png";
import imgBrasilie from "@/assets/realizacao-brasilie.png";
import imgPoemasAmor from "@/assets/realizacao-poemas-amor.png";
import imgHistoriasFantasticas from "@/assets/realizacao-historias-fantasticas.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const realizacoes = [
  { image: imgExpodance, alt: "Expodance", text: "Festival de Dança realizado há 29 anos, com programação formada por: mostra não competitiva; ações educativas; seminário com nomes expressivos da dança, como: Carlinhos de Jesus e Deborah Colker; intervenções artísticas em espaços públicos. A Expodance já foi patrocinada pela Prefeitura da Cidade do Rio de Janeiro. Nesses 29 anos foi realizada em 5 cidades, 26 bairros e 22 palcos no estado do RJ." },
  { image: imgFabricaCultural, alt: "Fábrica Cultural", text: "Programa social de capacitação de jovens para o mercado cultural realizado há 27 anos (desde 1999) em parceria com a Universidade Castelo Branco, Areninha Carioca Hermeto Pascoal e o Colégio João Paulo I. Em 2001 fomos contemplados no programa Capacitação Solidária, da ONG Comunidade Solidária, presidida pela saudosa ex-primeira dama do Brasil, Srª Ruth Cardoso. Nosso programa já foi patrocinado e reconhecido como Ação Local de grande importância pela Prefeitura da Cidade do Rio de Janeiro." },
  { image: imgRockBrasil, alt: "Coletânea Rock Brasil", text: "Festival realizado de forma itinerante envolvendo bandas de todas as regiões do Brasil (Sudeste, Sul, Centro-Oeste, Norte e Nordeste). Reunimos mais de 3 mil bandas, em shows ao vivo, por palcos no Rio de Janeiro, São Paulo, Minas Gerais, Espírito Santo, Brasília, Santa Catarina e Ceará. Foram 10 anos de festival, onde as bandas vencedoras de cada região se reuniam no palco do Hard Rock Cafe (RJ) para a gravação do CD Coletânea, em cada ano do festival." },
  { image: imgTeatro, alt: "Cia. Articule de Teatro", text: "A Cia. Articule de Teatro estreou em 1999. São 27 anos realizando montagens especializadas para a infância e juventude. Circulações em teatros, apresentações em escolas e diversas reportagens em jornais de grande circulação e programas de TV. Duas de nossas montagens contaram com a parceria do SBT. Temos como principais espetáculos: 'Corram que o bebê vem aí' (1999); 'A Bela e a Fera' (2002); 'Jonas e o grande peixe' (2005); 'Nas asas de um Sonhador' (2012); 'A Rede' (2012); 'O circo dos baús escondidos' (2015) e 'Led Eduardo em: o Fazedor de Sonhos' (2023)." },
  { image: imgIncluaSe, alt: "Inclua-se", text: "Produzimos e circulamos com o espetáculo de dança 'INCLUA-SE' em 2024 e 2025. O projeto foi contemplado no edital Pró-Carioca, programa de fomento à cultura carioca, da Prefeitura da Cidade do Rio de Janeiro, através da Secretaria Municipal de Cultura. Coproduzido pela Cia. de Dança Inclusiva Stefânio Vieira e realizado pela Articule Produções, o espetáculo contou com o apoio da Oi Futuro, Centro Coreográfico do Rio e Studio de Dança Gabriela Souza, e com o patrocínio da Prefeitura do Rio, Lei Paulo Gustavo, Ministério da Cultura e Governo Federal BRASIL." },
  { image: imgPublicacoes, alt: "Publicações Literárias", text: "Como Editora, realizamos todas as etapas de produção (copidesque, revisão, ilustração, diagramação, registros, arte final, produção gráfica e impressão) de livros como: 'Led Eduardo em: o Fazedor de Sonhos', de Anderson Rocha, 'A abelhinha Zabeia' de Marcia Brito e 'Jamais serás quem tu não és' de Marcio Libar. Organizamos o lançamento em Livrarias e em eventos literários como a BIENAL DO LIVRO RIO e BIENAL DO LIVRO SÃO PAULO." },
  { image: imgShows, alt: "Shows", text: "Produzimos shows de atrações, como: Jorge Vercillo (2011); Detonautas (2011 e 2015); Uns e Outros (2011 e 2015); Picassos Falsos (2015); e diversos outros. Realizamos os projetos: 'Castelo Canta às Quintas'; 'Intervalo Pró-Rock'; 'Lapa'quelas bandas'; 'Mistura Samba' e 'Matinê do Rock'. Circulamos por centenas de casas de shows, como: The Ballroom (Humaitá), Mistura Fina (Lagoa), Hard Rock Café (Barra da Tijuca), Café Etílico (Recreio), Lugar Comum (Botafogo), entre outras." },
  { image: imgBrasilie, alt: "Brasiliê", text: "Reunimos escritores de 23 estados, além do Distrito Federal, de 119 cidades brasileiras, distribuídas por todas as regiões do país: Norte, Nordeste, Centro-Oeste, Sul e Sudeste. Ainda contamos com autores brasileiros que atualmente vivem em outros países, como: Itália, Alemanha e Estados Unidos. O Prêmio BRASILIÊ - Coletânea Nacional de Literatura apresenta a diversidade de nossa gente e o imenso potencial dos autores brasileiros. O Lançamento foi realizado em junho na BIENAL DO LIVRO RIO 2025." },
  { image: imgPoemasAmor, alt: "Poemas de Amor para Curar o Mundo", text: "Em 2025, no Brasil, foi feito um chamado para poetas: juntos, através da poesia, podemos contribuir para a cura do mundo. A resposta é esta antologia com 274 poemas de autores de todo o país. É uma fonte de inspiração para transformar e promover mudanças reais. Para curar o mundo, é necessário começar pela nossa própria cura. A sensibilidade dos poetas revela olhares capazes de nos apontar caminhos, despertar motivos e inspirar atos de coragem para seguirmos com mais vontade, clareza e potência rumo ao nosso melhor. Em cada processo de cura, um mar de possibilidades se abre. O Lançamento foi realizado em junho na BIENAL DO LIVRO RIO 2025." },
  { image: imgHistoriasFantasticas, alt: "O Livro Mágico das Histórias Fantásticas", text: "A literatura fantástica é um convite para atravessar portais invisíveis e habitar mundos que desafiam as leis da realidade. Nesse gênero, a imaginação reina soberana, criando universos onde criaturas míticas coexistem com humanos, e a magia é tão natural quanto o ar que respiramos. Desde os épicos antigos até os best-sellers contemporâneos, a fantasia encanta leitores ao oferecer mitologias próprias, sociedades desconhecidas e jornadas heroicas que falam sobre coragem, destino e transformação. O Lançamento foi realizado em junho na BIENAL DO LIVRO RIO 2025." },
];

const RealizacaoItem = ({ item, index }: { item: typeof realizacoes[0]; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isItemVisible, setIsItemVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsItemVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex flex-col md:flex-row gap-6 items-start transition-all duration-700 ${isItemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-full md:w-72 lg:w-80">
        <img src={item.image} alt={item.alt} className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="flex-1">
        <p className="text-primary-foreground text-lg leading-relaxed opacity-90" style={{ textAlign: 'justify', hyphens: 'auto' }}>
          {item.text}
        </p>
      </div>
    </div>
  );
};

const QuemSomos = () => {
  const { ref, isVisible } = useScrollAnimation(0.02);

  return (
    <section className="bg-navy py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-8">
          <h2 className="font-heading text-4xl md:text-5xl font-black text-primary-foreground">
            QUEM SOMOS
          </h2>
          <img src={logoArticule} alt="Logo Editora Articule" className="w-48 md:w-64 lg:w-72" />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/XXOpnnwbmMo"
              title="Quem Somos - Editora Articule"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="text-primary-foreground text-lg leading-relaxed max-w-4xl mx-auto space-y-6" style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            Em 2026 a Articule completa 29 anos. Responsável pela criação e produção de Projetos Culturais de diversos segmentos, como: Dança, Teatro, Música e Literatura, em diversos formatos: Festivais, Congressos, Seminários, Shows, Publicações Literárias, Ações Educativas e Sociais. Em 2025, a Editora Articule participou como expositora da BIENAL DO LIVRO RIO 2025, recebendo em seu estande, autores de todas as regiões do Brasil, no lançamento das antologias: 'Brasiliê - Coletânea Nacional de Literatura'; 'Poemas de amor para curar o mundo' e 'O livro mágico das histórias fantásticas'.
          </p>

          <h4 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-yellow text-center mt-28 mb-24 pt-12">
            PRINCIPAIS REALIZAÇÕES NESSES 29 ANOS DA ARTICULE<br /><br />
          </h4>

          <div className="space-y-10 mt-32">
            {realizacoes.map((item, index) => (
              <RealizacaoItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuemSomos;
