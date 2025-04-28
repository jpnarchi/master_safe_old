
const PGBallistics = () => {
  return (
    <section id="ballistics" className="py-20 bg-pgnavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/c55693d5-aada-4a4c-8c5b-1d29642483b9.png"
                alt="Ballistic Testing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="heading-lg mb-4">PG Ballistics</h2>
            <p className="text-lg text-white/80">
              Nuestros productos están certificados bajo los más rigurosos estándares internacionales, 
              ofreciendo protección balística NIJ III-A y resistencia superior contra amenazas específicas.
            </p>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Certificación NIJ III-A</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Resistencia a 7,62x39mm FMJ</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Tecnología multi-capa avanzada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PGBallistics;
