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

const SliderSecondHome = () => {
  const [current, setCurrent] = useState(0);
  const wrapperRef = useRef(null);

  // Igualar configuración del Hero
  const slideWidth = 75; // 75vw para mostrar 25% del siguiente slide
  const slideGap = 8; // 8px de margen entre slides
  const slideMargin = 0;
  const slideOffset = 0;

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

  // Función para calcular el transform - igual que Hero
  const getTransform = () => {
    if (current === slides.length - 1) {
      return `translateX(calc(-${(slides.length - 1) * slideWidth}vw + 25vw))`;
    }
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
  }, []);

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
                width: `calc(${slides.length} * ${slideWidth}vw + ${(slides.length - 1) * slideGap}px)`,
                gap: `${slideGap}px`,
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className="flex-shrink-0 flex flex-col justify-center relative shadow-xl overflow-hidden cursor-pointer rounded-3xl"
                  style={{
                    width: current === slides.length - 1 && idx === slides.length - 1 
                      ? `calc(100vw - ${slideGap}px)`
                      : `${slideWidth}vw`,
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
                  {/* Contenido del slide - igual que Hero */}
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
                          className="btn btn-primary px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
                          onClick={(e) => e.stopPropagation()} // Evitar que el clic en el botón active el cambio de slide
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
        </div>
      </section>
    </>
  );
};

export default SliderSecondHome;