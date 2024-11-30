import React from "react";
import logo from "../assets/logo.png";

// Example work data
const works = [
  {
    title: "E-Commerce Website",
    description: "A robust and user-friendly platform for online shopping.",
    image: logo, // Replace with actual path
  },
  {
    title: "SEO Campaign",
    description: "Improved organic traffic for a client's website by 200%.",
    image: logo, // Replace with actual path
  },
  {
    title: "Mobile App Design",
    description: "A sleek and intuitive design for a fitness tracking app.",
    image: logo, // Replace with actual path
  },
];

function WorkSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Work</h2>
        <p className="text-gray-600 text-lg mb-12">
          Explore some of the projects and campaigns we've proudly delivered.
        </p>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-white shadow-lg rounded-lg"
            >
              {/* Work Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Work Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
