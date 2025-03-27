
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import PGLogo from './PGLogo';

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen = ({ duration = 1200 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the fade-out animation after the specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-pgnavy transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="w-32 h-32 mb-8 text-white">
        <PGLogo />
      </div>
      <Loader className="w-10 h-10 text-white animate-spin" />
    </div>
  );
};

export default LoadingScreen;
