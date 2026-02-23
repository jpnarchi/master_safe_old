import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from "sonner";
import { useLanguage } from '../contexts/LanguageContext';
import { steelglassTranslations as tr, commonTranslations as c, t } from '../translations';

const SteelGlassPage = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const keyBenefits = tr.benefits[language];
  const useCaseImages = [
    '/lovable-uploads/casos_de_uso_slider_1.png',
    '/lovable-uploads/casos_de_uso_slider_1.png',
    '/lovable-uploads/casos_de_uso_slider_1.png',
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
        <img src="/Hero_img_PG_Neu_1.png" alt="SteelGlass Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-white text-base sm:text-xl md:text-2xl font-normal mb-3 sm:mb-4 font-montserrat">
            {t(tr.heroSubtitle, language)}
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 font-montserrat leading-tight">
            {t(tr.heroTitle, language)}
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-3xl leading-relaxed font-montserrat">
            {t(tr.heroDescription, language)}
          </p>
          <div className="absolute bottom-8 sm:bottom-12 flex gap-3">
            <div className="w-3 h-3 rounded-full bg-white/70"></div>
            <div className="w-3 h-3 rounded-full bg-[#7F8CAD]"></div>
            <div className="w-3 h-3 rounded-full bg-white/70"></div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.70) -12.84%, rgba(21, 54, 89, 0.70) 91.07%)'}}>
        <div className="mx-auto flex flex-col items-center pb-64" style={{width: '1728px', maxWidth: '100%'}}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 mt-10 sm:mt-16 mx-4 sm:mx-auto px-6 py-5 sm:py-0 h-auto sm:h-[146px] w-full sm:w-[95%] max-w-[1568px]" style={{
            borderRadius: '23px', background: 'rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          }}>
            <img src="/lovable-uploads/SteelGlasslogo.png" alt="SteelGlass Logo" className="object-contain w-[180px] sm:w-[280px] md:w-[389px] h-auto" />
            <h2 className="font-normal text-black font-montserrat text-2xl sm:text-3xl md:text-4xl">{t(c.keyBenefits, language)}</h2>
          </div>

          <div className="mb-12 w-full px-4" style={{maxWidth: '1200px'}}>
            <div className="space-y-2">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-start gap-4">
                  <img src="/lovable-uploads/checkmark_bullet.png" alt="Checkmark" className="w-8 h-8 flex-shrink-0 mt-1 object-contain" />
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

          <div className="mb-12 w-full px-4" style={{maxWidth: '1200px'}}>
            <p className="text-center text-base md:text-lg font-montserrat whitespace-pre-line">{tabDescriptions[activeTab]}</p>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center -bottom-16 sm:-bottom-28 md:-bottom-36 lg:-bottom-44 xl:-bottom-56 2xl:-bottom-[271px]">
          <img src="/lovable-uploads/img_tab_1_pg_neu.png" alt="SteelGlass Product" className="object-contain w-[95vw] max-w-[1526px] h-auto" />
        </div>
      </section>

      <div className="h-16 sm:h-28 md:h-36 lg:h-44 xl:h-56 2xl:h-[271px]"></div>

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

      {/* Brochures */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204B] text-center mb-16 font-montserrat">{t(c.brochuresTitle, language)}</h2>
          <div className="space-y-4 sm:space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#3E3E3E] font-montserrat leading-snug">{t(tr.brochure1, language)}</span>
              <button className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 bg-[#C5D5FE] hover:bg-[#B0C5F0] rounded-lg flex items-center justify-center transition-colors">
                <Download className="w-7 h-7 sm:w-10 sm:h-10 text-black" />
              </button>
            </div>
            <div className="flex items-center justify-between gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-sm sm:text-base md:text-xl lg:text-2xl text-[#3E3E3E] font-montserrat leading-snug">{t(tr.brochure2, language)}</span>
              <button className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 bg-[#C5D5FE] hover:bg-[#B0C5F0] rounded-lg flex items-center justify-center transition-colors">
                <Download className="w-7 h-7 sm:w-10 sm:h-10 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <img src="/bg_form_contact@2x.png" alt="Contact Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="text-white space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-montserrat">{t(c.contact.headline, language)}</h2>
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-light leading-snug font-montserrat">{t(c.contact.subheadline, language)}</p>
            </div>
            <div className="space-y-4 sm:space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm sm:text-base lg:text-lg font-bold mb-1 font-montserrat">{t(c.contact.labelName, language)}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white font-montserrat text-sm sm:text-base"
                    placeholder={t(c.contact.placeholderName, language)} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white text-sm sm:text-base lg:text-lg font-bold mb-1 font-montserrat">{t(c.contact.labelEmail, language)}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-3 py-2 sm:py-3 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white font-montserrat text-sm sm:text-base"
                    placeholder={t(c.contact.placeholderEmail, language)} required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white text-sm sm:text-base lg:text-lg font-bold mb-1 font-montserrat">{t(c.contact.labelMessage, language)}</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                    className="w-full px-3 py-2 sm:py-3 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white font-montserrat resize-none text-sm sm:text-base"
                    placeholder={t(c.contact.placeholderMessage, language)} required />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-2">
                  <button type="button" onClick={handleCancel}
                    className="w-full sm:flex-1 px-3 py-3 sm:py-4 bg-transparent border-2 border-white rounded-lg text-white text-sm sm:text-base lg:text-lg font-bold hover:bg-white/10 transition-colors font-montserrat">
                    {t(c.contact.cancel, language)}
                  </button>
                  <button type="submit"
                    className="w-full sm:flex-1 px-3 py-3 sm:py-4 bg-[#08254C] rounded-lg text-white text-sm sm:text-base lg:text-lg font-bold hover:bg-[#0a2d5c] transition-colors font-montserrat">
                    {t(c.contact.send, language)}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black"><Footer /></div>
    </div>
  );
};

export default SteelGlassPage;
