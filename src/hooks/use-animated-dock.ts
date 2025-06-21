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

    const y = mouseY.get();
    const bounds = ref.current.getBoundingClientRect();
    const centerX = bounds.x + bounds.width / 2;
    const centerY = bounds.y + bounds.height / 2;

    return Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
  });

  const scale = useTransform(distance, [0, 80, 160, 240], [1.8, 1.4, 1.1, 1.0]);

  const offset = useTransform(distance, (dist) => {
    if (dist > 120) return 0;

    if (!ref.current) return 0;

    const bounds = ref.current.getBoundingClientRect();
    const centerX = bounds.x + bounds.width / 2;
    const mouseXPos = mouseX.get();

    const direction = centerX < mouseXPos ? -1 : 1;
    const pushStrength = Math.max(0, (120 - dist) / 120);

    return direction * pushStrength * 20; // Max 20px offset
  });

  const textOpacity = useTransform(distance, [0, 80, 150], [1, 0.6, 0]);

  const springScale = useSpring(scale, {
    stiffness: 400,
    damping: 25,
    mass: 0.1,
  });

  const springOffset = useSpring(offset, {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  });

  const springTextOpacity = useSpring(textOpacity, {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  });

  return {
    ref,
    scale: springScale,
    offset: springOffset,
    textOpacity: springTextOpacity,
  };
};
