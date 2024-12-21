import React, { useState } from "react";
import logo from "../assets/logo.png"; 
import { IoPerson } from "react-icons/io5";

function Nav() {

  const [active,setActive] = useState(0);
  const sections = [
    "Home",
    "Services",
    "Our Work",
    "Team",
    "Contact",
    "About Us",
  ];

  return (
    <div className="w-full text-white  top-0 z-50">
      <div className="container h-[12vh] w-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center w-1/3">
          <img
            src={logo}
            alt="Logo"
            className="h-24 object-contain mr-3 ml-14"
          />
        </div>

        <span className="h-10 w-10 flex justify-center items-center bg-black rounded-full ml-40">
          <IoPerson size={20}/>
        </span>

        <div className="h-20 flex items-center gap-5">
        <div className="hidden md:flex gap-8 items-center text-nowrap">
          {sections.map((section, index) => (
            <div onClick={()=>setActive(index)} className="flex flex-col items-center gap-1">
            <a
              key={index}
              href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
              className={`hover:text-[#22625c] text-black font-semibold transition duration-300`}
            >
              {section}
            </a>
            {index === active && <span className={`w-[1vw] h-[1vh] rounded-full bg-[#22625c]`}></span>}
            </div>
          ))}
        </div>

        </div>
      </div>
    </div>
  );
}

export default Nav;
