import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const WalkingCat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [spritePosition, setSpritePosition] = useState(0);
  const catRef = useRef<HTMLDivElement>(null);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const prevX = useRef(0);
  
  // Smooth out the mouse movement with spring physics
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Walking animation frame
  useEffect(() => {
    let frame: number;
    let lastTime = 0;
    const frameRate = 10; // Frames per second
    const frameDelay = 1000 / frameRate;
    
    const animate = (time: number) => {
      if (isWalking && time - lastTime > frameDelay) {
        setSpritePosition(prev => (prev + 1) % 4); // Cycle through 4 frames
        lastTime = time;
      }
      frame = requestAnimationFrame(animate);
    };
    
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isWalking]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!catRef.current) return;
      
      // Update direction based on mouse movement
      if (e.clientX > prevX.current) {
        setDirection(1); // Right
      } else if (e.clientX < prevX.current) {
        setDirection(-1); // Left
      }
      prevX.current = e.clientX;
      
      // Update cursor position
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      // Calculate distance to determine if cat should walk
      const catRect = catRef.current.getBoundingClientRect();
      const catX = catRect.left + catRect.width / 2;
      const catY = catRect.top + catRect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - catX, 2) + 
        Math.pow(e.clientY - catY, 2)
      );
      
      setIsWalking(distance > 10); // Only walk if cursor is far enough
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Delay the appearance of the cat
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={catRef}
      className="fixed pointer-events-none z-[9999]"
      style={{
        x: smoothX,
        y: smoothY,
        left: 30,
        top: 30,
        transform: `scaleX(${direction})`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5 }
      }}
    >
      <div className="relative w-16 h-16">
        <AnimatePresence>
          <motion.div
            key={spritePosition}
            className="absolute inset-0 bg-contain bg-no-repeat"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'64\' height=\'64\' viewBox=\'0 0 32 32\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M16 12C16 10.8954 15.1046 10 14 10C12.8954 10 12 10.8954 12 12C12 13.1046 12.8954 14 14 14C15.1046 14 16 13.1046 16 12Z\' fill=\'%23333\'/%3E%3Cpath d=\'M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z\' fill=\'%23333\'/%3E%3Cpath d=\'M14 18C14 17.4477 14.4477 17 15 17H17C17.5523 17 18 17.4477 18 18C18 18.5523 17.5523 19 17 19H15C14.4477 19 14 18.5523 14 18Z\' fill=\'%23333\'/%3E%3Cpath d=\'M12 24C12 20.6863 14.6863 18 18 18C21.3137 18 24 20.6863 24 24V26C24 27.1046 23.1046 28 22 28H14C12.8954 28 12 27.1046 12 26V24Z\' fill=\'%23FFB6C1\'/%3E%3Cpath d=\'M10 10C10 8.89543 10.8954 8 12 8H20C21.1046 8 22 8.89543 22 10V14C22 15.1046 21.1046 16 20 16H12C10.8954 16 10 15.1046 10 14V10Z\' fill=\'%23FFB6C1\'/%3E%3Cpath d=\'M8 18C8 17.4477 8.44772 17 9 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H9C8.44772 19 8 18.5523 8 18Z\' fill=\'%23333\'/%3E%3Cpath d=\'M20 18C20 17.4477 20.4477 17 21 17H23C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19H21C20.4477 19 20 18.5523 20 18Z\' fill=\'%23333\'/%3E%3C/svg%3E")',
              backgroundPosition: `${-spritePosition * 64}px 0`,
              transform: 'scale(1.5)',
              transformOrigin: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: isWalking ? [0, 5, 0, -5, 0][spritePosition] : 0,
              y: isWalking ? [0, 0, 5, 0, -5][spritePosition] : 0,
            }}
            transition={{ 
              duration: 0.2,
              ease: 'easeInOut',
            }}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WalkingCat;
