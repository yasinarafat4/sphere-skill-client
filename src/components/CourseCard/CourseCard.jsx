import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { name, image, price, ratings } = course;
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
        <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm md:text-base font-semibold md:px-5 lg:mx-4 my-4 lg:my-0 duration-500 rounded">
              View Course
            </button>
          </Link>
      </div>
    </div>
  );
};
export default CourseCard;
