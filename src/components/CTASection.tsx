
import React from 'react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <section className="py-20 bg-gradient-to-r from-pgnavy to-pgblue text-white relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0">
        <img 
          src="/about/dab51236-9306-4c50-b326-1e2f347360ca.png"
          alt="Background pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h2 className="heading-lg mb-6 text-white">{title}</h2>
          <p className="text-lg text-white/80 mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={primaryButtonLink} 
              className="bg-white text-pgnavy hover:bg-white/90 px-8 py-3 rounded-md font-medium transition-colors"
            >
              {primaryButtonText}
            </a>
            <a 
              href={secondaryButtonLink} 
              className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
