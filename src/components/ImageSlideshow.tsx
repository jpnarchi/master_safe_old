import React, { useEffect, useRef } from 'react';

interface SlideshowProps {
  images: string[];
  title: string;
  subtitle: string;
  variant?: 'split' | 'full';
  autoplaySpeed?: number;
}

const ImageSlideshow: React.FC<SlideshowProps> = ({
  images,
  title,
  subtitle,
  variant = 'split'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create three sets of images for seamless infinite scroll
  const triplicatedImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleAnimation = () => {
      if (container.scrollLeft >= container.scrollWidth / 3) {
        container.scrollLeft = 0;
      }
    };

    container.addEventListener('scroll', handleAnimation);
    return () => container.removeEventListener('scroll', handleAnimation);
  }, []);

  return (
    <section className="relative -mt-16 bg-brand-green py-12 md:py-24 overflow-hidden w-full">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl brand-heading mb-4 md:mb-6 opacity-0 animate-fade-in">
            {title}
          </h2>
          <p className="text-lg md:text-xl brand-subheading max-w-3xl mx-auto opacity-0 animate-fade-in animation-delay-300">
            {subtitle}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative overflow-hidden w-full"
        >
          <div className="flex animate-scroll gap-8 w-max">
            {triplicatedImages.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative flex-none w-[300px] md:w-[400px]"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image}
                    alt="Master Safe vehicle"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlideshow;