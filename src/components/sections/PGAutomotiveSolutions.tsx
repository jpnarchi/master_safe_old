import { Car, Shield, Settings, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const PGAutomotiveSolutions = () => {
  const features = [{
    icon: Car,
    title: "Soluciones Automotrices",
    description: "Vidrios blindados para vehículos de alta gama"
  }, {
    icon: Shield,
    title: "Protección Superior",
    description: "Balística certificada para máxima seguridad"
  }, {
    icon: Settings,
    title: "Ingeniería Avanzada",
    description: "Diseño europeo de alta precisión"
  }];
  
  const products = [{
    id: "glassguard",
    title: "PG Glass Guard",
    description: "Protección balística con visión perfecta",
    image: "/lovable-uploads/44604513-e2f1-4816-b14b-13ac8e66c935.png"
  }, {
    id: "superslim",
    title: "PG Super Slim",
    description: "15% más liviano sin comprometer seguridad",
    image: "/lovable-uploads/f54c4665-4e79-445e-b553-2cefc763c386.png"
  }, {
    id: "steelglass",
    title: "PG Steel Glass",
    description: "Protección reforzada con acero integrado",
    image: "/lovable-uploads/c6b082b9-872f-4a46-a317-6f3b708396c8.png"
  }, {
    id: "ultra",
    title: "PG Ultra",
    description: "Máxima protección para amenazas extremas",
    image: "/lovable-uploads/8cd08f36-dc67-46f9-99b5-b79a9a5caf2a.png"
  }, {
    id: "neu",
    title: "PG Neu",
    description: "Nueva generación de vidrio blindado premium",
    image: "/lovable-uploads/8d97ffb7-449f-43e8-8378-481d3f3080e3.png"
  }];
  
  return <section id="automotive" className="relative py-20">
      {/* Background elements */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className="w-full h-full object-cover rotate-180"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">PG Automotive Solutions</h2>
          <p className="text-xl text-pgblue/70 max-w-3xl mx-auto">
            Innovación transparente para proteger lo que más importa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => <div key={index} className="glass-card p-8 hover:bg-pgnavy/5 text-center scroll-reveal" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex justify-center mb-6">
                <feature.icon className="h-16 w-16 text-pgnavy" />
              </div>
              <h3 className="text-xl font-bold text-pgnavy mb-4">{feature.title}</h3>
              <p className="text-pgnavy/70">{feature.description}</p>
            </div>)}
        </div>

        <div className="text-center mb-10">
          <Button variant="default" className="bg-pgnavy hover:bg-pgblue">
            Explorar soluciones
          </Button>
        </div>

        {/* Transition visual */}
        <div className="relative py-16">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
            <Separator className="bg-pgnavy/10 h-[2px]" />
          </div>
          <div className="bg-white relative z-10 w-12 h-12 mx-auto rounded-full border border-pgnavy/10 flex items-center justify-center animate-bounce">
            <ChevronDown className="h-6 w-6 text-pgnavy/70" />
          </div>
        </div>

        <div className="text-center mb-16">
        <h2 className="heading-lg text-pgnavy mb-4 text-center">Nuestros Productos</h2>
        <p className="text-xl text-pgblue/70 max-w-3xl mx-auto mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          
          {/* Products grid with images only */}
          <div className="flex flex-col items-center gap-12">
            {/* First row - 3 products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {products.slice(0, 3).map((product, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="max-w-[300px] h-auto object-contain border-2 border-pgnavy rounded-lg p-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - 2 products centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 w-full">
              {products.slice(3).map((product, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="max-w-[300px] h-auto object-contain border-2 border-pgnavy rounded-lg p-4 transition-transform duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PGAutomotiveSolutions;
