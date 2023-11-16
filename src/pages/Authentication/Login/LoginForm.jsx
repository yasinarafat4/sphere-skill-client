import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const LoginForm = () => {
  // states
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
  const [error, setError] = useState("");

  // Hook form functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login functionality
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // login handler
  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully loggedin");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("User Not Found. Invalid email or password!");
        } else if (error.code === "auth/invalid-login-credentials") {
          setError("Wrong Password. Please try again!");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-5 w-full py-10 px-20 shadow-xl"
    >
      {/* Email field */}
      <div className="form-control">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border-b border-gray-300 dark:bg-slate-800 dark:text-slate-200 rounded outline-none"
          id="email"
          name="email"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>

      {/* Password field */}
      <div className="form-control mb-4 relative">
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type={togglePasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          className="w-full p-2 border-b border-gray-300  dark:bg-slate-800 dark:text-slate-200 rounded outline-none"
          {...register("password", {
            required: true,
          })}
        />
        <div
          onClick={() => setTogglePasswordVisible(!togglePasswordVisible)}
          className="absolute cursor-pointer right-1 bottom-2"
        >
          {togglePasswordVisible ? (
            <AiFillEye className="text-xl text-gray-600 dark:text-slate-300" />
          ) : (
            <AiFillEyeInvisible className="text-xl text-gray-600 dark:text-slate-300" />
          )}
        </div>
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter correct password!
          </span>
        )}
      </div>
      <p className="text-red-500">{error}</p>
      {/* Login button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-600 w-full text-white hover:bg-indigo-700 py-2 px-4 rounded-3xl"
          type="submit"
        >
          Login
        </button>
      </div>
      <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
        Don&apos;t have an account?
        <Link to="/signup" className="text-blue-500 underline ml-1">
          Sign Up
        </Link>
      </p>
      <span className="text-center">OR</span>
      <SocialLogin />
    </form>
  );
};

export default LoginForm;
