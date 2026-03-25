import kitBronze from "@/assets/kit-bronze-new.png";
import kitPrata from "@/assets/kit-prata-new.png";
import kitOuro from "@/assets/kit-ouro-new.png";
import kitDiamante from "@/assets/kit-diamante-new.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const KitsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.02);

  const kits = [
    { src: kitBronze, name: "Bronze", color: "#CD7F32" },
    { src: kitPrata, name: "Prata", color: "#A0A0A0" },
    { src: kitOuro, name: "Ouro", color: "#DAA520" },
    { src: kitDiamante, name: "Diamante", color: "#4FC3F7" },
  ];

  return (
    <section className="bg-primary-foreground py-12 md:py-16 overflow-hidden">
      <div ref={ref} className={`container mx-auto px-0 md:px-4 relative z-10 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-navy text-center mb-4">
          KITS DE PUBLICAÇÃO
        </h2>
        <p className="text-navy text-center mb-12 text-2xl md:text-3xl font-heading font-bold">
          SOMENTE PARA AUTORES SELECIONADOS
        </p>

        {/* Mobile: column layout */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto md:hidden">
          {kits.map((kit, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              <img
                src={kit.src}
                alt={`Kit ${kit.name}`}
                className="w-full rounded-none"
              />
              <a
                href="#inscricao"
                style={{ backgroundColor: kit.color }}
                className="mt-3 inline-block text-white font-heading text-lg font-bold py-3 px-10 rounded-full hover:opacity-90 transition-opacity"
              >
                INSCREVA-SE AGORA
              </a>
            </div>
          ))}
        </div>

        {/* Desktop: 2x2 grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={kit.src}
                alt={`Kit ${kit.name}`}
                className="w-full rounded-lg"
              />
              <a
                href="#inscricao"
                style={{ backgroundColor: kit.color }}
                className="mt-4 inline-block text-white font-heading text-xl font-bold py-3 px-12 rounded-full hover:opacity-90 transition-opacity"
              >
                INSCREVA-SE AGORA
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitsSection;
