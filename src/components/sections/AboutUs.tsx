import { Shield, Target, Eye, Users, Award, Star } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mision');

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

  return (
    <section id="about-us" className="py-20 bg-pglight relative">
      {/* Pattern overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-70"
        />
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
