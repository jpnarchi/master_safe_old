import React from 'react';
import PGLogo from './PGLogo';

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videoSrc?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  title, 
  subtitle,
  videoSrc = "/PGREDUCEDVID.mp4"
}) => {
  return (
    <section className="relative w-full h-screen min-h-[500px] max-h-[800px] overflow-hidden mb-0">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-pgnavy/30"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        {/* Add any title/subtitle content if needed */}
        {title && (
          <div className="text-center mb-6 sm:mb-8 md:mb-10 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4">{title}</h2>
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white/90 max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-pgblue/70 mx-auto mt-3 sm:mt-4 md:mt-5"></div>
          </div>
        )}
      </div>
      
      {/* PG Logo at bottom left - responsive sizing */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 z-10 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto p-2 sm:p-3 md:p-4 rounded-lg bg-gradient-to-tr from-pgnavy/40 to-transparent backdrop-blur-sm">
        <PGLogo className="drop-shadow-lg" />
      </div>
    </section>
  );
};

export default VideoSection;
