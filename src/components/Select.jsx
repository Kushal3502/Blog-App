import React, { useId } from "react";

function Select({ label, options, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-semibold mb-2">
          {label}
        </label>
      )}
      <select
        className={`w-full px-3 py-2 bg-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors duration-300 ${className}`}
        {...props}
        id={id}
        ref={ref}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
