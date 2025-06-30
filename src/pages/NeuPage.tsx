import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NeuPage = () => {
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
                src="/PGNEULOG.jpeg" 
                alt="NEU Logo" 
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mb-12">
            NEU representa el futuro de la tecnología de vidrio balístico con desempeño gran y próxima generación de protección
          </p>
          
          {/* Hero Image */}
          <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png" 
              alt="NEU Product"
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
              <div className="text-4xl font-light mb-2">26mm</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Thickness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">92%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Transparency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light mb-2">38kg/m²</div>
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
                <h2 className="text-3xl font-light mb-6">Next-Generation Ballistic Protection</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  NEU represents the future of ballistic glass technology, combining cutting-edge materials with innovative design to deliver superior protection and performance. Our next-generation solution sets new industry standards.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Next-generation material technology</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">NIJ III-A ballistic certification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-700">Superior optical clarity</span>
                  </li>
                </ul>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h2 className="text-3xl font-light mb-6">Revolutionary Material Science</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  NEU utilizes revolutionary material science with cutting-edge compounds and manufacturing processes to achieve superior ballistic protection with enhanced optical properties.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Next-Generation Compounds</h3>
                    <p className="text-gray-600 text-sm">Advanced material compounds that redefine ballistic protection standards</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Enhanced Optical Systems</h3>
                    <p className="text-gray-600 text-sm">Superior clarity and light transmission for optimal visibility</p>
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
                    <dd className="font-medium">26mm</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Weight</dt>
                    <dd className="font-medium">38kg/m²</dd>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <dt className="text-gray-600">Transparency</dt>
                    <dd className="font-medium">&gt;92%</dd>
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
                <h2 className="text-3xl font-light mb-6">Premium Applications</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Executive Protection</h3>
                    <p className="text-gray-600 text-sm">Next-generation protection for high-profile individuals and VIP transport</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">High-End Luxury Vehicles</h3>
                    <p className="text-gray-600 text-sm">Premium protection solution for the most demanding applications</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Government Applications</h3>
                    <p className="text-gray-600 text-sm">Cutting-edge security solutions for government and diplomatic vehicles</p>
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

export default NeuPage;
