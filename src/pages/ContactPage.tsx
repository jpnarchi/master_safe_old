
import { useState } from 'react';
import { toast } from "sonner";
import { Mail, Phone, MapPin, Globe, Send, Shield, MessageSquare, LucideIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollObserver from '../utils/ScrollObserver';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: string;
}

const ContactCard = ({ title, description, icon: Icon, delay = '0s' }: ContactCardProps) => (
  <div
    className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 slide-up"
    style={{ transitionDelay: delay }}
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-pgnavy/10 flex items-center justify-center mb-4 sm:mb-6 mx-auto">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pgnavy" />
    </div>
    <h3 className="text-lg sm:text-xl font-bold text-pgnavy mb-2 sm:mb-3 text-center">{title}</h3>
    <p className="text-sm sm:text-base text-pgnavy/70 text-center leading-relaxed">{description}</p>
  </div>
);

const ContactPage = () => {
  useScrollObserver();
  const { language } = useLanguage();
  const T = (obj: { es: string; en: string; pt: string }) => obj[language as 'es' | 'en' | 'pt'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: 'Todos'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success(T({
        es: "Mensaje enviado correctamente. Nos pondremos en contacto pronto.",
        en: "Message sent successfully. We will contact you soon.",
        pt: "Mensagem enviada com sucesso. Entraremos em contato em breve."
      }));
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: 'Todos'
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative">
        <div className="absolute inset-0 bg-pgnavy z-0 overflow-hidden">
          <div className="absolute w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-gradient-to-r from-pgblue/20 to-transparent top-[-200px] sm:top-[-300px] md:top-[-400px] left-[-100px] sm:left-[-150px] md:left-[-200px] blur-3xl"></div>
          <div className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-gradient-to-l from-pgblue/20 to-transparent bottom-[-150px] sm:bottom-[-225px] md:bottom-[-300px] right-[-50px] sm:right-[-75px] md:right-[-100px] blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/contact/contact-pattern.jpg')] bg-cover bg-center opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 slide-up active leading-tight">
              {T({ es: "Contáctenos", en: "Contact Us", pt: "Fale Conosco" })}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl sm:max-w-3xl mx-auto slide-up active px-4 sm:px-0 leading-relaxed" style={{ transitionDelay: '0.1s' }}>
              {T({
                es: "Estamos aquí para responder a sus preguntas y proporcionarle soluciones de protección balística premium a medida.",
                en: "We are here to answer your questions and provide you with tailored premium ballistic protection solutions.",
                pt: "Estamos aqui para responder às suas perguntas e fornecer soluções de proteção balística premium sob medida."
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <ContactCard
              icon={MessageSquare}
              title={T({ es: "Consultas Generales", en: "General Inquiries", pt: "Consultas Gerais" })}
              description={T({
                es: "Estamos disponibles para responder cualquier pregunta sobre nuestros productos y servicios.",
                en: "We are available to answer any questions about our products and services.",
                pt: "Estamos disponíveis para responder qualquer dúvida sobre nossos produtos e serviços."
              })}
              delay="0.1s"
            />

            <ContactCard
              icon={Shield}
              title={T({ es: "Soluciones Personalizadas", en: "Custom Solutions", pt: "Soluções Personalizadas" })}
              description={T({
                es: "Consúltenos sobre soluciones de blindaje a medida para sus necesidades específicas.",
                en: "Consult us about custom armoring solutions for your specific needs.",
                pt: "Consulte-nos sobre soluções de blindagem sob medida para suas necessidades específicas."
              })}
              delay="0.2s"
            />

            <ContactCard
              icon={Globe}
              title={T({ es: "Distribución Internacional", en: "International Distribution", pt: "Distribuição Internacional" })}
              description={T({
                es: "Póngase en contacto con nosotros para información sobre distribución y disponibilidad global.",
                en: "Contact us for information about distribution and global availability.",
                pt: "Entre em contato conosco para informações sobre distribuição e disponibilidade global."
              })}
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 relative z-10 -mt-6 sm:-mt-8 md:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form */}
              <div className="p-6 sm:p-8 md:p-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-pgnavy mb-6 sm:mb-8 slide-up">
                  {T({ es: "Envíenos un mensaje", en: "Send Us a Message", pt: "Envie-nos uma Mensagem" })}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 slide-up" style={{ transitionDelay: '0.1s' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-pgnavy mb-1">
                        {T({ es: "Nombre completo", en: "Full Name", pt: "Nome completo" })}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent text-sm sm:text-base"
                        placeholder={T({ es: "Su nombre", en: "Your name", pt: "Seu nome" })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-pgnavy mb-1">
                        {T({ es: "Correo electrónico", en: "Email", pt: "E-mail" })}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent text-sm sm:text-base"
                        placeholder="ejemplo@correo.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-pgnavy mb-1">
                        {T({ es: "Teléfono", en: "Phone", pt: "Telefone" })}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent text-sm sm:text-base"
                        placeholder={T({ es: "Su número telefónico", en: "Your phone number", pt: "Seu número de telefone" })}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-pgnavy mb-1">
                        {T({ es: "Empresa", en: "Company", pt: "Empresa" })}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent text-sm sm:text-base"
                        placeholder={T({ es: "Nombre de su empresa", en: "Your company name", pt: "Nome da sua empresa" })}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-pgnavy mb-1">
                      {T({ es: "Producto de interés", en: "Product of Interest", pt: "Produto de Interesse" })}
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                    >
                      <option value="Todos">{T({ es: "Todos los productos", en: "All products", pt: "Todos os produtos" })}</option>
                      <option value="NEU">NEU Premium Ballistic Glass</option>
                      <option value="GlassGuard">GlassGuard</option>
                      <option value="SteelGlass">SteelGlass</option>
                      <option value="SuperSlim">SuperSlim</option>
                      <option value="ULTRA">ULTRA</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-pgnavy mb-1">
                      {T({ es: "Mensaje", en: "Message", pt: "Mensagem" })}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                      placeholder={T({
                        es: "Cuéntenos más sobre su proyecto o requerimientos",
                        en: "Tell us more about your project or requirements",
                        pt: "Conte-nos mais sobre seu projeto ou necessidades"
                      })}
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-pgnavy text-white rounded-md hover:bg-pgblue transition-colors duration-300 flex items-center justify-center"
                    >
                      <Send size={18} className="mr-2" />
                      {isSubmitting
                        ? T({ es: "Enviando...", en: "Sending...", pt: "Enviando..." })
                        : T({ es: "Enviar mensaje", en: "Send message", pt: "Enviar mensagem" })}
                    </button>
                  </div>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-pgnavy text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 slide-right">
                    {T({ es: "Información de contacto", en: "Contact Information", pt: "Informações de Contato" })}
                  </h2>

                  <div className="space-y-4 sm:space-y-6 slide-right" style={{ transitionDelay: '0.1s' }}>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-pglight mt-0.5" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{T({ es: "Correo electrónico", en: "Email", pt: "E-mail" })}</p>
                        <a href="mailto:info@pgproducts.com.br" className="text-pglight hover:underline text-sm sm:text-base break-all">
                          info@pgproducts.com.br
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-pglight mt-0.5" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{T({ es: "Teléfono", en: "Phone", pt: "Telefone" })}</p>
                        <a href="tel:+5255123456789" className="text-pglight hover:underline text-sm sm:text-base">
                          +52 55 1234 5678
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-pglight mt-0.5" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{T({ es: "Ubicación", en: "Location", pt: "Localização" })}</p>
                        <p className="text-white/80 text-sm sm:text-base">Ciudad de México, México</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-pglight mt-0.5" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{T({ es: "Sitio Web", en: "Website", pt: "Site" })}</p>
                        <a href="https://www.pgproducts.com.br" target="_blank" rel="noopener noreferrer" className="text-pglight hover:underline text-sm sm:text-base break-all">
                          www.pgproducts.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12 slide-right" style={{ transitionDelay: '0.2s' }}>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {T({ es: "Horario de atención", en: "Business Hours", pt: "Horário de Atendimento" })}
                  </h3>
                  <div className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
                    <p>{T({ es: "Lunes a Viernes: 9:00 AM - 6:00 PM", en: "Monday to Friday: 9:00 AM - 6:00 PM", pt: "Segunda a Sexta: 9:00 AM - 6:00 PM" })}</p>
                    <p>{T({ es: "Sábados: 9:00 AM - 1:00 PM", en: "Saturdays: 9:00 AM - 1:00 PM", pt: "Sábados: 9:00 AM - 1:00 PM" })}</p>
                    <p>{T({ es: "Domingos: Cerrado", en: "Sundays: Closed", pt: "Domingos: Fechado" })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pgnavy mb-3 sm:mb-4">
              {T({ es: "Encuéntrenos", en: "Find Us", pt: "Nos Encontre" })}
            </h2>
            <p className="text-base sm:text-lg text-pgnavy/70 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-0">
              {T({
                es: "Visite nuestras instalaciones para conocer más sobre nuestros productos y servicios.",
                en: "Visit our facilities to learn more about our products and services.",
                pt: "Visite nossas instalações para conhecer mais sobre nossos produtos e serviços."
              })}
            </p>
          </div>

          <div className="h-64 sm:h-80 md:h-96 rounded-lg sm:rounded-xl overflow-hidden shadow-lg scroll-reveal">
            {/* This would normally be an iframe with a Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4 sm:p-6 md:p-8 max-w-sm md:max-w-md">
                <MapPin className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-pgnavy mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-pgnavy mb-2">
                  {T({ es: "Mapa interactivo", en: "Interactive Map", pt: "Mapa Interativo" })}
                </h3>
                <p className="text-sm sm:text-base text-pgnavy/70">
                  {T({
                    es: "Aquí se mostraría un mapa interactivo con la ubicación de nuestras oficinas en Ciudad de México.",
                    en: "An interactive map with the location of our offices in Mexico City would be shown here.",
                    pt: "Aqui seria exibido um mapa interativo com a localização de nossos escritórios na Cidade do México."
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-pgnavy to-pgblue text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about/dab51236-9306-4c50-b326-1e2f347360ca.png"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDU1QjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuMTUzIDAgMi4xLS45NDcgMi4xLTIuMXMtLjk0Ny0yLjEtMi4xLTIuMS0yLjEuOTQ3LTIuMSAyLjEuOTQ3IDIuMSAyLjEgMi4xem0wIDQyYzEuMTUzIDAgMi4xLS45NDcgMi4xLTIuMXMtLjk0Ny0yLjEtMi4xLTIuMS0yLjEuOTQ3LTIuMSAyLjEuOTQ3IDIuMSAyLjEgMi4xem0yMi04NGMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXptMCA0MmMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXptMCA0MmMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl sm:max-w-3xl mx-auto scroll-reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {T({ es: "¿Listo para elevar su seguridad?", en: "Ready to Elevate Your Security?", pt: "Pronto para Elevar sua Segurança?" })}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 px-4 sm:px-0">
              {T({
                es: "Contáctenos hoy mismo para descubrir cómo nuestros productos de vidrio blindado premium pueden proporcionarle la máxima protección con un diseño elegante.",
                en: "Contact us today to discover how our premium armored glass products can provide you with maximum protection with an elegant design.",
                pt: "Entre em contato hoje mesmo para descobrir como nossos produtos de vidro blindado premium podem proporcionar máxima proteção com design elegante."
              })}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-white text-pgnavy hover:bg-white/90 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base">
                {T({ es: "Volver arriba", en: "Back to top", pt: "Voltar ao topo" })}
              </a>
              <a href="/" className="border border-white text-white hover:bg-white/10 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium transition-colors text-sm sm:text-base">
                {T({ es: "Volver al inicio", en: "Back to home", pt: "Voltar ao início" })}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
