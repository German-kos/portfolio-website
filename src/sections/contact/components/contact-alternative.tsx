import { motion } from "framer-motion";
import { contactData } from "../../../data";

const ContactAlternative = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 ">
        {contactData.map((item, index) => (
          <motion.button
            key={index}
            onClick={item.action}
            className={`flex items-center justify-center gap-3 ${item.bgColor} ${item.hoverBgColor} shadow-lg hover:shadow-xl hover:border-white hover:cursor-pointer backdrop-blur-sm px-6 py-4 border border-white/50 rounded-xl w-[180px] ${item.textColor} transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
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
          </motion.button>
        ))}
      </div>
      <p className="text-gray-600 font-medium">Email: kostiakovg@gmail.com</p>
    </div>
  );
};
export default ContactAlternative;
