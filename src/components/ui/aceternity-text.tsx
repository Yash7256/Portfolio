"use client";

import { motion } from 'framer-motion';

interface AceternityTextProps {
  text: string;
  className?: string;
  duration?: number;
  scale?: number;
}

export function AceternityText({
  text,
  className = "",
  duration = 0.3,
  scale = 1.05,
}: AceternityTextProps) {
  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          whileHover={{
            scale,
            backgroundImage: 'linear-gradient(to right, #38bdf8, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transition: { duration },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
