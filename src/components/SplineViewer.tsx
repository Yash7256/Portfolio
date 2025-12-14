import React from 'react';
import { motion } from 'framer-motion';

export const SplineViewer: React.FC = () => {
  return (
    <div className="w-full h-full">
      <iframe 
        src="/spline-viewer/index.html" 
        className="w-full h-full border-0"
        title="3D Greeting"
        allowFullScreen
      />
    </div>
  );
};
