
import { cn } from '@/lib/utils';

interface PGLogoProps {
  className?: string;
}

const PGLogo = ({ className }: PGLogoProps) => {
  return (
    <img 
      src="/about/ff6f9f97-d670-45cd-97a0-85bdbb32e648.webp" 
      alt="PG Logo" 
      className={cn("w-full h-full object-contain", className)}
    />
  );
};

export default PGLogo;
