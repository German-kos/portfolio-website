import { motion } from "framer-motion";
import { ResponsiveBackground } from "./components";
import { useTypingAnimation } from "./hooks";
import {
  DELAYS,
  FADE_DURATION,
  TYPING_SECTIONS,
  WIGGLE_ANIMATION,
} from "./constants";

const Hero = () => {
  const typingState = useTypingAnimation(TYPING_SECTIONS, DELAYS.INITIAL);

  const {
    showName,
    showRole,
    showDescription,
    showButtons,
    typingIndex,
    currentSection,
  } = typingState;

  const handleViewWork = () => {
    console.log("Viewing work...");
  };

  const handleLearnMore = () => {
    console.log("Learning more about me...");
  };

  const leftButtonWiggleVariants = {
    wiggle: {
      rotate: WIGGLE_ANIMATION.ROTATION_PATTERN,
      transition: {
        duration: WIGGLE_ANIMATION.DURATION,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatDelay: WIGGLE_ANIMATION.REPEAT_DELAY,
        delay: WIGGLE_ANIMATION.INITIAL_DELAY,
      },
    },
  };

  const rightButtonWiggleVariants = {
    wiggle: {
      rotate: WIGGLE_ANIMATION.ROTATION_PATTERN,
      transition: {
        duration: WIGGLE_ANIMATION.DURATION,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatDelay: WIGGLE_ANIMATION.REPEAT_DELAY,
        delay: WIGGLE_ANIMATION.INITIAL_DELAY + WIGGLE_ANIMATION.STAGGER_DELAY,
      },
    },
  };

  const containerAnimation = {
    hidden: {},
    visible: {},
  };

  // Helper function to render typing text
  const renderTypingText = (
    text: string,
    isVisible: boolean,
    sectionName: "name" | "role" | "description"
  ) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`${
          (currentSection === sectionName && index < typingIndex) ||
          (currentSection !== sectionName && isVisible)
            ? "opacity-100"
            : "opacity-0"
        }`}
      >
        {char}
      </span>
    ));
  };

  return (
    <section className="relative flex flex-col min-[425px]:justify-center items-center px-4 pt-12 min-[425px]:pt-0 min-h-screen overflow-hidden md:text-center">
      {/* Background */}
      <ResponsiveBackground />

      {/* Name Section */}
      <div className="flex flex-row md:justify-center md:items-center gap-1.5 min-[640px]:gap-2 min-[768px]:gap-3 md:ml-10">
        <h1
          className="pb-7 font-bold text-[28px] text-white min-[425px]:text-4xl min-[640px]:text-5xl min-[768px]:text-6xl"
          style={{
            animation: "stepBlink 2s infinite",
          }}
        >
          //
        </h1>
        <motion.h1
          className="mb-4 font-bold text-[28px] text-white min-[425px]:text-4xl min-[640px]:text-5xl min-[768px]:text-6xl"
          variants={containerAnimation}
          initial="hidden"
          animate={showName ? "visible" : "hidden"}
        >
          {renderTypingText(TYPING_SECTIONS[0].text, showName, "name")}
        </motion.h1>
      </div>

      {/* Role Section */}
      <h2 className="mb-6 min-[768px]:min-h-[2rem] text-purple-100 min-[640px]:text-xl min-[768px]:text-2xl">
        {showRole &&
          renderTypingText(TYPING_SECTIONS[1].text, showRole, "role")}
      </h2>

      {/* Description Section */}
      <p className="mb-8 max-w-md min-h-[1.75rem] text-purple-200 text-sm min-[325px]:text-base min-[768px]:text-lg">
        {showDescription &&
          renderTypingText(
            TYPING_SECTIONS[2].text,
            showDescription,
            "description"
          )}
      </p>

      {/* Buttons */}
      <motion.div
        className="flex min-[425px]:flex-row flex-col gap-6 min-[425px]:gap-4 w-[290px] min-[425px]:w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: showButtons ? 1 : 0 }}
        transition={{ duration: FADE_DURATION }}
      >
        <motion.button
          onClick={handleViewWork}
          className="bg-rose-400 hover:bg-rose-500 px-6 py-3 rounded-lg text-white transition-colors hover:cursor-pointer"
          variants={leftButtonWiggleVariants}
          animate={showButtons ? "wiggle" : ""}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
        <motion.button
          onClick={handleLearnMore}
          className="hover:bg-rose-400/10 px-6 py-3 border border-rose-300 rounded-lg text-rose-200 transition-colors hover:cursor-pointer"
          variants={rightButtonWiggleVariants}
          animate={showButtons ? "wiggle" : ""}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More About Me
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
