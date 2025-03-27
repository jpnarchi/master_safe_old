
import { Shield, CheckCircle, FileCheck, LayoutGrid } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import CTASection from '../components/CTASection';

const SteelGlassPage = () => {
  return (
    <PageLayout 
      title="SteelGlass" 
      subtitle="Resistente hasta el Borde"
      bgImage="/lovable-uploads/f5c6e475-3162-4ca5-b907-7e8d88c03f2e.png"
      fullWidthBg={true}
      overlayOpacity="bg-gradient-to-b from-pgnavy/70 via-pgnavy/50 to-pgnavy/30"
      textColor="text-white"
    >
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden slide-left">
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/20 to-pgblue/20 z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/74356578-08a7-4a0d-ad9b-ef8f2083fe81.png" 
                alt="SteelGlass - BMW premium vehicle" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
            <div className="space-y-6 slide-right">
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
                <a href="#caracteristicas" className="btn-primary">Explorar SteelGlass</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg mb-4">Características Destacadas</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              SteelGlass ofrece soluciones de blindaje con acero integrado para protección incluso en los bordes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up">
              <CheckCircle className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Evita la instalación de Overlaps</h3>
              <p className="text-white/70">
                El acero integrado en el borde elimina la necesidad de overlaps adicionales, simplificando el proceso de instalación y mejorando la estética.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.1s' }}>
              <Shield className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Mantiene la originalidad del vehículo</h3>
              <p className="text-white/70">
                Al no requerir modificaciones externas visibles, SteelGlass permite conservar la apariencia original del vehículo sin comprometer la seguridad.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.2s' }}>
              <LayoutGrid className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Acabado Premium</h3>
              <p className="text-white/70">
                El acero inoxidable no solo proporciona protección adicional, sino también un acabado estético superior que realza la apariencia del vehículo.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.3s' }}>
              <FileCheck className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Acero inoxidable certificado</h3>
              <p className="text-white/70">
                Utiliza acero inoxidable balístico certificado que garantiza los más altos estándares de protección y durabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Composition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 slide-left">
              <h2 className="heading-lg text-pgnavy">Composición Avanzada</h2>
              <p className="text-lg text-pgnavy/70">
                La composición de SteelGlass incorpora acero inoxidable en los bordes del vidrio para proporcionar mayor resistencia estructural y protección balística integral.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Vidrio reforzado</h3>
                    <p className="text-pgnavy/70">Capa exterior de alta resistencia con tratamiento especial antirrayas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Acero inoxidable balístico</h3>
                    <p className="text-pgnavy/70">Marco de acero integrado en los bordes que proporciona resistencia estructural sin comprometer la estética.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Sellado anti-deformación</h3>
                    <p className="text-pgnavy/70">Sistema de sellado especial que mantiene la integridad del vidrio incluso bajo condiciones extremas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative slide-right">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png" 
                  alt="SteelGlass - BMW SUV on road" 
                  className="w-full h-auto" 
                />
              </div>
              
              <div className="absolute bottom-4 right-4 bg-pgnavy text-white px-4 py-2 rounded-lg text-sm font-medium">
                Tecnología Patentada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Estándares y Normas</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              SteelGlass cumple con las más exigentes normas internacionales de seguridad y protección balística.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "ABNT NBR 15000", 
              "CEN 1063", 
              "NATO STANAG 4569", 
              "NIJ 0108.01", 
              "RENAR MA.02",
              "VPAM APR 2006", 
              "VPAM BRV 2009",
              "VPAM ERV 2010", 
              "VPAM PM 2007",
              "NOM 142 SCFI 2000"
            ].map((standard, index) => (
              <div 
                key={standard} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center slide-up"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <p className="font-medium text-pgnavy">{standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use CTASection component */}
      <CTASection 
        title="Protección integral sin compromisos"
        description="Descubra cómo SteelGlass puede mejorar la seguridad de su vehículo manteniendo su apariencia original. Contacte con nuestros especialistas hoy mismo."
        primaryButtonText="Solicitar presupuesto"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver otros productos"
        secondaryButtonLink="/#productos"
      />
    </PageLayout>
  );
};

export default SteelGlassPage;
