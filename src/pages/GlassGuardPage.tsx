
import { Shield, CheckCircle, FileCheck, LayoutGrid } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const GlassGuardPage = () => {
  return (
    <PageLayout 
      title="GlassGuard" 
      subtitle="Calidad, Durabilidad y balística comprobada"
      bgImage="/lovable-uploads/40cfe7f9-b375-46b7-8288-f45cd9946d7f.png"
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
                src="/lovable-uploads/1453f44b-995c-42fe-b493-215aff3a1cb6.png" 
                alt="GlassGuard Premium en vehículo militar" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
            <div className="space-y-6 slide-right">
              <h2 className="heading-lg text-pgnavy">Vidrio premium de resistencia balística certificada</h2>
              <p className="text-lg text-pgnavy/70">
                GlassGuard compone un portafolio de soluciones de blindaje transparente según normas locales e internacionales para diferentes aplicaciones de alta especificación.
                La composición se desarrolla con materiales certificados y procesos detallados para asegurar el ADN de PG: balística innovadora, geometría estable, óptica destacable y estética única.
              </p>
              <div className="pt-4">
                <a href="#caracteristicas" className="btn-primary">Explorar GlassGuard</a>
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
              GlassGuard ofrece soluciones de blindaje de alta especificación con certificaciones internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up">
              <CheckCircle className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Gestión de Calidad Certificada</h3>
              <p className="text-white/70">
                El producto PG cuenta con experiencia y gestión de calidad certificada ISO 9001, garantizando los más altos estándares en cada fase de producción.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.1s' }}>
              <Shield className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Materiales Avanzados</h3>
              <p className="text-white/70">
                GlassGuard está formulado con materiales avanzados y procesos detallados que aseguran una protección óptima sin comprometer la visibilidad o el diseño.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.2s' }}>
              <LayoutGrid className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Variedad de Opciones</h3>
              <p className="text-white/70">
                Disponible en variedad de colores y transmisiones de luz que complementan accesorios como redes desempañantes, antenas y orificios para limpiadores.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.3s' }}>
              <FileCheck className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Múltiples Certificaciones</h3>
              <p className="text-white/70">
                Cumple con diversas normas: ABNT NBR 15000, CEN 1063, NATO STANAG 4569, NIJ 0108.01, entre otras, asegurando protección confiable en diferentes escenarios.
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
                La composición de GlassGuard se desarrolla con materiales certificados y procesos detallados para asegurar la más alta calidad y protección.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Vidrio con pintura Cerámica</h3>
                    <p className="text-pgnavy/70">Capa exterior reforzada con acabado cerámico de alta durabilidad.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Polímeros elastómeros</h3>
                    <p className="text-pgnavy/70">Capa intermedia con polímeros especiales que absorben y disipan la energía del impacto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Policarbonato anti-rayado</h3>
                    <p className="text-pgnavy/70">Capa interna de policarbonato de alta duración con protección contra rayones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative slide-right">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/glassguard-composition.jpg" 
                  alt="GlassGuard Composition" 
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
              GlassGuard cumple con las más exigentes normas internacionales de seguridad y protección balística.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pgnavy to-pgblue text-white relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="heading-lg mb-6">Protección certificada para sus necesidades</h2>
            <p className="text-lg text-white/80 mb-8">
              Contáctenos hoy para conocer cómo GlassGuard puede ofrecer la solución de protección balística ideal para su aplicación específica.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contacto" className="bg-white text-pgnavy hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors">
                Solicitar información
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

export default GlassGuardPage;
