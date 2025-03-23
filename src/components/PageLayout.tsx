
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
}

const PageLayout = ({ children, title, subtitle, bgImage, darkMode = false }: PageLayoutProps) => {
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
        style={bgImage ? { backgroundImage: `linear-gradient(rgba(0, 26, 65, 0.7), rgba(0, 26, 65, 0.7)), url(${bgImage})` } : {}}
        className={`min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat ${darkMode ? 'bg-pgnavy' : 'bg-white'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className={`heading-xl mb-6 ${darkMode ? 'text-white' : 'text-pgnavy'} slide-up active`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${darkMode ? 'text-white/80' : 'text-pgnavy/70'} slide-up active`} style={{ transitionDelay: '0.1s' }}>
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
