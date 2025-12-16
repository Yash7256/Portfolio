"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

// Get current route for active state

// Mouse position tracking removed as it's now handled by global cursor component

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  
  // Filter out the Home item from navItems
  const filteredNavItems = navItems.filter(item => item.name.toLowerCase() !== 'home');

  // Handle scroll events for showing/hiding navbar
  useEffect(() => {
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

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
            "flex max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto rounded-full z-[5000] px-4 py-1 items-center justify-between gap-8",
            "bg-white/80 backdrop-blur-lg border border-transparent/5",
            "shadow-lg shadow-black/5",
            "transition-all duration-300",
            className
          )}
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {/* Profile Section - Clickable to Home */}
          <Link to="/" className="flex items-center gap-3 pl-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img 
                src="/images/pf.png" 
                alt="Aman Raj" 
                className="w-full h-full object-cover"
              />
            </div>
            <span 
              className="font-medium text-sm hidden sm:block"
              style={{
                fontFamily: '"Dancing Script", sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                lineHeight: '150%',
                color: '#171717',
                letterSpacing: '0em',
                textDecoration: 'none',
                textTransform: 'none',
                fontVariationSettings: 'normal',
                fontFeatureSettings: 'normal',
                fontStyle: 'normal',
                WebkitFontSmoothing: 'antialiased'
              }}
            >
              Aman Raj
            </span>
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-1">
            {filteredNavItems.map((navItem, idx) => (
              <div key={`nav-item-${idx}`} className="relative">
                {navItem.link.startsWith('http') ? (
                  <a
                    href={navItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "relative px-5 py-2.5 rounded-full transition-all duration-200 block",
                      pathname === navItem.link 
                        ? 'text-neutral-900' 
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                    )}
                    onMouseEnter={() => setHoveredItem(idx)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="flex items-center space-x-2">
                      {navItem.icon}
                      <span className="text-sm">{navItem.name}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </a>
                ) : (
                  <Link
                    to={navItem.link}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full transition-all duration-200 block",
                      pathname === navItem.link 
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
                  </Link>
                )}
                
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
              </div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-neutral-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-neutral-700" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-700" />
            )}
          </button>
        </motion.div>
      </AnimatePresence>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[4999] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-xs sm:max-w-sm bg-white p-4 sm:p-6 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                      <img 
                        src="/images/pf.png" 
                        alt="Aman Raj" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span 
                      className="font-medium text-sm sm:text-base"
                      style={{
                        fontFamily: '"Dancing Script", sans-serif',
                        fontSize: '18px',
                        fontWeight: 700,
                        lineHeight: '150%',
                        color: '#171717',
                        letterSpacing: '0em',
                        textDecoration: 'none',
                        textTransform: 'none',
                        fontVariationSettings: 'normal',
                        fontFeatureSettings: 'normal',
                        fontStyle: 'normal',
                        WebkitFontSmoothing: 'antialiased'
                      }}
                    >
                      Aman Raj
                    </span>
                  </div>
                  <button
                    className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-neutral-700" />
                  </button>
                </div>
                
                <nav className="flex-1 overflow-y-auto">
                  <ul className="space-y-2">
                    {filteredNavItems.map((navItem, idx) => (
                      <li key={`mobile-nav-item-${idx}`}>
                        {navItem.link.startsWith('http') ? (
                          <a
                            href={navItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "flex items-center justify-between w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors text-sm sm:text-base",
                              pathname === navItem.link 
                                ? 'bg-neutral-100 text-neutral-900' 
                                : 'text-neutral-700 hover:bg-neutral-100'
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center space-x-3">
                              {navItem.icon}
                              <span>{navItem.name}</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : (
                          <Link
                            to={navItem.link}
                            className={cn(
                              "flex items-center justify-between w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors text-sm sm:text-base",
                              pathname === navItem.link 
                                ? 'bg-neutral-100 text-neutral-900' 
                                : 'text-neutral-700 hover:bg-neutral-100'
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center space-x-3">
                              {navItem.icon}
                              <span>{navItem.name}</span>
                            </div>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-sm text-neutral-500 text-center">
                    © {new Date().getFullYear()} Aman Raj. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};