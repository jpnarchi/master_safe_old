import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Dna, Cog, FlaskConical, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPGGlassPage = () => {
  const [activeSection, setActiveSection] = useState('pgdna');

  const sections = [
    { id: 'pgdna', title: 'PG DNA', icon: Dna },
    { id: 'quality', title: 'Quality & Technology', icon: Cog },
    { id: 'rd', title: 'R&D', icon: FlaskConical }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-20">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src="/lovable-uploads/empresa-vidrios-pedido-cristales-posee.jpg" 
            alt="About PG Glass Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  About PG Glass
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed">
                  Innovation, Quality, and Excellence in Ballistic Protection
                </p>
                <div className="w-20 h-1 bg-pgblue mb-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Hierarchical Structure */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* About PG Glass Main Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-pgnavy text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center leading-tight">About PG Glass</h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                PG Glass represents the pinnacle of ballistic protection technology, combining decades of expertise 
                with cutting-edge innovation to deliver superior security solutions across automotive, military, and architectural applications.
              </p>
            </div>

            {/* Company Overview Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pgblue mb-2">25+</div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg">Years of Experience</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pgblue mb-2">500+</div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg">Successful Projects</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pgblue mb-2">99%</div>
                <div className="text-gray-600 text-sm sm:text-base md:text-lg">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hierarchical Subsections */}
          <div className="space-y-8">
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-8 sm:mb-12 px-2">
              <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 bg-gray-100 p-1 rounded-xl w-full sm:w-auto max-w-2xl">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center justify-center sm:justify-start space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all text-sm sm:text-base ${
                        activeSection === section.id
                          ? 'bg-pgblue text-white shadow-lg'
                          : 'text-gray-600 hover:text-pgblue'
                      }`}
                    >
                      <IconComponent size={16} className="sm:w-5 sm:h-5" />
                      <span className="text-center sm:text-left">{section.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Sections */}
            <div className="min-h-[500px]">
              
              {/* PG DNA Section */}
              {activeSection === 'pgdna' && (
                <div className="bg-pgblue text-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-3 h-6 sm:w-4 sm:h-8 bg-white mr-3 sm:mr-4"></div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">PG DNA</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                      <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Our Core Values</h4>
                      <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8">
                        At the heart of PG Glass lies our unwavering commitment to excellence, innovation, and safety. 
                        Our DNA is built on the foundation of protecting lives through superior ballistic solutions.
                      </p>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-base sm:text-lg">Innovation First</h5>
                            <p className="text-white/80 text-sm sm:text-base">Continuously pushing the boundaries of ballistic protection technology</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-base sm:text-lg">Quality Commitment</h5>
                            <p className="text-white/80 text-sm sm:text-base">Rigorous testing and quality assurance in every product</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-semibold text-base sm:text-lg">Safety Excellence</h5>
                            <p className="text-white/80 text-sm sm:text-base">Exceeding international safety standards and certifications</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center order-1 lg:order-2 mb-6 lg:mb-0">
                      <img 
                        src="/lovable-uploads/vidrios-home.png" 
                        alt="PG DNA" 
                        className="w-full max-w-xs sm:max-w-md h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Quality & Technology Section */}
              {activeSection === 'quality' && (
                <div className="bg-pgblue text-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-3 h-6 sm:w-4 sm:h-8 bg-white mr-3 sm:mr-4"></div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Quality & Technology</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    <div className="space-y-4 sm:space-y-6">
                      <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Advanced Manufacturing</h4>
                      <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 sm:mb-8">
                        Our state-of-the-art manufacturing processes combine traditional craftsmanship with 
                        cutting-edge technology to produce ballistic glass that exceeds industry standards.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl">
                          <h5 className="font-semibold text-base sm:text-lg mb-2">Multi-Layer Technology</h5>
                          <p className="text-white/80 text-xs sm:text-sm">Advanced lamination processes for maximum protection</p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl">
                          <h5 className="font-semibold text-base sm:text-lg mb-2">Precision Engineering</h5>
                          <p className="text-white/80 text-xs sm:text-sm">Computer-controlled manufacturing for consistency</p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl">
                          <h5 className="font-semibold text-base sm:text-lg mb-2">Quality Testing</h5>
                          <p className="text-white/80 text-xs sm:text-sm">Rigorous ballistic testing protocols</p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl">
                          <h5 className="font-semibold text-base sm:text-lg mb-2">ISO Certified</h5>
                          <p className="text-white/80 text-xs sm:text-sm">International quality management standards</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl">
                        <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Certifications</h4>
                        <ul className="space-y-2 sm:space-y-3 text-white/90">
                          <li className="flex items-center space-x-2">
                            <Award size={14} className="text-white flex-shrink-0 sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">NIJ Level III-A Certified</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Award size={14} className="text-white flex-shrink-0 sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">EN 1063 European Standards</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Award size={14} className="text-white flex-shrink-0 sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">ISO 9001:2015 Quality Management</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <Award size={14} className="text-white flex-shrink-0 sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">Military Specification Compliance</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* R&D Section */}
              {activeSection === 'rd' && (
                <div className="bg-pgblue text-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-3 h-6 sm:w-4 sm:h-8 bg-white mr-3 sm:mr-4"></div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Research & Development</h3>
                  </div>
                  
                  <div className="space-y-8 sm:space-y-12">
                    <div className="text-center">
                      <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Innovation Laboratory</h4>
                      <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
                        Our dedicated R&D facility houses cutting-edge equipment and a team of materials scientists, 
                        engineers, and ballistics experts working to advance the future of protective glass technology.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          <FlaskConical size={24} className="text-pgblue sm:w-8 sm:h-8" />
                        </div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Materials Research</h5>
                        <p className="text-white/80 text-sm sm:text-base">
                          Developing next-generation materials for enhanced protection and reduced weight
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          <Cog size={24} className="text-pgblue sm:w-8 sm:h-8" />
                        </div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Process Innovation</h5>
                        <p className="text-white/80 text-sm sm:text-base">
                          Optimizing manufacturing processes for improved efficiency and quality
                        </p>
                      </div>
                      
                      <div className="text-center sm:col-span-2 md:col-span-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          <Award size={24} className="text-pgblue sm:w-8 sm:h-8" />
                        </div>
                        <h5 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Testing Protocols</h5>
                        <p className="text-white/80 text-sm sm:text-base">
                          Developing advanced testing methodologies and validation procedures
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl">
                      <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Current Research Projects</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="border-l-4 border-white pl-3 sm:pl-4">
                          <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Next-Gen Composites</h5>
                          <p className="text-white/80 text-xs sm:text-sm">
                            Developing ultra-lightweight ballistic materials with enhanced protection capabilities
                          </p>
                        </div>
                        <div className="border-l-4 border-white pl-3 sm:pl-4">
                          <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Smart Glass Technology</h5>
                          <p className="text-white/80 text-xs sm:text-sm">
                            Integrating IoT sensors and smart technologies into ballistic glass systems
                          </p>
                        </div>
                        <div className="border-l-4 border-white pl-3 sm:pl-4">
                          <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Environmental Resistance</h5>
                          <p className="text-white/80 text-xs sm:text-sm">
                            Improving performance under extreme environmental conditions
                          </p>
                        </div>
                        <div className="border-l-4 border-white pl-3 sm:pl-4">
                          <h5 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Cost Optimization</h5>
                          <p className="text-white/80 text-xs sm:text-sm">
                            Reducing manufacturing costs while maintaining superior quality standards
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPGGlassPage;