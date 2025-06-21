import { ShapeDivider } from "../../components";
import { Dock } from "./components";
import MatrixGridBackground from "./components/matrix-grid-background";

const Skills = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center p-8 py-36 text-white"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, #9333ea 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%),
          linear-gradient(45deg, #1e1b4b, #312e81)
        `,
      }}
    >
      {/* Matrix Grid Background */}
      <MatrixGridBackground />

      {/* Content */}
      <div className="z-10 relative text-center">
        <div className="mb-12 text-center">
          <h2 className="font-bold text-5xl md:text-5xl">Technologies</h2>
          <p className="mt-3 text-purple-200 text-2xl terminal-font">
            // What I usually work with
          </p>
        </div>

        {/* Skills */}
        <Dock />
      </div>

      {/* Shape Divider */}
      <ShapeDivider flip={true} fill="#fca5a5" />
    </section>
  );
};

export default Skills;
