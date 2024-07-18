import React, { useId } from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="mb-4 ">
      {label && (
        <label htmlFor={id} className="block text-gray-700 font-semibold mb-2 ">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`w-full px-3 py-2 bg-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors duration-300 ${className}`}
        {...props}
        id={id}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Input);
