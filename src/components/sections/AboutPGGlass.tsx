const AboutPGGlass = () => {
  return (
    <section id="about-pg" className="py-20 bg-white relative">
      {/* <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-70"
        />
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-left">
            <h2 className="heading-lg text-pgnavy mb-4">About PG Glass</h2>
            <p className="text-lg text-pgnavy/70">
              PG Glass es líder en la fabricación de vidrio blindado premium, combinando tecnología europea 
              de vanguardia con los más altos estándares de calidad en la industria automotriz.
            </p>
            <p className="text-lg text-pgnavy/70">
              Nuestra dedicación a la innovación y excelencia nos ha posicionado como referentes 
              en soluciones de seguridad transparente para vehículos de alta gama.
            </p>
          </div>
          
          <div className="slide-right">
            <div className="relative rounded-2xl overflow-hidden">
              <video 
                src="/video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Nuevo container de estadísticas */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-pgblue/10 rounded-2xl p-8">
          {/* Izquierda */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-pgnavy">Protegemos Tu Seguridad</h3>
            <p className="text-lg text-pgnavy/70">Confía en la experiencia y calidad de un líder en seguridad automotriz.</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-pgnavy text-white font-semibold rounded hover:bg-pgblue transition">Contáctanos</button>
              <button className="px-6 py-2 bg-white border border-pgnavy text-pgnavy font-semibold rounded hover:bg-pgnavy hover:text-white transition">Ver más</button>
            </div>
          </div>
          {/* Derecha */}
          <div className="flex flex-col sm:flex-row gap-16 justify-center items-center">
            <div className="text-center">
              <div className="text-7xl font-extrabold text-pgblue">500+</div>
              <div className="text-pgnavy/70 mt-2">Casos de éxito</div>
            </div>
            <div className="text-center">
              <div className="text-7xl font-extrabold text-pgblue">99%</div>
              <div className="text-pgnavy/70 mt-2">Satisfacción de clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPGGlass;
