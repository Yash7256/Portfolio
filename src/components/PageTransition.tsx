import React from 'react';
import { motion } from 'framer-motion';
import RadialMenu from './RadialMenu';

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: 20,
    scale: 0.98
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
};

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative z-10 min-h-screen"
      >
        <div className="pb-20">
          {children}
        </div>
      </motion.div>
      <div className="fixed bottom-6 right-6 z-50">
        <RadialMenu />
      </div>
    </>
  );
};

export default PageTransition;