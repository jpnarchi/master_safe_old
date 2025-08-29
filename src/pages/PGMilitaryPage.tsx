import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PGMilitaryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Section - Full width image */}
      <section className="pt-20 pb-8">
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img 
            src="/steelglassfototechnology.jpg" 
            alt="PG Military Applications Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              PG Military Applications
            </h1>
          </div>
        </div>
      </section>

      {/* Descriptive Text Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pgnavy mb-6 sm:mb-8">
            Military-Grade Protection Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Our military applications deliver the highest levels of ballistic protection for defense personnel and equipment. Engineered to withstand extreme combat conditions, our ballistic glass solutions provide superior protection while maintaining operational effectiveness.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            From armored vehicles to military installations, our products meet rigorous military standards and specifications. Each solution is custom-designed to address specific threat levels while ensuring maximum durability and performance in the most demanding environments.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">NIJ Certified Protection</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Multi-Hit Resistance</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Extreme Environment Durability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Table Image Container */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <img 
                src="/steelglassfotospecifications.jpg" 
                alt="Military Applications Specifications"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGMilitaryPage;