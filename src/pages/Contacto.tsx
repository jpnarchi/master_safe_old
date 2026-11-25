import React, { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
};

const Contacto = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_6fe2jsg',
        'template_27wgcjl',
        {
          to_email: 'contacto@astrawebdevelopers.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'hin6SYn84_mwmOemr'
      );

      setSubmitStatus('success');
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-green min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="/burban.jpeg"
            alt="Contact header"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Updated gradient overlay to extend further down */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green from-10% via-brand-green-dark/75 via-40% to-brand-green-dark/40 to-100%" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]">
              CONTACTO
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl [text-shadow:_0_4px_8px_rgb(0_0_0_/_90%)]">
              Tu seguridad es nuestra prioridad
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="container mx-auto px-4 md:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl brand-heading mb-12">
                SOLICITA UNA CONSULTA
              </h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre"
                    required
                    className="w-full px-6 py-4 bg-brand-green-mid border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors brand-text !text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-6 py-4 bg-brand-green-mid border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors brand-text !text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    required
                    className="w-full px-6 py-4 bg-brand-green-mid border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors brand-text !text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 bg-brand-green-mid border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors brand-text !text-white placeholder:text-white/60 appearance-none"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="blindaje">Blindaje Vehicular</option>
                    <option value="mantenimiento">Mantenimiento</option>
                    <option value="asesoria">Asesoría Técnica</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mensaje"
                    rows={6}
                    required
                    className="w-full px-6 py-4 bg-brand-green-mid border border-white/30 rounded-lg focus:outline-none focus:border-white transition-colors brand-text !text-white placeholder:text-white/60 resize-none"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-white text-brand-green rounded-lg">
                    Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-brand-error text-white rounded-lg">
                    Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`brand-button w-full ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <h2 className="text-3xl brand-heading mb-12">
                INFORMACIÓN DE CONTACTO
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <MapPin size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-heading mb-2">SHOWROOM</h3>
                    <p className="brand-text">
                      Premium Park Lerma<br />
                      Toluca de Lerdo, Estado de México
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Phone size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-heading mb-2">TELÉFONO</h3>
                    <p className="brand-text">+52 55 1204 0947</p>
                    <a
                      href="https://api.whatsapp.com/send?phone=525512040947"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-6 py-3 bg-white hover:bg-brand-light text-brand-green rounded-lg transition-colors duration-300 text-sm tracking-wider uppercase flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Contactar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Mail size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-heading mb-2">EMAIL</h3>
                    <p className="brand-text">info@mastersafe.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <Clock size={24} className="flex-shrink-0 text-white" />
                  <div>
                    <h3 className="brand-heading mb-2">HORARIO</h3>
                    <p className="brand-text">
                      Lunes - Viernes: 9:00 AM - 6:00 PM<br />
                      Sábado: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;