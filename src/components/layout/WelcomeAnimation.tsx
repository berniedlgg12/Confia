'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

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
  }, [onAnimationComplete]);

  const handleAnimationComplete = () => {
    sessionStorage.setItem('hasSeenConfiaAnimation', 'true');
    onAnimationComplete();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #F2A36B 40%, #E10600 65%, #7A0C14 85%, #000000 100%)',
      }}
    >
      <motion.div
        initial={{
          scale: 4,
          opacity: 0,
          y: '0vh'
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: ['0vw', '0vw', '-41vw'],
          y: ['0vh', '0vh', '-43vh'],
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.5,
          times: [0, 0.5, 1]
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          // These values are approximate and might need tweaking
          // to perfectly align with the final header logo position.
          width: '360px',
          height: '100px',
        }}
      >
        <Image
          src="/Logo/logotipo-usos-01.png"
          alt="CONFÍA Logo"
          width={360}
          height={100}
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default WelcomeAnimation;
