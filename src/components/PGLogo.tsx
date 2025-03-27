
import { cn } from '@/lib/utils';

interface PGLogoProps {
  className?: string;
}

const PGLogo = ({ className }: PGLogoProps) => {
  return (
    <img 
      src="/lovable-uploads/ff6f9f97-d670-45cd-97a0-85bdbb32e648.png" 
      alt="PG Logo" 
      className={cn("w-full h-full", className)}
    />
  );
};

export default PGLogo;
