import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Cursor Style 1: Minimal Dot
export const MinimalDotCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnterHandler = () => setIsVisible(true);
    const mouseLeaveHandler = () => setIsVisible(false);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.body.addEventListener('mouseenter', mouseEnterHandler);
    document.body.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.body.removeEventListener('mouseenter', mouseEnterHandler);
      document.body.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-emerald-400 rounded-full pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
      }}
      transition={{
        type: 'spring',
        mass: 0.1,
        stiffness: 800,
        damping: 50,
      }}
    />
  );
};

// Cursor Style 2: Ring Cursor
export const RingCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnterHandler = () => setCursorVariant('hover');
    const mouseLeaveHandler = () => setCursorVariant('default');

    document.addEventListener('mousemove', mouseMoveHandler);

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
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      width: 30,
      height: 30,
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      width: 50,
      height: 50,
      opacity: 1,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border-2 border-emerald-400 pointer-events-none z-[9999]"
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
};

// Cursor Style 3: Trailing Cursor
export const TrailingCursor: React.FC = () => {
  const [mousePositions, setMousePositions] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePositions(prev => {
        const newPositions = [...prev, {x: e.clientX, y: e.clientY}];
        return newPositions.length > 8 ? newPositions.slice(1) : newPositions;
      });
    };

    document.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <>
      {mousePositions.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 w-3 h-3 bg-emerald-400 rounded-full pointer-events-none z-[9999]"
          style={{
            x: pos.x - 6,
            y: pos.y - 6,
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
};

// Cursor Style 4: Neon Glow Cursor
export const NeonGlowCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnterHandler = () => setCursorVariant('hover');
    const mouseLeaveHandler = () => setCursorVariant('default');

    document.addEventListener('mousemove', mouseMoveHandler);

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
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      opacity: 1,
      boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      width: 40,
      height: 40,
      opacity: 1,
      boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.6)',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-emerald-500 pointer-events-none z-[9999]"
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
};

export default {
  MinimalDotCursor,
  RingCursor,
  TrailingCursor,
  NeonGlowCursor
};