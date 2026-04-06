import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Zap, Award, Download, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const bt = {
  heroSubtitle: {
    es: "Protección Balística Superior a través de Tecnología Avanzada y Pruebas Rigurosas",
    en: "Superior Ballistic Protection through Advanced Technology and Rigorous Testing",
    pt: "Proteção Balística Superior por meio de Tecnologia Avançada e Testes Rigorosos"
  },
  solutionsTitle: { es: "Soluciones Balísticas Avanzadas", en: "Advanced Ballistic Solutions", pt: "Soluções Balísticas Avançadas" },
  solutionsDesc: {
    es: "Nuestros productos de vidrio balístico están diseñados y fabricados bajo los más rigurosos estándares internacionales, ofreciendo protección excepcional contra diversas amenazas. Cada panel es sometido a exhaustivas pruebas de resistencia y calidad para garantizar el máximo nivel de seguridad.",
    en: "Our ballistic glass products are designed and manufactured under the most rigorous international standards, offering exceptional protection against various threats. Each panel undergoes exhaustive strength and quality tests to guarantee the maximum level of security.",
    pt: "Nossos produtos de vidro balístico são projetados e fabricados sob os mais rigorosos padrões internacionais, oferecendo proteção excepcional contra diversas ameaças. Cada painel é submetido a exaustivos testes de resistência e qualidade para garantir o máximo nível de segurança."
  },
  feat1: { es: "Certificación NIJ", en: "NIJ Certified", pt: "Certificado NIJ" },
  feat1Desc: { es: "Certificación bajo los estándares más exigentes del National Institute of Justice", en: "Certification under the most demanding standards of the National Institute of Justice", pt: "Certificação sob os padrões mais exigentes do National Institute of Justice" },
  feat2: { es: "Protección Multi-Amenaza", en: "Multi-Threat Protection", pt: "Proteção Multi-Ameaça" },
  feat2Desc: { es: "Resistencia comprobada contra múltiples calibres y tipos de proyectiles", en: "Proven resistance against multiple calibers and types of projectiles", pt: "Resistência comprovada contra múltiplos calibres e tipos de projéteis" },
  feat3: { es: "Tecnología Avanzada", en: "Advanced Technology", pt: "Tecnologia Avançada" },
  feat3Desc: { es: "Tecnología multi-capa de vanguardia para máximo rendimiento balístico", en: "State-of-the-art multilayer technology for maximum ballistic performance", pt: "Tecnologia multicamada de ponta para máximo desempenho balístico" },
  feat4: { es: "Control de Calidad", en: "Quality Assurance", pt: "Controle de Qualidade" },
  feat4Desc: { es: "Rigurosos controles de calidad y pruebas exhaustivas en cada producto", en: "Rigorous quality controls and exhaustive tests in each product", pt: "Rigorosos controles de qualidade e testes exaustivos em cada produto" },
  thickness: { es: "Espesor (mm)", en: "Thickness (mm)", pt: "Espessura (mm)" },
  weight: { es: "Peso (Kg/m2)", en: "Weight (Kg/m2)", pt: "Peso (Kg/m2)" },
  weapon: { es: "ARMA", en: "WEAPON", pt: "ARMA" },
  caliber: { es: "CALIBRE", en: "CALIBER", pt: "CALIBRE" },
  gallerySectionTitle: { es: "Galería de Pruebas y Certificaciones", en: "Testing & Certification Gallery", pt: "Galeria de Testes e Certificações" },
  gallerySectionDesc: {
    es: "Atestigüe los rigurosos procesos de prueba y los estándares de certificación que validan nuestras soluciones de protección balística",
    en: "Witness the rigorous testing processes and certification standards that validate our ballistic protection solutions",
    pt: "Testemunhe os rigorosos processos de teste e os padrões de certificação que validam nossas soluções de proteção balística"
  },
  gallerySubtitle: { es: "Estándares de Prueba Rigurosos", en: "Rigorous Testing Standards", pt: "Padrões de Teste Rigorosos" },
  galleryBody: {
    es: "Cada panel de vidrio balístico es sometido a protocolos de prueba exhaustivos para garantizar la máxima protección y confiabilidad en situaciones críticas.",
    en: "Every ballistic glass panel undergoes comprehensive testing protocols to ensure maximum protection and reliability in critical situations.",
    pt: "Cada painel de vidro balístico passa por protocolos de teste abrangentes para garantir máxima proteção e confiabilidade em situações críticas."
  },
  tabStandards: { es: "Estándares", en: "Standards", pt: "Padrões" },
  tabTesting: { es: "Pruebas", en: "Testing", pt: "Testes" },
  tabCertifications: { es: "Certificaciones", en: "Certifications", pt: "Certificações" },
  tabApplications: { es: "Aplicaciones", en: "Applications", pt: "Aplicações" },
  intlStandards: { es: "Cumplimiento de Estándares Internacionales", en: "International Standards Compliance", pt: "Conformidade com Padrões Internacionais" },
  advancedTesting: { es: "Procedimientos de Prueba Avanzados", en: "Advanced Testing Procedures", pt: "Procedimentos de Teste Avançados" },
  advancedTestingBody: {
    es: "Nuestra metodología de pruebas integral garantiza que cada panel de vidrio balístico cumpla con los más altos estándares de seguridad.",
    en: "Our comprehensive testing methodology ensures every ballistic glass panel meets the highest safety standards.",
    pt: "Nossa metodologia de teste abrangente garante que cada painel de vidro balístico atenda aos mais altos padrões de segurança."
  },
  testItem1: { es: "Prueba de Impacto Balístico", en: "Ballistic Impact Testing", pt: "Teste de Impacto Balístico" },
  testItem2: { es: "Prueba Ambiental", en: "Environmental Testing", pt: "Teste Ambiental" },
  testItem3: { es: "Evaluación de Durabilidad", en: "Durability Assessment", pt: "Avaliação de Durabilidade" },
  comprehensiveEval: { es: "Protocolos de evaluación exhaustivos", en: "Comprehensive evaluation protocols", pt: "Protocolos de avaliação abrangentes" },
  certTitle: { es: "Certificaciones y Aprobaciones", en: "Certifications & Approvals", pt: "Certificações e Aprovações" },
  govCert: { es: "Certificaciones Gubernamentales", en: "Government Certifications", pt: "Certificações Governamentais" },
  qualCert: { es: "Certificaciones de Calidad", en: "Quality Certifications", pt: "Certificações de Qualidade" },
  appTitle: { es: "Áreas de Aplicación", en: "Application Areas", pt: "Áreas de Aplicação" },
  appAuto: { es: "Automotriz", en: "Automotive", pt: "Automotivo" },
  appAutoDesc: { es: "Vehículos blindados, transporte VIP", en: "Armored vehicles, VIP transport", pt: "Veículos blindados, transporte VIP" },
  appMil: { es: "Militar", en: "Military", pt: "Militar" },
  appMilDesc: { es: "Vehículos tácticos, centros de mando", en: "Tactical vehicles, command centers", pt: "Veículos táticos, centros de comando" },
  appArch: { es: "Arquitectónico", en: "Architectural", pt: "Arquitetônico" },
  appArchDesc: { es: "Edificios gubernamentales, embajadas", en: "Government buildings, embassies", pt: "Edifícios governamentais, embaixadas" },
  videoTitle: { es: "Investigación & Desarrollo", en: "Research & Development", pt: "Pesquisa & Desenvolvimento" },
  videoSubtitle: { es: "PG Products, la nueva generación en protección", en: "PG Products, the new generation in protection", pt: "PG Products, a nova geração em proteção" },
  learnMore: { es: "Conocer más", en: "Learn more", pt: "Saiba mais" },
  downloadsTitle: { es: "Archivos para descargar", en: "Files to Download", pt: "Arquivos para Download" },
  download1: { es: "Brochure de productos PG Products", en: "PG Products Product Brochure", pt: "Catálogo de produtos PG Products" },
  download2: { es: "Descargue nuestro último informe anual", en: "Download our latest annual report", pt: "Baixe nosso último relatório anual" },
};

