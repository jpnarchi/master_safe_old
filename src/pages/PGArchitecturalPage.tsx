import React, { useState } from 'react';
import { Check, Download } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const at = {
  thickness: { es: 'Espesor (mm)', en: 'Thickness (mm)', pt: 'Espessura (mm)' },
  weight: { es: 'Peso (Kg/m2)', en: 'Weight (Kg/m2)', pt: 'Peso (Kg/m2)' },
  ballisticStandard: { es: 'Standard Balístico', en: 'Ballistic Standard', pt: 'Padrão Balístico' },
  arma: { es: 'ARMA', en: 'WEAPON', pt: 'ARMA' },
  calibre: { es: 'CALIBRE', en: 'CALIBER', pt: 'CALIBRE' },
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
  appTitle: { es: 'Aplicaciones Arquitectónicas PG', en: 'PG Architectural Applications', pt: 'Aplicações Arquitetônicas PG' },
  appDesc: {
    es: 'Elevamos la seguridad sin comprometer el diseño. Nuestras soluciones de vidrio balístico arquitectónico transforman cualquier edificio — desde instalaciones gubernamentales hasta sedes corporativas — en un entorno seguro y de alto rendimiento. Integramos protección y estética moderna para entregar acristalamiento de seguridad con los más altos estándares de protección y estilo.',
    en: 'Elevate security without compromising design. Our architectural ballistic glass solutions transform any building, from government facilities to corporate headquarters, into a secure, high-performance environment. Seamlessly integrating protection with modern aesthetics, we deliver security glazing that meets the highest standards of safety and style.',
    pt: 'Elevamos a segurança sem comprometer o design. Nossas soluções de vidro balístico arquitetônico transformam qualquer edifício — de instalações governamentais a sedes corporativas — em um ambiente seguro e de alto desempenho. Integramos proteção e estética moderna para entregar vidraças de segurança com os mais altos padrões de proteção e estilo.',
  },
  govTitle: { es: 'Edificios Gubernamentales', en: 'Government Buildings', pt: 'Edifícios Governamentais' },
  govDesc: {
    es: 'Soluciones de vidrio balístico de alta seguridad para instalaciones gubernamentales, embajadas e infraestructura crítica que requieren máxima protección contra distintos niveles de amenaza.',
    en: 'High-security ballistic glazing solutions for government facilities, embassies, and critical infrastructure requiring maximum protection against various threat levels.',
    pt: 'Soluções de vidraça balística de alta segurança para instalações governamentais, embaixadas e infraestrutura crítica que requerem máxima proteção contra diferentes níveis de ameaça.',
  },
  govFeat1: { es: 'Capacidad de resistencia a explosiones', en: 'Blast-resistant capabilities', pt: 'Capacidade de resistência a explosões' },
  govFeat2: { es: 'Protección multinivel contra amenazas', en: 'Multi-level threat protection', pt: 'Proteção multinível contra ameaças' },
  govFeat3: { es: 'Tamaños personalizados disponibles', en: 'Custom sizing available', pt: 'Tamanhos personalizados disponíveis' },
  corpTitle: { es: 'Instalaciones Corporativas', en: 'Corporate Facilities', pt: 'Instalações Corporativas' },
  corpDesc: {
    es: 'Soluciones sofisticadas de vidrio balístico para entornos corporativos que priorizan tanto la seguridad como la integridad del diseño arquitectónico.',
    en: 'Sophisticated ballistic glass solutions for corporate environments that prioritize both security and architectural design integrity.',
    pt: 'Soluções sofisticadas de vidro balístico para ambientes corporativos que priorizam tanto a segurança quanto a integridade do design arquitetônico.',
  },
  corpFeat1: { es: 'Integración estética', en: 'Aesthetic integration', pt: 'Integração estética' },
  corpFeat2: { es: 'Opciones de eficiencia energética', en: 'Energy-efficient options', pt: 'Opções de eficiência energética' },
  corpFeat3: { es: 'Propiedades de reducción de ruido', en: 'Sound reduction properties', pt: 'Propriedades de redução de ruído' },
  chartTitle: { es: 'GRÁFICA BALÍSTICA — SOLUCIONES ARQUITECTÓNICAS', en: 'ARCHITECTURAL SOLUTIONS BALLISTIC CHART', pt: 'GRÁFICO BALÍSTICO — SOLUÇÕES ARQUITETÔNICAS' },
  archCasesTitle: { es: 'Casos de Éxito Arquitectónicos', en: 'Architectural Success Cases', pt: 'Casos de Sucesso Arquitetônicos' },
  archCasesDesc: { es: 'Mejorando la seguridad de edificios para entornos más seguros', en: 'Enhancing building security for safer environments', pt: 'Aprimorando a segurança de edifícios para ambientes mais seguros' },
};

