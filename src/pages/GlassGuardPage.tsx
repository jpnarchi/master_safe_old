import { Shield, CheckCircle, FileCheck, LayoutGrid, Target, Zap, Award } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const GlassGuardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technology', label: 'Technology' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' }
  ];

  const tabContent = {
    overview: {
      title: "Premium Ballistic Protection",
      description: "GlassGuard represents the pinnacle of transparent armor solutions, combining certified ballistic resistance with exceptional durability and optical clarity. Our flagship product delivers uncompromising protection while maintaining the aesthetic integrity of your vehicle.",
      features: [
        "NIJ III-A ballistic certification",
        "Advanced ceramic coating technology",
        "Multi-layer polymer composition",
        "Anti-scratch polycarbonate core"
      ]
    },
    technology: {
      title: "Advanced Material Science",
      description: "GlassGuard utilizes cutting-edge material science with a proprietary three-layer composition that provides superior ballistic resistance while maintaining optical clarity and durability.",
      features: [
        "Ceramic-coated tempered glass exterior",
        "Elastomeric polymer interlayers",
        "Anti-scratch polycarbonate interior",
        "Proprietary bonding technology"
      ]
    },
    specifications: {
      title: "Technical Specifications",
      description: "GlassGuard meets and exceeds international ballistic protection standards with precise engineering and rigorous testing protocols.",
      features: [
        "Thickness: 28mm",
        "Weight: 45kg/m²",
        "Transparency: >85%",
        "Impact resistance: Multiple 9mm rounds"
      ]
    },
    applications: {
      title: "Versatile Applications",
      description: "GlassGuard is designed for high-security applications where protection and aesthetics are equally important.",
      features: [
        "Executive vehicles",
        "Law enforcement",
        "Military transport",
        "VIP protection"
      ]
    }
  };

  return (
    <PageLayout 
      title="GlassGuard" 
      subtitle="Calidad, Durabilidad y balística comprobada"
      bgImage="/lovable-uploads/40cfe7f9-b375-46b7-8288-f45cd9946d7f.png"
      fullWidthBg={true}
      overlayOpacity="bg-gradient-to-b from-pgnavy/70 via-pgnavy/50 to-pgnavy/30"
      textColor="text-white"
    >
      {/* Product Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Product Logo Container */}
            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <img src="/PGGLASSGUARDLOG.jpeg" alt="GlassGuard Logo" className="w-40 h-40 object-contain" />
            </div>
            
            {/* Product Description */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">GlassGuard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              GlassGuard compone un portafolio de soluciones de blindaje transparente según normas locales e internacionales para diferentes aplicaciones de alta especificación. 
              La composición se desarrolla con materiales certificados y procesos detallados para asegurar el ADN de PG: balística innovadora, geometría estable, óptica destacable y estética única.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">28mm</div>
              <div className="text-gray-600 font-light">Thickness</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">NIJ III-A</div>
              <div className="text-gray-600 font-light">Certification</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600 font-light">Transparency</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">45kg/m²</div>
              <div className="text-gray-600 font-light">Weight</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tabContent[activeTab].title}</h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">{tabContent[activeTab].description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tabContent[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-gray-700 font-light">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              GlassGuard offers high-specification armor solutions with international certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <CheckCircle className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Quality Management</h3>
              <p className="text-gray-600 font-light">
                PG products feature ISO 9001 certified quality management, ensuring the highest standards in every production phase.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Materials</h3>
              <p className="text-gray-600 font-light">
                GlassGuard is formulated with advanced materials and detailed processes that ensure optimal protection without compromising visibility or design.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <LayoutGrid className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Variety of Options</h3>
              <p className="text-gray-600 font-light">
                Available in various colors and light transmissions that complement accessories like defogging networks, antennas, and wiper holes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <FileCheck className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Certifications</h3>
              <p className="text-gray-600 font-light">
                Complies with various standards: ABNT NBR 15000, CEN 1063, NATO STANAG 4569, NIJ 0108.01, among others, ensuring reliable protection in different scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Composition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Advanced Composition</h2>
              <p className="text-gray-600 font-light text-lg">
                GlassGuard's composition is developed with certified materials and detailed processes to ensure the highest quality and protection.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ceramic-Coated Glass</h3>
                    <p className="text-gray-600 font-light">Exterior layer reinforced with high-durability ceramic finish.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Elastomeric Polymers</h3>
                    <p className="text-gray-600 font-light">Intermediate layer with special polymers that absorb and dissipate impact energy.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Anti-Scratch Polycarbonate</h3>
                    <p className="text-gray-600 font-light">High-durability polycarbonate inner layer with scratch protection.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/de5f22cf-7bbd-4cba-a6bc-28027fd75774.png" 
                  alt="Police vehicle with GlassGuard" 
                  className="w-full h-auto" 
                />
              </div>
              
              <div className="absolute bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Patented Technology
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standards and Norms</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              GlassGuard complies with the most demanding international safety and ballistic protection standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "ABNT NBR 15000", 
              "CEN 1063", 
              "NATO STANAG 4569", 
              "NIJ 0108.01", 
              "RENAR MA.02",
              "VPAM APR 2006", 
              "VPAM BRV 2009",
              "VPAM ERV 2010", 
              "VPAM PM 2007",
              "NOM 142 SCFI 2000"
            ].map((standard, index) => (
              <div 
                key={standard} 
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <p className="font-medium text-gray-900">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Certified Protection for Your Needs</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn how GlassGuard can provide the ideal ballistic protection solution for your specific application.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contacto" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                Request Information
              </a>
              <a href="/" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-medium transition-colors">
                View Other Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GlassGuardPage;
