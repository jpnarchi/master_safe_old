
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
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-pgblue/20 text-pgblue font-bold mr-3">
                        {i + 1}
                      </span>
                      <span>{feature}</span>
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
