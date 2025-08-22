import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in modern web technologies including React, Node.js, TypeScript, and cloud platforms.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences with attention to detail and usability.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications with optimized code and efficient architectures.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="About Me"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience creating exceptional 
            digital experiences. I specialize in modern web technologies and love 
            bringing innovative ideas to life through clean, efficient code.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <FloatingCard className="p-8" delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Started my journey in tech with a fascination for creating digital 
                experiences that matter. What began as curiosity about how websites 
                work evolved into a deep passion for crafting exceptional user experiences.
              </p>
              <p>
                Over the years, I've worked with startups, agencies, and enterprises, 
                helping them bring their visions to life through innovative web solutions. 
                Each project teaches me something new and pushes me to grow as a developer.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
          </FloatingCard>

          {/* Right Column - Philosophy */}
          <FloatingCard className="p-8" delay={0.4}>
            <h3 className="text-2xl font-bold text-white mb-6">My Philosophy</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-white to-gray-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">User-Centric Design</h4>
                  <p className="text-gray-300 text-sm">
                    Every line of code should serve a purpose in creating better user experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Clean Code</h4>
                  <p className="text-gray-300 text-sm">
                    Writing maintainable, scalable, and efficient code that stands the test of time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-400 to-white flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-gray-300 text-sm">
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
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;