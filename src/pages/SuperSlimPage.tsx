import { Shield, CheckCircle, FileCheck, LayoutGrid, Target, Zap, Award } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const SuperSlimPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technology', label: 'Technology' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' }
  ];

  const tabContent = {
    overview: {
      title: "Ultra-Thin Ballistic Protection",
      description: "SuperSlim represents the thinnest ballistic glass solution available, providing certified protection in an ultra-compact profile. Perfect for applications where space and aesthetics are critical.",
      features: [
        "Ultra-thin 18mm profile",
        "NIJ III-A ballistic certification",
        "Minimal space requirements",
        "Maximum aesthetic appeal"
      ]
    },
    technology: {
      title: "Advanced Thin Technology",
      description: "SuperSlim utilizes revolutionary material science to achieve ballistic protection in the thinnest possible profile without compromising safety or durability.",
      features: [
        "Revolutionary thin-layer technology",
        "Advanced polymer interlayers",
        "Ultra-compact glass composition",
        "Proprietary thin bonding process"
      ]
    },
    specifications: {
      title: "Technical Specifications",
      description: "SuperSlim achieves the thinnest possible ballistic protection while maintaining international safety standards and optical clarity.",
      features: [
        "Thickness: 18mm",
        "Weight: 24kg/m²",
        "Transparency: >90%",
        "Protection level: NIJ III-A"
      ]
    },
    applications: {
      title: "Space-Critical Applications",
      description: "SuperSlim is ideal for applications where space is limited and maximum protection is required in the thinnest possible profile.",
      features: [
        "Compact vehicles",
        "Sports cars",
        "Luxury sedans",
        "Space-constrained installations"
      ]
    }
  };

  return (
    <PageLayout 
      title="SuperSlim" 
      subtitle="Protección Ultra Delgada"
      bgImage="/lovable-uploads/c55693d5-aada-4a4c-8c5b-1d29642483b9.png"
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
              <img src="/PGSUPERSLIMLOG.jpeg" alt="SuperSlim Logo" className="w-40 h-40 object-contain" />
            </div>
            
            {/* Product Description */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">SuperSlim</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SuperSlim representa la solución de vidrio balístico más delgada disponible, proporcionando protección certificada en un perfil ultra compacto. 
              Perfecto para aplicaciones donde el espacio y la estética son críticos.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">18mm</div>
              <div className="text-gray-600 font-light">Thickness</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">NIJ III-A</div>
              <div className="text-gray-600 font-light">Certification</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">90%</div>
              <div className="text-gray-600 font-light">Transparency</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24kg/m²</div>
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
              SuperSlim offers maximum protection in the thinnest possible profile for space-critical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Target className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ultra-Thin Profile</h3>
              <p className="text-gray-600 font-light">
                Revolutionary 18mm thickness provides ballistic protection in the most compact profile available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maximum Protection</h3>
              <p className="text-gray-600 font-light">
                Despite its ultra-thin design, SuperSlim provides the same level of ballistic protection as thicker alternatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Award className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Aesthetics</h3>
              <p className="text-gray-600 font-light">
                Ultra-thin profile maintains the original vehicle aesthetics while providing maximum protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Zap className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Space Optimized</h3>
              <p className="text-gray-600 font-light">
                Perfect for applications where space is limited and maximum protection is required.
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
              <h2 className="text-3xl font-bold text-gray-900">Revolutionary Thin Composition</h2>
              <p className="text-gray-600 font-light text-lg">
                SuperSlim's composition utilizes revolutionary material science to achieve ballistic protection in the thinnest possible profile.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Revolutionary Thin-Layer Technology</h3>
                    <p className="text-gray-600 font-light">Advanced materials create protection in ultra-thin layers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Advanced Polymer Interlayers</h3>
                    <p className="text-gray-600 font-light">Specialized polymers provide strength in minimal thickness.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ultra-Compact Glass Composition</h3>
                    <p className="text-gray-600 font-light">Optimized glass layers maintain protection with minimal thickness.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/f54c4665-4e79-445e-b553-2cefc763c386.png" 
                  alt="SuperSlim - Mercedes-Benz on road" 
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
              SuperSlim complies with the most demanding international safety and ballistic protection standards.
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
            <h2 className="text-3xl font-bold mb-6">Ultra-Thin Protection for Your Needs</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn how SuperSlim can provide maximum protection in the thinnest possible profile for your specific application.
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

export default SuperSlimPage;
