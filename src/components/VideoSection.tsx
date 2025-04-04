
import React from 'react';

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videoSrc?: string; // Optional for now, will be used for future MP4 video
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  title, 
  subtitle,
  videoSrc = "/VIDEO-2025-04-04-08-27-50.mp4" // Default to this MP4 file
}) => {
  return (
    <section className="py-20 bg-pgnavy/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 h-full w-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#08244c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 scroll-reveal">
          <h2 className="heading-lg text-pgnavy mb-3">{title}</h2>
          {subtitle && (
            <p className="text-xl font-semibold text-pgnavy/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-pgblue/70 mx-auto mt-5"></div>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-2xl border border-pgnavy/10 bg-white">
          <div className="aspect-w-16 aspect-h-9 relative">
            {/* Always display the MP4 video */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
