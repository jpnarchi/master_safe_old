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
    image: "/lovable-uploads/neu.png"
  }];
  
  return <section id="automotive" className="py-20 bg-white relative">
      {/* Fondo con imagen */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  <div className="relative max-w-[300px] w-full h-full group">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-contain border-2 border-pgnavy rounded-lg p-4 transition-transform duration-300 hover:scale-110 cursor-pointer bg-white transition-opacity duration-300 group-hover:opacity-0 opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-white border-2 border-pgnavy rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-pgnavy text-center text-base font-medium">
                      {product.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Second row - 2 products centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 w-full">
              {products.slice(3).map((product, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="relative max-w-[300px] w-full h-full group">
                    <img 
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto object-contain border-2 border-pgnavy rounded-lg p-4 transition-transform duration-300 hover:scale-110 cursor-pointer bg-white transition-opacity duration-300 group-hover:opacity-0 opacity-100"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4 bg-white border-2 border-pgnavy rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-pgnavy text-center text-base font-medium">
                      {product.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PGAutomotiveSolutions;
