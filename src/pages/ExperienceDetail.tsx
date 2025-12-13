import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import FloatingCard from '../components/ui/FloatingCard';

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
          <h1 className="text-4xl font-bold  mb-4">Experience Not Found</h1>
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-[#a855f7] hover:text-[#7c3aed] transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </button>
        </div>

        {/* Experience Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold  mb-2">{experience.position}</h1>
          <h2 className="text-3xl text-[#a855f7] mb-4">{experience.company}</h2>
          
          <div className="flex flex-wrap items-center gap-6  mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-[#a855f7]" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-[#a855f7]" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          <p className="text-xl  mb-8">{experience.description}</p>
          
          {experience.certificateLink && (
            <a
              href={experience.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-[#a855f7] text-[#a855f7] rounded-md hover:bg-[#a855f7]/10 transition-colors"
            >
              <Award className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>View Certificate</span>
            </a>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Responsibilities */}
            <FloatingCard className="p-6">
              <h3 className="text-2xl font-semibold  mb-4">Key Responsibilities</h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-[#a855f7] mr-2">•</span>
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </FloatingCard>

            {/* Projects */}
            {experience.projects && experience.projects.length > 0 && (
              <FloatingCard className="p-6">
                <h3 className="text-2xl font-semibold  mb-4">Key Projects</h3>
                <div className="space-y-6">
                  {experience.projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-[#a855f7] pl-4 py-1">
                      <h4 className="text-lg font-medium text-[#a855f7]">{project.name}</h4>
                      <p className="">{project.description}</p>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Technologies */}
            <FloatingCard className="p-6">
              <h3 className="text-2xl font-semibold  mb-4">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 text-[#a855f7] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </FloatingCard>

            {/* Certificate */}
            {experience.certificateLink && (
              <FloatingCard className="p-6">
                <h3 className="text-2xl font-semibold  mb-4">Certification</h3>
                <div className="space-y-4">
                  <p className="">{experience.certificateName}</p>
                  <a
                    href={experience.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#a855f7] hover:text-[#7c3aed] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </a>
                </div>
              </FloatingCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
