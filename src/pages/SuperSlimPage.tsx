import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuperSlimPage = () => {
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
                src="/PGSUPERSLIMLOG.jpeg" 
                alt="SuperSlim Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            SuperSlim representa la solución de vidrio balístico más delgada disponible, proporcionando protección certificada en un perfil ultra compacto
          </p>
          
          {/* Hero Image */}
          <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/f54c4665-4e79-445e-b553-2cefc763c386.png" 
              alt="SuperSlim Product"
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
              <div className="text-4xl font-light mb-2">18mm</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Thickness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">90%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">24kg/m²</div>
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
                <h2 className="text-3xl font-light mb-6">Ultra-Thin Ballistic Protection</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SuperSlim represents the thinnest ballistic glass solution available, providing certified protection in an ultra-compact profile. Perfect for applications where space and aesthetics are critical.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Ultra-thin 18mm profile</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">NIJ III-A ballistic certification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Maximum aesthetic appeal</span>
                  </li>
                </ul>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h2 className="text-3xl font-light mb-6">Advanced Thin Technology</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  SuperSlim utilizes revolutionary material science to achieve ballistic protection in the thinnest possible profile without compromising safety or durability.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Revolutionary Thin-Layer Technology</h3>
                    <p className="text-gray-600 text-sm">Advanced materials create protection in ultra-thin layers</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Advanced Polymer Interlayers</h3>
                    <p className="text-gray-600 text-sm">Specialized polymers provide strength in minimal thickness</p>
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
                    <dd className="font-medium">18mm</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Weight</dt>
                    <dd className="font-medium">24kg/m²</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Transparency</dt>
                    <dd className="font-medium">&gt;90%</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Protection Level</dt>
                    <dd className="font-medium">NIJ III-A</dd>
                  </div>
                </dl>
              </>
            )}
            {activeTab === 3 && (
              <>
                <h2 className="text-3xl font-light mb-6">Space-Critical Applications</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Compact Vehicles</h3>
                    <p className="text-gray-600 text-sm">Ideal for vehicles where space is at a premium</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Sports Cars</h3>
                    <p className="text-gray-600 text-sm">Maintains vehicle aesthetics and performance characteristics</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Luxury Sedans</h3>
                    <p className="text-gray-600 text-sm">Discreet protection that preserves original appearance</p>
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

export default SuperSlimPage;
