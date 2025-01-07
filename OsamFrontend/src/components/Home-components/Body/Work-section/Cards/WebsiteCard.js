import React from "react";

function WebsiteCard({ title, description, image, link }) {
  return (
    <div className="flex flex-col items-center bg-[#333333] w-[90%] h-[25rem] m-auto p-6 rounded-xl transition-all duration-300 transform hover:scale-95 hover:shadow-2xl mb-10">
      {/* Card Header */}
      <div className="flex flex-col items-center text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">{title}</h1>
        <p className="text-sm md:text-base text-gray-400">{description}</p>
      </div>

      {/* Website Image */}
      <div className="relative flex h-[40%] w-[80%] mx-auto justify-center items-center mb-6">
        <img
          src={image || "default-image.jpg"} // Fallback image
          alt={title || "Website preview"} // Fallback alt text
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
      
      {/* Call-to-Action Button */}
      <a
        href={link || "#"} // Fallback link
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-[#1D3557] text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-[#4B6BFF] transition-colors duration-300"
      >
        View Website/App
      </a>
    </div>
  );
}

export default WebsiteCard;