const PGArchitecturalPage = () => {
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

  // Ballistic chart data
  const ballisticData = {
    headers: ['30.4', '39.4', '58.4', '79.6', '79.6'],
    weights: ['58.8', '79.8', '122.8', '164.8', '164.8'],
    standards: [
      { name: 'NIJ 0108.01', values: ['–', 'III', 'IV', '–', '–'] },
      { name: 'CEN 1063', values: ['BR5', 'BR6', '–', 'BR7', '–'] },
      { name: 'VPAM', values: ['L6', 'L7', 'L8', 'L9', 'L10'] },
      { name: 'STANAG 4569', values: ['–', 'I', 'III', '–', '–'] },
      { name: 'RENAR', values: ['RB4', '–', '–', '–', '–'] },
      { name: 'ABNT NBR 15000', values: ['–', 'II', 'IV', '–', '–'] },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about/IMG_4473.webp"
            alt="PG Architectural Applications"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* Title Card */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-24 sm:-mt-28 md:-mt-32 mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6">
            <span className="font-bold text-pgnavy">{T(at.appTitle)}</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto">
            {T(at.appDesc)}
          </p>
        </div>
      </div>

      {/* Two Column Layout - Government Buildings and Corporate Facilities */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Government Buildings */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">{T(at.govTitle)}</span>
              </h2>

              {/* Government Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[400px] lg:h-[508px]">
                <img
                  src="/about/IMG_4544.webp"
                  alt="Government Buildings"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Government Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                {T(at.govDesc)}
              </p>

              {/* Government Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">{T(at.govFeat1)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">{T(at.govFeat2)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">{T(at.govFeat3)}</span>
                </div>
              </div>
            </div>

            {/* Corporate Facilities */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">{T(at.corpTitle)}</span>
              </h2>

              {/* Corporate Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[400px] lg:h-[508px]">
                <img
                  src="/about/IMG_4421.webp"
                  alt="Corporate Facilities"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Corporate Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                {T(at.corpDesc)}
              </p>

              {/* Corporate Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">{T(at.corpFeat1)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">{T(at.corpFeat2)}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">{T(at.corpFeat3)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ballistic Chart Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Chart Header */}
          <div className="bg-[#3e567b] rounded-t-lg py-4 sm:py-6 px-4 sm:px-8">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/shared/logos/LogoPGPRODUCTSPGBLUE.webp"
                alt="PG Products"
                className="h-8 sm:h-10 brightness-0 invert"
              />
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
                {T(at.chartTitle)}
              </h3>
            </div>
          </div>

          {/* Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              {/* Thickness Row */}
              <thead>
                <tr>
                  <th className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200 w-[200px]">
                    {T(at.thickness)}
                  </th>
                  {ballisticData.headers.map((header, idx) => (
                    <th key={idx} className="bg-[#e7eaee] p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-black border-b border-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Weight Row */}
                <tr>
                  <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    {T(at.weight)}
                  </td>
                  {ballisticData.weights.map((weight, idx) => (
                    <td key={idx} className="bg-[#e7eaee] p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-black border-b border-gray-200">
                      {weight}
                    </td>
                  ))}
                </tr>

                {/* Separator Row for Standards */}
                <tr>
                  <td colSpan={6} className="bg-white h-2"></td>
                </tr>

                {/* Standard Rows with Vertical Label */}
                {ballisticData.standards.map((standard, idx) => (
                  <tr key={idx}>
                    <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200 relative">
                      {/* Vertical "Ballistic Standard" label for first row */}
                      {idx === 0 && (
                        <div className="absolute left-0 top-0 h-[480px] w-12 bg-[#6e809c] flex items-center justify-center z-10">
                          <span
                            className="text-white font-bold text-sm tracking-widest whitespace-nowrap"
                            style={{
                              writingMode: 'vertical-rl',
                              transform: 'rotate(180deg)'
                            }}
                          >
                            {T(at.ballisticStandard)}
                          </span>
                        </div>
                      )}
                      <span className="pl-14">{standard.name}</span>
                    </td>
                    {standard.values.map((value, vIdx) => (
                      <td
                        key={vIdx}
                        className={`p-3 sm:p-4 text-center text-sm sm:text-base font-medium border-b border-gray-200 ${
                          value === '–' ? 'bg-[#e7eaee] text-gray-400' : 'bg-[#e7eaee] text-black'
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Separator Row for Weapons */}
                <tr>
                  <td colSpan={6} className="bg-white h-4"></td>
                </tr>

                {/* ARMA/WEAPON Row */}
                <tr>
                  <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    <span className="pl-14">{T(at.arma)}</span>
                  </td>
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <td key={idx} className="bg-[#e7eaee] p-3 sm:p-4 text-center border-b border-gray-200">
                      <div className="h-20 sm:h-24 flex items-center justify-center">
                        <img
                          src={`/military/weapon_${idx + 1}.webp`}
                          alt={`Weapon ${idx + 1}`}
                          className="max-h-full max-w-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </td>
                  ))}
                </tr>

                {/* CALIBRE/CALIBER Row */}
                <tr>
                  <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    <span className="pl-14">{T(at.calibre)}</span>
                  </td>
                  <td className="bg-[#e7eaee] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">5.56 x 45mm M855</p>
                    <p className="font-normal">(950+/-10m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 39mm FMJ/PB</p>
                    <p className="font-normal">(720+/-10m/s)</p>
                  </td>
                  <td className="bg-[#e7eaee] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">7.62 x 51mm M80 Ball</p>
                    <p className="font-normal">(838+/-15m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 51mm M80 Ball</p>
                    <p className="font-normal">(830+/-15m/s)</p>
                    <p className="mt-2 font-bold">5.56 x 45mm SS 109</p>
                    <p className="font-normal">(950+/-10m/s)</p>
                  </td>
                  <td className="bg-[#e7eaee] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">30-06 AP M2</p>
                    <p className="font-normal">(868+/-15m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 39mm API BZ</p>
                    <p className="font-normal">(950+/-20m/s)</p>
                  </td>
                  <td className="bg-[#e7eaee] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">7.62 x 51mm M61 AP</p>
                    <p className="font-normal">(820+/-10m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 51mm</p>
                    <p className="font-bold">P80/FMJ/PB/HC</p>
                    <p className="font-normal">(820+/-10m/s)</p>
                  </td>
                  <td className="bg-[#e7eaee] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">7.62 x 51mm</p>
                    <p className="font-bold">P80/FMJ/PB/HC</p>
                    <p className="font-normal">(820+/-10m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 54 R B32</p>
                    <p className="font-normal">(860+/-10m/s)</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Architectural Success Cases Card */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 sm:p-10 md:p-12 text-center"
            style={{
              background: 'linear-gradient(to bottom, #6e809c, #f2f4f6)'
            }}
          >
            {/* Icon */}
            <div className="flex justify-end mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full text-pgnavy transform rotate-45">
                  <path fill="currentColor" d="M50 5L60 35H95L67 55L77 90L50 70L23 90L33 55L5 35H40L50 5Z"/>
                </svg>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pgnavy mb-2">
              {T(at.archCasesTitle)}
            </h3>
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              {T(at.archCasesDesc)}
            </p>
            <button className="border-2 border-pgnavy text-pgnavy px-8 py-3 rounded-lg font-bold text-lg hover:bg-pgnavy hover:text-white transition-colors duration-300">
              {T(at.learnMore)}
            </button>
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
              <button className="w-12 h-12 sm:w-14 sm:h-14 bg-[#c5d5fe] rounded-lg flex items-center justify-center hover:bg-pgblue transition-colors duration-300">
                <Download className="w-5 h-5 sm:w-6 sm:h-6 text-pgnavy" />
              </button>
            </div>

            {/* Divider line */}
            <div className="border-t border-gray-200"></div>

            {/* Download Retrofit */}
            <div className="flex items-center justify-between py-6">
              <span className="text-gray-700 text-sm sm:text-base">
                {T(at.downloadRetrofit)}
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

      <Footer />
    </div>
  );
};

export default PGArchitecturalPage;
