import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Featured from "./Featured/Featured";
import PopularCourses from "./PopularCourses/PopularCourses";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      {/* Dynamic page title */}
      <Helmet>
        <title>SS | Home</title>
      </Helmet>

      <Banner />
      <PopularCourses />
      <PopularInstructors />
      <Featured />
    </div>
  );
};

export default Home;
