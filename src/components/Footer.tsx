import React from 'react';
import { Linkedin, Sun } from 'lucide-react';

const Footer = () => {
  const menuLinks = [
    { name: 'Inicio', hash: '' },
    { name: 'Nosotros', hash: 'nosotros' },
    { name: 'Galeria', hash: 'galeria' },
    { name: 'Servicios', hash: 'servicios' },
    { name: 'Contacto', hash: 'contacto' }
  ];

  return (
    <footer className="bg-brand-light py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl brand-heading">MASTER SAFE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          <div className="text-center md:text-left">
            <ul className="space-y-3 md:space-y-4">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.hash}`}
                    className="text-sm brand-text hover:text-brand-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left col-span-2">
            <h3 className="text-lg brand-heading mb-4">NUESTRA MISIÓN</h3>
            <p className="brand-text mb-6">
              En Master Safe, nos dedicamos a proporcionar soluciones de blindaje automotriz de la más alta calidad, 
              combinando innovación tecnológica con artesanía experta para garantizar la máxima seguridad y 
              tranquilidad de nuestros clientes. Nuestro compromiso es proteger vidas manteniendo la 
              estética y el rendimiento original de cada vehículo.
            </p>
            <a
              href="https://mx.linkedin.com/company/master-safe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-grey hover:text-brand-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm">Síguenos en LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-line pt-8 gap-4 md:gap-0">
          <p className="text-sm brand-text">© Master Safe 2025</p>
          <div className="flex items-center gap-4 md:gap-8">
            <button className="text-sm brand-text hover:text-brand-green transition-colors p-2">
              EN / ES
            </button>
            <button
              className="text-brand-grey hover:text-brand-green transition-colors p-2"
              aria-label="Toggle theme"
            >
              <Sun size={20} md:size={24} />
            </button>
          </div>
        </div>

        {/* Attribution Link */}
        <div className="text-center mt-8 text-sm brand-text">
          <a 
            href="https://astrawebdevelopers.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-green transition-colors"
          >
            Creado por Astra Web Developers
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;