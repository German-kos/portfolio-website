interface ContactDividerProps {
  text: string;
  lineColor?: string;
  textColor?: string;
  className?: string;
}

const ContactDivider: React.FC<ContactDividerProps> = ({
  text,
  lineColor = "border-gray-300",
  textColor = "text-gray-600",
  className = "",
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Left line */}
      <div className={`flex-grow border-t ${lineColor}`}></div>

      {/* Text with background */}
      <span
        className={`mx-1 px-1 py-1 bg-inherit ${textColor} text-sm font-medium whitespace-nowrap`}
      >
        {text}
      </span>

      {/* Right line */}
      <div className={`flex-grow border-t ${lineColor}`}></div>
    </div>
  );
};

export default ContactDivider;
