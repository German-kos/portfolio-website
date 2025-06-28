import { contactData } from "../../../data";

const ContactAlternative = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-4 mt-8">
      {contactData.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className={`flex items-center gap-3 justify-center  ${item.bgColor} ${item.hoverBgColor} shadow-lg hover:shadow-xl hover:border-white hover:cursor-pointer backdrop-blur-sm px-6 py-4 border border-white/50 rounded-xl w-[180px] ${item.textColor} hover:scale-105 transition-all duration-300`}
        >
          <svg
            className={`w-8 h-8`}
            role="img"
            viewBox={item.viewBox}
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d={item.path} />
          </svg>
          <span className="font-medium">{item.text}</span>
        </button>
      ))}
    </div>
  );
};
export default ContactAlternative;
