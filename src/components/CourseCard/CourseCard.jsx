import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const {
    _id,
    name,
    image,
    price,
    ratings,
    instructor_image,
    instructor_name,
  } = course;
  return (
    <div className="w-full border p-4 rounded-md shadow-md dark:text-white">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full rounded-md" />
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-semibold">{name}</p>
        <div>
          <p className="text-lg font-normal">Price: ${price}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={ratings}
            emptySymbol={
              <FaRegStar className="text-sm md:text-base text-yellow-400"></FaRegStar>
            }
            readonly
            placeholderSymbol={
              <FaStar className="text-sm md:text-base text-yellow-400"></FaStar>
            }
            fullSymbol={<FaStar></FaStar>}
          />
        </div>
        <Link to={`/courseDetails/${_id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm md:text-base font-semibold md:px-5 my-4 lg:my-0 duration-500 rounded">
            View Course
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={instructor_image}
          alt={instructor_name}
        />
        <p className="md:text-lg font-medium">
          {instructor_name} (Course Instructor)
        </p>
      </div>
    </div>
  );
};
export default CourseCard;
