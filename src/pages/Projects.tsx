import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';
import GlowingButton from '../components/ui/GlowingButton';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Analytics dashboard with machine learning insights. Built with Next.js and Python backend, featuring real-time data visualization and predictive analytics.',
      tech: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive portfolio with Three.js animations and WebGL effects. Features immersive 3D elements and smooth page transitions.',
      tech: ['React', 'Three.js', 'GSAP', 'WebGL'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.',
      tech: ['React Native', 'Firebase', 'Plaid API', 'Redux'],
      image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Platform',
      description: 'Real-time social platform with chat functionality, media sharing, and advanced privacy controls. Built with modern web technologies.',
      tech: ['React', 'WebSocket', 'MongoDB', 'Redis'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'IoT Management System',
      description: 'Comprehensive IoT device management platform with real-time monitoring, automated alerts, and detailed analytics dashboard.',
      tech: ['Vue.js', 'MQTT', 'InfluxDB', 'Grafana'],
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FloatingCard key={index} className="overflow-hidden" delay={index * 0.1}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <GlowingButton variant="secondary" className="w-full text-sm py-2">
                  View Details
                </GlowingButton>
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in collaborating on your next project?
          </p>
          <GlowingButton variant="primary">
            Let's Work Together
          </GlowingButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;