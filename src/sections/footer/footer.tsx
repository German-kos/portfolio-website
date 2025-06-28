import { ShapeDivider } from "../../components";

const Footer = () => {
  // TODO: Make this a tooltip instead of a link or modal since it's short.
  // const privacyPolicy =
  //   "Contact information submitted through this form is used solely to respond to your inquiry and is not shared with third parties.";
  return (
    <section className="bg-gray-900 flex pb-8 items-center justify-center relative pt-32">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-gray-400 italic flex flex-row gap-6 text-2xl ">
          <p className="terminal-font ">[</p>
          <p className="terminal-font"> german,</p>
          <p className="terminal-font"> full-stack developer</p>
          <p className="terminal-font">]</p>
        </span>
        <span className="text-gray-400 border-t pt-2 border-gray-300/30   text-sm flex flex-row gap-12">
          <div className="flex flex-col items-center justify-center">
            <p className="terminal-font">contact</p>
            <p className="terminal-font">kostiakovg@gmail.com</p>
          </div>
          <div className="flex flex-row gap-4 items-center text-gray-400 justify-center">
            <p className="terminal-font">icon</p>
            <p className="terminal-font">icon</p>
            <p className="terminal-font">icon</p>
          </div>
          <div className="flex items-center text-gray-400 justify-center">
            <p className="terminal-font">
              © {new Date().getFullYear()} German Kostiakov
            </p>
          </div>
        </span>
      </div>
      <ShapeDivider fill="#d8b4fe" flip={true} />
    </section>
  );
};

export default Footer;
