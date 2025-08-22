import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  gradient = false 
}) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className={`inline-block mr-2 ${
            gradient 
              ? 'bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent' 
              : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + wordIndex * 0.1,
            duration: 0.5,
            ease: 'easeOut'
          }}
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + wordIndex * 0.1 + charIndex * 0.02,
                duration: 0.3
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;