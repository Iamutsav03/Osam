import React, { useState } from "react";
import Nav from "./Nav";
import Login from "./Login"; // Importing the Login component
import assets from "../../../assets/assets";
import { Link } from "react-router-dom";

function Header() {
  const [authOpen, setAuthOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // State to handle Login popup

  return (
    <>
      <div className="w-full">
        <Nav auth={authOpen} authFunc={setAuthOpen} />
        {authOpen && (
          <div className="absolute right-8 top-16 w-40 transition-all duration-300 bg-[#02626015] overflow-hidden shadow-lg z-50 flex flex-col items-center justify-center border backdrop-blur-md">
            {/* Register Button */}
            <Link
              to={"/register"}
              className="w-full border-t-[1px] h-14 hover:scale-[1.1] text-white font-semibold text-lg shadow-lg hover:from-[#357edb] hover:to-[#16295e] hover:shadow-lg transition duration-300 flex justify-center items-center"
            >
              Register
            </Link>

            {/* Login Button */}
            <button
              onClick={() => setLoginOpen(true)}
              className="w-full h-14 border-t-[1px] border-b-[1px] hover:scale-[1.05] text-white font-semibold text-lg shadow-lg hover:from-[#4fb984] hover:to-[#145a49] hover:shadow-lg transition duration-300 flex justify-center items-center"
            >
              Login
            </button>
          </div>
        )}
      </div>

      {/* Login Popup */}
      <Login isOpen={loginOpen} onClose={() => setLoginOpen(false)} />

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${assets.header3})`,
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          {/* Gradient Overlay to match navbar colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#000000] opacity-30"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 text-white text-center">
          {/* Title with Shadow */}
          <h1
            style={{
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Text shadow for title
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-20 leading-tight"
          >
            Opticore Solutions And Marketing Company
          </h1>

          {/* Taglines with Shadow */}
          <div
            style={{
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)", // Text shadow for taglines
            }}
            className="text-lg sm:text-xl md:text-2xl font-medium space-y-3"
          >
            <p>Solutions That Shine, Results That Matter.</p>
            <p>Your Growth, Our Mission.</p>
          </div>

          {/* Call to Action Button with inline styles for gradient and shadow */}
          <button
            className="mt-8 px-6 py-3 text-white bg-[#4893f5] font-semibold text-lg rounded-lg hover:bg-[#28446a] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
