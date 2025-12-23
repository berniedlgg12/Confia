import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-xl font-bold font-headline text-primary", className)}>
      <Image 
        src="/Logo/logotipo-usos-01.svg" 
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
