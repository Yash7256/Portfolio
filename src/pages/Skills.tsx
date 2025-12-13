import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from '../components/ui/FloatingCard';
import SkillBar from '../components/ui/SkillBar';
import { ExternalLink } from 'lucide-react';
import { AnimatedSectionHeading } from '../components/ui/AnimatedSectionHeading';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS/Tailwind', level: 90 },
        { name: 'Three.js/WebGL', level: 75 }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'AWS/Vercel', level: 87 },
        { name: 'Docker', level: 83 },
        { name: 'Git/GitHub', level: 93 },
        
      ]
    }
  ];

  const certifications = [
    {
      name: 'Oracle Cloud Infrastructure GEN AI Professional',
      link: 'https://drive.google.com/file/d/18E3_0Bd9DHSmM82zEFVjluvYl_UyWt-b/view'
    },
    {
      name: 'Netacad(Cisco) Junior Cyber Security Analyst',
      link: 'https://drive.google.com/file/d/1_YC3piibB_cS04o76fOaefat-E6_6r0t/view'
    },
    {
      name: 'Ethical Hacker',
      link: 'https://drive.google.com/file/d/1Zm2KnhM4gV_e-MrGqB8BPGQeIpR__rPn/view'
    },
    {
      name: 'AWS Cloud Foundations',
      link: 'https://www.credly.com/badges/8c8a6a09-a2a0-414d-8e95-84143a004b5e/public_url'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Certifications */}
        <motion.div 
          className="mt-20 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedSectionHeading title="Skills & Expertise" />
        </motion.div>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-center">
          Technologies and tools I work with to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <FloatingCard key={categoryIndex} className="p-6" delay={categoryIndex * 0.2}>
              <h3 className="text-3xl font-bold  mb-6 text-center">
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
            <h3 className="text-3xl font-bold  mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="relative group p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <button
                    onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
                    className="w-full text-left cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-gray-800 to-black dark:from-white dark:to-gray-400 rounded-full flex-shrink-0" />
                        <span className=" group-hover: transition-colors duration-300">
                          {cert.name}
                        </span>
                      </div>
                      <div 
                        className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  group-hover: transition-colors duration-300"
                      >
                        <span className="text-sm">View Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </FloatingCard>

          {/* Experience Highlights */}
          <FloatingCard className="p-8" delay={1}>
            <h3 className="text-3xl font-bold  mb-6">Experience Highlights</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-gray-300 dark:border-white/20 pl-4">
                <h4 className=" font-semibold">Open Soucre Contributor</h4>
                <p className=" text-sm">Gssoc'25</p>
                 <p className=" text-sm">OSCI'25</p>
              </div>
              
            
              
              
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;