const teslaRed = "/lovable-uploads/vidrios-home.png";
const teslaGray = "/lovable-uploads/vidrio_disparos.avif";

const AboutPGGlass = () => {
  
  return (
    <section id="about-pg" className="py-20 bg-white relative">
      <div className="w-[90vw] max-w-[1700px] mx-auto flex flex-col gap-10">
        {/* Texto About PG Glass */}
        <div className="bg-gray-100 rounded-2xl p-10 md:p-16 shadow text-justify">
          <h2 className="heading-lg text-pgnavy mb-4 text-center">About PG Glass</h2>
          <p className="text-xl text-pgnavy/70 mb-4">
            PG Glass es líder en la fabricación de vidrio blindado premium, combinando tecnología europea 
            de vanguardia con los más altos estándares de calidad en la industria automotriz.
          </p>
          <p className="text-xl text-pgnavy/70">
            Nuestra dedicación a la innovación y excelencia nos ha posicionado como referentes 
            en soluciones de seguridad transparente para vehículos de alta gama.
          </p>
        </div>
        {/* Grid de dos cards grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card GlassGuard */}
          <div className="bg-gray-100 rounded-2xl p-10 md:p-14 shadow flex flex-col md:flex-row items-center min-h-[320px] md:min-h-[380px]">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">GlassGuard</h3>
              <p className="text-lg text-gray-600 mb-6">Find the Tesla vehicle that's right for you</p>
              <button className="w-full md:w-auto px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition text-lg">Compare Models</button>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src={teslaRed} alt="Red Tesla" className="w-full max-w-xs h-auto object-contain" />
            </div>
          </div>
          {/* Card Calidad Premium */}
          <div className="bg-gray-100 rounded-2xl p-10 md:p-14 shadow flex flex-col md:flex-row items-center min-h-[320px] md:min-h-[380px]">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-3">Calidad Premium</h3>
              <p className="text-lg text-gray-600 mb-6">
                Special purchase program for military, first responder, teacher and student
              </p>
              <button className="w-full md:w-auto px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition text-lg">Learn More</button>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src={teslaGray} alt="Gray Tesla" className="w-full max-w-xs h-auto object-contain" />
            </div>
          </div>
        </div>
        {/* Estadísticas */}
        <div className="bg-gray-100 rounded-2xl p-10 md:p-16 shadow flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-pgnavy mb-2">Protegemos Tu Seguridad</h3>
            <p className="text-lg md:text-xl text-pgnavy/70 mb-4">Confía en la experiencia y calidad de un líder en seguridad automotriz.</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-pgnavy text-white font-semibold rounded hover:bg-pgblue transition text-lg">Contáctanos</button>
              <button className="px-8 py-3 bg-white border border-pgnavy text-pgnavy font-semibold rounded hover:bg-pgnavy hover:text-white transition text-lg">Ver más</button>
            </div>
          </div>
          <div className="flex flex-1 justify-center gap-16">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-extrabold text-pgblue">500+</div>
              <div className="text-pgnavy/70 mt-2 text-lg md:text-xl">Casos de éxito</div>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-extrabold text-pgblue">99%</div>
              <div className="text-pgnavy/70 mt-2 text-lg md:text-xl">Satisfacción de clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPGGlass;
