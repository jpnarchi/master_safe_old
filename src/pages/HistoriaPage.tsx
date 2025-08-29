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
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className="relative w-full flex-1 flex items-center justify-center px-1 overflow-hidden">
        {valores.map((valor, idx) => (
          <div
            key={valor.titulo}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out 
              ${current === idx ? 'opacity-100 z-10 transform scale-100' : 'opacity-0 z-0 pointer-events-none transform scale-95'}
              flex flex-col items-center justify-center bg-gradient-to-br from-pglight to-white rounded-xl shadow-lg border border-gray-200 p-3 overflow-hidden`}
            style={{
              boxShadow: '0 6px 16px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-pgblue rounded-full flex items-center justify-center mb-1.5 sm:mb-2 flex-shrink-0">
              <span className="text-white font-bold text-xs sm:text-sm">{valor.titulo.charAt(0)}</span>
            </div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-pgnavy mb-1.5 sm:mb-2 text-center leading-tight flex-shrink-0">{valor.titulo}</h3>
            <p className="text-pgnavy/80 text-center text-xs sm:text-sm md:text-base leading-snug text-justify overflow-hidden">
              {valor.texto}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2 justify-center flex-shrink-0">
        {valores.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all duration-300 border ${
              current === idx 
                ? 'bg-pgblue border-pgblue scale-110' 
                : 'bg-transparent border-pgnavy/30 hover:border-pgblue/60 hover:scale-105'
            }`}
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
    <section className="w-full">
      {/* Sección 1: Valores que nos Definen */}
      <div className="min-h-screen bg-gray-50 flex items-center relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-16 w-40 h-40 border-2 border-pgblue transform rotate-12"></div>
          <div className="absolute bottom-32 left-16 w-28 h-28 border-2 border-pgblue"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-24 bg-pgblue transform -rotate-12"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-2 bg-pgblue"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido de texto */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-pgblue"></div>
                    <span className="text-pgblue font-bold text-lg tracking-wide">NUESTROS PILARES</span>
                  </div>
                  <div className="w-8 h-8 border-l-4 border-b-4 border-pgblue"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pgnavy leading-tight">
                  Valores que nos <span className="text-pgblue">Definen</span>
                </h2>
              </div>
              
              <div className="space-y-10">
                <div className="relative">
                  <div className="absolute -left-6 -top-4 w-20 h-20 border-2 border-pgblue/20"></div>
                  <div className="bg-white p-8 shadow-lg border-l-4 border-pgblue relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pgblue to-pgnavy flex items-center justify-center">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <h3 className="text-2xl font-bold text-pgnavy">Calidad</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                      Nos comprometemos con los <span className="font-semibold text-pgnavy">más altos estándares</span> en cada etapa de nuestro proceso de producción, sin compromisos.
                    </p>
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-pgblue/30"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -right-6 -top-4 w-16 h-16 bg-pgblue/5"></div>
                  <div className="bg-white p-8 shadow-lg border-l-4 border-pgblue relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pgblue to-pgnavy flex items-center justify-center">
                        <span className="text-white font-bold text-lg">I</span>
                      </div>
                      <h3 className="text-2xl font-bold text-pgnavy">Innovación</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                      Buscamos constantemente <span className="font-semibold text-pgnavy">nuevas tecnologías y métodos</span> para mejorar nuestros productos y anticiparnos a las necesidades del mercado.
                    </p>
                    <div className="absolute bottom-4 right-4 w-4 h-4 bg-pgblue"></div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 -bottom-4 w-18 h-2 bg-pgblue/20"></div>
                  <div className="bg-white p-8 shadow-lg border-l-4 border-pgblue relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pgblue to-pgnavy flex items-center justify-center">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <h3 className="text-2xl font-bold text-pgnavy">Seguridad</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                      La <span className="font-semibold text-pgnavy">protección de vidas</span> es nuestra máxima prioridad. Cada producto que desarrollamos tiene como objetivo ofrecer la máxima seguridad.
                    </p>
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-pgblue/20 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Imagen con diseño mejorado */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-8 -right-8 w-full h-full border-2 border-pgblue/20 z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-pgblue/5 z-0"></div>
              
              <div className="relative h-[450px] lg:h-[650px] bg-gradient-to-br from-pglight to-white shadow-2xl overflow-hidden z-10">
                <img 
                  src="/lovable-uploads/8cd08f36-dc67-46f9-99b5-b79a9a5caf2a.png" 
                  alt="Valores que nos Definen" 
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-pgnavy/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-6">
                  <div className="flex items-center space-x-4 text-pgnavy">
                    <div className="w-12 h-1 bg-pgblue"></div>
                    <span className="font-semibold">PG Ultra - Excelencia en Protección</span>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos para la imagen */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-pgblue z-20"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-pgblue z-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 2: Nuestros Orígenes */}
      <div className="min-h-screen bg-white flex items-center relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-24 left-20 w-36 h-36 border-2 border-pgblue transform -rotate-45"></div>
          <div className="absolute bottom-24 right-20 w-32 h-32 border-2 border-pgblue transform rotate-12"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-28 bg-pgblue transform rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-2 bg-pgblue transform -rotate-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Imagen con diseño mejorado */}
            <div className="order-1 relative">
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-pgblue/20 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 bg-pgblue/5 z-0"></div>
              
              <div className="relative h-[450px] lg:h-[650px] shadow-2xl overflow-hidden z-10">
                <img 
                  src="/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png" 
                  alt="PG Products Headquarters" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pgnavy/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-1 bg-white"></div>
                    <span className="font-semibold">Sede Principal - PG Products</span>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos para la imagen */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-pgblue z-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-pgblue z-20"></div>
            </div>
            
            {/* Contenido de texto */}
            <div className="space-y-8 order-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-pgblue"></div>
                    <span className="text-pgblue font-bold text-lg tracking-wide">NUESTRA HISTORIA</span>
                  </div>
                  <div className="w-8 h-8 border-l-4 border-b-4 border-pgblue"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pgnavy leading-tight">
                  Nuestros <span className="text-pgblue">Orígenes</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pgblue to-transparent"></div>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Desde nuestra fundación en 2010, PG Products ha estado a la <span className="font-semibold text-pgnavy">vanguardia de la industria de vidrio blindado</span>, combinando ingeniería alemana de precisión con estándares europeos de excelencia.
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pgblue/50 to-transparent"></div>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Lo que comenzó como una visión para revolucionar la seguridad automotriz se ha convertido en una <span className="font-semibold text-pgnavy">referencia global de innovación y calidad</span> en la fabricación de vidrio blindado premium.
                  </p>
                </div>
              </div>
              
              {/* Timeline mejorado */}
              <div className="pt-8">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-pgblue/20"></div>
                  <div className="bg-gradient-to-br from-pglight to-white p-8 shadow-lg border-l-4 border-pgblue">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-pgblue mb-2">2010</div>
                        <div className="w-16 h-1 bg-pgblue mx-auto"></div>
                      </div>
                      <div className="h-16 w-px bg-pgblue"></div>
                      <div>
                        <div className="font-bold text-xl text-pgnavy mb-2">Año de Fundación</div>
                        <div className="text-gray-600 text-lg">Inicio de una nueva era en seguridad</div>
                        <div className="text-pgblue font-semibold text-sm mt-1">• Ingeniería alemana • Estándares europeos</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-2 border-pgblue/20 transform rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 3: Nuestro Compromiso */}
      <div className="min-h-screen bg-white flex items-center relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-pgblue transform rotate-45"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-pgblue"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-20 bg-pgblue transform rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-2 bg-pgblue"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Contenido de texto */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-pgblue"></div>
                    <span className="text-pgblue font-bold text-lg tracking-wide">NUESTRA MISIÓN</span>
                  </div>
                  <div className="w-8 h-8 border-l-4 border-b-4 border-pgblue"></div>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-pgnavy leading-tight">
                  Nuestro <span className="text-pgblue">Compromiso</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pgblue to-transparent"></div>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    En PG Products, estamos comprometidos con la seguridad, la innovación y la excelencia. No solo fabricamos vidrio blindado; <span className="font-semibold text-pgnavy">creamos soluciones de protección que salvan vidas.</span>
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pgblue/50 to-transparent"></div>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Nuestro compromiso va más allá de cumplir estándares; buscamos constantemente superarlos, estableciendo <span className="font-semibold text-pgnavy">nuevos referentes en la industria global de seguridad.</span>
                  </p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pgblue/30 to-transparent"></div>
                  <p className="text-gray-700 text-xl leading-relaxed font-light">
                    Cada producto que sale de nuestras instalaciones es el resultado de años de investigación, desarrollo meticuloso y pruebas exhaustivas. <span className="font-semibold text-pgnavy">Es nuestro aporte para un mundo más seguro.</span>
                  </p>
                </div>
              </div>
              
              {/* Estadísticas mejoradas */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-pgblue/20"></div>
                  <div className="bg-gradient-to-br from-pglight to-white p-6 shadow-lg border-l-4 border-pgblue">
                    <div className="text-4xl font-bold text-pgblue mb-2">10M+</div>
                    <div className="text-pgnavy font-semibold">Vidas Protegidas</div>
                    <div className="text-gray-600 text-sm mt-1">A nivel mundial</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-pgblue/10"></div>
                  <div className="bg-gradient-to-br from-pglight to-white p-6 shadow-lg border-l-4 border-pgblue">
                    <div className="text-4xl font-bold text-pgblue mb-2">50+</div>
                    <div className="text-pgnavy font-semibold">Países Alcanzados</div>
                    <div className="text-gray-600 text-sm mt-1">Presencia global</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Imagen con diseño mejorado */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-8 -left-8 w-full h-full border-2 border-pgblue/20 z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-3/4 h-3/4 bg-pgblue/5 z-0"></div>
              
              <div className="relative h-[450px] lg:h-[650px] shadow-2xl overflow-hidden z-10">
                <img 
                  src="/lovable-uploads/d055ab5c-b090-4146-a85b-e23c97ee1645.png" 
                  alt="PG Products Laboratory" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-pgnavy/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-6">
                  <div className="flex items-center space-x-4 text-white">
                    <div className="w-12 h-1 bg-white"></div>
                    <span className="font-semibold">Centro de Investigación y Desarrollo</span>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos para la imagen */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-pgblue z-20"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-pgblue z-20"></div>
            </div>
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
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 py-3 sm:py-4 md:py-6 bg-white flex flex-col">
      {/* Contenedor principal del carrusel */}
      <div className="relative flex-1 flex flex-col">
        {/* Imagen principal */}
        <div className="relative overflow-hidden rounded-md sm:rounded-lg border border-gray-200 shadow-md sm:shadow-lg mb-3 sm:mb-4 flex-1">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] object-cover"
          />
        </div>

        {/* Timeline inferior */}
        <div className="relative">
          {/* Línea del timeline */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-blue-900"></div>
          
          {/* Contenedor de años y descripción */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 sm:gap-4 lg:gap-0">
            {/* Sección izquierda: Año principal con descripción */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 flex-1">
              {/* Año con flechas */}
              <div className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2 md:gap-3">
                <button
                  onClick={goToPrevious}
                  className="text-blue-900 hover:text-blue-700 transition-colors p-0.5 sm:p-1 hover:bg-blue-50 rounded-full"
                  aria-label="Año anterior"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </button>
                
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900">
                  {currentItem.year}
                </div>
                
                <button
                  onClick={goToNext}
                  className="text-blue-900 hover:text-blue-700 transition-colors p-0.5 sm:p-1 hover:bg-blue-50 rounded-full"
                  aria-label="Año siguiente"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </button>
              </div>

              {/* Descripción */}
              <div className="pt-1 sm:pt-2 flex-1 pr-0 sm:pr-2 md:pr-4 lg:pr-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-center sm:text-left leading-tight">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed text-justify">
                  {currentItem.description}
                </p>
              </div>
            </div>

            {/* Años secundarios */}
            <div className="flex justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
              {getVisibleYears().slice(1).map((year, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light text-gray-400 mb-0.5 sm:mb-1 md:mb-2">
                    {year}
                  </div>
                  <div className="w-px h-1.5 sm:h-2 md:h-3 bg-gray-400 mx-auto"></div>
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
        <div className="relative z-10 w-full flex flex-col items-center justify-start pt-20 sm:pt-28 md:pt-32 px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg text-center leading-tight">Nuestra Historia</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 text-center max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl drop-shadow-md px-2 sm:px-0 leading-relaxed">Una trayectoria de innovación, calidad y excelencia en seguridad</p>
        </div>
        {/* Estadísticas abajo */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto justify-center items-center px-4 sm:px-6">
          <div className="bg-white/80 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 w-full sm:w-48 md:w-72 text-center backdrop-blur-sm">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-pgnavy mb-1 sm:mb-2">+ de 100 k</h3>
            <p className="text-xs sm:text-sm md:text-base text-pgnavy/70">Empleados</p>
          </div>
          <div className="bg-white/80 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 w-full sm:w-48 md:w-72 text-center backdrop-blur-sm">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-pgnavy mb-1 sm:mb-2">Una misión</h3>
            <p className="text-xs sm:text-sm md:text-base text-pgnavy/70">Innovación y protección</p>
          </div>
          <div className="bg-white/80 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 w-full sm:w-48 md:w-72 text-center backdrop-blur-sm">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-pgnavy mb-1 sm:mb-2">20.4 Mmt<sup>1</sup></h3>
            <p className="text-xs sm:text-sm md:text-base text-pgnavy/70">CO₂ evitado en 2023</p>
          </div>
        </div>
      </section>

      <CardSectionGrid />

      <section className="py-8 sm:py-12 md:py-16 bg-gray-50 w-full">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 scroll-reveal px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pgnavy mb-2 sm:mb-3 leading-tight">Nuestro Recorrido</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pgnavy/70 max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
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
