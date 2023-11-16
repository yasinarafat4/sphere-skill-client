import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name, image, email, classes } = instructor;
  return (
    <div className="w-full border p-4 rounded-md shadow-md dark:text-white">
      <div className="mb-4">
        <img src={image} alt={name} className="w-full rounded-md" />
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">{name}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Email: <span className="font-normal">{email}</span></p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Classes:</p>
        <ul className="list-disc list-inside pl-4">
          {classes?.map((cls, index) => (
            <li key={index}>{cls}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InstructorCard;
