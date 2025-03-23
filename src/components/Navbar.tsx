
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img 
              src={isScrolled ? "/lovable-uploads/b2b2805b-dab6-48ae-869c-0f8a9b51cda0.png" : "/lovable-uploads/5371a554-12b5-4e78-88b1-03348546c0e5.png"} 
              alt="PG Products Logo" 
              className="h-10 md:h-12 transition-all duration-300" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["NEU", "GlassGuard", "SteelGlass", "SuperSlim", "ULTRA"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-pgnavy hover:text-pgblue' : 'text-white hover:text-white/80'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              className={`inline-flex items-center rounded-md px-4 py-2 font-medium ${
                isScrolled ? 'bg-pgnavy text-white hover:bg-pgblue' : 'bg-white text-pgnavy hover:bg-white/90'
              } transition-colors duration-300`}
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${
                isScrolled ? 'text-pgnavy hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in-right">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["NEU", "GlassGuard", "SteelGlass", "SuperSlim", "ULTRA"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight ${index === 0 ? 'animate-slide-in-bottom' : ''}`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-pgnavy text-white hover:bg-pgblue animate-slide-in-bottom"
              style={{ animationDelay: '0.25s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
