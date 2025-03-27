
import { cn } from '@/lib/utils';

interface PGLogoProps {
  className?: string;
}

const PGLogo = ({ className }: PGLogoProps) => {
  return (
    <svg 
      className={cn("w-full h-full", className)} 
      viewBox="0 0 200 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M40 10H80C91.0457 10 100 18.9543 100 30V50C100 61.0457 91.0457 70 80 70H40V10Z" 
        fill="currentColor" 
      />
      <path 
        d="M40 30H60V40H40V30Z" 
        fill="white" 
      />
      <path 
        d="M140 10H180V30H140C128.954 30 120 38.9543 120 50V70H100V30C100 18.9543 108.954 10 120 10H140Z" 
        fill="currentColor" 
      />
    </svg>
  );
};

export default PGLogo;
