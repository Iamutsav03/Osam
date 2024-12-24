import React from "react";

function FeedbackCard({ profilePic, name, story }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-b from-[#f4f9ff] to-[#eaf4ff] shadow-lg rounded-lg max-w-md mx-auto transition-transform transform hover:scale-105">
      {/* Profile Picture */}
      <div className="w-16 h-16 mb-4">
        <img
          src={profilePic}
          alt={name}
          className="w-full h-full object-cover rounded-full border-2 border-[#009688]"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-[#22625c] mb-2">{name}</h3>

      {/* Story */}
      <p className="text-sm text-gray-700 text-center">
        {story}
      </p>
    </div>
  );
}

FeedbackCard.defaultProps = {
  profilePic: "https://via.placeholder.com/150", // Default profile picture
  name: "John Doe", // Default name
  story: "This is an inspiring success story from one of our amazing users. Their journey with our platform has been a remarkable one!", // Default story
};

export default FeedbackCard;
