import { Shield, CheckCircle, FileCheck, LayoutGrid, Target, Zap, Award } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const UltraPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technology', label: 'Technology' },
    { id: 'specifications', label: 'Specifications' },
    { id: 'applications', label: 'Applications' }
  ];

  const tabContent = {
    overview: {
      title: "Ultra-Lightweight Protection",
      description: "Ultra represents the perfect balance between maximum protection and minimal weight. Our ultra-lightweight ballistic glass solution provides exceptional protection while maintaining the vehicle's original performance characteristics.",
      features: [
        "Ultra-lightweight composition",
        "NIJ III-A ballistic certification",
        "Minimal weight impact",
        "Maintains vehicle performance"
      ]
    },
    technology: {
      title: "Advanced Lightweight Technology",
      description: "Ultra utilizes cutting-edge materials and engineering to create the lightest possible ballistic protection without compromising safety or durability standards.",
      features: [
        "Advanced polymer composites",
        "Ultra-thin glass layers",
        "Optimized material distribution",
        "Proprietary lightweight bonding"
      ]
    },
    specifications: {
      title: "Technical Specifications",
      description: "Ultra meets international ballistic protection standards while achieving the lightest possible weight for optimal vehicle performance.",
      features: [
        "Thickness: 22mm",
        "Weight: 28kg/m²",
        "Transparency: >88%",
        "Protection level: NIJ III-A"
      ]
    },
    applications: {
      title: "Performance-Critical Applications",
      description: "Ultra is ideal for applications where vehicle performance and weight are critical factors alongside ballistic protection.",
      features: [
        "High-performance vehicles",
        "Sports cars",
        "Executive sedans",
        "Performance-oriented protection"
      ]
    }
  };

  return (
    <PageLayout 
      title="Ultra" 
      subtitle="Protección Ultra Ligera"
      bgImage="/lovable-uploads/82e0c0e3-aaad-4d7f-aa32-398f7c44bafe.png"
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
              <img src="/PGULTRALOG.jpeg" alt="Ultra Logo" className="w-40 h-40 object-contain" />
            </div>
            
            {/* Product Description */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Ultra</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ultra representa el equilibrio perfecto entre máxima protección y peso mínimo. Nuestra solución de vidrio balístico ultra ligero proporciona protección excepcional 
              manteniendo las características de rendimiento originales del vehículo.
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">22mm</div>
              <div className="text-gray-600 font-light">Thickness</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">NIJ III-A</div>
              <div className="text-gray-600 font-light">Certification</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">88%</div>
              <div className="text-gray-600 font-light">Transparency</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">28kg/m²</div>
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
              Ultra offers maximum protection with minimal weight impact for performance-critical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Zap className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ultra-Lightweight Design</h3>
              <p className="text-gray-600 font-light">
                Advanced materials and engineering create the lightest possible ballistic protection without compromising safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Target className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Performance Maintained</h3>
              <p className="text-gray-600 font-light">
                Minimal weight impact ensures the vehicle maintains its original performance characteristics and handling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Maximum Protection</h3>
              <p className="text-gray-600 font-light">
                Despite its lightweight design, Ultra provides the same level of ballistic protection as heavier alternatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <Award className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 font-light">
                Advanced polymer composites and ultra-thin glass layers ensure durability and optical clarity.
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
              <h2 className="text-3xl font-bold text-gray-900">Advanced Lightweight Composition</h2>
              <p className="text-gray-600 font-light text-lg">
                Ultra's composition utilizes cutting-edge materials and engineering to create the lightest possible ballistic protection.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Advanced Polymer Composites</h3>
                    <p className="text-gray-600 font-light">Ultra-lightweight polymer materials provide strength without weight.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Ultra-Thin Glass Layers</h3>
                    <p className="text-gray-600 font-light">Optimized glass thickness maintains protection while reducing weight.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Optimized Material Distribution</h3>
                    <p className="text-gray-600 font-light">Precise material placement ensures maximum protection with minimum weight.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c6b082b9-872f-4a46-a317-6f3b708396c8.png" 
                  alt="Ultra - BMW X5 on road" 
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
              Ultra complies with the most demanding international safety and ballistic protection standards.
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
            <h2 className="text-3xl font-bold mb-6">Ultra-Lightweight Protection for Your Needs</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn how Ultra can provide the perfect balance of protection and performance for your specific application.
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

export default UltraPage;
