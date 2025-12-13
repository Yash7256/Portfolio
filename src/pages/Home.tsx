"use client";
import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LinkPreview } from '@/components/ui/link-preview';

const Home: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div className="space-y-10">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold  leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              I'm a <LinkPreview 
                url="/images/sf.webp"
                className="text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-purple-500 font-bold hover:opacity-80 transition-opacity duration-200"
              >
                software engineer
              </LinkPreview> building the future with
              <span className="block sm:inline">
                {' '}
                <LinkPreview 
                  url="/images/aibc.webp"
                  className="text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-purple-500 font-bold hover:opacity-80 transition-opacity duration-200"
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
              <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
                Hi, I'm{' '}
                <LinkPreview 
                  url="/images/pf.png"
                  className=" font-medium hover:text-[#7c3aed] transition-colors"
                >
                  Aman Raj
                </LinkPreview>. I architect <span className=" font-medium">intelligent systems</span> and <span className=" font-medium">decentralized applications</span> that push the boundaries of what's possible.
              </p>
              
              <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
                When I'm not <span className=" font-medium">training models</span> or <span className=" font-medium">deploying smart contracts</span>, I'm probably exploring the intersection of <span className=" font-medium">generative AI</span> and <span className=" font-medium">Web3</span>, or enjoying a perfectly brewed <span className=" font-medium">artisanal coffee</span>.
              </p>
            </motion.div>
          </motion.div>

          {/* Current Projects Line */}
          <motion.div 
            className="text-base sm:text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>Building </span>
            <LinkPreview 
              url="/images/02cybersec.png"
              className="text-transparent bg-clip-text bg-gradient-to-b from-violet-600 to-purple-500 hover:opacity-80 transition-opacity duration-200 font-medium"
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
            <Link 
              to="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md  bg-gradient-to-b from-violet-600 to-purple-500 hover:opacity-90 transition-opacity duration-200"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Home;