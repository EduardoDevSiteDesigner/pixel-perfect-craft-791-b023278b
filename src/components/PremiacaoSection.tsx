import premiacaoPhoto1 from "@/assets/premiacao-photo1.jpg";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const PremiacaoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-12 md:py-16 overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(280 60% 25%), hsl(300 50% 35%), hsl(270 55% 45%), hsl(290 40% 55%))'
    }}>
      {/* Falling sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          const left = Math.random() * 100;
          const duration = 4 + Math.random() * 6;
          const delay = Math.random() * 8;
          const size = 1 + Math.random() * 2;
          return (
            <div
              key={i}
              className="absolute bg-yellow rounded-full"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0,
                animation: `falling ${duration}s ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      <div ref={ref} className={`container mx-auto px-4 relative z-10 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-5xl md:text-7xl font-black text-primary-foreground mb-8">PREMIAÇÃO</h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto mb-10">
          {/* Text block (Left) */}
          <div className="flex-1 text-primary-foreground text-left">
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              O AUTOR(A) VENCEDOR(A)
            </h3>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-yellow mb-6">
              GANHARÁ A PUBLICAÇÃO DE SEU LIVRO PELA ARTICULE
            </p>
            <p className="text-lg md:text-xl leading-relaxed opacity-90 text-justify" style={{ hyphens: 'auto' }}>
              Todos os autores participantes da antologia 'POEMAS DE AMOR PARA CURAR O MUNDO - volume 2' estarão automaticamente concorrendo a seguinte premiação: A Editora Articule publicará o livro do autor que conquistar o primeiro lugar entre os poemas da antologia. O livro será produzido no formato impresso e terá cerimônia de lançamento organizada pela editora Articule.
            </p>
          </div>

          {/* Image block (Right) */}
          <div className="flex-shrink-0 w-full md:w-[400px] lg:w-[450px]">
            <div className="border-4 border-primary-foreground rounded-lg overflow-hidden shadow-xl">
              <img src={premiacaoPhoto1} alt="Autor Vencedor" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* White box centered in section */}
        <div className="text-center">
          <p className="text-sm md:text-base text-navy/80 bg-primary-foreground/90 inline-block px-6 py-3 rounded-md mx-auto shadow-lg">
            AUTOR: ROCHA OLIVEIRA - Vencedor 1º Lugar Poemas de amor para curar o mundo - volume 1 | 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiacaoSection;
