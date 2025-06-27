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
  // Pre-made styles
  const baseStyles =
    "w-full px-4 border rounded-lg bg-white/70 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2";

  const errorStyles = errorMessage
    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
    : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200";

  const getFieldStyles = (fieldType: FieldType) => {
    const paddingY = fieldType === "select" ? "py-2.5" : "py-2";
    const extraStyles = fieldType === "select" ? "hover:cursor-pointer" : "";
    const resizeStyle = fieldType === "textarea" ? "resize-none" : "";

    return `${baseStyles} ${paddingY} ${errorStyles} ${extraStyles} ${resizeStyle}`.trim();
  };

  const fieldId = `field-${name}`;
  const errorId = `${name}-error`;

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
          className={getFieldStyles("input")}
          type={type}
          id={fieldId}
          aria-invalid={!!errorMessage}
          aria-errormessage={errorId}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
      ) : fieldType === "textarea" ? (
        // Text Area Option
        <div className="relative">
          <textarea
            className={getFieldStyles("textarea")}
            id={fieldId}
            aria-invalid={!!errorMessage}
            aria-errormessage={errorId}
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
          className={getFieldStyles("select")}
          id={fieldId}
          aria-invalid={!!errorMessage}
          aria-errormessage={errorId}
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
