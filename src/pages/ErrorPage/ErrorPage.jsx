import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="pb-10 px-2 flex flex-col min-h-screen">
      <img
        className="w-full md:w-6/12 mx-auto"
        src="https://i.ibb.co/bb2vpPk/8030430-3828537.jpg"
        alt=""
      />
      <div className="text-center">
        <Link
          className="hover:bg-indigo-700 bg-indigo-600  px-4 py-2 md:text-base lg:text-xl xl:text-2xl rounded-md text-white"
          to="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
