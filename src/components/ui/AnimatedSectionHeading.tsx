"use client";

import { motion } from "framer-motion";

interface AnimatedSectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  lineColor?: string;
  lineWidth?: string | number;
  lineHeight?: string | number;
}

export function AnimatedSectionHeading({
  title,
  subtitle,
  className = "",
  lineColor = "from-purple-500/30",
  lineWidth = 200,
  lineHeight = 1,
}: AnimatedSectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px 0px" }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-12 ${className}`}
    >
      <div className="flex items-center justify-center mb-4">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: lineWidth, opacity: 1 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-[${lineHeight}px] bg-gradient-to-r from-transparent ${lineColor} to-transparent`}
        />
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mx-6 text-2xl sm:text-3xl font-bold text-white whitespace-nowrap"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: lineWidth, opacity: 1 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`h-[${lineHeight}px] bg-gradient-to-r from-transparent ${lineColor} to-transparent`}
        />
      </div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px 0px" }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
