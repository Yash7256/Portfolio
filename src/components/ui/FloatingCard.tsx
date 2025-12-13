import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)' }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' 
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay
      }}
      whileHover={{ 
        y: -8,
        scale: 1.03,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      whileTap={{
        scale: 0.98,
        y: -2,
        transition: { type: 'spring', stiffness: 500, damping: 30 }
      }}
      className={`relative overflow-hidden rounded-xl backdrop-blur-lg bg-white/60 border border-gray-200/80 shadow-lg group dark:bg-gray-800/60 dark:border-white/10 ${className}`}
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out transform rotate-12" />
      
      {/* Metallic Border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {children}
    </motion.div>
  );
};

export default FloatingCard;