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
  'lovable-uploads/mainhomepagev1.png',
  '/lovable-uploads/Home hero-4.png',
  '/lovable-uploads/tchelao05_RJ.jpg',
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
    if (window.innerWidth < 768) return 90; // mobile
    if (window.innerWidth < 1024) return 80; // tablet
    return 75; // desktop
  };
  
  const slideWidth = isMobile ? 90 : (window.innerWidth < 1024 ? 80 : 75);
  const getTransform = () => {
    if (currentProduct === slides.length - 1) {
      let offset = '10vw'; // desktop default
      if (window.innerWidth < 768) offset = '5vw'; // mobile
      else if (window.innerWidth < 1024) offset = '7.5vw'; // tablet
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
      }, 3500);
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
        <div className="absolute left-0 right-0 bottom-4 sm:bottom-8 flex justify-center gap-2 z-30">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                currentHero === idx ? 'bg-blue-900 scale-110' : 'bg-blue-200 hover:bg-blue-300'
              }`}
              onClick={() => setCurrentHero(idx)}
            />
          ))}
        </div>
      </section>

      {/* CARRUSEL DE PRODUCTOS */}
      <section className="w-screen bg-white py-6 sm:py-10 flex flex-col items-center overflow-hidden">
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
                  className={`flex-shrink-0 flex flex-col justify-center relative shadow-xl overflow-hidden cursor-pointer rounded-2xl sm:rounded-3xl ${
                    idx === slides.length - 1 
                      ? 'ml-3 mr-5 sm:ml-6 sm:mr-10' 
                      : 'mx-3 sm:mx-6'
                  }`}
                  style={{
                    width: `${slideWidth}vw`,
                    height: isMobile ? '70vh' : (window.innerWidth < 1024 ? '80vh' : '90vh'),
                    minHeight: isMobile ? '400px' : (window.innerWidth < 1024 ? '450px' : '500px'),
                    background: `url('${slide.img}') center/cover`,
                    borderRadius: isMobile ? '1rem' : (window.innerWidth < 1024 ? '1.5rem' : '2rem'),
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
                  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 pr-4">
                    <div className="max-w-xs sm:max-w-sm md:max-w-lg w-full">
                      <div className="text-xs sm:text-sm md:text-base font-medium mb-1 sm:mb-2 opacity-90 text-white">
                        {slide.category}
                      </div>
                      <div 
                        className="mb-1 sm:mb-2"
                        style={{
                          width: (() => {
                            if (window.innerWidth < 768) {
                              return slide.title === "GlassGuard" || slide.title === "SteelGlass" ? '160px' : '140px';
                            } else if (window.innerWidth < 1024) {
                              return slide.title === "GlassGuard" || slide.title === "SteelGlass" ? '200px' : '170px';
                            } else {
                              return slide.title === "GlassGuard" || slide.title === "SteelGlass" ? '240px' : '200px';
                            }
                          })(),
                          height: (() => {
                            if (window.innerWidth < 768) {
                              return slide.title === "GlassGuard" || slide.title === "SteelGlass" ? '50px' : '45px';
                            } else if (window.innerWidth < 1024) {
                              return slide.title === "GlassGuard" || slide.title === "SteelGlass" ? '65px' : '60px';
                            } else {
                              return slide.title === "GlassGuard" || slide.title === "SteelGlass" ? '80px' : '70px';
                            }
                          })(),
                          background: 'transparent'
                        }}
                      >
                        <img 
                          src={slide.logo} 
                          alt={`${slide.title} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-1 opacity-90 text-white">
                        {slide.description}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 opacity-80 text-white">
                        {slide.price}
                      </p>
                      <div>
                        <Link
                          to={slide.link}
                          className="btn btn-primary px-3 sm:px-4 md:px-5 lg:px-6 py-2 md:py-2.5 text-xs sm:text-sm md:text-base rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition inline-block"
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
          <div className="absolute left-0 right-0 bottom-2 sm:bottom-4 flex justify-center gap-1.5 sm:gap-2 z-30 pointer-events-none">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full pointer-events-auto cursor-pointer transition-all duration-300 ${
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