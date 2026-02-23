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

const galleryTop = [
  { image: img1, alt: "Família no estande Articule na Bienal Rio 2025" },
  { image: img2, alt: "Autora com livro Poemas de Amor na Bienal Rio 2025" },
  { image: img3, alt: "Livro Poemas de Amor para Curar o Mundo" },
  { image: img4, alt: "Autoras com livro na Bienal Rio 2025" },
  { image: img5, alt: "Autoras na sessão de autógrafos Bienal Rio 2025" },
  { image: img6, alt: "Autoras com flores na Bienal Rio 2025" },
  { image: img7, alt: "Anderson Rocha na Bienal do Livro Rio 2025" },
];

const galleryBottom = [
  { image: bot1, alt: "Banner sessão de autógrafos Bienal Rio 2025" },
  { image: bot2, alt: "Autores no estande Articule Bienal Rio 2025" },
  { image: bot3, alt: "Autoras com livro Poemas de Amor Bienal Rio 2025" },
  { image: bot4, alt: "Anderson Rocha com autoras na Bienal Rio 2025" },
  { image: bot5, alt: "Grupo de autores na Bienal Rio 2025" },
  { image: bot6, alt: "Autores reunidos no estande Bienal Rio 2025" },
  { image: bot7, alt: "Autora com livro Poemas de Amor Bienal Rio 2025" },
];

const BienalGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-magenta py-12 md:py-16">
      <div ref={ref} className={`container mx-auto px-4 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground text-center mb-12">
          MOMENTOS INESQUECÍVEIS NA BIENAL RIO 2025
        </h2>

        <div className="space-y-10">
          {/* Top gallery - offset right */}
          <div className="max-w-6xl px-12 ml-auto">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {galleryTop.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4 p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={img.image}
                        alt={img.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
              <CarouselNext className="border-primary-foreground text-primary-foreground" />
            </Carousel>
          </div>

          {/* Bottom gallery - offset left */}
          <div className="max-w-6xl px-12 mr-auto">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {galleryBottom.map((img, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/4 p-2">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={img.image}
                        alt={img.alt}
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-primary-foreground text-primary-foreground" />
              <CarouselNext className="border-primary-foreground text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BienalGallery;
