import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ImageSlideshow from './components/ImageSlideshow';
import ContentSection from './components/ContentSection';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';
import Galeria from './pages/Galeria';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import WhatsAppButton from './components/WhatsAppButton';

const slideshowImages = [
  '/burban.jpeg',
  '/IMG_4525.JPG',
  '/IMG_2383.JPG',
  '/IMG_2801.JPG',
  '/IMG_4525.JPG',
];

// 'instant' evita la animación de `scroll-behavior: smooth` definida en index.css
const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    // Enlaces internos (#pagina): subir también cuando el hash no cambia
    // (p. ej. clic en "Contacto" estando ya en Contacto), caso en el que
    // el navegador no dispara 'hashchange'.
    const handleLinkClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]');
      if (link) scrollToTop();
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Al cambiar de página, mostrarla siempre desde arriba. Se ejecuta antes
  // del pintado para que no se vea la posición anterior.
  useLayoutEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'nosotros':
        return <Nosotros />;
      case 'galeria':
        return <Galeria />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto />;
      default:
        return (
          <>
            <Navigation />
            <HeroSection />
            
            <FeatureGrid />

            <ImageSlideshow
              images={slideshowImages}
              title="SEGURIDAD SIN COMPROMISOS"
              subtitle="Master Safe: Protegiendo lo que más importa."
              variant="split"
              autoplaySpeed={5000}
            />

            <ContentSection
              image="/IMG_2804.JPG"
              title="TECHO Y CRISTALES"
              subtitle="Techo panorámico con aramida y blindaje ligero compuesto de la mejor fibra balística."
              imageLeft={true}
            />

            <ContentSection
              image="/quinta.png"
              title="QUINTA PUERTA"
              subtitle="Mantenemos la ingeniería original de tu vehículo, conservando la funcionalidad de los sistemas de apertura y cierre automático."
              imageLeft={false}
            />

            {/* Call to Action Section */}
            <section className="relative h-[60vh] overflow-hidden">
              <img
                src="/burban.jpeg"
                alt="Master Safe Armoring"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Enhanced gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-brand-green-dark/75 to-brand-green-dark/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 [text-shadow:_0_4px_12px_rgb(0_0_0_/_90%)]">
                  PROTEGE LO QUE MÁS IMPORTA
                </h2>
                <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl [text-shadow:_0_4px_8px_rgb(0_0_0_/_90%)]">
                  Descubre cómo podemos ayudarte a mantener seguros a ti y a tus seres queridos
                </p>
                <a
                  href="#contacto"
                  className="px-12 py-4 bg-white text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 text-lg tracking-wider uppercase font-light"
                >
                  Contáctanos Ahora
                </a>
              </div>
            </section>

            <Footer />
          </>
        );
    }
  };

  return (
    <div className="bg-brand-green min-h-screen">
      {renderPage()}
      <WhatsAppButton />
    </div>
  );
}

export default App;