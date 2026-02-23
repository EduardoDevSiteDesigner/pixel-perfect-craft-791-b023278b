import logoArticule from "@/assets/logo-articule.png";

const Navbar = () => {
  return (
    <nav className="bg-navy py-2">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src={logoArticule} alt="Editora Articule" className="h-16 md:h-20 w-auto" />
        </div>
        <a
          href="#inscricao"
          className="inline-block bg-yellow text-navy font-heading text-xs py-2 px-5 md:text-xl md:py-3 md:px-10 font-bold hover:bg-yellow/90 transition-colors rounded-full whitespace-nowrap"
        >
          INSCREVA-SE AGORA
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
