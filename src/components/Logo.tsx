import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline text-primary", className)}>
      {/* 
        Asegúrate de que tu logo se llama 'logotipo-usos-01.svg' 
        y está en la carpeta 'public'.
      */}
      <img 
        src="/logotipo-usos-01.svg" 
        alt="CONFÍA Logo" 
        style={{ height: '32px', width: 'auto' }}
      />
      <span className="mt-1">CONFÍA</span>
    </Link>
  );
};

export default Logo;
