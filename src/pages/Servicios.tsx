import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Car, Wrench, Lock, ArrowRight } from 'lucide-react';

const Servicios = () => {
  return (
    <div className="bg-brand-green min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20">
        <div className="relative h-[90vh] overflow-hidden bg-brand-green-dark">
          <div className="h-full container mx-auto px-4 md:px-8 flex flex-col justify-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl text-white font-light mb-6 tracking-tight">
                SERVICIOS
              </h1>
              <div className="h-1 w-32 bg-white mb-8" />
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-2xl">
                Tu seguridad es nuestra prioridad. Ofrecemos soluciones de blindaje 
                y protección vehicular de clase mundial.
              </p>
            </div>
          </div>
        </div>

        {/* Main Services Section */}
        <div className="py-24 bg-brand-green">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              {/* Blindaje Transparente */}
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/IMG_2916.JPG"
                  alt="Blindaje Transparente"
                  className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl text-white font-light tracking-wider mb-4">BLINDAJE TRANSPARENTE</h3>
                  <p className="text-white/90 mb-6">
                    Cristales Blindados ultraligeros PG Products SUPER SLIM de 18mm con certificación internacional.
                    Máxima protección sin comprometer la visibilidad.
                  </p>
                  <a href="#contacto" className="inline-flex items-center text-white hover:text-white/70 transition-colors">
                    <span className="mr-2">Más información</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>

              {/* Blindaje Opaco */}
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/IMG_2804.JPG"
                  alt="Blindaje Opaco"
                  className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl text-white font-light tracking-wider mb-4">BLINDAJE OPACO</h3>
                  <p className="text-white/90 mb-6">
                    Combinación de MANTAS DE ARAMIDA TWARON y Placas de Acero Balístico SSAB.
                    Protección superior con mínimo impacto en el rendimiento.
                  </p>
                  <a href="#contacto" className="inline-flex items-center text-white hover:text-white/70 transition-colors">
                    <span className="mr-2">Más información</span>
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-brand-green-mid p-8 rounded-xl">
                <Shield className="text-white w-12 h-12 mb-6" />
                <h4 className="text-xl brand-heading mb-4">PROTECCIÓN INTEGRAL</h4>
                <p className="brand-text">
                  Sistema completo de blindaje que cubre todos los puntos críticos del vehículo.
                </p>
              </div>
              
              <div className="bg-brand-green-mid p-8 rounded-xl">
                <Car className="text-white w-12 h-12 mb-6" />
                <h4 className="text-xl brand-heading mb-4">DISEÑO ORIGINAL</h4>
                <p className="brand-text">
                  Mantenemos la estética y funcionalidad original de tu vehículo.
                </p>
              </div>
              
              <div className="bg-brand-green-mid p-8 rounded-xl">
                <Wrench className="text-white w-12 h-12 mb-6" />
                <h4 className="text-xl brand-heading mb-4">MANTENIMIENTO</h4>
                <p className="brand-text">
                  Servicio técnico especializado para mantener el blindaje en óptimas condiciones.
                </p>
              </div>
              
              <div className="bg-brand-green-mid p-8 rounded-xl">
                <Lock className="text-white w-12 h-12 mb-6" />
                <h4 className="text-xl brand-heading mb-4">CERTIFICACIÓN</h4>
                <p className="brand-text">
                  Materiales y procesos certificados bajo estándares internacionales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Showcase */}
        <div className="bg-brand-green-dark py-24">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl brand-heading mb-8">TECNOLOGÍA AVANZADA</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-green font-light">01</span>
                    </div>
                    <div>
                      <h3 className="text-xl brand-heading mb-2">CORTE CNC</h3>
                      <p className="brand-text">
                        Precisión milimétrica en el corte y ajuste de cada pieza de blindaje.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-green font-light">02</span>
                    </div>
                    <div>
                      <h3 className="text-xl brand-heading mb-2">MATERIALES PREMIUM</h3>
                      <p className="brand-text">
                        Utilizamos solo los mejores materiales certificados internacionalmente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <span className="text-brand-green font-light">03</span>
                    </div>
                    <div>
                      <h3 className="text-xl brand-heading mb-2">INSTALACIÓN EXPERTA</h3>
                      <p className="brand-text">
                        Técnicos certificados con años de experiencia en blindaje vehicular.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="/IMG_2383.JPG"
                  alt="Tecnología avanzada"
                  className="w-full rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-sm brand-heading !text-brand-green">CERTIFICACIÓN</p>
                  <p className="text-3xl font-light text-brand-green">NIJ III-A</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 overflow-hidden">
          <img
            src="/IMG_4728.JPG"
            alt="Call to action background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-brand-green/60 to-brand-green/40" />
          <div className="relative container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl text-white font-light tracking-wider mb-8">
              PROTEGE LO QUE MÁS IMPORTA
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a mantener seguros a ti y a tus seres queridos
            </p>
            <a
              href="#contacto"
              className="inline-block px-12 py-4 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 text-lg tracking-wider uppercase font-light"
            >
              Solicitar Información
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;