"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

type HoverBorderGradientButtonProps<T extends React.ElementType> = {
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'> &
  Omit<React.ComponentProps<typeof HoverBorderGradient>, 'as' | 'children'>;

export function HoverBorderGradientButton<T extends React.ElementType = 'button'>({
  children,
  icon: Icon,
  as: Tag = 'button' as T,
  ...props
}: HoverBorderGradientButtonProps<T>) {
  // Extract HoverBorderGradient specific props
  const {
    containerClassName,
    className,
    duration,
    clockwise,
    ...restProps
  } = props as any;

  return (
    <HoverBorderGradient
      as={Tag as any}
      containerClassName={`rounded-full ${containerClassName || ''}`}
      className={`flex items-center space-x-2 px-4 py-2 ${className || ''}`}
      duration={duration}
      clockwise={clockwise}
      {...restProps}
    >
      {Icon && <Icon className="h-4 w-4" />}
      <span>{children}</span>
    </HoverBorderGradient>
  );
}

// This component is not used but kept for reference
const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
