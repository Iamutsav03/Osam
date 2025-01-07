import React from "react";

function WorkHeader({ animateTyping }) {
  return (
    <div className="w-full bg-gradient-to-r from-[#60e0d3] via-[#5ed762] to-[#009688] py-8 flex justify-center items-center animate-gradient">
      <h1
        className={`text-4xl md:text-6xl font-bold text-white overflow-hidden border-r-2 border-white whitespace-nowrap ${
          animateTyping ? "animate-typing" : ""
        }`}
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
      >
        Our Work
      </h1>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }

          @keyframes blink {
            50% { border-color: transparent; }
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-typing {
            display: inline-block;
            width: 100%;
            max-width: 300px;
            animation: typing 3.5s steps(25) infinite, blink 0.75s step-end infinite;
            white-space: nowrap;
            border-right: 2px solid white;
            overflow: hidden;
          }

          .animate-gradient {
            background-size: 300% 300%;
            animation: gradient 6s ease infinite;
          }

          /* Media query to adjust animation on small screens */
          @media (max-width: 768px) {
            .animate-typing {
              width: 100%;
              max-width: 45%; /* Adjust for small screen */
              animation: typing 2.5s steps(20) infinite, blink 0.75s step-end infinite;
            }
          }
        `}
      </style>
    </div>
  );
}

export default WorkHeader;
