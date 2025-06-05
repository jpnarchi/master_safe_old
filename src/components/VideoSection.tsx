import React from 'react';
import PGLogo from './PGLogo';

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videoSrc?: string; // Optional for now, will be used for future MP4 video
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  title, 
  subtitle,
  videoSrc = "/lovable-uploads/PGREDUCEDVID.mp4" // Usar video local
}) => {
  return (
    <section className="relative w-full h-screen overflow-hidden mb-0">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Add any title/subtitle content if needed */}
        {title && (
          <div className="text-center mb-10 scroll-reveal">
            <h2 className="heading-lg text-white mb-3">{title}</h2>
            {subtitle && (
              <p className="text-xl font-semibold text-white/90 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-pgblue/70 mx-auto mt-5"></div>
          </div>
        )}
      </div>
      
      {/* PG Logo at bottom left - now much larger with gradient background */}
      <div className="absolute bottom-10 left-10 z-10 w-72 h-auto p-4 rounded-lg bg-gradient-to-tr from-pgnavy/40 to-transparent backdrop-blur-sm">
        <PGLogo className="drop-shadow-lg" />
      </div>
    </section>
  );
};

export default VideoSection;
