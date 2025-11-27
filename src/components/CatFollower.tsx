import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CatFollower: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Smooth out the mouse movement with spring physics
  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Delay the appearance of the cat
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        left: 15,
        top: 15,
      }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-400 drop-shadow-lg"
      >
        {/* Cat head */}
        <motion.circle
          cx="16"
          cy="16"
          r="12"
          fill="#FFB6C1"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Ears */}
        <path d="M10 10 L14 6 L18 10 Z" fill="#FFB6C1" stroke="#000" strokeWidth="1" />
        <path d="M22 10 L18 6 L14 10 Z" fill="#FFB6C1" stroke="#000" strokeWidth="1" />
        
        {/* Eyes */}
        <circle cx="11" cy="14" r="2" fill="#000" />
        <circle cx="21" cy="14" r="2" fill="#000" />
        
        {/* Nose */}
        <path d="M15 18 L17 18 L16 20 Z" fill="#FF6B8B" />
        
        {/* Mouth */}
        <path d="M12 22 Q16 24 20 22" fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Whiskers */}
        <line x1="6" y1="16" x2="10" y2="16" stroke="#000" strokeWidth="1" />
        <line x1="6" y1="18" x2="10" y2="19" stroke="#000" strokeWidth="1" />
        <line x1="6" y1="14" x2="10" y2="15" stroke="#000" strokeWidth="1" />
        <line x1="26" y1="16" x2="22" y2="16" stroke="#000" strokeWidth="1" />
        <line x1="26" y1="18" x2="22" y2="19" stroke="#000" strokeWidth="1" />
        <line x1="26" y1="14" x2="22" y2="15" stroke="#000" strokeWidth="1" />
      </svg>
    </motion.div>
  );
};

export default CatFollower;
