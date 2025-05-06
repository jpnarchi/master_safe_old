import { useEffect, useState } from "react";

const images = [
  "/lovable-uploads/vidrio_disparos.avif",
  "/lovable-uploads/empresa-vidrios-pedido-cristales-posee.jpg"
];

const PGBallistics = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ballistics" className="py-0 md:py-0 bg-pgnavy text-white relative min-h-[500px] flex items-stretch border-t-8 border-b-8 border-pgnavy">
      {/* Imagen de fondo en la mitad izquierda */}
      <div className="hidden md:block absolute inset-0 w-1/2 left-0 h-full">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Ballistic Testing"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionProperty: 'opacity' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/70 to-transparent"></div>
      </div>
      {/* Imagen para mobile (arriba, ancho completo) */}
      <div className="block md:hidden w-full h-64 relative">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Ballistic Testing"
            className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ transitionProperty: 'opacity' }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-pgnavy/70 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto flex-1 flex items-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full min-h-[500px]">
          {/* Columna vacía para desktop (imagen de fondo) */}
          <div className="hidden md:block"></div>
          {/* Contenido */}
          <div className="space-y-6 px-4 py-20 md:py-0">
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
