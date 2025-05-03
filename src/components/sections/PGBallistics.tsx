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
    <section id="ballistics" className="py-20 bg-pgnavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt="Ballistic Testing"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  style={{ transitionProperty: 'opacity' }}
                />
              ))}
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
