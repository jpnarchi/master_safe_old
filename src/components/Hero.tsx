import React from 'react';

const Hero = () => {
  return (
    <section
      className="w-full min-h-screen bg-[url('/vidrio.jpg')] bg-cover bg-center bg-no-repeat relative"
    >
      {/* Overlay azul translúcido */}
      <div className="absolute inset-0 bg-blue-800/30 z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex justify-center items-center min-h-screen pt-0">
        <img
          src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png"
          alt="PG Products Logo"
          className="w-64 md:w-80 h-auto -mt-12"
        />
      </div>
    </section>
  );
};

export default Hero;