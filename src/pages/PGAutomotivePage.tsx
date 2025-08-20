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

      {/* OEM Section - Text Left, Carousel Right */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left: OEM Descriptive Text */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pgnavy mb-3 sm:mb-4 text-center lg:text-left">
                OEM Solutions
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our OEM (Original Equipment Manufacturer) solutions provide comprehensive ballistic protection systems designed specifically for vehicle manufacturers. We work directly with automotive companies to integrate our advanced ballistic glass technologies during the manufacturing process.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our OEM partnerships ensure seamless integration, maintaining the original vehicle aesthetics while providing superior protection. From initial design consultation to final production, we support manufacturers with cutting-edge ballistic solutions that meet the highest safety standards.
              </p>
              <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base font-medium text-pgnavy">Factory Integration</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base font-medium text-pgnavy">Original Aesthetics</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base font-medium text-pgnavy">Quality Assurance</span>
                </div>
              </div>
            </div>

            {/* Right: OEM Success Cases Carousel */}
            <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy text-center">
                OEM Success Cases
              </h3>
              <div className="relative bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden">
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <img
                    src={oemImages[oemImageIndex]}
                    alt={`OEM Success Case ${oemImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Navigation buttons */}
                  <button
                    onClick={prevOemImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 transition-all"
                  >
                    <ChevronLeft size={16} className="text-pgnavy sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextOemImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 transition-all"
                  >
                    <ChevronRight size={16} className="text-pgnavy sm:w-5 sm:h-5" />
                  </button>
                  {/* Dots indicator */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                    {oemImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setOemImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                          index === oemImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retrofit Section - Carousel Left, Text Right */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left: Retrofit Success Cases Carousel */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy text-center">
                Retrofit Success Cases
              </h3>
              <div className="relative bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                  <img
                    src={retrofitImages[retrofitImageIndex]}
                    alt={`Retrofit Success Case ${retrofitImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Navigation buttons */}
                  <button
                    onClick={prevRetrofitImage}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 transition-all"
                  >
                    <ChevronLeft size={16} className="text-pgnavy sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextRetrofitImage}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 transition-all"
                  >
                    <ChevronRight size={16} className="text-pgnavy sm:w-5 sm:h-5" />
                  </button>
                  {/* Dots indicator */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                    {retrofitImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setRetrofitImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                          index === retrofitImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Retrofit Descriptive Text */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pgnavy mb-3 sm:mb-4 text-center lg:text-left">
                Retrofit Solutions
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our retrofit solutions enable the integration of advanced ballistic protection into existing vehicles. Whether upgrading fleet vehicles or providing protection for high-value targets, our retrofit systems maintain vehicle functionality while adding superior security features.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                With extensive experience in aftermarket installations, we provide comprehensive retrofit services that include assessment, design, manufacturing, and professional installation. Our solutions are tailored to meet specific threat levels and operational requirements.
              </p>
              <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base font-medium text-pgnavy">Existing Vehicle Integration</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base font-medium text-pgnavy">Custom Solutions</span>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base font-medium text-pgnavy">Professional Installation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGAutomotivePage;