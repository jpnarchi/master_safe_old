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

      {/* Hero Section - Full width image with gradient overlay */}
      <section className="relative h-[350px] sm:h-[400px] md:h-[442px]">
        <div className="absolute inset-0">
          <img
            src="/steelglassfotocarrusel0.jpg"
            alt="PG Automotive BRG"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pgblue/80 to-pgnavy/60"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative">
        <div className="bg-gray-100 py-16 sm:py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10 md:p-12 -mt-32 sm:-mt-36 md:-mt-40 relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
                <span className="text-pgnavy">PG Automotive</span>{' '}
                <span className="text-pgblue">BRG</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto mb-4">
                Ut neque lacus, lobortis rhoncus gravida eu, ornare in sem. Donec molestie id orci quis bibendum. Fusce sollicitudin vitae lectus a ultricies. Praesent augue nibh, consequat sit amet interdum nec, dapibus non sapien. Sed nunc nisi, aliquam eget purus eget, blandit pulvinar orci. Maecenas nec risus blandit, auctor leo vitae, maximus nisi.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto">
                Aenean suscipit iaculis nulla, convallis volutpat enim suscipit nec. Fusce ac dui aliquet, aliquet risus vel, lacinia neque. Morbi accumsan sit amet ligula nec bibendum. Maecenas rhoncus elit non justo tincidunt blandit. Morbi turpis sapien, efficitur varius quam eu, sagittis rhoncus eros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout - Retrofit and OEM Solutions */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Retrofit Solutions */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">Retrofit</span>{' '}
                <span className="text-pgblue">Solutions</span>
              </h2>

              {/* Retrofit Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[360px]">
                <img
                  src="/steelglassfotocarrusel0.jpg"
                  alt="Retrofit Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Retrofit Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Our retrofit solutions enable the integration of advanced ballistic protection into existing vehicles. Whether upgrading fleet vehicles or providing protection for high-value targets, our retrofit systems maintain vehicle functionality while adding superior security features.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                With extensive experience in aftermarket installations, we provide comprehensive retrofit services that include assessment, design, manufacturing, and professional installation. Our solutions are tailored to meet specific threat levels and operational requirements.
              </p>

              {/* Retrofit Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">Existing Vehicle Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">Custom Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">Professional Installation</span>
                </div>
              </div>
            </div>

            {/* OEM Solutions */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">OEM</span>{' '}
                <span className="text-pgblue">Solutions</span>
              </h2>

              {/* OEM Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[360px]">
                <img
                  src="/lovable-uploads/steelgalsslogopagev1.jpeg"
                  alt="OEM Solutions"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* OEM Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Our OEM (Original Equipment Manufacturer) solutions provide comprehensive ballistic protection systems designed specifically for vehicle manufacturers. We work directly with automotive companies to integrate our advanced ballistic glass technologies during the manufacturing process.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Our OEM partnerships ensure seamless integration, maintaining the original vehicle aesthetics while providing superior protection. From initial design consultation to final production, we support manufacturers with cutting-edge ballistic solutions that meet the highest safety standards.
              </p>

              {/* OEM Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">Factory Integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">Original Aesthetics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-medium text-sm sm:text-base">Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Cards */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {/* Retrofit Success Cases Card */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
              <div className="flex justify-end mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-pgnavy">
                    <path fill="currentColor" d="M50 5L60 35H95L67 55L77 90L50 70L23 90L33 55L5 35H40L50 5Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-2">
                Retrofit <span className="text-pgblue">Success Cases</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Transforming existing vehicles with advanced ballistic protection solutions
              </p>
              <button className="border-2 border-pgnavy text-pgnavy px-6 py-2.5 rounded-full font-medium hover:bg-pgnavy hover:text-white transition-colors duration-300 text-sm sm:text-base">
                {T(at.learnMore)}
              </button>
            </div>

            {/* OEM Success Cases Card */}
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-200">
              <div className="flex justify-end mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-pgnavy">
                    <path fill="currentColor" d="M50 5L60 35H95L67 55L77 90L50 70L23 90L33 55L5 35H40L50 5Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-2">
                OEM <span className="text-pgblue">Success Cases</span>
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Showcasing our successful partnerships with automotive manufacturers worldwide
              </p>
              <button className="border-2 border-pgnavy text-pgnavy px-6 py-2.5 rounded-full font-medium hover:bg-pgnavy hover:text-white transition-colors duration-300 text-sm sm:text-base">
                {T(at.learnMore)}
              </button>
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
          backgroundImage: 'url(/bg_form_contact@2x.png)',
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
