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
      description: 'Building AI models and applications using modern machine learning frameworks.'
    },
    {
      icon: Palette,
      title: 'CyberSecurity',
      description: 'Defending against cyber threats and vulnerabilities using ethical hacking and penetration testing.'
    },
    {
      icon: Zap,
      title: 'Networking',
      description: 'Designing and implementing network architectures to ensure optimal performance and security.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedSectionHeading title="About Me" />
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-center">
            I’m a 3rd-year Computer Engineering student passionate about blockchain, cybersecurity, and frontend development. I enjoy exploring modern web technologies and building secure, innovative digital solutions. With a strong foundation in coding and problem-solving, I focus on writing clean, efficient code and turning ideas into impactful projects.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <FloatingCard className="p-8" delay={0.2}>
            <h3 className="text-3xl font-bold  mb-6">My Journey</h3>
            <div className="space-y-4  leading-relaxed">
              <p>
                Started my journey in tech with a fascination for building on Solana, along with cybersecurity and frontend development. What began as curiosity about websites has grown into creating secure, innovative, and impactful digital experiences powered by modern web and blockchain technologies.
              </p>
            </div>
          </FloatingCard>

          {/* Right Column - Philosophy */}
          <FloatingCard className="p-8" delay={0.4}>
            <h3 className="text-3xl font-bold  mb-6">My Philosophy</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white to-gray-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className=" font-semibold mb-2">User-Centric Design</h4>
                  <p className=" text-sm">
                    Every line of code should serve a purpose in creating better user experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className=" font-semibold mb-2">Clean Code</h4>
                  <p className=" text-sm">
                    Writing maintainable, scalable, and efficient code that stands the test of time.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-white flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className=" font-semibold mb-2">Continuous Learning</h4>
                  <p className=" text-sm">
                    Technology evolves rapidly, and staying curious is key to growing as a developer.
                  </p>
                </div>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <FloatingCard key={index} className="p-6 text-center" delay={0.6 + index * 0.1}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold  mb-3">{feature.title}</h3>
                <p className=" leading-relaxed">{feature.description}</p>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;