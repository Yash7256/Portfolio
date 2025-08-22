import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Zap, Rocket, Briefcase, Mail, Menu, X } from 'lucide-react';

const menuItems = [
  { path: '/', label: 'Home', icon: Home, gradient: 'from-white to-gray-300' },
  { path: '/about', label: 'About', icon: User, gradient: 'from-gray-200 to-gray-400' },
  { path: '/skills', label: 'Skills', icon: Zap, gradient: 'from-gray-300 to-gray-500' },
  { path: '/projects', label: 'Projects', icon: Rocket, gradient: 'from-gray-100 to-gray-300' },
  { path: '/experience', label: 'Experience', icon: Briefcase, gradient: 'from-slate-200 to-slate-400' },
  { path: '/contact', label: 'Contact', icon: Mail, gradient: 'from-zinc-200 to-zinc-400' }
];

const RadialMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const location = useLocation();

  useEffect(() => {
    // Update dimensions on mount and resize
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Set initial dimensions
    updateDimensions();
    
    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Calculate dynamic radius for semi-circle with safe boundaries
  const calculateRadius = () => {
    const minDimension = Math.min(dimensions.width, dimensions.height);
    // More conservative radius to ensure all items stay visible
    const safeRadiusFromLeft = dimensions.width * 0.4; // Don't go more than 40% from right edge
    const safeRadiusFromTop = dimensions.height * 0.4; // Don't go more than 40% from bottom edge
    
    return Math.min(140, minDimension * 0.25, safeRadiusFromLeft, safeRadiusFromTop);
  };

  // Calculate position for semi-circular arc with safe positioning
  const calculateSemiCirclePosition = (index: number, totalItems: number, radius: number) => {
    // More conservative angle range to keep items visible
    const startAngle = 150; // Start closer to vertical to avoid left edge
    const endAngle = 270;   // End at top
    const angleRange = endAngle - startAngle; // 120° total spread
    
    // Calculate angle for this item
    const angle = startAngle + (angleRange / Math.max(totalItems - 1, 1)) * index;
    const angleRad = (angle * Math.PI) / 180;
    
    // Calculate position
    let x = radius * Math.cos(angleRad);
    let y = radius * Math.sin(angleRad);
    
    // Additional safety: ensure no item goes beyond safe boundaries
    const menuButtonFromRight = 64; // Menu button distance from right edge
    const menuButtonFromBottom = 64; // Menu button distance from bottom edge
    
    // Calculate where this item would appear on screen
    const itemScreenX = dimensions.width - menuButtonFromRight + x;
    const itemScreenY = dimensions.height - menuButtonFromBottom + y;
    
    // Safe margins from screen edges
    const leftMargin = 60; // Minimum distance from left edge
    const topMargin = 60;  // Minimum distance from top edge
    
    // Clamp positions if they would go off-screen
    if (itemScreenX < leftMargin) {
      x = leftMargin - (dimensions.width - menuButtonFromRight);
    }
    if (itemScreenY < topMargin) {
      y = topMargin - (dimensions.height - menuButtonFromBottom);
    }
    
    return { x, y };
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Central Menu Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-neutral-800 via-black to-neutral-900 border-2 border-white/10 shadow-2xl flex items-center justify-center group overflow-hidden"
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out transform rotate-12" />
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </motion.div>
      </motion.button>

      {/* Radial Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-8 right-8 z-40">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const radius = calculateRadius();
              const { x, y } = calculateSemiCirclePosition(index, menuItems.length, radius);
              
              const isActive = location.pathname === item.path;

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, scale: 1, x, y }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                    delay: index * 0.05
                  }}
                  className="absolute"
                  style={{ right: '32px', bottom: '32px' }}
                >
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className="block relative group"
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden transition-all duration-300 ${
                        isActive
                          ? 'bg-white/20 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                          : 'bg-white/5 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      }`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out transform rotate-45" />
                      <IconComponent 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                        }`}
                      />
                    </motion.div>
                    
                    {/* Label - only visible on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${
                        y < -20 ? 'top-14' : '-top-8'
                      } ${
                        x > 20 ? 'right-0' : x < -20 ? 'left-0' : 'left-1/2 transform -translate-x-1/2'
                      } whitespace-nowrap pointer-events-none z-10`}
                    >
                      <span className="text-xs text-white/90 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 shadow-lg">
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RadialMenu;