import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-900 dark:text-gray-100 font-medium">{skill}</span>
        <span className="text-gray-900 dark:text-white font-semibold">{percentage}%</span>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-black/40 rounded-full overflow-hidden border border-gray-300/50 dark:border-white/10">
        {/* Background Shine */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 via-gray-100/10 to-gray-300/20" />
        
        {/* Progress Bar */}
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] dark:from-white dark:via-gray-200 dark:to-gray-400 dark:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            delay,
            duration: 1.5,
            ease: 'easeOut'
          }}
        />
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-8"
          animate={{
            x: ['-32px', '100%', '100%', '-32px']
          }}
          transition={{
            delay: delay + 1.5,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut'
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;