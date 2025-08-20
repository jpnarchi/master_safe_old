import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PGMilitaryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner Section - Full width image */}
      <section className="pt-20 pb-8">
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
          <img 
            src="/steelglassfototechnology.jpg" 
            alt="PG Military Applications Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
              PG Military Applications
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content - Table Image Container */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
              <img 
                src="/steelglassfotospecifications.jpg" 
                alt="Military Applications Table"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGMilitaryPage;