import kitBronze from "@/assets/kit-bronze-new.png";
import kitPrata from "@/assets/kit-prata-new.png";
import kitOuro from "@/assets/kit-ouro-new.png";
import kitDiamante from "@/assets/kit-diamante-new.png";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const KitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const kits = [kitBronze, kitPrata, kitOuro, kitDiamante];

  return (
    <section className="bg-primary-foreground py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 relative z-10 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-navy text-center mb-4">
          KITS DE PUBLICAÇÃO
        </h2>
        <p className="text-navy text-center mb-12 text-2xl md:text-3xl font-heading font-bold">
          SOMENTE PARA AUTORES SELECIONADOS
        </p>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <div key={index} className="w-full">
              <img
                src={kit}
                alt={`Kit de publicação ${index + 1}`}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitsSection;
