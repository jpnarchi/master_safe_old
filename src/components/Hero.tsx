import React, { useState, useRef, useEffect } from 'react';

const slides = [
  {
    category: "Protección Premium",
    title: "GlassGuard",
    description: "Calidad y Durabilidad",
    price: "Protección superior para tu vehículo",
    img: "/lovable-uploads/263ffb06-d243-4ca1-88ab-a68943ddd637.png",
    link: "#"
  },
  {
    category: "Resistencia Máxima",
    title: "SteelGlass",
    description: "Resistente hasta el Borde",
    price: "Tecnología avanzada de protección",
    img: "/lovable-uploads/c6b082b9-872f-4a46-a317-6f3b708396c8.png",
    link: "#"
  },
  {
    category: "Diseño Elegante",
    title: "SuperSlim",
    description: "Liviano y Resistente",
    price: "Protección sin comprometer el diseño",
    img: "/lovable-uploads/f54c4665-4e79-445e-b553-2cefc763c386.png",
    link: "#"
  },
  {
    category: "Rendimiento Superior",
    title: "ULTRA",
    description: "Desempeño Balístico Superior",
    price: "La máxima protección disponible",
    img: "/lovable-uploads/8cd08f36-dc67-46f9-99b5-b79a9a5caf2a.png",
    link: "#"
  },
  {
    category: "Innovación Total",
    title: "NEU",
    description: "Desempeño Gran",
    price: "La nueva generación de protección",
    img: "/lovable-uploads/neu.png",
    link: "#"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const wrapperRef = useRef(null);

  const goTo = idx => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

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
        if (diff > 0) next();
        else prev();
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
      <section
        className="w-full min-h-screen bg-[url('/lovable-uploads/empresa-vidrios-pedido-cristales-posee.jpg')] bg-cover bg-center bg-no-repeat relative"
      >
        {/* Overlay azul translúcido */}
        <div className="absolute inset-0 bg-blue-800/30 z-0" />

        {/* Contenido centrado */}
        <div className="relative z-10 flex justify-center items-center min-h-screen pt-0">
          <img
            src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
            alt="PG Products Logo"
            className="w-64 md:w-80 h-auto -mt-12"
          />
        </div>
      </section>

      {/* Carrusel full width de productos */}
      <section className="w-full bg-white py-16 flex flex-col items-center">
        <div className="w-full relative">
          <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto px-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-blue-900/10 hover:bg-blue-900/20 text-blue-900 transition"
              aria-label="Anterior"
            >&#8592;</button>
            <div className="text-lg font-semibold text-blue-900">Nuestros Productos</div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-blue-900/10 hover:bg-blue-900/20 text-blue-900 transition"
              aria-label="Siguiente"
            >&#8594;</button>
          </div>
          <div className="overflow-hidden w-full">
            <div
              ref={wrapperRef}
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${current * 75}vw)`,
                width: `${slides.length * 75}vw`
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className="w-[70vw] flex-shrink-0 flex flex-col justify-center relative mx-4 rounded-2xl shadow-xl overflow-hidden"
                  style={{
                    height: '420px',
                    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${slide.img}') center/cover`
                  }}
                >
                  <div className="absolute inset-0 flex flex-col justify-center items-start z-10 p-12">
                    <div className="text-sm font-medium mb-2 opacity-90 text-white">{slide.category}</div>
                    <h2 className="text-4xl font-bold mb-2 text-white">{slide.title}</h2>
                    <p className="text-base mb-1 opacity-90 text-white">{slide.description}</p>
                    <p className="text-sm mb-8 opacity-80 text-white">{slide.price}</p>
                    <div>
                      <a
                        href={slide.link}
                        className="btn btn-primary px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-800 transition"
                      >
                        Ver más
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-8 text-2xl font-bold text-white z-20 opacity-80">PG</div>
                </div>
              ))}
            </div>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${current === idx ? 'bg-blue-900' : 'bg-blue-200'}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;