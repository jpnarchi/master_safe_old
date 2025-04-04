
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PGLogo from './PGLogo';

interface LoadingScreenProps {
  duration?: number;
  isLoading: boolean;
  enabled?: boolean; // New prop to enable/disable the loading screen
}

const LoadingScreen = ({ duration = 2500, isLoading, enabled = false }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(enabled);

  useEffect(() => {
    // Only process if enabled
    if (!enabled) return;
    
    // Only start the fade-out animation when loading is complete
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Short delay after loading completes

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isLoading, duration, enabled]);

  // Return null if not enabled or not visible and not loading
  if (!enabled || (!isVisible && !isLoading)) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-700 bg-gradient-to-r from-pgblue to-blue-600 animate-gradient-x",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Maintain the exact dimensions of the logo container */}
      <div className="w-64 h-64 mb-8 transition-all duration-500 ease-in-out">
        <PGLogo className="text-white" />
      </div>
    </div>
  );
};

export default LoadingScreen;
