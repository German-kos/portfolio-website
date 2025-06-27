import { AnimatePresence, motion } from "framer-motion";

interface SelectOption {
  value: string;
  label: string;
}

// This interface expects selectOptions to be an optional array of SelectOption objects,
// which matches the typical structure for select dropdowns.
interface FormFieldProps {
  label: string;
  name: string;
  type: "text" | "email" | "select" | "textarea";
  fieldType: "input" | "textarea" | "select";
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  errorMessage?: string | null;
  selectOptions?: SelectOption[];
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
  selectOptions = [],
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
        <select
          className={`w-full px-4 py-2.5 border hover:cursor-pointer rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 ${
            errorMessage
              ? "border-red-500 focus:border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
          } focus:outline-none focus:ring-2`}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
        >
          <option value="">Select an option...</option>
          {selectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
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
