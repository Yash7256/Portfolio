"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useLocation, Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

// Get current route for active state

// Custom cursor position tracking
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactNode;
};

type FloatingNavProps = {
  navItems: NavItem[];
  className?: string;
};

export const FloatingNav = ({
  navItems,
  className,
}: FloatingNavProps) => {
  const [visible, setVisible] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const { x, y } = useMousePosition();
  const location = useLocation();
  const pathname = location.pathname;

    
  // Update cursor position with bounds checking
  useEffect(() => {
    const updateCursorPosition = () => {
      const navbar = document.querySelector('.floating-nav');
      if (!navbar) return;
      
      const rect = navbar.getBoundingClientRect();
      const xPos = Math.max(0, Math.min(x - rect.left, rect.width));
      const yPos = Math.max(0, Math.min(y - rect.top, rect.height));
      
      setCursorPosition({ x: xPos, y: yPos });
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, [x, y]);

  // Use effect to handle scroll events
  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > 100) { // Only hide if scrolled down more than 100px
        setVisible(false);
      }
      
      // Always show navbar at the top of the page
      if (currentScrollY < 10) {
        setVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "floating-nav relative overflow-hidden",
            "flex max-w-fit fixed top-6 inset-x-0 mx-auto rounded-full z-[5000] px-4 py-1 items-center justify-between gap-8",
            "bg-white/80 backdrop-blur-lg border border-transparent/5",
            "shadow-lg shadow-black/5",
            "transition-all duration-300",
            className
          )}  
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}>
          {/* Profile Section */}
          <div className="flex items-center gap-3 pl-2">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img 
                src="/images/pf.png" 
                alt="Aman Raj" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-black font-medium text-sm">Aman Raj</span>
          </div>
          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((navItem, idx) => {
              const isActive = pathname === navItem.link;
              return (
                <Link
                  key={`link-${idx}`}
                  to={navItem.link}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full transition-all duration-200 group block",
                    isActive 
                      ? 'text-neutral-900' 
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                  )}
                  onMouseEnter={() => setHoveredItem(idx)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center space-x-2">
                    {navItem.icon}
                    <span className="text-sm">{navItem.name}</span>
                  </div>
                  {hoveredItem === idx && (
                    <motion.div
                      className="absolute inset-0 bg-neutral-100 rounded-full -z-10"
                      layoutId="navHover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle shine effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(
            400px circle at ${cursorPosition.x}px ${cursorPosition.y}px, 
            rgba(255, 255, 255, 0.2), 
            transparent 80%
          )`,
        }}
      />
      
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm pointer-events-none z-[9999]"
        animate={{
          x: x - 12,
          y: y - 12,
          scale: hoveredItem !== null ? 1.5 : 1,
          opacity: hoveredItem !== null ? 1 : 0,
          backgroundColor: hoveredItem !== null ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          damping: 15,
          stiffness: 500,
        }}
      />
      
          </>
  );
};