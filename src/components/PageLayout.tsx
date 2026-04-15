
import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useScrollObserver from '../utils/ScrollObserver';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  bgImage?: string;
  darkMode?: boolean;
  fullWidthBg?: boolean;
  overlayOpacity?: string;
  textColor?: string;
}

const PageLayout = ({ 
  children, 
  title, 
  subtitle, 
  bgImage, 
  darkMode = false, 
  fullWidthBg = false,
  overlayOpacity = darkMode ? 'bg-pgnavy/70' : 'bg-white/70',
  textColor = darkMode ? 'text-white' : 'text-pgnavy'
}: PageLayoutProps) => {
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

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className={`min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative pt-20 ${darkMode ? 'bg-pgnavy' : 'bg-white'}`}
      >
        {/* Background with image and overlay */}
        <div className="absolute inset-0">
          {bgImage ? (
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${bgImage})`,
                backgroundSize: fullWidthBg ? 'cover' : 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className={`absolute inset-0 ${overlayOpacity}`}></div>
            </div>
          ) : (
            <div className="absolute inset-0">
              <img 
                src="/about/dab51236-9306-4c50-b326-1e2f347360ca.webp"
                alt="Background pattern"
                className={`w-full h-full object-cover ${darkMode ? 'opacity-30' : 'opacity-10'}`}
              />
              <div className={`absolute inset-0 ${darkMode ? 'bg-pgnavy/70' : 'bg-white/70'}`}></div>
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10">
          <h1 className={`heading-xl mb-6 ${textColor} slide-up active drop-shadow-lg`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              textColor === 'text-white' ? 'text-white/90' : 'text-pgnavy/70'
            } slide-up active drop-shadow-md`} style={{ transitionDelay: '0.1s' }}>
              {subtitle}
            </p>
          )}
        </div>
      </section>
      
      {/* Page Content */}
      {children}
      
      <Footer />
    </div>
  );
};

export default PageLayout;
