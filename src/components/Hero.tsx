
import { Shield, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('neu');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-pgnavy">
        <img 
          src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDU1QjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuMTUzIDAgMi4xLS45NDcgMi4xLTIuMXMtLjk0Ny0yLjEtMi4xLTIuMS0yLjEuOTQ3LTIuMSAyLjEuOTQ3IDIuMSAyLjEgMi4xem0wIDQyYzEuMTUzIDAgMi4xLS45NDcgMi4xLTIuMXMtLjk0Ny0yLjEtMi4xLTIuMS0yLjEuOTQ3LTIuMSAyLjEuOTQ3IDIuMSAyLjEgMi4xem0yMi04NGMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXptMCA0MmMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXptMCA0MmMxLjE1MyAwIDIuMS0uOTQ3IDIuMS0yLjFzLS45NDctMi4xLTIuMS0yLjEtMi4xLjk0Ny0yLjEgMi4xLjk0NyAyLjEgMi4xIDIuMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 animate-fade-in">
                <Shield size={16} className="text-white" />
                <span className="text-sm font-medium">Tecnología Europea de Vanguardia</span>
              </div>
              
              {/* Large logo */}
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <img 
                  src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png" 
                  alt="PG Products Logo" 
                  className="h-auto max-w-full w-auto max-h-40 object-contain"
                />
              </div>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
                PG Products, líder en la producción de vidrio blindado premium presenta soluciones innovadoras con ingeniería Alemana y estándares Europeos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <a href="#neu" className="btn-primary bg-white text-pgnavy hover:bg-white/90 hover:text-pgnavy">
                  Descubrir Productos
                </a>
                <a href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-pgnavy">
                  Contactar
                </a>
              </div>
            </div>
            
            <div className="hidden md:block relative animate-fade-in-right">
              <div className="relative z-20">
                <div className="w-full h-96 rounded-2xl bg-pgnavy/5 backdrop-filter backdrop-blur-lg border border-pgnavy/10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pgblue/20 to-transparent"></div>
                  <div className="absolute inset-0 shine-effect"></div>
                  <div className="p-8 flex flex-col h-full justify-center">
                    <h3 className="text-2xl font-bold text-white bg-pgnavy/80 px-4 py-2 rounded-lg inline-block mb-4 shadow-lg border border-pgblue/30">Resistencia Balística Superior</h3>
                    <div className="space-y-4 text-white">
                      <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border-l-4 border-white shadow-md">
                        <span className="ml-2 font-medium">• Certificación NIJ III-A</span>
                      </div>
                      <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border-l-4 border-white shadow-md">
                        <span className="ml-2 font-medium">• Resistencia a 7,62x39mm FMJ</span>
                      </div>
                      <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border-l-4 border-white shadow-md">
                        <span className="ml-2 font-medium">• Tecnología de punta alemana</span>
                      </div>
                      <div className="flex items-center bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg border-l-4 border-white shadow-md">
                        <span className="ml-2 font-medium">• Claridad óptica excepcional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pgblue/20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-pgblue/20 blur-3xl"></div>
            </div>
          </div>
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
