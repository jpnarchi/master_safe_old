import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SteelGlassPage = () => {
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
                src="/lovable-uploads/steelgalsslogopagev1.jpeg" 
                alt="SteelGlass Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
              <span className="text-4xl font-bold text-pgblue block">Premium Ballistic Glass with Steel Frame.</span>
            </div>
          </div>
          {/* Texto descriptivo antes de la imagen grande */}
          <p className="text-2xl font-semibold text-pgnavy text-justify text-left w-full mb-8">
            Un cristal blindado que Integra en la formulación un Inserto de Acero en el contorno adicionando protección hasta el borde.
          </p>
          {/* Hero Image */}
          <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src="/steelglassfotocarrusel0.jpg" 
              alt="SteelGlass Product"
              className="w-full h-full object-cover"
            />
            {/* Franja azul tipo etiqueta con texto */}
            <div className="absolute left-0 bottom-0 w-[90%] h-16 bg-pgblue flex items-center pl-8" style={{clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)'}}>
              <span className="text-white font-bold text-2xl md:text-3xl">Resistente hasta el borde.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center w-full">
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono1SteelGlass.png" alt="Evita instalación Overlaps" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Evita instalación Overlaps.</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono2SteelGlass.png" alt="Mantiene Originalidad" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Mantiene Originalidad</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono3SteelGlass.png" alt="Acabado premium" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Acabado premium</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/lovable-uploads/icono4SteelGlass.png" alt="Acero Inoxidable Integrado" className="w-28 h-28 mb-4 object-contain" />
              <span className="text-base md:text-lg text-pgblue font-bold text-center">Acero Inoxidable Integrado</span>
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
                  {/* Reemplaza este texto por el de Overview */}
                  Se trata de un vidrio blindado con <span className="font-semibold">acero insertado</span> en el bloque balístico, dando estructura y resistencia en los bordes eliminando la necesidad del overlap tradicional; manteniendo la <span className="font-semibold">originalidad</span> del vehículo y facilitando el trabajo de las empresas de blindaje.
                </p>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  {/* Reemplaza la ruta de la imagen por la de Overview */}
                  <img 
                    src="/steelglassfotooverview.jpg" 
                    alt="SteelGlass Overview" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </>
            )}
            {activeTab === 1 && (
              <>
                {/* TEXTO E IMAGEN PARA TECHNOLOGY */}
                <p className="text-base md:text-lg font-normal text-center mb-6 leading-snug">
                  Constituye un refuerzo estructural y minimiza rupturas en el cierre continuo de las puertas, Bajo agresión, SteelGlass apoya el bloque balístico y evita que se desprenda de la lámina externa y caiga en el interior del vehículo alcanzando a sus ocupantes.
                </p>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/steelglassfototechnology.jpg" 
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
                    <span className="font-bold text-pgnavy">Steel Glass</span> incorpora un inserto de protección balística adicional en los niveles de armas cortas (<span className="font-bold">hasta NIJ IIIA y B4</span>) y un refuerzo estructural y de apoyo al contorno del cristal en niveles superiores y de armas largas. (<span className="font-bold">NIJ IIII, DN6, DN7 Y OTROS</span>)
                  </li>
                </ul>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/steelglassfotospecifications.jpg" 
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
                    SteelGlass es aplicable en cualquier vidrio blindado bien sea para proteccion balistic del borde o para refuerzo estructural, en aplicaciones automotriz, militar o marina
                  </li>
                </ul>
                <div className="bg-gray-100 rounded-xl p-2 flex justify-center items-center" style={{height: '400px'}}>
                  <img 
                    src="/lovable-uploads/steelglassfotoapplication.jpeg" 
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

export default SteelGlassPage;
