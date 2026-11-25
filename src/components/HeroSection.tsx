import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[95vh] w-full bg-brand-green-dark overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-brand-green-dark">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ minHeight: '100%', minWidth: '100%' }}
        >
          <source src="/video_main.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Degradado verde sobre el video, igual que el hero del sitio de referencia */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-green/85 via-brand-green/25 via-45% to-black/25" />

      <div className="absolute bottom-16 md:bottom-20 left-4 md:left-12 text-white">
        <p className="text-xs md:text-sm tracking-widest mb-4 opacity-0 animate-fade-in">
          BLINDAJE MÁS LIGERO DEL MERCADO
        </p>
        <img
          src="/logo.png"
          alt="MasterSafe"
          className="h-16 md:h-24 w-auto opacity-0 animate-fade-in animation-delay-300"
        />
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 md:h-16 bg-white/30">
          <div
            className="w-full bg-white transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;