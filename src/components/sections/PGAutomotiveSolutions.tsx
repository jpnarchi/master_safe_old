
import { Car, Shield, Settings } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const PGAutomotiveSolutions = () => {
  const isMobile = useIsMobile();
  
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

  const products = [
    {
      id: "glassguard",
      title: "PG Glass Guard",
      description: "Protección balística con visión perfecta",
      color: "bg-pgnavy",
      link: "/glassguard"
    },
    {
      id: "superslim",
      title: "PG Super Slim", 
      description: "15% más liviano sin comprometer seguridad",
      color: "bg-pglight",
      textColor: "text-pgnavy",
      link: "/superslim"
    },
    {
      id: "steelglass",
      title: "PG Steel Glass",
      description: "Protección reforzada con acero integrado",
      color: "bg-pgnavy",
      link: "/steelglass"
    },
    {
      id: "ultra",
      title: "PG Ultra", 
      description: "Máxima protección para amenazas extremas",
      color: "bg-pglight",
      textColor: "text-pgnavy",
      link: "/ultra"
    },
    {
      id: "neu",
      title: "PG Neu", 
      description: "Nueva generación de vidrio blindado premium",
      color: "bg-pgnavy",
      link: "/neu"
    },
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

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-pgnavy mb-8 text-center">Nuestros Productos</h3>
          
          <Carousel 
            opts={{
              align: "start",
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem 
                  key={index} 
                  className={`pl-4 md:basis-1/3 ${isMobile ? 'basis-full' : ''}`}
                >
                  <div 
                    className={`h-64 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg flex flex-col items-center justify-center px-6 py-8 ${product.color} ${product.textColor || 'text-white'}`}
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-full mb-6"></div>
                    <h4 className="text-xl font-bold mb-3">{product.title}</h4>
                    <p className="text-center mb-6 opacity-80 text-sm">{product.description}</p>
                    <Button 
                      variant={product.textColor ? "outline" : "secondary"} 
                      size="sm"
                      className={product.textColor ? "border-pgnavy text-pgnavy hover:bg-pgnavy hover:text-white" : "text-pgnavy"}
                      asChild
                    >
                      <a href={product.link}>Descubrir</a>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PGAutomotiveSolutions;
