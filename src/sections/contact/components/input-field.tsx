import { AnimatePresence, motion } from "framer-motion";

interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "email";
  fieldType: "input" | "textarea" | "select";
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  errorMessage?: string | null;
}

// To Do:
// - Text Area should be changes with css
// - Select should be implemented, styled, and need to add options props

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  errorMessage,
  placeholder = "",
  fieldType,
}: FormFieldProps) => {
  return (
    <div>
      <label
        className="block pb-1 pl-2 font-medium text-gray-700 text-sm"
        htmlFor={name}
      >
        {label}
      </label>

      {fieldType === "input" ? (
        <input
          className={`w-full px-4 py-2 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 ${
            errorMessage
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
          } focus:outline-none focus:ring-2`}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
      ) : fieldType === "textarea" ? (
        <textarea
          className={`w-full px-4 py-2 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 ${
            errorMessage
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
          } focus:outline-none focus:ring-2`}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
          rows={4}
        />
      ) : fieldType === "select" ? (
        <div>aaaaaaaaaa</div>
      ) : null}
      <AnimatePresence>
        {errorMessage && (
          <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-red-600 text-sm"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InputField;
