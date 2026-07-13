import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { toast } from "sonner";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const at = {
  heroTitle: { es: 'PG Transport Applications', en: 'PG Transport Applications', pt: 'PG Transport Applications' },
  mainTitle: {
    es: 'Vidrio balístico para vehículos civiles y comerciales.',
    en: 'Ballistic glass for civilian and commercial vehicles',
    pt: 'Vidro balístico para veículos civis e comerciais',
  },
  mainDesc1: {
    es: 'En PG Transport Solutions, desarrollamos soluciones avanzadas de vidrio balístico diseñadas para proteger vehículos en entornos urbanos y operaciones de alto riesgo.',
    en: 'In PG Transport Solutions, we develop advanced ballistic glass solutions engineered to protect vehicles operating in urban environments and high-risk scenarios.',
    pt: 'Na PG Transport Solutions, desenvolvemos soluções avançadas em vidro balístico projetadas para proteger veículos que operam em ambientes urbanos e cenários de alto risco.',
  },
  mainDesc2: {
    es: 'Atendemos sectores como transporte de valores, transporte público, vehículos ejecutivos, vans y proyectos de blindaje personalizado, ofreciendo una combinación perfecta entre seguridad, visibilidad y estética.',
    en: 'We serve industries such as cash-in-transit, public transportation, executive vehicles, vans, and custom armored projects—delivering the perfect balance between security, visibility, and design.',
    pt: 'Atendemos setores como transporte de valores, transporte público, veículos executivos, vans e projetos de blindagem personalizada, oferecendo o equilíbrio ideal entre segurança, visibilidade e design.',
  },
  mainDesc3: {
    es: 'Nuestras soluciones están diseñadas bajo estándares internacionales, integrando tecnología de punta con ingeniería de precisión para garantizar máxima protección sin comprometer el rendimiento del vehículo.',
    en: 'Our solutions are developed under international standards, combining cutting-edge technology with precision engineering to ensure maximum protection without compromising vehicle performance.',
    pt: 'Nossas soluções seguem rigorosos padrões internacionais, combinando tecnologia de ponta com engenharia de precisão para garantir máxima proteção sem comprometer o desempenho do veículo.',
  },
  feat1: { es: 'Protección balística certificada', en: 'Certified ballistic protection', pt: 'Proteção balística certificada' },
  feat2: { es: 'Integración en vehículos nuevos y retrofit', en: 'Integration in new and retrofit vehicles', pt: 'Integração em veículos novos e retrofit' },
  feat3: { es: 'Soluciones personalizadas por nivel de amenaza', en: 'Customized solutions based on threat level', pt: 'Soluções personalizadas por nível de ameaça' },
  feat4: {
    es: 'Compatibilidad con múltiples plataformas (vans, buses, SUV, etc.)',
    en: 'Compatibility across multiple platforms (vans, buses, SUVs, etc.)',
    pt: 'Compatibilidade com múltiplas plataformas (vans, ônibus, SUVs, etc.)',
  },
  cargoTitle: { es: 'Soluciones para transporte de carga', en: 'Solutions for Cargo Transport', pt: 'Soluções para transporte de carga' },
  cargoDesc: {
    es: 'Nuestras soluciones para transporte de carga están diseñadas para proteger operadores y activos en entornos de alto riesgo, integrando vidrio balístico de alto desempeño en cabinas de tractocamiones y unidades de largo recorrido. Trabajamos con fabricantes y operadores logísticos para desarrollar soluciones que mantienen la funcionalidad, visibilidad y ergonomía del vehículo, sin comprometer la seguridad. Desde la ingeniería inicial hasta la implementación, garantizamos sistemas confiables que cumplen con los más altos estándares internacionales.',
    en: 'Our cargo transport solutions are designed to protect drivers and assets in high-risk environments by integrating high-performance ballistic glass into truck cabins and long-haul vehicles. We focus on driver cabin protection, enabling both OEM and retrofit integration while ensuring durability for high-risk routes. Each solution is engineered with an optimized design for maximum visibility, maintaining operational efficiency without compromising safety.',
    pt: 'Nossas soluções para transporte de carga são desenvolvidas para proteger operadores e ativos em ambientes de alto risco, integrando vidro balístico de alto desempenho em cabines de caminhões e veículos de longa distância. Priorizamos a proteção da cabine do operador, com integração OEM e retrofit, garantindo resistência em rotas críticas. Cada solução é projetada com design otimizado para visibilidade, mantendo eficiência operacional sem comprometer a segurança.',
  },
  citTitle: { es: 'Soluciones para transporte de valores', en: 'Cash-in-Transit Solutions', pt: 'Soluções para transporte de valores' },
  citDesc: {
    es: 'Desarrollamos sistemas especializados de vidrio balístico para vehículos de transporte de valores, diseñados para ofrecer máxima protección en operaciones críticas. Nuestras soluciones brindan protección balística certificada, asegurando compatibilidad total con sistemas de seguridad existentes y manteniendo máxima visibilidad operativa. Están diseñadas para cumplir con estrictos estándares del sector, garantizando operaciones seguras y confiables.',
    en: 'We develop specialized ballistic glass systems for cash-in-transit vehicles, engineered to deliver maximum protection in critical operations. Our solutions provide certified ballistic resistance, ensuring full compatibility with existing security systems while maintaining maximum operational visibility. Designed to meet strict industry standards, they support secure and reliable operations in high-risk scenarios.',
    pt: 'Desenvolvemos sistemas especializados de vidro balístico para veículos de transporte de valores, projetados para oferecer máxima proteção em operações críticas. Nossas soluções garantem proteção balística certificada, com total compatibilidade com sistemas de segurança e alta visibilidade operacional. São desenvolvidas para atender às exigentes normas do setor, assegurando operações seguras e confiáveis.',
  },
  passengerTitle: { es: 'Soluciones para transporte de pasajeros', en: 'Passenger Transport Solutions', pt: 'Soluções para transporte de passageiros' },
  passengerDesc: {
    es: 'Ofrecemos soluciones de vidrio balístico para autobuses diseñadas para proteger a pasajeros y operadores en entornos urbanos y rutas de alto riesgo. Nuestra tecnología garantiza protección para pasajeros y conductores, manteniendo alta transparencia y confort visual, sin afectar la experiencia del usuario. Estas soluciones se integran de forma eficiente en flotas nuevas y existentes, siendo ideales para sistemas de transporte moderno.',
    en: 'We offer ballistic glass solutions for buses designed to protect passengers and drivers in urban environments and high-risk routes. Our technology ensures passenger and driver protection while maintaining high transparency and visual comfort, preserving the overall travel experience. These solutions integrate seamlessly into both new and existing fleets, making them ideal for modern urban transport systems.',
    pt: 'Oferecemos soluções de vidro balístico para ônibus, desenvolvidas para proteger passageiros e operadores em ambientes urbanos e rotas de alto risco. Nossas tecnologias garantem proteção para passageiros e motoristas, mantendo alta transparência e conforto visual, sem comprometer a experiência do usuário. São ideais para integração em frotas novas e existentes em sistemas de transporte urbano.',
  },
  vanTitle: { es: 'Soluciones para vans ejecutivas y de lujo', en: 'Executive and Luxury Van Solutions', pt: 'Soluções para vans executivas e de luxo' },
  vanDesc: {
    es: 'Desarrollamos soluciones de vidrio balístico para vans ejecutivas y vehículos de lujo, enfocadas en ofrecer máxima protección sin comprometer el diseño ni el confort. Nuestros sistemas brindan protección discreta de alto nivel, preservando la estética premium del vehículo e integrándose perfectamente en proyectos personalizados. Cada solución se desarrolla con máxima calidad y precisión, cumpliendo con los estándares más exigentes.',
    en: 'We develop ballistic glass solutions for executive vans and luxury vehicles, focused on delivering maximum protection without compromising design or comfort. Our systems provide discreet high-level protection while preserving premium vehicle aesthetics, ensuring a seamless integration in bespoke and high-end projects. Each solution is crafted with maximum precision and quality, meeting the expectations of luxury mobility.',
    pt: 'Desenvolvemos soluções de vidro balístico para vans executivas e veículos de luxo, focadas em oferecer máxima proteção sem comprometer o design ou o conforto. Nossos sistemas garantem proteção discreta de alto nível, preservando a estética premium do veículo e permitindo integração perfeita em projetos personalizados. Cada solução é desenvolvida com máxima qualidade e precisão, atendendo aos mais altos padrões.',
  },
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

  const heroImages = [
    '/transport/HeroTransport-1.webp',
    '/transport/HeroTransport-2.webp',
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
        {heroImages.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === heroIndex ? 1 : 0 }}
          >
            <img
              src={src}
              alt={`PG Transport Solutions ${idx + 1}`}
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

      {/* Title Card - overlapping hero and next section */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-8 -mt-[122px] sm:-mt-[152px] md:-mt-[182px] mb-0">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 md:p-14">
          <div className="flex justify-center mb-6">
            <img
              src="/Transport-Solution-Logo.webp"
              alt="PG Transport Solutions"
              className="h-16 sm:h-20 md:h-24 object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-pgnavy text-center mb-6">
            {T(at.mainTitle)}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-4">
            {T(at.mainDesc1)}
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-4">
            {T(at.mainDesc2)}
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-8">
            {T(at.mainDesc3)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
            {[at.feat1, at.feat2, at.feat3, at.feat4].map((feat, i) => (
              <div key={i} className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-pgblue flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-pgnavy font-medium text-sm sm:text-base">{T(feat)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transport Solution Sections — 50/50 */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cargo Transport — Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <img
                src="/transport/Solucionesblin-1.webp"
                alt="Cargo Transport"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(at.cargoTitle)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(at.cargoDesc)}</p>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Cash-in-Transit — Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(at.citTitle)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(at.citDesc)}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/transport/Solucionesblin-2.webp"
                alt="Cash-in-Transit"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Passenger Transport — Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <img
                src="/transport/Solucionesblin-3.webp"
                alt="Passenger Transport"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(at.passengerTitle)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(at.passengerDesc)}</p>
            </div>
          </div>

          <div className="border-t border-gray-200"></div>

          {/* Executive & Luxury Vans — Text Left, Image Right */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16 py-12 sm:py-16">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl sm:text-2xl font-bold text-pgnavy mb-4">{T(at.vanTitle)}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{T(at.vanDesc)}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/transport/Solucionesblin-4.webp"
                alt="Executive and Luxury Vans"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PGAutomotivePage;
