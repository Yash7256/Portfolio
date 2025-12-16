import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';
import { HoverBorderGradientButton } from '@/components/hover-border-gradient-demo';

// This would typically come from an API or shared data file
const experiences = [
  {
    id: 'cisco-aicte',
    company: 'AICTE- CISCO',
    position: 'Network Engineer',
    period: 'Sept 2024 - Nov 2024',
    location: 'Remote',
    description: 'Responsible for the design, implementation, and maintenance of network infrastructure for educational institutions.',
    responsibilities: [
      'Designed and deployed secure network infrastructure for 50+ educational institutions',
      'Reduced network downtime by 40% through proactive monitoring and maintenance',
      'Implemented automated network configuration management systems',
      'Conducted security audits and vulnerability assessments',
      'Provided technical training and support to junior engineers',
      'Collaborated with cross-functional teams to optimize network performance'
    ],
    tech: ['Cisco IOS', 'Network Security', 'BGP/OSPF', 'VLAN', 'Firewall', 'Packet Tracer', 'Wireshark', 'VPN'],
    certificateLink: 'https://drive.google.com/uc?export=view&id=1hVP2nKr6r2F0wzdSyGjA9GBEF_1OMRyf',
    certificateName: 'CISCO AICTE VIRTUAL INTERNSHIP',
    projects: [
      {
        name: 'Campus Network Redesign',
        description: 'Redesigned the network infrastructure for a major university campus, improving network performance by 60%.'
      },
      {
        name: 'Security Enhancement Initiative',
        description: 'Led a team to implement advanced security measures across multiple educational institutions.'
      }
    ]
  }
  // Add more experiences here
];

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Add a check to prevent errors if id is undefined
  const experience = id ? experiences.find(exp => exp.id === id) : null;
  
  // Add a loading state
  const [isLoading, setIsLoading] = React.useState(true);
  
  // Handle the case when the component mounts
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (experience) {
        setIsLoading(false);
      } else if (id) {
        // If we have an ID but no matching experience
        console.log('No experience found for ID:', id);
        setIsLoading(false);
      } else {
        // If no ID is provided, redirect to experience list
        console.log('No ID provided, redirecting to /experience');
        navigate('/experience');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [id, experience, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="animate-pulse text-[#a855f7]">Loading...</div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Experience Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-[#a855f7] hover:text-[#7c3aed] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-6 md:mb-8">
          <HoverBorderGradientButton
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="p-2.5 md:p-3"
            containerClassName="rounded-full"
            title="Back to Experience"
          >
            <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
          </HoverBorderGradientButton>
        </div>

        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1.5 md:mb-2">{experience.position}</h1>
          <h2 className="text-2xl md:text-3xl text-[#a855f7] mb-3 md:mb-4">{experience.company}</h2>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-5 md:mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2 text-[#a855f7]" />
              <span className="text-sm md:text-base">{experience.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2 text-[#a855f7]" />
              <span className="text-sm md:text-base">{experience.location}</span>
            </div>
          </div>
          
          <p className="text-base md:text-xl text-black mb-6 md:mb-8">{experience.description}</p>
          
          {experience.certificateLink && (
            <HoverBorderGradientButton
              as="a"
              href={experience.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-900 dark:text-white py-2 px-4 md:py-2.5 md:px-5 w-auto min-w-[140px] md:min-w-[180px] justify-center"
              containerClassName="rounded-full"
            >
              View Certificate
            </HoverBorderGradientButton>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Responsibilities */}
            <FloatingCard 
              className="p-5 md:p-6 group"
              hoverGradient="from-blue-500/20 to-cyan-400/20"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4 group-hover:text-[#3b82f6] transition-colors">Key Responsibilities</h3>
              <ul className="space-y-2.5 md:space-y-3">
                {experience.responsibilities.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    <span className="text-[#3b82f6] mr-1.5 md:mr-2 mt-1">•</span>
                    <span className="text-black text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FloatingCard>

            {/* Projects */}
            {experience.projects && experience.projects.length > 0 && (
              <FloatingCard 
                className="p-5 md:p-6 group"
                hoverGradient="from-purple-500/20 to-pink-500/20"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4 group-hover:text-[#a855f7] transition-colors">Key Projects</h3>
                <div className="space-y-5 md:space-y-6">
                  {experience.projects.map((project, index) => (
                    <motion.div 
                      key={index} 
                      className="border-l-2 border-[#a855f7] pl-3 md:pl-4 py-1 group-hover:border-[#8b5cf6] transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 500 }}
                    >
                      <h4 className="text-base md:text-lg font-medium text-[#a855f7] group-hover:text-[#8b5cf6] transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-black text-sm md:text-base">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </FloatingCard>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-5 md:space-y-6">
            {/* Technologies */}
            <FloatingCard 
              className="p-5 md:p-6 group"
              hoverGradient="from-amber-500/20 to-orange-500/20"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 md:mb-4 group-hover:text-[#f59e0b] transition-colors">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, index) => (
                  <motion.span 
                    key={index}
                    className="px-2.5 py-1 md:px-3 md:py-1 bg-white/5 text-black rounded-full text-xs md:text-sm border border-gray-200 hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/10 transition-colors cursor-default"
                    whileHover={{ 
                      y: -2,
                      scale: 1.05,
                      backgroundColor: 'rgba(245, 158, 11, 0.1)'
                    }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </FloatingCard>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
