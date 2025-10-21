"use client";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function PasswordField({
  label,
  name,
  placeholder,
  value,
  onChange,
}) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full p-2.5 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none pr-10 text-gray-800"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {show ? <IoEyeOff size={18} /> : <IoEye size={18} />}
        </button>
      </div>
    </div>
  );
}
