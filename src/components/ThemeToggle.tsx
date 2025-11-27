import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-5 h-5">
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, rotate: -45 }}
          animate={{ 
            opacity: theme === 'light' ? 1 : 0,
            rotate: theme === 'light' ? 0 : -45,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="w-4 h-4 text-foreground" />
        </motion.span>
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ 
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : 45,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="w-4 h-4 text-foreground" />
        </motion.span>
      </div>
    </button>
  );
};

export default ThemeToggle;
