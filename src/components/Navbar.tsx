import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const langFlags: Record<string, string> = { es: '/flags/ES.svg', en: '/flags/US.svg', pt: '/flags/BR.webp' };

type Lang = 'es' | 'en' | 'pt';

interface ProductItem {
  name: string;
  path: string;
  description: string;
  img: string;
}

interface SegmentItem {
  name: string;
  path: string;
  description: string;
  img: string;
}

const getProductItems = (lang: Lang): ProductItem[] => [
  {
    name: "GlassGuard",
    path: "/glassguard",
    description: { es: "Calidad y Durabilidad", en: "Quality and Durability", pt: "Qualidade e Durabilidade" }[lang],
    img: "/home/btn_pg_glassguard.webp"
  },
  {
    name: "SteelGlass",
    path: "/steelglass",
    description: { es: "Resistente hasta el Borde", en: "Resistant to the Edge", pt: "Resistente até a Borda" }[lang],
    img: "/home/btn_pg_steelglass.webp"
  },
  {
    name: "SuperSlim",
    path: "/superslim",
    description: { es: "Liviano y Resistente", en: "Lightweight and Resistant", pt: "Leve e Resistente" }[lang],
    img: "/home/btn_pg_superslim.webp"
  },
  {
    name: "Ultra",
    path: "/ultra",
    description: { es: "Desempeño Balístico Superior", en: "Superior Ballistic Performance", pt: "Desempenho Balístico Superior" }[lang],
    img: "/home/btn_pg_ultra.webp"
  },
  {
    name: "Neu",
    path: "/neu",
    description: { es: "Próxima Generación", en: "Next Generation", pt: "Próxima Geração" }[lang],
    img: "/home/btn_pg_neu.webp"
  }
];

