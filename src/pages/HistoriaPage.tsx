import React from 'react';
import PageLayout from '../components/PageLayout';
import { Timeline } from '@/components/Timeline';
import { Milestone } from '@/types';

const HistoriaPage = () => {
  const milestones: Milestone[] = [
    {
      year: "2010",
      title: "Fundación de PG Products",
      description: "Inicio de operaciones con enfoque en vidrios blindados de alta calidad para el sector automotriz de lujo.",
      image: "/lovable-uploads/b2b2805b-dab6-48ae-869c-0f8a9b51cda0.png"
    },
    {
      year: "2012",
      title: "Primera Planta de Producción",
      description: "Inauguración de nuestra primera planta de producción especializada con tecnología alemana de última generación.",
      image: "/lovable-uploads/5371a554-12b5-4e78-88b1-03348546c0e5.png"
    },
    {
      year: "2015",
      title: "Certificación ISO 9001",
      description: "Obtención de la certificación ISO 9001 para nuestro sistema de gestión de calidad, garantizando procesos estandarizados.",
      image: "/lovable-uploads/079eba18-1c78-4ae5-935f-5f9415053368.png"
    },
    {
      year: "2017",
      title: "Lanzamiento de NEU Premium",
      description: "Desarrollo y lanzamiento de nuestra línea insignia NEU Premium con resistencia balística superior.",
      image: "/lovable-uploads/74356578-08a7-4a0d-ad9b-ef8f2083fe81.png"
    },
    {
      year: "2020",
      title: "Expansión Internacional",
      description: "Apertura de oficinas de representación en Europa y Norteamérica, consolidando nuestra presencia global.",
      image: "/lovable-uploads/82e0c0e3-aaad-4d7f-aa32-398f7c44bafe.png"
    },
    {
      year: "2023",
      title: "Innovación ULTRA",
      description: "Lanzamiento de la tecnología ULTRA, revolucionando el mercado con vidrio blindado de menor espesor y máxima resistencia.",
      image: "/lovable-uploads/c55693d5-aada-4a4c-8c5b-1d29642483b9.png"
    }
  ];

  return (
    <PageLayout 
      title="Nuestra Historia" 
      subtitle="Una trayectoria de innovación, calidad y excelencia en seguridad"
      darkMode={true}
    >
      <section className="relative w-full h-screen flex flex-col justify-end items-center overflow-hidden">
        <video 
          src="/PGREDUCEDVID.mp4" 
          className="absolute inset-0 w-full h-full object-cover" 
          autoPlay 
          muted 
          loop 
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center absolute top-0 left-0 pt-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-center">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 text-center max-w-2xl drop-shadow-md">Una trayectoria de innovación, calidad y excelencia en seguridad</p>
        </div>
        <div className="relative z-10 w-full flex flex-col md:flex-row gap-6 max-w-4xl justify-center items-center mb-12">
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-72 text-center">
            <h3 className="text-lg font-bold text-pgnavy mb-2">+ de 100 k</h3>
            <p className="text-pgnavy/70">Empleados</p>
          </div>
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-72 text-center">
            <h3 className="text-lg font-bold text-pgnavy mb-2">Una misión</h3>
            <p className="text-pgnavy/70">Innovación y protección</p>
          </div>
          <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-72 text-center">
            <h3 className="text-lg font-bold text-pgnavy mb-2">20.4 Mmt<sup>1</sup></h3>
            <p className="text-pgnavy/70">CO₂ evitado en 2023</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal">
              <h2 className="heading-lg text-pgnavy mb-4">Nuestros Orígenes</h2>
              <p className="text-lg text-pgnavy/70">
                Desde nuestra fundación en 2010, PG Products ha estado a la vanguardia de la industria de vidrio blindado, combinando ingeniería alemana de precisión con estándares europeos de excelencia.
              </p>
              <p className="text-lg text-pgnavy/70">
                Lo que comenzó como una visión para revolucionar la seguridad automotriz se ha convertido en una referencia global de innovación y calidad en la fabricación de vidrio blindado premium.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl scroll-reveal">
              <img 
                src="/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png" 
                alt="PG Products Headquarters" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-3">Nuestro Recorrido</h2>
            <p className="text-xl text-pgnavy/70 max-w-2xl mx-auto">
              Un viaje de dedicación, innovación continua y compromiso con la excelencia
            </p>
          </div>
          
          <Timeline milestones={milestones} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-3">Valores que nos Definen</h2>
            <p className="text-xl text-pgnavy/70 max-w-2xl mx-auto">
              Principios fundamentales que guían cada aspecto de nuestro trabajo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pglight p-6 rounded-xl scroll-reveal">
              <div className="w-16 h-16 bg-pgnavy rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="/lovable-uploads/ff6f9f97-d670-45cd-97a0-85bdbb32e648.png" 
                  alt="Innovation Icon" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-pgnavy">Innovación</h3>
              <p className="text-center text-pgnavy/70">
                Buscamos constantemente nuevas tecnologías y métodos para mejorar nuestros productos y anticiparnos a las necesidades del mercado.
              </p>
            </div>
            
            <div className="bg-pglight p-6 rounded-xl scroll-reveal" style={{animationDelay: "0.2s"}}>
              <div className="w-16 h-16 bg-pgnavy rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="/lovable-uploads/f3db5a79-c8a9-46fc-9660-a991756c711f.png" 
                  alt="Quality Icon" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-pgnavy">Calidad</h3>
              <p className="text-center text-pgnavy/70">
                Nos comprometemos con los más altos estándares en cada etapa de nuestro proceso de producción, sin compromisos.
              </p>
            </div>
            
            <div className="bg-pglight p-6 rounded-xl scroll-reveal" style={{animationDelay: "0.4s"}}>
              <div className="w-16 h-16 bg-pgnavy rounded-full flex items-center justify-center mb-4 mx-auto">
                <img 
                  src="/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png" 
                  alt="Security Icon" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-pgnavy">Seguridad</h3>
              <p className="text-center text-pgnavy/70">
                La protección de vidas es nuestra máxima prioridad. Cada producto que desarrollamos tiene como objetivo ofrecer la máxima seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pgnavy text-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl scroll-reveal">
              <img 
                src="/lovable-uploads/d055ab5c-b090-4146-a85b-e23c97ee1645.png" 
                alt="PG Products Laboratory" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6 scroll-reveal">
              <h2 className="heading-lg mb-4">Nuestro Compromiso</h2>
              <p className="text-lg text-white/80">
                En PG Products, estamos comprometidos con la seguridad, la innovación y la excelencia. No solo fabricamos vidrio blindado; creamos soluciones de protección que salvan vidas.
              </p>
              <p className="text-lg text-white/80">
                Nuestro compromiso va más allá de cumplir estándares; buscamos constantemente superarlos, estableciendo nuevos referentes en la industria global de seguridad.
              </p>
              <p className="text-lg text-white/80">
                Cada producto que sale de nuestras instalaciones es el resultado de años de investigación, desarrollo meticuloso y pruebas exhaustivas. Es nuestro aporte para un mundo más seguro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HistoriaPage;
