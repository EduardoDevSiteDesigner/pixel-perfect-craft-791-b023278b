const RegulamentoSection = () => {
  return (
    <section className="bg-primary-foreground w-full py-12 md:py-16">
      <div className="flex flex-col items-center gap-3">
        <a
          href="https://articule.art.br/wp-content/uploads/2026/03/REGULAMENTO-POEMAS-DE-AMOR-PARA-CURAR-O-MUNDO-2026-PRORROGACAO.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-magenta text-primary-foreground font-heading text-4xl md:text-6xl font-bold py-8 px-24 rounded-full hover:bg-magenta/90 transition-colors shadow-lg inline-block text-center"
        >
          REGULAMENTO
        </a>
        <p className="text-navy mt-3 text-sm">Clique no botão acima e leia o REGULAMENTO.</p>
      </div>
    </section>
  );
};

export default RegulamentoSection;
