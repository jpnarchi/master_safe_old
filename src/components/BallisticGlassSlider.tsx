
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideItem {
  imageUrl: string;
  title: string;
  description: string;
}

const BallisticGlassSlider = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const slides: SlideItem[] = [
    {
      imageUrl: "/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png",
      title: "Automóviles Premium",
      description: "Protección balística NIJ III-A para vehículos de lujo"
    },
    {
      imageUrl: "/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png",
      title: "Vehículos Militares",
      description: "Resistencia a impactos de munición 7,62x39mm FMJ"
    },
    {
      imageUrl: "/lovable-uploads/b2b2805b-dab6-48ae-869c-0f8a9b51cda0.png",
      title: "Embarcaciones de Lujo",
      description: "Acabado premium con tecnología europea de vanguardia"
    }
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handlePrev = () => {
    api?.scrollPrev();
  };

  const handleNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto glass-card p-1 rounded-2xl overflow-hidden">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-xl">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pgnavy/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-white/90">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between absolute top-1/2 left-4 right-4 -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Anterior</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      </Carousel>

      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-pgblue w-6" : "bg-white/30"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BallisticGlassSlider;
