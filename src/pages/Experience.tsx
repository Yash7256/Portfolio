import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingCard from '../components/ui/FloatingCard';

const Experience: React.FC = () => {
  const [expandedCard, setExpandedCard] = React.useState<number | null>(null);

  const experiences = [
    {
      id: 'cisco-aicte',
      company: 'AICTE- CISCO',
      position: 'Network Engineer',
      period: 'Sept 2024 - Nov 2024',
      location: 'Remote',
      description: 'Responsible for the design, implementation, and maintenance of network infrastructure for educational institutions.',
      achievements: [
        'Designed and deployed secure network infrastructure for 50+ educational institutions',
        'Reduced network downtime by 40% through proactive monitoring and maintenance',
        'Implemented automated network configuration management systems',
        'Conducted security audits and vulnerability assessments'
      ],
      tech: ['Cisco IOS', 'Network Security', 'BGP/OSPF', 'VLAN', 'Firewall', 'Packet Tracer'],
      certificateLink: 'https://drive.google.com/uc?export=view&id=1hVP2nKr6r2F0wzdSyGjA9GBEF_1OMRyf',
      certificateName: 'CISCO AICTE VIRTUAL INTERNSHIP',
      shortDescription: 'Network infrastructure design and implementation for educational institutions.'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-950 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent flex-1" />
            <h2 className="mx-6 text-2xl font-bold text-white">Professional Experience</h2>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent flex-1" />
          </div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A journey of growth, learning, and creating impactful solutions across diverse industries.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -50px 0px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Accent */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300 group-hover:duration-200" />
              
              <FloatingCard 
                className="p-0 overflow-hidden relative bg-gradient-to-br from-gray-800/50 to-gray-900/70 border border-gray-700/50"
                delay={index * 0.1}
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                          <div className="flex items-center text-cyan-400">
                            {exp.company}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="relative group">
                            <Link
                              to={`/experience/${exp.id}`}
                              className="group relative inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                            >
                              View Details
                              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCard(expandedCard === index ? null : index);
                            }}
                            className="p-1 -m-1"
                          >
                            {expandedCard === index ? (
                              <ChevronDown className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center space-x-1.5 bg-gray-800/50 px-2.5 py-1 rounded-full border border-gray-700/50">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 bg-gray-800/50 px-2.5 py-1 rounded-full border border-gray-700/50">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{exp.shortDescription || exp.description}</p>
                  
                  {/* Technologies */}
                  {exp.tech && exp.tech.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <motion.span 
                            key={i}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 text-gray-200 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                            whileHover={{ 
                              y: -2,
                              boxShadow: '0 5px 15px -5px rgba(34, 211, 238, 0.2)'
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Toggle Button */}
                  <button 
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="mt-4 flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 group"
                  >
                    {expandedCard === index ? (
                      <>
                        <span>Show less</span>
                        <ChevronDown className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-y-0.5" />
                      </>
                    ) : (
                      <>
                        <span>View achievements</span>
                        <ChevronRight className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
                
                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    marginTop: '1.5rem',
                    transition: { 
                      opacity: { duration: 0.3 },
                      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                      marginTop: { duration: 0.4 }
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0, 
                    marginTop: 0,
                    transition: { 
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                      marginTop: { duration: 0.3 }
                    }
                  }}
                  className="overflow-hidden border-t border-gray-700/50 pt-6"
                >
                  <h5 className="text-sm font-semibold text-cyan-300 mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2"></span>
                    KEY ACHIEVEMENTS
                  </h5>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            delay: 0.1 * i,
                            duration: 0.3 
                          } 
                        }}
                      >
                        <span className="text-cyan-400 mr-3 mt-1">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6L5.59808 0H0.401924L3 6Z" fill="currentColor"/>
                          </svg>
                        </span>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;