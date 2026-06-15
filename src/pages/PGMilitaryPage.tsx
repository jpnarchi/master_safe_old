import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const mt = {
  downloadsTitle: { es: "Descubre nuestras soluciones Military-Grade", en: "Explore our Military-Grade solutions", pt: "Descubra nossas soluções Military-Grade" },
  downloadMilitary: {
    es: "Descarga el folleto",
    en: "Download the brochure",
    pt: "Baixe o folheto"
  },
  protectTitle: { es: "Protegemos tu seguridad", en: "We Protect Your Security", pt: "Protegemos sua segurança" },
  protectDesc: {
    es: "Confía en la experiencia y calidad de un líder en seguridad automotriz.",
    en: "Trust the experience and quality of a leader in automotive security.",
    pt: "Confie na experiência e qualidade de um líder em segurança automotiva."
  },
  fullName: { es: "Nombre completo", en: "Full Name", pt: "Nome completo" },
  email: { es: "Email", en: "Email", pt: "Email" },
  message: { es: "Mensaje", en: "Message", pt: "Mensagem" },
  namePlaceholder: { es: "Introduzca su nombre", en: "Enter your name", pt: "Digite seu nome" },
  emailPlaceholder: {
    es: "Introduzca su dirección de correo electrónico",
    en: "Enter your email address",
    pt: "Digite seu endereço de e-mail"
  },
  messagePlaceholder: { es: "Escriba aquí su mensaje", en: "Write your message here", pt: "Escreva sua mensagem aqui" },
  cancel: { es: "Cancel", en: "Cancel", pt: "Cancelar" },
  send: { es: "Enviar", en: "Send", pt: "Enviar" },
  learnMore: { es: "Conocer más", en: "Learn more", pt: "Saiba mais" },
  milIntroDesc: {
    es: "Nuestras aplicaciones militares ofrecen los más altos niveles de protección balística para personal y equipos de defensa. Diseñadas para resistir condiciones extremas de combate, nuestras soluciones de vidrio balístico brindan protección superior manteniendo la efectividad operacional.",
    en: "Our military applications deliver the highest levels of ballistic protection for defense personnel and equipment. Designed to withstand extreme combat conditions, our ballistic glass solutions provide superior protection while maintaining operational effectiveness.",
    pt: "Nossas aplicações militares oferecem os mais altos níveis de proteção balística para pessoal e equipamentos de defesa. Projetadas para resistir a condições extremas de combate, nossas soluções de vidro balístico oferecem proteção superior mantendo a efetividade operacional.",
  },
  toastSuccess: {
    es: "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
    en: "Message sent successfully. We will contact you soon.",
    pt: "Mensagem enviada com sucesso. Entraremos em contato em breve."
  },
  milGradeTitle: {
    es: "Soluciones de Protección Militar",
    en: "Military Protection Solutions",
    pt: "Soluções de Proteção Militar"
  },
  milGradeDesc1: {
    es: "Nuestras aplicaciones militares ofrecen los más altos niveles de protección balística para el personal y equipos de defensa. Diseñadas para resistir condiciones extremas de combate.",
    en: "Our military applications offer the highest levels of ballistic protection for defense personnel and equipment. Designed to withstand extreme combat conditions.",
    pt: "Nossas aplicações militares oferecem os mais altos níveis de proteção balística para pessoal e equipamentos de defesa."
  },
  milGradeDesc2: {
    es: "De vehículos blindados a instalaciones militares, nuestros productos cumplen rigurosos estándares y especificaciones militares. Cada solución se diseña a medida para abordar niveles de amenaza específicos.",
    en: "From armored vehicles to military facilities, our products meet rigorous military standards and specifications. Each solution is custom-designed for specific threat levels.",
    pt: "De veículos blindados a instalações militares, nossos produtos atendem a rigorosos padrões militares."
  },
  nijCertified: { es: "Protección Certificada NIJ", en: "NIJ Certified Protection", pt: "Proteção Certificada NIJ" },
  multiHit: { es: "Resistencia Multi-Impacto", en: "Multi-Impact Resistance", pt: "Resistência Multi-Impacto" },
  extremeEnv: { es: "Durabilidad en Ambiente Extremo", en: "Durability in Extreme Environments", pt: "Durabilidade em Ambiente Extremo" },
  successCase1Title: {
    es: "Proyecto: Astros II (Rocket Launcher)",
    en: "Project: Astros II (Rocket Launcher)",
    pt: "Projeto: Astros II (Rocket Launcher)"
  },
  successCase1Details: {
    es: "Nivel: NATO STANAG 4569 Nivel I\nPaís: Brasil\nCliente: AVIBRAS Aeroespacial\nPlanta: PG Brasil\nProducto: PG 011-00\nEspesor: 40 mm",
    en: "Level: NATO STANAG 4569 Level I\nCountry: Brazil\nClient: AVIBRAS Aeroespacial\nPlant: PG Brasil\nProduct: PG 011-00\nThickness: 40 mm",
    pt: "Nível: NATO STANAG 4569 Nível I\nPaís: Brasil\nCliente: AVIBRAS Aeroespacial\nPlanta: PG Brasil\nProduto: PG 011-00\nEspessura: 40 mm"
  },
  successCase2Title: {
    es: "Proyecto: Bloques de visión en torreta blindada",
    en: "Project: Vision Blocks in Armored Turret",
    pt: "Projeto: Blocos de visão em torre blindada"
  },
  successCase2Details: {
    es: "Vehículo: IVECO Guarani VBTP 6x6\nNivel: CEN 1063 Nivel B7\nPaís: Brasil\nCliente: ARES Aeroespacial\nPlanta: PG Brasil\nProducto: PG 013-00\nEspesor: 75 mm",
    en: "Vehicle: IVECO Guarani VBTP 6x6\nLevel: CEN 1063 Level B7\nCountry: Brazil\nClient: ARES Aeroespacial\nPlant: PG Brasil\nProduct: PG 013-00\nThickness: 75 mm",
    pt: "Veículo: IVECO Guarani VBTP 6x6\nNível: CEN 1063 Nível B7\nPaís: Brasil\nCliente: ARES Aeroespacial\nPlanta: PG Brasil\nProduto: PG 013-00\nEspessura: 75 mm"
  },
  specializedTitle: { es: "Soluciones especializadas", en: "Specialized solutions", pt: "Soluções especializadas" },
  aeroTitle: { es: "Aeronáutico", en: "Aeronautical", pt: "Aeronáutico" },
  aeroPara1: {
    es: "Desarrollamos cristales blindados de alta tecnología diseñados específicamente para la industria aeronáutica, adaptados a los requerimientos técnicos y operativos de cada cliente.",
    en: "We develop high-performance armored glass solutions specifically engineered for the aeronautical industry, tailored to meet each client's technical and operational requirements.",
    pt: "Desenvolvemos cristais blindados de alta tecnologia projetados especificamente para a indústria aeronáutica, adaptados às necessidades técnicas e operacionais de cada cliente."
  },
  aeroPara2: {
    es: "Nuestras soluciones combinan resistencia balística, ligereza y precisión estructural, garantizando el máximo desempeño en condiciones exigentes.",
    en: "Our products combine ballistic resistance, lightweight performance, and structural precision, ensuring optimal performance under demanding conditions.",
    pt: "Nossas soluções combinam resistência balística, leveza e precisão estrutural, garantindo alto desempenho em condições exigentes."
  },
  aeroPara3: {
    es: "Trabajamos de la mano con fabricantes y especialistas del sector para diseñar, fabricar e integrar soluciones a medida, cumpliendo con los más altos estándares de seguridad, calidad y certificación aeronáutica.",
    en: "We collaborate closely with manufacturers and industry specialists to design, produce, and integrate custom solutions that meet the highest standards of safety, quality, and aeronautical certification.",
    pt: "Trabalhamos em conjunto com fabricantes e especialistas do setor para desenvolver, produzir e integrar soluções sob medida, atendendo aos mais altos padrões de segurança, qualidade e certificação aeronáutica."
  },
  nauticTitle: { es: "Sector Náutico", en: "Nautical Sector", pt: "Setor Náutico" },
  nauticPara1: {
    es: "Diseñamos soluciones transparentes blindadas pensadas para entornos marítimos, donde la resistencia, la visibilidad y la durabilidad son clave.",
    en: "We design armored transparent solutions built for marine environments, where strength, visibility, and durability are essential.",
    pt: "Projetamos soluções transparentes blindadas desenvolvidas para ambientes marítimos, onde resistência, visibilidade e durabilidade são fundamentais."
  },
  nauticPara2: {
    es: "Nuestros desarrollos están preparados para enfrentar condiciones extremas como impacto, presión, salinidad y exposición constante al ambiente, sin comprometer el rendimiento ni la estética.",
    en: "Our systems are engineered to withstand extreme conditions such as impact, pressure, salinity, and continuous environmental exposure, without compromising performance or aesthetics.",
    pt: "Nossos sistemas são preparados para enfrentar condições extremas como impacto, pressão, salinidade e exposição contínua ao ambiente, sem comprometer o desempenho ou a estética."
  },
  nauticPara3: {
    es: "Cada proyecto se adapta a las necesidades específicas de la embarcación, integrando materiales de alto desempeño que garantizan seguridad, confiabilidad y larga vida útil en operación.",
    en: "Each solution is tailored to the vessel's specific requirements, integrating high-performance materials that ensure safety, reliability, and long-term operation.",
    pt: "Cada solução é adaptada às necessidades específicas da embarcação, utilizando materiais de alto desempenho que garantem segurança, confiabilidade e longa vida útil."
  },
};

