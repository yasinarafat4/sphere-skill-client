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
      <PageTitle heading={"Instructors"} text={"Embark on a transformative tech journey led by renowned instructors who ignite creativity, nurture talent, and guide you towards achieving tech mastery. Unlock your boundless creativity through the lessons offered by our trusted experts in the field."} />

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
