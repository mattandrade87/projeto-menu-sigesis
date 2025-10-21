// components/Textarea.jsx
"use client"; // remova se não estiver usando Next.js app router / React server components

import React from "react";

export default function Textarea({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  maxLength = 200,
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength || undefined}
        className={`w-full resize-vertical min-h-[6rem] p-3 border border-gray-300 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-orange-500
                    bg-white text-gray-900`}
      />

      {typeof maxLength === "number" && (
        <div className="text-xs text-gray-500 mt-1 text-right">
          {value?.length ?? 0} / {maxLength}
        </div>
      )}
    </div>
  );
}