const PGMilitaryPage = () => {
  const { language } = useLanguage();
  const lang = language as 'es' | 'en' | 'pt';
  const T = (obj: { es: string; en: string; pt: string }) => obj[lang];

  const torretaImages = [
    '/military/torreta-blindada-1.webp',
    '/military/torreta-blindada-2.webp',
    '/military/torreta-blindada-3.webp',
  ];
  const [torretaIndex, setTorretaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTorretaIndex(prev => (prev + 1) % torretaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const astrosImages = [
    '/military/astros-ii-1.webp',
    '/military/astros-ii-2.webp',
  ];
  const [astrosIndex, setAstrosIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAstrosIndex(prev => (prev + 1) % astrosImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    '/military/herosegmentsmilitary-1.webp',
    '/military/herosegmentsmilitary-2.webp',
  ];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success(T(mt.toastSuccess));
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === heroIndex ? 1 : 0 }}
          >
            <img
              src={src}
              alt={`PG Military Applications ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === heroIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Title Card */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-[122px] sm:-mt-[152px] md:-mt-[182px] mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <div className="flex justify-center mb-6">
            <img
              src="/Military-Solutions-Logo.webp"
              alt="PG Military Solutions"
              className="h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto">
            {T(mt.milIntroDesc)}
          </p>
        </div>
      </div>

      {/* Military-Grade Protection Solutions Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-pgnavy">{T(mt.milGradeTitle)}</span>
          </h2>

          {/* Tab Segments Image */}
          <div className="w-full mb-8 sm:mb-12">
            <img
              src="/military/Tab-SegmentsMilitary.webp"
              alt="Military Segments"
              className="w-full object-cover rounded-xl"
            />
          </div>

          {/* Description Text */}
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              {T(mt.milGradeDesc1)}
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {T(mt.milGradeDesc2)}
            </p>
          </div>

          {/* Three Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* NIJ Certified Protection */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/military/protec.svg" alt="Protección Certificada NIJ" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#526239' }}>
                {T(mt.nijCertified)}
              </h3>
            </div>

            {/* Multi-Impact Resistance */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/military/sec.svg" alt="Resistencia Multi-Impacto" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#526239' }}>
                {T(mt.multiHit)}
              </h3>
            </div>

            {/* Extreme Environment Durability */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                <img src="/military/term.svg" alt="Durabilidad en Ambiente Extremo" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#526239' }}>
                {T(mt.extremeEnv)}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ballistic Chart Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-full px-4 sm:px-8">
          <div className="flex justify-center overflow-x-auto">
            <img
              src={`/military/tabla-balistica-military-${lang}.webp`}
              alt="Tabla Balística Military"
              className="w-full max-w-3xl rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Success Cases 50/50 Sections */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* First 50/50: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg">
              {astrosImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Astros II ${idx + 1}`}
                  className="w-full object-cover transition-opacity duration-1000 absolute inset-0"
                  style={{ opacity: idx === astrosIndex ? 1 : 0, position: idx === 0 ? 'relative' : 'absolute' }}
                />
              ))}
              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {astrosImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAstrosIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === astrosIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">
                {T(mt.successCase1Title)}
              </h3>
              {T(mt.successCase1Details).split('\n').map((line, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Second 50/50: Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">
                {T(mt.successCase2Title)}
              </h3>
              {T(mt.successCase2Details).split('\n').map((line, i) => (
                <p key={i} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-lg">
              {torretaImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`Torreta Blindada ${idx + 1}`}
                  className="w-full object-cover transition-opacity duration-1000 absolute inset-0"
                  style={{ opacity: idx === torretaIndex ? 1 : 0, position: idx === 0 ? 'relative' : 'absolute' }}
                />
              ))}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {torretaImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTorretaIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === torretaIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Specialized Solutions Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-pgnavy mb-12 sm:mb-16">
            {T(mt.specializedTitle)}
          </h2>

          {/* Aeronáutico — image left, text right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-8">
            <div className="w-full md:w-1/2">
              <img
                src="/military/maritimo.webp"
                alt="Aeronáutico"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-6">
                {T(mt.aeroTitle)}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {T(mt.aeroPara1)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {T(mt.aeroPara2)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {T(mt.aeroPara3)}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Sector Náutico — text left, image right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-6">
                {T(mt.nauticTitle)}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {T(mt.nauticPara1)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {T(mt.nauticPara2)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {T(mt.nauticPara3)}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/military/aeronautico.webp"
                alt="Sector Náutico"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pgnavy mb-8">
            {T(mt.downloadsTitle)}
          </h2>

          <div className="space-y-0">
            {/* Divider line */}
            <div className="border-t border-gray-200"></div>

            {/* Download Military grade */}
            <div className="flex items-center justify-between py-6">
              <span className="text-gray-700 text-sm sm:text-base">
                {T(mt.downloadMilitary)}
              </span>
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#c5d5fe] rounded-lg flex items-center justify-center hover:bg-pgblue transition-colors duration-300">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-pgnavy" />
              </button>
            </div>

            {/* Divider line */}
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="w-full py-16 lg:py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/contact/bg_form_contact@2x.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px'
        }}
      >
        <div className="absolute inset-0 bg-black/35 mix-blend-multiply"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {T(mt.protectTitle)}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                {T(mt.protectDesc)}
              </p>
            </div>

            {/* Right Contact Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-base lg:text-lg font-bold mb-3">
                    {T(mt.fullName)}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={T(mt.namePlaceholder)}
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-bold mb-3">
                    {T(mt.email)}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={T(mt.emailPlaceholder)}
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-bold mb-3">
                    {T(mt.message)}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={T(mt.messagePlaceholder)}
                    rows={4}
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white resize-none text-base"
                    required
                  ></textarea>
                </div>

                <div className="flex gap-5 pt-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ name: '', email: '', message: '' })}
                    className="flex-1 py-4 px-8 bg-transparent border-2 border-white text-white rounded-lg font-bold text-base hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {T(mt.cancel)}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 px-8 bg-pgnavy text-white rounded-lg font-bold text-base hover:bg-pgblue transition-all duration-300"
                  >
                    {T(mt.send)}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGMilitaryPage;
