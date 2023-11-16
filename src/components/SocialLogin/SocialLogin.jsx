import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <>
      <button
        // onClick={handleGoogleSignIn}
        type="button"
        className="flex items-center justify-center gap-3 border border-gray-400 px-2 md:px-10 text-2 py-2 lg:py-3 rounded-md transition"
      >
        <FcGoogle className="rounded-full text-lg" /> Continue with google
      </button>
    </>
  );
};

export default SocialLogin;
