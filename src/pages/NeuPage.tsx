
import { Shield, Award, Sparkles, Maximize, PenTool, CheckCircle, FileCheck, LayoutGrid } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const NeuPage = () => {
  return (
    <PageLayout 
      title="NEU Premium Ballistic Glass" 
      subtitle="Cristal blindado automotriz con ingeniería Alemana y estándares Europeos"
      bgImage="/lovable-uploads/neu-bg.jpg"
      fullWidthBg={true}
      overlayOpacity="bg-gradient-to-b from-pgnavy/70 via-pgnavy/50 to-pgnavy/30"
      textColor="text-white"
      darkMode={true}
    >
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden slide-left">
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/20 to-pgblue/20 z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/f3db5a79-c8a9-46fc-9660-a991756c711f.png" 
                alt="NEU Premium Glass - Porsche Cayenne" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
            <div className="space-y-6 slide-right">
              <h2 className="heading-lg text-pgnavy">Diseño Alemán, Calidad Europea</h2>
              <p className="text-lg text-pgnavy/70">
                Un cristal blindado automotriz diseñado y desarrollado con ingeniería Alemana, 
                producido con las mejores materias primas disponibles bajo estándares
                de diseño Europeo. Esta combinación proporciona al producto mayor resistencia 
                balística comprobada, calidad superior en geometría, acabados únicos y óptica destacable.
              </p>
              <div className="pt-4">
                <a href="#caracteristicas" className="btn-primary">Descubrir más</a>
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
              NEU combina tecnología de punta, materiales premium y procesos innovadores para ofrecer la máxima seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up">
              <Shield className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Resistencia Balística NIJ III-A</h3>
              <p className="text-white/70">
                Adicionalmente resistencia balística comprobada ante: 4 impactos de Munición 7,62x39mm FMJ (Doble triángulo) ó 2 impactos Munición: 7,62x39 MSC.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.1s' }}>
              <PenTool className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Serigrafía Tipo Europeo</h3>
              <p className="text-white/70">
                Flat painting que proporciona más visibilidad y discreción. Diseño elegante y moderno que no compromete la protección.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.2s' }}>
              <Award className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Acabado Premium</h3>
              <p className="text-white/70">
                Acabado único de acero inoxidable, estético y resistente que proporciona un aspecto sofisticado y una durabilidad excepcional.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.3s' }}>
              <Sparkles className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Óptica Superior</h3>
              <p className="text-white/70">
                Máxima claridad visual sin distorsiones, incluso con los niveles más altos de protección balística.
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
                La composición de NEU se desarrolla con materiales certificados y procesos detallados para asegurar la más alta calidad y protección.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Vidrio Templado Europeo</h3>
                    <p className="text-pgnavy/70">Capa exterior reforzada con tecnología de templado que proporciona mayor resistencia a impactos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Polímeros Multi-capa</h3>
                    <p className="text-pgnavy/70">Sistema de capas intermedias con polímeros especiales que absorben y disipan la energía del impacto.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-pgnavy text-white flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-pgnavy">Capa Anti-Spall</h3>
                    <p className="text-pgnavy/70">Capa interna especial que evita la proyección de fragmentos en caso de impacto.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative slide-right">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/neu-product.jpg" 
                  alt="NEU Premium Glass - Detalle" 
                  className="w-full h-auto" 
                />
              </div>
              
              <div className="absolute bottom-4 right-4 bg-pgnavy text-white px-4 py-2 rounded-lg text-sm font-medium">
                Ingeniería Certificada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="especificaciones" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Especificaciones Técnicas</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia se refleja en cada detalle de NEU Premium Ballistic Glass.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg scroll-reveal">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-medium text-pgnavy">Espesor</td>
                  <td className="py-4 text-pgnavy/80">21mm</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-medium text-pgnavy">Estándar Balístico</td>
                  <td className="py-4 text-pgnavy/80">NIJ III-A</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-medium text-pgnavy">Resistencia Adicional</td>
                  <td className="py-4 text-pgnavy/80">4 impactos Munición: 7,62x39mm FMJ (Doble triángulo 200mm)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 font-medium text-pgnavy">Certificaciones</td>
                  <td className="py-4 text-pgnavy/80">Disponibles, pruebas realizadas en laboratorios reconocidos</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-pgnavy">Acabado</td>
                  <td className="py-4 text-pgnavy/80">Acero inoxidable, estético y resistente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg mb-4">Estándares y Normas</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              NEU Premium cumple con las más exigentes normas internacionales de seguridad y protección balística.
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
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:bg-white/20 transition-colors text-center slide-up"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <p className="font-medium">{standard}</p>
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
            <h2 className="heading-lg mb-6">Descubra la excelencia en protección balística</h2>
            <p className="text-lg text-white/80 mb-8">
              Contáctenos hoy mismo y descubra cómo NEU Premium Ballistic Glass puede ofrecerle la máxima seguridad sin comprometer el diseño y la funcionalidad.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contacto" className="bg-white text-pgnavy hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors">
                Contactar ahora
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

export default NeuPage;
