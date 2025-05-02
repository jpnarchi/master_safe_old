import { Shield, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('neu');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const banners = [
    {
      title: "Tecnología Europea de Vanguardia",
      subtitle: "PG Products, líder en la producción de vidrio blindado premium presenta soluciones innovadoras",
      background: "/lovable-uploads/c55d1fe8-b46c-4024-ae78-3836cca27264.png",
      cta: "Descubrir Productos"
    },
    {
      title: "Resistencia Balística Superior",
      subtitle: "Certificación NIJ III-A y resistencia a 7,62x39mm FMJ con ingeniería Alemana",
      background: "/lovable-uploads/Protege-a-tu-familia.webp",
      cta: "Ver Especificaciones"
    },
    {
      title: "Nuestra Gama de Productos",
      subtitle: "Descubra nuestra línea completa de vidrio blindado premium",
      background: "/lovable-uploads/af3501d2-8f81-42fb-b113-6a18bf7571f5.png",
      cta: "Explorar Productos"
    }
  ];

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background elements - dynamically changes based on current banner */}
      <div className="absolute inset-0 bg-pgnavy transition-opacity duration-500">
        {banners.map((banner, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img 
              src={banner.background}
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
            <img 
              src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
              alt="Background pattern overlay"
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-pgnavy/40"></div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDU1QjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuMTUzIDAgMi4xLS45NDcgMi4xLTIuMXMtLjk0Ny0yLjEtMi4xLTIuMS0yLjEuOTQ3LTIuMSAyLjEuOTQ3IDIuMSAyLjEgMi4xem0wIDQyYzEuMTUzIDAgMi4xLS45NDcgMi4xLTIuMXMtLjk0Ny0yLjEtMi4xLTIuMS0yLjEuOTQ3LTIuMSAyLjEuOTQ3IDIuMSAyLjEgMi4xem0yMi04NGMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXptMCA0MmMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXptMCA0MmMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              duration: 40,
            }}
            className="w-full"
            onSlideChange={handleSlideChange}
          >
            <CarouselContent>
              {banners.map((banner, index) => (
                <CarouselItem key={index} className="md:basis-full" onSelect={() => setCurrentIndex(index)}>
                  <div className="flex justify-start items-center h-full">
                    <div className="text-white max-w-2xl text-left ml-8">
                      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-fade-in">
                        <Shield size={16} className="text-white" />
                        <span className="text-sm font-medium">{banner.title}</span>
                      </div>
                      
                      <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <img 
                          src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png" 
                          alt="PG Products Logo" 
                          className="h-auto max-w-full w-auto max-h-40 object-contain"
                        />
                      </div>
                      
                      <p className="text-2xl md:text-3xl text-white mb-16 animate-fade-in" style={{ animationDelay: '0.2s', fontWeight: 'bold'}}>
                        {banner.subtitle}
                      </p>
                      
                      <div className="flex justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <a href="#neu" className="btn-primary bg-white text-pgnavy hover:bg-white/90 hover:text-pgnavy">
                          {banner.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-between absolute top-1/2 left-4 right-4 -translate-y-1/2 z-10">
              <CarouselPrevious 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20" 
                onClick={() => setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1)}
              />
              <CarouselNext 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20" 
                onClick={() => setCurrentIndex((currentIndex + 1) % banners.length)}
              />
            </div>
          </Carousel>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className="text-white bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;