const PGBallisticsPage = () => {
  const { language } = useLanguage();
  const lang = language as 'es' | 'en' | 'pt';
  const T = (obj: { es: string; en: string; pt: string }) => obj[lang];

  const [activeTab, setActiveTab] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const tabs = [T(bt.tabStandards), T(bt.tabTesting), T(bt.tabCertifications), T(bt.tabApplications)];

  const galleryImages = [
    "/lovable-uploads/vidrio_disparos.avif",
    "/steelglassfotocarrusel0.jpg",
    "/steelglassfototechnology.jpg"
  ];

  // Ballistic Chart Data - exactly as in Figma
  const ballisticTable = {
    headers: ['', 'III', 'III+', 'IV', 'IV+', 'IV+'],
    data: [
      { label: T(bt.thickness), values: ['30.4', '39.4', '58.4', '79.6', '79.6'], isHeader: true },
      { label: T(bt.weight), values: ['58.8', '79.8', '122.8', '164.8', '164.8'], isHeader: true },
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
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/military/vidrio_disparos.avif"
            alt="PG Ballistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* Title Card */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-24 sm:-mt-28 md:-mt-32 mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="text-pgnavy">PG</span>{' '}
            <span className="text-pgblue">Ballistics</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {T(bt.heroSubtitle)}
          </p>
        </div>
      </div>

      {/* Advanced Ballistic Solutions */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#05204b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {T(bt.solutionsTitle)}
            </h2>
            <div className="w-20 h-1 bg-[#3b82f6] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#3e3e3e] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {T(bt.solutionsDesc)}
            </p>
          </div>

          {/* 4 Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: T(bt.feat1), desc: T(bt.feat1Desc) },
              { icon: Target, title: T(bt.feat2), desc: T(bt.feat2Desc) },
              { icon: Zap, title: T(bt.feat3), desc: T(bt.feat3Desc) },
              { icon: Award, title: T(bt.feat4), desc: T(bt.feat4Desc) },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#05204b] rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} className="text-white sm:hidden" strokeWidth={1.5} />
                  <item.icon size={36} className="text-white hidden sm:block" strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#05204b] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6a6b69] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ballistic Chart Table */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8">
          <div className="flex justify-center overflow-x-auto">
            <img
              src={`/ballistics/Tabla_Balistica_PG_2025-${language.toUpperCase()}.png`}
              alt="Tabla Balística PG 2025"
              className="w-full rounded-2xl shadow-xl max-h-none"
            />
          </div>
        </div>
      </section>

      {/* Ballistics Video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/ballistics/PG-Ballistics-Vid.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Testing & Certification Gallery */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1519px] mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#05204b] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {T(bt.gallerySectionTitle)}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#3e3e3e] max-w-xl sm:max-w-2xl md:max-w-[903px] mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {T(bt.gallerySectionDesc)}
            </p>
          </div>

          {/* Gallery Content */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
            {/* Left - Image */}
            <div className="w-full lg:w-[732px] h-[260px] sm:h-[360px] md:h-[440px] lg:h-[508px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-[-10px_10px_20px_0px_rgba(0,0,0,0.15)] flex-shrink-0">
              <img
                src={galleryImages[currentGalleryIndex]}
                alt="Testing Gallery"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="flex-1 pt-0 sm:pt-4 md:pt-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#05204b] mb-4 sm:mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.gallerySubtitle)}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#3e3e3e] mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.galleryBody)}
              </p>
              <ul className="text-sm sm:text-base md:text-lg text-[#3e3e3e] space-y-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full flex-shrink-0"></span>
                  NIJ Level III-A
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full flex-shrink-0"></span>
                  Multi-hit Capability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3b82f6] rounded-full flex-shrink-0"></span>
                  Temperature Tested
                </li>
              </ul>

              {/* Play/Pause Controls */}
              <div className="flex gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12">
                <button
                  onClick={() => setCurrentGalleryIndex(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#05204b] flex items-center justify-center hover:bg-[#05204b] hover:text-white transition-colors text-[#05204b]"
                >
                  <ChevronLeft size={24} className="sm:hidden" />
                  <ChevronLeft size={32} className="hidden sm:block" />
                </button>
                <button
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#05204b] flex items-center justify-center hover:bg-[#05204b] hover:text-white transition-colors text-[#05204b]"
                >
                  <Pause size={22} className="sm:hidden" />
                  <Pause size={28} className="hidden sm:block" />
                </button>
                <button
                  onClick={() => setCurrentGalleryIndex(prev => (prev + 1) % galleryImages.length)}
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-[#05204b] flex items-center justify-center hover:bg-[#05204b] hover:text-white transition-colors text-[#05204b]"
                >
                  <ChevronRight size={24} className="sm:hidden" />
                  <ChevronRight size={32} className="hidden sm:block" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Standards Compliance Tabs */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1519px] mx-auto px-4">
          {/* Tabs Navigation */}
          <div className="flex justify-center border-b border-gray-200 mb-8 sm:mb-12 overflow-x-auto gap-1 sm:gap-0">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-2 sm:px-4 md:px-6 lg:px-8 pb-3 sm:pb-4 text-sm sm:text-lg md:text-2xl lg:text-3xl font-normal transition-colors whitespace-nowrap flex-shrink-0 ${
                  activeTab === index
                    ? 'text-[#08254c] border-b-[4px] sm:border-b-[6px] md:border-b-[8px] border-[#3b82f6]'
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
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#05204b] text-center mb-8 sm:mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.intlStandards)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24 max-w-5xl mx-auto">
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#05204b] mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    NIJ Standards
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { bold: 'NIJ Level II:', normal: '9mm & .40 S&W' },
                      { bold: 'NIJ Level IIIA:', normal: '.357 SIG & .44 Magnum' },
                      { bold: 'NIJ Level III:', normal: '7.62mm NATO' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#6a6b69]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-bold">{item.bold}</strong> {item.normal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#05204b] mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    European Standards
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { bold: 'EN 1063:', normal: 'B4-NS to B7-NS' },
                      { bold: 'EN 1522:', normal: 'FB4 to FB7' },
                      { bold: 'EN 356:', normal: 'P1A to P5A' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#6a6b69]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#05204b] mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.advancedTesting)}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-[#3e3e3e] mb-8 sm:mb-12 max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.advancedTestingBody)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[T(bt.testItem1), T(bt.testItem2), T(bt.testItem3)].map((title, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 sm:p-8 rounded-2xl">
                    <h4 className="font-semibold text-[#05204b] mb-3 text-lg">{title}</h4>
                    <p className="text-gray-600">{T(bt.comprehensiveEval)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#05204b] mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.certTitle)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-left max-w-4xl mx-auto">
                <div>
                  <h4 className="text-xl font-semibold text-[#05204b] mb-4">{T(bt.govCert)}</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• U.S. Department of Justice NIJ</li>
                    <li>• European CEN Standards</li>
                    <li>• Military Specification Compliance</li>
                    <li>• NATO STANAG Approved</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#05204b] mb-4">{T(bt.qualCert)}</h4>
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
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#05204b] mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.appTitle)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { icon: Shield, title: T(bt.appAuto), desc: T(bt.appAutoDesc) },
                  { icon: Target, title: T(bt.appMil), desc: T(bt.appMilDesc) },
                  { icon: Award, title: T(bt.appArch), desc: T(bt.appArchDesc) },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon size={28} className="text-white" />
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
      <section className="relative h-[400px] sm:h-[550px] md:h-[700px] lg:h-[863px] overflow-hidden">
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
            className="w-40 sm:w-64 md:w-80 lg:w-[479px] h-auto mb-6 sm:mb-8 drop-shadow-lg"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {T(bt.videoTitle)}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {T(bt.videoSubtitle)}
          </p>
          <Link
            to="/contacto"
            className="px-6 sm:px-8 md:px-12 py-3 sm:py-4 border-2 border-white text-white text-sm sm:text-base md:text-xl font-bold rounded-[10px] hover:bg-white hover:text-[#05204b] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {T(bt.learnMore)}
          </Link>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-[1495px] mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#05204b] mb-8 sm:mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {T(bt.downloadsTitle)}
          </h2>

          <div className="space-y-0">
            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Download Item 1 */}
            <div className="flex items-center justify-between py-6 sm:py-8 md:py-10 gap-4">
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#3e3e3e]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.download1)}
              </span>
              <button className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-[74px] md:h-[74px] bg-[#c5d5fe] hover:bg-[#3b82f6] transition-colors flex items-center justify-center">
                <Download size={24} className="text-[#05204b]" />
              </button>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300"></div>

            {/* Download Item 2 */}
            <div className="flex items-center justify-between py-6 sm:py-8 md:py-10 gap-4">
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#3e3e3e]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {T(bt.download2)}
              </span>
              <button className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-[74px] md:h-[74px] bg-[#c5d5fe] hover:bg-[#3b82f6] transition-colors flex items-center justify-center">
                <Download size={24} className="text-[#05204b]" />
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
