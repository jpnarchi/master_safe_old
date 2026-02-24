import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const carouselImages = [
  '/Hero1_img_pattern@2xx.png',
  '/Hero_img_PG_SuperSlim_1.png',
  '/Hero-PORSCHE_img_pattern@2x.png',
  '/Hero4_img_pattern@2x.png',
];

// Translations for Hero component
const ht = {
  learnMore: { es: 'Conocer más', en: 'Learn more', pt: 'Saiba mais' },
  // Slide 1
  s1desc: {
    es: 'Un cristal blindado automotriz diseñado y desarrollado con ingeniería alemana, producido con las mejores materias primas bajo estándares de diseño europeo.',
    en: 'An automotive armored glass designed and developed with German engineering, manufactured with the finest raw materials under European design standards.',
    pt: 'Um vidro blindado automotivo projetado e desenvolvido com engenharia alemã, produzido com as melhores matérias-primas sob padrões de design europeu.',
  },
  // Slide 2
  s2desc: {
    es: 'Un cristal blindado certificado que mantiene la resistencia balística pero con una formulación más delgada que asegura un 15% menos de peso y mayor vida útil.',
    en: 'A certified armored glass that maintains full ballistic resistance with a thinner formulation ensuring 15% less weight and a longer service life.',
    pt: 'Um vidro blindado certificado que mantém a resistência balística com uma formulação mais fina que garante 15% menos peso e maior vida útil.',
  },
  // Slide 3
  s3title1: { es: 'Nuestro', en: 'Our', pt: 'Nosso' },
  s3title2: { es: 'ADN', en: 'DNA', pt: 'DNA' },
  s3title3: { es: ', su escudo', en: ', your shield', pt: ', seu escudo' },
  feat1: { es: 'Balística probada', en: 'Proven ballistics', pt: 'Balística comprovada' },
  feat2: { es: 'Geometría perfecta', en: 'Perfect geometry', pt: 'Geometria perfeita' },
  feat3: { es: 'Acabado único', en: 'Unique finish', pt: 'Acabamento único' },
  feat4: { es: 'Óptica excepcional', en: 'Exceptional optics', pt: 'Ótica excepcional' },
  // Slide 4
  s4title1: { es: 'Procesos de Producción', en: 'Production Processes', pt: 'Processos de Produção' },
  s4title2: { es: 'con estándares Internacionales', en: 'with International Standards', pt: 'com Padrões Internacionais' },
  s4desc: {
    es: 'Nuestro modelo de producción articula la incorporación de materiales e insumos premium con validaciones en cada fase productiva asegurando calidad total.',
    en: 'Our production model integrates premium materials and inputs with validations at every production phase, ensuring total quality.',
    pt: 'Nosso modelo de produção articula a incorporação de materiais e insumos premium com validações em cada fase produtiva, assegurando qualidade total.',
  },
  // Product cards
  cards: {
    es: [
      { description: 'Vidrio premium de resistencia balística certificada' },
      { description: 'Vidrio Blindado premium: Más delgado, liviano y más durable' },
      { description: 'Vidrio Blindado con marco de acero' },
      { description: 'Vidrio Blindado premium con resistencia balística destacada' },
      { description: 'Vidrio Blindado más delgado con Balística Mejorada para Armas Largas' },
    ],
    en: [
      { description: 'Premium glass with certified ballistic resistance' },
      { description: 'Premium armored glass: thinner, lighter, and more durable' },
      { description: 'Armored glass with steel frame' },
      { description: 'Premium armored glass with outstanding ballistic resistance' },
      { description: 'Thinner armored glass with enhanced long-barrel ballistics' },
    ],
    pt: [
      { description: 'Vidro premium com resistência balística certificada' },
      { description: 'Vidro blindado premium: mais fino, leve e mais durável' },
      { description: 'Vidro blindado com moldura de aço' },
      { description: 'Vidro blindado premium com resistência balística destacada' },
      { description: 'Vidro blindado mais fino com balística melhorada para armas longas' },
    ],
  },
  // R&D section
  rdSub: { es: 'Innovación continua', en: 'Continuous innovation', pt: 'Inovação contínua' },
  rdTitle: { es: 'Investigación & Desarrollo', en: 'Research & Development', pt: 'Pesquisa & Desenvolvimento' },
  rdDesc: {
    es: 'Desarrollamos Productos innovadores Funcionales y balísticamente certificados.',
    en: 'We develop innovative, functional, and ballistically certified products.',
    pt: 'Desenvolvemos produtos inovadores, funcionais e balísticamente certificados.',
  },
  // Formulación section
  formTitle: { es: 'Formulación Exclusiva PG', en: 'Exclusive PG Formulation', pt: 'Formulação Exclusiva PG' },
  formDesc: {
    es: 'La composición del vidrio permite que el proyectil al impacto disminuya su fuerza y el policarbonato absorba su energía cinética y se detenga quedando encapsulado, evitando así cualquier esquirla al interior del vehículo.',
    en: 'The glass composition allows the projectile to decrease its force upon impact while the polycarbonate absorbs its kinetic energy, stopping and encapsulating it — preventing any fragments from reaching the vehicle interior.',
    pt: 'A composição do vidro permite que o projétil reduza sua força no impacto e o policarbonato absorva sua energia cinética, parando e ficando encapsulado — evitando qualquer estilhaço no interior do veículo.',
  },
  casosTitle: {
    es: 'Conozca nuestros casos de éxito',
    en: 'Discover our success stories',
    pt: 'Conheça nossos casos de sucesso',
  },
  // ADN section
  adnTitle1: { es: 'Nuestro ADN es la protección:', en: 'Our DNA is protection:', pt: 'Nosso DNA é a proteção:' },
  adnTitle2: {
    es: 'tecnología, diseño y confianza en cada capa.',
    en: 'technology, design and trust in every layer.',
    pt: 'tecnologia, design e confiança em cada camada.',
  },
  ben1title: { es: 'Protección balística\nsin compromisos', en: 'Ballistic protection\nwithout compromise', pt: 'Proteção balística\nsem compromissos' },
  ben1desc: {
    es: 'Cada producto PG Products está diseñado y probado bajo los más altos estándares internacionales (NIJ, EN, STANAG), garantizando resistencia comprobada ante múltiples amenazas. Nuestra ingeniería multicapa ofrece una defensa superior con el máximo nivel de seguridad, transparencia y durabilidad.',
    en: 'Every PG Products item is designed and tested under the highest international standards (NIJ, EN, STANAG), ensuring proven resistance against multiple threats. Our multilayer engineering delivers superior defense with the highest level of safety, transparency and durability.',
    pt: 'Cada produto PG Products é projetado e testado sob os mais altos padrões internacionais (NIJ, EN, STANAG), garantindo resistência comprovada contra múltiplas ameaças. Nossa engenharia multicamada oferece uma defesa superior com o máximo nível de segurança, transparência e durabilidade.',
  },
  ben2title: { es: 'Innovación en diseño\ny tecnología', en: 'Innovation in design\nand technology', pt: 'Inovação em design\ne tecnologia' },
  ben2desc: {
    es: 'Integramos ciencia de materiales avanzada, geometrías de precisión y procesos automatizados que optimizan el desempeño balístico sin sacrificar la estética del vehículo o estructura. PG Products redefine el blindaje al fusionar protección, ligereza y elegancia en una sola solución.',
    en: 'We integrate advanced materials science, precision geometries and automated processes that optimize ballistic performance without sacrificing vehicle or structural aesthetics. PG Products redefines armoring by fusing protection, lightness and elegance into one solution.',
    pt: 'Integramos ciência de materiais avançada, geometrias de precisão e processos automatizados que otimizam o desempenho balístico sem sacrificar a estética do veículo ou estrutura. A PG Products redefine o blindamento ao fundir proteção, leveza e elegância em uma única solução.',
  },
  ben3title: { es: 'Calidad certificada\ny experiencia global', en: 'Certified quality\nand global experience', pt: 'Qualidade certificada\ne experiência global' },
  ben3desc: {
    es: 'Con más de dos décadas de trayectoria en la industria del vidrio blindado, PG Products combina experiencia, investigación y control de calidad ISO 9001:2015 para ofrecer productos con acabados únicos, claridad óptica excepcional y una instalación de alto rendimiento respaldada por expertos internacionales.',
    en: 'With over two decades of experience in the armored glass industry, PG Products combines expertise, research and ISO 9001:2015 quality control to deliver products with unique finishes, exceptional optical clarity and high-performance installation backed by international experts.',
    pt: 'Com mais de duas décadas de trajetória na indústria do vidro blindado, a PG Products combina experiência, pesquisa e controle de qualidade ISO 9001:2015 para oferecer produtos com acabamentos únicos, clareza ótica excepcional e instalação de alto desempenho respaldada por especialistas internacionais.',
  },
  // Contact section
  contactTitle: { es: 'Protegemos tu seguridad', en: 'We Protect Your Safety', pt: 'Protegemos a Sua Segurança' },
  contactSub: {
    es: 'Confía en la experiencia y calidad de un líder en seguridad automotriz.',
    en: 'Trust in the experience and quality of a leader in automotive security.',
    pt: 'Confie na experiência e na qualidade de um líder em segurança automotiva.',
  },
  labelName: { es: 'Nombre completo', en: 'Full Name', pt: 'Nome Completo' },
  labelEmail: { es: 'Email', en: 'Email', pt: 'E-mail' },
  labelMsg: { es: 'Mensaje', en: 'Message', pt: 'Mensagem' },
  placeholderName: { es: 'Introduzca su nombre', en: 'Enter your name', pt: 'Insira o seu nome' },
  placeholderEmail: { es: 'Introduzca su dirección de correo electrónico', en: 'Enter your email address', pt: 'Insira o seu endereço de e-mail' },
  placeholderMsg: { es: 'Escriba aquí su mensaje', en: 'Write your message here', pt: 'Escreva aqui a sua mensagem' },
  cancel: { es: 'Cancelar', en: 'Cancel', pt: 'Cancelar' },
  send: { es: 'Enviar', en: 'Send', pt: 'Enviar' },
};

