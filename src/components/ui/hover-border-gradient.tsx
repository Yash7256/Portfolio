"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(30% 60% at 50% 0%, hsl(192, 100%, 60%) 0%, rgba(50, 117, 248, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(30% 60% at 0% 50%, hsl(192, 100%, 60%) 0%, rgba(50, 117, 248, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(30% 60% at 50% 100%, hsl(192, 100%, 60%) 0%, rgba(50, 117, 248, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(30% 60% at 100% 50%, hsl(192, 100%, 60%) 0%, rgba(50, 117, 248, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(100% 200% at 50% 50%, #00d4ff 0%, #3275F8 50%, rgba(0, 0, 0, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border-2 border-transparent content-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 dark:from-cyan-500/10 dark:to-blue-500/10 dark:hover:from-cyan-500/20 dark:hover:to-blue-500/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-[2px] decoration-clone w-fit shadow-lg hover:shadow-cyan-500/20 dark:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ opacity: 0.8, scale: 0.95 }}
        animate={{
          background: hovered ? highlight : movingMap[direction],
          opacity: hovered ? 1 : 0.8,
          scale: hovered ? 1.02 : 1
        }}
        transition={{ 
          background: { duration: 0.3, ease: "easeInOut" },
          opacity: { duration: 0.2 },
          scale: { duration: 0.2 }
        }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
