import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const carouselImages = [
  '/Hero1_img_pattern@2xx.png',
  '/Hero_img_PG_SuperSlim_1.png',
  '/Hero-PORSCHE_img_pattern@2x.png',
  '/Hero4_img_pattern@2x.png',
];

// TODAS LAS TARJETAS PARA EL CARRUSEL (PRODUCTOS + NUEVAS)
const allProductCards = [
  {
    title: "GlassGuard",
    img: "/Glassguard_card.png",
    logo: "/new-card-logoPG-GlassGuard.svg",
    description: "Vidrio premium de resistencia balística certificada",
    link: "/glassguard"
  },
  {
    title: "SuperSlim",
    img: "/Superslim_card.png",
    logo: "/new-card-logo-PG-Superslim.svg",
    description: "Vidrio Blindado premium: Más delgado, liviano y más durable",
    link: "/superslim"
  },
  {
    title: "SteelGlass",
    img: "/Steelglass_card.png",
    logo: "/new-card-logo-PG-SteelGlass.svg",
    description: "Vidrio Blindado con marco de acero",
    link: "/steelglass"
  },
  {
    title: "PG NEU",
    img: "/Neu_card.png",
    logo: "/PG Neu.svg",
    description: "Vidrio Blindado premium con resistencia balística destacada",
    link: "/neu"
  },
  {
    title: "PG ULTRA",
    img: "/Ultra_card.png",
    logo: "/PG Ultra.svg",
    description: "Vidrio Blindado más delgado con Balística Mejorada para Armas Largas",
    link: "/ultra"
  }
];

