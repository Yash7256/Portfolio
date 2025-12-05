import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RadialMenu from '../components/RadialMenu';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';
import GlowingButton from '../components/ui/GlowingButton';
import { projects } from '../data/projects';

import type { Variants } from 'framer-motion';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  },
};

const Projects: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  // Using projects data from the projects.ts file

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <RadialMenu />
      <div className="max-w-4xl mx-auto">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
        >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Featured Projects"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my professional journey and technical expertise across various domains.
          </p>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent flex-1" />
            <h2 className="mx-6 text-2xl font-bold text-white">Featured Projects</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent flex-1" />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover="hover"
              whileTap="tap"
              className="group"
            >
              <FloatingCard 
                className="overflow-hidden h-full flex flex-col group" 
                delay={index * 0.1}
              >
                {/* Project Image with Link to Details */}
                <Link to={`/projects/${project.id}`} className="block h-48 overflow-hidden">
                  <motion.div
                    className="h-full w-full"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
                
                {/* Action Buttons */}
                <motion.div 
                  className="absolute top-4 right-4 flex space-x-2 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.github && (
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(74, 222, 128, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:bg-green-500/20 transition-all duration-300 shadow-lg"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.a>
                  )}
                </motion.div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <Link to={`/projects/${project.id}`} className="group">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                  </Link>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.tagline || project.description}
                  </p>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-white/5 text-cyan-300 rounded-full border border-cyan-400/20 hover:bg-cyan-500/10 transition-all duration-300 cursor-default"
                        whileHover={{ 
                          y: -2,
                          scale: 1.05,
                          backgroundColor: 'rgba(34, 211, 238, 0.1)'
                        }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-full">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </motion.div>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group"
                    >
                      View Details
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Learn More Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto"
                  >
                    <GlowingButton 
                      variant="secondary" 
                      className="w-full text-sm py-2 group/button"
                    >
                      <span className="flex items-center justify-center">
                        View Details
                        <motion.span
                          className="ml-2 inline-block"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.span>
                      </span>
                    </GlowingButton>
                  </motion.div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={item}
          className="text-center mt-24 relative"
        >
          <motion.div 
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl opacity-20 -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.p 
            className="text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Interested in collaborating on your next project?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GlowingButton 
              variant="primary"
              className="group/cta relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Let's Work Together
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite',
                }}
              />
            </GlowingButton>
          </motion.div>
        </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Add keyframes for gradient animation
if (typeof document !== 'undefined') {
  const styleId = 'gradient-keyframes';
  if (!document.getElementById(styleId)) {
    const styles = document.createElement('style');
    styles.id = styleId;
    styles.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(styles);
  }
}

export default Projects;