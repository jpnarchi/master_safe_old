
import { Shield, Award, Sparkles, Maximize, PenTool } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const NeuPage = () => {
  return (
    <PageLayout 
      title="NEU Premium Ballistic Glass" 
      subtitle="Cristal blindado automotriz con ingeniería Alemana y estándares Europeos"
      bgImage="/lovable-uploads/neu-bg.jpg"
      darkMode={true}
    >
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 slide-left">
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
            <div className="relative h-96 rounded-2xl overflow-hidden slide-right">
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/20 to-pgblue/20 z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/neu-product.jpg" 
                alt="NEU Premium Glass" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Características Destacadas</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              NEU combina tecnología de punta, materiales premium y procesos innovadores para ofrecer la máxima protección.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow slide-up">
              <Shield className="w-12 h-12 text-pgblue mb-4" />
              <h3 className="text-xl font-bold text-pgnavy mb-3">Resistencia Balística NIJ III-A</h3>
              <p className="text-pgnavy/70">
                Adicionalmente resistencia balística comprobada ante: 4 impactos de Munición 7,62x39mm FMJ (Doble triángulo) ó 2 impactos Munición: 7,62x39 MSC.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow slide-up" style={{ transitionDelay: '0.1s' }}>
              <PenTool className="w-12 h-12 text-pgblue mb-4" />
              <h3 className="text-xl font-bold text-pgnavy mb-3">Serigrafía Tipo Europeo</h3>
              <p className="text-pgnavy/70">
                Flat painting que proporciona más visibilidad y discreción. Diseño elegante y moderno que no compromete la protección.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow slide-up" style={{ transitionDelay: '0.2s' }}>
              <Award className="w-12 h-12 text-pgblue mb-4" />
              <h3 className="text-xl font-bold text-pgnavy mb-3">Acabado Premium</h3>
              <p className="text-pgnavy/70">
                Acabado único de acero inoxidable, estético y resistente que proporciona un aspecto sofisticado y una durabilidad excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="especificaciones" className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg mb-4">Especificaciones Técnicas</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Nuestro compromiso con la excelencia se refleja en cada detalle de NEU Premium Ballistic Glass.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-xl scroll-reveal">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Espesor</td>
                  <td className="py-4">21mm</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Estándar Balístico</td>
                  <td className="py-4">NIJ III-A</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Resistencia Adicional</td>
                  <td className="py-4">4 impactos Munición: 7,62x39mm FMJ (Doble triángulo 200mm)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 font-medium">Certificaciones</td>
                  <td className="py-4">Disponibles, pruebas realizadas en laboratorios reconocidos</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium">Acabado</td>
                  <td className="py-4">Acero inoxidable, estético y resistente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pgnavy to-pgblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
