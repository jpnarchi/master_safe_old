import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useScrollObserver from '../utils/ScrollObserver';

const TimelineCarousel = () => {
  const timelineData = [
    {
      year: 1998,
      title: "Se Funda PG Products Barueri (SP)",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Inicio de operaciones en São Paulo, Brasil. Establecimiento de la primera planta de producción con tecnología de vanguardia para el mercado brasileño."
    },
    {
      year: 2000,
      title: "Expansión Regional",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Crecimiento en el mercado latinoamericano con nuevos clientes y certificaciones."
    },
    {
      year: 2004,
      title: "Miembro Fundador Brasil",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Participación activa en la industria brasileña como miembro fundador de la asociación de blindadores del país."
    },
    {
      year: 2006,
      title: "Certificación NATO STANAG I y II",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Obtención de certificación militar de alta seguridad bajo los estándares internacionales NATO STANAG niveles I y II."
    },
    {
      year: 2009,
      title: "Planta México en Toluca",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Expansión internacional con la apertura de la planta no.3 PG Products México en Toluca, fortaleciendo presencia en Norteamérica."
    },
    {
      year: 2012,
      title: "Certificado BRG Brasil",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Certificación nacional brasileña ABNT NBR 15000, consolidando el liderazgo en el mercado de blindaje nacional."
    },
    {
      year: 2015,
      title: "Exportación Internacional",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Inicio de exportaciones a Argentina, Francia e Israel, expandiendo la presencia global de PG Products."
    },
    {
      year: 2019,
      title: "QMS ISO 9001:2015",
      image: "/lovable-uploads/tchelao05_RJ.jpg",
      description: "Actualización de certificaciones ISO 9001:2015, manteniendo los más altos estándares."
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

  const getVisibleYears = () => {
    const visibleCount = 8;
    const years = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % timelineData.length;
      years.push(timelineData[index].year);
    }

    return years;
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Imagen principal */}
        <div className="relative overflow-hidden rounded-lg mb-8">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-[334px] object-cover"
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea del timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-pgnavy"></div>

          {/* Contenedor de años y descripción */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            {/* Sección izquierda: Año principal con descripción */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 flex-1">
              {/* Año con flechas */}
              <div className="flex items-center gap-4">
                <button
                  onClick={goToPrevious}
                  className="text-pgnavy hover:text-pgblue transition-colors p-1"
                  aria-label="Año anterior"
                >
                  <ChevronLeft size={32} />
                </button>

                <div className="text-6xl md:text-7xl font-bold text-pgnavy">
                  {currentItem.year}
                </div>

                <button
                  onClick={goToNext}
                  className="text-pgnavy hover:text-pgblue transition-colors p-1"
                  aria-label="Año siguiente"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

              {/* Descripción */}
              <div className="pt-2 flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>
            </div>

            {/* Años secundarios */}
            <div className="flex justify-center lg:justify-end gap-8 md:gap-12">
              {getVisibleYears().slice(1).map((year, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg md:text-xl font-light text-gray-400 mb-2">
                    {year}
                  </div>
                  <div className="w-px h-3 bg-gray-400 mx-auto"></div>
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
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[442px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/empresa-vidrios-pedido-cristales-posee.jpg"
            alt="PG Products as a Company"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* PG Products como compañía Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gray container */}
          <div className="bg-gray-100 rounded-lg p-12 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-8">
              PG Products como compañía
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundada en 1998 en São Paulo, PG Products® es uno de los líderes mundiales en la
              fabricación de cristales de protección balística con diversas aplicaciones. Ha creado
              la tecnología patentada SteelGlass®, un cristal laminado blindado con inserción de acero
              inoxidable.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              En 2007, la empresa pasó a formar parte del selecto grupo de cuatro proveedores globales
              de vidrios blindados para automóviles de los principales fabricantes alemanes. En 2008
              inauguró su planta de fabricación en Norteamérica, en la ciudad de Toluca, México, para
              satisfacer la demanda local y la de los fabricantes alemanes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Actualmente, la empresa cuenta con una completa cartera de soluciones en vidrios blindados
              y ha alcanzado un alto nivel en tecnología, investigando y desarrollando nuevos materiales,
              procesos y sistemas, y atiende, además de los segmentos automovilístico y militar, proyectos
              para la industria aeronáutica, naval y arquitectónica.
            </p>
          </div>

          {/* Two columns text */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Para satisfacer las demandas y exigencias del mercado global, la empresa cuenta con una
                fábrica de vidrios blindados en São Paulo, en el municipio de Cotia, uno de los principales
                polos industriales de la capital. Diseñada con un layout que favorece una alta eficiencia
                en los flujos internos y en el consumo de energía, la planta de 6.200 m² está situada a 3 km
                de la Rodoanel, una importante vía de distribución de la producción industrial del estado de
                São Paulo. En el continente americano, ubicada en la ciudad de Toluca, PG Products® cuenta
                con otra fábrica, PG México, creada para satisfacer las demandas locales y de los fabricantes
                europeos.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                La calidad de los cristales balísticos de PG Products® se somete a rigurosas pruebas para
                cumplir con los requisitos de los clientes, siguiendo las normas y certificaciones nacionales
                e internacionales. Todos los productos que se comercializan reciben un código de seguimiento,
                un identificador único, que permite acceder a toda la información sobre su fabricación,
                desarrollada previamente de acuerdo con las especificaciones de seguridad de cada nivel de blindaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestras Plantas de Producción Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/formulacion-home.png"
            alt="Production Plants Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-6">
              Nuestras Plantas de Producción
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Innovación que une continentes, precisión que define nuestra excelencia.
            </p>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
              En PG Products desarrollamos nuestras soluciones balísticas desde dos centros estratégicos
              de producción: México y Brasil. Ambas plantas integran laboratorios de I+D, líneas
              automatizadas de laminación y control de calidad bajo normas ISO 9001:2015 y NIJ Level III-A/III.
            </p>
          </div>

          {/* Cards de plantas */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card México */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/IMG_4421.jpg"
                  alt="Mexico Flag"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pgnavy/80"></div>
                <div className="absolute bottom-8 left-8">
                  <img
                    src="/lovable-uploads/44604513-e2f1-4816-b14b-13ac8e66c935.png"
                    alt="Mexico Flag"
                    className="w-32 h-32 object-contain mb-4"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-pgnavy mb-4">México</h3>
                <p className="text-gray-700 leading-relaxed">
                  Centro de producción y ensayos balísticos para el mercado norte y centroamericano.
                  Tecnología avanzada, manufactura certificada y soporte técnico especializado.
                </p>
              </div>
            </div>

            {/* Card Brasil */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/lovable-uploads/IMG_4473.jpg"
                  alt="Brasil Flag"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pgnavy/80"></div>
                <div className="absolute bottom-8 left-8">
                  <img
                    src="/lovable-uploads/263ffb06-d243-4ca1-88ab-a68943ddd637.png"
                    alt="Brasil Flag"
                    className="w-32 h-32 object-contain mb-4"
                  />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-pgnavy mb-4">Brasil</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sede principal y laboratorio de innovación. Investigación, ingeniería multicapa y
                  control de calidad de última generación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Gente Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-pgnavy mb-16">
            Nuestra gente
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/RnD_image@2x.png"
                alt="Our People"
                className="w-full h-auto rounded-lg shadow-lg"
              />

              {/* Slider dots */}
              <div className="flex justify-center mt-6 gap-3">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3.5 h-3.5 rounded-full transition-all ${
                      currentSlide === index ? 'bg-pgblue' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                En PG Products, creemos que la verdadera fortaleza de nuestra compañía no está solo
                en la tecnología, sino en las personas que la hacen posible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde ingenieros y técnicos especializados hasta diseñadores y personal operativo,
                todos compartimos un mismo propósito: proteger vidas a través de la excelencia. Su
                conocimiento, precisión y sentido de responsabilidad son el reflejo del ADN PG Products:
                innovación, calidad y confianza.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Recorrido Section - Keep existing timeline */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="w-full">
          <div className="text-center mb-12 px-4 sm:px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-4">
              Nuestro Recorrido
            </h2>
            <p className="text-lg md:text-xl text-pgnavy/70 max-w-3xl mx-auto">
              Un viaje de dedicación, innovación continua y compromiso con la excelencia
            </p>
          </div>

          <TimelineCarousel />
        </div>
      </section>

      {/* Archivos para descargar Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-pgnavy mb-12">
            Archivos para descargar
          </h2>

          <div className="space-y-8">
            {/* Download Item 1 */}
            <div className="flex items-center justify-between border-t border-gray-300 pt-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-pgnavy">
                  Brochure de productos PG Products
                </h3>
              </div>
              <button className="flex items-center justify-center w-16 h-16 bg-pgblue hover:bg-pgblue/90 rounded-lg transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Download Item 2 */}
            <div className="flex items-center justify-between border-t border-gray-300 pt-8">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-pgnavy">
                  Descargue nuestro último informe anual
                </h3>
              </div>
              <button className="flex items-center justify-center w-16 h-16 bg-pgblue hover:bg-pgblue/90 rounded-lg transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="border-t border-gray-300 pt-2"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg_form_contact@2x.png"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-pgnavy/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Protegemos tu seguridad
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Confía en la experiencia y calidad de un líder en seguridad automotriz.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-white text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white rounded-lg"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white rounded-lg"
                />
              </div>

              <div>
                <label className="text-white text-sm mb-2 block">Mensaje</label>
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-white rounded-lg resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-pgnavy rounded-lg transition-colors">
                  Cerrar
                </button>
                <button className="flex-1 px-6 py-3 bg-pgblue hover:bg-pgblue/90 text-white rounded-lg transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoriaPage;
