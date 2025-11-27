import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import SplineBackground from '../components/SplineBackground';

// Memoize the profile image to prevent re-renders
const ProfileImage = React.memo(() => (
  <div className="w-44 h-44 rounded-full border-4 border-white/30 bg-gray-800/50 backdrop-blur-sm flex items-center justify-center shadow-2xl overflow-hidden">
    <img 
      src="/assets/images/pf.png" 
      alt="Profile"
      className="w-full h-full object-cover"
      loading="lazy"
      width={176}
      height={176}
    />
  </div>
));

// Memoize the footer to prevent re-renders
const Footer = React.memo(() => (
  <footer className="fixed bottom-0 left-0 right-0 z-50 py-6 px-8">
    <div className="flex justify-center">
      <nav className="flex space-x-16">
        <Link to="/" className="text-base text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2">
          Home
        </Link>
        <Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2">
          About
        </Link>
      </nav>
    </div>
  </footer>
));

const Home: React.FC = React.memo(() => {
  // Memoize the SplineBackground to prevent re-renders
  const MemoizedSpline = React.useMemo(() => (
    <SplineBackground sceneUrl="/assets/spline/background.spline" />
  ), []);

  return (
    <div className="min-h-screen w-full text-white font-sans relative overflow-hidden">
      {MemoizedSpline}
      
      {/* Avatar - Balanced Position */}
      <motion.div 
        className="fixed left-[15vw] top-1/2 z-40" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <ProfileImage />
      </motion.div>
      
      <Navbar />
      <Footer />
    </div>
  );
});

export default Home;