import React from "react";
import Nav from "../components/Nav";
import ConferenceRoom from "../assets/ConferenceRoom.jpg";

function Header() {
  return (
    <>
      <Nav />
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center"
          style={{ backgroundImage: `url(https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center text-white text-center md:px-0">

            <h1 className="text-6xl mb-8 font-semibold text-wrap leading-none tracking-wider">Opticore Solutions And Marketing Company</h1>
          {/* Tag Lines */}
          <div className="text-lg md:text-2xl font-medium">
            Solutions That Shine, Results That Matter.
          </div>
          <div className="text-lg md:text-2xl font-medium">
            Your Growth, Our Mission.
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
