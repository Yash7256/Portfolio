import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  style?: 'default' | 'minimal' | 'ring' | 'trailing' | 'neon';
}

const CustomCursor: React.FC<CustomCursorProps> = ({ style = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [mousePositions, setMousePositions] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // For trailing cursor
      if (style === 'trailing') {
        setMousePositions(prev => {
          const newPositions = [...prev, {x: e.clientX, y: e.clientY}];
          return newPositions.length > 8 ? newPositions.slice(1) : newPositions;
        });
      }
    };

    const mouseEnterHandler = () => setCursorVariant('hover');
    const mouseLeaveHandler = () => setCursorVariant('default');

    document.addEventListener('mousemove', mouseMoveHandler);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, .cursor-hover'
    );
    
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', mouseEnterHandler);
      el.addEventListener('mouseleave', mouseLeaveHandler);
    });

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnterHandler);
        el.removeEventListener('mouseleave', mouseLeaveHandler);
      });
    };
  }, [style]);

  // Default cursor style (dot with ring)
  if (style === 'default') {
    const variants = {
      default: {
        x: mousePosition.x - 8,
        y: mousePosition.y - 8,
        width: 16,
        height: 16,
        backgroundColor: 'rgba(124, 58, 237, 0.8)', // violet-600
        opacity: 1,
      },
      hover: {
        x: mousePosition.x - 24,
        y: mousePosition.y - 24,
        width: 48,
        height: 48,
        backgroundColor: 'rgba(168, 85, 247, 0.9)', // purple-500
        opacity: 1,
      }
    };

    return (
      <>
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: 'spring',
            mass: 0.1,
            stiffness: 800,
            damping: 50,
          }}
        />
        
        {/* Outer ring for hover effect */}
        {cursorVariant === 'hover' && (
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
            style={{
              x: mousePosition.x - 28,
              y: mousePosition.y - 28,
              width: 56,
              height: 56,
              border: '2px solid #a855f7', // purple-500
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: 'spring',
              mass: 0.1,
              stiffness: 800,
              damping: 50,
            }}
          />
        )}
      </>
    );
  }

  // Minimal dot cursor
  if (style === 'minimal') {
    return (
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          backgroundColor: 'rgba(124, 58, 237, 0.9)', // violet-600
        }}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 50,
        }}
      />
    );
  }

  // Ring cursor
  if (style === 'ring') {
    const variants = {
      default: {
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
        width: 30,
        height: 30,
        opacity: 1,
        border: '2px solid #7c3aed', // violet-600
      },
      hover: {
        x: mousePosition.x - 25,
        y: mousePosition.y - 25,
        width: 50,
        height: 50,
        opacity: 1,
        border: '2px solid #a855f7', // purple-500
      }
    };

    return (
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 50,
        }}
      />
    );
  }

  // Trailing cursor
  if (style === 'trailing') {
    return (
      <>
        {mousePositions.map((pos, index) => (
          <motion.div
            key={index}
            className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
            style={{
              x: pos.x - 6,
              y: pos.y - 6,
              backgroundColor: `rgba(124, 58, 237, ${(index + 1) / mousePositions.length * 0.9})`, // violet-600 with fading opacity
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: (index + 1) / mousePositions.length * 0.7,
              scale: (index + 1) / mousePositions.length * 1.2
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </>
    );
  }

  // Neon glow cursor
  if (style === 'neon') {
    const variants = {
      default: {
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        width: 24,
        height: 24,
        opacity: 1,
        backgroundColor: 'rgba(124, 58, 237, 0.8)', // violet-600
        boxShadow: '0 0 10px rgba(124, 58, 237, 0.5)', // violet-600
      },
      hover: {
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        width: 40,
        height: 40,
        opacity: 1,
        backgroundColor: 'rgba(168, 85, 247, 0.8)', // purple-500
        boxShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(124, 58, 237, 0.6)', // purple-500 and violet-600
      }
    };

    return (
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          mass: 0.1,
          stiffness: 800,
          damping: 50,
        }}
      />
    );
  }

  // Fallback to default if style doesn't match
  return null;
};

export default CustomCursor;