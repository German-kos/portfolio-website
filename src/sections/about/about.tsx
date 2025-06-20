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
        {" "}
        {/* Changed this component */}
        <div className="space-y-4 text-sm sm:text-base terminal-font">
          {/* File header simulation */}
          <div className="text-gray-400">
            <span># About German Kostiakov</span>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-purple-300">## Role:</span>
              <div className="ml-4 text-rose-200">Full-Stack Developer</div>
            </div>

            <div>
              <span className="text-purple-300">## Description:</span>
              <div className="ml-4 text-gray-100 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating
                digital experiences that make a difference. I specialize in
                modern web technologies and enjoy solving complex problems with
                elegant solutions.
              </div>
            </div>

            <div>
              <span className="text-purple-300">## When not coding:</span>
              <div className="ml-4 text-gray-100 leading-relaxed">
                You'll find me exploring new technologies, contributing to
                open-source projects, or enjoying a good cup of coffee while
                planning my next project.
              </div>
            </div>

            <div>
              <span className="text-purple-300">## Contact:</span>
              <div className="space-y-1 ml-4">
                <div>
                  <span className="text-pink-300">email:</span>
                  <span className="text-rose-200"> your.email@example.com</span>
                </div>
                <div>
                  <span className="text-pink-300">github:</span>
                  <span className="text-rose-200">
                    {" "}
                    github.com/yourusername
                  </span>
                </div>
                <div>
                  <span className="text-pink-300">linkedin:</span>
                  <span className="text-rose-200">
                    {" "}
                    linkedin.com/in/yourusername
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Command prompt at bottom */}
          <div className="mt-6 pt-6">
            <span className="text-purple-300">german@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-pink-300">~</span>
            <span className="text-white">$ </span>
            <span className="inline-block bg-rose-300 w-2 h-5 animate-blink"></span>
          </div>
        </div>
      </MacTerminalWindow>

      {/* <ShapeDivider fill="bg-purple-300" /> */}
    </section>
  );
};

export default About;
