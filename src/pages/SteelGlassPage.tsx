import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SteelGlassPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Overview', 'Technology', 'Specifications', 'Applications'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Product Logo Container */}
          <div className="mb-12">
            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center">
              <img 
                src="/PGSTEELGLASSLOG.jpeg" 
                alt="SteelGlass Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            SteelGlass representa la máxima protección balística con refuerzo de acero inoxidable que extiende la protección hasta los bordes
          </p>
          
          {/* Hero Image */}
          <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/263ffb06-d243-4ca1-88ab-a68943ddd637.png" 
              alt="SteelGlass Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-light mb-2">NIJ III-A</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Certification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">32mm</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Thickness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">80%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">52kg/m²</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Weight</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Tabs */}
          <div className="flex space-x-8 border-b border-gray-200 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`pb-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === index 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === 0 && (
              <>
                <h2 className="text-3xl font-light mb-6">Maximum Edge-to-Edge Protection</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SteelGlass represents the ultimate in ballistic protection, featuring stainless steel reinforcement that extends protection to the very edges of the glass.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Stainless steel edge reinforcement</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">NIJ III-A ballistic certification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Edge-to-edge protection coverage</span>
                  </li>
                </ul>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h2 className="text-3xl font-light mb-6">Stainless Steel Integration</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SteelGlass incorporates certified stainless steel ballistic material that provides additional protection while enhancing the vehicle's aesthetic appeal.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Certified Stainless Steel Ballistic Material</h3>
                    <p className="text-gray-600 text-sm">Advanced steel composition that guarantees the highest standards of protection</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Anti-Deformation Sealing System</h3>
                    <p className="text-gray-600 text-sm">Special sealing system that maintains glass integrity even under extreme conditions</p>
                  </div>
                </div>
              </>
            )}
            {activeTab === 2 && (
              <>
                <h2 className="text-3xl font-light mb-6">Technical Specifications</h2>
                <dl className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Thickness</dt>
                    <dd className="font-medium">32mm</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Weight</dt>
                    <dd className="font-medium">52kg/m²</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Transparency</dt>
                    <dd className="font-medium">&gt;80%</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Edge Protection</dt>
                    <dd className="font-medium">Full perimeter</dd>
                  </div>
                </dl>
              </>
            )}
            {activeTab === 3 && (
              <>
                <h2 className="text-3xl font-light mb-6">High-Security Applications</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Executive Protection</h3>
                    <p className="text-gray-600 text-sm">Maximum protection for high-profile individuals and VIP transport</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">High-Risk Environments</h3>
                    <p className="text-gray-600 text-sm">Enhanced security for operations in dangerous areas</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Military Applications</h3>
                    <p className="text-gray-600 text-sm">Tactical vehicles and specialized military equipment</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SteelGlassPage;
