import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GlassGuardPage = () => {
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
                src="/PGGLASSGUARDLOG.jpeg" 
                alt="GlassGuard Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            GlassGuard compone un portafolio de soluciones de blindaje transparente según normas locales e internacionales
          </p>
          
          {/* Hero Image */}
          <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/40cfe7f9-b375-46b7-8288-f45cd9946d7f.png" 
              alt="GlassGuard Product"
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
              <div className="text-4xl font-light mb-2">28mm</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Thickness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">85%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">45kg/m²</div>
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
                <h2 className="text-3xl font-light mb-6">Premium Ballistic Protection</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  GlassGuard represents the pinnacle of transparent armor solutions, combining certified ballistic resistance with exceptional durability and optical clarity.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">NIJ III-A ballistic certification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Advanced ceramic coating technology</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Multi-layer polymer composition</span>
                  </li>
                </ul>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h2 className="text-3xl font-light mb-6">Advanced Material Science</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  GlassGuard utilizes cutting-edge material science with a proprietary three-layer composition that provides superior ballistic resistance.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Ceramic-Coated Glass</h3>
                    <p className="text-gray-600 text-sm">Exterior layer reinforced with high-durability ceramic finish</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Elastomeric Polymers</h3>
                    <p className="text-gray-600 text-sm">Intermediate layer that absorbs and dissipates impact energy</p>
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
                    <dd className="font-medium">28mm</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Weight</dt>
                    <dd className="font-medium">45kg/m²</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Transparency</dt>
                    <dd className="font-medium">&gt;85%</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Impact Resistance</dt>
                    <dd className="font-medium">Multiple 9mm rounds</dd>
                  </div>
                </dl>
              </>
            )}
            {activeTab === 3 && (
              <>
                <h2 className="text-3xl font-light mb-6">Versatile Applications</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Executive Vehicles</h3>
                    <p className="text-gray-600 text-sm">High-security protection for VIP transportation</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Law Enforcement</h3>
                    <p className="text-gray-600 text-sm">Tactical vehicles and mobile command centers</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Military Transport</h3>
                    <p className="text-gray-600 text-sm">Armored personnel carriers and support vehicles</p>
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

export default GlassGuardPage;
