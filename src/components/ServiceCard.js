import React from "react";

function ServiceCard({ service }) {
  const { name, description, icon, link } = service;

  return (
    <div className="w-[30%] h-[42%] bg-gradient-to-r from-white to-gray-100 shadow-xl rounded-xl p-6 flex flex-col justify-between items-center text-center mx-4 my-6 hover:scale-105 transform transition duration-300">
      {/* Icon/Image */}
      <div className="w-20 h-20 mb-4 bg-blue-100 rounded-full flex items-center justify-center shadow-md">
        <img
          src={icon}
          alt={`${name} icon`}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Service Name */}
      <h3 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight hover:text-blue-600 transition duration-300">
        {name}
      </h3>

      {/* Service Description */}
      <p className="text-gray-600 text-sm mb-6 px-3">
        {description}
      </p>

      {/* Action Button */}
      <a
        href={link}
        className="flex items-center justify-center text-white bg-blue-500 hover:bg-blue-600 font-medium py-2 px-4 rounded-full shadow-md transition duration-300"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default ServiceCard;
