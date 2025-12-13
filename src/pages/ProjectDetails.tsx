'use client';

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, BookOpen, Image as ImageIcon } from 'lucide-react';
import { projects, Project } from '../data';
import { HoverBorderGradientButton } from '@/components/hover-border-gradient-demo';
import AutoMovingGallery from '@/components/AutoMovingGallery';
import FloatingCard from '@/components/ui/FloatingCard';

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
        <div className="animate-pulse text-2xl text-[#a855f7]">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
        <h1 className="text-3xl font-bold  mb-4">Project Not Found</h1>
        <p className=" mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-violet-600 hover:bg-violet-700  rounded-lg flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <HoverBorderGradientButton
            as={Link}
            to="/projects"
            icon={ArrowLeft}
            className="bg-transparent hover:bg-white/10"
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
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-4 bg-gradient-to-r from-violet-600 to-purple-500">
                {project.title}
              </h1>
              <p className="text-xl  mb-6">{project.tagline || project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech: string, index: number) => {
                                  return (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full border bg-white/10 text-gray-700 dark:text-purple-200 border-gray-300/40 dark:bg-purple-900/40 dark:border-purple-500/40"
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
                <h3 className="text-xl font-semibold mb-4 flex items-center text-[#a855f7]">
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
            <FloatingCard delay={0.2} className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#a855f7]">
              About the Project
            </h2>
              <div className="prose prose-invert max-w-none">
                <p className=" leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>
            </FloatingCard>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <FloatingCard delay={0.3} className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#a855f7]">
                  Key Features
                </h2>
                <div className="grid gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#a855f7] mt-2" />
                      </div>
                      <p className="ml-3 ">{feature}</p>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            )}
          </div>

          {/* Right Column - Project Meta */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <FloatingCard delay={0.3} className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-[#a855f7]">
                Tech Stack
              </h3>
              <div className="space-y-3">
                {project.techDetails?.map((tech: { name: string; items: string[] }, index: number) => (
                  <div key={index}>
                    <h4 className="text-sm font-medium mb-1">{tech.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.items.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/10 text-gray-700 dark:text-purple-200 border border-gray-300/40 dark:bg-purple-900/30 dark:border-purple-500/40"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FloatingCard>

            <FloatingCard delay={0.4} className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#a855f7]">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.links?.map((link: { label: string; url: string; icon?: string }, index: number) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 rounded-lg border border-gray-300/50 bg-white/50 hover:bg-white/70 dark:border-purple-600/30 dark:bg-purple-900/20 dark:hover:bg-purple-800/30 dark:hover:border-purple-500/50 transition-colors"
                  >
                    {link.icon && <span className="text-[#a855f7]">{link.icon}</span>}
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 ml-auto " />
                  </a>
                ))}
              </div>
            </FloatingCard>

            {project.stats && (
              <FloatingCard delay={0.5} className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-[#a855f7]">
                  Project Stats
                </h3>
                <div className="space-y-3">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-medium">{value as string}</span>
                    </div>
                  ))}
                </div>
              </FloatingCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
