import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BienalBanner from "@/components/BienalBanner";

import PremiacaoSection from "@/components/PremiacaoSection";
import RegulamentoSection from "@/components/RegulamentoSection";
import FAQSection from "@/components/FAQSection";
import KitsSection from "@/components/KitsSection";
import InscricaoForm from "@/components/InscricaoForm";
import QuemSomos from "@/components/QuemSomos";
import ClientesCarousel from "@/components/ClientesCarousel";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="inicio">
        <HeroSection />
      </div>
      <BienalBanner />
      <div id="premiacao">
        <PremiacaoSection />
      </div>
      <RegulamentoSection />
      <FAQSection />
      <div id="kits">
        <KitsSection />
      </div>
      <div id="inscricao">
        <InscricaoForm />
      </div>
      <QuemSomos />
      <ClientesCarousel />
      <div id="contato">
        <Footer />
      </div>
      
    </div>
  );
};

export default Index;
