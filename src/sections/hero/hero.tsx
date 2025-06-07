import { BreathingBackground, StaticBackground } from "./components";

const Hero = () => {
  const handleViewWork = () => {
    // Logic to handle viewing work
    console.log("Viewing work...");
  };

  const handleLearnMore = () => {
    // Logic to handle learning more about the developer
    console.log("Learning more about me...");
  };

  return (
    <section className="relative flex flex-col justify-center items-center px-4 min-h-screen overflow-hidden text-center">
      <BreathingBackground />
      <StaticBackground />
      <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl">
        German Kostiakov
      </h1>
      <h2 className="mb-6 text-purple-100 text-xl md:text-2xl">
        Full-Stack Developer
      </h2>
      <p className="mb-8 max-w-md text-purple-200 text-lg">
        Ready to bring your digital ideas to life
      </p>
      <div className="flex gap-4">
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
      </div>
    </section>
  );
};

export default Hero;