const allProductCards = [
  { title: "GlassGuard", img: "/Glassguard_card.png", logo: "/new-card-logoPG-GlassGuard.svg", link: "/glassguard" },
  { title: "SuperSlim",  img: "/Superslim_card.png",  logo: "/new-card-logo-PG-Superslim.svg",  link: "/superslim" },
  { title: "SteelGlass", img: "/Steelglass_card.png", logo: "/new-card-logo-PG-SteelGlass.svg", link: "/steelglass" },
  { title: "PG NEU",     img: "/Neu_card.png",        logo: "/PG Neu.svg",                      link: "/neu" },
  { title: "PG ULTRA",   img: "/Ultra_card.png",      logo: "/PG Ultra.svg",                    link: "/ultra" },
];

const Hero = () => {
  const { language } = useLanguage();
  const T = (obj: { es: string; en: string; pt: string }) => obj[language];

  const [currentHero, setCurrentHero] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [productApi, setProductApi] = useState<any>(null);

  const cardDescriptions = ht.cards[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!productApi) return;
    const onSelect = () => setCurrentProductSlide(productApi.selectedScrollSnap());
    productApi.on('select', onSelect);
    onSelect();
    return () => { productApi.off('select', onSelect); };
  }, [productApi]);

  useEffect(() => {
    if (!productApi) return;
    const interval = setInterval(() => {
      if (productApi.canScrollNext()) { productApi.scrollNext(); } else { productApi.scrollTo(0); }
    }, 4000);
    return () => clearInterval(interval);
  }, [productApi]);

  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="w-full h-screen min-h-[500px] max-h-[900px] relative overflow-hidden flex items-center justify-center">
        {carouselImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentHero === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={img} alt={`slide-${idx}`} className="w-full h-full object-cover" draggable={false} />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-4">
          {/* Slide 1 */}
          {currentHero === 0 && (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-12 leading-tight">
                <span className="font-normal">PG Premium</span> <span className="font-bold">Ballistic Glass</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center mb-5 sm:mb-8 md:mb-12 max-w-3xl leading-relaxed">
                {T(ht.s1desc)}
              </p>
              <Link to="/contacto" className="inline-flex items-center rounded-md px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy">
                {T(ht.learnMore)}
              </Link>
            </>
          )}

          {/* Slide 2 */}
          {currentHero === 1 && (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-12 leading-tight">
                <span className="font-normal">PG</span> <span className="font-bold">SuperSlim</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center mb-5 sm:mb-8 md:mb-12 max-w-3xl leading-relaxed">
                {T(ht.s2desc)}
              </p>
              <Link to="/superslim" className="inline-flex items-center rounded-md px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy">
                {T(ht.learnMore)}
              </Link>
            </>
          )}

          {/* Slide 3 */}
          {currentHero === 2 && (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-10 leading-tight">
                <span className="font-normal">{T(ht.s3title1)}</span>{' '}
                <span className="font-bold">{T(ht.s3title2)}</span>
                <span className="font-normal">{T(ht.s3title3)}</span>
              </h1>

              <div className="mb-5 sm:mb-8 md:mb-10 w-full max-w-xs sm:max-w-none mx-auto">
                {/* Mobile */}
                <div className="grid grid-cols-2 gap-4 sm:hidden">
                  <div className="flex flex-col items-center text-center">
                    <img src="/bullet_ico 1.svg" alt="Ballistics" className="w-12 h-12 mb-2" />
                    <span className="text-xs font-medium">{T(ht.feat1)}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img src="/geometry_ico 1.svg" alt="Geometry" className="w-10 h-10 mb-2" />
                    <span className="text-xs font-medium">{T(ht.feat2)}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img src="/finish_ico 1.svg" alt="Finish" className="w-10 h-10 mb-2" />
                    <span className="text-xs font-medium">{T(ht.feat3)}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img src="/optics_ico 1.svg" alt="Optics" className="w-10 h-10 mb-2" />
                    <span className="text-xs font-medium">{T(ht.feat4)}</span>
                  </div>
                </div>

                {/* Tablet/Desktop */}
                <div className="hidden sm:flex items-center justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-3">
                      <img src="/bullet_ico 1.svg" alt="Ballistics" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium">{T(ht.feat1)}</span>
                  </div>
                  <div className="mx-4 md:mx-8 lg:mx-10"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-3">
                      <img src="/geometry_ico 1.svg" alt="Geometry" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium">{T(ht.feat2)}</span>
                  </div>
                  <div className="mx-4 md:mx-8 lg:mx-10"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-3">
                      <img src="/finish_ico 1.svg" alt="Finish" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium">{T(ht.feat3)}</span>
                  </div>
                  <div className="mx-4 md:mx-8 lg:mx-10"><div className="w-2 h-2 bg-white rounded-full"></div></div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center mb-3">
                      <img src="/optics_ico 1.svg" alt="Optics" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </div>
                    <span className="text-xs sm:text-sm md:text-base font-medium">{T(ht.feat4)}</span>
                  </div>
                </div>
              </div>

              <Link to="/pg-dna" className="inline-flex items-center rounded-md px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy">
                {T(ht.learnMore)}
              </Link>
            </>
          )}

          {/* Slide 4 */}
          {currentHero === 3 && (
            <>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-12 leading-tight">
                <span className="font-normal">{T(ht.s4title1)}</span>{' '}
                <span className="font-bold">{T(ht.s4title2)}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center mb-5 sm:mb-8 md:mb-12 max-w-3xl leading-relaxed">
                {T(ht.s4desc)}
              </p>
              <Link to="/pg-dna" className="inline-flex items-center rounded-md px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy">
                {T(ht.learnMore)}
              </Link>
            </>
          )}
        </div>

        <div className="absolute left-0 right-0 bottom-4 sm:bottom-8 flex justify-center gap-2 z-30">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${currentHero === idx ? 'bg-white scale-110' : 'bg-white opacity-50 hover:opacity-75'}`}
              onClick={() => setCurrentHero(idx)}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT CARDS CAROUSEL SECTION */}
      <section className="w-full bg-white py-10 md:py-16 relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel setApi={setProductApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {allProductCards.map((card, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 xl:basis-1/3">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div
                        className="relative overflow-hidden flex flex-col p-4 sm:p-6 bg-no-repeat bg-top bg-[length:100%_auto] min-h-[480px] md:bg-cover md:bg-center md:min-h-0 md:h-[520px]"
                        style={{ backgroundImage: `url(${card.img})`, borderRadius: '28px' }}
                      >
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
                          <img src={card.logo} alt={card.title} className="max-w-[220px] sm:max-w-[280px] w-full h-auto mb-4 sm:mb-6" />
                          <p className="text-base sm:text-lg font-medium leading-relaxed px-2">
                            {cardDescriptions[index].description}
                          </p>
                        </div>
                        <div className="text-center mt-auto mb-2 sm:mb-4">
                          <Link to={card.link} className="inline-flex items-center rounded-xl px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy">
                            {T(ht.learnMore)}
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {allProductCards.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentProductSlide === index ? 'bg-pgnavy scale-110' : 'bg-gray-300 hover:bg-gray-400'}`}
                onClick={() => productApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* INVESTIGACIÓN & DESARROLLO SECTION */}
      <section
        className="w-full py-16 sm:py-24 md:py-32 lg:py-48 relative overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[600px] lg:min-h-[800px]"
        style={{ backgroundImage: 'url(/RnD_image@2x.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="text-center text-white z-10 px-4">
          <img src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png" alt="PG Products Logo"
            className="mx-auto mb-6 sm:mb-8 w-48 sm:w-64 md:w-80 lg:w-[420px] h-auto drop-shadow-xl" />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 opacity-90">{T(ht.rdSub)}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">{T(ht.rdTitle)}</h2>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto">{T(ht.rdDesc)}</p>
          <Link to="/pg-dna" className="inline-flex items-center rounded-xl px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy">
            {T(ht.learnMore)}
          </Link>
        </div>
      </section>

      {/* FORMULACIÓN PG & CASOS DE ÉXITO SECTION */}
      <section className="w-full bg-white pt-10 pb-10 sm:pt-14 sm:pb-12 lg:pt-20 lg:pb-16">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Formulación PG */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div className="flex justify-center lg:justify-end mb-6">
                <div className="w-full h-44 sm:h-56 lg:h-72 rounded-2xl"
                  style={{ backgroundImage: 'url(/formulacion-home.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                <div className="sm:max-w-sm lg:max-w-lg">
                  <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-pgnavy mb-3 sm:mb-4">{T(ht.formTitle)}</h2>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{T(ht.formDesc)}</p>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/pg-dna" className="inline-flex items-center rounded-xl px-6 py-3 sm:px-8 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white whitespace-nowrap">
                    {T(ht.learnMore)}
                  </Link>
                </div>
              </div>
            </div>

            {/* Casos de éxito */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden flex flex-col">
              <div className="p-8 lg:p-12 pb-4">
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-pgnavy text-center">
                  {T(ht.casosTitle)}
                </h2>
              </div>
              <div className="flex-1 relative" style={{ minHeight: '360px' }}>
                <img
                  src="/conocemasHOME.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{ mixBlendMode: 'multiply', objectPosition: 'right center' }}
                />
              </div>
              <div className="p-6 flex justify-center">
                <Link to="/pg-automotive" className="inline-flex items-center rounded-xl px-6 py-3 sm:px-8 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white whitespace-nowrap">
                  {T(ht.learnMore)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FULL SCREEN VIDEO SECTION */}
      <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold opacity-20 rotate-[-30deg] select-none text-center px-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            ESTE NO ES EL VIDEO FINAL
          </div>
        </div>
      </section>

      {/* NUESTRO ADN SECTION */}
      <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-[#1E3A5F] leading-snug font-montserrat">
            {T(ht.adnTitle1)}{' '}
            <span className="font-normal">{T(ht.adnTitle2)}</span>
          </h2>

          {/* Desktop */}
          <div className="hidden lg:flex items-start justify-center gap-8 xl:gap-16">
            <div className="flex-1 max-w-[340px]">
              <div className="flex justify-center mb-8">
                <div className="relative w-[180px] h-[180px] bg-gray-200 rounded-[45px] rotate-45 flex items-center justify-center">
                  <img src="/balistica_ico_beneficio.svg" alt="Ballistic protection" className="-rotate-45 w-[90px] h-[90px]" />
                </div>
              </div>
              <h3 className="text-center mb-6 text-[#1E3A5F] text-xl font-bold font-montserrat leading-snug whitespace-pre-line">{T(ht.ben1title)}</h3>
              <p className="text-center text-[#1A202C] text-sm leading-relaxed">{T(ht.ben1desc)}</p>
            </div>
            <div className="flex items-center" style={{ marginTop: '90px' }}>
              <img src="/linea_pasos@2x.png" alt="" className="w-[180px] h-auto" />
            </div>
            <div className="flex-1 max-w-[340px]">
              <div className="flex justify-center mb-8">
                <div className="relative w-[180px] h-[180px] bg-gray-200 rounded-[45px] rotate-45 flex items-center justify-center">
                  <img src="/innovacion_ico_beneficio.svg" alt="Innovation" className="-rotate-45 w-[90px] h-[90px]" />
                </div>
              </div>
              <h3 className="text-center mb-6 text-[#1E3A5F] text-xl font-bold font-montserrat leading-snug whitespace-pre-line">{T(ht.ben2title)}</h3>
              <p className="text-center text-[#1A202C] text-sm leading-relaxed">{T(ht.ben2desc)}</p>
            </div>
            <div className="flex items-center" style={{ marginTop: '90px' }}>
              <img src="/linea_pasos@2x.png" alt="" className="w-[180px] h-auto" />
            </div>
            <div className="flex-1 max-w-[340px]">
              <div className="flex justify-center mb-8">
                <div className="relative w-[180px] h-[180px] bg-gray-200 rounded-[45px] rotate-45 flex items-center justify-center">
                  <img src="/calidad_ico_beneficio.svg" alt="Quality" className="-rotate-45 w-[90px] h-[90px]" />
                </div>
              </div>
              <h3 className="text-center mb-6 text-[#1E3A5F] text-xl font-bold font-montserrat leading-snug whitespace-pre-line">{T(ht.ben3title)}</h3>
              <p className="text-center text-[#1A202C] text-sm leading-relaxed">{T(ht.ben3desc)}</p>
            </div>
          </div>

          {/* Mobile & Tablet */}
          <div className="lg:hidden flex flex-col space-y-10 sm:space-y-12">
            <div className="text-center">
              <div className="flex justify-center mb-5 sm:mb-6">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-gray-200 rounded-[30px] sm:rounded-[35px] rotate-45 flex items-center justify-center">
                  <img src="/balistica_ico_beneficio.svg" alt="Ballistic" className="-rotate-45 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 px-4 whitespace-pre-line">{T(ht.ben1title)}</h3>
              <p className="text-center px-4 sm:px-8 text-[#1A202C] text-sm leading-relaxed">{T(ht.ben1desc)}</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-5 sm:mb-6">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-gray-200 rounded-[30px] sm:rounded-[35px] rotate-45 flex items-center justify-center">
                  <img src="/innovacion_ico_beneficio.svg" alt="Innovation" className="-rotate-45 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 px-4 whitespace-pre-line">{T(ht.ben2title)}</h3>
              <p className="text-center px-4 sm:px-8 text-[#1A202C] text-sm leading-relaxed">{T(ht.ben2desc)}</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-5 sm:mb-6">
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] bg-gray-200 rounded-[30px] sm:rounded-[35px] rotate-45 flex items-center justify-center">
                  <img src="/calidad_ico_beneficio.svg" alt="Quality" className="-rotate-45 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 px-4 whitespace-pre-line">{T(ht.ben3title)}</h3>
              <p className="text-center px-4 sm:px-8 text-[#1A202C] text-sm leading-relaxed">{T(ht.ben3desc)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="w-full py-12 sm:py-16 lg:py-24 relative overflow-hidden"
        style={{ backgroundImage: 'url(/bg_form_contact@2x.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '500px' }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">{T(ht.contactTitle)}</h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-90">{T(ht.contactSub)}</p>
            </div>
            <div className="p-4 sm:p-6 lg:p-8">
              <form className="space-y-5 sm:space-y-8">
                <div>
                  <label className="block text-white text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-4">{T(ht.labelName)}</label>
                  <input type="text" placeholder={T(ht.placeholderName)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 text-sm sm:text-base lg:text-lg" />
                </div>
                <div>
                  <label className="block text-white text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-4">{T(ht.labelEmail)}</label>
                  <input type="email" placeholder={T(ht.placeholderEmail)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 text-sm sm:text-base lg:text-lg" />
                </div>
                <div>
                  <label className="block text-white text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-4">{T(ht.labelMsg)}</label>
                  <textarea placeholder={T(ht.placeholderMsg)} rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 resize-none text-sm sm:text-base lg:text-lg" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 sm:pt-6">
                  <button type="button" className="flex-1 py-3 sm:py-4 px-6 sm:px-8 bg-transparent border-2 border-white text-white rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300">
                    {T(ht.cancel)}
                  </button>
                  <button type="submit" className="flex-1 py-3 sm:py-4 px-6 sm:px-8 bg-blue-600 text-white rounded-lg font-medium text-sm sm:text-base lg:text-lg hover:bg-blue-700 transition-all duration-300">
                    {T(ht.send)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
