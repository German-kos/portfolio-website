import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BreathingBackground,
  StaticBackground,
  SymbolsBackground,
} from "./components";

const Hero = () => {
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState<
    "name" | "role" | "description" | "complete"
  >("name");

  const fullName = "German Kostiakov";
  const fullRole = "Full-Stack Developer";
  const fullDescription = "Ready to bring your digital ideas to life";

  const handleViewWork = () => {
    console.log("Viewing work...");
  };

  const handleLearnMore = () => {
    console.log("Learning more about me...");
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowName(true);
      setCurrentSection("name");

      // Track name typing progress
      let nameIndex = 0;
      const nameInterval = setInterval(() => {
        setTypingIndex(nameIndex);
        if (nameIndex >= fullName.length) {
          clearInterval(nameInterval);
          setTimeout(() => {
            setCurrentSection("role");
            setTimeout(() => setShowRole(true), 50);

            let roleIndex = 0;
            const roleInterval = setInterval(() => {
              setTypingIndex(roleIndex);
              if (roleIndex >= fullRole.length) {
                clearInterval(roleInterval);
                setTimeout(() => {
                  setCurrentSection("description");
                  setTimeout(() => setShowDescription(true), 50);

                  let descIndex = 0;
                  const descInterval = setInterval(() => {
                    setTypingIndex(descIndex);
                    if (descIndex >= fullDescription.length) {
                      clearInterval(descInterval);
                      setTimeout(() => {
                        setCurrentSection("complete");
                        setShowButtons(true);
                      }, 50);
                    }
                    descIndex++;
                  }, 12);
                }, 50);
              }
              roleIndex++;
            }, 15);
          }, 100);
        }
        nameIndex++;
      }, 40);
    }, 200);

    return () => clearTimeout(timer1);
  }, []);

  const containerAnimation = {
    hidden: {},
    visible: {},
  };

  return (
    <section className="relative flex flex-col justify-center items-center px-4 min-h-screen overflow-hidden text-center">
      <BreathingBackground />
      <SymbolsBackground />
      <StaticBackground />
      <div className="flex flex-row justify-center items-center gap-3 ml-10">
        <h1
          className="pb-7 font-bold text-white text-4xl md:text-5xl"
          style={{
            animation: "stepBlink 2s infinite",
          }}
        >
          //
        </h1>
        <motion.h1
          className="mb-4 font-bold text-white text-4xl md:text-6xl"
          variants={containerAnimation}
          initial="hidden"
          animate={showName ? "visible" : "hidden"}
        >
          {fullName.split("").map((char, index) => (
            <motion.span
              key={index}
              className={`${
                (currentSection === "name" && index < typingIndex) ||
                (currentSection !== "name" && showName)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>
      <h2 className="mb-6 min-h-[2rem] text-purple-100 text-xl md:text-2xl">
        {showRole &&
          fullRole.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                (currentSection === "role" && index < typingIndex) ||
                (currentSection === "description" && showRole) ||
                (currentSection === "complete" && showRole)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {char}
            </span>
          ))}
      </h2>
      <p className="mb-8 max-w-md min-h-[1.75rem] text-purple-200 text-lg">
        {showDescription &&
          fullDescription.split("").map((char, index) => (
            <span
              key={index}
              className={`${
                (currentSection === "description" && index < typingIndex) ||
                (currentSection === "complete" && showDescription)
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              {char}
            </span>
          ))}
      </p>
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: showButtons ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={handleViewWork}
          className="bg-rose-400 hover:bg-rose-500 px-6 py-3 rounded-lg text-white transition-colors"
        >
          View My Work
        </button>
        <button
          onClick={handleLearnMore}
          className="hover:bg-rose-400/10 px-6 py-3 border border-rose-300 rounded-lg text-rose-200 transition-colors"
        >
          Learn More About Me
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
