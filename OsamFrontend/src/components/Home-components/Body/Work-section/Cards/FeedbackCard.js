import React from "react";

function FeedbackCard({
  profilePic = "https://via.placeholder.com/150",
  name = "John Doe",
  story = "This is an inspiring success story from one of our amazing users. Their journey with our platform has been a remarkable one!",
}) {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#f4f9ff] to-[#eaf4ff] rounded-lg max-w-full mx-auto transition-transform transform hover:scale-105 w-full">
      <div className="w-24 h-24 mb-6">
        <img
          src={profilePic}
          alt={name}
          className="w-full h-full object-cover rounded-full border-4 border-[#009688]"
        />
      </div>
      <h3 className="text-2xl font-semibold text-[#22625c] mb-3">{name}</h3>
      <p className="text-base text-gray-700 text-center px-4">{story}</p>
    </div>
  );
}

export default FeedbackCard;
