import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PGArchitecturalPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Section - Full width image */}
      <section className="pt-20 pb-8">
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img 
            src="/steelglassfotooverview.jpg" 
            alt="PG Architectural Solutions Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              PG Architectural Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pgnavy mb-4 sm:mb-6">
              Architectural Ballistic Glass Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
              Transform any building into a secure environment with our architectural ballistic glass solutions. 
              From government facilities to corporate headquarters, we provide comprehensive security glazing that combines protection with aesthetic appeal.
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy mb-3 sm:mb-4">Government Buildings</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                High-security ballistic glazing solutions for government facilities, embassies, and critical infrastructure requiring maximum protection against various threat levels.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm">Blast-resistant capabilities</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm">Multi-level threat protection</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm">Custom sizing available</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy mb-3 sm:mb-4">Corporate Facilities</h3>
              <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                Sophisticated ballistic glass solutions for corporate environments that prioritize both security and architectural design integrity.
              </p>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm">Aesthetic integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm">Energy-efficient options</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pgblue rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-xs sm:text-sm">Sound reduction properties</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white border-2 border-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-pgnavy text-center mb-6 sm:mb-8">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pgblue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-2">Optical Clarity</h4>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Maintains exceptional optical clarity while providing superior ballistic protection.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pgblue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-2">Weather Resistance</h4>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Engineered to withstand extreme weather conditions and UV exposure.
                </p>
              </div>

              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pgblue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-pgnavy mb-2">Custom Design</h4>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Tailored solutions to meet specific architectural and security requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-pgnavy rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Protection Standards</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">UL 752 Level 1-8</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">EN 1063 B1-B7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">ASTM F1233 Standards</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Glass Types</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Monolithic Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Laminated Systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Insulated Glass Units</span>
                  </li>
                </ul>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Additional Features</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Fire-resistant options</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Hurricane impact resistant</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-sm sm:text-base">Thermal performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGArchitecturalPage;