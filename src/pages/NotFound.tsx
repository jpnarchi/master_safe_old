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
      <div className="flex items-center justify-center py-20 px-8" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Página no encontrada</p>
          <p className="text-gray-500 mb-8">La página que buscas no existe o ha sido movida.</p>
          <a 
            href="/" 
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
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
