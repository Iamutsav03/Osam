import React from "react";

function NavigationButtons({ prevCard, nextCard }) {
  return (
    <>
      <button
        onClick={prevCard}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#22625c] text-white px-4 py-2 rounded-full hover:bg-[#1a4f46] transition duration-300"
      >
        Prev
      </button>
      <button
        onClick={nextCard}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#22625c] text-white px-4 py-2 rounded-full hover:bg-[#1a4f46] transition duration-300"
      >
        Next
      </button>
    </>
  );
}

export default NavigationButtons;
