import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplineBackground from '../components/SplineBackground';

const Home: React.FC = React.memo(() => {
  // Memoize the SplineBackground to prevent re-renders
  const MemoizedSpline = React.useMemo(() => (
    <SplineBackground sceneUrl="/assets/spline/background.spline" />
  ), []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {MemoizedSpline}
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            I'm a software engineer that rarely
            <span className="block sm:inline">
              {' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                writes code.
              </span>
            </span>
          </motion.h1>

          {/* Introduction Paragraph */}
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm Yash. I build digital experiences that live on the internet. 
            When I'm not busy herding pixels or debugging the universe, I'm probably 
            exploring the latest in web technologies or sipping on artisanal coffee.
          </motion.p>

          {/* Current Projects Line */}
          <motion.div 
            className="text-gray-400 text-sm sm:text-base mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Building </span>
            <a 
              href="#" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                // Add your project navigation logic here
              }}
            >
              Project One
            </a>
            <span> and </span>
            <a 
              href="#" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                // Add your project navigation logic here
              }}
            >
              Project Two
            </a>
            <span> when I'm not working on my day job.</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Home;