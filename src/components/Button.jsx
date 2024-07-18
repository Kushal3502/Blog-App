import React from "react";

function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-gray-900 text-gray-300 font-semibold rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
