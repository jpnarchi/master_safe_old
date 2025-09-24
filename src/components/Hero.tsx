import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// SLIDER DE PRODUCTOS EN EL HERO
const slides = [
  {
    category: "Calidad, Durabilidad y balística comprobada",
    title: "GlassGuard",
    description: "Vidrio premium de resistencia balística certificada",
    price: "Protección superior para tu vehículo",
    img: "/Glassguard_card.png",
    logo: "/new-card-logoPG-GlassGuard.svg",
    link: "/glassguard"
  },
  {
    category: "Más Liviano, más delgado, igual de resistente",
    title: "SuperSlim",
    description: "Premium Ballistic Glass: Thinner, lightweight and more durable",
    price: "Protección sin comprometer el diseño",
    img: "/Superslim_card.png",
    logo: "/new-card-logo-PG-Superslim.svg",
    link: "/superslim"
  },
  {
    category: "Resistente hasta el Borde",
    title: "SteelGlass",
    description: "Premium Ballistic Glass with Steel Frame",
    price: "Tecnología avanzada de protección",
    img: "/Steelglass_card 3@2x.png",
    logo: "/new-card-logo-PG-SteelGlass.svg",
    link: "/steelglass"
  }
];
const carouselImages = [
  '/new-Hero1_img_pattern@2x.png',
  '/new-Hero2_img_pattern@2x.png',
  '/new-Hero3_img_pattern@2x.png',
];

