import React, { useState } from 'react';
import { Check, Download } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const at = {
  filesDownload: { es: 'Archivos para descargar', en: 'Files to Download', pt: 'Arquivos para Download' },
  downloadOEM: { es: 'Descargue nuestros Casos de éxito OEM', en: 'Download our OEM Success Cases', pt: 'Baixe nossos Casos de Sucesso OEM' },
  downloadRetrofit: { es: 'Descargue nuestros Casos de éxito Retrofit', en: 'Download our Retrofit Success Cases', pt: 'Baixe nossos Casos de Sucesso Retrofit' },
  learnMore: { es: 'Conocer más', en: 'Learn more', pt: 'Saiba mais' },
  protectSecurity: { es: 'Protegemos tu seguridad', en: 'We Protect Your Security', pt: 'Protegemos sua segurança' },
  trustExperience: { es: 'Confía en la experiencia y calidad de un líder en seguridad automotriz.', en: 'Trust the experience and quality of a leader in automotive security.', pt: 'Confie na experiência e qualidade de um líder em segurança automotiva.' },
  fullName: { es: 'Nombre completo', en: 'Full Name', pt: 'Nome completo' },
  email: { es: 'Email', en: 'Email', pt: 'Email' },
  message: { es: 'Mensaje', en: 'Message', pt: 'Mensagem' },
  enterName: { es: 'Introduzca su nombre', en: 'Enter your name', pt: 'Digite seu nome' },
  enterEmail: { es: 'Introduzca su dirección de correo electrónico', en: 'Enter your email address', pt: 'Digite seu endereço de e-mail' },
  writeMessage: { es: 'Escriba aquí su mensaje', en: 'Write your message here', pt: 'Escreva sua mensagem aqui' },
  cancel: { es: 'Cancel', en: 'Cancel', pt: 'Cancelar' },
  send: { es: 'Enviar', en: 'Send', pt: 'Enviar' },
  pgBrgDesc1: {
    es: 'Somos especialistas en soluciones de vidrio balístico automotriz, desarrolladas bajo los más estrictos estándares internacionales. Nuestros productos combinan tecnología de punta con ingeniería de precisión para ofrecer protección superior sin comprometer la estética ni el rendimiento del vehículo.',
    en: 'We specialize in automotive ballistic glass solutions, developed under the strictest international standards. Our products combine cutting-edge technology with precision engineering to deliver superior protection without compromising vehicle aesthetics or performance.',
    pt: 'Somos especialistas em soluções de vidro balístico automotivo, desenvolvidas sob os mais rígidos padrões internacionais. Nossos produtos combinam tecnologia de ponta com engenharia de precisão para oferecer proteção superior sem comprometer a estética ou o desempenho do veículo.',
  },
  pgBrgDesc2: {
    es: 'Con presencia en México y Brasil, y una red de distribución internacional, acompañamos a nuestros clientes desde la especificación técnica hasta la instalación final, garantizando calidad total en cada proyecto.',
    en: 'With operations in Mexico and Brazil and an international distribution network, we support our clients from technical specification to final installation, ensuring total quality in every project.',
    pt: 'Com operações no México e Brasil e uma rede de distribuição internacional, acompanhamos nossos clientes desde a especificação técnica até a instalação final, garantindo qualidade total em cada projeto.',
  },
  retrofitTitle: { es: 'Soluciones Retrofit', en: 'Retrofit Solutions', pt: 'Soluções Retrofit' },
  retrofitDesc1: {
    es: 'Nuestras soluciones retrofit permiten integrar protección balística avanzada en vehículos existentes. Ya sea para mejorar flotas o proteger objetivos de alto valor, nuestros sistemas retrofit mantienen la funcionalidad del vehículo mientras añaden características de seguridad superiores.',
    en: 'Our retrofit solutions enable the integration of advanced ballistic protection into existing vehicles. Whether upgrading fleet vehicles or providing protection for high-value targets, our retrofit systems maintain vehicle functionality while adding superior security features.',
    pt: 'Nossas soluções retrofit permitem integrar proteção balística avançada em veículos existentes. Seja para melhorar frotas ou proteger alvos de alto valor, nossos sistemas retrofit mantêm a funcionalidade do veículo enquanto adicionam recursos de segurança superiores.',
  },
  retrofitDesc2: {
    es: 'Con amplia experiencia en instalaciones posventa, brindamos servicios integrales que incluyen evaluación, diseño, fabricación e instalación profesional. Nuestras soluciones se adaptan a niveles de amenaza y requisitos operacionales específicos.',
    en: 'With extensive experience in aftermarket installations, we provide comprehensive retrofit services that include assessment, design, manufacturing, and professional installation. Our solutions are tailored to meet specific threat levels and operational requirements.',
    pt: 'Com vasta experiência em instalações pós-venda, oferecemos serviços completos que incluem avaliação, design, fabricação e instalação profissional. Nossas soluções são adaptadas para atender a níveis de ameaça e requisitos operacionais específicos.',
  },
  retrofitFeat1: { es: 'Integración en vehículos existentes', en: 'Existing Vehicle Integration', pt: 'Integração em veículos existentes' },
  retrofitFeat2: { es: 'Soluciones personalizadas', en: 'Custom Solutions', pt: 'Soluções personalizadas' },
  retrofitFeat3: { es: 'Instalación profesional', en: 'Professional Installation', pt: 'Instalação profissional' },
  oemTitle: { es: 'Soluciones OEM', en: 'OEM Solutions', pt: 'Soluções OEM' },
  oemDesc1: {
    es: 'Nuestras soluciones OEM (Fabricante de Equipos Originales) ofrecen sistemas integrales de protección balística diseñados específicamente para fabricantes de vehículos. Trabajamos directamente con empresas automotrices para integrar nuestras tecnologías de vidrio balístico durante el proceso de fabricación.',
    en: 'Our OEM (Original Equipment Manufacturer) solutions provide comprehensive ballistic protection systems designed specifically for vehicle manufacturers. We work directly with automotive companies to integrate our advanced ballistic glass technologies during the manufacturing process.',
    pt: 'Nossas soluções OEM (Fabricante de Equipamentos Originais) oferecem sistemas abrangentes de proteção balística projetados especificamente para fabricantes de veículos. Trabalhamos diretamente com empresas automotivas para integrar nossas tecnologias de vidro balístico durante o processo de fabricação.',
  },
  oemDesc2: {
    es: 'Nuestras alianzas OEM garantizan una integración perfecta, manteniendo la estética original del vehículo con protección superior. Desde la consultoría inicial hasta la producción final, apoyamos a los fabricantes con soluciones balísticas de vanguardia que cumplen los más altos estándares de seguridad.',
    en: 'Our OEM partnerships ensure seamless integration, maintaining the original vehicle aesthetics while providing superior protection. From initial design consultation to final production, we support manufacturers with cutting-edge ballistic solutions that meet the highest safety standards.',
    pt: 'Nossas parcerias OEM garantem integração perfeita, mantendo a estética original do veículo com proteção superior. Desde a consultoria de design inicial até a produção final, apoiamos os fabricantes com soluções balísticas de ponta que atendem aos mais altos padrões de segurança.',
  },
  oemFeat1: { es: 'Integración en fábrica', en: 'Factory Integration', pt: 'Integração em fábrica' },
  oemFeat2: { es: 'Estética original preservada', en: 'Original Aesthetics', pt: 'Estética original preservada' },
  oemFeat3: { es: 'Control de calidad', en: 'Quality Assurance', pt: 'Controle de qualidade' },
  retrofitCasesTitle: { es: 'Casos de Éxito Retrofit', en: 'Retrofit Success Cases', pt: 'Casos de Sucesso Retrofit' },
  retrofitCasesDesc: { es: 'Transformando vehículos existentes con soluciones avanzadas de protección balística', en: 'Transforming existing vehicles with advanced ballistic protection solutions', pt: 'Transformando veículos existentes com soluções avançadas de proteção balística' },
  oemCasesTitle: { es: 'Casos de Éxito OEM', en: 'OEM Success Cases', pt: 'Casos de Sucesso OEM' },
  oemCasesDesc: { es: 'Destacando nuestras alianzas exitosas con fabricantes automotrices a nivel mundial', en: 'Showcasing our successful partnerships with automotive manufacturers worldwide', pt: 'Destacando nossas parcerias de sucesso com fabricantes automotivos em todo o mundo' },
};

