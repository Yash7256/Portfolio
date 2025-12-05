import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TextHoverEffect } from './ui/text-hover-effect';

const MotionLoader: React.FC = () => {

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-4"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex justify-center mb-8"
          >
            <div className="w-full max-w-2xl">
              <TextHoverEffect 
                text="Loading Portfolio"
                duration={0.5}
              />
            </div>
          </motion.div>
          
          <div className="w-full max-w-md mx-auto h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatType: 'reverse' as const,
                ease: 'easeInOut' 
              }}
            />
          </div>
          
          <motion.p 
            className="mt-8 text-cyan-200/70 text-sm font-mono tracking-widest text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting your experience...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MotionLoader;