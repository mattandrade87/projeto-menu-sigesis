export default function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required,
  maxLength,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        maxLength={maxLength}
        className="w-full p-2.5 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-gray-800"
      />
    </div>
  );
}
