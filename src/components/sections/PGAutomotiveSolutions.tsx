
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
    color: "bg-white",
    textColor: "text-pgnavy",
    link: "/glassguard",
    image: "/lovable-uploads/263ffb06-d243-4ca1-88ab-a68943ddd637.png"
  }, {
    id: "superslim",
    title: "PG Super Slim",
    description: "15% más liviano sin comprometer seguridad",
    color: "bg-pglight",
    textColor: "text-pgnavy",
    link: "/superslim",
    image: "/lovable-uploads/f54c4665-4e79-445e-b553-2cefc763c386.png"
  }, {
    id: "steelglass",
    title: "PG Steel Glass",
    description: "Protección reforzada con acero integrado",
    color: "bg-pgnavy",
    link: "/steelglass",
    image: "/lovable-uploads/c36fe180-4dad-4a78-9a71-d6cd358aab55.png"
  }, {
    id: "ultra",
    title: "PG Ultra",
    description: "Máxima protección para amenazas extremas",
    color: "bg-pglight",
    textColor: "text-pgnavy",
    link: "/ultra"
  }, {
    id: "neu",
    title: "PG Neu",
    description: "Nueva generación de vidrio blindado premium",
    color: "bg-pgnavy",
    link: "/neu"
  }];
  
  return <section id="automotive" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-pgnavy mb-12 text-center">Nuestros Productos</h3>
          
          {/* Products grid with consistent sizing */}
          <div className="flex flex-col items-center gap-6">
            {/* First row - 3 products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {products.slice(0, 3).map((product, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center ${product.color} ${product.textColor || 'text-white'} scale-in h-full`} 
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Image section - 50% height */}
                  <div className="flex items-center justify-center w-full h-1/2 p-4">
                    {product.image ? (
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="max-w-[80%] max-h-[100%] object-contain"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center">
                        <Shield className="w-16 h-16 opacity-50" />
                      </div>
                    )}
                  </div>
                  
                  {/* Content section - 50% height */}
                  <div className="w-full h-1/2 flex flex-col items-center justify-center gap-3 p-6">
                    <h4 className="text-xl font-bold">{product.title}</h4>
                    <p className="text-center opacity-80 text-sm">{product.description}</p>
                    <Button 
                      variant={product.textColor ? "outline" : "secondary"} 
                      size="sm" 
                      className={product.textColor ? "border-pgnavy text-pgnavy hover:bg-pgnavy hover:text-white" : "text-pgnavy"} 
                      asChild
                    >
                      <a href={product.link}>Descubrir</a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Second row - 2 products centered with exact same dimensions as first row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 w-full">
              {products.slice(3).map((product, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center ${product.color} ${product.textColor || 'text-white'} scale-in h-full`} 
                  style={{
                    animationDelay: `${(index + 3) * 0.1}s`
                  }}
                >
                  {/* Image section - 50% height */}
                  <div className="flex items-center justify-center w-full h-1/2 p-4">
                    {product.image ? (
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="max-w-[80%] max-h-[100%] object-contain"
                      />
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center">
                        <Shield className="w-16 h-16 opacity-50" />
                      </div>
                    )}
                  </div>
                  
                  {/* Content section - 50% height */}
                  <div className="w-full h-1/2 flex flex-col items-center justify-center gap-3 p-6">
                    <h4 className="text-xl font-bold">{product.title}</h4>
                    <p className="text-center opacity-80 text-sm">{product.description}</p>
                    <Button 
                      variant={product.textColor ? "outline" : "secondary"} 
                      size="sm" 
                      className={product.textColor ? "border-pgnavy text-pgnavy hover:bg-pgnavy hover:text-white" : "text-pgnavy"} 
                      asChild
                    >
                      <a href={product.link}>Descubrir</a>
                    </Button>
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
