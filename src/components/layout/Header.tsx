'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

type HeaderProps = {
  hideLogo?: boolean;
};

const Header = ({ hideLogo = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "border-b bg-background/80 backdrop-blur-sm" : "bg-transparent border-b border-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <div className={cn('transition-opacity duration-300', hideLogo ? 'opacity-0' : 'opacity-100')}>
          <Logo />
        </div>
        <nav className="hidden md:flex md:ml-auto md:items-center md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary/80',
                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="/contacto">Solicitar Estudio</Link>
          </Button>
        </nav>
        <div className="ml-auto md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-background p-0">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Logo />
                     <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                          <X className="h-6 w-6" />
                          <span className="sr-only">Cerrar menú</span>
                       </Button>
                     </SheetClose>
                  </div>
                  <div className="p-6 flex flex-col gap-6">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'text-lg font-medium transition-colors hover:text-primary/80',
                          pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button asChild size="lg" className="mt-4">
                      <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Solicitar Estudio</Link>
                    </Button>
                  </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
