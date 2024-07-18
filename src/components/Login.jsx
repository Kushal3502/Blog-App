import React, { useState } from "react";
import { Input, Button, Logo } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";

function Login() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-50 rounded-xl border-gray-700 border-2">
      <div className="max-w-lg w-full bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-700">
          Login to your account
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mb-6">{error}</p>}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
          <div>
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your Email..."
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your Password..."
              className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
