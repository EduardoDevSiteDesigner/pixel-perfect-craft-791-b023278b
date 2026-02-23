import mockupAbout from "@/assets/mockup-about.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section>
      <div ref={ref} className={`bg-sky py-12 md:py-16 relative ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 w-64 md:w-80 lg:w-96 md:-mt-40 relative z-10">
              <img
                src={mockupAbout}
                alt="Livro Poemas de Amor para Curar o Mundo - Volume II"
                className="w-full drop-shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <div className="text-navy text-xl md:text-2xl leading-relaxed space-y-6" style={{ textAlign: 'justify', hyphens: 'auto' }}>
                <p>
                  A antologia <strong>'POEMAS DE AMOR PARA CURAR O MUNDO'</strong> é um verdadeiro <strong>CHAMADO PARA POETAS.</strong>
                </p>
                <p>
                  O mundo, atravessado por conflitos, desigualdades e desencontros, parece estar em um estado constante de turbulência. A solução pode parecer inalcançável, mas talvez a resposta esteja naquilo que nos torna mais humanos: <strong>O AMOR.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
