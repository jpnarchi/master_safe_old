import { Shield, CheckCircle, FileCheck, LayoutGrid, Target, Zap, Award } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const SteelGlassPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technology', label: 'Technology' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' }
  ];

  const tabContent = {
    overview: {
      title: "Maximum Edge-to-Edge Protection",
      description: "SteelGlass represents the ultimate in ballistic protection, featuring stainless steel reinforcement that extends protection to the very edges of the glass. This innovative design provides comprehensive coverage while maintaining exceptional durability.",
      features: [
        "Stainless steel edge reinforcement",
        "NIJ III-A ballistic certification",
        "Edge-to-edge protection coverage",
        "Premium aesthetic finish"
      ]
    },
    technology: {
      title: "Stainless Steel Integration",
      description: "SteelGlass incorporates certified stainless steel ballistic material that provides additional protection while enhancing the vehicle's aesthetic appeal with a sophisticated finish.",
      features: [
        "Certified stainless steel ballistic material",
        "Advanced edge sealing technology",
        "Anti-deformation sealing system",
        "Proprietary bonding process"
      ]
    },
    specifications: {
      title: "Technical Specifications",
      description: "SteelGlass meets rigorous international standards with precise engineering and comprehensive testing protocols for maximum protection.",
      features: [
        "Thickness: 32mm",
        "Weight: 52kg/m²",
        "Transparency: >80%",
        "Edge protection: Full perimeter"
      ]
    },
    applications: {
      title: "High-Security Applications",
      description: "SteelGlass is designed for applications requiring maximum protection with premium aesthetics and edge-to-edge coverage.",
      features: [
        "Executive protection",
        "High-risk environments",
        "Military applications",
        "VIP transport"
      ]
    }
  };

  return (
    <PageLayout 
      title="SteelGlass" 
      subtitle="Resistente hasta el Borde"
      bgImage="/lovable-uploads/263ffb06-d243-4ca1-88ab-a68943ddd637.png"
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
              <img src="/PGSTEELGLASSLOG.jpeg" alt="SteelGlass Logo" className="w-40 h-40 object-contain" />
            </div>
            
            {/* Product Description */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">SteelGlass</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SteelGlass representa la máxima protección balística con refuerzo de acero inoxidable que extiende la protección hasta los bordes mismos del vidrio. 
              Esta innovadora tecnología proporciona cobertura integral manteniendo una durabilidad excepcional y un acabado premium.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">32mm</div>
              <div className="text-gray-600 font-light">Thickness</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">NIJ III-A</div>
              <div className="text-gray-600 font-light">Certification</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">80%</div>
              <div className="text-gray-600 font-light">Transparency</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">52kg/m²</div>
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
              SteelGlass offers maximum protection with stainless steel reinforcement and edge-to-edge coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edge-to-Edge Protection</h3>
              <p className="text-gray-600 font-light">
                Stainless steel reinforcement extends protection to the very edges of the glass, providing comprehensive coverage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Award className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Finish</h3>
              <p className="text-gray-600 font-light">
                Stainless steel not only provides additional protection but also enhances the vehicle's aesthetic appeal.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <FileCheck className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Stainless Steel</h3>
              <p className="text-gray-600 font-light">
                Uses certified ballistic stainless steel that guarantees the highest standards of protection and durability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <LayoutGrid className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anti-Deformation Sealing</h3>
              <p className="text-gray-600 font-light">
                Special sealing system that maintains glass integrity even under extreme conditions.
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
                SteelGlass composition is developed with certified materials and detailed processes to ensure maximum protection and durability.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Stainless Steel Reinforcement</h3>
                    <p className="text-gray-600 font-light">Certified ballistic stainless steel provides edge-to-edge protection.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Multi-Layer Glass</h3>
                    <p className="text-gray-600 font-light">Advanced glass composition with multiple protective layers.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Anti-Deformation Sealing</h3>
                    <p className="text-gray-600 font-light">Special sealing system maintains integrity under extreme conditions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png" 
                  alt="SteelGlass - BMW SUV on road" 
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
              SteelGlass complies with the most demanding international safety and ballistic protection standards.
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
            <h2 className="text-3xl font-bold mb-6">Maximum Protection for Your Needs</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn how SteelGlass can provide the ultimate ballistic protection solution for your specific application.
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

export default SteelGlassPage;
