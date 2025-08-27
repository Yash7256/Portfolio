import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import GlowingButton from '../components/ui/GlowingButton';

const Home: React.FC = () => {
  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'React.js, Tailwind CSS, TypeScript' },
    { icon: Palette, title: 'Blockchain Development', desc: 'Solana, Ethereum' },
    { icon: Zap, title: 'CyberSecurity', desc: 'Penetration Testing, Ethical Hacking' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen p-4 relative">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <AnimatedText
              text="Aman Raj"
              className="text-6xl md:text-8xl font-bold mb-4"
              gradient={true}
              delay={0.2}
            />
            <AnimatedText
              text="Defensive Security"
              className="text-4xl md:text-6xl font-light text-gray-300"
              delay={0.8}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting immersive digital experiences through innovative code, 
            elegant design, and cutting-edge technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <GlowingButton 
              variant="primary" 
              onClick={() => window.location.href = '/projects'}
            >
              View My Work
            </GlowingButton>
            <GlowingButton 
              variant="secondary"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
            </GlowingButton>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-1 h-1 bg-gray-400 rounded-full"
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/40 rounded-full"
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2
            }}
          />
        </div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            What I Do
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 text-center group hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{skill.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="py-8"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional, and user-friendly applications. With expertise in modern web 
            technologies, I transform ideas into digital reality, focusing on clean code, 
            optimal performance, and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "#", label: "Email" }
            ].map((social, index) => {
              const { Icon } = social;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-blue-500/50 rounded-lg p-3 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            Ready to Start Your Next Project?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Let's collaborate and bring your vision to life with cutting-edge technology 
            and thoughtful design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <GlowingButton 
              variant="primary"
              onClick={() => window.location.href = '/contact'}
            >
              Let's Work Together
            </GlowingButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;