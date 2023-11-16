import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiSearch } from "react-icons/bi";
import CourseCard from "../../components/CourseCard/CourseCard";
import PageTitle from "../../components/PageTitle/PageTitle";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  //  Using the 'useEffect' hook to perform side effects
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
      });
  }, []);
  console.log(courses);

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900">
      {/* Dynamic page title */}
      <Helmet>
        <title> SS | Courses</title>
      </Helmet>

      {/* Title */}
      <PageTitle
        heading={"Courses"}
        text={
          "Enroll the vibrant realm of expression with our most popular courses. Immerse yourself in a captivating journey of techniques, and boundless creativity, guided by our talented instructors who inspire and empower your skills growth."
        }
      />

      {/* Search Box */}
      <div className="flex items-center justify-end  mb-6">
        <div className="text-gray-600 border-none mt-20 rounded-md w-10/12 md:w-1/2 mx-auto md:mx-0 lg:w-1/3 flex items-center">
          <input
            type="search"
            name="search"
            // onChange={(e) => setSerchBlogText(e.target.value)}
            placeholder="Search Courses..."
            className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full border border-primary"
          />
          <button
            // onClick={handleSearch}
            type="submit"
          >
            <BiSearch className="-ms-8 text-gray-600 text-xl" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <>
            <CourseCard key={course._id} course={course} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Courses;
