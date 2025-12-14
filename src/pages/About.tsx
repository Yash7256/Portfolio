import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import { AnimatedSectionHeading } from '../components/ui/AnimatedSectionHeading';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'GEN AI',
      description: 'Building AI models and applications using modern machine learning frameworks.',
      iconBg: 'from-blue-500 to-cyan-400',
      hoverGradient: 'from-blue-600/20 to-cyan-500/20'
    },
    {
      icon: Palette,
      title: 'CyberSecurity',
      description: 'Defending against cyber threats and vulnerabilities using ethical hacking and penetration testing.',
      iconBg: 'from-purple-500 to-indigo-500',
      hoverGradient: 'from-purple-600/20 to-indigo-600/20'
    },
    {
      icon: Zap,
      title: 'Networking',
      description: 'Designing and implementing network architectures to ensure optimal performance and security.',
      iconBg: 'from-amber-500 to-orange-500',
      hoverGradient: 'from-amber-600/20 to-orange-600/20'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <AnimatedSectionHeading title="About Me" />
            <div className="max-w-3xl mx-auto lg:mx-0 space-y-6">
              <p className="text-2xl sm:text-3xl font-bold leading-tight text-black">
                Computer Engineering Student & Tech Enthusiast
              </p>
              
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                I'm a 3rd-year Computer Engineering student with a passion for blockchain, cybersecurity, and frontend development.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                I enjoy exploring modern web technologies and building secure, innovative digital solutions. With a strong foundation in coding and problem-solving, I focus on writing clean, efficient code.
              </p>
              
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                My goal is to turn innovative ideas into impactful projects that make a difference.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="relative lg:w-1/3 max-w-xs"
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
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <FloatingCard className="p-8" delay={0.2}>
            <h3 className="text-3xl font-bold text-black mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-800 leading-relaxed">
              <p>
                Started my journey in tech with a fascination for building on Solana, along with cybersecurity and frontend development. What began as curiosity about websites has grown into creating secure, innovative, and impactful digital experiences powered by modern web and blockchain technologies.
              </p>
            </div>
          </FloatingCard>

          {/* Right Column - Philosophy */}
          <FloatingCard className="p-8" delay={0.4}>
            <h3 className="text-3xl font-bold text-black mb-6">My Philosophy</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white to-gray-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-2">User-Centric Design</h4>
                  <p className="text-gray-700 text-sm">
                    Every line of code should serve a purpose in creating better user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-2">Clean Code</h4>
                  <p className="text-gray-700 text-sm">
                    Writing maintainable, scalable, and efficient code that stands the test of time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-white flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className="text-black font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-gray-700 text-sm">
                    Technology evolves rapidly, and staying curious is key to growing as a developer.
                  </p>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <FloatingCard 
                key={index} 
                className="p-8 h-full flex flex-col items-center text-center"
                hoverGradient={feature.hoverGradient}
                delay={index * 0.1}
              >
                <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.iconBg} shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-800 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                <div className="mt-6 w-8 h-0.5 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;