import { Shield, CheckCircle, FileCheck, LayoutGrid, Target, Zap, Award } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const NeuPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technology', label: 'Technology' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' }
  ];

  const tabContent = {
    overview: {
      title: "Next-Generation Ballistic Protection",
      description: "Neu represents the future of ballistic glass technology, combining cutting-edge materials with innovative design to deliver superior protection and performance. Our next-generation solution sets new standards in the industry.",
      features: [
        "Next-generation material technology",
        "NIJ III-A ballistic certification",
        "Advanced optical clarity",
        "Superior durability and longevity"
      ]
    },
    technology: {
      title: "Revolutionary Technology",
      description: "Neu utilizes revolutionary material science and engineering to create the most advanced ballistic protection available, with proprietary technologies that redefine industry standards.",
      features: [
        "Revolutionary nano-material technology",
        "Advanced optical enhancement",
        "Proprietary bonding process",
        "Next-generation polymer composition"
      ]
    },
    specifications: {
      title: "Technical Specifications",
      description: "Neu achieves the highest standards of ballistic protection while maintaining exceptional optical clarity and durability through advanced engineering.",
      features: [
        "Thickness: 26mm",
        "Weight: 42kg/m²",
        "Transparency: >92%",
        "Protection level: NIJ III-A"
      ]
    },
    applications: {
      title: "Premium Applications",
      description: "Neu is designed for the most demanding applications where cutting-edge technology and superior protection are required.",
      features: [
        "Executive protection",
        "High-end luxury vehicles",
        "Government applications",
        "Premium security solutions"
      ]
    }
  };

  return (
    <PageLayout 
      title="Neu" 
      subtitle="Próxima Generación"
      bgImage="/lovable-uploads/b3344555-f7a7-43fd-8be2-ce26a49a554e.png"
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
              <img src="/PGNEULOG.jpeg" alt="Neu Logo" className="w-40 h-40 object-contain" />
            </div>
            
            {/* Product Description */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Neu</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Neu representa el futuro de la tecnología de vidrio balístico, combinando materiales de vanguardia con diseño innovador para ofrecer protección y rendimiento superiores. 
              Nuestra solución de próxima generación establece nuevos estándares en la industria.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">26mm</div>
              <div className="text-gray-600 font-light">Thickness</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">NIJ III-A</div>
              <div className="text-gray-600 font-light">Certification</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">92%</div>
              <div className="text-gray-600 font-light">Transparency</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">42kg/m²</div>
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
              Neu offers next-generation ballistic protection with revolutionary technology and superior performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Zap className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Next-Generation Technology</h3>
              <p className="text-gray-600 font-light">
                Revolutionary nano-material technology and advanced engineering create the most advanced ballistic protection available.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Target className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Superior Optical Clarity</h3>
              <p className="text-gray-600 font-light">
                Advanced optical enhancement technology provides exceptional clarity and visibility while maintaining maximum protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maximum Protection</h3>
              <p className="text-gray-600 font-light">
                Proprietary bonding process and next-generation polymer composition ensure superior durability and protection.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Award className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 font-light">
                Designed for the most demanding applications where cutting-edge technology and superior protection are required.
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
              <h2 className="text-3xl font-bold text-gray-900">Revolutionary Composition</h2>
              <p className="text-gray-600 font-light text-lg">
                Neu's composition utilizes revolutionary material science and engineering to create the most advanced ballistic protection available.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Nano-Material Technology</h3>
                    <p className="text-gray-600 font-light">Revolutionary nano-materials provide unprecedented strength and durability.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Advanced Optical Enhancement</h3>
                    <p className="text-gray-600 font-light">Proprietary technology ensures exceptional clarity and visibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Next-Generation Polymers</h3>
                    <p className="text-gray-600 font-light">Advanced polymer composition provides superior protection and longevity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png" 
                  alt="Neu - Next-generation ballistic glass" 
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
              Neu complies with the most demanding international safety and ballistic protection standards.
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
            <h2 className="text-3xl font-bold mb-6">Next-Generation Protection for Your Needs</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn how Neu can provide the most advanced ballistic protection solution for your specific application.
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

export default NeuPage;
