import React, { useState } from "react";
import logo from "../assets/logo.png"; // Adjust the path based on your file structure

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    "Home",
    "Services",
    "Our Work",
    "Team",
    "Contact",
    "About Us",
  ];

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain mr-3"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-blue-400 transition duration-300"
            >
              {section}
            </a>
          ))}
        </div>

        {/* Registration/CTA Button */}
        <div className="hidden md:flex">
          <a
            href="#register"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="flex flex-col items-center py-4 space-y-4">
            {sections.map((section, index) => (
              <a
                key={index}
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white hover:text-blue-400 transition duration-300 text-lg"
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
              >
                {section}
              </a>
            ))}
            <a
              href="#register"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
