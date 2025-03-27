
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import PGLogo from './PGLogo';

interface LoadingScreenProps {
  duration?: number;
}

const LoadingScreen = ({ duration = 1500 }: LoadingScreenProps) => {
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
      <div className="w-40 h-40 mb-8">
        <PGLogo className="text-white" />
      </div>
      <Loader className="w-10 h-10 text-white animate-spin" />
    </div>
  );
};

export default LoadingScreen;
