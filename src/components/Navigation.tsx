import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navigation: React.FC = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Logo />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
