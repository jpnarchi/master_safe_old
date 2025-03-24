
import { ShieldCheck, Check, BadgeCheck } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface ProductProps {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  image?: string;
  darkBackground?: boolean;
  reversed?: boolean;
}

const ProductSection = ({
  id,
  title,
  subtitle,
  description,
  features,
  image,
  darkBackground = false,
  reversed = false
}: ProductProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.scroll-reveal, .slide-up, .slide-left, .slide-right, .scale-in');
            animatedElements.forEach((el) => {
              el.classList.add('active');
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

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-24 ${darkBackground ? 'bg-pgnavy text-white' : 'bg-white text-pgnavy'} relative overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className={`w-full h-full object-cover ${darkBackground ? 'opacity-30' : 'opacity-10'}`}
        />
        <div className={`absolute inset-0 ${darkBackground ? 'bg-pgnavy/90' : 'bg-white/95'}`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:grid-flow-col-reverse md:grid-cols-2' : ''}`}>
          {/* Image/Visual Section */}
          <div className={`${reversed ? 'md:order-last' : ''}`}>
            {image ? (
              <div className="slide-up">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto object-cover" 
                  />
                  <div className={`absolute inset-0 ${darkBackground ? 'bg-gradient-to-r from-pgnavy/30 to-transparent' : 'bg-gradient-to-r from-white/30 to-transparent'}`}></div>
                </div>
              </div>
            ) : (
              <div className="slide-up">
                <div className={`rounded-xl ${darkBackground ? 'bg-white/10' : 'bg-pgnavy/5'} p-8 relative overflow-hidden`}>
                  <div className={`absolute inset-0 shine-effect ${darkBackground ? 'opacity-20' : 'opacity-70'}`}></div>
                  <div className="relative z-10">
                    <ShieldCheck size={48} className={`mb-4 ${darkBackground ? 'text-white' : 'text-pgnavy'}`} />
                    <h3 className="text-xl font-bold mb-4">{title}</h3>
                    <div className="space-y-2">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Check size={18} className={`mt-0.5 flex-shrink-0 ${darkBackground ? 'text-pglight' : 'text-pgblue'}`} />
                          <p className={`${darkBackground ? 'text-white/80' : 'text-pgnavy/80'}`}>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className={`${reversed ? 'md:order-first' : ''}`}>
            <div className="slide-up">
              <div className="inline-flex items-center space-x-2 bg-pgblue/10 px-3 py-1 rounded-full mb-4">
                <BadgeCheck size={16} className={darkBackground ? 'text-pglight' : 'text-pgblue'} />
                <span className="text-sm font-medium">{subtitle}</span>
              </div>
              
              <h2 className="heading-lg mb-6">{title}</h2>
              
              <div className="space-y-4 mb-8">
                {description.map((paragraph, idx) => (
                  <p key={idx} className={`${darkBackground ? 'text-white/80' : 'text-pgnavy/80'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2 slide-up stagger-delay-1" style={{ transitionDelay: `${0.1 * idx}s` }}>
                    <Check size={18} className={`mt-0.5 flex-shrink-0 ${darkBackground ? 'text-pglight' : 'text-pgblue'}`} />
                    <span className={`${darkBackground ? 'text-white/90' : 'text-pgnavy/90'}`}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="slide-up stagger-delay-4">
                <a 
                  href="#contact" 
                  className={`inline-flex items-center ${
                    darkBackground 
                      ? 'bg-white text-pgnavy hover:bg-pglight' 
                      : 'bg-pgnavy text-white hover:bg-pgblue'
                  } px-6 py-3 rounded-md font-medium transition-all duration-300`}
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
