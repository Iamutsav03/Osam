import React from "react";
import Nav from "../components/Nav";
import ConferenceRoom from "../assets/ConferenceRoom.jpg";

function Header() {
  return (
    <>
      <Nav />
      <div className="relative w-full h-[80vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ConferenceRoom})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center py-32 gap-4 px-6 md:px-0">
          {/* Animated Brand Full Form with typing effect */}
          <div className="text-4xl md:text-5xl font-bold tracking-wide mb-8 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-typing">
              {Array.from("Opticore Solutions And Marketing Company").map(
                (letter, index) => (
                  <span
                    key={index}
                    className="inline-block animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.1}s`, // Delay each letter
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                )
              )}
            </div>
          </div>

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
