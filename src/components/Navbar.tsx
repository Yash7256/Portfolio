import React, { useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  showAvatar?: boolean;
}

const skillsList = ['Frontend', 'Backend', 'AI/ML', 'Security', 'DevOps', 'Cloud'] as const;

const NavLink = React.memo<{ to: string; children: React.ReactNode; isActive: boolean }>(({ to, children, isActive }) => {
  return (
    <motion.div 
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        to={to}
        className={`text-base ${
          isActive ? 'text-white' : 'text-gray-300 hover:text-white'
        } relative px-3 py-2 transition-colors duration-300`}
      >
        {children}
        {isActive && (
          <motion.span 
            className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
            layoutId="nav-underline"
            initial={false}
            transition={{
              type: 'spring',
              bounce: 0.25,
              duration: 0.6
            }}
          />
        )}
      </Link>
    </motion.div>
  );
});

const NavbarComponent: React.FC<NavbarProps> = ({ showAvatar = false }) => {
  const location = useLocation();
  const [isSkillsOpen, setIsSkillsOpen] = React.useState(false);
  const isHomePage = location.pathname === '/';
  
  const toggleSkills = useCallback(() => {
    setIsSkillsOpen(prev => !prev);
  }, []);
  
  const closeSkills = useCallback(() => {
    setIsSkillsOpen(false);
  }, []);
  
  const memoizedAvatar = useMemo(() => (
    showAvatar && (
      <div className="w-12 h-12 rounded-full border-2 border-white/30 bg-gray-800/50 backdrop-blur-sm flex-shrink-0 overflow-hidden">
        <img 
          src="/assets/images/pf.png" 
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
          width={48}
          height={48}
        />
      </div>
    )
  ), [showAvatar]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-gray-800/40">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo / Avatar */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              {memoizedAvatar}
            </motion.div>
            <motion.h1 
              className={`${isHomePage ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold tracking-tight text-white`}
              whileHover={{ x: 3 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              AMAN RAJ
            </motion.h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <NavLink to="/experience" isActive={location.pathname === '/experience'}>
            Experience
          </NavLink>
          <NavLink to="/projects" isActive={location.pathname === '/projects'}>
            Projects
          </NavLink>
          <div className="relative">
            <button 
              className={`flex items-center text-base ${
                location.pathname === '/skills' ? 'text-white' : 'text-gray-300'
              } hover:text-white transition-colors duration-300 px-3 py-2`}
              onClick={toggleSkills}
              aria-expanded={isSkillsOpen}
              aria-haspopup="true"
            >
              Skills
              <motion.span 
                className="ml-1"
                animate={{ 
                  rotate: isSkillsOpen ? 180 : 0,
                  y: isSkillsOpen ? 2 : 0
                }}
                transition={{ 
                  type: 'spring',
                  stiffness: 700,
                  damping: 25
                }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
            
            {/* Skills Dropdown */}
            <AnimatePresence>
              {isSkillsOpen && (
                <motion.div 
                  className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-md shadow-lg py-1 z-50 border border-gray-700"
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5
                  }}
                >
                  {skillsList.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 5 }}
                      whileTap={{ x: 0 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <Link
                        to="/skills"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300 rounded"
                        onClick={closeSkills}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

NavbarComponent.displayName = 'Navbar';

const Navbar = React.memo(NavbarComponent);
export default Navbar;
