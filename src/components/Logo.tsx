import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline text-primary", className)}>
      {/* 
        Para cambiar tu logo:
        1. Sube tu archivo de logo (SVG, PNG, etc.) a la carpeta `public`.
        2. Reemplaza `/logo.svg` con la ruta a tu nuevo archivo.
        3. Ajusta el `width` y `height` según las dimensiones de tu logo.
      */}
      <Image 
        src="/logotipo-usos-01.svg" 
        alt="CONFÍA Logo" 
        width={32} 
        height={32} 
        className="h-8 w-auto"
      />
      <span className="mt-1">CONFÍA</span>
    </Link>
  );
};

export default Logo;
