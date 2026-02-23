import useScrollAnimation from "@/hooks/useScrollAnimation";

const PoetrySection = () => {
  const s1 = useScrollAnimation();
  const s2 = useScrollAnimation();
  const s3 = useScrollAnimation();
  const s4 = useScrollAnimation();
  const s5 = useScrollAnimation();
  const s6 = useScrollAnimation();

  return (
    <>
      <section className="bg-magenta py-12 md:py-16">
        <div ref={s1.ref} className={`container mx-auto px-4 text-center ${s1.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy leading-tight">
            A POESIA TEM A CAPACIDADE ÚNICA DE TOCAR A ALMA,<br />
            DESPERTANDO EMOÇÕES PROFUNDAS E RESGATANDO<br />
            SENTIMENTOS ESSENCIAIS PARA A HARMONIA ENTRE<br />
            OS SERES HUMANOS.
          </h2>
        </div>
      </section>

      <section className="bg-orange py-12 md:py-16">
        <div ref={s2.ref} className={`container mx-auto px-4 text-navy text-xl md:text-2xl leading-relaxed space-y-6 max-w-4xl ${s2.isVisible ? 'scroll-visible' : 'scroll-hidden'}`} style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            Um <strong>POEMA DE AMOR</strong> não fala apenas de romance, mas também de empatia, compaixão, ternura e esperança. Esses elementos, quando semeados no coração das pessoas, podem gerar mudanças significativas na forma como nos relacionamos uns com os outros e com o mundo ao nosso redor.
          </p>
          <p>
            Historicamente, poetas usaram o amor como força transformadora. Pablo Neruda, Rumi e Vinicius de Moraes, entre tantos outros, construíram versos que ultrapassaram barreiras culturais e linguísticas, promovendo a união entre povos e indivíduos.
          </p>
        </div>
      </section>

      <section className="bg-sky py-10">
        <div ref={s3.ref} className={`container mx-auto px-4 text-center ${s3.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
            O AMOR ESCRITO EM POESIA<br />
            TRANSCENDE TEMPOS E ESPAÇOS.
          </h2>
        </div>
      </section>

      <section className="bg-sky/30 py-12">
        <div ref={s4.ref} className={`container mx-auto px-4 text-navy text-xl md:text-2xl leading-relaxed max-w-4xl ${s4.isVisible ? 'scroll-visible' : 'scroll-hidden'}`} style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            Além disso, a poesia é um refúgio em tempos de dor e angústia. Para quem sofre, um poema de amor pode ser um alento, um bálsamo que ressignifica a experiência do sofrimento e da solidão.
          </p>
        </div>
      </section>

      <section className="bg-pink-light py-10">
        <div ref={s5.ref} className={`container mx-auto px-4 text-center ${s5.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-navy">
            EM TEMPOS DE GUERRA E DIVISÃO,<br />
            A LINGUAGEM DO AMOR<br />
            PODE HUMANIZAR O OUTRO<br />
            E ABRIR CAMINHOS PARA O DIÁLOGO.
          </h2>
        </div>
      </section>

      <section className="bg-sky py-12">
        <div ref={s6.ref} className={`container mx-auto px-4 text-navy text-xl md:text-2xl leading-relaxed max-w-4xl ${s6.isVisible ? 'scroll-visible' : 'scroll-hidden'}`} style={{ textAlign: 'justify', hyphens: 'auto' }}>
          <p>
            O mundo precisa de soluções práticas, mas também precisa de beleza, de sonho, de emoção. E é na poesia que o amor se torna uma linguagem universal, capaz de curar feridas invisíveis e abrir caminhos para um futuro mais harmonioso.
          </p>
        </div>
      </section>
    </>
  );
};

export default PoetrySection;
