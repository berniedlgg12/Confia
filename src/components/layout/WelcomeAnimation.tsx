'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type WelcomeAnimationProps = {
  onAnimationComplete: () => void;
};

const WelcomeAnimation = ({ onAnimationComplete }: WelcomeAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenConfiaAnimation');
    if (hasSeenAnimation) {
      setIsVisible(false);
      onAnimationComplete();
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('hasSeenConfiaAnimation', 'true');
      onAnimationComplete();
    }, 2000); // Duración total de la animación + espera

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F2A36B 40%, #E10600 65%, #7A0C14 85%, #000000 100%)',
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-[480px] h-auto"
            >
                <Image
                    src="/Logo/logotipo-usos-19.png"
                    alt="CONFÍA Logo"
                    width={480}
                    height={133}
                    priority
                />
            </motion.div>
        </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
