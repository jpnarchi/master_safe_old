import React, { useState } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from "sonner";

const GlassGuardPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const tabs = ['PG Glass Guard', 'Composición', 'Tecnología', 'Especificaciones'];

  const tabDescriptions = [
    // Tab 1 - PG GLASSGUARD
    `PG desarrolla soluciones de vidrio blindado para diferentes aplicaciones basadas en normas balísticas vigentes con formulaciones avanzadas en espesor y peso usando materiales de última generación que como resultado se consigue un producto duradero y con acabados premium. El portafolio incluye opciones para protección frente a armas cortas con espesores desde los 14mm hasta protección a armas largas y perforantes de más de 70mm.`,
    // Tab 2 - COMPOSICIÓN
    `La composición de GlassGuard se desarrolla con materiales certificados y procesos detallados para asegurar el ADN de PG; balística innovadora, geometría estable, óptica destacable y estética única. En línea a lo anterior variedad de colores y transmisiones de luz que complementan accesorios como redes desempañantes, antenas, orificios para limpiadores etc.`,
    // Tab 3 - TECNOLOGÍA
    `Todas las composiciones de GlassGuard de acuerdo a la tabla balística pueden ser complementados con los accesorios originales para cada modelo de vehículo y con características adicionales tales como: redes desempañantes, adaptaciones para cámaras y sensores, gunports, etc`,
    // Tab 4 - ESPECIFICACIONES
    `GlassGuard Atiende, entre otras, las siguientes normas de resistencia balística: ABNT NBR 15000, CEN 1063, NATO STANAG 4569, NIJ 0108.01, RENAR MA.02, VPAM APR 2006, VPAM BRV 2009, VPAM ERV 2010, VPAM PM 2007, NOM 142 SCFI 2000.

El portafolio de PG Products se desarrolla bajo diversas normas y especificaciones además se evalúan regularmente en nuestro laboratorio y en laboratorios internacionales siguiendo rigurosos métodos, estándares y regulaciones:

- ALEMANIA - Beschussamt - Mellrichstadt y ULM
- ARGENTINA - RENAR
- BRASIL - Campo de Provas Marambaia
- EUA - OBL Oregon Ballistic Lab USA, Chesapeake laboratories
- HOLANDA - TNO Automotive

[NOTA: Incluir tabla balística aquí]`
  ];

  const useCases = [
    {
      title: 'Aplicaciones blindaje civil y Gubernamental',
      description: 'Soluciones certificadas para protección de vehículos oficiales y de gobierno desde niveles de protección urbana de delincuencia común, como para organizada y terrorismo.',
      image: '/lovable-uploads/casos_de_uso_slider_3.png'
    },
    {
      title: 'Transporte de valores',
      description: 'En un entorno de alta seguridad, la protección es primordial. Descubra cómo GlassGuard ofrece soluciones de blindaje personalizadas para vehículos de transporte de valores.',
      image: '/lovable-uploads/casos_de_uso_slider_3.png'
    },
    {
      title: 'Botes y aplicaciones marítimas',
      description: 'Protección para aplicaciones marítimas y de alta gama, yates y fragatas que requieren máxima seguridad sin comprometer la estética.',
      image: '/lovable-uploads/casos_de_uso_slider_3.png'
    }
  ];

  const keyBenefits = [
    { label: 'Balística:', detail: 'Formulaciones diseñadas para soportar diferentes tipos de amenazas.' },
    { label: 'Óptica:', detail: 'Visión clara y sin distorsiones.' },
    { label: 'Durabilidad:', detail: 'Composición única enfocada a extender su vida útil.' },
    { label: 'Originalidad:', detail: 'Adaptable a cualquier plataforma vehicular' },
    { label: 'Seguridad:', detail: 'vidrios certificados según normas internacionales.' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor complete todos los campos requeridos");
      return;
    }
    console.log('Form submitted:', formData);
    toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', message: '' });
    toast.info("Formulario cancelado");
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[740px] w-full overflow-hidden">
        <img
          src="/Hero_img_PG_Glassguard_1.png"
          alt="GlassGuard Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 max-w-7xl mx-auto">
          <h1 className="text-white text-xl md:text-2xl font-normal text-center mb-4 font-montserrat">
            Vidrio premium de resistencia balística certificada
          </h1>

          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 font-montserrat">
            PG GlassGuard
          </h2>

          <p className="text-white text-base md:text-lg lg:text-xl font-normal text-center max-w-3xl leading-relaxed font-montserrat">
            GlassGuard compone un portafolio de soluciones de blindaje
            transparente según normas locales e internacionales para
            diferentes aplicaciones de alta especificación, además está formulado con materiales avanzados y procesos detallados. El producto PG cuenta con experiencia y gestión de calidad certificada ISO 9001.
          </p>

          {/* Navigation Dots */}
          <div className="absolute bottom-12 flex gap-3">
            <div className="w-3 h-3 rounded-full bg-[#7F8CAD]"></div>
            <div className="w-3 h-3 rounded-full bg-white/70"></div>
            <div className="w-3 h-3 rounded-full bg-white/70"></div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section with Extended Blue Background */}
      <section className="relative" style={{background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.80) 4.44%, rgba(4, 64, 161, 0.80) 108.12%)'}}>
        <div className="mx-auto flex flex-col items-center pb-64" style={{width: '1728px', maxWidth: '100%'}}>
          {/* Premium Armor Glass Logo and Title */}
          <div className="flex items-center justify-center gap-6 mb-12 mt-16" style={{
            width: '1568px',
            height: '146px',
            maxWidth: '95%',
            borderRadius: '23px',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
          }}>
            <img
              src="/lovable-uploads/Glassguardlogo.png"
              alt="GlassGuard Logo"
              style={{width: '389px', height: '50px'}}
              className="object-contain"
            />
            <h2 className="font-normal text-black font-montserrat" style={{width: '265px', height: '36px', fontSize: '36px', lineHeight: '36px'}}>
              Key Benefits
            </h2>
          </div>

          {/* Benefits List */}
          <div className="mb-12 w-full px-4" style={{maxWidth: '1200px'}}>
            <div className="space-y-2">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-start gap-4">
                  <img
                    src="/lovable-uploads/checkmark_bullet.png"
                    alt="Checkmark"
                    className="w-8 h-8 flex-shrink-0 mt-1 object-contain"
                  />
                  <p className="text-lg md:text-xl font-montserrat">
                    <span className="font-bold">{benefit.label}</span>{' '}
                    <span className="font-normal">{benefit.detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="mb-8 w-full px-4">
            <div className="flex justify-between items-center border-b border-black pb-4 overflow-x-auto gap-8 max-w-7xl mx-auto">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`text-2xl md:text-3xl font-normal whitespace-nowrap transition-all font-montserrat ${
                    activeTab === index
                      ? 'text-black'
                      : 'text-black/50 hover:text-black/75'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Description */}
          <div className="mb-12 w-full px-4" style={{maxWidth: '1200px'}}>
            <p className="text-center text-base md:text-lg font-montserrat whitespace-pre-line">
              {tabDescriptions[activeTab]}
            </p>
          </div>
        </div>

        {/* Image that overflows out of blue background */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center" style={{bottom: '-271px'}}>
          <img
            src="/lovable-uploads/img_tab_1_pg_glassguard.png"
            alt="GlassGuard Product"
            style={{width: '1526px', height: '543px', maxWidth: '95vw'}}
            className="object-contain"
          />
        </div>
      </section>

      {/* Spacer for overflowing image */}
      <div style={{height: '271px'}}></div>

      {/* Use Cases and Applications */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204B] text-center mb-16 font-montserrat">
            Casos de uso y Aplicaciones
          </h2>

          <div className="relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]">
                <img
                  src={useCases[currentSlide].image}
                  alt={useCases[currentSlide].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-[#05204B] text-center md:text-left font-montserrat">
                  {useCases[currentSlide].title}
                </h3>
                <p className="text-xl md:text-2xl text-[#3E3E3E] text-center md:text-left font-montserrat">
                  {useCases[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center md:justify-end gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="w-20 h-20 rounded-full bg-gray-200/50 hover:bg-gray-300/50 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-[#05204B]" strokeWidth={3} />
              </button>
              <button
                onClick={nextSlide}
                className="w-20 h-20 rounded-full bg-gray-200/50 hover:bg-gray-300/50 flex items-center justify-center transition-colors border-4 border-[#00CCFF]"
              >
                <ChevronRight className="w-8 h-8 text-[#05204B]" strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brochures and Downloads */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#05204B] text-center mb-16 font-montserrat">
            Brochures y Descargas
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-xl md:text-2xl text-[#3E3E3E] font-montserrat">
                Brochure de producto PG GlassGuard.pdf
              </span>
              <button className="w-20 h-20 bg-[#C5D5FE] hover:bg-[#B0C5F0] rounded-lg flex items-center justify-center transition-colors">
                <Download className="w-10 h-10 text-black" />
              </button>
            </div>

            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-xl md:text-2xl text-[#3E3E3E] font-montserrat">
                Tabla balística para PG GlassGuard.pdf
              </span>
              <button className="w-20 h-20 bg-[#C5D5FE] hover:bg-[#B0C5F0] rounded-lg flex items-center justify-center transition-colors">
                <Download className="w-10 h-10 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="/bg_form_contact@2x.png"
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Text */}
            <div className="text-white space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-montserrat">
                Protegemos tu seguridad
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug font-montserrat">
                Confía en la experiencia y calidad de un líder en seguridad automotriz.
              </p>
            </div>

            {/* Right Side - Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-lg font-bold mb-1 font-montserrat">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white font-montserrat"
                    placeholder="Introduzca su nombre"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-lg font-bold mb-1 font-montserrat">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white font-montserrat"
                    placeholder="Introduzca su dirección de correo electrónico"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-lg font-bold mb-1 font-montserrat">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-transparent border border-white rounded-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white font-montserrat resize-none"
                    placeholder="Escriba aquí su mensaje"
                    required
                  />
                </div>

                <div className="flex gap-5 flex-wrap">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex-1 min-w-[240px] px-3 py-4 bg-transparent border-2 border-white rounded-lg text-white text-lg font-bold hover:bg-white/10 transition-colors font-montserrat"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 min-w-[240px] px-3 py-4 bg-[#08254C] rounded-lg text-white text-lg font-bold hover:bg-[#0a2d5c] transition-colors font-montserrat"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with black background */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default GlassGuardPage;
