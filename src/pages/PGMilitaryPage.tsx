import React, { useState } from 'react';
import { Download, Shield, Target, Thermometer } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const mt = {
  thickness: { es: "Espesor (mm)", en: "Thickness (mm)", pt: "Espessura (mm)" },
  weight: { es: "Peso (Kg/m2)", en: "Weight (Kg/m2)", pt: "Peso (Kg/m2)" },
  ballisticStandard: { es: "Standard Balístico", en: "Ballistic Standard", pt: "Padrão Balístico" },
  weapon: { es: "ARMA", en: "WEAPON", pt: "ARMA" },
  caliber: { es: "CALIBRE", en: "CALIBER", pt: "CALIBRE" },
  downloadsTitle: { es: "Archivos para descargar", en: "Files to Download", pt: "Arquivos para Download" },
  downloadMilitary: {
    es: "Descargue nuestros Casos de éxito Military grade",
    en: "Download our Military grade Success Cases",
    pt: "Baixe nossos Casos de sucesso Military grade"
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
  chartTitle: { es: "GRÁFICA BALÍSTICA — SOLUCIONES MILITARES", en: "MILITARY SOLUTIONS BALLISTIC CHART", pt: "GRÁFICO BALÍSTICO — SOLUÇÕES MILITARES" },
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
    en: "Military-Grade Protection Solutions",
    pt: "Soluções de Proteção Militar"
  },
  milGradeDesc1: {
    es: "Nuestras aplicaciones militares ofrecen los más altos niveles de protección balística para el personal y equipos de defensa. Diseñadas para resistir condiciones extremas de combate, nuestras soluciones de vidrio balístico brindan protección superior manteniendo la efectividad operacional.",
    en: "Our military applications deliver the highest levels of ballistic protection for defense personnel and equipment. Engineered to withstand extreme combat conditions, our ballistic glass solutions provide superior protection while maintaining operational effectiveness.",
    pt: "Nossas aplicações militares oferecem os mais altos níveis de proteção balística para pessoal e equipamentos de defesa. Projetadas para suportar condições extremas de combate, nossas soluções de vidro balístico fornecem proteção superior mantendo a eficácia operacional."
  },
  milGradeDesc2: {
    es: "De vehículos blindados a instalaciones militares, nuestros productos cumplen rigurosos estándares y especificaciones militares. Cada solución se diseña a medida para abordar niveles de amenaza específicos garantizando máxima durabilidad y rendimiento en los entornos más exigentes.",
    en: "From armored vehicles to military installations, our products meet rigorous military standards and specifications. Each solution is custom-designed to address specific threat levels while ensuring maximum durability and performance in the most demanding environments.",
    pt: "De veículos blindados a instalações militares, nossos produtos atendem a rigorosos padrões e especificações militares. Cada solução é personalizada para atender a níveis de ameaça específicos, garantindo máxima durabilidade e desempenho nos ambientes mais exigentes."
  },
  nijCertified: { es: "Protección Certificada NIJ", en: "NIJ Certified Protection", pt: "Proteção Certificada NIJ" },
  multiHit: { es: "Resistencia Multi-Impacto", en: "Multi-Hit Resistance", pt: "Resistência Multi-Impacto" },
  extremeEnv: { es: "Durabilidad en Ambiente Extremo", en: "Extreme Environment Durability", pt: "Durabilidade em Ambiente Extremo" },
  successCasesTitle: { es: "Casos de Éxito Military-Grade", en: "Military-Grade Success Cases", pt: "Casos de Sucesso Military-Grade" },
  successCasesDesc: {
    es: "De vehículos blindados a instalaciones militares",
    en: "From armored vehicles to military installations",
    pt: "De veículos blindados a instalações militares"
  },
};

