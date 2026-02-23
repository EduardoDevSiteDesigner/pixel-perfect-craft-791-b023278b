import useScrollAnimation from "@/hooks/useScrollAnimation";
import logoSlogan from "@/assets/logo-articule-slogan.png";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="bg-navy border-t-4 border-orange">
      <div ref={ref} className={`container mx-auto px-4 py-10 text-center ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <h3 className="font-heading text-5xl md:text-7xl font-black text-primary-foreground mb-8">
          CONTATOS
        </h3>
        <div className="space-y-4 text-primary-foreground">
          <div className="flex justify-center mb-6">
            <img src={logoSlogan} alt="Porque Articule - gente pra brilhar" className="w-64 md:w-80" />
          </div>
          <p className="text-xl md:text-2xl font-bold">WHATSAPP: (21) 99472-8748</p>
          <p className="text-xl md:text-2xl font-bold">E-MAIL: editora@articule.art.br</p>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/60 text-sm">
            Copyright 2026 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
