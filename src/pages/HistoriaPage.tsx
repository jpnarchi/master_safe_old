import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollObserver from '../utils/ScrollObserver';

const carouselCards = [
  {
    key: 'origenes',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <img 
          src="/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png" 
          alt="PG Products Headquarters" 
          className="w-full max-w-xs h-48 object-cover rounded-xl mb-6 mx-auto"
        />
        <h2 className="heading-lg text-pgnavy mb-4">Nuestros Orígenes</h2>
        <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-xl">
          Desde nuestra fundación en 2010, PG Products ha estado a la vanguardia de la industria de vidrio blindado, combinando ingeniería alemana de precisión con estándares europeos de excelencia.
        </p>
        <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-xl mt-2">
          Lo que comenzó como una visión para revolucionar la seguridad automotriz se ha convertido en una referencia global de innovación y calidad en la fabricación de vidrio blindado premium.
        </p>
      </div>
    )
  },
  {
    key: 'valores',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <h2 className="heading-lg text-pgnavy mb-6">Valores que nos Definen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-pglight p-6 rounded-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-pgnavy rounded-full flex items-center justify-center mb-4 mx-auto">
              <img 
                src="/lovable-uploads/ff6f9f97-d670-45cd-97a0-85bdbb32e648.png" 
                alt="Innovation Icon" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-pgnavy mb-2">Innovación</h3>
            <p className="text-pgnavy/70 text-justify">
              Buscamos constantemente nuevas tecnologías y métodos para mejorar nuestros productos y anticiparnos a las necesidades del mercado.
            </p>
          </div>
          <div className="bg-pglight p-6 rounded-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-pgnavy rounded-full flex items-center justify-center mb-4 mx-auto">
              <img 
                src="/lovable-uploads/f3db5a79-c8a9-46fc-9660-a991756c711f.png" 
                alt="Quality Icon" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-pgnavy mb-2">Calidad</h3>
            <p className="text-pgnavy/70 text-justify">
              Nos comprometemos con los más altos estándares en cada etapa de nuestro proceso de producción, sin compromisos.
            </p>
          </div>
          <div className="bg-pglight p-6 rounded-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-pgnavy rounded-full flex items-center justify-center mb-4 mx-auto">
              <img 
                src="/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png" 
                alt="Security Icon" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-pgnavy mb-2">Seguridad</h3>
            <p className="text-pgnavy/70 text-justify">
              La protección de vidas es nuestra máxima prioridad. Cada producto que desarrollamos tiene como objetivo ofrecer la máxima seguridad.
            </p>
          </div>
        </div>
      </div>
    )
    },
    {
    key: 'compromiso',
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <img 
          src="/lovable-uploads/d055ab5c-b090-4146-a85b-e23c97ee1645.png" 
          alt="PG Products Laboratory" 
          className="w-full max-w-xs h-48 object-cover rounded-xl mb-6 mx-auto"
        />
        <h2 className="heading-lg text-pgnavy mb-4">Nuestro Compromiso</h2>
        <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-xl">
          En PG Products, estamos comprometidos con la seguridad, la innovación y la excelencia. No solo fabricamos vidrio blindado; creamos soluciones de protección que salvan vidas.
        </p>
        <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-xl mt-2">
          Nuestro compromiso va más allá de cumplir estándares; buscamos constantemente superarlos, estableciendo nuevos referentes en la industria global de seguridad.
        </p>
        <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-xl mt-2">
          Cada producto que sale de nuestras instalaciones es el resultado de años de investigación, desarrollo meticuloso y pruebas exhaustivas. Es nuestro aporte para un mundo más seguro.
        </p>
      </div>
    )
  }
];

