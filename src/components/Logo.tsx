import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image 
        src="/Logo/logotipo-usos-01.svg" 
        alt="CONFÍA Logo"
        width={360}
        height={100}
        className="h-24 w-auto"
      />
    </Link>
  );
};

export default Logo;
