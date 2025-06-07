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
    <section className="flex flex-col justify-center items-center px-4 min-h-screen text-center">
      <h1 className="mb-4 font-bold text-gray-900 text-4xl md:text-6xl">
        German Kostiakov
      </h1>
      <h2 className="mb-6 text-gray-600 text-xl md:text-2xl">
        Full-Stack Developer
      </h2>
      <p className="mb-8 max-w-md text-gray-500 text-lg">
        Ready to bring your digital ideas to life
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleViewWork}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors"
        >
          View My Work
        </button>
        <button
          onClick={handleLearnMore}
          className="hover:bg-blue-50 px-6 py-3 border border-blue-600 rounded-lg text-blue-600 transition-colors"
        >
          Learn More About Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
