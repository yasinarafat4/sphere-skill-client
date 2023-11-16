import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mt-6">
        {heading}
      </h2>
      <p className="text-sm md:text-base lg:text-lg font-medium text-slate-500 dark:text-gray-300 mb-2">
        {subHeading}!
      </p>
    </>
  );
};

export default SectionTitle;
