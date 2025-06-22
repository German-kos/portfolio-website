import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimatedDock } from "../../../hooks";
import { skills } from "../../../data/skills";
import DockIcon from "./dock-icon";

const Dock = () => {
  const { mouseX, mouseY } = useAnimatedDock();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
        setIsHovered(false);
      }}
      className="flex justify-center items-end mb-16"
    >
      <motion.div
        className="flex justify-center items-center bg-gray-900/80 shadow-2xl backdrop-blur-xl px-6 py-4 border border-white/20 rounded-2xl transition-all duration-300 ease-out"
        style={{
          gap: isHovered ? "1.75rem" : "0.75rem",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {skills.map((skill) => (
          <DockIcon
            key={skill.text}
            skill={skill}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Dock;
