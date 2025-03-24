
import React from 'react';
import BallisticGlassSlider from './BallisticGlassSlider';

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  darkBackground?: boolean;
  reversed?: boolean;
  useSlider?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  features,
  darkBackground = false,
  reversed = false,
  useSlider = false
}) => {
  const bgClass = darkBackground ? 'bg-pgnavy text-white' : 'bg-white';
  const titleClass = darkBackground ? 'text-white' : 'text-pgblue';
  const featureItemClass = darkBackground 
    ? 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300' 
    : 'bg-pgnavy/5 backdrop-blur-sm border border-pgnavy/10 shadow-lg hover:shadow-xl hover:bg-pgnavy/10 transition-all duration-300';
  
  const featureTextClass = darkBackground ? 'text-white' : 'text-pgnavy';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass}`}>
      <div className="section-container">
        <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'md:grid-flow-col md:grid-cols-2 md:grid-rows-1 md:grid-flow-dense' : ''}`}>
          <div className={`scroll-reveal ${reversed ? 'md:col-start-2' : ''}`}>
            <h2 className={`heading-lg mb-2 ${titleClass}`}>{title}</h2>
            <p className="text-xl font-semibold mb-6">{subtitle}</p>
            
            {description.map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className={`scroll-reveal ${reversed ? 'md:col-start-1 md:row-start-1' : ''}`}>
            {useSlider ? (
              <BallisticGlassSlider />
            ) : (
              <div className="backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className={`flex items-center p-4 rounded-lg ${featureItemClass} group`}>
                      <div className="flex-shrink-0">
                        <span className={`inline-flex justify-center items-center w-12 h-12 rounded-full ${
                          darkBackground 
                            ? 'bg-white/20 text-white group-hover:bg-white/30' 
                            : 'bg-pgblue/10 text-pgblue group-hover:bg-pgblue/20'
                        } font-bold mr-4 shadow-inner transition-all duration-300`}>
                          {i + 1}
                        </span>
                      </div>
                      <span className={`${featureTextClass} font-medium`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
