"use client";
import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SplineBackground from '../components/SplineBackground';
import { LinkPreview } from '@/components/ui/link-preview';

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
          <motion.div className="space-y-8">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              I'm a <LinkPreview 
                url="/images/sf.webp"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-bold"
              >
                software engineer
              </LinkPreview> building the future with
              <span className="block sm:inline">
                {' '}
                <LinkPreview 
                  url="/images/aibc.webp"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text font-bold"
                >
                  AI & BLOCKCHAIN.
                </LinkPreview>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Hi, I'm{' '}
                <LinkPreview 
                  url="/images/pf.png"
                  className="text-white font-medium hover:text-cyan-400 transition-colors"
                >
                  Aman Raj
                </LinkPreview>. I architect <span className="text-white font-medium">intelligent systems</span> and <span className="text-white font-medium">decentralized applications</span> that push the boundaries of what's possible.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                When I'm not <span className="text-white font-medium">training models</span> or <span className="text-white font-medium">deploying smart contracts</span>, I'm probably exploring the intersection of <span className="text-white font-medium">generative AI</span> and <span className="text-white font-medium">Web3</span>, or enjoying a perfectly brewed <span className="text-white font-medium">artisanal coffee</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* Current Projects Line */}
          <motion.div 
            className="text-gray-400 text-sm sm:text-base mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Building </span>
            <LinkPreview 
              url="/images/02cybersec.png"
              className="text-cyan-400 hover:text-cyan-300 font-medium"
              onClick={(e) => {
                e.preventDefault();
                // Add your project navigation logic here
              }}
            >
              CyberSec
            </LinkPreview>
            <span> - AI POWERED CYBERSECURITY ASSISTANT</span>
          </motion.div>

          {/* CTA Button */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/projects" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Home;