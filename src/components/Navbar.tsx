import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const whiteLogo = "/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png";
  const blueLogo = "/LogoPGPRODUCTSPGBLUE.png";

  const styles = `
    @keyframes fadeInDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .animate-fade-in-down {
      animation: fadeInDown 0.3s ease-out forwards;
    }

    .navbar-transition {
      transition: all 0.3s ease-in-out;
    }
  `;

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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

  useEffect(() => {
    if (activeMenu) {
      const handleClickOutside = (event) => {
        const nav = document.getElementById('main-nav');
        if (nav && !nav.contains(event.target)) {
          setActiveMenu(null);
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeMenu]);

  const productItems = [
    { name: "GlassGuard", path: "/glassguard", description: "Calidad y Durabilidad", img: "/PGGLASSGUARDLOG.jpeg" },
    { name: "SteelGlass", path: "/steelglass", description: "Resistente hasta el Borde", img: "/PGSTEELGLASSLOG.jpeg" },
    { name: "SuperSlim", path: "/superslim", description: "Liviano y Resistente", img: "/PGSUPERSLIMLOG.jpeg" },
    { name: "ULTRA", path: "/ultra", description: "Desempeño Balístico Superior", img: "/PGULTRALOG.jpeg" },
    { name: "NEU", path: "/neu", description: "Desempeño gran", img: "/PGNEULOG.jpeg" }
  ];

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full navbar-transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* White background container that appears on hover */}
      <div className={`absolute inset-0 bg-white shadow-sm navbar-transition ${
        isHovered || isScrolled || activeMenu ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20" id="main-nav">
          <div className="flex-shrink-0 pl-0">
            <Link to="/">
              <img 
                src={isHovered || isScrolled || activeMenu ? blueLogo : whiteLogo}
                alt="PG Products Logo" 
                className={`transition-all duration-300 ease-in-out ${
                  isHovered || isScrolled || activeMenu ? 'h-16 md:h-20' : 'h-12 md:h-16'
                }`}
              />
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 justify-center space-x-8 items-center">
            <Link 
              to="/"
              className={`font-medium transition-colors duration-300 ease-out ${
                isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80'
              }`}
            >
              Inicio
            </Link>
            
            <Link 
              to="/historia"
              className={`font-medium transition-colors duration-300 ease-out ${
                isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80'
              }`}
            >
              About Us
            </Link>
            
            <div className="relative">
              <button
                onClick={() => toggleMenu('products')}
                onMouseEnter={() => setActiveMenu('products')}
                className={`font-medium transition-colors duration-300 ease-in-out flex items-center gap-1 ${
                  isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80'
                }`}
              >
                PG Automotive Solutions
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
            
            <Link 
              to="/pg-ballistics"
              className={`font-medium transition-colors duration-300 ease-out ${
                isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80'
              }`}
            >
              PG Ballistics
            </Link>

            <Link 
              to="/segments"
              className={`font-medium transition-colors duration-300 ease-out ${
                isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80'
              }`}
            >
              Segments
            </Link>
          </nav>

          <div className="hidden md:block pr-0">
            <Link 
              to="/contacto" 
              className={`inline-flex items-center rounded-md px-4 py-2 font-medium transition-all duration-300 ease-in-out ${
                isHovered || isScrolled || activeMenu
                  ? 'bg-pgnavy text-white hover:bg-pgnavy/90' 
                  : 'bg-white text-pgnavy hover:bg-white/90'
              }`}
            >
              Contacto
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md transition-colors duration-300 ease-in-out ${
                isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:bg-pgnavy/10' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {activeMenu === 'products' && (
        <div 
          className="absolute left-0 right-0 bg-white shadow-xl transform transition-all duration-400 ease-in-out z-40 overflow-hidden animate-fade-in-down"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="container mx-auto py-12 px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {productItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-32 object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  <span className="inline-block mt-2 text-pgnavy underline-offset-4 group-hover:underline">
                    Ver más
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-in-right">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight animate-slide-in-bottom"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            
            <Link
              to="/historia"
              className="block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight animate-slide-in-bottom"
              style={{ animationDelay: '0.1s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            
            <div className="block px-3 py-2 font-medium text-pgnavy">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                  const submenu = document.getElementById('products-submenu');
                  if (submenu) {
                    submenu.classList.toggle('hidden');
                  }
                }}
              >
                <span>PG Automotive Solutions</span>
                <ChevronDown size={16} />
              </div>
              <div id="products-submenu" className="hidden pl-4 mt-2">
                <div className="grid grid-cols-2 gap-2 justify-items-center">
                  {productItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block p-1"
                      style={{ animationDelay: `${index * 0.05}s` }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex flex-col items-center">
                        <img src={item.img} alt={item.name + ' logo'} className="w-28 h-28 object-contain" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              to="/pg-ballistics"
              className="block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight animate-slide-in-bottom"
              style={{ animationDelay: '0.15s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PG Ballistics
            </Link>
            
            <Link
              to="/segments"
              className="block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight animate-slide-in-bottom"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Segments
            </Link>
            
            <Link
              to="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium bg-pgnavy text-white hover:bg-pgblue animate-slide-in-bottom"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
