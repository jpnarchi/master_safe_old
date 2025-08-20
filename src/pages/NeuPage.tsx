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
      <section className="pt-20 pb-12 sm:pb-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Product Logo y texto azul */}
          <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col md:flex-row items-center md:items-center gap-4 sm:gap-5 md:gap-6">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 bg-gray-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <img 
                src="/lovable-uploads/Neulogo.png" 
                alt="Neu Logo" 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
              />
            </div>
            <div className="text-center md:text-left md:ml-4 lg:ml-6">
              <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-pgblue block leading-tight">Next Generation Ballistic Glass.</span>
            </div>
          </div>
          {/* Texto descriptivo antes de la imagen grande */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-pgnavy text-center md:text-left w-full mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
            NEU representa la nueva generación de protección balística con tecnología de vanguardia y diseño innovador.
          </p>
          {/* Hero Image */}
          <div className="relative h-[300px] sm:h-[350px] md:h-[500px] lg:h-[600px] bg-gray-100 rounded-xl sm:rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/NEUSLIDE.jpeg" 
              alt="Neu Product"
              className="w-full h-full object-cover"
            />
            {/* Franja azul tipo etiqueta con texto */}
            <div className="absolute left-0 bottom-0 w-[95%] sm:w-[90%] h-12 sm:h-14 md:h-16 bg-pgblue flex items-center pl-4 sm:pl-6 md:pl-8" style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'}}>
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Próxima Generación.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center w-full">
            <div className="flex flex-col items-center text-center">
              <img src="/lovable-uploads/icono1Neu.png" alt="Tecnología Avanzada" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mb-2 sm:mb-4 object-contain" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-pgblue font-bold text-center leading-tight">Tecnología Avanzada</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/lovable-uploads/icono2Neu.png" alt="Diseño Innovador" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mb-2 sm:mb-4 object-contain" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-pgblue font-bold text-center leading-tight">Diseño Innovador</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/lovable-uploads/icono3Neu.png" alt="Máxima Protección" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mb-2 sm:mb-4 object-contain" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-pgblue font-bold text-center leading-tight">Máxima Protección</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/lovable-uploads/icono4Neu.png" alt="Futuro del Blindaje" className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 mb-2 sm:mb-4 object-contain" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-pgblue font-bold text-center leading-tight">Futuro del Blindaje</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Tabs */}
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8 border-b border-gray-200 mb-8 sm:mb-12 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-3 sm:pb-4 px-1 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
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
                <p className="text-sm sm:text-base md:text-lg font-normal text-center mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  NEU representa la evolución en protección balística, combinando tecnología de vanguardia con un diseño innovador que establece nuevos estándares en el mercado.
                </p>
                <div className="bg-gray-100 rounded-lg sm:rounded-xl p-1 sm:p-2 flex justify-center items-center h-[250px] sm:h-[300px] md:h-[400px]">
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
                <p className="text-sm sm:text-base md:text-lg font-normal text-center mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
                  NEU utiliza tecnología de nanocompuestos avanzados y sistemas de protección multicapa que proporcionan resistencia balística superior con un peso reducido y mayor durabilidad.
                </p>
                <div className="bg-gray-100 rounded-lg sm:rounded-xl p-1 sm:p-2 flex justify-center items-center h-[250px] sm:h-[300px] md:h-[400px]">
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
                <ul className="text-sm sm:text-base md:text-lg font-normal text-left mb-4 sm:mb-6 leading-relaxed list-disc list-inside px-2 sm:px-0">
                  <li>
                    <span className="font-bold text-pgnavy">NEU</span> incorpora tecnología de <span className="font-bold">nanocompuestos</span> que proporciona protección balística superior con <span className="font-bold">peso reducido</span> y <span className="font-bold">mayor durabilidad</span> que las soluciones tradicionales.
                  </li>
                </ul>
                <div className="bg-gray-100 rounded-lg sm:rounded-xl p-1 sm:p-2 flex justify-center items-center h-[250px] sm:h-[300px] md:h-[400px]">
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
                <ul className="text-sm sm:text-base md:text-lg font-normal text-left mb-4 sm:mb-6 leading-relaxed list-disc list-inside px-2 sm:px-0">
                  <li>
                    NEU es ideal para aplicaciones de alta tecnología, vehículos de próxima generación, instalaciones militares avanzadas y cualquier entorno que requiera la máxima protección con tecnología de vanguardia.
                  </li>
                </ul>
                <div className="bg-gray-100 rounded-lg sm:rounded-xl p-1 sm:p-2 flex justify-center items-center h-[250px] sm:h-[300px] md:h-[400px]">
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
