import React from 'react';
import { motion } from 'framer-motion';

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}) => {
  const isPrimary = variant === 'primary';

  return (
    <motion.button
      onClick={onClick}
      className={`
        relative overflow-hidden px-8 py-3 rounded-full font-medium tracking-wide transition-all duration-300 group
        ${isPrimary 
          ? 'bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]' 
          : 'bg-transparent text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
        }
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out transform rotate-12" />
      
      {/* Metallic Pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 0px rgba(255,255,255,0)',
            '0 0 10px rgba(255,255,255,0.1)',
            '0 0 0px rgba(255,255,255,0)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GlowingButton;