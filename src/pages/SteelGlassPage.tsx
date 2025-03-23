
import { ShieldCheck, CheckSquare, Maximize, Wrench } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const SteelGlassPage = () => {
  return (
    <PageLayout 
      title="SteelGlass" 
      subtitle="Resistente hasta el Borde"
      bgImage="/lovable-uploads/steelglass-bg.jpg"
      darkMode={true}
    >
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-left">
              <h2 className="heading-lg text-pgnavy">Vidrio Blindado con Acero Integrado</h2>
              <p className="text-lg text-pgnavy/70">
                SteelGlass integra en su formulación un inserto de acero en el contorno, añadiendo protección hasta el borde. 
                Se trata de un vidrio blindado con acero insertado en el bloque balístico, 
                dando estructura y resistencia en los bordes.
              </p>
              <p className="text-lg text-pgnavy/70">
                Su gran factor diferencial es proteger a los ocupantes del vehículo del punto vulnerable formado 
                entre el bloque balístico del vidrio y la parte opaca.
              </p>
              <div className="pt-4">
                <a href="#ventajas" className="btn-primary">Descubrir ventajas</a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden slide-right">
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/20 to-pgblue/20 z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/steelglass-product.jpg" 
                alt="SteelGlass" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="ventajas" className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg mb-4">Ventajas de SteelGlass</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Descubra por qué SteelGlass representa un avance revolucionario en la tecnología de vidrio blindado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up">
              <Maximize className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Evita la instalación de Overlaps</h3>
              <p className="text-white/70">
                El acero integrado en el borde elimina la necesidad de overlaps adicionales, simplificando el proceso de instalación y mejorando la estética.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.1s' }}>
              <CheckSquare className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Mantiene la originalidad del vehículo</h3>
              <p className="text-white/70">
                Al no requerir modificaciones externas visibles, SteelGlass permite conservar la apariencia original del vehículo sin comprometer la seguridad.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.2s' }}>
              <Wrench className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Acabado Premium</h3>
              <p className="text-white/70">
                El acero inoxidable no solo proporciona protección adicional, sino también un acabado estético superior que realza la apariencia del vehículo.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.3s' }}>
              <ShieldCheck className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Acero inoxidable certificado</h3>
              <p className="text-white/70">
                Utiliza acero inoxidable balístico certificado que garantiza los más altos estándares de protección y durabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden slide-left">
              <img 
                src="/lovable-uploads/steelglass-detail.jpg" 
                alt="SteelGlass Detail" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
            
            <div className="space-y-8 slide-right">
              <h2 className="heading-lg text-pgnavy">Detalles Técnicos</h2>
              <p className="text-lg text-pgnavy/70">
                SteelGlass es un avance tecnológico patentado por PG Products que refuerza los puntos más vulnerables del vidrio blindado.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-pgnavy pl-4">
                  <p className="text-pgnavy/80">
                    <strong>Refuerzo estructural:</strong> Minimiza rupturas en el cierre continuo de las puertas, proporcionando mayor integridad estructural.
                  </p>
                </div>
                
                <div className="border-l-4 border-pgnavy pl-4">
                  <p className="text-pgnavy/80">
                    <strong>Protección completa:</strong> Bajo agresión, SteelGlass apoya el bloque balístico y evita que se desprenda de la lámina externa y caiga en el interior del vehículo, protegiendo a los ocupantes.
                  </p>
                </div>
                
                <div className="border-l-4 border-pgnavy pl-4">
                  <p className="text-pgnavy/80">
                    <strong>Versatilidad:</strong> Compatible con distintos niveles de protección, desde armas cortas (hasta NIJ IIIA y B4) hasta niveles superiores para armas largas (NIJ III, DN6, DN7 y otros).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Protección Superior en Puntos Críticos</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              SteelGlass refuerza el vidrio en el borde y, en caso de ataque, protege a los ocupantes en los puntos vulnerables de la unión entre el paquete balístico del vidrio y el blindaje opaco.
            </p>
          </div>

          <div className="relative h-96 bg-gray-100 rounded-xl overflow-hidden shadow-sm slide-up">
            <img 
              src="/lovable-uploads/steelglass-diagram.jpg" 
              alt="SteelGlass Protection Diagram" 
              className="w-full h-full object-contain" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-pgnavy/70 backdrop-blur-sm px-6 py-4 rounded-lg max-w-md text-center">
                <p className="text-white font-medium">
                  El acero integrado protege la zona de transición entre el vidrio y la carrocería, eliminando puntos débiles.
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
            <h2 className="heading-lg mb-6">Protección integral sin compromisos</h2>
            <p className="text-lg text-white/80 mb-8">
              Descubra cómo SteelGlass puede mejorar la seguridad de su vehículo manteniendo su apariencia original. Contacte con nuestros especialistas hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contacto" className="bg-white text-pgnavy hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors">
                Solicitar presupuesto
              </a>
              <a href="/#productos" className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors">
                Ver otros productos
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SteelGlassPage;
