import React from 'react';
import { motion } from 'framer-motion';
import FloatingCard from '../components/ui/FloatingCard';
import SkillBar from '../components/ui/SkillBar';
import { ExternalLink, X } from 'lucide-react';
import { certifications } from '../data';
import { useState } from 'react';
import { AnimatedSectionHeading } from '../components/ui/AnimatedSectionHeading';

// Categorize certifications
const globalCerts = certifications.filter(cert => cert.type === 'global');
const generalCerts = certifications.filter(cert => cert.type === 'general');

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'global' | 'general'>('global');
  const [showModal, setShowModal] = useState(false);
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '💻',
      skills: [
        { name: 'React/Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'CSS/Tailwind', level: 90 },
        { name: 'Three.js/WebGL', level: 75 },
        { name: 'React Native', level: 70 },
        { name: 'Redux/Context API', level: 85 }
      ]
    },
    {
      title: 'Backend & DevOps',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express/NestJS', level: 75 },
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Docker', level: 83 },
        { name: 'AWS/Vercel', level: 87 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 93 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 85 },
        { name: 'Linux/Unix', level: 80 },
        { name: 'CI/CD', level: 78 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 overflow-x-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Certifications */}
        <motion.div 
          className="mt-16 md:mt-20 mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -50px 0px' }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedSectionHeading title="Skills & Expertise" />
        </motion.div>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed text-center text-gray-800 dark:text-gray-300">
          Technologies and tools I work with to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <FloatingCard 
              key={categoryIndex} 
              className="p-5 md:p-6 group" 
              delay={categoryIndex * 0.1}
              hoverGradient={
                categoryIndex % 3 === 0 ? 'from-blue-500/20 to-cyan-400/20' : 
                categoryIndex % 3 === 1 ? 'from-purple-500/20 to-pink-500/20' : 
                'from-amber-500/20 to-orange-500/20'
              }
            >
              <div className="flex flex-col items-center mb-5 md:mb-6">
                <span className="text-3xl md:text-4xl mb-2" role="img" aria-label={category.title}>
                  {category.icon}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white text-center group-hover:text-[#a855f7] transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * skillIndex }}
                  >
                    <SkillBar
                      skill={skill.name}
                      percentage={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  </motion.div>
                ))}
              </div>
            </FloatingCard>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
              Certifications
            </h3>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
              Recognized expertise and professional accomplishments
            </p>
            
            <div className="inline-flex rounded-full p-1 bg-gray-100 dark:bg-gray-800 mb-6 md:mb-8">
              <button
                onClick={() => setActiveTab('global')}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === 'global' 
                    ? 'bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Global Certifications
              </button>
              <button
                onClick={() => setActiveTab('general')}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  activeTab === 'general' 
                    ? 'bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 shadow-md' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                General Certifications
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {(activeTab === 'global' ? globalCerts : generalCerts).slice(0, 4).map((cert, index) => {
              const isCredly = cert.link.includes('credly');
              const isGoogleDrive = cert.link.includes('google.com');
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px 0px' }}
                  transition={{ 
                    delay: 0.1 * index,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative h-full bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-0.5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 p-5 md:p-6 rounded-[15px] flex flex-col">
                      <div className="flex items-start space-x-3 md:space-x-4 mb-3 md:mb-4">
                        <div className="flex-shrink-0 mt-1">
                          {isCredly ? (
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                              <span className="text-white font-bold text-sm md:text-base">C</span>
                            </div>
                          ) : isGoogleDrive ? (
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                                <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                              <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors line-clamp-2">
                            {cert.name}
                          </h4>
                          <div className="flex items-center mt-1 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                            <span>{isCredly ? 'Credly' : isGoogleDrive ? 'Google Drive' : 'Certificate'}</span>
                            <span className="mx-1 md:mx-2">•</span>
                            <span>Verified</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100 dark:border-gray-800">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(cert.link, '_blank', 'noopener,noreferrer');
                          }}
                          className="w-full flex items-center justify-between group-hover:text-purple-500 transition-colors text-xs md:text-sm font-medium"
                        >
                          <span>View {isCredly ? 'Badge' : 'Certificate'}</span>
                          <span className="inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors">
                            <ExternalLink className="w-3 md:w-3.5 md:h-3.5" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* View All Button */}
            <div className="col-span-full flex justify-center mt-6 md:mt-8">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center text-sm md:text-base"
              >
                View All {activeTab === 'global' ? 'Global' : 'General'} Certifications
                <ExternalLink className="ml-1 md:ml-2 w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Certifications Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <div className="sticky top-0 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
                <h3 className="text-xl font-bold">
                  {activeTab === 'global' ? 'Global' : 'General'} Certifications
                </h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {(activeTab === 'global' ? globalCerts : generalCerts).map((cert, index) => {
                  const isCredly = cert.link.includes('credly');
                  const isGoogleDrive = cert.link.includes('google.com');
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5 }}
                      className="group relative"
                    >
                      <div className="relative h-full bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-0.5 overflow-hidden border border-gray-200 dark:border-gray-700">
                        <div className="relative h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80 p-6 rounded-[15px] flex flex-col">
                          <div className="flex items-start space-x-4 mb-4">
                            <div className="flex-shrink-0 mt-1">
                              {isCredly ? (
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                  <span className="text-white font-bold">C</span>
                                </div>
                              ) : isGoogleDrive ? (
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                                    <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                                {cert.name}
                              </h4>
                              <div className="flex items-center mt-1 text-sm text-gray-500 dark:text-gray-400">
                                <span>{isCredly ? 'Credly' : isGoogleDrive ? 'Google Drive' : 'Certificate'}</span>
                                <span className="mx-2">•</span>
                                <span>Verified</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                window.open(cert.link, '_blank', 'noopener,noreferrer');
                              }}
                              className="w-full flex items-center justify-between group-hover:text-purple-500 transition-colors text-sm font-medium"
                            >
                              <span>View {isCredly ? 'Badge' : 'Certificate'}</span>
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;