import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthLayout({ children, authentication = true }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    setLoading(false);
    if (authentication && authentication !== authStatus) {
      navigate("/login");
    } else if (!authentication && !authentication === authStatus) {
      navigate("/");
    }
  }, [authentication, navigate, authStatus]);

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-50">
      {loading ? (
        <div className="text-center">
          <p className="text-gray-500 text-lg">Loading...</p>
        </div>
      ) : (
        <div className="w-full h-full max-w-4xl mx-auto p-4">{children}</div>
      )}
    </div>
  );
}
