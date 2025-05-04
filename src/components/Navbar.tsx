import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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

  const productItems = [
    // "NEU" removed from here and moved to main navigation
    { name: "GlassGuard", path: "/glassguard", description: "Calidad y Durabilidad", img: "/lovable-uploads/263ffb06-d243-4ca1-88ab-a68943ddd637.png" },
    { name: "SteelGlass", path: "/steelglass", description: "Resistente hasta el Borde", img: "/lovable-uploads/c6b082b9-872f-4a46-a317-6f3b708396c8.png" },
    { name: "SuperSlim", path: "/superslim", description: "Liviano y Resistente", img: "/lovable-uploads/f54c4665-4e79-445e-b553-2cefc763c386.png" },
    { name: "ULTRA", path: "/ultra", description: "Desempeño Balístico Superior", img: "/lovable-uploads/8cd08f36-dc67-46f9-99b5-b79a9a5caf2a.png" },
    { name: "NEU", path: "/neu", description: "Desempeño gran", img: "/lovable-uploads/neu.png" }
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-pgnavy shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/8edefffc-7a49-492b-acc8-65267634f930.png" 
                alt="PG Products Logo" 
                className="h-10 md:h-12" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Home Link */}
            <Link 
              to="/"
              className="font-medium text-white hover:text-white/80 transition-colors duration-300"
            >
              Inicio
            </Link>
            
        
            
            {/* Historia Link */}
            <Link 
              to="/historia"
              className="font-medium text-white hover:text-white/80 transition-colors duration-300"
            >
              About Us
            </Link>
            
            {/* Products Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white">
                    PG Automative Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      {productItems.map((item) => (
                        <li key={item.name} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex flex-col items-start text-left -gap-10">
                                <img src={item.img} alt={item.name + ' logo'} className="w-78 h-78 object-contain ml-0" />
                                <div>
                                  <p className="line-clamp-2 text-xs leading-tight text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link 
              to="/pg-ballistics"
              className="font-medium text-white hover:text-white/80 transition-colors duration-300"
            >
              PG Ballistics
            </Link>

            <Link 
              to="/pg-ballistics"
              className="font-medium text-white hover:text-white/80 transition-colors duration-300"
            >
              Segments
            </Link>
            
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/contacto" 
              className="inline-flex items-center rounded-md px-4 py-2 font-medium bg-white text-pgnavy hover:bg-white/90 transition-colors duration-300"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-white hover:bg-white/10"
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
            {/* Home Link */}
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight animate-slide-in-bottom"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            
            
            {/* Historia Link */}
            <Link
              to="/historia"
              className="block px-3 py-2 rounded-md text-base font-medium text-pgnavy hover:bg-pglight animate-slide-in-bottom"
              style={{ animationDelay: '0.1s' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Historia
            </Link>
            
            {/* Products Submenu */}
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
                <span>Nuestros Productos</span>
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
                      <img src={item.img} alt={item.name + ' logo'} className="w-36 h-36 object-contain" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              to="/contacto"
              className="block px-3 py-2 rounded-md text-base font-medium bg-pgnavy text-white hover:bg-pgblue animate-slide-in-bottom"
              style={{ animationDelay: '0.25s' }}
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
