"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type AutoMovingGalleryProps = {
  images: {
    src: string; // Changed from StaticImageData | string to just string
    alt: string;
  }[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  showControls?: boolean;
  className?: string;
  itemClassName?: string;
};

const AutoMovingGallery: React.FC<AutoMovingGalleryProps> = ({
  images,
  showControls = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout>();
  
  // Process images to ensure they have the correct format
  const processedImages = images.map(img => ({
    src: String(img.src).startsWith('http') ? img.src : 
         String(img.src).startsWith('/') ? img.src : 
         `/${img.src}`,
    alt: img.alt
  }));
  
  const currentImage = processedImages[currentIndex];

  // Handle auto-advancing slides
  const startAutoAdvance = useCallback(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Set up new interval with 5 second duration
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % processedImages.length);
    }, 5000); // 5000ms = 5 seconds
  }, [processedImages.length]);
  
  // Start auto-advance on mount and clean up on unmount
  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoAdvance]);
  
  // Pause on hover
    
    
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % processedImages.length);
    // Restart auto-advance timer after manual navigation
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % processedImages.length);
    }, 5000);
  };
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + processedImages.length) % processedImages.length);
    // Restart auto-advance timer after manual navigation
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % processedImages.length);
    }, 5000);
  };


  return (
    <div 
      className={`relative w-full overflow-hidden group ${className}`}
          >
      {/* Main image display */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-900/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="w-full h-full object-cover"
              loading="eager"
              onError={(e) => {
                console.error('Failed to load image:', currentImage.src);
                const target = e.target as HTMLImageElement;
                target.alt = `Failed to load: ${currentImage.alt}`;
                target.className = 'w-full h-full bg-gray-800 text-white flex items-center justify-center';
                target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>';
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip */}
      {showControls && processedImages.length > 1 && (
        <div className="mt-4">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
            {processedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-purple-500 scale-105' 
                    : 'border-transparent hover:border-white/30'
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-3">
            <button 
              onClick={handlePrev}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md text-sm flex items-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Prev
            </button>
            <span className="text-sm text-gray-400">
              {currentIndex + 1} / {processedImages.length}
            </span>
            <button 
              onClick={handleNext}
              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 rounded-md text-sm flex items-center"
              aria-label="Next image"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoMovingGallery;
