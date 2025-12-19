import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import { AnimatedSectionHeading } from '../components/ui/AnimatedSectionHeading';

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <AnimatedSectionHeading title="About Me" />
            <div className="max-w-3xl mx-auto lg:mx-0 space-y-4 md:space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-black">
                Computer Engineering Student & Tech Enthusiast
              </p>
              
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
               I'm a 3rd-year Computer Engineering student with a passion for full-stack development and generative AI.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                I enjoy exploring modern web technologies and building intelligent, innovative digital solutions. 
              </p>
              
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                With a strong foundation in coding and problem-solving, I focus on writing clean, efficient code. My goal is to turn innovative ideas into impactful projects that make a difference.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="relative lg:w-1/3 max-w-xs w-2/3 sm:w-1/2 md:w-2/5 self-center"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="/images/pf.png" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl -z-10 blur-xl opacity-50" />
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left Column - Story */}
          <FloatingCard className="p-6 md:p-8" delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                Started my journey in tech with a fascination for full-stack development and generative AI:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Began with curiosity about websites and web technologies</li>
                <li>Evolved into creating intelligent, innovative, and impactful digital experiences</li>
                <li>Leveraging modern web technologies and AI-driven solutions</li>
                <li>Currently building CyberSec - an AI-powered cybersecurity assessment tool</li>
                <li>Combining full-stack development expertise with cutting-edge generative AI capabilities</li>
              </ul>
            </div>
          </FloatingCard>

          {/* Right Column - Philosophy */}
          <FloatingCard className="p-6 md:p-8" delay={0.4}>
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6">My Philosophy</h3>
            <div className="space-y-5 md:space-y-6">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-white to-gray-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1 md:mb-2">User-Centric Design</h4>
                  <p className="text-gray-700 text-sm">
                    Every line of code should serve a purpose in creating better user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1 md:mb-2">Clean Code</h4>
                  <p className="text-gray-700 text-sm">
                    Writing maintainable, scalable, and efficient code that stands the test of time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-gray-400 to-white flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-1 md:mb-2">Continuous Learning</h4>
                  <p className="text-gray-700 text-sm">
                    Technology evolves rapidly, and staying curious is key to growing as a developer.
                  </p>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  );
};

export default About;