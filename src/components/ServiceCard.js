import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

function ServiceCard({ service }) {
  const { name, description, icon, link } = service;

  return (
    <div
      className="w-[28vw] h-[50vh] flex flex-col items-center bg-[#212121] 
                 transform transition-transform duration-300 hover:scale-105"
    >
      <div className="w-full flex justify-center p-10 gap-10">
        <div className="w-[80%]">
          <h1 className="text-2xl font-medium text-white mb-5">{name}</h1>
          <p className="text-xl font-normal text-zinc-400">{description}</p>
        </div>
        <div
          className="h-12 w-12 bg-[#a8edc3] rounded-full flex justify-center items-center 
                     transition-colors duration-300 hover:bg-[#8ed8b0]"
        >
          <LuArrowUpRight size={25} />
        </div>
      </div>
      <div
        className="w-36 h-36 rounded-full flex justify-center items-center 
                   transition-all duration-300 hover:border-[rgba(166, 235, 193, 0.5)]"
        style={{ border: "1px solid rgba(166, 235, 193, 0.3)" }}
      >
        <div
          className="w-32 h-32 rounded-full flex justify-center items-center 
                     transition-all duration-300 hover:border-[rgba(168, 237, 195, 0.5)]"
          style={{ border: "1px solid rgba(168, 237, 195, 0.3)" }}
        >
          <div
            className="w-28 h-28 rounded-full flex justify-center items-center 
                       transition-all duration-300 hover:border-[rgba(168, 237, 195, 0.5)]"
            style={{ border: "1px solid rgba(168, 237, 195, 0.3)" }}
          >
            <img className="h-16 w-16 object-cover" src={icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
