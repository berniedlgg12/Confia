'use client';

import { useState, useEffect } from 'react';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { SpeedInsights } from "@vercel/speed-insights/next";
import WelcomeAnimation from '@/components/layout/WelcomeAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import CookieConsentBanner from '@/components/layout/CookieConsentBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenConfiaAnimation');
    if (hasSeenAnimation) {
      setLoading(false);
    }
  }, []);

  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <body className={cn('font-body antialiased min-h-screen flex flex-col relative')}>
        <AnimatePresence>
          {loading && <WelcomeAnimation onAnimationComplete={() => setLoading(false)} />}
        </AnimatePresence>
        
        {!loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col flex-grow min-h-screen"
          >
            <div 
              className="absolute inset-0 -z-20 h-full"
              style={{
                backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F2A36B 25%, #E10600 50%, #7A0C14 75%, #000000 100%)',
              }}
            ></div>
            <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden">
                <div className="absolute -right-96 -top-10 h-full w-full opacity-10 transform -rotate-[25deg]">
                    <Image
                        src="/Logo/logotipo-usos-08.png"
                        alt="Confía Logo Watermark"
                        fill
                        objectFit="contain"
                        quality={20}
                    />
                </div>
            </div>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </motion.div>
        )}
        
        <Toaster />
        <CookieConsentBanner />
        <SpeedInsights />
      </body>
    </html>
  );
}
