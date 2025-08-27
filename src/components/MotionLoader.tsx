import React from 'react';
import { motion } from 'framer-motion';

const MotionLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-white/20 border-t-white"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Inner Ring */}
        <motion.div
          className="absolute inset-2 w-20 h-20 rounded-full border-2 border-gray-400/20 border-b-gray-400"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Center Dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      </div>
      
      {/* Loading Text */}
      <motion.p
        className="absolute bottom-32 text-white/80 text-lg font-light tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Portfolio...
      </motion.p>
    </div>
  );
};

export default MotionLoader;