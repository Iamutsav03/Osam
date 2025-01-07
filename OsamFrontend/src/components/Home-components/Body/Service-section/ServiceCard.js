import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

function ServiceCard({ service }) {
  const { name, description, icon, link } = service;

  return (
    <div
      className="flex flex-col items-center bg-[#212121] w-full md:w-[28vw] p-6 rounded-lg shadow-xl 
                 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2"
    >
      {/* Card Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-xl md:text-2xl font-medium text-white mb-4 
                      shadow-md">{name}</h1>
        <p className="text-sm md:text-base text-[#d1d5db]">{description}</p>
      </div>

      {/* Circular Icon Section with Gradient Overlay */}
      <div className="relative flex justify-center items-center mb-6">
        <div className="w-32 h-32 rounded-full flex justify-center items-center border-4 border-[#22625c] 
                        hover:border-[#86B6F6] transition-all duration-300 group">
          <div className="w-28 h-28 rounded-full flex justify-center items-center border-4 border-[#22625c] 
                          hover:border-[#86B6F6] transition-all duration-300 group-hover:bg-gradient-to-r from-[#22625c] to-[#1a4f46]">
            <img className="h-16 w-16 object-contain rounded-full group-hover:opacity-90 transition-opacity duration-300" 
                 src={icon} alt={`${name} icon`} />
          </div>
        </div>
      </div>

      {/* Call-to-Action Button with Tooltip */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center justify-center w-12 h-12 bg-[#22625c] rounded-full 
                   text-white hover:bg-[#5297f2] transition-colors duration-300 relative group"
      >
        <LuArrowUpRight size={30} />
        <span className="absolute bottom-16 left-1/2 transform -translate-x-1/2 
                         text-xs text-white bg-black p-2 rounded-lg opacity-0 group-hover:opacity-100 
                         transition-opacity duration-300">
          View Details
        </span>
      </a>
    </div>
  );
}

export default ServiceCard;
