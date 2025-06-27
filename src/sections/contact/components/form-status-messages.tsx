import { motion } from "framer-motion";

export const FormSuccessMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="bg-green-100 p-4 border border-green-300 rounded-lg"
  >
    <div className="flex items-center space-x-2">
      <svg
        className="w-5 h-5 text-green-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <p className="font-medium text-green-800">Message sent successfully!</p>
    </div>
    <p className="mt-1 text-green-700 text-sm">
      I'll get back to you within 24 hours.
    </p>
  </motion.div>
);

export const FormErrorMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="bg-red-100 p-4 border border-red-300 rounded-lg"
  >
    <div className="flex items-center space-x-2">
      <svg
        className="w-5 h-5 text-red-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
      <p className="font-medium text-red-800">Failed to send message</p>
    </div>
    <p className="mt-1 text-red-700 text-sm">
      Please try again or contact me directly.
    </p>
  </motion.div>
);
