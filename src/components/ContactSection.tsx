
import { useRef, useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.slide-up, .slide-left, .slide-right');
            animatedElements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">Contáctenos</h2>
          <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
            Estamos aquí para responder a sus preguntas y proporcionarle más información sobre nuestros productos premium de vidrio blindado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="slide-up">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-pgnavy mb-6">Envíenos un mensaje</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
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
                      className="w-full py-3 px-6 bg-pgnavy text-white rounded-md hover:bg-pgblue transition-colors duration-300 flex items-center justify-center"
                    >
                      <Send size={18} className="mr-2" />
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="slide-right">
              <div className="bg-pgnavy rounded-xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                <div className="space-y-4">
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
                </div>
              </div>
            </div>

            <div className="slide-right" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-pgnavy mb-6">Visítenos en línea</h3>
                <p className="text-pgnavy/70 mb-4">
                  Conozca más sobre nuestros productos y servicios en nuestro sitio web oficial o síganos en redes sociales.
                </p>
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="https://www.pgproducts.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-pgnavy text-white px-6 py-3 rounded-md hover:bg-pgblue transition-colors duration-300"
                  >
                    Sitio Web
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
