import { motion } from "framer-motion";
import { MotionValue } from "framer-motion";
import { useDockItem } from "../../../hooks";
import type { Skill } from "../../../data";

interface DockIconProps {
  skill: Skill;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const DockIcon = ({ skill, mouseX, mouseY }: DockIconProps) => {
  const { ref, scale, textOpacity } = useDockItem(mouseX, mouseY);

  return (
    <div className="relative">
      {/* Icon */}
      <motion.div
        ref={ref}
        className="flex justify-center items-center w-16 h-16"
        style={{
          scale,
          transformOrigin: "bottom center",
        }}
      >
        <svg
          className={`${skill.color} w-12 h-12`}
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={skill.path} />
        </svg>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="top-full left-1/2 absolute mt-6 -translate-x-1/2 pointer-events-none transform"
        style={{
          opacity: textOpacity,
        }}
      >
        <div className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded font-medium text-white text-xs whitespace-nowrap">
          {skill.text}
        </div>
      </motion.div>
    </div>
  );
};

export default DockIcon;
