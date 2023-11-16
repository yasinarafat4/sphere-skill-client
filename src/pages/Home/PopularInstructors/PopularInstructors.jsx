import React, { useEffect, useState } from "react";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructors = () => {
  const [popularInstructors, setPopularInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        // Filter courses by category
        const popularInstructorsData = data.filter(
          (course) => course.category === "Popular"
        );
        setPopularInstructors(popularInstructorsData);
      });
  }, []);
  
  return (
    <div className="mx-4">
      {/* title */}
      <SectionTitle
        heading={"Popular Instructors"}
        subHeading={"Introduce our most loved Instructors"}
      />
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularInstructors.map((popular) => (
          <>
            <InstructorCard key={popular._id} instructor={popular} />
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
