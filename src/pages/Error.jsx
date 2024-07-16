import React from "react";

function Error() {
  return (
    <div className=" flex items-center justify-center bg-red-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Error!!!</h1>
        <p className="text-gray-700">
          Something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
}

export default Error;
