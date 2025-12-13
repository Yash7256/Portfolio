"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface LinkPreviewProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children: React.ReactNode;
}

export function LinkPreview({ url, children, className = "", ...props }: LinkPreviewProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [previewData, setPreviewData] = React.useState<{
    title: string;
    description: string;
    image: string;
    domain: string;
    isProfilePic?: boolean;
  } | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const fetchPreview = async (url: string) => {
    try {
      setIsLoading(true);
      
      // Check if URL is a direct image
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
      const isImageUrl = imageExtensions.some(ext => url.toLowerCase().endsWith(ext));
      
      if (isImageUrl) {
        // Special handling for profile pictures (pf.png)
        const isProfilePic = url.includes('pf.png');
        
        setPreviewData({
          title: isProfilePic ? 'Profile' : 'Image Preview',
          description: '',
          image: url,
          domain: isProfilePic ? '' : new URL(url.startsWith('http') ? url : `https://${url}`).hostname.replace('www.', ''),
          isProfilePic
        });
        return;
      }
      
      // For non-image URLs, use the existing mock data logic
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const mockData = {
        title: url.includes('tailwindcss') ? 'Tailwind CSS' : 
               url.includes('framer.com') ? 'Framer Motion' :
               'Aceternity UI',
        description: url.includes('tailwindcss') ? 'A utility-first CSS framework for rapidly building custom designs.' :
                    url.includes('framer.com') ? 'A production-ready motion library for React.' :
                    'Beautiful, accessible, and modern React components.',
        image: url.includes('tailwindcss') ? 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg' :
               url.includes('framer.com') ? 'https://motion.dev/images/framer-motion.svg' :
               'https://ui.aceternity.com/opengraph-image.png',
        domain: new URL(url.startsWith('http') ? url : `https://${url}`).hostname.replace('www.', '')
      };
      
      setPreviewData(mockData);
    } catch (error) {
      console.error('Error fetching link preview:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      fetchPreview(url);
    }, 300);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative inline-block">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-flex items-center group ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
        <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 z-50"
          >
            <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
              {isLoading ? (
                <div className="p-4 flex items-center justify-center h-32">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-700 rounded"></div>
                        <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : previewData ? (
                <div className={`bg-transparent border-none shadow-none ${previewData.isProfilePic ? 'p-0' : ''}`}>
                  {previewData.image && (
                    <div className={previewData.isProfilePic ? 'w-32 h-32' : 'max-w-[200px]'}>
                      <img 
                        src={previewData.image} 
                        alt="Preview" 
                        className={`${previewData.isProfilePic ? 'w-full h-full rounded-full object-cover border-2 border-purple-500/50' : 'max-h-40 w-auto rounded-lg shadow-lg'}`}
                        style={{ maxWidth: previewData.isProfilePic ? '128px' : '200px' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-400 text-sm font-medium hover:text-[#7c3aed] transition-colors duration-200">
                  Couldn't load preview
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
