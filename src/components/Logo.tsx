import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline text-primary", className)}>
      {/* 
        This is a temporary test using an online SVG. 
        If you see this logo, it means the issue is with your local file name or location.
        Please ensure your logo is named 'logotipo-usos-01.svg' and is in the 'public' folder.
      */}
      <img 
        src="https://www.svgrepo.com/show/530599/adobe.svg" 
        alt="CONFÍA Logo" 
        style={{ height: '32px', width: 'auto' }}
      />
      <span className="mt-1">CONFÍA</span>
    </Link>
  );
};

export default Logo;
