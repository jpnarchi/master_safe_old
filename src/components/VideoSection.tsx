
import React from 'react';

interface VideoSectionProps {
  title: string;
  subtitle?: string;
  videoSrc?: string; // Optional for now, will be used for future MP4 video
}

const VideoSection: React.FC<VideoSectionProps> = ({ 
  title, 
  subtitle,
  videoSrc
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
            {videoSrc ? (
              // When videoSrc is provided, display the actual MP4 video
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
            ) : (
              // Placeholder for when the video is not yet available
              <div className="absolute inset-0 w-full h-full bg-pgnavy/5 flex flex-col items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 text-pgnavy/30 mb-4" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
                  />
                </svg>
                <p className="text-pgnavy/60 font-medium">Video will be available soon</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
