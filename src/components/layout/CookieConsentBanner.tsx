
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has been given after the component mounts on the client
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    // Here you would typically initialize analytics scripts
    // e.g., gtm.init();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t p-4"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary text-center md:text-left">
              Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar, usted acepta nuestra{' '}
              <Link href="/politica-cookies" className="font-bold underline hover:text-accent">
                Política de Cookies
              </Link>
              .
            </p>
            <div className="flex-shrink-0 flex gap-2">
              <Button variant="outline" size="sm" onClick={handleDecline}>
                Rechazar
              </Button>
              <Button size="sm" onClick={handleAccept}>
                Aceptar
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
