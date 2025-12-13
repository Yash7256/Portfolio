"use client";

import { motion } from 'framer-motion';

export function TextHoverEffect({
  text,
  className = "",
  duration = 0.3,
  scale = 1.1,
}: {
  text: string;
  className?: string;
  duration?: number;
  scale?: number;
}) {
  return (
    <div className={`inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block hover:text-[#7c3aed] transition-colors duration-200"
          whileHover={{
            scale,
            transition: { duration },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
