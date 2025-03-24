
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import FeatureGrid from "../components/FeatureGrid";
import SpecTable from "../components/SpecTable";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import useScrollObserver from "../utils/ScrollObserver";

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
      
      <ProductSection 
        id="neu"
        title="NEU Premium Ballistic Glass"
        subtitle="Ingeniería Alemana"
        description={[
          "Un cristal blindado automotriz diseñado y desarrollado con ingeniería Alemana, producido con las mejores materias primas disponibles bajo estándares de diseño Europeo.",
          "Esta combinación proporciona al producto: mayor resistencia balística comprobada, calidad superior en geometría, acabados únicos y óptica destacable."
        ]}
        features={[
          "Resistencia Balística NIJ III-A",
          "4 impactos Munición: 7,62x39mm FMJ",
          "Serigrafía Tipo Europeo",
          "Flat painting, más visibilidad y discreción",
          "Acabado único de acero inoxidable"
        ]}
        useSlider={true}
      />
      
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
