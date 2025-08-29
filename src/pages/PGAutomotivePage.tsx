import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PGAutomotivePage = () => {
  const [oemImageIndex, setOemImageIndex] = useState(0);
  const [retrofitImageIndex, setRetrofitImageIndex] = useState(0);

  // OEM Success Cases Images
  const oemImages = [
    "/lovable-uploads/steelgalsslogopagev1.jpeg", // Placeholder - replace with actual OEM images
    "/steelglassfotooverview.jpg",
    "/steelglassfototechnology.jpg"
  ];

  // Retrofit Success Cases Images  
  const retrofitImages = [
    "/steelglassfotospecifications.jpg", // Placeholder - replace with actual retrofit images
    "/lovable-uploads/steelglassfotoapplication.jpeg",
    "/steelglassfotocarrusel0.jpg"
  ];

  const nextOemImage = () => {
    setOemImageIndex((prev) => (prev + 1) % oemImages.length);
  };

  const prevOemImage = () => {
    setOemImageIndex((prev) => (prev - 1 + oemImages.length) % oemImages.length);
  };

  const nextRetrofitImage = () => {
    setRetrofitImageIndex((prev) => (prev + 1) % retrofitImages.length);
  };

  const prevRetrofitImage = () => {
    setRetrofitImageIndex((prev) => (prev - 1 + retrofitImages.length) % retrofitImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Section - Full width image */}
      <section className="pt-20 pb-8">
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img 
            src="/steelglassfotocarrusel0.jpg" 
            alt="PG Automotive BRG Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              PG Automotive BRG
            </h1>
          </div>
        </div>
      </section>

      {/* OEM Section - Centered Text */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pgnavy mb-6 sm:mb-8">
            OEM Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Our OEM (Original Equipment Manufacturer) solutions provide comprehensive ballistic protection systems designed specifically for vehicle manufacturers. We work directly with automotive companies to integrate our advanced ballistic glass technologies during the manufacturing process.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Our OEM partnerships ensure seamless integration, maintaining the original vehicle aesthetics while providing superior protection. From initial design consultation to final production, we support manufacturers with cutting-edge ballistic solutions that meet the highest safety standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Factory Integration</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Original Aesthetics</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Quality Assurance</span>
            </div>
          </div>
        </div>
      </section>

      {/* OEM Full Screen Carousel */}
      <section className="relative">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          <img
            src={oemImages[oemImageIndex]}
            alt={`OEM Success Case ${oemImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevOemImage}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 transition-all shadow-lg"
          >
            <ChevronLeft size={24} className="text-pgnavy sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextOemImage}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 transition-all shadow-lg"
          >
            <ChevronRight size={24} className="text-pgnavy sm:w-6 sm:h-6" />
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {oemImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setOemImageIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                  index === oemImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2">
              OEM Success Cases
            </h3>
            <p className="text-sm sm:text-base text-white/90 text-center max-w-2xl mx-auto">
              Showcasing our successful partnerships with automotive manufacturers worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Retrofit Section - Centered Text */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pgnavy mb-6 sm:mb-8">
            Retrofit Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
            Our retrofit solutions enable the integration of advanced ballistic protection into existing vehicles. Whether upgrading fleet vehicles or providing protection for high-value targets, our retrofit systems maintain vehicle functionality while adding superior security features.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            With extensive experience in aftermarket installations, we provide comprehensive retrofit services that include assessment, design, manufacturing, and professional installation. Our solutions are tailored to meet specific threat levels and operational requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Existing Vehicle Integration</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Custom Solutions</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
              <span className="text-sm sm:text-base font-medium text-pgnavy">Professional Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofit Full Screen Carousel */}
      <section className="relative">
        <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
          <img
            src={retrofitImages[retrofitImageIndex]}
            alt={`Retrofit Success Case ${retrofitImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevRetrofitImage}
            className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 transition-all shadow-lg"
          >
            <ChevronLeft size={24} className="text-pgnavy sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextRetrofitImage}
            className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 sm:p-4 transition-all shadow-lg"
          >
            <ChevronRight size={24} className="text-pgnavy sm:w-6 sm:h-6" />
          </button>
          
          {/* Dots indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {retrofitImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setRetrofitImageIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                  index === retrofitImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          {/* Overlay text */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-2">
              Retrofit Success Cases
            </h3>
            <p className="text-sm sm:text-base text-white/90 text-center max-w-2xl mx-auto">
              Transforming existing vehicles with advanced ballistic protection solutions
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGAutomotivePage;