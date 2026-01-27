import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Zap, Award, Download, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PGBallisticsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const tabs = ['Standards', 'Testing', 'Certifications', 'Applications'];

  const galleryImages = [
    "/lovable-uploads/vidrio_disparos.avif",
    "/steelglassfotocarrusel0.jpg",
    "/steelglassfototechnology.jpg"
  ];

  // Ballistic Chart Data - exactly as in Figma
  const ballisticTable = {
    headers: ['', 'III', 'III+', 'IV', 'IV+', 'IV+'],
    data: [
      { label: 'Espesor (mm)', values: ['30.4', '39.4', '58.4', '79.6', '79.6'], isHeader: true },
      { label: 'Peso (Kg/m2)', values: ['58.8', '79.8', '122.8', '164.8', '164.8'], isHeader: true },
      { label: 'NIJ 0108.01', values: ['–', 'III', 'IV', '–', '–'] },
      { label: 'CEN 1063', values: ['BR5', 'BR6', '–', 'BR7', '–'] },
      { label: 'VPAM', values: ['L6', 'L7', 'L8', 'L9', 'L10'] },
      { label: 'STANAG 4569', values: ['–', 'I', 'III', '–', '–'] },
      { label: 'RENAR', values: ['RB4', '–', '–', '–', '–'] },
      { label: 'ABNT NBR 15000', values: ['–', 'II', 'IV', '–', '–'] },
    ]
  };

  const weaponCaliberData = [
    {
      weapon: '/placeholder.svg',
      caliber: ['5.56 x 45mm M855', '(950+/-10m/s)', '', '7.62 x 39mm FMJ/PB', '(720+/-10m/s)']
    },
    {
      weapon: '/placeholder.svg',
      caliber: ['7.62 x 51mm M80 Ball', '(838+/-15m/s)', '', '7.62 x 51mm M80 Ball', '(830+/-15m/s)', '', '5.56 x 45mm SS 109', '(950+/-10m/s)']
    },
    {
      weapon: '/placeholder.svg',
      caliber: ['30-06 AP M2', '(868+/-15m/s)', '', '7.62 x 39mm API BZ', '(950+/-20m/s)']
    },
    {
      weapon: '/placeholder.svg',
      caliber: ['7.62 x 51mm M61 AP', '(820+/-10m/s)', '', '7.62 x 51mm', 'P80/FMJ/PB/HC', '(820+/-10m/s)']
    },
    {
      weapon: '/placeholder.svg',
      caliber: ['7.62 x 51mm', 'P80/FMJ/PB/HC', '(820+/-10m/s)', '', '7.62 x 54 R B32', '(860+/-10m/s)']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/vidrio_disparos.avif"
            alt="PG Ballistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-[60px] font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            PG Ballistics
          </h1>
          <p className="text-[28px] font-medium max-w-[842px] leading-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Superior Ballistic Protection through Advanced Technology and Rigorous Testing
          </p>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                index === 0 ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Advanced Ballistic Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-[#05204b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Advanced Ballistic Solutions
            </h2>
            <div className="w-20 h-1 bg-[#3b82f6] mx-auto mb-8"></div>
            <p className="text-[18px] text-[#3e3e3e] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Nuestros productos de vidrio balístico están diseñados y fabricados bajo los más rigurosos estándares internacionales,
              ofreciendo protección excepcional contra diversas amenazas. Cada panel es sometido a exhaustivas pruebas de resistencia
              y calidad para garantizar el máximo nivel de seguridad.
            </p>
          </div>

          {/* 4 Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'NIJ Certified', desc: 'Certificación bajo los estándares más exigentes del National Institute of Justice' },
              { icon: Target, title: 'Multi-Threat Protection', desc: 'Resistencia comprobada contra múltiples calibres y tipos de proyectiles' },
              { icon: Zap, title: 'Advanced Technology', desc: 'Tecnología multi-capa de vanguardia para máximo rendimiento balístico' },
              { icon: Award, title: 'Quality Assurance', desc: 'Rigurosos controles de calidad y pruebas exhaustivas en cada producto' },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-[80px] h-[80px] bg-[#05204b] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={36} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[18px] font-semibold text-[#05204b] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#6a6b69] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ballistic Chart Table */}
      <section className="py-16 bg-white">
        <div className="max-w-[1450px] mx-auto px-4">
          {/* Table Header */}
          <div className="bg-[#3e567b] h-[94px] flex items-center justify-center gap-4 rounded-t-lg">
            <img
              src="/LogoPGPRODUCTSPGBLUE.png"
              alt="PG Logo"
              className="h-[39px] brightness-0 invert"
            />
            <span className="text-[24px] font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              BALLISTIC CHART
            </span>
          </div>

          {/* Table Body */}
          <div>
            {/* Header Row with levels */}
            <div className="grid grid-cols-6">
                <div className="bg-[#f2f4f6] h-[80px] flex items-center justify-center"></div>
                {ballisticTable.headers.slice(1).map((header, idx) => (
                  <div key={idx} className="bg-[#e7eaee] h-[80px] flex items-center justify-center">
                    <span className="text-[20px] font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {header}
                    </span>
                  </div>
                ))}
              </div>

              {/* Data Rows */}
              {ballisticTable.data.map((row, rowIdx) => (
                <div key={rowIdx} className="grid grid-cols-6">
                  {/* Label Cell */}
                  <div className="bg-[#f2f4f6] h-[80px] flex items-center justify-center px-4">
                    <span className="text-[20px] font-bold text-black text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {row.label}
                    </span>
                  </div>
                  {/* Value Cells */}
                  {row.values.map((value, colIdx) => (
                    <div key={colIdx} className="bg-[#e7eaee] h-[80px] flex items-center justify-center">
                      <span
                        className={`text-[24px] font-medium text-center ${value === '–' ? 'text-white' : 'text-black'}`}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* ARMA Row */}
              <div className="grid grid-cols-6">
                <div className="bg-[#f2f4f6] h-[157px] flex items-center justify-center">
                  <span className="text-[20px] font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ARMA
                  </span>
                </div>
                {weaponCaliberData.map((_, idx) => (
                  <div key={idx} className="bg-[#e7eaee] h-[157px] flex flex-col items-center justify-center p-2">
                    <div className="w-[127px] h-[90px] bg-gray-300 rounded flex items-center justify-center mb-2">
                      <img src="/placeholder.svg" alt="Weapon" className="w-20 h-16 object-contain opacity-50" />
                    </div>
                    <div className="w-[120px] h-[14px] bg-gray-400 rounded"></div>
                  </div>
                ))}
              </div>

              {/* CALIBRE Row */}
              <div className="grid grid-cols-6">
                <div className="bg-[#f2f4f6] h-[250px] flex items-center justify-center rounded-bl-lg">
                  <span className="text-[20px] font-bold text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    CALIBRE
                  </span>
                </div>
                {weaponCaliberData.map((item, idx) => (
                  <div key={idx} className={`bg-[#e7eaee] h-[250px] flex items-center justify-center p-4 ${idx === 4 ? 'rounded-br-lg' : ''}`}>
                    <div className="text-center text-[16px] tracking-[-0.8px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.caliber.map((line, lineIdx) => (
                        <p key={lineIdx} className={`${line.startsWith('(') || line === '' ? 'font-normal' : 'font-bold'} text-black`}>
                          {line || '\u00A0'}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>

      {/* Testing & Certification Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-[1519px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[48px] font-bold text-[#05204b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Testing & Certification Gallery
            </h2>
            <p className="text-[24px] text-[#3e3e3e] max-w-[903px] mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Witness the rigorous testing processes and certification standards that validate our ballistic protection solutions
            </p>
          </div>

          {/* Gallery Content */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left - Image */}
            <div className="lg:w-[732px] h-[508px] rounded-[30px] overflow-hidden shadow-[-10px_10px_20px_0px_rgba(0,0,0,0.15)]">
              <img
                src={galleryImages[currentGalleryIndex]}
                alt="Testing Gallery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1 pt-8">
              <h3 className="text-[36px] font-semibold text-[#05204b] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Rigorous Testing Standards
              </h3>
              <p className="text-[20px] text-[#3e3e3e] mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Every ballistic glass panel undergoes comprehensive testing protocols to ensure maximum protection and reliability in critical situations.
              </p>
              <ul className="text-[20px] text-[#3e3e3e] space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                  NIJ Level III-A
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                  Multi-hit Capability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full"></span>
                  Temperature Tested
                </li>
              </ul>

              {/* Play/Pause Controls */}
              <div className="flex gap-4 mt-12">
                <button
                  onClick={() => setCurrentGalleryIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)}
                  className="w-[80px] h-[80px] rounded-full border-2 border-[#05204b] flex items-center justify-center hover:bg-[#05204b] hover:text-white transition-colors text-[#05204b]"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  className="w-[80px] h-[80px] rounded-full border-2 border-[#05204b] flex items-center justify-center hover:bg-[#05204b] hover:text-white transition-colors text-[#05204b]"
                >
                  <Pause size={28} />
                </button>
                <button
                  onClick={() => setCurrentGalleryIndex(prev => (prev + 1) % galleryImages.length)}
                  className="w-[80px] h-[80px] rounded-full border-2 border-[#05204b] flex items-center justify-center hover:bg-[#05204b] hover:text-white transition-colors text-[#05204b]"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Standards Compliance Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-[1519px] mx-auto px-4">
          {/* Tabs Navigation */}
          <div className="flex justify-center border-b border-gray-200 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 pb-4 text-[32px] font-normal transition-colors ${
                  activeTab === index
                    ? 'text-[#08254c] border-b-[8px] border-[#3b82f6]'
                    : 'text-[#08254c]/60 hover:text-[#08254c]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 0 && (
            <div>
              <h3 className="text-[40px] font-semibold text-[#05204b] text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                International Standards Compliance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-5xl mx-auto">
                <div>
                  <h4 className="text-[30px] font-semibold text-[#05204b] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    NIJ Standards
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { bold: 'NIJ Level II:', normal: '9mm & .40 S&W' },
                      { bold: 'NIJ Level IIIA:', normal: '.357 SIG & .44 Magnum' },
                      { bold: 'NIJ Level III:', normal: '7.62mm NATO' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[24px] text-[#6a6b69]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <svg className="w-7 h-7 text-[#3b82f6] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-bold">{item.bold}</strong> {item.normal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[30px] font-semibold text-[#05204b] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    European Standards
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { bold: 'EN 1063:', normal: 'B4-NS to B7-NS' },
                      { bold: 'EN 1522:', normal: 'FB4 to FB7' },
                      { bold: 'EN 356:', normal: 'P1A to P5A' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[24px] text-[#6a6b69]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <svg className="w-7 h-7 text-[#3b82f6] mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-bold">{item.bold}</strong> {item.normal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div className="text-center">
              <h3 className="text-[40px] font-semibold text-[#05204b] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Advanced Testing Procedures
              </h3>
              <p className="text-[20px] text-[#3e3e3e] mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our comprehensive testing methodology ensures every ballistic glass panel meets the highest safety standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {['Ballistic Impact Testing', 'Environmental Testing', 'Durability Assessment'].map((title, idx) => (
                  <div key={idx} className="bg-gray-50 p-8 rounded-2xl">
                    <h4 className="font-semibold text-[#05204b] mb-3 text-xl">{title}</h4>
                    <p className="text-gray-600">Comprehensive evaluation protocols</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="text-center">
              <h3 className="text-[40px] font-semibold text-[#05204b] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Certifications & Approvals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
                <div>
                  <h4 className="text-xl font-semibold text-[#05204b] mb-4">Government Certifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• U.S. Department of Justice NIJ</li>
                    <li>• European CEN Standards</li>
                    <li>• Military Specification Compliance</li>
                    <li>• NATO STANAG Approved</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#05204b] mb-4">Quality Certifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ISO 9001:2015 Quality Management</li>
                    <li>• ISO 14001 Environmental Standards</li>
                    <li>• Third-party Laboratory Verified</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 3 && (
            <div className="text-center">
              <h3 className="text-[40px] font-semibold text-[#05204b] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Application Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Shield, title: 'Automotive', desc: 'Armored vehicles, VIP transport' },
                  { icon: Target, title: 'Military', desc: 'Tactical vehicles, command centers' },
                  { icon: Award, title: 'Architectural', desc: 'Government buildings, embassies' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-20 h-20 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon size={32} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-[#05204b] mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Section - Investigación & Desarrollo */}
      <section className="relative h-[863px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <img
            src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
            alt="PG Products Logo"
            className="w-[479px] h-auto mb-8 drop-shadow-lg"
          />
          <h2 className="text-[48px] font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Investigación & Desarrollo
          </h2>
          <p className="text-[28px] mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            PG Products, la nueva generación en protección
          </p>
          <Link
            to="/contacto"
            className="px-12 py-4 border-2 border-white text-white text-[24px] font-bold rounded-[10px] hover:bg-white hover:text-[#05204b] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Conocer mas
          </Link>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1495px] mx-auto px-4">
          <h2 className="text-[36px] font-bold text-[#05204b] mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Archivos para descargar
          </h2>

          <div className="space-y-0">
            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Download Item 1 */}
            <div className="flex items-center justify-between py-10">
              <span className="text-[24px] text-[#3e3e3e]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Brochure de productos PG Products
              </span>
              <button className="w-[74px] h-[74px] bg-[#c5d5fe] hover:bg-[#3b82f6] transition-colors flex items-center justify-center">
                <Download size={32} className="text-[#05204b]" />
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Download Item 2 */}
            <div className="flex items-center justify-between py-10">
              <span className="text-[24px] text-[#3e3e3e]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Descargue nuestro último informe anual
              </span>
              <button className="w-[74px] h-[74px] bg-[#c5d5fe] hover:bg-[#3b82f6] transition-colors flex items-center justify-center">
                <Download size={32} className="text-[#05204b]" />
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGBallisticsPage;
