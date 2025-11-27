import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';
import GlowingButton from '../components/ui/GlowingButton';

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

  const projects = [
    {
      title: 'Tech Support LLM',
      description: 'Tech Support LLM is a chatbot that can answer questions about technology and provide assistance to users.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React, TypeScript, and Framer Motion for smooth animations.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment processing.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden">
      <Navbar showAvatar={true} />
      <div className="max-w-7xl mx-auto">
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
            A showcase of innovative solutions and technical expertise across various domains.
          </p>
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
                className="overflow-hidden h-full flex flex-col" 
                delay={index * 0.1}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
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
                  
                  {/* Action Buttons */}
                  <motion.div 
                    className="absolute top-4 right-4 flex space-x-2"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.a
                      href={project.github}
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
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                        whileHover={{ 
                          y: -2,
                          scale: 1.05,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
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