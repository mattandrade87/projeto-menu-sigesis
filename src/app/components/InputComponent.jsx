export default function InputComponent({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border  bg-white border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  );
}
