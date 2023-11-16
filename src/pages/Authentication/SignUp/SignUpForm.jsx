import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const SignUpForm = () => {
  // states
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
  const [error, setError] = useState("");

  // Hook form functionality
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-5 w-full py-10 px-20 shadow-xl"
    >
      {/* Name field */}
      <div className="form-control">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="w-full p-2 border-b border-gray-300 dark:bg-slate-800 dark:text-slate-200 rounded outline-none"
          id="name"
          name="name"
          {...register("name", {
            required: true,
          })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name!
          </span>
        )}
      </div>

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

      {/* Uploading Photo field */}
      <div className="mb-4">
        <label htmlFor="image" className="block mb-1">
          Upload Photo
        </label>
        <input
          type="file"
          id="image"
          className="block w-full border text-gray-500
                  file:mr-4 file:py-4 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-200 file:text-gray-700
                  hover:file:bg-gray-100
                "
          {...register("image", {
            required: true,
            validate: {
              fileSize: (file) =>
                file[0]?.size < 1048576 || "Image size must be less than 1MB",
              fileType: (file) =>
                /jpeg|png|gif/.test(file[0]?.type) ||
                "Unsupported image format (jpeg/png/gif only)",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter your photo!
          </span>
        )}
      </div>

      <p className="text-red-500">{error}</p>
      {/* SignUp button */}
      <div className="flex items-center justify-center">
        <button
          className="bg-indigo-600 w-full text-white hover:bg-indigo-700 py-2 px-4 rounded-3xl"
          type="submit"
        >
          SignUp
        </button>
      </div>
      <p className="text-center text-gray-700 dark:text-gray-300 text-sm">
        Already have an account?
        <Link to="/login" className="text-blue-500 underline ml-1">
          Login
        </Link>
      </p>
      <span className="text-center">OR</span>
      <SocialLogin />
    </form>
  );
};

export default SignUpForm;
