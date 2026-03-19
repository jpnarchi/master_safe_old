const teslaRed = "/home/vidrios-home.png";
const teslaGray = "/military/vidrio_disparos.avif";

const AboutPGGlass = () => {
  
  return (
    <section id="about-pg" className="py-12 sm:py-16 md:py-20 bg-white relative">
      <div className="w-[95vw] sm:w-[90vw] max-w-[1700px] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10">
        {/* Grid de dos cards grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Card GlassGuard */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow flex flex-col md:flex-row items-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[380px]">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">GlassGuard</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">Find the Tesla vehicle that's right for you</p>
              <button className="w-full md:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition text-sm sm:text-base md:text-lg">Compare Models</button>
            </div>
            <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
              <img src={teslaRed} alt="Red Tesla" className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs h-auto object-contain" />
            </div>
          </div>
          {/* Card Calidad Premium */}
          <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow flex flex-col md:flex-row items-center min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[380px]">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">Calidad Premium</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                Special purchase program for military, first responder, teacher and student
              </p>
              <button className="w-full md:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded transition text-sm sm:text-base md:text-lg">Learn More</button>
            </div>
            <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
              <img src={teslaGray} alt="Gray Tesla" className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-xs h-auto object-contain" />
            </div>
          </div>
        </div>
        {/* Estadísticas */}
        <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 shadow flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex-1 min-w-[220px] text-center lg:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-pgnavy mb-2">Protegemos Tu Seguridad</h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pgnavy/70 mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0">Confía en la experiencia y calidad de un líder en seguridad automotriz.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-sm mx-auto lg:mx-0">
              <button className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-pgnavy text-white font-semibold rounded hover:bg-pgblue transition text-sm sm:text-base md:text-lg w-full sm:w-auto">Contáctanos</button>
              <button className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white border border-pgnavy text-pgnavy font-semibold rounded hover:bg-pgnavy hover:text-white transition text-sm sm:text-base md:text-lg w-full sm:w-auto">Ver más</button>
            </div>
          </div>
          <div className="flex flex-1 justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mt-6 lg:mt-0">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-pgblue">500+</div>
              <div className="text-pgnavy/70 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Casos de éxito</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-pgblue">99%</div>
              <div className="text-pgnavy/70 mt-1 sm:mt-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Satisfacción de clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPGGlass;
