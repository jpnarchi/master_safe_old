
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
}

const BallisticGlassSlider = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const slides: SlideItem[] = [
    {
      imageUrl: "/automotive/c55693d5-aada-4a4c-8c5b-1d29642483b9.png",
      title: "Aplicación Militar"
    },
    {
      imageUrl: "/automotive/d055ab5c-b090-4146-a85b-e23c97ee1645.png",
      title: "Vehiculos"
    },
    {
      imageUrl: "/automotive/82e0c0e3-aaad-4d7f-aa32-398f7c44bafe.png",
      title: "Embarcaciones de Lujo"
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
    <div className="relative w-full max-w-5xl mx-auto p-1 rounded-2xl overflow-hidden backdrop-blur-sm">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pgnavy/90 via-pgnavy/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{slide.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-between absolute top-1/2 left-4 right-4 -translate-y-1/2 z-10">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white transition-all duration-300 shadow-lg"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Anterior</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white transition-all duration-300 shadow-lg"
            onClick={handleNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
      </Carousel>

      <div className="flex justify-center mt-6 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-pgblue w-8 shadow-md" : "bg-white/40 hover:bg-white/60"
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
