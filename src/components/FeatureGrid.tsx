
import { useRef, useEffect } from 'react';
import { Shield, Layers, Eye, Check } from 'lucide-react';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.scale-in');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features: Feature[] = [
    {
      icon: <Shield className="h-8 w-8 text-pgblue" />,
      title: "Resistencia Balística",
      description: "Certificado NIJ III-A con resistencia adicional a 7,62x39mm FMJ y otras municiones de alto calibre."
    },
    {
      icon: <Eye className="h-8 w-8 text-pgblue" />,
      title: "Óptica Destacable",
      description: "Claridad visual superior con serigrafía tipo europeo para mayor visibilidad y discreción."
    },
    {
      icon: <Layers className="h-8 w-8 text-pgblue" />,
      title: "Tecnología Avanzada",
      description: "Diseño multicapa con polímeros elastómeros y policarbonato de alta duración con capa anti-rayado."
    },
    {
      icon: <Check className="h-8 w-8 text-pgblue" />,
      title: "Calidad Certificada",
      description: "Experiencia y gestión de calidad certificada ISO 9001, cumpliendo con normas internacionales."
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-pgnavy mb-4">Características Superiores</h2>
          <p className="text-lg text-pgnavy/70 max-w-2xl mx-auto">
            Nuestros productos combinan la más alta tecnología con materiales premium para ofrecer protección sin comprometer el diseño.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="scale-in bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="bg-pglight rounded-full w-14 h-14 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pgnavy">{feature.title}</h3>
              <p className="text-pgnavy/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
