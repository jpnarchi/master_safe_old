import { Shield, Target, Eye, Users, Award, Star } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

const aboutUsVideo = "/lovable-uploads/PGREDUCEDVID.mp4";
const aboutUsImage = "/lovable-uploads/IMG_4473.jpg";
const carouselSlides = [
  {
    img: "/lovable-uploads/IMG_4544.jpg",
    text: "Innovación y calidad en cada proyecto."
  },
  {
    img: "/lovable-uploads/IMG_4421.jpg",
    text: "Protección y tecnología europea."
  },
  {
    img: "/lovable-uploads/IMG_4473.jpg",
    text: "Equipo experto y procesos certificados."
  }
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mision');
  const [current, setCurrent] = useState(0);

  const tabs = [
    { id: 'mision', icon: Target, title: 'Nuestra Misión' },
    { id: 'vision', icon: Eye, title: 'Nuestra Visión' },
    { id: 'valores', icon: Shield, title: 'Valores' },
    { id: 'certificaciones', icon: Award, title: 'Certificaciones' }
  ];

  const content = {
    mision: {
      description: "Proporcionar soluciones de seguridad transparente de la más alta calidad, utilizando tecnología europea de vanguardia para proteger vidas.",
      icon: Target,
      color: "text-pgblue"
    },
    vision: {
      description: "Ser referentes globales en innovación y calidad en la industria del vidrio blindado automotriz.",
      icon: Eye,
      color: "text-pgnavy"
    },
    valores: {
      items: [
        { text: "Excelencia en calidad", icon: Star },
        { text: "Innovación continua", icon: Star },
        { text: "Compromiso con la seguridad", icon: Star },
        { text: "Servicio al cliente superior", icon: Star }
      ],
      icon: Shield,
      color: "text-pgblue"
    },
    certificaciones: {
      description: "Cumplimos con los más altos estándares internacionales de calidad y seguridad en la industria del vidrio blindado.",
      icon: Award,
      color: "text-pgnavy"
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev < carouselSlides.length - 1 ? prev + 1 : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goTo = idx => setCurrent(idx);
  const next = () => setCurrent((prev) => (prev < carouselSlides.length - 1 ? prev + 1 : 0));
  const prev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : carouselSlides.length - 1));

  return (
    <section id="about-us" className="w-full min-h-screen bg-pglight relative flex flex-col gap-0">
      {/* Video Container con título */}
      <div className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-black">
        <video 
          src={aboutUsVideo}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">About Us</h2>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Imagen full screen con descripción */}
      <div className="relative w-full h-[70vh] flex items-end justify-center">
        <img 
          src={aboutUsImage} 
          alt="About Us Factory" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="relative z-10 bg-black/60 text-white p-8 rounded-t-2xl max-w-2xl mb-8 shadow-xl">
          <p className="text-xl md:text-2xl font-medium text-center">
            Somos líderes en innovación, calidad y protección en la industria del vidrio blindado automotriz.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Carrusel full screen con texto sobre imágenes */}
      <div className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {carouselSlides.map((slide, idx) => (
          <div
            key={slide.img}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img 
              src={slide.img} 
              alt={slide.text} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pb-20">
              <div className="bg-white/80 text-pgnavy px-8 py-6 rounded-2xl shadow-xl max-w-2xl text-center text-2xl font-semibold">
                {slide.text}
              </div>
            </div>
            {/* Áreas invisibles para navegación manual */}
            {current > 0 && (
              <div
                className="absolute left-0 top-0 w-1/3 h-full z-20 cursor-pointer"
                onClick={prev}
              />
            )}
            {current < carouselSlides.length - 1 && (
              <div
                className="absolute right-0 top-0 w-1/3 h-full z-20 cursor-pointer"
                onClick={next}
              />
            )}
          </div>
        ))}
        {/* Dots indicadores */}
        <div className="absolute left-0 right-0 bottom-8 flex justify-center gap-2 z-30">
          {carouselSlides.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === idx ? 'bg-pgblue scale-110' : 'bg-white/60 hover:bg-white/80'
              }`}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-pgnavy/70 max-w-3xl mx-auto">
            Liderando la innovación en vidrio blindado automotriz
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-white shadow-lg scale-105' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            >
              <tab.icon className={`w-8 h-8 mb-3 ${activeTab === tab.id ? 'text-pgnavy' : 'text-pgnavy/70'}`} />
              <span className={`font-medium ${activeTab === tab.id ? 'text-pgnavy' : 'text-pgnavy/70'}`}>
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            {React.createElement(content[activeTab].icon, { 
              className: `w-8 h-8 ${content[activeTab].color}` 
            })}
            <h3 className="text-2xl font-bold text-pgnavy">{tabs.find(t => t.id === activeTab)?.title}</h3>
          </div>

          {activeTab === 'valores' ? (
            <div className="grid md:grid-cols-2 gap-6">
              {content.valores.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-pglight/30 rounded-lg">
                  <item.icon className="w-5 h-5 text-pgnavy" />
                  <span className="text-pgnavy/80">{item.text}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-pgnavy/70 leading-relaxed">
              {content[activeTab].description}
            </p>
          )}
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Users className="w-8 h-8 text-pgblue" />
              <h4 className="text-xl font-bold text-pgnavy">Equipo Experto</h4>
            </div>
            <p className="text-pgnavy/70">
              Nuestro equipo está compuesto por profesionales altamente capacitados en ingeniería y seguridad.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-pgblue" />
              <h4 className="text-xl font-bold text-pgnavy">Tecnología Avanzada</h4>
            </div>
              <p className="text-pgnavy/70">
              Utilizamos tecnología de punta y procesos de fabricación de última generación.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-pgblue" />
              <h4 className="text-xl font-bold text-pgnavy">Reconocimiento Global</h4>
            </div>
            <p className="text-pgnavy/70">
              Nuestros productos son reconocidos y utilizados en más de 30 países alrededor del mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
