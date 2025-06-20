// import { ShapeDivider } from "../../components";
import { MacTerminalWindow } from "./components"; // Changed this import

const About = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center p-8 py-16 md:py-24 lg:py-24 text-black"
      style={{
        background: "linear-gradient(to bottom, #d8b4fe, #fca5a5)",
      }}
    >
      <MacTerminalWindow>
        <div className="space-y-4 text-sm sm:text-base terminal-font">
          {/* File header simulation */}
          <div className="text-gray-400 terminal-font">
            <span className="terminal-font"># About German Kostiakov</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-purple-300 terminal-font">## Role:</span>
              <div className="ml-4 text-rose-200 terminal-font">
                Full-Stack Developer
              </div>
            </div>

            <div>
              <span className="text-purple-300 terminal-font">
                ## Description:
              </span>
              <div className="ml-4 text-gray-100 leading-relaxed terminal-font">
                I'm a passionate full-stack developer with a love for creating
                digital experiences that make a difference. I specialize in
                modern web technologies and enjoy solving complex problems with
                elegant solutions.
              </div>
            </div>

            <div>
              <span className="text-purple-300 terminal-font">
                ## When not coding:
              </span>
              <div className="ml-4 text-gray-100 leading-relaxed terminal-font">
                You'll find me exploring new technologies, contributing to
                open-source projects, or enjoying a good cup of coffee while
                planning my next project.
              </div>
            </div>

            <div>
              <span className="text-purple-300 terminal-font">## Contact:</span>
              <div className="space-y-1 ml-4">
                <div>
                  <span className="text-pink-300 terminal-font">email:</span>
                  <span className="text-rose-200 terminal-font">
                    {" "}
                    kostiakovg@gmail.com
                  </span>
                </div>
                <div>
                  <span className="text-pink-300 terminal-font">github:</span>
                  <span className="text-rose-200 terminal-font">
                    {" "}
                    <a
                      target="_blank"
                      href="https://github.com/German-kos"
                      className="underline"
                    >
                      github.com/german-kos
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Command prompt at bottom */}
          <div className="mt-6 pt-6">
            <span className="text-purple-300 terminal-font">german@about</span>
            <span className="text-white terminal-font">:</span>
            <span className="text-pink-300 terminal-font">~</span>
            <span className="text-white terminal-font">$ </span>
            <span className="inline-block bg-rose-300 w-2 h-5 animate-blink terminal-font"></span>
          </div>
        </div>
      </MacTerminalWindow>
    </section>
  );
};

export default About;
