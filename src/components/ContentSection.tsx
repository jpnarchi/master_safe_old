import React from 'react';

interface ContentSectionProps {
  image: string;
  title: string;
  subtitle: string;
  imageLeft?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  image,
  title,
  subtitle,
  imageLeft = true
}) => {
  return (
    <section className={`min-h-screen py-12 md:py-24 ${imageLeft ? 'bg-brand-green-dark' : 'bg-brand-green'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
          imageLeft ? '' : 'md:flex-row-reverse'
        }`}>
          <div className={`${imageLeft ? '' : 'md:order-2'}`}>
            <img
              src={image}
              alt="Singer craftsmanship"
              className="w-full h-[300px] md:h-[600px] object-cover"
            />
          </div>
          <div className={`${imageLeft ? '' : 'md:order-1'} px-4 md:px-8 text-center md:text-left`}>
            <h2 className="text-2xl md:text-3xl brand-heading mb-4">{title}</h2>
            <p className="text-base md:text-lg brand-subheading mb-8">{subtitle}</p>
            <a href="#contacto" className="brand-button inline-block">
              CONTÁCTANOS →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;