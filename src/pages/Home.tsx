import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HoverBorderGradientButton } from '@/components/hover-border-gradient-demo';

// List of available spline files in the public/assets/spline directory
// List of available spline files in the public/assets/spline directory
const SPLINE_FILES = [
  '1.spline',
  '2.spline',
  '4.spline',
  'greet.spline'
];

const SplineViewer: React.FC = () => {
  // Generate a random index on component mount
  const [randomIndex] = React.useState(() => 
    Math.floor(Math.random() * SPLINE_FILES.length)
  );
  
  // Get the URL for the randomly selected spline file
  const splineUrl = `/spline-viewer/index.html?file=/assets/spline/${SPLINE_FILES[randomIndex]}`;

  return (
    <div className="w-full h-full">
      <iframe 
        src={splineUrl}
        className="w-full h-full border-0"
        title="3D Greeting"
        allowFullScreen
        key={splineUrl}
      />
    </div>
  );
};

// Font imports would be added in your CSS/global CSS
// Example: @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

const Home: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16">
        {/* Signature in top left */}
        <motion.div 
          className="absolute top-8 left-8"
          style={{
            fontFamily: '"Dancing Script", sans-serif',
            fontSize: '26px',
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        
        </motion.div>

        {/* Available for work badge */}
        <motion.div 
          className="absolute top-8 right-8 flex items-center gap-2 text-sm text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span>Available for work</span>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight">
                <div className="flex items-center whitespace-nowrap">
                  <span className="text-gray-800">Hey, I'm Aman Raj</span>
                  <span className="ml-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200 flex-shrink-0">
                    <img 
                      src="/images/pf.png" 
                      alt="Aman Raj"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error('Failed to load image:', e.currentTarget.src);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-gray-800">Full Stack Engineer</span>
                </div>
                <span className="block text-gray-600 text-2xl sm:text-3xl mt-8">
                  <span className="relative inline-flex items-center">
                    Working On 
                    <span className="ml-2 w-10 h-10 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                      <img 
                        src="/images/location.png" 
                        alt="CyberSec Project"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('Failed to load image:', e.currentTarget.src);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </span>
                    <span className="ml-2">CyberSec</span>
                  </span>
                </span>
              </h1>

              <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
                Crafting elegant digital experiences through thoughtful design and clean, efficient code.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="inline-flex">
                  <HoverBorderGradientButton
                    as={Link}
                    to="/contact"
                    className="text-sm sm:text-base font-medium text-gray-900 dark:text-white py-3 px-6"
                    containerClassName="rounded-full"
                  >
                    Get In Touch Today
                  </HoverBorderGradientButton>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Element with Spline */}
            <motion.div 
              className="flex items-center justify-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl ml-0 mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full aspect-square max-w-md">
                <SplineViewer />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -right-40 -top-40 w-96 h-96 bg-gradient-to-br from-violet-50 to-transparent rounded-full opacity-50"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-gradient-to-tr from-amber-50 to-transparent rounded-full opacity-50"></div>
        </div>

      </div>
    </div>
  );
});

export default Home;