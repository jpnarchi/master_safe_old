import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', hash: '' },
    { name: 'Nosotros', hash: 'nosotros' },
    { name: 'Galeria', hash: 'galeria' },
    { name: 'Servicios', hash: 'servicios' },
    { name: 'Contacto', hash: 'contacto' }
  ];

  const handleNavigation = (hash: string) => {
    window.location.hash = hash;
    // Subir aunque se elija la página en la que ya se está
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 md:h-20 px-4 md:px-8 flex items-center justify-between transition-all duration-300 bg-brand-green-dark ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="text-white hover:text-white/70 transition-colors p-2"
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.png"
            alt="MasterSafe"
            className="h-8 md:h-10 w-auto"
          />
        </div>

        <div className="w-10 md:w-12" /> {/* Spacer to balance the menu button */}
      </nav>

      {/* Full-screen menu overlay with slide animation */}
      <div className={`fixed inset-y-0 left-0 w-full md:w-96 bg-brand-green-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full flex flex-col p-8">
          <div className="flex justify-between items-center mb-12">
            <img
              src="/logo.png"
              alt="MasterSafe"
              className="h-8 md:h-10 w-auto cursor-pointer"
              onClick={() => handleNavigation('')}
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-white/70 transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  className="text-xl brand-heading hover:!text-white/70 transition-colors block py-2 w-full text-left"
                  onClick={() => handleNavigation(item.hash)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="border-t border-white/20 pt-8">
              <p className="text-sm brand-text mb-4">Contáctanos</p>
              <p className="text-sm brand-text">+52 55 1204 0947</p>
              <p className="text-sm brand-text">info@mastersafe.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay background */}
      <div 
        className={`fixed inset-0 bg-brand-green-dark/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Navigation;
