import React from "react";
import Banner from "./Banner/Banner";
import PopularCourses from "./PopularCourses/PopularCourses";

const Home = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Banner />
      <PopularCourses />
    </div>
  );
};

export default Home;
