"use client";
import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Font imports would be added in your CSS/global CSS
// Example: @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

const Home: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-12 py-16">
        {/* Signature in top left */}
        <motion.div 
          className="absolute top-8 left-8 text-xl font-cursive text-gray-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Aman Raj
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal leading-tight">
                <span className="block text-gray-800">Hey, I'm </span>
                <span className="relative inline-flex items-center">
                  <span className="relative z-10">Aman Raj</span>
                  <span className="ml-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-200">
                    <img 
                      src="/images/pf.png" 
                      alt="Aman Raj"
                      className="w-full h-full object-cover"
                    />
                  </span>
                </span>
                <span className="block text-gray-800 mt-4">
                  <span className="relative inline-flex items-center">
                    <span className="relative z-10">Full Stack </span>
                    <span className="mx-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                      <img 
                        src="/images/tech-badge.jpg" 
                        alt="Tech"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </span>
                  <span className="relative inline-flex items-center">
                    <span className="relative z-10">Engineer</span>
                    <span className="ml-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                      <img 
                        src="/images/project-badge.jpg" 
                        alt="Project"
                        className="w-full h-full object-cover"
                      />
                    </span>
                  </span>
                </span>
                <span className="block text-gray-600 text-2xl sm:text-3xl mt-8">
                  <span className="relative inline-flex items-center">
                    Working On 
                    <span className="ml-2 w-10 h-10 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                      <img 
                        src="/images/location.jpg" 
                        alt="Location"
                        className="w-full h-full object-cover"
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
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 text-white text-base font-medium rounded-full hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Get In Touch Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - 3D Element */}
            <motion.div 
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl shadow-2xl transform rotate-3">
                  <div className="absolute inset-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-inner">
                    {/* Abstract 3D shape */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                      <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl transform rotate-12"></div>
                        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-gray-100 to-white rounded-2xl transform -rotate-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
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