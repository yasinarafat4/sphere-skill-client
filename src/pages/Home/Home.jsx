import React from "react";
import Banner from "./Banner/Banner";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Banner />
      <PopularCourses />
      <PopularInstructors />
    </div>
  );
};

export default Home;
