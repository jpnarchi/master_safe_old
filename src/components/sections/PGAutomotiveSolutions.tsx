
import { Car, Shield, Settings } from "lucide-react";

const PGAutomotiveSolutions = () => {
  const features = [
    {
      icon: Car,
      title: "Soluciones Automotrices",
      description: "Vidrios blindados de alta calidad para vehículos con tecnología europea"
    },
    {
      icon: Shield,
      title: "Protección Superior",
      description: "Resistencia balística certificada para máxima seguridad"
    },
    {
      icon: Settings,
      title: "Ingeniería Avanzada",
      description: "Diseño y desarrollo con estándares europeos de calidad"
    }
  ];

  return (
    <section id="automotive" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">PG Automotive Solutions</h2>
          <p className="text-xl text-pgnavy/70 max-w-3xl mx-auto">
            Tecnología europea de vanguardia en vidrio blindado automotriz
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 hover:bg-pgnavy/5 scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-pgnavy mb-6" />
              <h3 className="text-xl font-bold text-pgnavy mb-4">{feature.title}</h3>
              <p className="text-pgnavy/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PGAutomotiveSolutions;
