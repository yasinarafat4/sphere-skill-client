import React from "react";

const PageTitle = ({ heading, text }) => {
  return (
    <>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-200 py-4 text-center">
        {heading}
      </h2>
      <p className="text-sm md:text-base lg:text-lg font-normal text-slate-700 dark:text-gray-300 mb-2">
        {text}
      </p>
    </>
  );
};

export default PageTitle;
