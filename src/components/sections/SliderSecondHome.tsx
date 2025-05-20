import React, { useState, useRef, useEffect } from 'react';

const slides = [
  {
    category: "Protección Premium",
    title: "GlassGuard",
    description: "Calidad y Durabilidad",
    price: "Protección superior para tu vehículo",
    img: "/lovable-uploads/f3db5a79-c8a9-46fc-9660-a991756c711f.png",
    link: "#"
  },
  {
    category: "Resistencia Máxima",
    title: "SteelGlass",
    description: "Resistente hasta el Borde",
    price: "Tecnología avanzada de protección",
    img: "/lovable-uploads/Protege-a-tu-familia.webp",
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
  
  // Definir el ancho del slide y el offset para que se vean partes de los slides adyacentes
  const slideWidth = 85; // Ancho del slide principal en vw
  const slideMargin = 2; // Margen reducido entre slides en vw
  const slideOffset = 5; // Offset para mantener la visualización de slides adyacentes
  
  // Asegurar que el carrusel muestre correctamente el primer y último slide
  useEffect(() => {
    // Ajustar la posición del carrusel para que no queden espacios vacíos
    const adjustCarousel = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      
      // Cuando estamos en el último slide, se maneja directamente en el transform
      // para centrarlo, así que no necesitamos padding adicional aquí
    };
    
    adjustCarousel();
  }, [current]);

  const goTo = idx => {
    // Si el índice es válido
    if (idx >= 0 && idx < slides.length) {
      setCurrent(idx);
    }
  };
  
  // Función next mejorada para manejar el caso especial del último slide
  const next = () => {
    setCurrent((prev) => {
      // Si estamos en el último slide, volvemos al primero
      if (prev === slides.length - 1) {
        return 0;
      }
      // En caso contrario, avanzamos al siguiente
      return prev + 1;
    });
  };
  
  // Función prev mejorada para manejar el caso especial del primer slide
  const prev = () => {
    setCurrent((prev) => {
      // Si estamos en el primer slide, vamos al último
      if (prev === 0) {
        return slides.length - 1;
      }
      // En caso contrario, retrocedemos al anterior
      return prev - 1;
    });
  };

  // Touch/swipe support with improved behavior at the boundaries
  useEffect(() => {
    let startX = 0;
    let endX = 0;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleTouchStart = e => { startX = e.touches[0].clientX; };
    const handleTouchEnd = e => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      // Solo cambiar si el desplazamiento es suficiente
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Deslizamiento hacia la izquierda (siguiente)
          next();
        } else {
          // Deslizamiento hacia la derecha (anterior)
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


      {/* Carrusel full width de productos */}
      <section className="w-full bg-white py-16 flex flex-col items-center">
        <div className="w-full relative">
          <div className="overflow-hidden w-full">
            {/* Wrapper con posición inicial ajustada para mostrar siempre parte del slide anterior */}
            <div
              ref={wrapperRef}
              className="flex transition-transform duration-500"
              style={{
                transform: current === slides.length - 1 
                  ? `translateX(calc(-${current * (slideWidth + slideMargin * 2)}vw + ${(100 - slideWidth) / 2}vw))` // Centrar el último slide
                  : `translateX(calc(-${current * (slideWidth + slideMargin * 2)}vw + ${slideOffset}vw))`, // Comportamiento normal
                width: `${slides.length * (slideWidth + slideMargin * 2)}vw`,
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              {slides.map((slide, idx) => (
                <div
                  key={slide.title}
                  className="flex-shrink-0 flex flex-col justify-center relative mx-2 rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                  style={{
                    width: `${slideWidth}vw`,
                    height: '420px',
                    background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url('${slide.img}') center/cover`
                  }}
                  onClick={() => {
                    // Al hacer clic en un slide
                    if (current === slides.length - 1) {
                      // Si estamos en el último slide y hacemos clic en él, volvemos al primero
                      if (idx === current) {
                        goTo(0);
                      } 
                      // Si hacemos clic en cualquier otro slide, vamos a ese slide
                      else {
                        goTo(idx);
                      }
                    } else if (idx === current - 1 || (current === 0 && idx === slides.length - 1)) {
                      // Si hacemos clic en el slide anterior
                      prev();
                    } else if (idx === current + 1 || (current === slides.length - 1 && idx === 0)) {
                      // Si hacemos clic en el slide siguiente
                      next();
                    } else if (idx !== current) {
                      // Si hacemos clic en cualquier otro slide no adyacente
                      goTo(idx);
                    }
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
                        onClick={(e) => e.stopPropagation()} // Evitar que el clic en el botón active el cambio de slide
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

export default SliderSecondHome;