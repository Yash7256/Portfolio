import React from 'react';
import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  iconBackground?: string;
  hoverGradient?: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  hoverGradient = 'from-purple-600/20 to-indigo-600/20' 
}) => {
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
      className={`relative overflow-hidden rounded-2xl backdrop-blur-lg bg-gradient-to-br from-white/5 to-white/10 border border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl" />
      </div>

      {/* Hover Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} 
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default FloatingCard;