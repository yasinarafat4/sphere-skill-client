import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InstructorCard from "../../components/InstructorCard/InstructorCard";
import PageTitle from "../../components/PageTitle/PageTitle";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  //  Using the 'useEffect' hook to perform side effects
  useEffect(() => {
    fetch("/public/instructors.json")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);
  console.log(instructors);

  return (
    <div className="py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900">
      {/* Dynamic page title */}
      <Helmet>
        <title> SS | Instructors</title>
      </Helmet>

      {/* Title */}
      <PageTitle heading={"Instructors"} />

      {/* Search Box */}
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructors.map((instructor) => (
          <>
            <InstructorCard key={instructor._id} instructor={instructor} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
