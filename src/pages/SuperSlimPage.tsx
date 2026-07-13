import React, { useState, useEffect } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from "sonner";
import { useLanguage } from '../contexts/LanguageContext';
import { superslimTranslations as tr, commonTranslations as c, t } from '../translations';

const SuperSlimPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const heroImages = [
    '/products/superslim/HeroPGSuperSlim-1.webp',
    '/products/superslim/HeroPGSuperSlim-2.webp',
    '/products/superslim/HeroPGSuperSlim-3.webp',
    '/products/superslim/HeroPGSuperSlim-4.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    t(tr.tabName, language),
    t(c.tabs.composition, language),
    t(c.tabs.technology, language),
    t(c.tabs.specs, language),
  ];

  const tabDescriptions = [
    t(tr.tab1, language),
    t(tr.tab2, language),
    t(tr.tab3, language),
    t(tr.tab4, language),
  ];

  const tabImages = [
    '/products/superslim/TabsPGSuperSlim-1.webp',
    '/products/superslim/TabsComposicionPGSuperSlim-2.webp',
    '/products/superslim/TabsTecnologiaPGSuperSlim-3.webp',
    '/products/superslim/TabsEspecificacionesPGSuperSlim-4png.webp',
  ];

  const keyBenefits = tr.benefits[language];
  const useCaseImages = [
    '/products/superslim/CasosdeUsoPGSuperSlim-1.webp',
    '/products/superslim/CasosdeUsoPGSuperSlim-2.webp',
    '/products/superslim/CasosdeUsoPGSuperSlim-3.webp',
  ];
  const useCases = tr.useCases[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t(c.contact.toastRequired, language));
      return;
    }
    toast.success(t(c.contact.toastSuccess, language));
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', message: '' });
    toast.info(t(c.contact.toastCancelled, language));
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % useCases.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[580px] md:h-[660px] lg:h-[740px] w-full overflow-hidden">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`SuperSlim Background ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 max-w-7xl mx-auto text-center">
          <img
            src="/shared/logos/mainlogoprdpagePGSuperSlim.png"
            alt="PG SuperSlim®"
            className="w-full max-w-[401px] h-auto object-contain mb-3 sm:mb-4"
          />
          <h1 className="text-white text-base sm:text-xl md:text-2xl font-normal mb-4 sm:mb-6 font-montserrat">
            {t(tr.heroSubtitle, language)}
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-3xl leading-relaxed font-montserrat">
            {t(tr.heroDescription, language)}
          </p>
          <div className="absolute bottom-8 sm:bottom-12 flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === heroSlide ? 'bg-[#7F8CAD]' : 'bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.70) -12.84%, rgba(11, 126, 165, 0.70) 113.55%)'}}>
        <div className="mx-auto flex flex-col items-center pb-64" style={{width: '1728px', maxWidth: '100%'}}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 mt-10 sm:mt-16 mx-4 sm:mx-auto px-6 py-5 sm:py-0 h-auto sm:h-[146px] w-full sm:w-[95%] max-w-[1568px]" style={{
            borderRadius: '23px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          }}>
            <img src="/shared/logos/SuperSlimlogo.webp" alt="SuperSlim Logo" className="object-contain w-[180px] sm:w-[280px] md:w-[389px] h-auto" />
            <h2 className="font-normal text-black font-montserrat text-2xl sm:text-3xl md:text-4xl">{t(c.keyBenefits, language)}</h2>
          </div>

          <div className="mb-12 w-full px-4" style={{maxWidth: '1200px'}}>
            <div className="space-y-2">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-start gap-4">
                  <img src="/shared/icons/checkmark_bullet.webp" alt="Checkmark" className="w-8 h-8 flex-shrink-0 mt-1 object-contain" />
                  <p className="text-lg md:text-xl font-montserrat">
                    <span className="font-bold">{benefit.label}</span>{' '}
                    <span className="font-normal">{benefit.detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 w-full px-4">
            <div className="flex justify-between items-center border-b border-black pb-4 overflow-x-auto gap-2 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {tabs.map((tab, index) => (
                <button key={index} onClick={() => setActiveTab(index)}
                  className={`text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-normal whitespace-nowrap transition-all font-montserrat flex-shrink-0 ${activeTab === index ? 'text-black' : 'text-black/50 hover:text-black/75'}`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 sm:mb-12 w-full px-4 sm:px-8" style={{maxWidth: '1200px'}}>
            <p className="text-center text-sm sm:text-base md:text-lg font-montserrat whitespace-pre-line leading-relaxed mb-8">{tabDescriptions[activeTab]}</p>
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[260px] sm:h-[360px] md:h-[500px]">
              <img
                src={tabImages[activeTab]}
                alt={tabs[activeTab]}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204B] text-center mb-16 font-montserrat">{t(c.useCasesTitle, language)}</h2>
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[260px] sm:h-[360px] md:h-[500px]">
                <img src={useCaseImages[currentSlide]} alt={useCases[currentSlide].title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#05204B] text-center md:text-left font-montserrat">{useCases[currentSlide].title}</h3>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#3E3E3E] text-center md:text-left font-montserrat leading-relaxed">{useCases[currentSlide].description}</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end gap-4 mt-8 sm:mt-12">
              <button onClick={prevSlide} className="w-20 h-20 rounded-full bg-gray-200/50 hover:bg-gray-300/50 flex items-center justify-center transition-colors">
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-[#05204B]" strokeWidth={3} />
              </button>
              <button onClick={nextSlide} className="w-20 h-20 rounded-full bg-gray-200/50 hover:bg-gray-300/50 flex items-center justify-center transition-colors border-4 border-[#00CCFF]">
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#05204B]" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABLA BALÍSTICA ── */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="w-full px-4 sm:px-8">
          <div className="flex justify-center overflow-x-auto">
            <img
              src={`/ballistics/Tabla_Balistica_PG_2025-${language.toUpperCase()}.webp`}
              alt="Tabla Balística PG 2025"
              className="w-full rounded-2xl shadow-xl max-h-none"
            />
          </div>
        </div>
      </section>

      {/* Brochures */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204B] text-center mb-16 font-montserrat">{t(c.brochuresTitle, language)}</h2>
          <div className="space-y-4 sm:space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#3E3E3E] font-montserrat leading-snug">{t(tr.brochure1, language)}</span>
              <a href="/brochures/BrochurePGuperSlim-ES.pdf" download className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 bg-[#C5D5FE] hover:bg-[#B0C5F0] rounded-lg flex items-center justify-center transition-colors">
                <Download className="w-7 h-7 sm:w-10 sm:h-10 text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black"><Footer /></div>
    </div>
  );
};

export default SuperSlimPage;
