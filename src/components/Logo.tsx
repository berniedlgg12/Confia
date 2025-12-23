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
        width={140}
        height={40}
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;
