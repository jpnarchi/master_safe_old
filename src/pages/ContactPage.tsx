
import { useState } from 'react';
import { toast } from "sonner";
import { Mail, Phone, MapPin, Globe, Send, Shield, MessageSquare, LucideIcon } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollObserver from '../utils/ScrollObserver';

interface ContactCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: string;
}

const ContactCard = ({ title, description, icon: Icon, delay = '0s' }: ContactCardProps) => (
  <div 
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 slide-up"
    style={{ transitionDelay: delay }}
  >
    <div className="w-16 h-16 rounded-full bg-pgnavy/10 flex items-center justify-center mb-6 mx-auto">
      <Icon className="w-8 h-8 text-pgnavy" />
    </div>
    <h3 className="text-xl font-bold text-pgnavy mb-3 text-center">{title}</h3>
    <p className="text-pgnavy/70 text-center">{description}</p>
  </div>
);

const ContactPage = () => {
  useScrollObserver();

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
      toast.success("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
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
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-pgnavy z-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pgblue/20 to-transparent top-[-400px] left-[-200px] blur-3xl"></div>
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-l from-pgblue/20 to-transparent bottom-[-300px] right-[-100px] blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/contact-pattern.jpg')] bg-cover bg-center opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h1 className="heading-xl text-white mb-6 slide-up active">Contáctenos</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto slide-up active" style={{ transitionDelay: '0.1s' }}>
              Estamos aquí para responder a sus preguntas y proporcionarle soluciones de protección balística premium a medida.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard 
              icon={MessageSquare} 
              title="Consultas Generales" 
              description="Estamos disponibles para responder cualquier pregunta sobre nuestros productos y servicios."
              delay="0.1s"
            />
            
            <ContactCard 
              icon={Shield} 
              title="Soluciones Personalizadas" 
              description="Consúltenos sobre soluciones de blindaje a medida para sus necesidades específicas."
              delay="0.2s"
            />
            
            <ContactCard 
              icon={Globe} 
              title="Distribución Internacional" 
              description="Póngase en contacto con nosotros para información sobre distribución y disponibilidad global."
              delay="0.3s"
            />
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 relative z-10 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form */}
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-pgnavy mb-8 slide-up">
                  Envíenos un mensaje
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6 slide-up" style={{ transitionDelay: '0.1s' }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-pgnavy mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                        placeholder="Su nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-pgnavy mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                        placeholder="ejemplo@correo.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-pgnavy mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                        placeholder="Su número telefónico"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-pgnavy mb-1">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                        placeholder="Nombre de su empresa"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-pgnavy mb-1">
                      Producto de interés
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                    >
                      <option value="Todos">Todos los productos</option>
                      <option value="NEU">NEU Premium Ballistic Glass</option>
                      <option value="GlassGuard">GlassGuard</option>
                      <option value="SteelGlass">SteelGlass</option>
                      <option value="SuperSlim">SuperSlim</option>
                      <option value="ULTRA">ULTRA</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-pgnavy mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pgblue focus:border-transparent"
                      placeholder="Cuéntenos más sobre su proyecto o requerimientos"
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
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Contact Info */}
              <div className="bg-pgnavy text-white p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 slide-right">
                    Información de contacto
                  </h2>
                  
                  <div className="space-y-6 slide-right" style={{ transitionDelay: '0.1s' }}>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 mr-4 text-pglight" />
                      <div>
                        <p className="font-medium">Correo electrónico</p>
                        <a href="mailto:info@pgproducts.com.br" className="text-pglight hover:underline">
                          info@pgproducts.com.br
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 mr-4 text-pglight" />
                      <div>
                        <p className="font-medium">Teléfono</p>
                        <a href="tel:+5255123456789" className="text-pglight hover:underline">
                          +52 55 1234 5678
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 mr-4 text-pglight" />
                      <div>
                        <p className="font-medium">Ubicación</p>
                        <p className="text-white/80">Ciudad de México, México</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="w-6 h-6 mr-4 text-pglight" />
                      <div>
                        <p className="font-medium">Sitio Web</p>
                        <a href="https://www.pgproducts.com.br" target="_blank" rel="noopener noreferrer" className="text-pglight hover:underline">
                          www.pgproducts.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 slide-right" style={{ transitionDelay: '0.2s' }}>
                  <h3 className="text-xl font-bold mb-4">Horario de atención</h3>
                  <div className="space-y-2 text-white/80">
                    <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p>Sábados: 9:00 AM - 1:00 PM</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Encuéntrenos</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              Visite nuestras instalaciones para conocer más sobre nuestros productos y servicios.
            </p>
          </div>
          
          <div className="h-96 rounded-xl overflow-hidden shadow-lg scroll-reveal">
            {/* This would normally be an iframe with a Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8 max-w-md">
                <MapPin className="w-16 h-16 text-pgnavy mx-auto mb-4" />
                <h3 className="text-xl font-bold text-pgnavy mb-2">Mapa interactivo</h3>
                <p className="text-pgnavy/70">
                  Aquí se mostraría un mapa interactivo con la ubicación de nuestras oficinas en Ciudad de México.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pgnavy to-pgblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="heading-lg mb-6">¿Listo para elevar su seguridad?</h2>
            <p className="text-lg text-white/80 mb-8">
              Contáctenos hoy mismo para descubrir cómo nuestros productos de vidrio blindado premium pueden proporcionarle la máxima protección con un diseño elegante.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="bg-white text-pgnavy hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors">
                Volver arriba
              </a>
              <a href="/" className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors">
                Volver al inicio
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
