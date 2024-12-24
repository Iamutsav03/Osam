import React from "react";
import logo from "../assets/logo.png";

// Example team data
const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: logo, // Replace with actual path
    bio: "Visionary entrepreneur with 10+ years of experience in marketing.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: logo, // Replace with actual path
    bio: "Tech enthusiast leading the innovation at Opticore Solutions.",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Head",
    image: logo, // Replace with actual path
    bio: "Expert in brand strategies and digital marketing campaigns.",
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: logo, // Replace with actual path
    bio: "Creative designer crafting user-friendly and engaging interfaces.",
  },
];

function TeamSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
        <p className="text-gray-600 text-lg mb-12">
          Get to know the passionate individuals driving our company forward.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />

              {/* Member Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-blue-500 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
