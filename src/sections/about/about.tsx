// import { ShapeDivider } from "../../components";
import { GlassMacWindow } from "./components";

const About = () => {
  return (
    <section className="relative flex flex-col justify-center items-center bg-gradient-to-b from-purple-300 to-red-300 p-8 min-h-screen text-black">
      <GlassMacWindow>
        <div className="space-y-8">
          <h1 className="font-bold text-gray-900 text-4xl lg:text-5xl md:text-left text-center">
            About Me
          </h1>

          <div className="items-start gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2">
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a passionate full-stack developer with a love for creating
                digital experiences that make a difference. I specialize in
                modern web technologies and enjoy solving complex problems with
                elegant solutions.
              </p>

              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while planning my next project.
              </p>

              {/* Skills Preview */}
              {/* <div className="flex flex-wrap gap-2">
                <span className="bg-rose-400/20 px-3 py-1 rounded-full font-medium text-rose-700 text-sm">
                  React
                </span>
                <span className="bg-rose-400/20 px-3 py-1 rounded-full font-medium text-rose-700 text-sm">
                  TypeScript
                </span>
                <span className="bg-rose-400/20 px-3 py-1 rounded-full font-medium text-rose-700 text-sm">
                  Node.js
                </span>
                <span className="bg-rose-400/20 px-3 py-1 rounded-full font-medium text-rose-700 text-sm">
                  Tailwind CSS
                </span>
              </div> */}
            </div>

            {/* Profile Image */}
            <div className="flex justify-center md:justify-end items-center">
              <div className="flex justify-center items-center bg-gradient-to-br from-purple-400 to-rose-400 shadow-lg rounded-2xl w-56 lg:w-64 h-56 lg:h-64">
                <span className="font-bold text-white text-5xl lg:text-6xl">
                  GK
                </span>
              </div>
            </div>
          </div>
        </div>
      </GlassMacWindow>

      {/* <ShapeDivider fill="bg-purple-300" id="about" /> */}
    </section>
  );
};

export default About;
