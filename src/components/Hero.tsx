import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// SLIDER DE PRODUCTOS EN EL HERO
const slides = [
  {
    category: "Protección Premium",
    title: "GlassGuard",
    description: "Calidad y Durabilidad",
    price: "Protección superior para tu vehículo",
    img: "/lovable-uploads/GLASSGUARDSLIDE.jpeg",
    logo: "/lovable-uploads/Glassguardlogo.png",
    link: "/glassguard"
  },
  {
    category: "Resistencia Máxima",
    title: "SteelGlass",
    description: "Resistente hasta el Borde",
    price: "Tecnología avanzada de protección",
    img: "/lovable-uploads/STEELGLASSSLIDE.jpeg",
    logo: "/lovable-uploads/SteelGlasslogo.png",
    link: "/steelglass"
  },
  {
    category: "Diseño Elegante",
    title: "SuperSlim",
    description: "Liviano y Resistente",
    price: "Protección sin comprometer el diseño",
    img: "/lovable-uploads/SUPERSLIMSLIDE.jpeg",
    logo: "/lovable-uploads/SuperSlimlogo.png",
    link: "/superslim"
  },
  {
    category: "Rendimiento Superior",
    title: "ULTRA",
    description: "Desempeño Balístico Superior",
    price: "La máxima protección disponible",
    img: "/lovable-uploads/PGULTRASLIDE.jpeg",
    logo: "/lovable-uploads/Ultralogo.png",
    link: "/ultra"
  },
  {
    category: "Innovación Total",
    title: "NEU",
    description: "Desempeño Gran",
    price: "La nueva generación de protección",
    img: "/lovable-uploads/NEUSLIDE.jpeg",
    logo: "/lovable-uploads/Neulogo.png",
    link: "/neu"
  }
];
const carouselImages = [
  '/mainpagev1.jpeg',
  '/lovable-uploads/mainpagev2.jpeg',
  '/lovable-uploads/mainpagev3.png',
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
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // --- CARRUSEL DE PRODUCTOS ---
  const slideWidth = 75; // 75vw para mostrar 25% del siguiente slide
  const getTransform = () => {
    if (currentProduct === slides.length - 1) {
      return `translateX(calc(-${(slides.length - 1) * slideWidth}vw + 10vw))`;
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
      }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="w-full h-[100vh] relative overflow-hidden flex items-center justify-center">
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
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full gap-8">
          <img
            src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
            alt="PG Products Logo"
            className="w-64 md:w-80 h-auto mb-4"
          />
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Contactar
            </button>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-blue-50 transition">
              Saber más
            </button>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-8 flex justify-center gap-2 z-30">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentHero === idx ? 'bg-blue-900 scale-110' : 'bg-blue-200 hover:bg-blue-300'
              }`}
              onClick={() => setCurrentHero(idx)}
            />
          ))}
        </div>
      </section>

      {/* CARRUSEL DE PRODUCTOS */}
      <section className="w-screen bg-white py-10 flex flex-col items-center overflow-hidden">
        <div className="w-screen relative">
          <div className="overflow-hidden w-screen">
            <div
              className="carousel-wrapper flex transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransform(),
                width: `${slides.length * slideWidth}vw`,
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className={`flex-shrink-0 flex flex-col justify-center relative shadow-xl overflow-hidden cursor-pointer rounded-3xl ${
                    idx === slides.length - 1 ? 'ml-6 mr-10' : 'mx-6'
                  }`}
                  style={{
                    width: `${slideWidth}vw`,
                    height: '90vh',
                    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${slide.img}') center/cover`,
                    borderRadius: '2rem',
                  }}
                >
                  {/* Área invisible izquierda para regresar */}
                  {currentProduct > 0 && (
                    <div
                      className="absolute left-0 top-0 w-1/3 h-full z-40 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentProduct((prev) => prev - 1);
                      }}
                    />
                  )}
                  {/* Área invisible derecha para avanzar */}
                  {currentProduct < slides.length - 1 && (
                    <div
                      className="absolute right-0 top-0 w-1/3 h-full z-40 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentProduct((prev) => prev + 1);
                      }}
                    />
                  )}
                  {/* Contenido del slide */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 pl-6 md:pl-12 lg:pl-16">
                    <div className="max-w-sm md:max-w-md">
                      <div className="text-xs md:text-sm font-medium mb-1 md:mb-2 opacity-90 text-white">
                        {slide.category}
                      </div>
                      <div 
                        className="mb-1 md:mb-2"
                        style={{
                          width: slide.title === "GlassGuard" || slide.title === "SteelGlass" 
                            ? '240px' 
                            : '200px',
                          height: slide.title === "GlassGuard" || slide.title === "SteelGlass" 
                            ? '80px' 
                            : '70px',
                          background: 'transparent'
                        }}
                      >
                        <img 
                          src={slide.logo} 
                          alt={`${slide.title} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm md:text-base mb-1 opacity-90 text-white">
                        {slide.description}
                      </p>
                      <p className="text-xs md:text-sm mb-4 md:mb-6 opacity-80 text-white">
                        {slide.price}
                      </p>
                      <div>
                        <Link
                          to={slide.link}
                          className="btn btn-primary px-4 md:px-6 py-2 text-sm md:text-base rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver más
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots indicadores - overlayed at the bottom center */}
          <div className="absolute left-0 right-0 bottom-4 flex justify-center gap-2 z-30 pointer-events-none">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full pointer-events-auto cursor-pointer transition-all duration-300 ${
                  currentProduct === idx ? 'bg-blue-900 scale-110' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onClick={() => setCurrentProduct(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;