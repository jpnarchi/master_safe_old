
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import PGLogo from './PGLogo';

interface LoadingScreenProps {
  duration?: number;
  isLoading: boolean;
}

const LoadingScreen = ({ duration = 2500, isLoading }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only start the fade-out animation when loading is complete
    if (!isLoading) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Short delay after loading completes

      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isLoading, duration]);

  if (!isVisible && !isLoading) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-pgnavy transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Maintain the exact dimensions of the logo container */}
      <div className="w-64 h-64 mb-8 animate-pulse">
        <PGLogo className="text-white" />
      </div>
      <Loader className="w-12 h-12 text-white animate-spin" />
    </div>
  );
};

export default LoadingScreen;
