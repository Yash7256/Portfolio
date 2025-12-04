import * as React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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


const Home: React.FC = React.memo(() => {
  // Memoize the SplineBackground to prevent re-renders
  const MemoizedSpline = React.useMemo(() => (
    <SplineBackground sceneUrl="/assets/spline/background.spline" />
  ), []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
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
    </div>
  );
});

export default Home;