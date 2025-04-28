
const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-pglight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">Sobre Nosotros</h2>
          <p className="text-xl text-pgnavy/70 max-w-3xl mx-auto">
            Liderando la innovación en vidrio blindado automotriz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-pgnavy mb-4">Nuestra Misión</h3>
              <p className="text-pgnavy/70">
                Proporcionar soluciones de seguridad transparente de la más alta calidad, 
                utilizando tecnología europea de vanguardia para proteger vidas.
              </p>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-pgnavy mb-4">Nuestra Visión</h3>
              <p className="text-pgnavy/70">
                Ser referentes globales en innovación y calidad en la industria 
                del vidrio blindado automotriz.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-pgnavy mb-4">Valores</h3>
              <ul className="space-y-4 text-pgnavy/70">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pgnavy rounded-full"></span>
                  <span>Excelencia en calidad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pgnavy rounded-full"></span>
                  <span>Innovación continua</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pgnavy rounded-full"></span>
                  <span>Compromiso con la seguridad</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pgnavy rounded-full"></span>
                  <span>Servicio al cliente superior</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold text-pgnavy mb-4">Certificaciones</h3>
              <p className="text-pgnavy/70">
                Cumplimos con los más altos estándares internacionales de calidad 
                y seguridad en la industria del vidrio blindado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
