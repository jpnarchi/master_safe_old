import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Target, Award, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoSection from '../components/VideoSection';

const PGBallisticsPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  // Carousel images
  const carouselImages = [
    "/lovable-uploads/vidrio_disparos.avif",
    "/lovable-uploads/empresa-vidrios-pedido-cristales-posee.jpg",
    "/steelglassfotocarrusel0.jpg",
    "/steelglassfototechnology.jpg",
    "/steelglassfotooverview.jpg"
  ];

  const tabs = ['Standards', 'Testing', 'Certifications', 'Applications'];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Banner Section */}
      <section className="pt-20">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src="/lovable-uploads/vidrio_disparos.avif" 
            alt="PG Ballistics Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  PG Ballistics
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                  Superior Ballistic Protection through Advanced Technology and Rigorous Testing
                </p>
                <div className="w-20 h-1 bg-pgblue mb-8"></div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <Shield size={20} className="text-white" />
                    <span className="font-semibold">NIJ Certified</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <Award size={20} className="text-white" />
                    <span className="font-semibold">Military Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descriptive Text Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pgnavy mb-4 sm:mb-6">
              Advanced Ballistic Solutions
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-1 bg-pgblue mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4 sm:px-0">
              Nuestros productos de vidrio balístico están diseñados y fabricados bajo los más rigurosos estándares internacionales, 
              ofreciendo protección excepcional contra diversas amenazas. Cada panel es sometido a exhaustivas pruebas de resistencia 
              y calidad para garantizar el máximo nivel de seguridad.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pgblue to-pgnavy rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy mb-2 sm:mb-3">NIJ III-A Certified</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Certificación bajo los estándares más exigentes del National Institute of Justice
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pgblue to-pgnavy rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy mb-2 sm:mb-3">Multi-Threat Protection</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Resistencia comprobada contra múltiples calibres y tipos de proyectiles
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pgblue to-pgnavy rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy mb-2 sm:mb-3">Advanced Technology</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Tecnología multi-capa de vanguardia para máximo rendimiento balístico
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pgblue to-pgnavy rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award size={24} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy mb-2 sm:mb-3">Quality Assurance</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                Rigurosos controles de calidad y pruebas exhaustivas en cada producto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Carousel Section */}
      <section className="py-0 bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pgnavy mb-3 sm:mb-4">
              Testing & Certification Gallery
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4 sm:px-0">
              Witness the rigorous testing processes and certification standards that validate our ballistic protection solutions
            </p>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
            <img
              src={carouselImages[currentImageIndex]}
              alt={`Ballistics Testing ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700"
            />
            
            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 transition-all shadow-lg z-10 backdrop-blur-sm"
            >
              <ChevronLeft size={16} className="text-pgnavy sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 md:p-4 transition-all shadow-lg z-10 backdrop-blur-sm"
            >
              <ChevronRight size={16} className="text-pgnavy sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Enhanced overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-3xl">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                    Rigorous Testing Standards
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-3 sm:mb-4 md:mb-6 leading-relaxed">
                    Every ballistic glass panel undergoes comprehensive testing protocols to ensure maximum protection and reliability in critical situations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 text-white/90">
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                      <span className="font-medium text-xs sm:text-sm md:text-base">NIJ Level III-A</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                      <span className="font-medium text-xs sm:text-sm md:text-base">Multi-hit Capability</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full flex-shrink-0"></div>
                      <span className="font-medium text-xs sm:text-sm md:text-base">Temperature Tested</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Tabs Navigation */}
          <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 border-b border-gray-200 mb-8 sm:mb-12 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-3 sm:pb-4 px-1 sm:px-2 text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === index 
                    ? 'text-pgnavy border-b-2 border-pgblue' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 0 && (
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4 sm:mb-6">International Standards Compliance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-3 sm:mb-4">NIJ Standards</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>• NIJ Level II: 9mm & .40 S&W</li>
                      <li>• NIJ Level IIIA: .357 SIG & .44 Magnum</li>
                      <li>• NIJ Level III: 7.62mm NATO</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-3 sm:mb-4">European Standards</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>• EN 1063: B4-NS to B7-NS</li>
                      <li>• EN 1522: FB4 to FB7</li>
                      <li>• EN 356: P1A to P5A</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4 sm:mb-6">Advanced Testing Procedures</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                  Our comprehensive testing methodology ensures every ballistic glass panel meets the highest safety standards through rigorous evaluation processes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                    <h4 className="font-semibold text-pgnavy mb-2 text-sm sm:text-base">Ballistic Impact Testing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Multiple projectile impacts at specified velocities and distances</p>
                  </div>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                    <h4 className="font-semibold text-pgnavy mb-2 text-sm sm:text-base">Environmental Testing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Temperature, humidity, and UV resistance validation</p>
                  </div>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg sm:rounded-xl sm:col-span-2 lg:col-span-1">
                    <h4 className="font-semibold text-pgnavy mb-2 text-sm sm:text-base">Durability Assessment</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Long-term performance and structural integrity analysis</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4 sm:mb-6">Certifications & Approvals</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-left">
                    <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-3 sm:mb-4">Government Certifications</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>• U.S. Department of Justice NIJ</li>
                      <li>• European CEN Standards</li>
                      <li>• Military Specification Compliance</li>
                      <li>• NATO STANAG Approved</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-3 sm:mb-4">Quality Certifications</h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                      <li>• ISO 9001:2015 Quality Management</li>
                      <li>• ISO 14001 Environmental Standards</li>
                      <li>• Third-party Laboratory Verified</li>
                      <li>• Continuous Quality Monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4 sm:mb-6">Application Areas</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pgblue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Shield size={16} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-semibold text-pgnavy mb-2 text-sm sm:text-base">Automotive</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Armored vehicles, VIP transport, security applications</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pgblue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Target size={16} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-semibold text-pgnavy mb-2 text-sm sm:text-base">Military</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Tactical vehicles, command centers, defensive structures</p>
                  </div>
                  <div className="text-center sm:col-span-2 md:col-span-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pgblue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Award size={16} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <h4 className="font-semibold text-pgnavy mb-2 text-sm sm:text-base">Architectural</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Government buildings, embassies, high-security facilities</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection 
        title="Ballistic Performance Testing"
        subtitle="Witness the superior protection capabilities of our ballistic glass solutions through comprehensive testing protocols"
        videoSrc="/lovable-uploads/PGREDUCEDVID.mp4"
      />

      <Footer />
    </div>
  );
};

export default PGBallisticsPage;