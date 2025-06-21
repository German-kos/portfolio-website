import { BlobProfileImage, MacTerminalWindow } from "./components"; // Changed this import

const About = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center p-8 py-8 md:py-8 lg:py-4 text-black"
      style={{
        background: "linear-gradient(to bottom, #d8b4fe, #fca5a5)",
      }}
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="font-bold text-gray-800 text-5xl md:text-5xl">
          About Me
        </h2>
        <p className="mt-3 text-gray-600 text-2xl terminal-font">
          // Get to know the developer
        </p>
      </div>

      {/* Layout Container */}
      <div className="flex justify-center items-center gap-12 w-full max-w-7xl">
        <MacTerminalWindow>
          <div className="space-y-3 text-sm sm:text-base terminal-font">
            {/* File header simulation */}
            <div className="text-gray-400 terminal-font">
              <span className="terminal-font"># About German Kostiakov</span>
            </div>

            {/* Terminal content */}
            {/* Role */}
            <div className="space-y-3">
              <div>
                <span className="text-cyan-300 terminal-font">## Role:</span>
                <div className="ml-4 text-green-300 terminal-font">
                  Full-Stack Developer
                </div>
              </div>

              {/* Description */}
              <div>
                <span className="text-cyan-300 terminal-font">
                  ## Description:
                </span>
                <div className="ml-4 text-gray-100 leading-relaxed terminal-font">
                  I'm a passionate full-stack developer with a love for creating
                  digital experiences that make a difference. I specialize in
                  modern web technologies and enjoy solving complex problems
                  with elegant solutions.
                </div>
              </div>

              {/* About */}
              <div>
                <span className="text-cyan-300 terminal-font">
                  ## When not coding:
                </span>
                <div className="ml-4 text-gray-100 leading-relaxed terminal-font">
                  You'll find me exploring new technologies, contributing to
                  open-source projects, or enjoying a good cup of coffee while
                  planning my next project.
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <span className="text-cyan-300 terminal-font">## Contact:</span>
                <div className="space-y-1 ml-4">
                  <div>
                    <span className="text-yellow-300 terminal-font">
                      email:
                    </span>
                    <span className="text-white terminal-font">
                      {" "}
                      kostiakovg@gmail.com
                    </span>
                  </div>
                  <div>
                    <span className="text-yellow-300 terminal-font">
                      github:
                    </span>
                    <span className="text-white terminal-font">
                      {" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/German-kos"
                        className="hover:text-cyan-300 underline"
                      >
                        github.com/german-kos
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Command Simulation */}
            <div className="mt-6 pt-6">
              <span className="text-green-400 terminal-font">german@about</span>
              <span className="text-white terminal-font">:</span>
              <span className="text-blue-400 terminal-font">~</span>
              <span className="text-white terminal-font">$ </span>
              <span className="inline-block bg-white w-2 h-5 align-text-bottom animate-blink terminal-font"></span>
            </div>
          </div>
        </MacTerminalWindow>

        <BlobProfileImage
          imageSrc="/images/german.jpg"
          altText="German Kostiakov"
        />
      </div>

      {/* Decorative Blob Background */}
    </section>
  );
};

export default About;
