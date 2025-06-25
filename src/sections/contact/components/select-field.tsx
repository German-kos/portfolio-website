interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errorMessage?: string | null;
}

const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
  errorMessage,
}: SelectFieldProps) => {
  return (
    <div>
      <label
        className="block pb-1 pl-2 font-medium text-gray-700 text-sm"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default SelectField;