const PGAutomotivePage = () => {
  const { language } = useLanguage();
  const T = (obj: { es: string; en: string; pt: string }) => obj[language as 'es' | 'en' | 'pt'];

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
    toast.success(
      language === 'es'
        ? 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
        : language === 'en'
        ? 'Message sent successfully. We will contact you soon.'
        : 'Mensagem enviada com sucesso. Entraremos em contato em breve.'
    );
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
        <div className="absolute inset-0">
          <img
            src="/products/steelglass/steelglassfotocarrusel0.webp"
            alt="PG Automotive BRG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pgblue/80 to-pgnavy/60"></div>
        </div>
      </section>

      {/* Title Card - overlapping hero and next section */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-24 sm:-mt-28 md:-mt-32 mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="text-pgnavy">PG Transport</span>{' '}
            <span className="text-pgblue">Solutions</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto mb-4">
            {T(at.pgBrgDesc1)}
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto">
            {T(at.pgBrgDesc2)}
          </p>
        </div>
      </div>

      {/* Two Column Layout - Retrofit and OEM Solutions */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Retrofit Solutions */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">{T(at.retrofitTitle)}</span>
              </h2>

              {/* Retrofit Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[360px]">
                <img
                  src="/products/steelglass/steelglassfotocarrusel0.webp"
                  alt="Retrofit Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Retrofit Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {T(at.retrofitDesc1)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {T(at.retrofitDesc2)}
              </p>

              {/* Retrofit Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">{T(at.retrofitFeat1)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">{T(at.retrofitFeat2)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">{T(at.retrofitFeat3)}</span>
                </div>
              </div>
            </div>

            {/* OEM Solutions */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">{T(at.oemTitle)}</span>
              </h2>

              {/* OEM Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[360px]">
                <img
                  src="/products/steelglass/steelglassfotocarrusel0.webp"
                  alt="OEM Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* OEM Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {T(at.oemDesc1)}
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {T(at.oemDesc2)}
              </p>

              {/* OEM Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">{T(at.oemFeat1)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">{T(at.oemFeat2)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">{T(at.oemFeat3)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases 50/50 Sections */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* First 50/50: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <img
                src="/automotive/44604513-e2f1-4816-b14b-13ac8e66c935.webp"
                alt="Retrofit Success Case"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">
                {T(at.retrofitCasesTitle)}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200"></div>

          {/* Second 50/50: Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">
                {T(at.oemCasesTitle)}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/automotive/82e0c0e3-aaad-4d7f-aa32-398f7c44bafe.webp"
                alt="OEM Success Case"
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
            {T(at.filesDownload)}
          </h2>

          <div className="space-y-0">
            {/* Divider line */}
            <div className="border-t border-gray-200"></div>

            {/* Download OEM */}
            <div className="flex items-center justify-between py-6">
              <span className="text-gray-700 text-sm sm:text-base">
                {T(at.downloadOEM)}
              </span>
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-pgnavy rounded-lg flex items-center justify-center hover:bg-pgblue transition-colors duration-300">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>

            {/* Divider line */}
            <div className="border-t border-gray-200"></div>

            {/* Download Retrofit */}
            <div className="flex items-center justify-between py-6">
              <span className="text-gray-700 text-sm sm:text-base">
                {T(at.downloadRetrofit)}
              </span>
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-pgnavy rounded-lg flex items-center justify-center hover:bg-pgblue transition-colors duration-300">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {T(at.protectSecurity)}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                {T(at.trustExperience)}
              </p>
            </div>

            {/* Right Contact Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-white text-base lg:text-lg font-medium mb-4">
                    {T(at.fullName)}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={T(at.enterName)}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 text-base lg:text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-medium mb-4">
                    {T(at.email)}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={T(at.enterEmail)}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 text-base lg:text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-medium mb-4">
                    {T(at.message)}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={T(at.writeMessage)}
                    rows={5}
                    className="w-full px-6 py-4 bg-transparent border-2 border-white border-opacity-70 rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-white focus:border-opacity-100 resize-none text-base lg:text-lg"
                    required
                  ></textarea>
                </div>

                <div className="flex gap-6 pt-6">
                  <button
                    type="button"
                    onClick={() => setFormData({ name: '', email: '', message: '' })}
                    className="flex-1 py-4 px-8 bg-transparent border-2 border-white text-white rounded-lg font-medium text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300"
                  >
                    {T(at.cancel)}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 px-8 bg-blue-600 text-white rounded-lg font-medium text-base lg:text-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    {T(at.send)}
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

export default PGAutomotivePage;
