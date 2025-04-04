
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { Milestone } from "../types";
import { ChevronDown } from "lucide-react";

const milestones: Milestone[] = [
  {
    year: "2004",
    title: "Fundación de PG Products",
    description: "Inicia operaciones con el objetivo de desarrollar soluciones innovadoras en vidrio blindado.",
    image: "/lovable-uploads/5371a554-12b5-4e78-88b1-03348546c0e5.png"
  },
  {
    year: "2007",
    title: "Primera Certificación Internacional",
    description: "Obtención de la certificación NIJ-IIIA que valida la resistencia balística superior de nuestros productos.",
    image: "/lovable-uploads/40cfe7f9-b375-46b7-8288-f45cd9946d7f.png"
  },
  {
    year: "2010",
    title: "Desarrollo de SteelGlass",
    description: "Innovación revolucionaria que integra acero en el contorno del vidrio blindado para mayor protección.",
    image: "/lovable-uploads/6db9e596-a8cd-4f5a-97d0-7ff088c4c748.png"
  },
  {
    year: "2015",
    title: "Expansión Internacional",
    description: "Apertura de nuevas plantas y distribución en múltiples países, consolidando la presencia global.",
    image: "/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png"
  },
  {
    year: "2018",
    title: "Lanzamiento de ULTRA",
    description: "Desarrollo de vidrio blindado con resistencia balística extraordinaria en un perfil más delgado.",
    image: "/lovable-uploads/b3344555-f7a7-43fd-8be2-ce26a49a554e.png"
  },
  {
    year: "2022",
    title: "Innovación Continua",
    description: "Introducción de tecnologías avanzadas y procesos de fabricación sostenibles.",
    image: "/lovable-uploads/de5f22cf-7bbd-4cba-a6bc-28027fd75774.png"
  }
];

const HistoriaPage = () => {
  useEffect(() => {
    // Para activar las animaciones al hacer scroll
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          item.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-pgnavy to-pgblue text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Nuestra Historia</h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Descubre cómo PG Products ha revolucionado la industria del vidrio blindado con su constante innovación y compromiso con la calidad superior.
            </p>
            
            <div className="animate-bounce mt-12 text-center">
              <a href="#timeline" className="inline-flex flex-col items-center">
                <span className="mb-2 font-medium">Explorar nuestra trayectoria</span>
                <ChevronDown size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pgnavy mb-4">La Historia de PG Products</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              Nuestro recorrido hacia la excelencia en la fabricación de vidrio blindado de máxima calidad.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl border border-pgnavy/10 bg-white">
            <div className="aspect-w-16 aspect-h-9 relative">
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/UB9eppCeLXE?rel=0"
                title="PG Historia Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gradient-to-b from-white to-pglight/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pgnavy mb-4">Línea de Tiempo</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              Momentos clave en nuestra trayectoria de innovación y excelencia.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pgblue/30"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year} 
                  className={`timeline-item relative flex flex-col md:flex-row items-center opacity-0 transition-all duration-700 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Year bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-pgblue text-white flex items-center justify-center font-bold shadow-lg border-4 border-white">
                    {milestone.year.substring(2)}
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 pt-16 md:pt-0 md:px-12">
                    <div className={`bg-white rounded-xl shadow-xl p-6 md:p-8 ${
                      index % 2 === 0 ? 'md:ml-auto md:mr-10' : 'md:mr-auto md:ml-10'
                    }`}>
                      <h3 className="text-2xl font-bold text-pgnavy mb-2">{milestone.title}</h3>
                      <div className="text-lg mb-3 font-medium text-pgblue">{milestone.year}</div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="md:w-1/2 mt-6 md:mt-0 md:px-12">
                    <div className={`overflow-hidden rounded-xl shadow-xl ${
                      index % 2 === 0 ? 'md:mr-auto md:ml-10' : 'md:ml-auto md:mr-10'
                    }`}>
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Valores Section */}
      <section className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Principios que guían cada aspecto de nuestro trabajo y compromiso con la excelencia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Seguridad</h3>
              <p className="text-white/80 text-center">
                Creemos que la seguridad es un derecho fundamental. Cada producto que desarrollamos tiene como objetivo principal proteger vidas.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Innovación</h3>
              <p className="text-white/80 text-center">
                Constantemente buscamos nuevas tecnologías y procesos para mejorar nuestros productos y ofrecer soluciones cada vez más avanzadas.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-colors">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Calidad</h3>
              <p className="text-white/80 text-center">
                Nos comprometemos a mantener los más altos estándares de calidad en cada etapa del proceso de fabricación y en cada producto que entregamos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-pglight/50 rounded-xl p-8 shadow-xl border border-pgnavy/10">
              <h3 className="text-2xl font-bold text-pgnavy mb-6 flex items-center">
                <div className="w-2 h-8 bg-pgblue mr-4"></div>
                Nuestra Misión
              </h3>
              <p className="text-lg text-pgnavy/80">
                Proporcionar soluciones de seguridad transparente de la más alta calidad que protejan vidas y bienes, mediante la aplicación de tecnología avanzada, procesos innovadores y un compromiso inquebrantable con la excelencia.
              </p>
            </div>
            
            <div className="bg-pglight/50 rounded-xl p-8 shadow-xl border border-pgnavy/10">
              <h3 className="text-2xl font-bold text-pgnavy mb-6 flex items-center">
                <div className="w-2 h-8 bg-pgblue mr-4"></div>
                Nuestra Visión
              </h3>
              <p className="text-lg text-pgnavy/80">
                Ser reconocidos globalmente como el líder indiscutible en soluciones de seguridad transparente, estableciendo nuevos estándares de innovación, calidad y servicio en la industria del vidrio blindado.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="¿Quieres conocer más sobre nosotros?"
        description="Estamos listos para responder a todas sus preguntas y mostrarle cómo nuestros productos pueden satisfacer sus necesidades de seguridad."
        primaryButtonText="Contactar ahora"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver productos"
        secondaryButtonLink="/#neu"
      />
      
      <Footer />
      
      <style jsx>{`
        .timeline-item {
          transform: translateY(40px);
        }
        .timeline-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default HistoriaPage;
