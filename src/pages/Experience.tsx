import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'AICTE- CISCO.',
      position: 'Network Engineer',
      period: 'Sept 2024 - Nov 2024',
      location: 'Remote',
      description: 'Responsible for the design, implementation, and maintenance of network infrastructure for educational institutions.',
      achievements: [
        ' Developed and maintained network infrastructure for educational institutions.',
        ' Implemented and maintained network security protocols for educational institutions.',
        ' Developed and maintained network security protocols for educational institutions.'
      ],
      tech: ['Packet Tracer'],
      certificateLink: 'https://drive.google.com/file/d/1hVP2nKr6r2F0wzdSyGjA9GBEF_1OMRyf/view',
      certificateName: 'CISCO AICTE VIRTUAL INTERNSHIP'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="Professional Experience"
            className="text-5xl md:text-7xl font-bold mb-6"
            gradient={true}
          />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A journey of growth, learning, and creating impactful solutions across diverse industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-gray-400 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-white to-gray-400 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <FloatingCard className="p-6" delay={index * 0.2 + 0.2}>
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-gray-300 mb-3">
                      {exp.company}
                      {exp.certificateLink && (
                        <a
                          href={exp.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View Certificate
                        </a>
                      )}
                    </h4>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-white to-gray-400 rounded-full flex-shrink-0 mt-2 mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </FloatingCard>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <FloatingCard className="p-8 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">OPEN SOURCE CONTRIBUTOR</div>
                <div className="text-gray-400 text-sm">GSSOC'25 (Girlscript Summer Of code)</div>
                 <div className="text-gray-400 text-sm">OSCI'25 (Open Source Contribution India)</div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;