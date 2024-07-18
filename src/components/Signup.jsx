import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { Input, Button, Logo } from "./index";
import { login } from "../store/authSlice";

function Signup() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    setError("");
    try {
      const user = authService.createAccount(data);
      if (user) {
        dispatch(login(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 rounded-xl border-gray-700 border-2">
      <div className="bg-white py-6 px-2 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-700">
          Create new account
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
          <div>
            <Input
              label="Full Name : "
              type="text"
              placeholder="Enter your Full Name..."
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              label="Email : "
              type="email"
              placeholder="Enter your Email..."
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
              label="Password : "
              type="password"
              placeholder="Enter your Password..."
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
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
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
