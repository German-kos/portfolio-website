import { contactIcons } from "../../../data";

const ContactAlternative = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:kostiakovg@gmail.com";
  };

  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleLinkedInClick = () => {
    // Replace with your LinkedIn profile
    window.open("https://linkedin.com/in/your-profile", "_blank");
  };

  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8">
      {/* Email Button */}
      <button
        onClick={handleEmailClick}
        className="flex items-center gap-3 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm px-6 py-4 border border-white/50 rounded-xl min-w-[160px] text-gray-700 hover:scale-105 transition-all duration-300"
      >
        <svg
          className={` w-8 h-8`}
          role="img"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={contactIcons.pdf} />
        </svg>
        <span className="font-medium">My Résumé</span>
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="flex items-center gap-3 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm px-6 py-4 border border-white/50 rounded-xl min-w-[160px] text-gray-700 hover:scale-105 transition-all duration-300"
      >
        {/* <MessageSquare className="w-5 h-5 text-green-600" /> */}
        <span className="font-medium">WhatsApp</span>
      </button>

      {/* LinkedIn Button */}
      <button
        onClick={handleLinkedInClick}
        className="flex items-center gap-3 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm px-6 py-4 border border-white/50 rounded-xl min-w-[160px] text-gray-700 hover:scale-105 transition-all duration-300"
      >
        {/* <Linkedin className="w-5 h-5 text-blue-700" /> */}
        <span className="font-medium">LinkedIn</span>
      </button>
    </div>
  );
};
export default ContactAlternative;