function ValoresMiniCarousel() {
  const valores = [
    {
      titulo: 'Innovación',
      texto: 'Buscamos constantemente nuevas tecnologías y métodos para mejorar nuestros productos y anticiparnos a las necesidades del mercado.'
    },
    {
      titulo: 'Calidad',
      texto: 'Nos comprometemos con los más altos estándares en cada etapa de nuestro proceso de producción, sin compromisos.'
    },
    {
      titulo: 'Seguridad',
      texto: 'La protección de vidas es nuestra máxima prioridad. Cada producto que desarrollamos tiene como objetivo ofrecer la máxima seguridad.'
    }
  ];
  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % valores.length);
    }, 4000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full max-w-md min-h-[220px] flex items-center justify-center">
        {valores.map((valor, idx) => (
          <div
            key={valor.titulo}
            className={`absolute left-0 top-0 w-full h-full transition-all duration-500 ease-in-out 
              ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}
              flex flex-col items-center justify-center bg-pglight rounded-xl shadow p-8`}
          >
            <h3 className="text-2xl font-bold text-pgnavy mb-3">{valor.titulo}</h3>
            <p className="text-pgnavy/70 text-justify text-lg">{valor.texto}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {valores.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border border-pgnavy/40 ${current === idx ? 'bg-pgnavy' : 'bg-pglight'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Ir a valor ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function CardSectionGrid() {
  return (
    <section className="py-0 bg-white w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0">
        {/* Tarjeta 1: Valores que nos Definen */}
        <div className="flex flex-col items-stretch justify-center bg-white rounded-3xl shadow-xl h-[80vh] m-2 overflow-hidden">
          {/* Imagen superior */}
          <div className="h-1/2 w-full flex items-center justify-center bg-gray-100 rounded-t-3xl overflow-hidden">
            <img src="/lovable-uploads/ff6f9f97-d670-45cd-97a0-85bdbb32e648.png" alt="Valores" className="h-full w-full object-contain rounded-t-3xl p-8" />
          </div>
          {/* Título y mini-carrusel */}
          <div className="h-1/2 w-full flex flex-col items-center justify-center px-10 py-8">
            <h2 className="heading-lg text-pgnavy mb-6">Valores que nos Definen</h2>
            <ValoresMiniCarousel />
          </div>
        </div>
        {/* Tarjeta 2: Nuestros Orígenes (CENTRO) */}
        <div className="flex flex-col items-stretch justify-center bg-white rounded-3xl shadow-xl h-[80vh] m-2 overflow-hidden">
          <div className="h-1/2 w-full flex items-center justify-center bg-gray-100 rounded-t-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png" 
              alt="PG Products Headquarters" 
              className="h-full w-full object-cover rounded-t-3xl"
            />
          </div>
          <div className="h-1/2 w-full flex flex-col items-center justify-center px-10 py-8">
            <h2 className="heading-lg text-pgnavy mb-4">Nuestros Orígenes</h2>
            <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-lg">
              Desde nuestra fundación en 2010, PG Products ha estado a la vanguardia de la industria de vidrio blindado, combinando ingeniería alemana de precisión con estándares europeos de excelencia. Lo que comenzó como una visión para revolucionar la seguridad automotriz se ha convertido en una referencia global de innovación y calidad en la fabricación de vidrio blindado premium.
            </p>
          </div>
        </div>
        {/* Tarjeta 3: Nuestro Compromiso */}
        <div className="flex flex-col items-stretch justify-center bg-white rounded-3xl shadow-xl h-[80vh] m-2 overflow-hidden">
          <div className="h-1/2 w-full flex items-center justify-center bg-gray-100 rounded-t-3xl overflow-hidden">
            <img 
              src="/lovable-uploads/d055ab5c-b090-4146-a85b-e23c97ee1645.png" 
              alt="PG Products Laboratory" 
              className="h-full w-full object-cover rounded-t-3xl"
            />
          </div>
          <div className="h-1/2 w-full flex flex-col items-center justify-center px-10 py-8">
            <h2 className="heading-lg text-pgnavy mb-4">Nuestro Compromiso</h2>
            <p className="text-lg text-pgnavy/70 text-justify mx-auto max-w-lg">
              En PG Products, estamos comprometidos con la seguridad, la innovación y la excelencia. No solo fabricamos vidrio blindado; creamos soluciones de protección que salvan vidas. Nuestro compromiso va más allá de cumplir estándares; buscamos constantemente superarlos, estableciendo nuevos referentes en la industria global de seguridad. Cada producto que sale de nuestras instalaciones es el resultado de años de investigación, desarrollo meticuloso y pruebas exhaustivas. Es nuestro aporte para un mundo más seguro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const TimelineCarousel = () => {
  // Datos del timeline basados en la segunda imagen
  const timelineData = [
    {
      year: 1998,
      title: "Se Funda PG Products Barueri (SP)",
      image: "/api/placeholder/1200/600",
      description: "Inicio de operaciones en São Paulo, Brasil. Establecimiento de la primera planta de producción con tecnología de vanguardia para el mercado brasileño."
    },
    {
      year: 1999,
      title: "Patente BRG Steel Glass",
      image: "/api/placeholder/1200/600",
      description: "Desarrollo de tecnología innovadora en vidrio templado. Primera patente registrada que revolucionó la industria del blindaje automotriz."
    },
    {
      year: 2004,
      title: "Miembro Fundador Brasil",
      image: "/api/placeholder/1200/600",
      description: "Participación activa en la industria brasileña como miembro fundador de la asociación de blindadores del país."
    },
    {
      year: 2005,
      title: "Planta PG No.2 Cotia (SP)",
      image: "/api/placeholder/1200/600",
      description: "Expansión de capacidad productiva con la apertura de la segunda planta en Cotia, São Paulo. Certificación Dot.#R12."
    },
    {
      year: 2006,
      title: "Certificación NATO STANAG I y II",
      image: "/api/placeholder/1200/600",
      description: "Obtención de certificación militar de alta seguridad bajo los estándares internacionales NATO STANAG niveles I y II."
    },
    {
      year: 2007,
      title: "QMS ISO 9001:2000",
      image: "/api/placeholder/1200/600",
      description: "Certificación de calidad internacional ISO 9001:2000 otorgada por TUV SUD, garantizando los más altos estándares de producción."
    },
    {
      year: 2008,
      title: "OEM BWM X5 Nivel B4",
      image: "/api/placeholder/1200/600",
      description: "Proveedor oficial de blindaje para BMW X5 con protección nivel B4 contra AK-47, marcando un hito en el blindaje de lujo."
    },
    {
      year: 2009,
      title: "Planta México en Toluca",
      image: "/api/placeholder/1200/600",
      description: "Expansión internacional con la apertura de la planta no.3 PG Products México en Toluca, fortaleciendo presencia en Norteamérica."
    },
    {
      year: 2010,
      title: "Programa BRG Lanzamisil",
      image: "/api/placeholder/1200/600",
      description: "Desarrollo de vehículos militares especializados ASTROS II y UNIMOG 4x4 para las fuerzas armadas brasileñas."
    },
    {
      year: 2011,
      title: "Certificado BRG Brasil",
      image: "/api/placeholder/1200/600",
      description: "Certificación nacional brasileña ABNT NBR 15000, consolidando el liderazgo en el mercado de blindaje nacional."
    },
    {
      year: 2013,
      title: "QMS ISO 9001:2008 México",
      image: "/api/placeholder/1200/600",
      description: "Certificación de calidad ISO 9001:2008 por TUV SUD para las operaciones en México, asegurando estándares internacionales."
    },
    {
      year: 2014,
      title: "Exportación Internacional",
      image: "/api/placeholder/1200/600",
      description: "Inicio de exportaciones a Argentina (RENAR), Francia e Israel, expandiendo la presencia global de PG Products."
    },
    {
      year: 2018,
      title: "OEM BWM X5 (F15)",
      image: "/api/placeholder/1200/600",
      description: "Nueva generación de blindaje para BMW X5 (F15) con niveles de protección VR4 y VR6, liderando en tecnología automotriz."
    },
    {
      year: 2020,
      title: "QMS ISO 9001:2015",
      image: "/api/placeholder/1200/600",
      description: "Actualización de certificaciones ISO 9001:2015 por TUV SUD para Brasil y México, manteniendo los más altos estándares."
    },
    {
      year: 2021,
      title: "Patente Resistencia a Explosivos",
      image: "/api/placeholder/1200/600",
      description: "Innovación revolucionaria con nueva patente BRG con resistencia a explosivos, elevando los estándares de seguridad."
    },
    {
      year: 2023,
      title: "Creación PG NEU",
      image: "/api/placeholder/1200/600",
      description: "Lanzamiento de nueva división PG NEU y productos antidesactivos, marcando el futuro de la protección balística."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? timelineData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === timelineData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = timelineData[currentIndex];

  // Función para obtener los años visibles en el timeline inferior
  const getVisibleYears = () => {
    const visibleCount = 5;
    const years = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % timelineData.length;
      years.push(timelineData[index].year);
    }
    
    return years;
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-4 md:py-6 bg-white flex flex-col">
      {/* Contenedor principal del carrusel */}
      <div className="relative flex-1 flex flex-col">
        {/* Imagen principal */}
        <div className="relative overflow-hidden rounded-lg border border-gray-200 shadow-lg mb-4 flex-1">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-cover"
          />
        </div>

        {/* Timeline inferior */}
        <div className="relative">
          {/* Línea del timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-900"></div>
          
          {/* Contenedor de años y descripción */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-0">
            {/* Sección izquierda: Año principal con descripción */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 lg:gap-12 flex-1">
              {/* Año con flechas */}
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
                <button
                  onClick={goToPrevious}
                  className="text-blue-900 hover:text-blue-700 transition-colors p-1 hover:bg-blue-50 rounded-full"
                  aria-label="Año anterior"
                >
                  <ChevronLeft size={24} className="md:w-7 md:h-7" />
                </button>
                
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
                  {currentItem.year}
                </div>
                
                <button
                  onClick={goToNext}
                  className="text-blue-900 hover:text-blue-700 transition-colors p-1 hover:bg-blue-50 rounded-full"
                  aria-label="Año siguiente"
                >
                  <ChevronRight size={24} className="md:w-7 md:h-7" />
                </button>
              </div>

              {/* Descripción */}
              <div className="pt-2 flex-1 pr-0 md:pr-4 lg:pr-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 md:mb-4 text-center md:text-left">
                  {currentItem.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-justify">
                  {currentItem.description}
                </p>
              </div>
            </div>

            {/* Años secundarios */}
            <div className="flex justify-center lg:justify-end gap-8 md:gap-12 lg:gap-16">
              {getVisibleYears().slice(1).map((year, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-light text-gray-400 mb-1 md:mb-2">
                    {year}
                  </div>
                  <div className="w-px h-2 md:h-3 bg-gray-400 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoriaPage = () => {
  useScrollObserver();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section className="relative w-full h-screen flex flex-col justify-start items-center overflow-hidden">
        <video 
          src="/lovable-uploads/PGREDUCEDVID.mp4" 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full flex flex-col items-center justify-start pt-32">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-center">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 text-center max-w-2xl drop-shadow-md">Una trayectoria de innovación, calidad y excelencia en seguridad</p>
        </div>
        {/* Estadísticas abajo */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto justify-center items-center">
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-72 text-center backdrop-blur-sm">
            <h3 className="text-lg font-bold text-pgnavy mb-2">+ de 100 k</h3>
            <p className="text-pgnavy/70">Empleados</p>
          </div>
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-72 text-center backdrop-blur-sm">
            <h3 className="text-lg font-bold text-pgnavy mb-2">Una misión</h3>
            <p className="text-pgnavy/70">Innovación y protección</p>
          </div>
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-72 text-center backdrop-blur-sm">
            <h3 className="text-lg font-bold text-pgnavy mb-2">20.4 Mmt<sup>1</sup></h3>
            <p className="text-pgnavy/70">CO₂ evitado en 2023</p>
          </div>
        </div>
      </section>

      <CardSectionGrid />

      <section className="py-16 bg-gray-50 w-full">
        <div className="w-full">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-3">Nuestro Recorrido</h2>
            <p className="text-xl text-pgnavy/70 max-w-2xl mx-auto">
              Un viaje de dedicación, innovación continua y compromiso con la excelencia
            </p>
          </div>
          
          <TimelineCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoriaPage;
