import React, { useState, useRef, useEffect } from 'react';

const slides = [
  {
    category: "Protección Premium",
    title: "GlassGuard",
    description: "Calidad y Durabilidad",
    price: "Protección superior para tu vehículo",
    img: "/lovable-uploads/IMG_4544.jpg",
    link: "#"
  },
  {
    category: "Resistencia Máxima",
    title: "SteelGlass",
    description: "Resistente hasta el Borde",
    price: "Tecnología avanzada de protección",
    img: "/lovable-uploads/IMG_4421.jpg",
    link: "#"
  },
  {
    category: "Diseño Elegante",
    title: "SuperSlim",
    description: "Liviano y Resistente",
    price: "Protección sin comprometer el diseño",
    img: "/lovable-uploads/74356578-08a7-4a0d-ad9b-ef8f2083fe81.png",
    link: "#"
  },
  {
    category: "Rendimiento Superior",
    title: "ULTRA",
    description: "Desempeño Balístico Superior",
    price: "La máxima protección disponible",
    img: "/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png",
    link: "#"
  },
  {
    category: "Innovación Total",
    title: "NEU",
    description: "Desempeño Gran",
    price: "La nueva generación de protección",
    img: "/lovable-uploads/82e0c0e3-aaad-4d7f-aa32-398f7c44bafe.png",
    link: "#"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const wrapperRef = useRef(null);
  
  // Estado y funciones independientes para el segundo slider
  const [current2, setCurrent2] = useState(0);
  const wrapperRef2 = useRef(null);
  
  // Configuración del carrusel - mostrando 25% del siguiente
  const slideWidth = 75; // 75vw para mostrar 25% del siguiente slide
  const slideMargin = 0; // Sin márgenes - imágenes pegadas
  
  const goTo = idx => {
    if (idx >= 0 && idx < slides.length) {
      setCurrent(idx);
    }
  };
  
  const next = () => {
    setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };
  
  const prev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Funciones para el segundo slider
  const goTo2 = idx => {
    if (idx >= 0 && idx < slides.length) {
      setCurrent2(idx);
    }
  };
  const next2 = () => {
    setCurrent2((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };
  const prev2 = () => {
    setCurrent2((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Función para calcular el transform - arreglando el último slide
  const getTransform = () => {
    // Para el último slide, ajustamos para que no quede espacio en blanco
    if (current === slides.length - 1) {
      // Movemos el carrusel para que el último slide llene completamente la pantalla
      // Calculamos para que el último slide ocupe el 100% sin mostrar espacio vacío
      return `translateX(calc(-${(slides.length - 1) * slideWidth}vw + 25vw))`;
    }
    
    // Para todos los otros slides, movimiento normal mostrando 25% del siguiente
    return `translateX(-${current * slideWidth}vw)`;
  };

  const getTransform2 = () => {
    if (current2 === slides.length - 1) {
      return `translateX(calc(-${(slides.length - 1) * slideWidth}vw + 25vw))`;
    }
    return `translateX(-${current2 * slideWidth}vw)`;
  };

  // Touch/swipe support para ambos sliders
  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const handleTouchStart = e => { startX = e.touches[0].clientX; };
    const handleTouchEnd = e => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { next(); } else { prev(); }
      }
    };
    wrapper.addEventListener('touchstart', handleTouchStart);
    wrapper.addEventListener('touchend', handleTouchEnd);
    return () => {
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const wrapper = wrapperRef2.current;
    if (!wrapper) return;
    const handleTouchStart = e => { startX = e.touches[0].clientX; };
    const handleTouchEnd = e => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) { next2(); } else { prev2(); }
      }
    };
    wrapper.addEventListener('touchstart', handleTouchStart);
    wrapper.addEventListener('touchend', handleTouchEnd);
    return () => {
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Animación automática para slider 1
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animación automática para slider 2
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrent2((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }, 3500);
    return () => clearInterval(interval2);
  }, [slides.length]);

  return (
    <>
      <section
        className="w-full h-[100vh] bg-[url('/lovable-uploads/IMG_4473.jpg')] bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundPosition: 'center 30%' }}
      >
        {/* Overlay azul translúcido */}
        <div className="absolute inset-0 bg-blue-800/30 z-0" />

        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full gap-8">
          <img
            src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
            alt="PG Products Logo"
            className="w-64 md:w-80 h-auto"
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
      </section>

      {/* Carrusel full width de productos */}
      <section className="w-screen bg-white py-0 flex flex-col items-center overflow-hidden">
        <div className="w-screen relative">
          <div className="overflow-hidden w-screen">
            <div
              ref={wrapperRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransform(),
                width: `${slides.length * slideWidth}vw`,
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className="flex-shrink-0 flex flex-col justify-center relative shadow-xl overflow-hidden cursor-pointer"
                  style={{
                    width: current === slides.length - 1 && idx === slides.length - 1 
                      ? '100vw'
                      : `${slideWidth}vw`,
                    height: '100vh',
                    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${slide.img}') center/cover`,
                  }}
                >
                  {/* Área invisible izquierda para regresar */}
                  {current > 0 && (
                    <div
                      className="absolute left-0 top-0 w-1/3 h-full z-40 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                    />
                  )}
                  {/* Área invisible derecha para avanzar */}
                  {current < slides.length - 1 && (
                    <div
                      className="absolute right-0 top-0 w-1/3 h-full z-40 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                    />
                  )}
                  
                  {/* Contenido del slide - Títulos optimizados para vista del 25% siguiente */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 pl-6 md:pl-12 lg:pl-16">
                    <div className="max-w-sm md:max-w-md">
                      <div className="text-xs md:text-sm font-medium mb-1 md:mb-2 opacity-90 text-white">
                        {slide.category}
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-white leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-base mb-1 opacity-90 text-white">
                        {slide.description}
                      </p>
                      <p className="text-xs md:text-sm mb-4 md:mb-6 opacity-80 text-white">
                        {slide.price}
                      </p>
                      <div>
                        <a
                          href={slide.link}
                          className="btn btn-primary px-4 md:px-6 py-2 text-sm md:text-base rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver más
                        </a>
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
                  current === idx ? 'bg-blue-900 scale-110' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Segundo slider independiente, con bordes y márgenes */}
      <section className="w-screen bg-white py-10 flex flex-col items-center overflow-hidden">
        <div className="w-screen relative">
          <div className="overflow-hidden w-screen">
            <div
              ref={wrapperRef2}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransform2(),
                width: `${slides.length * slideWidth}vw`,
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title + '-indep'}
                  className="flex-shrink-0 flex flex-col justify-center relative shadow-xl overflow-hidden cursor-pointer rounded-3xl mx-6"
                  style={{
                    width: current2 === slides.length - 1 && idx === slides.length - 1 
                      ? '100vw'
                      : `${slideWidth}vw`,
                    height: '90vh',
                    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${slide.img}') center/cover`,
                    borderRadius: '2rem',
                  }}
                >
                  {/* Área invisible izquierda para regresar */}
                  {current2 > 0 && (
                    <div
                      className="absolute left-0 top-0 w-1/3 h-full z-40 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        prev2();
                      }}
                    />
                  )}
                  {/* Área invisible derecha para avanzar */}
                  {current2 < slides.length - 1 && (
                    <div
                      className="absolute right-0 top-0 w-1/3 h-full z-40 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        next2();
                      }}
                    />
                  )}
                  {/* Contenido del slide independiente */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 pl-6 md:pl-12 lg:pl-16">
                    <div className="max-w-sm md:max-w-md">
                      <div className="text-xs md:text-sm font-medium mb-1 md:mb-2 opacity-90 text-white">
                        {slide.category}
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2 text-white leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm md:text-base mb-1 opacity-90 text-white">
                        {slide.description}
                      </p>
                      <p className="text-xs md:text-sm mb-4 md:mb-6 opacity-80 text-white">
                        {slide.price}
                      </p>
                      <div>
                        <a
                          href={slide.link}
                          className="btn btn-primary px-4 md:px-6 py-2 text-sm md:text-base rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver más
                        </a>
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
                key={idx + '-indep'}
                className={`w-3 h-3 rounded-full pointer-events-auto cursor-pointer transition-all duration-300 ${
                  current2 === idx ? 'bg-blue-900 scale-110' : 'bg-blue-200 hover:bg-blue-300'
                }`}
                onClick={() => goTo2(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;