const getSegmentItems = (lang: Lang): SegmentItem[] => [
  {
    name: "PG Transport Solutions",
    path: "/pg-automotive",
    description: { es: "Soluciones Automotrices", en: "Automotive Solutions", pt: "Soluções Automotivas" }[lang],
    img: "/Transport-Solution-Logo.webp"
  },
  {
    name: "PG Military Applications",
    path: "/pg-military",
    description: { es: "Aplicaciones Militares", en: "Military Applications", pt: "Aplicações Militares" }[lang],
    img: "/Military-Solutions-Logo.webp"
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setShowSelector } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSegmentsOpen, setMobileSegmentsOpen] = useState(false);

  const lang = language as Lang;
  const T = (obj: { es: string; en: string; pt: string }) => obj[lang];

  const productItems = getProductItems(lang);
  const segmentItems = getSegmentItems(lang);

  const whiteLogo = "/about/8edefffc-7a49-492b-acc8-65267634f930.webp";
  const blueLogo = "/shared/logos/LogoPGPRODUCTSPGBLUE.webp";

  // Páginas que necesitan navbar siempre visible (fondo blanco)
  // Product pages removed - they now use transparent navbar like home
  const pagesWithAlwaysVisibleNav = [
    '/pg-ballistics', '/contacto' // Otras páginas
  ];

  const shouldAlwaysShowNav = pagesWithAlwaysVisibleNav.includes(location.pathname);
  const isHomePage = location.pathname === '/';

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

    @keyframes slideInFromTop {
      from {
        opacity: 0;
        transform: translateY(-20px);
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

    .mobile-menu-enter {
      animation: slideInFromTop 0.3s ease-out forwards;
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = (event) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.getElementById('mobile-menu-button');
        if (mobileMenu && menuButton &&
            !mobileMenu.contains(event.target) &&
            !menuButton.contains(event.target)) {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setMobileSegmentsOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999] w-full navbar-transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background container - conditional visibility */}
      <div className={`absolute inset-0 navbar-transition ${
        shouldAlwaysShowNav
          ? 'bg-white shadow-lg border-b border-gray-200 opacity-100'
          : `bg-white shadow-sm ${isHovered || isScrolled || activeMenu ? 'opacity-100' : 'opacity-0'}`
      }`} />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-between h-20" id="main-nav">
          <div className="flex-shrink-0 pl-0">
            <Link to="/">
              <img
                src={shouldAlwaysShowNav ? blueLogo : (isHovered || isScrolled || activeMenu ? blueLogo : whiteLogo)}
                alt="PG Products Logo"
                className={`transition-all duration-300 ease-in-out ${
                  shouldAlwaysShowNav ? 'h-16 xl:h-20' : (isHovered || isScrolled || activeMenu ? 'h-16 xl:h-20' : 'h-12 xl:h-16')
                }`}
              />
            </Link>
          </div>

          <nav className="hidden xl:flex flex-1 justify-center items-center gap-4 2xl:gap-8">
            <Link
              to="/"
              className={`text-sm xl:text-base font-medium transition-colors duration-300 ease-out whitespace-nowrap ${
                shouldAlwaysShowNav
                  ? 'text-pgnavy hover:text-pgnavy/80'
                  : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80')
              }`}
            >
              {T({ es: "Inicio", en: "Home", pt: "Início" })}
            </Link>

            <Link
              to="/historia"
              className={`text-sm xl:text-base font-medium transition-colors duration-300 ease-out whitespace-nowrap ${
                shouldAlwaysShowNav
                  ? 'text-pgnavy hover:text-pgnavy/80'
                  : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80')
              }`}
            >
              {T({ es: "Quiénes Somos", en: "About Us", pt: "Quem Somos" })}
            </Link>

            <div className="relative">
              <button
                onClick={() => toggleMenu('products')}
                onMouseEnter={() => setActiveMenu('products')}
                className={`text-sm xl:text-base font-medium transition-colors duration-300 ease-in-out flex items-center gap-1 whitespace-nowrap ${
                  shouldAlwaysShowNav
                    ? 'text-pgnavy hover:text-pgnavy/80'
                    : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80')
                }`}
              >
                {T({ es: "PG Transport Solutions", en: "PG Transport Solutions", pt: "PG Transport Solutions" })}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${activeMenu === 'products' ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => toggleMenu('segments')}
                onMouseEnter={() => setActiveMenu('segments')}
                className={`text-sm xl:text-base font-medium transition-colors duration-300 ease-in-out flex items-center gap-1 whitespace-nowrap ${
                  shouldAlwaysShowNav
                    ? 'text-pgnavy hover:text-pgnavy/80'
                    : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80')
                }`}
              >
                {T({ es: "Segmentos", en: "Segments", pt: "Segmentos" })}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${activeMenu === 'segments' ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            <Link
              to="/pg-ballistics"
              className={`text-sm xl:text-base font-medium transition-colors duration-300 ease-out whitespace-nowrap ${
                shouldAlwaysShowNav
                  ? 'text-pgnavy hover:text-pgnavy/80'
                  : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80')
              }`}
            >
              {T({ es: "PG Balística", en: "PG Ballistics", pt: "PG Balística" })}
            </Link>

            <Link
              to="/pg-dna"
              className={`text-sm xl:text-base font-medium transition-colors duration-300 ease-out whitespace-nowrap ${
                shouldAlwaysShowNav
                  ? 'text-pgnavy hover:text-pgnavy/80'
                  : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:text-pgnavy/80' : 'text-white hover:text-white/80')
              }`}
            >
              PG DNA
            </Link>
          </nav>

          <div className="hidden xl:flex items-center gap-3 pr-0 flex-shrink-0">
            {/* Language toggle */}
            <button
              onClick={() => setShowSelector(true)}
              title="Change language"
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out border-2 whitespace-nowrap ${
                shouldAlwaysShowNav
                  ? 'bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white'
                  : (isHovered || isScrolled || activeMenu
                    ? 'bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white'
                    : 'bg-transparent text-white border-white hover:bg-white hover:text-pgnavy')
              }`}
            >
              <div className="h-5 w-5 overflow-hidden rounded-full flex-shrink-0">
                <img src={langFlags[language]} alt={language} className="h-full w-full object-cover" />
              </div>
              <span>{language.toUpperCase()}</span>
            </button>
            <Link
              to="/contacto"
              className={`inline-flex items-center rounded-md px-3 py-2 xl:px-4 text-sm xl:text-base font-medium transition-all duration-300 ease-in-out border-2 whitespace-nowrap ${
                shouldAlwaysShowNav
                  ? 'bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white'
                  : (isHovered || isScrolled || activeMenu
                    ? 'bg-transparent text-pgnavy border-pgnavy hover:bg-pgnavy hover:text-white'
                    : 'bg-transparent text-white border-white hover:bg-white hover:text-pgnavy')
              }`}
            >
              {T({ es: "Contacto", en: "Contact", pt: "Contato" })}
            </Link>
          </div>

          <div className="xl:hidden">
            <button
              id="mobile-menu-button"
              type="button"
              className={`p-2 rounded-md transition-colors duration-300 ease-in-out ${
                shouldAlwaysShowNav
                  ? 'text-pgnavy hover:bg-pgnavy/10'
                  : (isHovered || isScrolled || activeMenu ? 'text-pgnavy hover:bg-pgnavy/10' : 'text-white hover:bg-white/10')
              }`}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isMobileMenuOpen) {
                  setMobileProductsOpen(false);
                  setMobileSegmentsOpen(false);
                }
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {activeMenu === 'products' && (
        <div
          className="absolute left-0 right-0 top-full bg-white shadow-xl transform transition-all duration-400 ease-in-out z-[9998] overflow-hidden animate-fade-in-down"
          onMouseLeave={() => {
            console.log('Mouse left dropdown area');
            setTimeout(() => {
              console.log('Closing dropdown after delay');
              setActiveMenu(null);
            }, 150);
          }}
        >
          <div className="container mx-auto py-12 px-4 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {productItems.map((item) => {
                const targetPath = item.path;
                console.log(`Setting up link for ${item.name} -> ${targetPath}`);

                // Estilos uniformes para todos los logos
                const getImageStyles = () => {
                  return {
                    width: '160px',
                    height: '100px',
                    objectFit: 'contain' as const
                  };
                };

                return (
                  <div
                    key={item.name}
                    className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105 relative z-10 cursor-pointer"
                    onClick={(e) => {
                      console.log(`Clicked on ${item.name}`);
                      console.log(`Target path: ${targetPath}`);
                      e.preventDefault();
                      e.stopPropagation();

                      setActiveMenu(null);
                      console.log('Dropdown closed');

                      setTimeout(() => {
                        console.log(`Navigating to: ${targetPath}`);
                        navigate(targetPath);
                      }, 50);
                    }}
                    onMouseDown={(e) => {
                      console.log(`Mouse down on ${item.name}`);
                      e.stopPropagation();
                    }}
                  >
                    <div className="mb-4 overflow-visible rounded-none bg-transparent p-0 cursor-pointer w-full h-28 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        style={getImageStyles()}
                      />
                    </div>
                    <span className="inline-block text-pgnavy underline-offset-4 group-hover:underline font-medium cursor-pointer">

                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'segments' && (
        <div
          className="absolute left-0 right-0 top-full bg-white shadow-xl transform transition-all duration-400 ease-in-out z-[9998] overflow-hidden animate-fade-in-down"
          onMouseLeave={() => {
            console.log('Mouse left segments dropdown area');
            setTimeout(() => {
              console.log('Closing segments dropdown after delay');
              setActiveMenu(null);
            }, 150);
          }}
        >
          <div className="container mx-auto py-12 px-4 sm:px-8">
            <div className="flex flex-wrap justify-center gap-8">
              {segmentItems.map((item) => {
                console.log(`Setting up segment link for ${item.name} -> ${item.path}`);

                // Estilos específicos para segments (todos uniformes por ahora)
                const getSegmentImageStyles = () => {
                  return {
                    width: '320px',
                    height: '80px',
                    objectFit: 'contain' as const
                  };
                };

                return (
                  <div
                    key={item.name}
                    className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105 relative z-10 cursor-pointer"
                    onClick={(e) => {
                      console.log(`Clicked on segment ${item.name}`);
                      console.log(`Target path: ${item.path}`);
                      e.preventDefault();
                      e.stopPropagation();

                      setActiveMenu(null);
                      console.log('Segments dropdown closed');

                      setTimeout(() => {
                        console.log(`Navigating to: ${item.path}`);
                        navigate(item.path);
                      }, 50);
                    }}
                    onMouseDown={(e) => {
                      console.log(`Mouse down on segment ${item.name}`);
                      e.stopPropagation();
                    }}
                  >
                    <div className="mb-4 overflow-visible rounded-none bg-transparent p-0 cursor-pointer w-full h-24 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        style={getSegmentImageStyles()}
                      />
                    </div>
                    <span className="inline-block text-pgnavy underline-offset-4 group-hover:underline font-medium cursor-pointer">
                      {T({ es: "Ver más", en: "See more", pt: "Ver mais" })}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div id="mobile-menu" className="xl:hidden bg-white shadow-lg mobile-menu-enter border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/"
              className="block px-4 py-3 rounded-lg text-base font-medium text-pgnavy hover:bg-pglight/50 transition-colors"
              onClick={closeMobileMenu}
            >
              {T({ es: "Inicio", en: "Home", pt: "Início" })}
            </Link>

            <Link
              to="/historia"
              className="block px-4 py-3 rounded-lg text-base font-medium text-pgnavy hover:bg-pglight/50 transition-colors"
              onClick={closeMobileMenu}
            >
              {T({ es: "Quiénes Somos", en: "About Us", pt: "Quem Somos" })}
            </Link>

            <div className="block font-medium text-pgnavy">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-pglight/30 rounded-lg px-4 py-3 transition-colors"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span>{T({ es: "PG Transport Solutions", en: "PG Transport Solutions", pt: "PG Transport Solutions" })}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileProductsOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileProductsOpen
                  ? 'max-h-96 opacity-100 mt-2'
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4">
                  <div className="grid grid-cols-2 gap-3 justify-items-center">
                    {productItems.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block p-2 text-center hover:bg-pglight/20 rounded-lg transition-colors w-full"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex flex-col items-center">
                          <div className="bg-transparent p-1 rounded-lg mb-2 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                            <img
                              src={item.img}
                              alt={`${item.name} logo`}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <span className="text-xs sm:text-sm text-pgnavy font-medium text-center leading-tight">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="block font-medium text-pgnavy">
              <div
                className="flex justify-between items-center cursor-pointer hover:bg-pglight/30 rounded-lg px-4 py-3 transition-colors"
                onClick={() => setMobileSegmentsOpen(!mobileSegmentsOpen)}
              >
                <span>{T({ es: "Segmentos", en: "Segments", pt: "Segmentos" })}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    mobileSegmentsOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileSegmentsOpen
                  ? 'max-h-96 opacity-100 mt-2'
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4">
                  <div className="space-y-2">
                    {segmentItems.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center p-3 hover:bg-pglight/20 rounded-lg transition-colors w-full"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-pglight/30 rounded-md mr-3">
                          <img
                            src={item.img}
                            alt={`${item.name} logo`}
                            className="object-contain w-8 h-8"
                          />
                        </div>
                        <div className="flex-1">
                          <span className="block text-sm font-medium text-pgnavy">
                            {item.name}
                          </span>
                          <span className="text-xs text-pgnavy/70">
                            {item.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/pg-ballistics"
              className="block px-4 py-3 rounded-lg text-base font-medium text-pgnavy hover:bg-pglight/50 transition-colors"
              onClick={closeMobileMenu}
            >
              {T({ es: "PG Balística", en: "PG Ballistics", pt: "PG Balística" })}
            </Link>
            <Link
              to="/pg-dna"
              className="block px-4 py-3 rounded-lg text-base font-medium text-pgnavy hover:bg-pglight/50 transition-colors"
              onClick={closeMobileMenu}
            >
              PG DNA
            </Link>
            <Link
              to="/contacto"
              className="block px-4 py-3 rounded-lg text-base font-medium bg-pgnavy text-white hover:bg-pgblue transition-colors mt-4"
              onClick={closeMobileMenu}
            >
              {T({ es: "Contacto", en: "Contact", pt: "Contato" })}
            </Link>

            {/* Language switcher in mobile menu */}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <p className="text-xs text-gray-400 px-4 mb-2 font-montserrat">Idioma / Language</p>
              <div className="flex gap-2 px-4">
                {(['es', 'en', 'pt'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setShowSelector(true); closeMobileMenu(); }}
                    className={`flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-sm font-medium border-2 transition-colors ${
                      language === l
                        ? 'border-pgnavy bg-pgnavy text-white'
                        : 'border-gray-200 text-pgnavy hover:border-pgnavy'
                    }`}
                  >
                    <div className="h-5 w-5 overflow-hidden rounded-full flex-shrink-0">
                      <img src={langFlags[l]} alt={l} className="h-full w-full object-cover" />
                    </div>
                    <span>{l.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
