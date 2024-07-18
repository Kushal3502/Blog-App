import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <button
      className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors duration-300"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
