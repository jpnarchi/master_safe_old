
import { Shield, Zap, Target, Baseline } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import CTASection from '../components/CTASection';

const UltraPage = () => {
  return (
    <PageLayout 
      title="ULTRA" 
      subtitle="Menor espesor, Único desempeño Balístico"
      bgImage="/lovable-uploads/4477eed3-2c74-42de-bfbc-62af32b7fc24.png"
      darkMode={true}
      fullWidthBg={true}
      overlayOpacity="bg-gradient-to-b from-pgnavy/70 via-pgnavy/50 to-pgnavy/30"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-left">
              <h2 className="heading-lg text-pgnavy">Resistencia balística adicional a armas largas</h2>
              <p className="text-lg text-pgnavy/70">
                PG ULTRA es un cristal blindado con todas las características de un nivel bajo, 
                que suma una destacable resistencia balística a munición de nivel superior.
              </p>
              <p className="text-lg text-pgnavy/70">
                Compatible con cualquier modelo de vehículo, probado y certificado con composición exclusiva PG,
                ULTRA ofrece una adición mínima de espesor y peso manteniendo una excepcional resistencia balística.
              </p>
              <div className="pt-4">
                <a href="#especificaciones" className="btn-primary">Ver especificaciones</a>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden slide-right">
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/20 to-pgblue/20 z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/079eba18-1c78-4ae5-935f-5f9415053368.png" 
                alt="ULTRA Glass - Dodge Durango SRT" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg mb-4">Características Exclusivas</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              ULTRA representa el pináculo de la innovación en vidrio blindado, combinando resistencia superior con un diseño compacto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up">
              <Shield className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Protección Certificada</h3>
              <p className="text-white/70">
                Resistencia balística según norma NIJ 0108.01 para nivel NIJ III-A, con certificados de pruebas realizadas en laboratorios reconocidos.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.1s' }}>
              <Target className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Resistencia Extendida</h3>
              <p className="text-white/70">
                Capacidad para resistir 4 impactos de munición 7,62x39mm FMJ a 30 cms o 1 impacto de munición 5,56x45 M193 en el centro.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.2s' }}>
              <Baseline className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Perfil Optimizado</h3>
              <p className="text-white/70">
                Con solo 24mm de espesor, ULTRA ofrece un perfil más delgado que otros cristales blindados de resistencia similar, facilitando su instalación.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.3s' }}>
              <Zap className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Tecnología Avanzada</h3>
              <p className="text-white/70">
                Composición exclusiva de PG Products que permite mantener un peso reducido sin comprometer la resistencia balística premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="especificaciones" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Especificaciones Técnicas</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              ULTRA combina un diseño compacto con una resistencia balística excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-pgnavy/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-pgnavy mb-6">Balística</h3>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-pgnavy/10 pb-4">
                    <div className="bg-pgnavy text-white text-lg font-medium w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-pgnavy font-medium">Certificación Básica</p>
                      <p className="text-pgnavy/70">Vidrio blindado con resistencia balística según la norma NIJ 0108.01 para el nivel NIJ III-A</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-pgnavy/10 pb-4">
                    <div className="bg-pgnavy text-white text-lg font-medium w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-pgnavy font-medium">Resistencia Adicional - Opción 1</p>
                      <p className="text-pgnavy/70">4 impactos de munición 7,62x39mm FMJ a 30 cms</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="bg-pgnavy text-white text-lg font-medium w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-pgnavy font-medium">Resistencia Adicional - Opción 2</p>
                      <p className="text-pgnavy/70">1 impacto de munición 5,56x45 M193 en el centro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-pgnavy text-white rounded-xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Características Físicas</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Espesor:</span>
                    <span className="text-xl font-medium">24 mm</span>
                  </div>
                  
                  <div className="h-px bg-white/20 my-2"></div>
                  
                  <div>
                    <p className="text-white/80 mb-2">Compatibilidades:</p>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>Compatible con SteelGlass</li>
                      <li>Adaptable a cualquier modelo de vehículo</li>
                      <li>Certificaciones internacionales disponibles</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="/contacto" className="bg-white text-pgnavy hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors inline-block w-full text-center">
                  Solicitar información
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-xl overflow-hidden h-96 slide-left">
              <img 
                src="/lovable-uploads/02cb4a80-a267-4a10-8624-af11e5945bd3.png" 
                alt="ULTRA Ballistic Glass - Toyota Sequoia" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-pgnavy/80 backdrop-blur-sm p-4 text-white text-center">
                <p className="font-medium">Protección avanzada para diferentes tipos de vehículos</p>
              </div>
            </div>
            
            <div className="space-y-6 slide-right">
              <h2 className="heading-lg text-pgnavy">Resultados Certificados</h2>
              <p className="text-lg text-pgnavy/70">
                ULTRA ha demostrado un rendimiento excepcional en rigurosas pruebas de laboratorio, 
                superando los estándares requeridos para su categoría.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-pgnavy font-medium">
                    Todos los test de resistencia balística están certificados por laboratorios reconocidos internacionalmente.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-pgnavy font-medium">
                    ULTRA mantiene su integridad estructural incluso después de múltiples impactos, garantizando la máxima protección.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <p className="text-pgnavy font-medium">
                    Disponibilidad de demostraciones y pruebas en persona para verificar el rendimiento excepcional del producto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Protección extraordinaria en dimensiones ordinarias"
        description="Descubra por qué ULTRA representa el futuro del vidrio blindado. Contacte con nuestros especialistas para una demostración personalizada."
        primaryButtonText="Solicitar certificaciones"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver otros productos"
        secondaryButtonLink="/#productos"
      />
    </PageLayout>
  );
};

export default UltraPage;
