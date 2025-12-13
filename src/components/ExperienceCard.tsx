import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Trophy, Award } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  certificateUrl?: string;
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  location,
  description,
  achievements,
  technologies = [],
  certificateUrl,
  className = '',
}) => {
  // Default technologies if none provided
  const defaultTechs = [
    'Cisco iOS', 'VLANs', 'Firewalls', 'BGP', 'OSPF', 
    'Packet Tracer', 'Network Security', 'TCP/IP'
  ];
  const displayTechs = technologies.length > 0 ? technologies : defaultTechs;

  return (
    <motion.div
      className={`relative p-8 rounded-2xl overflow-hidden group ${className}`}
      style={{
        background: 'rgba(20, 20, 30, 0.6)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        y: -8,
        scale: 1.03,
        borderColor: 'rgba(124, 58, 237, 0.3)',
        boxShadow: '0 12px 40px -10px rgba(124, 58, 237, 0.15)',
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      whileTap={{
        scale: 0.98,
        y: -2,
        transition: { type: 'spring', stiffness: 500, damping: 30 }
      }}
    >
      {/* Certificate Thumbnail */}
      <div className="absolute left-8 top-8 w-20 h-20 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-violet-600/30">
        {certificateUrl ? (
          <img 
            src={certificateUrl} 
            alt="Certificate" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white/30 text-xs text-center p-2">
            <Award className="w-6 h-6 mx-auto mb-1" />
            Certificate
          </div>
        )}
      </div>

      {/* View Certificate Button */}
      {certificateUrl && (
        <motion.a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-8 right-8 flex items-center space-x-2 text-violet-600 text-sm font-medium bg-violet-600/10 hover:bg-violet-600/20 px-4 py-2 rounded-lg border border-violet-600/20 transition-all duration-300 group-hover:border-violet-600/40 group-hover:shadow-lg group-hover:shadow-violet-600/10"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      )}

      {/* Content */}
      <div className={`ml-32 ${!certificateUrl ? 'pr-16' : ''}`}>
        {/* Job Title & Company */}
        <div className="mb-1">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-lg text-purple-400 font-medium">{company}</p>
        </div>
        
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-3 my-4">
          <span className="flex items-center text-sm text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
            <Calendar className="w-4 h-4 mr-1.5 text-purple-500 flex-shrink-0" />
            {duration}
          </span>
          <span className="flex items-center text-sm text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">
            <MapPin className="w-4 h-4 mr-1.5 text-purple-500 flex-shrink-0" />
            {location}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-200 mb-6 leading-relaxed">{description}</p>

        {/* Key Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center text-purple-500 font-medium mb-3">
              <Trophy className="w-5 h-5 mr-2 text-purple-500" />
              <h4 className="text-lg">Key Achievements</h4>
            </div>
            <ul className="space-y-2.5 pl-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-200 text-sm flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 mr-3 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {displayTechs.length > 0 && (
          <div className="pt-4 mt-6 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {displayTechs.map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-3 py-1.5 text-xs font-medium bg-gray-800/40 text-gray-200 rounded-full border border-gray-700/50 hover:bg-gray-700/50 hover:border-violet-600/30 transition-all duration-300"
                  whileHover={{ 
                    y: -2,
                    backgroundColor: 'rgba(30, 41, 59, 0.6)',
                    borderColor: 'rgba(77, 212, 172, 0.4)'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
