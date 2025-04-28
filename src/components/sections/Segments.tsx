
const Segments = () => {
  const segments = [
    {
      title: "NEU Premium",
      description: "Vidrio blindado de alta especificación con resistencia balística superior",
      image: "/lovable-uploads/b2b2805b-dab6-48ae-869c-0f8a9b51cda0.png"
    },
    {
      title: "SteelGlass",
      description: "Protección hasta el borde con acero integrado en el bloque balístico",
      image: "/lovable-uploads/d055ab5c-b090-4146-a85b-e23c97ee1645.png"
    },
    {
      title: "SuperSlim",
      description: "15% más liviano manteniendo la resistencia balística certificada",
      image: "/lovable-uploads/c55693d5-aada-4a4c-8c5b-1d29642483b9.png"
    }
  ];

  return (
    <section id="segments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">Nuestros Segmentos</h2>
          <p className="text-xl text-pgnavy/70 max-w-3xl mx-auto">
            Soluciones especializadas para diferentes necesidades de protección
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div 
              key={index}
              className="glass-card overflow-hidden scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48">
                <img 
                  src={segment.image}
                  alt={segment.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pgnavy/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pgnavy mb-2">{segment.title}</h3>
                <p className="text-pgnavy/70">{segment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;
