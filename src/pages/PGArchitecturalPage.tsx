import React, { useState } from 'react';
import { Check, Download } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PGArchitecturalPage = () => {
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
    toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
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

      {/* Hero Section - Full width image with overlay */}
      <section className="relative h-[350px] sm:h-[400px] md:h-[442px]">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/IMG_4473.jpg"
            alt="PG Architectural Applications"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative">
        <div className="bg-[rgba(0,0,0,0.05)] py-16 sm:py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm p-8 sm:p-10 md:p-12 -mt-32 sm:-mt-36 md:-mt-40 relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6">
                <span className="font-bold text-pgnavy">PG Architectural</span>{' '}
                <span className="font-normal text-pgnavy">Applications</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center max-w-4xl mx-auto">
                Elevate security without compromising design. Our architectural ballistic glass solutions transform any building, from government facilities to corporate headquarters, into a secure, high-performance environment. Seamlessly integrating protection with modern aesthetics, we deliver security glazing that meets the highest standards of safety and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout - Government Buildings and Corporate Facilities */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Government Buildings */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">Government</span>{' '}
                <span className="font-normal text-pgnavy">Buildings</span>
              </h2>

              {/* Government Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[400px] lg:h-[508px]">
                <img
                  src="/lovable-uploads/IMG_4544.jpg"
                  alt="Government Buildings"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Government Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                High-security ballistic glazing solutions for government facilities, embassies, and critical infrastructure requiring maximum protection against various threat levels.
              </p>

              {/* Government Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">Blast-resistant capabilities</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">Multi-level threat protection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">Custom sizing available</span>
                </div>
              </div>
            </div>

            {/* Corporate Facilities */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
                <span className="text-pgnavy">Corporate</span>{' '}
                <span className="font-normal text-pgnavy">Facilities</span>
              </h2>

              {/* Corporate Image */}
              <div className="rounded-lg overflow-hidden mb-6 h-[280px] sm:h-[320px] md:h-[400px] lg:h-[508px]">
                <img
                  src="/lovable-uploads/IMG_4421.jpg"
                  alt="Corporate Facilities"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Corporate Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 text-justify">
                Sophisticated ballistic glass solutions for corporate environments that prioritize both security and architectural design integrity.
              </p>

              {/* Corporate Features */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">Aesthetic integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">Energy-efficient options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-pgnavy font-semibold text-sm sm:text-base lg:text-xl">Sound reduction properties</span>
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
                src="/LogoPGPRODUCTSPGBLUE.png"
                alt="PG Products"
                className="h-8 sm:h-10 brightness-0 invert"
              />
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wide">
                ARCHITECTURAL SOLUTIONS BALLISTIC CHART
              </h3>
            </div>
          </div>

          {/* Chart Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              {/* Espesor Row */}
              <thead>
                <tr>
                  <th className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200 w-[200px]">
                    Espesor (mm)
                  </th>
                  {ballisticData.headers.map((header, idx) => (
                    <th key={idx} className="bg-[#e7eaee] p-3 sm:p-4 text-center text-sm sm:text-base font-medium text-black border-b border-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Peso Row */}
                <tr>
                  <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    Peso (Kg/m2)
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
                      {/* Vertical "Standard Balístico" label for first row */}
                      {idx === 0 && (
                        <div className="absolute left-0 top-0 h-[480px] w-12 bg-[#6e809c] flex items-center justify-center z-10">
                          <span
                            className="text-white font-bold text-sm tracking-widest whitespace-nowrap"
                            style={{
                              writingMode: 'vertical-rl',
                              transform: 'rotate(180deg)'
                            }}
                          >
                            Standard Balístico
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

                {/* ARMA Row */}
                <tr>
                  <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    <span className="pl-14">ARMA</span>
                  </td>
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <td key={idx} className="bg-[#e7eaee] p-3 sm:p-4 text-center border-b border-gray-200">
                      <div className="h-20 sm:h-24 flex items-center justify-center">
                        <img
                          src={`/lovable-uploads/weapon_${idx + 1}.png`}
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
                  <td className="bg-[#f2f4f6] p-3 sm:p-4 text-left text-sm sm:text-base font-bold text-black border-b border-gray-200">
                    <span className="pl-14">CALIBRE</span>
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
              Architectural <span className="font-normal">Success Cases</span>
            </h3>
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              Enhancing building security for safer environments
            </p>
            <button className="border-2 border-pgnavy text-pgnavy px-8 py-3 rounded-lg font-bold text-lg hover:bg-pgnavy hover:text-white transition-colors duration-300">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-pgnavy mb-8">
            Archivos para descargar
          </h2>

          <div className="space-y-0">
            {/* Divider line */}
            <div className="border-t border-gray-200"></div>

            {/* Download OEM */}
            <div className="flex items-center justify-between py-6">
              <span className="text-gray-700 text-sm sm:text-base">
                Descargue nuestros Casos de éxito OEM
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
                Descargue nuestros Casos de éxito Retrofit
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
          backgroundImage: 'url(/bg_form_contact@2x.png)',
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
                Protegemos tu seguridad
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed opacity-90">
                Confía en la experiencia y calidad de un líder en seguridad automotriz.
              </p>
            </div>

            {/* Right Contact Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-base lg:text-lg font-bold mb-3">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Introduzca su nombre"
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-bold mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Introduzca su dirección de correo electrónico"
                    className="w-full px-4 py-3 bg-transparent border border-white rounded-md text-white placeholder-gray-300 focus:outline-none focus:border-white text-base"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-base lg:text-lg font-bold mb-3">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escriba aquí su mensaje"
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
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-4 px-8 bg-pgnavy text-white rounded-lg font-bold text-base hover:bg-pgblue transition-all duration-300"
                  >
                    Enviar
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

export default PGArchitecturalPage;