const Hero = () => {
  // Estado para el hero principal (carrusel de imágenes)
  const [currentHero, setCurrentHero] = useState(0);
  // Estado para el carrusel de productos
  const [currentProduct, setCurrentProduct] = useState(0);
  const [isPausedProduct, setIsPausedProduct] = useState(false);

  // --- HERO PRINCIPAL ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- CARRUSEL DE PRODUCTOS ---
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const getSlideWidth = () => {
    if (window.innerWidth < 768) return 85; // mobile
    if (window.innerWidth < 1024) return 65; // tablet
    return 55; // desktop - narrower cards
  };

  const slideWidth = isMobile ? 85 : (window.innerWidth < 1024 ? 65 : 55);
  const getTransform = () => {
    if (currentProduct === slides.length - 1) {
      let offset = '22.5vw'; // desktop default - center the last card
      if (window.innerWidth < 768) offset = '7.5vw'; // mobile
      else if (window.innerWidth < 1024) offset = '17.5vw'; // tablet
      return `translateX(calc(-${(slides.length - 1) * slideWidth}vw + ${offset}))`;
    }
    return `translateX(-${currentProduct * slideWidth}vw)`;
  };
  useEffect(() => {
    let interval;
    if (currentProduct === slides.length - 1) {
      if (!isPausedProduct) {
        setIsPausedProduct(true);
        interval = setTimeout(() => {
          setCurrentProduct(0);
          setIsPausedProduct(false);
        }, 4000);
      }
    } else {
      interval = setInterval(() => {
        setCurrentProduct((prev) => prev + 1);
      }, 3500);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
        clearTimeout(interval);
      }
    };
  }, [currentProduct, isPausedProduct]);

  // Touch/swipe support
  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const wrapper = document.querySelector('.carousel-wrapper');
    if (!wrapper) return;
    const handleTouchStart = e => { startX = e.touches[0].clientX; };
    const handleTouchEnd = e => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { setCurrentProduct((prev) => prev + 1); } else { setCurrentProduct((prev) => prev - 1); }
      }
    };
    wrapper.addEventListener('touchstart', handleTouchStart);
    wrapper.addEventListener('touchend', handleTouchEnd);
    return () => {
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentProduct]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % carouselImages.length);
      }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          {/* Slide 1: Nuestro ADN */}
          {currentHero === 0 && (
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
                to="/contacto"
                className="inline-flex items-center rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
              >
                Solicitar cotización
              </Link>
            </>
          )}

          {/* Slide 2: PG Premium Ballistic Glass */}
          {currentHero === 1 && (
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
                Solicitar cotización
              </Link>
            </>
          )}

          {/* Slide 3: PG SuperSlim */}
          {currentHero === 2 && (
            <>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12">
                <span className="font-normal">PG</span> <span className="font-bold">SuperSlim</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-12 max-w-4xl px-4 leading-relaxed">
                Un cristal blindado certificado que mantiene la resistencia balística pero con una formulación mas delgada que asegura un 15% menos de peso y mayor vida útil
              </p>

              <Link
                to="/contacto"
                className="inline-flex items-center rounded-md px-6 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
              >
                Solicitar cotización
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

      {/* PRODUCT CARDS SECTION */}
      <section className="w-full bg-white py-8 md:py-12">
        <div className="w-full px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto">

            {/* GlassGuard Card */}
            <div
              className="relative overflow-hidden flex flex-col p-6"
              style={{
                backgroundImage: 'url(/Glassguard_card.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '38px',
                height: '600px'
              }}
            >
              {/* Center section with logo and text */}
              <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
                <img
                  src="/new-card-logoPG-GlassGuard.svg"
                  alt="PG GlassGuard"
                  className="max-w-[280px] w-full h-auto mb-6"
                />
                <p className="text-lg font-medium leading-relaxed">
                  Vidrio premium de resistencia<br />balística certificada
                </p>
              </div>

              {/* Button at bottom */}
              <div className="text-center mt-auto mb-4">
                <Link
                  to="/glassguard"
                  className="inline-flex items-center rounded-xl px-8 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
                >
                  Conocer más
                </Link>
              </div>
            </div>

            {/* SuperSlim Card */}
            <div
              className="relative overflow-hidden flex flex-col p-6"
              style={{
                backgroundImage: 'url(/Superslim_card.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '38px',
                height: '600px'
              }}
            >
              {/* Center section with logo and text */}
              <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
                <img
                  src="/new-card-logo-PG-Superslim.svg"
                  alt="PG SuperSlim"
                  className="max-w-[280px] w-full h-auto mb-6"
                />
                <p className="text-lg font-medium leading-relaxed">
                  Premium Ballistic Glass: Thinner,<br />lightweight and more durable
                </p>
              </div>

              {/* Button at bottom */}
              <div className="text-center mt-auto mb-4">
                <Link
                  to="/superslim"
                  className="inline-flex items-center rounded-xl px-8 py-3 font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
                >
                  Conocer más
                </Link>
              </div>
            </div>

            {/* SteelGlass Card */}
            <div
              className="relative overflow-hidden flex flex-col p-6 md:col-span-2 lg:col-span-1"
              style={{
                backgroundImage: 'url(/Steelglass_card.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '38px',
                height: '600px'
              }}
            >
              {/* Center section with logo and text */}
              <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
                <img
                  src="/new-card-logo-PG-SteelGlass.svg"
                  alt="PG SteelGlass"
                  className="max-w-[280px] w-full h-auto mb-6"
                />
                <p className="text-lg font-medium leading-relaxed">
                  Premium Ballistic Glass<br />with Steel Frame
                </p>
              </div>

              {/* Button at bottom */}
              <div className="text-center mt-auto mb-4">
                <Link
                  to="/steelglass"
                  className="inline-flex items-center rounded-xl px-8 py-3 font-medium transition-all duración-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
                >
                  Conocer más
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INVESTIGACIÓN & DESARROLLO SECTION */}
      <section
        className="w-full py-32 md:py-48 relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: 'url(/glass_close_up@2x.png)',
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
            Vidrios Blindados
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Investigación & Desarrollo
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
            PG Products, la nueva generación en protección
          </p>
          <Link
            to="/about-pg-glass"
            className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300 ease-in-out border-2 bg-transparent text-white border-white hover:bg-white hover:text-pgnavy"
          >
            Conocer mas
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
                    Formulación PG
                  </h2>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
                    La composición del vidrio permite que el proyectil al impacto disminuya su fuerza y el policarbonato absorba su energía cinética y se detenga quedando encapsulado y evitando así cualquier esquirla al interior del vehículo.
                  </p>
                </div>

                {/* Button - positioned to the right of text */}
                <div className="flex-shrink-0">
                  <Link
                    to="/about-pg-glass"
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
                  Casos de éxito
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

      {/* PROCESS STEPS SECTION */}
      <section className="w-full bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">

          {/* Steps Flow Container - 5 Containers */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto space-y-8 lg:space-y-0">

            {/* Container 1: Step 1 - Elige un producto */}
            <div className="text-center flex-1">
              <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/product_box_icon.svg"
                  alt="Producto"
                  className="w-12 h-12 lg:w-16 lg:h-16"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-pgnavy mb-4">
                Elige un producto
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
              </p>
            </div>

            {/* Container 2: Connecting Line 1 */}
            <div className="flex items-center justify-center flex-1 hidden lg:flex">
              <img
                src="/linea_pasos@2x.png"
                alt="Connection line"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Container 3: Step 2 - Selecciona una fecha */}
            <div className="text-center flex-1">
              <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/calendar_icon.svg"
                  alt="Calendario"
                  className="w-12 h-12 lg:w-16 lg:h-16"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-pgnavy mb-4">
                Selecciona una fecha
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
              </p>
            </div>

            {/* Container 4: Connecting Line 2 */}
            <div className="flex items-center justify-center flex-1 hidden lg:flex">
              <img
                src="/linea_pasos@2x.png"
                alt="Connection line"
                className="w-full max-w-md h-auto"
              />
            </div>

            {/* Container 5: Step 3 - Solicita una cotización */}
            <div className="text-center flex-1">
              <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <img
                  src="/quote_icon.svg"
                  alt="Cotización"
                  className="w-12 h-12 lg:w-16 lg:h-16"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-pgnavy mb-4">
                Solicita una cotización
              </h3>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
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