import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from '../components/ui/FloatingCard';
import SkillBar from '../components/ui/SkillBar';
import AnimatedText from '../components/ui/AnimatedText';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'CSS/Tailwind', level: 92 },
        { name: 'Three.js/WebGL', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 80 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS/Vercel', level: 87 },
        { name: 'Docker', level: 83 },
        { name: 'Git/GitHub', level: 93 },
        { name: 'Figma', level: 78 }
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'React Advanced Certification',
    'Google Cloud Professional',
    'Adobe Creative Suite Expert'
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
            text="Skills & Expertise"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of experience and continuous learning.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <FloatingCard key={categoryIndex} className="p-6" delay={categoryIndex * 0.2}>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill.name}
                    percentage={skill.level}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <FloatingCard className="p-8" delay={0.8}>
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full flex-shrink-0" />
                  <span className="text-gray-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </FloatingCard>

          {/* Experience Highlights */}
          <FloatingCard className="p-8" delay={1}>
            <h3 className="text-2xl font-bold text-white mb-6">Experience Highlights</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-white/20 pl-4">
                <h4 className="text-white font-semibold">5+ Years</h4>
                <p className="text-gray-300 text-sm">Professional Development</p>
              </div>
              
              <div className="border-l-2 border-gray-400/40 pl-4">
                <h4 className="text-white font-semibold">50+ Projects</h4>
                <p className="text-gray-300 text-sm">Successfully Delivered</p>
              </div>
              
              <div className="border-l-2 border-gray-500/40 pl-4">
                <h4 className="text-white font-semibold">15+ Technologies</h4>
                <p className="text-gray-300 text-sm">Mastered & Applied</p>
              </div>
              
              <div className="border-l-2 border-white/30 pl-4">
                <h4 className="text-white font-semibold">Open Source</h4>
                <p className="text-gray-300 text-sm">Active Contributor</p>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;