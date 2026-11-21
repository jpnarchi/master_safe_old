import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    image: '/mini.webp',
    title: 'INNOVACIÓN',
    description: 'Nos enorgullece ofrecer un servicio integral, desde la asesoría inicial hasta la instalación final del blindaje. Trabajamos en estrecha colaboración con nuestros clientes, escuchando sus necesidades y diseñando soluciones adaptadas a sus requerimientos específicos.',
    imageLeft: true
  },
  {
    image: '/jeep.webp',
    title: 'SEGURIDAD',
    description: 'Nos esforzamos por superar las expectativas de nuestros clientes, brindándoles tranquilidad y seguridad en todo momento. Nuestro compromiso no solo radica en proporcionar un blindaje confiable, sino también en mantener una comunicación constante y transparente con cada uno de nuestros clientes.',
    imageLeft: false
  }
];

const Nosotros = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      
      <section className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src="/IMG_4728.JPG"
            alt="Master Safe Armoring"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green-dark/30" />
        </div>

        {/* Craftsmanship Section */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <video
                  src="/equipo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl brand-heading mb-8">
                  ARTESANÍA Y TECNOLOGÍA
                </h2>
                <p className="text-lg brand-text mb-8">
                  En Master Safe, combinamos la precisión artesanal con la más avanzada tecnología 
                  en blindaje automotriz. Utilizamos cristales PG PRODUCTS SUPER SLIM DOT 920, 
                  reconocidos mundialmente por su calidad y resistencia superior.
                </p>
                <p className="text-lg brand-text">
                  Cada vehículo que pasa por nuestras instalaciones recibe un tratamiento 
                  personalizado, asegurando que cada componente de seguridad se integre 
                  perfectamente con el diseño original del automóvil.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Classic Car Section */}
        <div className="py-24 bg-brand-light">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl brand-heading mb-6">EXPERIENCIA Y TRADICIÓN</h2>
              <p className="text-xl brand-text max-w-3xl mx-auto">
                Desde vehículos clásicos hasta los modelos más modernos, nuestra experiencia 
                nos permite ofrecer soluciones de blindaje que preservan la esencia y el 
                rendimiento de cada automóvil.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src="/jeep.webp"
                alt="Jeep blindado"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
              <img
                src="/chevrolet.webp"
                alt="Chevrolet blindado"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Installation Process */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl brand-heading mb-8">
                  PROCESO DE INSTALACIÓN
                </h2>
                <p className="text-lg brand-text mb-6">
                  Nuestro equipo de técnicos especializados trabaja con precisión y 
                  dedicación en cada proyecto de blindaje. El proceso incluye:
                </p>
                <ul className="space-y-4 text-lg brand-text">
                  <li className="flex items-center gap-4">
                    • Evaluación detallada del vehículo
                  </li>
                  <li className="flex items-center gap-4">
                    • Diseño personalizado del blindaje
                  </li>
                  <li className="flex items-center gap-4">
                    • Instalación de cristales certificados
                  </li>
                  <li className="flex items-center gap-4">
                    • Refuerzo estructural completo
                  </li>
                  <li className="flex items-center gap-4">
                    • Control de calidad riguroso
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/IMG_2916.JPG"
                  alt="Proceso de instalación"
                  className="w-full h-[600px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;