const Hero = () => {
  // Estado para el hero principal (carrusel de imágenes)
  const [currentHero, setCurrentHero] = useState(0);
  // Estado para el carrusel de productos con dots
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [productApi, setProductApi] = useState<any>(null);

  // --- HERO PRINCIPAL ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- CARRUSEL DE PRODUCTOS CON DOTS ---
  useEffect(() => {
    if (!productApi) return;

    const onSelect = () => {
      setCurrentProductSlide(productApi.selectedScrollSnap());
    };

    productApi.on('select', onSelect);
    onSelect();

    return () => {
      productApi.off('select', onSelect);
    };
  }, [productApi]);

  // Auto-play para el carrusel de productos
  useEffect(() => {
    if (!productApi) return;

    const interval = setInterval(() => {
      if (productApi.canScrollNext()) {
        productApi.scrollNext();
      } else {
        productApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [productApi]);

  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="w-full h-screen min-h-[600px] max-h-[900px] relative overflow-hidden flex items-center justify-center">
        {carouselImages.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${currentHero === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
          {/* Slide 1: PG Premium Ballistic Glass */}
          {currentHero === 0 && (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
                <span className="font-normal">PG Premium</span> <span className="font-bold">Ballistic Glass</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-12 max-w-4xl px-4 leading-relaxed">
                Un cristal blindado automotriz diseñado y desarrollado con ingeniería alemana, producido con las mejores materias primas bajo estándares de diseño europeo.
              </p>

              <Link
                to="/contacto"
                className="inline-flex items-center rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
              >
                Conocer más
              </Link>
            </>
          )}

          {/* Slide 2: PG SuperSlim */}
          {currentHero === 1 && (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
                <span className="font-normal">PG</span> <span className="font-bold">SuperSlim</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-12 max-w-4xl px-4 leading-relaxed">
                Un cristal blindado certificado que mantiene la resistencia balística pero con una formulación más delgada que asegura un 15% menos de peso y mayor vida útil
              </p>

              <Link
                to="/superslim"
                className="inline-flex items-center rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
              >
                Conocer más
              </Link>
            </>
          )}

          {/* Slide 3: Nuestro ADN */}
          {currentHero === 2 && (
            <>
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
                <span className="font-normal">Nuestro</span> <span className="font-bold">ADN</span><span className="font-normal">, su escudo</span>
              </h1>

              {/* Icons and Features */}
              <div className="flex items-center justify-center mb-8 md:mb-12 px-4">
                {/* Ballistics */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-3">
                    <img src="/bullet_ico 1.svg" alt="Ballistics" className="w-20 h-20 md:w-24 md:h-24" />
                  </div>
                  <span className="text-sm md:text-base font-medium">Balística probada</span>
                </div>

                {/* Dot separator */}
                <div className="mx-6 md:mx-8 lg:mx-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Geometry */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-3">
                    <img src="/geometry_ico 1.svg" alt="Geometry" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <span className="text-sm md:text-base font-medium">Geometría perfecta</span>
                </div>

                {/* Dot separator */}
                <div className="mx-6 md:mx-8 lg:mx-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Finish */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-3">
                    <img src="/finish_ico 1.svg" alt="Finish" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <span className="text-sm md:text-base font-medium">Acabado único</span>
                </div>

                {/* Dot separator */}
                <div className="mx-6 md:mx-8 lg:mx-10">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Optics */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-3">
                    <img src="/optics_ico 1.svg" alt="Optics" className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <span className="text-sm md:text-base font-medium">Óptica excepcional</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/pg-dna"
                className="inline-flex items-center rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
              >
                Conocer más
              </Link>
            </>
          )}

          {/* Slide 4: Procesos de Producción con estándares Internacionales */}
          {currentHero === 3 && (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
                <span className="font-normal">Procesos de Producción</span> <span className="font-bold">con estándares Internacionales</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-12 max-w-4xl px-4 leading-relaxed">
                Nuestro modelo de producción articula la incorporación de materiales e insumos premium con validaciones en cada fase productiva asegurando calidad total.
              </p>

              <Link
                to="/pg-dna"
                className="inline-flex items-center rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
              >
                Conocer más
              </Link>
            </>
          )}
        </div>

        <div className="absolute left-0 right-0 bottom-4 sm:bottom-8 flex justify-center gap-2 z-30">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentHero === idx ? 'bg-white scale-110' : 'bg-white opacity-50 hover:opacity-75'
              }`}
              onClick={() => setCurrentHero(idx)}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT CARDS CAROUSEL SECTION */}
      <section className="w-full bg-white py-12 md:py-16 relative">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            setApi={setProductApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {allProductCards.map((card, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="p-0">
                      <div
                        className="relative overflow-hidden flex flex-col p-6"
                        style={{
                          backgroundImage: `url(${card.img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          borderRadius: '38px',
                          height: '600px'
                        }}
                      >
                        {/* Center section with logo and text */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
                          <img
                            src={card.logo}
                            alt={card.title}
                            className="max-w-[280px] w-full h-auto mb-6"
                          />
                          <p className="text-lg font-medium leading-relaxed">
                            {card.description}
                          </p>
                        </div>

                        {/* Button at bottom */}
                        <div className="text-center mt-auto mb-4">
                          <Link
                            to={card.link}
                            className="inline-flex items-center rounded-xl px-8 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
                          >
                            Conocer más
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {allProductCards.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentProductSlide === index ? 'bg-pgnavy scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => productApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* INVESTIGACIÓN & DESARROLLO SECTION */}
      <section
        className="w-full py-32 md:py-48 relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'url(/RnD_image@2x.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '800px'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <img
            src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
            alt="PG Products Logo"
            className="mx-auto mb-8 w-64 sm:w-72 md:w-80 lg:w-[420px] h-auto drop-shadow-xl"
          />
          <p className="text-lg md:text-xl lg:text-2xl mb-6 opacity-90">
            Innovación continua
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Investigación & Desarrollo
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            Desarrollamos Productos innovadores Funcionales y balísticamente certificados.
          </p>
          <Link
            to="/pg-dna"
            className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
          >
            Conocer más
          </Link>
        </div>
      </section>

      {/* FORMULACIÓN PG & CASOS DE ÉXITO SECTION */}
      <section className="w-full bg-white pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

            {/* Formulación PG Outer Container */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-between">
              {/* Background Image - wider and less tall */}
              <div className="flex justify-center lg:justify-end mb-6">
                <div
                  className="w-full h-56 lg:h-72 rounded-2xl max-w-5xl"
                  style={{
                    backgroundImage: 'url(/formulacion-home.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </div>

              {/* Content Area */}
              <div className="flex items-center justify-between">
                {/* Text Content */}
                <div className="max-w-lg pr-8">
                  <h2 className="text-2xl lg:text-4xl font-bold text-pgnavy mb-4">
                    Formulación Exclusiva PG
                  </h2>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
                    La composición del vidrio permite que el proyectil al impacto disminuya su fuerza y el policarbonato absorba su energía cinética y se detenga quedando encapsulado, evitando así cualquier esquirla al interior del vehículo.
                  </p>
                </div>

                {/* Button - positioned to the right of text */}
                <div className="flex-shrink-0">
                  <Link
                    to="/pg-dna"
                    className="inline-flex items-center rounded-xl px-8 py-3 text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white"
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </div>

            {/* Casos de éxito Outer Container */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 min-h-[400px] flex flex-col justify-between">
              {/* Header with Title - centered */}
              <div className="flex justify-center items-start mb-6">
                <h2 className="text-2xl lg:text-4xl font-bold text-pgnavy text-center">
                  Conozca algunos proyectos en los que PG ha incorporado sus productos
                </h2>
              </div>

              {/* Background Image - wider and less tall */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-full h-56 lg:h-72 rounded-2xl max-w-5xl"
                  style={{
                    backgroundImage: 'url(/casos_rombos@2x.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </div>

              {/* Button - positioned in lower center */}
              <div className="flex justify-center">
                <Link
                  to="/pg-automotive"
                  className="inline-flex items-center rounded-xl px-8 py-3 text-base font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white"
                >
                  Conocer más
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FULL SCREEN VIDEO SECTION */}
      <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Watermark Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold opacity-20 rotate-[-30deg] select-none"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            ESTE NO ES EL VIDEO FINAL
          </div>
        </div>
      </section>

      {/* NUESTRO ADN SECTION */}
      <section className="w-full bg-white py-16 lg:py-20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Title - Centered */}
          <h2 className="text-center mb-16 lg:mb-20" style={{
            color: '#1E3A5F',
            fontSize: '36px',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            lineHeight: '1.4'
          }}>
            Nuestro ADN es la protección: <span style={{ fontWeight: 400 }}>tecnología, diseño y confianza en cada capa.</span>
          </h2>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-start justify-center gap-8 xl:gap-16">

            {/* Benefit 1: Protección balística sin compromisos */}
            <div className="flex-1 max-w-[340px]">
              <div className="flex justify-center mb-8">
                <div className="relative w-[180px] h-[180px] bg-gray-200 rounded-[45px] rotate-45 flex items-center justify-center">
                  <img
                    src="/balistica_ico_beneficio.svg"
                    alt="Protección balística"
                    className="-rotate-45 w-[90px] h-[90px]"
                  />
                </div>
              </div>
              <h3 className="text-center mb-6" style={{
                color: '#1E3A5F',
                fontSize: '22px',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                lineHeight: '1.3'
              }}>
                Protección balística<br/>sin compromisos
              </h3>
              <p className="text-center leading-tight" style={{
                color: '#1A202C',
                fontSize: '15px',
                lineHeight: '1.4'
              }}>
                Cada producto PG Products está diseñado y probado bajo los más altos estándares internacionales (NIJ, EN, STANAG), garantizando resistencia comprobada ante múltiples amenazas. Nuestra ingeniería multicapa ofrece una defensa superior con el máximo nivel de seguridad, transparencia y durabilidad.
              </p>
            </div>

            {/* Connecting Line 1 */}
            <div className="flex items-center" style={{ marginTop: '90px' }}>
              <img src="/linea_pasos@2x.png" alt="Connection line" className="w-[180px] h-auto" />
            </div>

            {/* Benefit 2: Innovación en diseño y tecnología */}
            <div className="flex-1 max-w-[340px]">
              <div className="flex justify-center mb-8">
                <div className="relative w-[180px] h-[180px] bg-gray-200 rounded-[45px] rotate-45 flex items-center justify-center">
                  <img
                    src="/innovacion_ico_beneficio.svg"
                    alt="Innovación en diseño"
                    className="-rotate-45 w-[90px] h-[90px]"
                  />
                </div>
              </div>
              <h3 className="text-center mb-6" style={{
                color: '#1E3A5F',
                fontSize: '22px',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                lineHeight: '1.3'
              }}>
                Innovación en diseño<br/>y tecnología
              </h3>
              <p className="text-center leading-tight" style={{
                color: '#1A202C',
                fontSize: '15px',
                lineHeight: '1.4'
              }}>
                Integramos ciencia de materiales avanzada, geometrías de precisión y procesos automatizados que optimizan el desempeño balístico sin sacrificar la estética del vehículo o estructura. PG Products redefine el blindaje al fusionar protección, ligereza y elegancia en una sola solución.
              </p>
            </div>

            {/* Connecting Line 2 */}
            <div className="flex items-center" style={{ marginTop: '90px' }}>
              <img src="/linea_pasos@2x.png" alt="Connection line" className="w-[180px] h-auto" />
            </div>

            {/* Benefit 3: Calidad certificada y experiencia global */}
            <div className="flex-1 max-w-[340px]">
              <div className="flex justify-center mb-8">
                <div className="relative w-[180px] h-[180px] bg-gray-200 rounded-[45px] rotate-45 flex items-center justify-center">
                  <img
                    src="/calidad_ico_beneficio.svg"
                    alt="Calidad certificada"
                    className="-rotate-45 w-[90px] h-[90px]"
                  />
                </div>
              </div>
              <h3 className="text-center mb-6" style={{
                color: '#1E3A5F',
                fontSize: '22px',
                fontFamily: 'Montserrat',
                fontWeight: 700,
                lineHeight: '1.3'
              }}>
                Calidad certificada<br/>y experiencia global
              </h3>
              <p className="text-center leading-tight" style={{
                color: '#1A202C',
                fontSize: '15px',
                lineHeight: '1.4'
              }}>
                Con más de dos décadas de trayectoria en la industria del vidrio blindado, PG Products combina experiencia, investigación y control de calidad ISO 9001:2015 para ofrecer productos con acabados únicos, claridad óptica excepcional y una instalación de alto rendimiento respaldada por expertos internacionales.
              </p>
            </div>

          </div>

          {/* Mobile version - stack vertically */}
          <div className="lg:hidden flex flex-col space-y-12">
            {/* Benefit 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-[140px] h-[140px] bg-gray-200 rounded-[35px] rotate-45 flex items-center justify-center">
                  <img src="/balistica_ico_beneficio.svg" alt="Protección balística" className="-rotate-45 w-[70px] h-[70px]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 px-4">Protección balística<br/>sin compromisos</h3>
              <p className="text-center px-4 leading-tight" style={{
                color: '#1A202C',
                fontSize: '15px',
                lineHeight: '1.4'
              }}>
                Cada producto PG Products está diseñado y probado bajo los más altos estándares internacionales (NIJ, EN, STANAG), garantizando resistencia comprobada ante múltiples amenazas. Nuestra ingeniería multicapa ofrece una defensa superior con el máximo nivel de seguridad, transparencia y durabilidad.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-[140px] h-[140px] bg-gray-200 rounded-[35px] rotate-45 flex items-center justify-center">
                  <img src="/innovacion_ico_beneficio.svg" alt="Innovación en diseño" className="-rotate-45 w-[70px] h-[70px]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 px-4">Innovación en diseño<br/>y tecnología</h3>
              <p className="text-center px-4 leading-tight" style={{
                color: '#1A202C',
                fontSize: '15px',
                lineHeight: '1.4'
              }}>
                Integramos ciencia de materiales avanzada, geometrías de precisión y procesos automatizados que optimizan el desempeño balístico sin sacrificar la estética del vehículo o estructura. PG Products redefine el blindaje al fusionar protección, ligereza y elegancia en una sola solución.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="relative w-[140px] h-[140px] bg-gray-200 rounded-[35px] rotate-45 flex items-center justify-center">
                  <img src="/calidad_ico_beneficio.svg" alt="Calidad certificada" className="-rotate-45 w-[70px] h-[70px]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 px-4">Calidad certificada<br/>y experiencia global</h3>
              <p className="text-center px-4 leading-tight" style={{
                color: '#1A202C',
                fontSize: '15px',
                lineHeight: '1.4'
              }}>
                Con más de dos décadas de trayectoria en la industria del vidrio blindado, PG Products combina experiencia, investigación y control de calidad ISO 9001:2015 para ofrecer productos con acabados únicos, claridad óptica excepcional y una instalación de alto rendimiento respaldada por expertos internacionales.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="w-full py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/bg_form_contact@2x.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Protegemos tu seguridad
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                Confía en la experiencia y calidad de un líder en seguridad automotriz.
              </p>
            </div>

            {/* Right Contact Form */}
            <div className="p-8">
              <form className="space-y-8">
                <div>
                  <label className="block text-white text-base lg:text-lg font-medium mb-4">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    placeholder="Introduzca su nombre"
                    className="w-full px-6 py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 text-base lg:text-lg"
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-medium mb-4">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Introduzca su dirección de correo electrónico"
                    className="w-full px-6 py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 text-base lg:text-lg"
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-medium mb-4">
                    Mensaje
                  </label>
                  <textarea
                    placeholder="Escriba aquí su mensaje"
                    rows={5}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 resize-none text-base lg:text-lg"
                  ></textarea>
                </div>

                <div className="flex gap-6 pt-6">
                  <button
                    type="button"
                    className="flex-1 py-4 px-8 bg-transparent border-2 border-white text-white rounded-lg font-medium text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 px-8 bg-blue-600 text-white rounded-lg font-medium text-base lg:text-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Enviar
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