const PGMilitaryPage = () => {
  const { language } = useLanguage();
  const lang = language as 'es' | 'en' | 'pt';
  const T = (obj: { es: string; en: string; pt: string }) => obj[lang];

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
    weapons: [
      {
        img: '/military/weapon_1.webp',
        calibers: ['5.56 x 45mm M855', '(950+/-10m/s)', '', '7.62 x 39mm FMJ/PB', '(720+/-10m/s)']
      },
      {
        img: '/military/weapon_2.webp',
        calibers: ['7.62 x 51mm M80 Ball', '(838+/-15m/s)', '', '7.62 x 51mm M80 Ball', '(830+/-15m/s)', '', '5.56 x 45mm SS 109', '(950+/-10m/s)']
      },
      {
        img: '/military/weapon_3.webp',
        calibers: ['30-06 AP M2', '(868+/-15m/s)', '', '7.62 x 39mm API BZ', '(950+/-20m/s)']
      },
      {
        img: '/military/weapon_4.webp',
        calibers: ['7.62 x 51mm M61 AP', '(820+/-10m/s)', '', '7.62 x 51mm', 'P80/FMJ/PB/HC', '(820+/-10m/s)']
      },
      {
        img: '/military/weapon_5.webp',
        calibers: ['7.62 x 51mm', 'P80/FMJ/PB/HC', '(820+/-10m/s)', '', '7.62 x 54 R B32', '(860+/-10m/s)']
      },
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/products/steelglass/steelglassfototechnology.webp"
            alt="PG Military Applications"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* Title Card */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-24 sm:-mt-28 md:-mt-32 mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6">
            <span className="font-bold text-pgnavy">PG Military</span>{' '}
            <span className="font-normal text-pgnavy">Applications</span>
          </h1>
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

          {/* Tank Image */}
          <div className="rounded-2xl overflow-hidden mb-8 sm:mb-12 h-[300px] sm:h-[400px] md:h-[508px]">
            <img
              src="/about/IMG_4421.webp"
              alt="Military Tank Protection"
              className="w-full h-full object-cover"
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
                <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-pgnavy" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy">
                {T(mt.nijCertified)}
              </h3>
            </div>

            {/* Multi-Hit Resistance */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-12 h-12 sm:w-16 sm:h-16 text-pgnavy" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy">
                {T(mt.multiHit)}
              </h3>
            </div>

            {/* Extreme Environment Durability */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center">
                <Thermometer className="w-12 h-12 sm:w-16 sm:h-16 text-pgnavy" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-pgnavy">
                {T(mt.extremeEnv)}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Ballistic Chart Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Chart Header */}
          <div className="bg-[#526239] rounded-t-lg py-4 sm:py-6 px-4 sm:px-8">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/shared/logos/LogoPGPRODUCTSPGBLUE.webp"
                alt="PG Products"
                className="h-8 sm:h-10 brightness-0 invert"
              />
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                {T(mt.chartTitle)}
              </h3>
            </div>
          </div>

          {/* Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              {/* Espesor Row */}
              <thead>
                <tr>
                  <th className="bg-[rgba(39,59,8,0.05)] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200 w-[200px]">
                    {T(mt.thickness)}
                  </th>
                  {ballisticData.headers.map((header, idx) => (
                    <th key={idx} className="bg-[rgba(39,59,8,0.15)] p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-black border-b border-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Peso Row */}
                <tr>
                  <td className="bg-[rgba(39,59,8,0.05)] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    {T(mt.weight)}
                  </td>
                  {ballisticData.weights.map((weight, idx) => (
                    <td key={idx} className="bg-[rgba(39,59,8,0.15)] p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-black border-b border-gray-200">
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
                    <td className="bg-[rgba(39,59,8,0.05)] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200 relative">
                      {/* Vertical "Standard Balístico" label for first row */}
                      {idx === 0 && (
                        <div className="absolute left-0 top-0 h-[480px] w-12 bg-[#939d83] flex items-center justify-center z-10">
                          <span
                            className="text-white font-bold text-sm tracking-widest whitespace-nowrap"
                            style={{
                              writingMode: 'vertical-rl',
                              transform: 'rotate(180deg)'
                            }}
                          >
                            {T(mt.ballisticStandard)}
                          </span>
                        </div>
                      )}
                      <span className="pl-14">{standard.name}</span>
                    </td>
                    {standard.values.map((value, vIdx) => (
                      <td
                        key={vIdx}
                        className={`p-3 sm:p-4 text-center text-sm sm:text-base font-medium border-b border-gray-200 ${
                          value === '–' ? 'bg-[#dfe2da] text-gray-400' : 'bg-[#dfe2da] text-black'
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

                {/* ARMA Row */}
                <tr>
                  <td className="bg-[rgba(39,59,8,0.05)] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    <span className="pl-14">{T(mt.weapon)}</span>
                  </td>
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <td key={idx} className="bg-[#dfe2da] p-3 sm:p-4 text-center border-b border-gray-200">
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

                {/* CALIBRE Row */}
                <tr>
                  <td className="bg-[rgba(39,59,8,0.05)] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    <span className="pl-14">{T(mt.caliber)}</span>
                  </td>
                  <td className="bg-[#dfe2da] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">5.56 x 45mm M855</p>
                    <p className="font-normal">(950+/-10m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 39mm FMJ/PB</p>
                    <p className="font-normal">(720+/-10m/s)</p>
                  </td>
                  <td className="bg-[#dfe2da] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">7.62 x 51mm M80 Ball</p>
                    <p className="font-normal">(838+/-15m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 51mm M80 Ball</p>
                    <p className="font-normal">(830+/-15m/s)</p>
                    <p className="mt-2 font-bold">5.56 x 45mm SS 109</p>
                    <p className="font-normal">(950+/-10m/s)</p>
                  </td>
                  <td className="bg-[#dfe2da] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">30-06 AP M2</p>
                    <p className="font-normal">(868+/-15m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 39mm API BZ</p>
                    <p className="font-normal">(950+/-20m/s)</p>
                  </td>
                  <td className="bg-[#dfe2da] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
                    <p className="font-bold">7.62 x 51mm M61 AP</p>
                    <p className="font-normal">(820+/-10m/s)</p>
                    <p className="mt-2 font-bold">7.62 x 51mm</p>
                    <p className="font-bold">P80/FMJ/PB/HC</p>
                    <p className="font-normal">(820+/-10m/s)</p>
                  </td>
                  <td className="bg-[#dfe2da] p-3 sm:p-4 text-center text-xs sm:text-sm border-b border-gray-200">
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

      {/* Military Success Cases Card */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 sm:p-10 md:p-12 text-center"
            style={{
              background: 'linear-gradient(to bottom, #939d83, #f4f5f3)'
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
              {T(mt.successCasesTitle)}
            </h3>
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              {T(mt.successCasesDesc)}
            </p>
            <button className="border-2 border-pgnavy text-pgnavy px-8 py-3 rounded-lg font-bold text-lg hover:bg-pgnavy hover:text-white transition-colors duration-300">
              {T(mt.learnMore)}
            </button>
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
