
import { Scale, TrendingDown, Gauge, Battery, BarChart } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const SuperSlimPage = () => {
  return (
    <PageLayout 
      title="SuperSlim" 
      subtitle="Más Liviano, más delgado, igual de resistente"
      bgImage="/lovable-uploads/superslim-bg.jpg"
    >
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden slide-left">
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/20 to-pgblue/20 z-10 rounded-2xl"></div>
              <img 
                src="/lovable-uploads/superslim-product.jpg" 
                alt="SuperSlim Glass" 
                className="w-full h-full object-cover rounded-2xl" 
              />
            </div>
            <div className="space-y-6 slide-right">
              <h2 className="heading-lg text-pgnavy">Premium Ballistic Glass: Thinner, Lightweight and More Durable</h2>
              <p className="text-lg text-pgnavy/70">
                Un cristal blindado certificado que mantiene la resistencia balística pero con una formulación 
                más delgada que asegura un 15% menos de peso y mayor vida útil.
              </p>
              <p className="text-lg text-pgnavy/70">
                Conociendo la importancia del peso en un vehículo blindado y el papel del vidrio en la protección balística, 
                PG crea un cristal con aproximadamente un 15% de reducción de peso y espesor como resultado de una 
                formulación con materiales especiales y polímeros avanzados.
              </p>
              <div className="pt-4">
                <a href="#beneficios" className="btn-primary">Ver beneficios</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-pgnavy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg mb-4">Beneficios de un BRG más liviano</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              SuperSlim combina protección premium con ventajas prácticas para su vehículo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up">
              <Scale className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Menor peso añadido</h3>
              <p className="text-white/70">
                Reducción significativa del peso adicional al vehículo, mejorando su rendimiento general.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.1s' }}>
              <Gauge className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Menos modificaciones</h3>
              <p className="text-white/70">
                Requiere menos modificaciones en las puertas y estructura del vehículo durante el proceso de blindaje.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.2s' }}>
              <TrendingDown className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Mayor eficiencia</h3>
              <p className="text-white/70">
                Mejora en el consumo de combustible gracias a la reducción de peso, optimizando el rendimiento del vehículo.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors slide-up" style={{ transitionDelay: '0.3s' }}>
              <Battery className="w-12 h-12 text-pglight mb-4" />
              <h3 className="text-xl font-bold mb-3">Mayor durabilidad</h3>
              <p className="text-white/70">
                Menor desgaste en componentes del vehículo como suspensión, frenos y transmisión gracias a la carga reducida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-4">Opciones de Producto</h2>
            <p className="text-lg text-pgnavy/70 max-w-3xl mx-auto">
              PG SuperSlim posee dos opciones de producto de acuerdo al nivel balístico para adaptarse a diferentes necesidades de seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow slide-up border-t-4 border-pgnavy">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-pgnavy">SuperSlim URBAN</h3>
                <p className="text-pgnavy/70 mt-2">NORMA NIJ III A</p>
              </div>
              
              <p className="text-pgnavy/80 mb-6">
                Enfocado para niveles bajos, mejorando consumo de gasolina y menos modificaciones en el proceso de blindaje.
              </p>
              
              <table className="w-full mb-6">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Espesor Standard</td>
                    <td className="py-3 text-right">21 mm</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Peso Standard</td>
                    <td className="py-3 text-right">45 kg/m²</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Espesor SuperSlim</td>
                    <td className="py-3 text-right text-pgblue font-medium">18 mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Peso SuperSlim</td>
                    <td className="py-3 text-right text-pgblue font-medium">38 kg/m²</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="bg-pgnavy/5 p-4 rounded-lg">
                <p className="text-sm text-pgnavy/70">Reducción aproximada de 15% en peso y espesor</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow slide-up border-t-4 border-pgblue" style={{ transitionDelay: '0.2s' }}>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-pgnavy">SuperSlim SUPERIOR</h3>
                <p className="text-pgnavy/70 mt-2">NORMA NIJ III</p>
              </div>
              
              <p className="text-pgnavy/80 mb-6">
                En niveles superiores aumenta la capacidad de carga, equipos y tropa, además disminuye gasto de combustible, crea acceso a nuevos proyectos.
              </p>
              
              <table className="w-full mb-6">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Espesor Standard</td>
                    <td className="py-3 text-right">42 mm</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Peso Standard</td>
                    <td className="py-3 text-right">95 kg/m²</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 font-medium">Espesor SuperSlim</td>
                    <td className="py-3 text-right text-pgblue font-medium">38 mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Peso SuperSlim</td>
                    <td className="py-3 text-right text-pgblue font-medium">87 kg/m²</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="bg-pgblue/5 p-4 rounded-lg">
                <p className="text-sm text-pgnavy/70">Ideal para vehículos militares y de alta seguridad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weight Reduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 slide-left">
              <h2 className="heading-lg text-pgnavy">Impacto Real en el Peso</h2>
              <p className="text-lg text-pgnavy/70">
                En un vehículo SUV promedio el área de vidrio blindado es de aproximadamente 4,5m². Con SuperSlim se logra una reducción de peso significativa:
              </p>
              
              <div className="bg-pgnavy text-white p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg">Producto Estándar NIJ III A</span>
                  <span className="text-2xl font-bold">202 kg</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg">SuperSlim NIJ III A</span>
                  <span className="text-2xl font-bold text-pglight">174 kg</span>
                </div>
                <div className="h-px bg-white/20 my-4"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Reducción de peso por set</span>
                  <span className="text-2xl font-bold text-green-400">30 kg aprox.</span>
                </div>
              </div>
            </div>
            
            <div className="relative slide-right">
              <BarChart className="w-full h-64 text-pgnavy" />
              <div className="absolute bottom-4 right-4 bg-pgnavy text-white px-4 py-2 rounded-lg text-sm font-medium">
                15% de reducción
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pgnavy to-pgblue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="heading-lg mb-6">La misma protección, menos peso</h2>
            <p className="text-lg text-white/80 mb-8">
              Optimice el rendimiento de su vehículo sin comprometer la seguridad. Contacte con nuestros especialistas para conocer más sobre SuperSlim.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contacto" className="bg-white text-pgnavy hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors">
                Solicitar demostración
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

export default SuperSlimPage;
