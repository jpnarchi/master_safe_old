import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NeuPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Overview', 'Technology', 'Specifications', 'Applications'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Product Logo y texto azul */}
          <div className="mb-12 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center">
              <img 
                src="/lovable-uploads/Neulogo.png" 
                alt="Neu Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <span className="text-4xl font-bold text-pgblue block">Next Generation Ballistic Glass.</span>
            </div>
          </div>
          {/* Texto descriptivo antes de la imagen grande */}
          <p className="text-2xl font-semibold text-pgnavy text-justify text-left w-full mb-8">
            NEU representa la nueva generación de protección balística con tecnología de vanguardia y diseño innovador.
          </p>
          {/* Hero Image */}
          <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/NEUSLIDE.jpeg" 
              alt="Neu Product"
              className="w-full h-full object-cover"
            />
            {/* Franja azul tipo etiqueta con texto */}
            <div className="absolute left-0 bottom-0 w-[90%] h-16 bg-pgblue flex items-center pl-8" style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'}}>
              <span className="text-white font-bold text-2xl md:text-3xl">Próxima Generación.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center w-full">
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono1Neu.png" alt="Tecnología Avanzada" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Tecnología Avanzada</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono2Neu.png" alt="Diseño Innovador" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Diseño Innovador</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono3Neu.png" alt="Máxima Protección" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Máxima Protección</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono4Neu.png" alt="Futuro del Blindaje" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Futuro del Blindaje</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === index 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 0 && (
              <>
                {/* TEXTO E IMAGEN PARA OVERVIEW */}
                <p className="text-base md:text-lg font-normal text-center mb-6 leading-snug">
                  NEU representa la evolución en protección balística, combinando tecnología de vanguardia con un diseño innovador que establece nuevos estándares en el mercado.
                </p>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/lovable-uploads/neufotooverview.jpg" 
                    alt="Neu Overview" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            )}
            {activeTab === 1 && (
              <>
                {/* TEXTO E IMAGEN PARA TECHNOLOGY */}
                <p className="text-base md:text-lg font-normal text-center mb-6 leading-snug">
                  NEU utiliza tecnología de nanocompuestos avanzados y sistemas de protección multicapa que proporcionan resistencia balística superior con un peso reducido y mayor durabilidad.
                </p>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/lovable-uploads/neufototechnology.jpg" 
                    alt="Technology" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            )}
            {activeTab === 2 && (
              <>
                {/* TEXTO E IMAGEN PARA SPECIFICATIONS */}
                <ul className="text-base md:text-lg font-normal text-left mb-6 leading-snug list-disc list-inside">
                  <li>
                    <span className="font-bold text-pgnavy">NEU</span> incorpora tecnología de <span className="font-bold">nanocompuestos</span> que proporciona protección balística superior con <span className="font-bold">peso reducido</span> y <span className="font-bold">mayor durabilidad</span> que las soluciones tradicionales.
                  </li>
                </ul>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/lovable-uploads/neufotospecifications.jpg" 
                    alt="Specifications" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            )}
            {activeTab === 3 && (
              <>
                {/* TEXTO E IMAGEN PARA APPLICATIONS */}
                <ul className="text-base md:text-lg font-normal text-left mb-6 leading-snug list-disc list-inside">
                  <li>
                    NEU es ideal para aplicaciones de alta tecnología, vehículos de próxima generación, instalaciones militares avanzadas y cualquier entorno que requiera la máxima protección con tecnología de vanguardia.
                  </li>
                </ul>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/lovable-uploads/neufotoapplication.jpeg" 
                    alt="Applications" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NeuPage;
