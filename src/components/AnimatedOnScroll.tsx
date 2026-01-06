'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
