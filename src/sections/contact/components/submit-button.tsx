import { motion } from "framer-motion";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <motion.button
    type="submit"
    disabled={isSubmitting}
    className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
      isSubmitting
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gradient-to-r hover:cursor-pointer from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:shadow-lg"
    }`}
    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
  >
    {isSubmitting ? (
      <div className="flex justify-center items-center space-x-2">
        <svg
          className="w-5 h-5 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span>Sending...</span>
      </div>
    ) : (
      "Send Message"
    )}
  </motion.button>
);

export default SubmitButton;
