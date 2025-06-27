import { AnimatePresence, motion } from "framer-motion";

interface SelectOption {
  value: string;
  label: string;
}

type FormFieldType = "text" | "email" | "select" | "textarea";

type FieldType = "input" | "textarea" | "select";

type errorMessageType = string | null;

type FormMessageType = string | "";

interface FormFieldProps {
  label: string;
  name: string;
  type: FormFieldType;
  fieldType: FieldType;
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  errorMessage?: errorMessageType;
  selectOptions?: SelectOption[];
  formMessage?: FormMessageType;
}

const FormField = ({
  label,
  name,
  type,
  value,
  onChange,
  errorMessage = "",
  placeholder = "",
  fieldType,
  selectOptions = [],
  formMessage = "",
}: FormFieldProps) => {
  return (
    <div>
      {/* Label for the input field */}
      <label
        className="block pb-1 pl-2 font-medium text-gray-700 text-sm"
        htmlFor={name}
      >
        {label}
      </label>

      {fieldType === "input" ? (
        // Input Field Option
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
        // Text Area Option
        <div className="relative">
          <textarea
            className={`w-full px-4 resize-none py-2 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 ${
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
            maxLength={1000}
          />
          {/* Character counter inside the textarea */}
          <span
            className={`absolute bottom-2 right-3 text-xs pointer-events-none ${
              formMessage.length >= 20 ? "text-gray-400" : "text-red-400"
            }`}
          >
            {formMessage.length}/1000
          </span>
        </div>
      ) : fieldType === "select" ? (
        // Select Field Option
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

export default FormField;
