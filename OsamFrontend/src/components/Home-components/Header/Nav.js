import React, { useState } from "react";
import logo from "../../../assets/logo.png"; // Your logo
import { IoPerson } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav({auth, authFunc}) {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full h-20 fixed top-0 z-50 bg-gradient-to-r from-[#EEF5FF] via-[#EEF5FF] to-[#EEF5FF] shadow-md">
      <div className="h-full container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="Logo" className="h-12 md:h-24 object-contain" />
        </div>


        {/* Links */}
        <div className="hidden md:flex gap-8 text-[#026261] font-bold text-lg">
          {["Home", "Services", "Our Work", "Team", "Contact", "About Us"].map(
            (section, index) => (
              <Link
                to={`/${section.toLowerCase()}`}
                key={index}
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative group"
              >
                {section}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#026261] transition-all group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* Profile Icon for Desktop */}
        <div className="hidden md:flex items-center justify-end gap-6">
          <span
            className="h-10 w-10 flex justify-center items-center hover:bg-black bg-[#026261] rounded-full cursor-pointer"
            onClick={() => authFunc(!auth)}
          >
            <IoPerson size={20} className="text-white" />
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <span
            className="h-10 w-10 flex justify-center items-center bg-white rounded-full cursor-pointer"
            onClick={() => authFunc(!auth)}
          >
            <IoPerson size={20} className="text-[#1e3a8a]" />
          </span>
          <button className="text-white" onClick={toggleMenu}>
            {menuOpen ? <MdClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {["Home", "Services", "Our Work", "Team", "Contact", "About Us"].map(
            (section, index) => (
              <a
                key={index}
                href={`/${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-6 py-3 text-[#1e3a8a] hover:bg-gray-100 text-lg"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {section}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Nav;
