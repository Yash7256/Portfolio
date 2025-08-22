import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import GlowingButton from '../components/ui/GlowingButton';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <AnimatedText
            text="Creative Developer"
            className="text-6xl md:text-8xl font-bold mb-4"
            gradient={true}
            delay={0.2}
          />
          <AnimatedText
            text="& Digital Artist"
            className="text-4xl md:text-6xl font-light text-gray-300"
            delay={0.8}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting immersive digital experiences through innovative code, 
          elegant design, and cutting-edge technology.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <GlowingButton variant="primary">
            View My Work
          </GlowingButton>
          <GlowingButton variant="secondary">
            Get In Touch
          </GlowingButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2 tracking-widest">SCROLL</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full"
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/40 rounded-full"
          animate={{
            opacity: [0.1, 0.6, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    </div>
  );
};

export default Home;