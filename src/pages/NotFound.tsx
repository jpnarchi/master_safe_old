import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <div className="text-center max-w-md sm:max-w-lg md:max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-gray-900">404</h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 px-2 sm:px-0">Oops! Página no encontrada</p>
          <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">La página que buscas no existe o ha sido movida.</p>
          <a 
            href="/" 
            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 text-white font-semibold rounded-md sm:rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            Regresar al Inicio
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
