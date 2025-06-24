import {
  ContactAlternative,
  ContactDivider,
  ContactForm,
  GlassMacWindow,
} from "./components";

const Contact = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center p-8 md:py-8 lg:py-4 text-black"
      style={{
        background: "linear-gradient(to bottom,  #fca5a5, #d8b4fe)",
      }}
    >
      <div className="py-8">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="font-bold text-gray-800 text-5xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-600 text-2xl terminal-font">
            // I would love to hear from you!
          </p>
        </div>
        <GlassMacWindow>
          {/* Section Title */}
          <div className="mb-6 text-center">
            <p className="mt-3 text-gray-600 text-3xl">
              Fill out the form below
            </p>
          </div>
          <ContactForm />
          <ContactDivider
            text="Or reach me directly"
            className="mt-8 mb-6 text-gray-600"
            lineColor="border-gray-600/40"
          />
          {/* Alternative Contact Options */}
          <ContactAlternative />
        </GlassMacWindow>
      </div>
    </section>
  );
};

export default Contact;
