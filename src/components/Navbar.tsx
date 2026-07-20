import logoArticule from "@/assets/logo-articule.png";

const Navbar = () => {
  return (
    <nav className="bg-navy py-2 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex-shrink-0">
          <img src={logoArticule} alt="Editora Articule" className="h-16 md:h-20 w-auto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
