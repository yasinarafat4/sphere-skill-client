import React from "react";

const PageTitle = ({ heading }) => {
  return (
    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-200 py-4 text-center">
      {heading}
    </h2>
  );
};

export default PageTitle;
