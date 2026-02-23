import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import useScrollAnimation from "@/hooks/useScrollAnimation";

import img1 from "@/assets/bienal-gallery-1.jpg";
import img2 from "@/assets/bienal-gallery-2.jpg";
import img3 from "@/assets/bienal-gallery-3.jpg";
import img4 from "@/assets/bienal-gallery-4.jpg";
import img5 from "@/assets/bienal-gallery-5.jpg";
import img6 from "@/assets/bienal-gallery-6.jpg";
import img7 from "@/assets/bienal-gallery-7.jpg";

import bot1 from "@/assets/bienal-bottom-1.jpg";
import bot2 from "@/assets/bienal-bottom-2.jpg";
import bot3 from "@/assets/bienal-bottom-3.jpg";
import bot4 from "@/assets/bienal-bottom-4.jpg";
import bot5 from "@/assets/bienal-bottom-5.jpg";
import bot6 from "@/assets/bienal-bottom-6.jpg";
import bot7 from "@/assets/bienal-bottom-7.jpg";

const galleryTop = [img1, img2, img3, img4, img5, img6, img7];
const galleryBottom = [bot1, bot2, bot3, bot4, bot5, bot6, bot7];

const BienalBanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-orange py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 text-center ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-10">
          TODOS OS AUTORES PARTICIPANTES<br />
          TERÃO HORÁRIO PARA AUTÓGRAFOS<br />
          NA BIENAL DE SÃO PAULO 2026.
        </h2>

        {/* Gallery */}
        <div className="space-y-6 mb-10">
          <div className="max-w-5xl mx-auto px-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {galleryTop.map((img, i) => (
                  <CarouselItem key={i} className="basis-1/2 md:basis-1/4 p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img src={img} alt={`Bienal Rio 2025 - ${i + 1}`} className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
              <CarouselNext className="border-primary-foreground text-primary-foreground" />
            </Carousel>
          </div>

          <div className="max-w-5xl mx-auto px-12">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {galleryBottom.map((img, i) => (
                  <CarouselItem key={i} className="basis-1/2 md:basis-1/4 p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img src={img} alt={`Bienal Rio 2025 - ${i + 8}`} className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
              <CarouselNext className="border-primary-foreground text-primary-foreground" />
            </Carousel>
          </div>

          <p className="text-sm text-navy/80 bg-primary-foreground/90 inline-block px-4 py-2 rounded-md mx-auto">
            Fotos dos autores "Poemas de Amor para Curar o Mundo" na Bienal do Livro Rio 2025
          </p>
        </div>

        <a
          href="#inscricao"
          className="inline-block bg-primary-foreground text-navy font-heading text-2xl md:text-4xl font-bold py-6 px-16 rounded-full hover:bg-primary-foreground/90 transition-colors shadow-lg"
          style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
        >
          GARANTIR MINHA VAGA NA BIENAL SÃO PAULO 2026
        </a>
      </div>
    </section>
  );
};

export default BienalBanner;
