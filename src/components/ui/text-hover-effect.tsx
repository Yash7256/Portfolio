"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration = 0.5,
}: {
  text: string;
  duration?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full flex items-center justify-center">
      <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              color: [
                'rgb(255 255 255)',
                'rgb(34 211 238)',
                'rgb(96 165 250)',
                'rgb(255 255 255)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: text.length * 0.05,
              delay: i * 0.05,
              ease: "easeInOut"
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
