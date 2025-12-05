'use client';

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, BookOpen, Image as ImageIcon } from 'lucide-react';
import { projects, Project } from '../data';
import { HoverBorderGradientButton } from '@/components/hover-border-gradient-demo';
import AutoMovingGallery from '@/components/AutoMovingGallery';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with a small delay
    const timer = setTimeout(() => {
      const foundProject = projects.find((p: Project) => p.id === id);
      setProject(foundProject);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-pulse text-2xl text-green-400">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
        <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <HoverBorderGradientButton
            as={Link}
            to="/projects"
            icon={ArrowLeft}
            className="bg-green-700 hover:bg-green-800"
          >
            Back to Projects
          </HoverBorderGradientButton>
        </div>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4 bg-gradient-to-r from-green-400 to-lime-400">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">{project.tagline || project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech: string, index: number) => {
                                  return (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full border bg-green-900/40 text-green-200 border-green-500/40"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <HoverBorderGradientButton
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={Github}
                  >
                    View on GitHub
                  </HoverBorderGradientButton>
                )}
                {project.demo && (
                  <HoverBorderGradientButton
                    as="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={ExternalLink}
                  >
                    Live Demo
                  </HoverBorderGradientButton>
                )}
                <HoverBorderGradientButton
                  as="a"
                  href="#case-study"
                  icon={BookOpen}
                >
                  Case Study
                </HoverBorderGradientButton>
              </div>
            </div>

            {project.screenshots && project.screenshots.length > 0 ? (
              <div className="w-full md:w-1/2 lg:w-2/5">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-400">
                <ImageIcon className="w-5 h-5 mr-2" />
                Gallery
              </h3>
                <div className="rounded-xl overflow-hidden">
                  <AutoMovingGallery 
                    images={project.screenshots.map((src: string, index: number) => ({
                      src,
                      alt: `${project.title} screenshot ${index + 1}`
                    }))}
                    speed={0.8}
                    direction="left"
                    pauseOnHover={true}
                    className="h-64"
                  />
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-full md:w-1/2 lg:w-2/5 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Description */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h2 className="text-2xl font-bold mb-4 text-green-400">
              About the Project
            </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>
            </motion.section>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <h2 className="text-2xl font-bold mb-6 text-green-400">
                  Key Features
                </h2>
                <div className="grid gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                      </div>
                      <p className="ml-3 text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Right Column - Project Meta */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                Tech Stack
              </h3>
              <div className="space-y-3">
                {project.techDetails?.map((tech: { name: string; items: string[] }, index: number) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">{tech.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-green-900/30 text-green-200 border border-green-500/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-4"
            >
              <h3 className="text-lg font-semibold text-green-400">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.links?.map((link: { label: string; url: string; icon?: string }, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-green-600/30 bg-green-900/20 hover:bg-green-800/30 hover:border-green-500/50 transition-colors"
                  >
                    {link.icon && <span className="text-green-400">{link.icon}</span>}
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Project Stats */}
            {project.stats && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-4"
              >
                <h3 className="text-lg font-semibold text-green-400">
                  Project Stats
                </h3>
                <div className="space-y-3">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-medium">{value as string}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
