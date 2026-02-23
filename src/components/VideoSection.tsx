import useScrollAnimation from "@/hooks/useScrollAnimation";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-8 overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(280 60% 25%), hsl(300 50% 35%), hsl(270 55% 45%), hsl(290 40% 55%))'
    }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => {
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
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/urz9Y0mN15s"
              title="Poemas de Amor para Curar o Mundo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
