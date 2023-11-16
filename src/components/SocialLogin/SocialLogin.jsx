import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully logged in with Google");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="flex items-center justify-center gap-3 border border-gray-400 px-2 md:px-10 text-2 py-2 lg:py-3 rounded-md transition"
      >
        <FcGoogle className="rounded-full text-lg" /> Continue with google
      </button>
    </>
  );
};

export default SocialLogin;
