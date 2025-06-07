"use client";

import { motion } from "framer-motion";

export const BreathingBackground = () => {
  return (
    <div className="z-[-2] absolute inset-0 overflow-hidden">
      <motion.div
        className="z-[-2] absolute inset-0 bg-[radial-gradient(circle_at_center,_#60A5FA_0%,_#3B82F6_50%,_#1E40AF_80%,_#0F172A_100%)] bg-cover bg-no-repeat bg-center w-full h-full"
        animate={{
          scale: [1, 1.6, 1],
          backgroundPosition: ["center", "52% 48%", "center"],
          opacity: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};
