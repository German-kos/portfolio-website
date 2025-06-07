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
    <section>
      <h1>German Kostiakov</h1>
      <h2>Full-Stack Developer</h2>
      <p>Ready to bring your digital ideas to life</p>
      <button onClick={handleViewWork}>View My Work</button>
      <button onClick={handleLearnMore}>Learn More About Me</button>
    </section>
  );
};

export default Hero;
