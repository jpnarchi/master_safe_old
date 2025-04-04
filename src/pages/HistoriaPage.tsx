
import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Milestone } from '../types'; 
import { ChevronRight, ChevronLeft } from 'lucide-react';

const HistoriaPage = () => {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  
  const milestones: Milestone[] = [
    {
      year: '2005',
      title: 'Fundación de PG Products',
      description: 'Los fundadores establecieron la empresa con la visión de crear vidrio blindado de alta calidad para el mercado automotriz.',
      image: '/lovable-uploads/f5c6e475-3162-4ca5-b907-7e8d88c03f2e.png'
    },
    {
      year: '2008',
      title: 'Primer Cristal Certificado',
      description: 'Obtuvimos nuestra primera certificación internacional para nuestros productos de vidrio blindado.',
      image: '/lovable-uploads/c55693d5-aada-4a4c-8c5b-1d29642483b9.png'
    },
    {
      year: '2012',
      title: 'Expansión Internacional',
      description: 'Comenzamos a exportar a mercados internacionales, llevando la calidad de PG Products a nuevos territorios.',
      image: '/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png'
    },
    {
      year: '2015',
      title: 'Lanzamiento de SteelGlass',
      description: 'Introducimos nuestra revolucionaria tecnología SteelGlass, que proporciona protección hasta el borde.',
      image: '/lovable-uploads/82e0c0e3-aaad-4d7f-aa32-398f7c44bafe.png'
    },
    {
      year: '2018',
      title: 'Certificación ISO 9001',
      description: 'Nuestros procesos de calidad fueron certificados bajo los estándares internacionales ISO 9001.',
      image: '/lovable-uploads/5371a554-12b5-4e78-88b1-03348546c0e5.png'
    },
    {
      year: '2020',
      title: 'Innovación NEU',
      description: 'Lanzamos nuestra línea premium NEU, combinando ingeniería alemana con los más altos estándares de seguridad.',
      image: '/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png'
    },
    {
      year: '2023',
      title: 'ULTRA: Nueva Generación',
      description: 'Presentamos ULTRA, nuestra tecnología de vidrio blindado más avanzada con desempeño balístico superior.',
      image: '/lovable-uploads/de5f22cf-7bbd-4cba-a6bc-28027fd75774.png'
    },
  ];
  
  // Set the first milestone as active by default when component mounts
  useState(() => {
    if (milestones.length > 0) {
      setActiveYear(milestones[0].year);
    }
  });
  
  const activeMilestone = milestones.find(milestone => milestone.year === activeYear);
  
  const handlePrevious = () => {
    const currentIndex = milestones.findIndex(milestone => milestone.year === activeYear);
    if (currentIndex > 0) {
      setActiveYear(milestones[currentIndex - 1].year);
    }
  };
  
  const handleNext = () => {
    const currentIndex = milestones.findIndex(milestone => milestone.year === activeYear);
    if (currentIndex < milestones.length - 1) {
      setActiveYear(milestones[currentIndex + 1].year);
    }
  };
  
  return (
    <PageLayout>
      <div className="pt-28 px-4 pb-20">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex flex-col justify-center items-center mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-pgnavy/90 z-0"></div>
          <div 
            className="absolute inset-0 z-0 opacity-30 bg-repeat" 
            style={{ 
              backgroundImage: 'url(/lovable-uploads/f3db5a79-c8a9-46fc-9660-a991756c711f.png)', 
              backgroundSize: '200px'
            }}
          ></div>
          
          <div className="text-center relative z-10 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Nuestra Historia</h1>
            <div className="w-24 h-1 bg-pgblue mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-white/90">
              Desde nuestra fundación, PG Products ha estado a la vanguardia en el desarrollo de vidrio blindado de alta calidad para el mercado automotriz. Descubra cómo hemos evolucionado a lo largo de los años.
            </p>
          </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pgnavy mb-4">
              Trayectoria de Excelencia e Innovación
            </h2>
            <div className="w-24 h-1 bg-pgblue mx-auto mb-6"></div>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              Nuestro compromiso con la calidad y la innovación ha definido nuestro camino a través de los años. Explore los momentos clave que han moldeado nuestra historia.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Track */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-pgblue/30 w-4/5 mx-auto top-6 rounded-full"></div>
            
            {/* Timeline Points */}
            <div className="flex justify-between mb-16 relative px-4 md:px-0 max-w-4xl mx-auto">
              {milestones.map((milestone) => (
                <button
                  key={milestone.year}
                  onClick={() => setActiveYear(milestone.year)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
                    activeYear === milestone.year 
                      ? 'bg-pgblue border-pgnavy text-white scale-110' 
                      : 'bg-white border-pgblue/50 text-pgnavy hover:bg-pglight'
                  }`}
                >
                  <span className="text-sm font-bold">{milestone.year}</span>
                </button>
              ))}
            </div>
            
            {/* Active Milestone Content */}
            {activeMilestone && (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="text-sm text-pgblue font-semibold mb-2">{activeMilestone.year}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-pgnavy mb-4">{activeMilestone.title}</h3>
                    <p className="text-lg text-pgnavy/70 mb-6">{activeMilestone.description}</p>
                    
                    <div className="flex space-x-4">
                      <button 
                        onClick={handlePrevious}
                        disabled={activeYear === milestones[0].year}
                        className="p-2 rounded-full bg-pgnavy/10 hover:bg-pgnavy/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Anterior hito"
                      >
                        <ChevronLeft className="h-6 w-6 text-pgnavy" />
                      </button>
                      <button 
                        onClick={handleNext}
                        disabled={activeYear === milestones[milestones.length - 1].year}
                        className="p-2 rounded-full bg-pgnavy/10 hover:bg-pgnavy/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Siguiente hito"
                      >
                        <ChevronRight className="h-6 w-6 text-pgnavy" />
                      </button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img 
                      src={activeMilestone.image} 
                      alt={activeMilestone.title} 
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Mission and Vision Section */}
        <section className="py-16 bg-pglight/50 rounded-3xl my-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-pgnavy/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pgnavy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-2">Nuestra Misión</h3>
                  <div className="w-12 h-1 bg-pgblue mb-4"></div>
                </div>
                <p className="text-lg text-pgnavy/70">
                  Proporcionar la mayor protección y seguridad a través de nuestro vidrio blindado de alta calidad, con un compromiso inquebrantable hacia la innovación técnica y la excelencia en el servicio al cliente.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-pgnavy/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pgnavy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-pgnavy mb-2">Nuestra Visión</h3>
                  <div className="w-12 h-1 bg-pgblue mb-4"></div>
                </div>
                <p className="text-lg text-pgnavy/70">
                  Ser reconocidos globalmente como líderes indiscutibles en tecnología de vidrio blindado, estableciendo nuevos estándares en la industria y expandiendo constantemente los límites de lo que es posible en términos de protección, calidad y diseño.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pgnavy mb-4">
              Nuestros Valores
            </h2>
            <div className="w-24 h-1 bg-pgblue mx-auto mb-6"></div>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              Los principios fundamentales que guían nuestra operación y toma de decisiones cada día.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pgnavy/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pgnavy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pgnavy mb-2">Seguridad sin Compromiso</h3>
              <p className="text-pgnavy/70">
                La protección de vidas humanas es nuestra principal prioridad. No hacemos concesiones cuando se trata de la seguridad de nuestros productos.
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pgnavy/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pgnavy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pgnavy mb-2">Innovación Constante</h3>
              <p className="text-pgnavy/70">
                Buscamos continuamente mejorar nuestros productos y procesos, impulsando la tecnología de vidrio blindado hacia nuevos horizontes.
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-pgnavy/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pgnavy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pgnavy mb-2">Compromiso con Clientes</h3>
              <p className="text-pgnavy/70">
                Nuestros clientes están en el centro de todo lo que hacemos. Nos esforzamos por superar sus expectativas en cada interacción.
              </p>
            </div>
          </div>
        </section>
        
        {/* Video Section */}
        <section className="py-16 bg-pgnavy text-white rounded-3xl overflow-hidden relative">
          <div 
            className="absolute inset-0 z-0 opacity-10 bg-repeat" 
            style={{ 
              backgroundImage: 'url(/lovable-uploads/f3db5a79-c8a9-46fc-9660-a991756c711f.png)', 
              backgroundSize: '200px'
            }}
          ></div>
          
          <div className="container mx-auto max-w-7xl px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestra Historia en Video
              </h2>
              <div className="w-24 h-1 bg-pgblue mx-auto mb-6"></div>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Conozca más sobre el camino que hemos recorrido y cómo hemos evolucionado a lo largo de los años para convertirnos en líderes de la industria.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/UB9eppCeLXE" 
                  title="Historia de PG Products" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        <style>
          {`.aspect-w-16 {
            position: relative;
            padding-bottom: 56.25%;
          }
          .aspect-h-9 {
            position: relative;
          }
          .aspect-w-16 > * {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }`}
        </style>
      </div>
    </PageLayout>
  );
};

export default HistoriaPage;
