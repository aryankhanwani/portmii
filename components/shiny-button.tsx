"use client";

import React from "react";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
  "aria-label"?: string;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  style,
  ...props
}) => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shine-animation {
            0% {
              background-position: 200% center;
            }
            100% {
              background-position: -200% center;
            }
          }
          
          .shine-effect {
            background: linear-gradient(
              110deg,
              transparent 25%,
              rgba(255, 255, 255, 0.3) 45%,
              rgba(255, 255, 255, 0.5) 50%,
              rgba(255, 255, 255, 0.3) 55%,
              transparent 75%
            );
            background-size: 200% 100%;
            animation: shine-animation 3s ease-in-out infinite;
          }
        `
      }} />
      <motion.button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={cn(
          "group relative overflow-hidden rounded-lg px-6 py-2 font-medium transition-all duration-300 ease-in-out",
          className
        )}
        style={style}
        {...props}
      >
        <span className="relative z-10 flex items-center">
          {children}
        </span>
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-0 shine-effect"></span>
        </span>
      </motion.button>
    </>
  );
};