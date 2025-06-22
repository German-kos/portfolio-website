// src/hooks/use-animated-dock.ts
import {
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

export const useAnimatedDock = () => {
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  return { mouseX, mouseY };
};

export const useDockItem = (
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (x) => {
    if (!ref.current) return 999;

    const bounds = ref.current.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const y = mouseY.get();

    return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
  });

  // Bigger magnification - increased from 1.5 to 2.0
  const scale = useTransform(distance, [0, 100, 200], [2.0, 1.4, 1.0]);
  const textOpacity = useTransform(distance, [0, 80, 120], [1, 0.5, 0]);

  const springScale = useSpring(scale, {
    stiffness: 400,
    damping: 30,
    mass: 0.5,
  });

  const springTextOpacity = useSpring(textOpacity, {
    stiffness: 400,
    damping: 30,
    mass: 0.5,
  });

  return {
    ref,
    scale: springScale,
    textOpacity: springTextOpacity,
  };
};
