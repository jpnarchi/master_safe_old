import React, { useState, useRef, useEffect } from 'react';

const slides = [
  {
    category: "Protección Premium",
    title: "GlassGuard",
    description: "Calidad y Durabilidad",
    price: "Protección superior para tu vehículo",
    img: "/lovable-uploads/GLASSGUARDSLIDE.jpeg",
    logo: "/PGGLASSGUARDLOG.jpeg",
    link: "#"
  },
  {
    category: "Resistencia Máxima",
    title: "SteelGlass",
    description: "Resistente hasta el Borde",
    price: "Tecnología avanzada de protección",
    img: "/lovable-uploads/STEELGLASSSLIDE.jpeg",
    logo: "/PGSTEELGLASSLOG.jpeg",
    link: "#"
  },
  {
    category: "Diseño Elegante",
    title: "SuperSlim",
    description: "Liviano y Resistente",
    price: "Protección sin comprometer el diseño",
    img: "/lovable-uploads/SUPERSLIMSLIDE.jpeg",
    logo: "/PGSUPERSLIMLOG.jpeg",
    link: "#"
  },
  {
    category: "Rendimiento Superior",
    title: "ULTRA",
    description: "Desempeño Balístico Superior",
    price: "La máxima protección disponible",
    img: "/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png",
    logo: "/PGULTRALOG.jpeg",
    link: "#"
  },
  {
    category: "Innovación Total",
    title: "NEU",
    description: "Desempeño Gran",
    price: "La nueva generación de protección",
    img: "/lovable-uploads/NEUSLIDE.jpeg",
    logo: "/PGNEULOG.jpeg",
    link: "#"
  }
];

const SliderSecondHome = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const wrapperRef = useRef(null);

  // Configuración del carrusel - mostrando 25% del siguiente
  const slideWidth = 75; // 75vw para mostrar 25% del siguiente slide
  const slideGap = 8; // 8px de margen entre slides

  const goTo = idx => {
    if (idx >= 0 && idx < slides.length) {
      setCurrent(idx);
      setIsPaused(false);
    }
  };

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent((prev) => prev + 1);
      setIsPaused(false);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setIsPaused(false);
    }
  };

  // Función para calcular el transform - corregida para mostrar borde en la última slide
  const getTransform = () => {
    // Para el último slide, mostramos parte de la penúltima slide por la derecha
    if (current === slides.length - 1) {
      // Calculamos para que se vea el borde derecho de la última slide
      // y parte de la penúltima slide por la derecha
      return `translateX(calc(-${(slides.length - 1) * slideWidth}vw + 15vw))`;
    }
    
    // Para todos los otros slides, movimiento normal mostrando 25% del siguiente
    return `translateX(-${current * slideWidth}vw)`;
  };

  // Touch/swipe support
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
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    };
    wrapper.addEventListener('touchstart', handleTouchStart);
    wrapper.addEventListener('touchend', handleTouchEnd);
    return () => {
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current]);

  // Animación automática con pausa en la última slide
  useEffect(() => {
    let interval;
    
    if (current === slides.length - 1) {
      // En la última slide, esperar 4 segundos antes de volver al inicio
      if (!isPaused) {
        setIsPaused(true);
        interval = setTimeout(() => {
          setCurrent(0);
          setIsPaused(false);
        }, 4000);
      }
    } else {
      // Para las otras slides, continuar con el intervalo normal
      interval = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 3500);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
        clearTimeout(interval);
      }
    };
  }, [current, isPaused, slides.length]);

  return (
    <>
      <section className="w-screen bg-white py-16 flex flex-col items-center overflow-hidden">
        <div className="w-screen relative pl-2">
          <div className="overflow-hidden w-screen">
            <div
              ref={wrapperRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: getTransform(),
                width: current === slides.length - 1 
                  ? `calc(${slides.length * slideWidth}vw + 15vw)`
                  : `calc(${slides.length} * ${slideWidth}vw + ${(slides.length - 1) * slideGap}px)`,
                gap: `${slideGap}px`,
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className="flex-shrink-0 flex flex-col justify-center relative shadow-xl overflow-hidden cursor-pointer rounded-3xl"
                  style={{
                    width: `${slideWidth}vw`,
                    height: '420px',
                    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${slide.img}') center/cover`,
                    marginLeft: idx === 0 ? 0 : `${slideGap / 2}px`,
                    marginRight: idx === slides.length - 1 ? 0 : `${slideGap / 2}px`,
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
                  {/* Contenido del slide */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 pl-6 md:pl-12 lg:pl-16">
                    <div className="max-w-sm md:max-w-md">
                      <div className="text-xs md:text-sm font-medium mb-1 md:mb-2 opacity-90 text-white">
                        {slide.category}
                      </div>
                      {/* Contenedor invisible para el logo del producto */}
                      <div 
                        className="mb-1 md:mb-2"
                        style={{
                          width: slide.title === "GlassGuard" || slide.title === "SteelGlass" 
                            ? '180px' 
                            : '140px',
                          height: slide.title === "GlassGuard" || slide.title === "SteelGlass" 
                            ? '60px' 
                            : '50px',
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
                        <a
                          href={slide.link}
                          className="btn btn-primary px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
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
    </>
  );
};

export default SliderSecondHome;