import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useScrollAnimation from "@/hooks/useScrollAnimation";

import imgLeitura from "@/assets/parceiro-leitura.png";
import imgPrefeituraRJ from "@/assets/parceiro-prefeitura-rj.png";
import imgOiFuturo from "@/assets/parceiro-oi-futuro.png";
import imgHeineken from "@/assets/parceiro-heineken.png";
import imgSBT from "@/assets/parceiro-sbt.png";
import imgHardRock from "@/assets/parceiro-hard-rock.png";
import imgTeatro from "@/assets/parceiro-teatro-falabella.png";
import imgYes from "@/assets/parceiro-yes-idiomas.png";
import imgMinisterio from "@/assets/parceiro-ministerio-cultura.png";

const parceiros = [
  { image: imgLeitura, alt: "Livraria Leitura" },
  { image: imgPrefeituraRJ, alt: "Prefeitura do Rio - Cultura" },
  { image: imgOiFuturo, alt: "Oi Futuro" },
  { image: imgHeineken, alt: "Heineken" },
  { image: imgSBT, alt: "SBT" },
  { image: imgHardRock, alt: "Hard Rock Cafe" },
  { image: imgTeatro, alt: "Teatro Miguel Falabella - NorteShopping" },
  { image: imgYes, alt: "Yes! Idiomas" },
  { image: imgMinisterio, alt: "Ministério da Cultura - Governo Federal" },
];

const ClientesCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-primary-foreground py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-navy text-center mb-10">
          ALGUNS CLIENTES E PARCEIROS DA ARTICULE NESSES 29 ANOS
        </h3>

        <div className="max-w-5xl mx-auto px-12">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {parceiros.map((parceiro, index) => (
                <CarouselItem key={index} className="basis-1/3 flex items-center justify-center p-4">
                  <div className="flex items-center justify-center h-32 md:h-40">
                    <img src={parceiro.image} alt={parceiro.alt} className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-navy text-navy" />
            <CarouselNext className="border-navy text-navy" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientesCarousel;
