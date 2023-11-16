import React from "react";
import { Helmet } from "react-helmet-async";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="w-full py-4 lg:py-10 dark:bg-slate-900 dark:text-white">
      {/* Dynamic page title */}
      <Helmet>
        <title>SS | Sign Up</title>
      </Helmet>

      <h1 className="text-3xl lg:text-4xl font-bold text-center">Sign Up now!</h1>
      <p className="py-2 text-center">Sign Up now to connect with us.</p>
      <div className="flex items-center justify-center w-full">
        <div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
