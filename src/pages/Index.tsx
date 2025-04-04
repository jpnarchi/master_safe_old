
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FeatureGrid from "../components/FeatureGrid";
import SpecTable from "../components/SpecTable";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import VideoSection from "../components/VideoSection";
import useScrollObserver from "../utils/ScrollObserver";
import BallisticGlassSlider from "../components/BallisticGlassSlider";

const Index = () => {
  useScrollObserver();

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      <section id="neu" className="py-16 md:py-24 relative overflow-hidden">
        {/* Triangular Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-50/50" aria-hidden="true"></div>
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="triangles"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <polygon 
                  points="0,0 20,20 0,40" 
                  fill="#08244c" 
                  fillOpacity="0.4"
                />
                <polygon 
                  points="40,0 20,20 40,40" 
                  fill="#08244c" 
                  fillOpacity="0.2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#triangles)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-pglight/80 to-white/95"></div>
        </div>
        
        {/* Content */}
        <div className="section-container relative z-10">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="heading-lg text-pgnavy mb-3">NEU Premium Ballistic Glass</h2>
            <p className="text-xl font-semibold text-pgnavy/80 max-w-2xl mx-auto">
              Ingeniería Alemana, Estándares Europeos, Protección Superior
            </p>
            <div className="w-24 h-1 bg-pgblue/70 mx-auto mt-5"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 slide-left">
              <div className="flex items-center mb-2">
                <div className="w-1.5 h-8 bg-pgblue mr-3"></div>
                <h3 className="text-2xl font-bold text-pgnavy">Diseño y Tecnología Superior</h3>
              </div>
              
              <p className="text-lg text-pgnavy/70">
                Un cristal blindado automotriz diseñado y desarrollado con ingeniería Alemana, producido con las mejores materias primas disponibles bajo estándares de diseño Europeo.
              </p>
              
              <p className="text-lg text-pgnavy/70">
                Esta combinación proporciona al producto: mayor resistencia balística comprobada, calidad superior en geometría, acabados únicos y óptica destacable.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-pgnavy/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pgnavy/5">
                  <h4 className="font-bold text-pgnavy mb-1">Resistencia Balística</h4>
                  <p className="text-sm text-pgnavy/70">NIJ III-A + 4 impactos 7,62x39mm</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-pgnavy/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pgnavy/5">
                  <h4 className="font-bold text-pgnavy mb-1">Serigrafía Europea</h4>
                  <p className="text-sm text-pgnavy/70">Flat painting, mayor visibilidad</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-pgnavy/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pgnavy/5">
                  <h4 className="font-bold text-pgnavy mb-1">Acabado Premium</h4>
                  <p className="text-sm text-pgnavy/70">Acero inoxidable balístico</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-pgnavy/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-pgnavy/5">
                  <h4 className="font-bold text-pgnavy mb-1">Óptica Superior</h4>
                  <p className="text-sm text-pgnavy/70">Máxima claridad visual</p>
                </div>
              </div>
              
              <div className="pt-4">
                <a href="/neu" className="btn-primary inline-flex items-center">
                  Descubrir más
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="slide-right">
              <div className="bg-white/50 backdrop-blur-sm p-3 rounded-2xl shadow-xl">
                <BallisticGlassSlider />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeatureGrid />
      
      <ProductSection 
        id="steelglass"
        title="SteelGlass"
        subtitle="Resistente hasta el Borde"
        description={[
          "Un cristal blindado que integra en la formulación un inserto de Acero en el contorno adicionando protección hasta el borde. Se trata de un vidrio blindado con acero insertado en el bloque balístico, dando estructura y resistencia en los bordes.",
          "Su gran factor diferencial es proteger a los ocupantes del vehículo del punto vulnerable formado entre el bloque balístico del vidrio y la parte opaca."
        ]}
        features={[
          "Evita la instalación de Overlaps",
          "Mantiene la originalidad del Vehículo",
          "Acabado Premium",
          "Acero inoxidable balístico Certificado"
        ]}
        darkBackground={true}
        reversed={true}
      />
      
      <ProductSection 
        id="superslim"
        title="SuperSlim"
        subtitle="Más Liviano, más delgado, igual de resistente"
        description={[
          "Un cristal blindado certificado que mantiene la resistencia balística pero con una formulación más delgada que asegura un 15% menos de peso y mayor vida útil.",
          "PG crea un cristal con aproximadamente un 15% de reducción de peso y espesor como resultado de una formulación con materiales especiales y polímeros avanzados que se laminan en ciclos especiales."
        ]}
        features={[
          "Menor peso añadido al vehículo",
          "Menos modificaciones en puertas",
          "Mayor eficiencia en consumo de combustible",
          "Mayor durabilidad de componentes del vehículo"
        ]}
      />
      
      <SpecTable 
        id="specs"
        title="Especificaciones Técnicas"
        description="Comparativa entre diferentes tipos de vidrio blindado según espesor, peso y nivel balístico certificado."
      />
      
      <ProductSection 
        id="ultra"
        title="ULTRA"
        subtitle="Menor espesor, Único desempeño Balístico"
        description={[
          "PG ULTRA es un cristal blindado con todas las características de un nivel bajo, que suma una destacable resistencia balística a munición de nivel superior.",
          "Compatible con cualquier modelo de vehículo, probado y certificado con composición exclusiva PG."
        ]}
        features={[
          "Resistencia balística según norma NIJ 0108.01 para nivel NIJ III-A",
          "4 impactos Munición: 7,62x39mm FMJ a 30 cms",
          "1 Impacto Munición: 5,56x45 M193 en el centro",
          "Compatible con SteelGlass"
        ]}
        darkBackground={true}
      />
      
      <ProductSection 
        id="glassguard"
        title="GlassGuard"
        subtitle="Calidad, Durabilidad y balística comprobada"
        description={[
          "GlassGuard compone un portafolio de soluciones de blindaje transparente según normas locales e internacionales para diferentes aplicaciones de alta especificación.",
          "La composición de GlassGuard se desarrolla con materiales certificados y procesos detallados para asegurar el ADN de PG; balística innovadora, geometría estable, óptica destacable y estética única."
        ]}
        features={[
          "Producto con gestión de calidad certificada ISO 9001",
          "Formulado con materiales avanzados y procesos detallados",
          "Variedad de colores y transmisiones de luz",
          "Compatible con accesorios como redes desempañantes y antenas"
        ]}
        reversed={true}
      />
      
      <VideoSection 
        videoId="UB9eppCeLXE" 
        title="Nuestra Historia"
        subtitle="Descubre la trayectoria de PG Products y su compromiso con la innovación y la seguridad"
      />
      
      <CTASection 
        title="¿Listo para elevar su seguridad?"
        description="Contáctenos hoy mismo para descubrir cómo nuestros productos de vidrio blindado premium pueden proporcionarle la máxima protección con un diseño elegante."
        primaryButtonText="Contactar ahora"
        primaryButtonLink="/contacto"
        secondaryButtonText="Volver arriba"
        secondaryButtonLink="#"
      />
      
      <Footer />
    </div>
  );
};

export default Index;
