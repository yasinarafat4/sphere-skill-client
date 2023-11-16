import React from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const SingleCourseDetails = () => {
  const courseDetails = useLoaderData();
  const {
    name,
    price,
    image,
    syllabus,
    course_content,
    instructor_image,
    instructor_name,
  } = courseDetails;
  return (
    <div className="bg-white dark:bg-slate-900 dark:text-white p-6 shadow-lg rounded-lg">
      {/* Dynamic page title */}
      <Helmet>
        <title>SS | Course Details</title>
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img
            src={image}
            alt={name}
            className="w-full rounded-lg mb-4 mx-auto"
          />
          <h1 className="text-2xl text-center font-semibold mb-4">{name}</h1>
        </div>
        <div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Syllabus:</h2>
            <ul className="list-disc list-inside">
              {syllabus?.map((syl, index) => (
                <li key={index} className="ml-4">
                  {syl}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Content:</h2>
            <p className="mb-4">{course_content}</p>
            <p className="text-lg font-semibold mb-4">
              Price: <span className="text-base font-normal">${price}</span>
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={instructor_image}
                  alt={instructor_name}
                />
                <p className="text-sm md:text-lg font-medium">{instructor_name} (Course Instructor)</p>
              </div>
              <button onClick={()=>{toast.success("Successfully Enrolled!")}} className="btn btn-primary">Enroll</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetails;
