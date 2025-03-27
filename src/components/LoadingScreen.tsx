
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import PGLogo from './PGLogo';

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen = ({ duration = 2000 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the fade-out animation after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-pgnavy transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <div className="w-48 h-48 mb-8 animate-pulse">
        <PGLogo className="text-white" />
      </div>
      <Loader className="w-12 h-12 text-white animate-spin" />
    </div>
  );
};

export default LoadingScreen;
