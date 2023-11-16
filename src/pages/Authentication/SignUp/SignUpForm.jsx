import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";

const imageToken = import.meta.env.VITE_IMAGE_TOKEN;

const SignUpForm = () => {
  // states
  const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
  const [error, setError] = useState("");

  // Hook form functionality
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Register functionality
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Register handler
  const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
  const handleRegister = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Image upload failed");
        }
        return response.json();
      })
      .then((dataImage) => {
        createUser(data.email, data.password)
          .then((result) => {
            console.log(result.user);
            updateUserProfile(data.name, dataImage.data.display_url)
              .then(() => {
                reset();
                toast.success("Successfully Sign Up");
                navigate(from, { replace: true });
              })
              .catch((error) => setError(error.message));
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => setError(error.message));
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
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
