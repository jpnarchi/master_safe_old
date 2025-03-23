
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pgnavy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img 
              src="/lovable-uploads/5371a554-12b5-4e78-88b1-03348546c0e5.png" 
              alt="PG Products Logo" 
              className="h-12 mb-4" 
            />
            <p className="text-white/70 mb-4">
              Líder en la producción de vidrio blindado premium con tecnología europea y estándares de calidad internacional.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Productos</h3>
            <ul className="space-y-2">
              {["NEU", "GlassGuard", "SteelGlass", "SuperSlim", "ULTRA"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h3 className="text-lg font-bold mb-4">Estándares</h3>
            <ul className="space-y-2 text-white/70">
              <li>NIJ 0108.01</li>
              <li>ABNT NBR 15000</li>
              <li>CEN 1063</li>
              <li>NATO STANAG 4569</li>
              <li>NOM 142 SCFI 2000</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p className="text-white/70 mb-2">www.pgproducts.com.br</p>
            <p className="text-white/70 mb-2">info@pgproducts.com.br</p>
            <p className="text-white/70 mb-2">+52 55 1234 5678</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} PG Products. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Política de Privacidad</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
