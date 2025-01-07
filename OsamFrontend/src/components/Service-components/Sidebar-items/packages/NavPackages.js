import React, { useState } from "react";
import WebDevPackage from "./package-items/Webdevpackage";
import AppdevPackages from "./package-items/AppdevPackages";
import SEOservices from "./package-items/SEOservices";

const services = [
  "Web Development",
  "SEO Optimization",
  "Mobile App Development",
  "Digital Marketing",
  "App Reviews",
  "App Registrations",
  "Map Reviews",
  "Advertisement Services",
  "App Testing",
  "Video Editing",
  "Graphic Designing",
];

function NavPackages() {
  const [selectedItem, setSelectedItem] = useState(null); // Track the selected service

  // Function to render content based on the selected service
  const renderContent = () => {
    switch (selectedItem) {
      case "Web Development":
        return <WebDevPackage />;
      case "SEO Optimization":
        return <SEOservices />;
      case "Mobile App Development":
        return <AppdevPackages />;
      default:
        return (
          <div className="text-center text-[#A6E3E9] text-lg">
            Select a Service to View Details
          </div>
        );
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Scrollable Nav */}
      <div className="w-full bg-transparent py-1 border-b border-white">
      <div className="flex overflow-x-auto space-x-6 py-2 px-6 snap-x snap-mandatory scrollbar-hide">
  {services.map((service, index) => (
    <div
      key={index}
      className={`flex-none h-1/2 min-w-[200px] bg-black text-white border border-white rounded-sm p-2 flex justify-center items-center text-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:animate-shine`}
      style={{
        background: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.2) 100%)",
        backgroundSize: "200% 100%",
      }}
      onClick={() => setSelectedItem(service)}
    >
      <h3 className="text-lg font-semibold uppercase tracking-wide">{service}</h3>
    </div>
  ))}
</div>

      </div>

      {/* Content Section */}
      <section >
        <div>{renderContent()}</div>
      </section>

      {/* Custom Styles for Scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default NavPackages;
