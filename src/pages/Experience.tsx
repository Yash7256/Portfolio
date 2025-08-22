import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import AnimatedText from '../components/ui/AnimatedText';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      position: 'Senior Full-Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Lead development of enterprise applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led team of 5 developers on major product launches',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      tech: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: 'Developed responsive web applications and collaborated with design teams to create exceptional user experiences.',
      achievements: [
        'Built 15+ responsive web applications',
        'Improved user engagement by 35% through UX improvements',
        'Established component library used across 10+ projects'
      ],
      tech: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Firebase']
    },
    {
      company: 'StartupXYZ',
      position: 'Junior Developer',
      period: '2019 - 2020',
      location: 'Remote',
      description: 'Contributed to early-stage startup building innovative fintech solutions. Gained experience in rapid prototyping and agile development.',
      achievements: [
        'Developed MVP that secured $1M in seed funding',
        'Implemented payment processing system',
        'Contributed to mobile app with 10K+ downloads'
      ],
      tech: ['JavaScript', 'React', 'Python', 'MongoDB', 'Stripe API']
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
                <div className="text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </FloatingCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;