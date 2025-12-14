import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingCard from '../components/ui/FloatingCard';
import GlowingButton from '../components/ui/GlowingButton';
import { projects } from '../data/projects';
import { AnimatedSectionHeading } from '../components/ui/AnimatedSectionHeading';

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
    <div className="min-h-screen py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={container}
        >
        {/* Header with blue lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedSectionHeading title="Featured Projects" />
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            A showcase of my professional journey and technical expertise across various domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center px-4 sm:px-0 w-full"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="group w-full flex justify-center"
            >
              <FloatingCard 
                className="overflow-hidden h-full flex flex-col group w-full max-w-md mx-auto" 
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
                  className="absolute top-4 right-4 flex space-x-3 z-10"
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
                        scale: 1.15,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/20"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.15,
                        backgroundColor: 'rgba(74, 222, 128, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-black/60 backdrop-blur-sm rounded-full border border-white/30 hover:bg-green-500/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  )}
                </motion.div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <Link to={`/projects/${project.id}`} className="group">
                    <motion.h3 
                      className="text-2xl font-bold  mb-3 group-hover:text-[#7c3aed] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                  </Link>
                  <p className=" text-sm leading-relaxed mb-4 flex-1">
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
                        className="px-3 py-1 text-xs bg-white/5  rounded-full border border-violet-600/20 hover:bg-violet-600/10 transition-all duration-300 cursor-default"
                        whileHover={{ 
                          y: -2,
                          scale: 1.05,
                          backgroundColor: 'rgba(124, 58, 237, 0.1)'
                        }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-white/5  rounded-full">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </motion.div>
                  
                  
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
            className=" mb-8 text-lg"
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