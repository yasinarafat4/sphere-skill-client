import React, { useEffect, useState } from "react";
import CourseCard from "../../../components/CourseCard/CourseCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularCourses = () => {
  const [popularCourses, setPopularCourses] = useState([]);

  useEffect(() => {
    fetch("/public/courses.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter courses by category
        const popularCoursesData = data.filter(
          (course) => course.category === "Popular"
        );
        setPopularCourses(popularCoursesData);
      });
  }, []);
  console.log(popularCourses);
  return (
    <div className="mx-4">
      {/* title */}
      <SectionTitle
        heading={"Popular Courses"}
        subHeading={"Discover our student favorites"}
      />
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularCourses.map((popular) => (
          <>
            <CourseCard key={popular._id} course={popular} />
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
