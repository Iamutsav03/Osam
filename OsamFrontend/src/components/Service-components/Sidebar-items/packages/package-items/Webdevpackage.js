import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Packages Data
const packages = [
  [
    {
      sections: "basic",
      data: {
        name: "Basic Package",
        price: "₹3,999",
      },
    },
    {
      sections: "details",
      data: {
        description:
          "A compact single-page website, perfect for personal portfolios or small businesses. Includes basic design and one revision.",
        specifications: ["Single page", "Basic design", "1 revision"],
      },
    },
  ],
  [
    {
      sections: "basic",
      data: {
        name: "Standard Package",
        price: "₹9,999",
      },
    },
    {
      sections: "details",
      data: {
        description:
          "Up to 5 pages with responsive design. Ideal for startups or blogs. Includes SEO optimization and two revisions.",
        specifications: ["Up to 5 pages", "Responsive", "SEO", "2 revisions"],
      },
    },
  ],
  [
    {
      sections: "basic",
      data: {
        name: "Premium Package",
        price: "₹19,999",
      },
    },
    {
      sections: "details",
      data: {
        description:
          "Up to 10 pages with custom animations, advanced SEO, and tailored UI/UX design. Suitable for growing businesses.",
        specifications: [
          "Up to 10 pages",
          "Animations",
          "Advanced SEO",
          "Custom UI/UX",
        ],
      },
    },
  ],
  [
    {
      sections: "basic",
      data: {
        name: "Enterprise Package",
        price: "₹49,999",
      },
    },
    {
      sections: "details",
      data: {
        description:
          "Custom, fully dynamic website with admin panel and integrations. Built for scalability and corporate needs.",
        specifications: [
          "Dynamic",
          "Admin panel",
          "API integration",
          "Unlimited revisions",
        ],
      },
    },
  ],
];

// Swiper Card Component
const SwiperCard = ({
  packageData,
  index,
  hoveredIndex,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <Swiper
    grabCursor={true}
    effect="creative"
    creativeEffect={{
      prev: { shadow: true, translate: ["120%", 0, -400] },
      next: { translate: ["100%", 0, 0] },
    }}
    loop={true}
    autoplay={hoveredIndex === index ? { disableOnInteraction: false } : false}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
    className="w-full h-full rounded-xl transform hover:scale-105 odd:animate-borderShine transition-all duration-300"
  >
    {packageData.map((sectionObj, sectionIndex) => {
      const { sections, data } = sectionObj;
      return (
        <SwiperSlide key={sectionIndex}>
          <div
            className={`flex justify-center items-center h-full w-full text-white font-semibold text-lg relative rounded-lg`}
            style={{
              backgroundImage: `url(https://t4.ftcdn.net/jpg/07/62/97/85/360_F_762978547_GvdI9ynWM8oDKlYGkPSGSCnhAiMBuicc.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: hoveredIndex === index ? 1 : 0.85,
              boxShadow:
                hoveredIndex === index
                  ? "0 0 15px 5px rgba(255, 255, 255, 0.3)"
                  : "none",
            }}
          >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>

            <div className="relative z-10">
              {sections === "basic" ? (
                <div className="text-center">
                  <p className="text-3xl font-bold">{data.name}</p>
                  <p className="text-xl">{data.price}</p>
                </div>
              ) : (
                <div className="mt-4 text-center">
                  <p className="text-md">{data.description}</p>
                  <p className="text-sm">{data.specifications.join(" | ")}</p>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
);

// WebDevPackage Component
function WebDevPackage() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRefs = useRef([]);

  const handlePackageSelect = (pkg) => setSelectedPackage(pkg);
  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div className="relative flex flex-row items-start justify-between min-h-screen bg-black text-white">
      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center w-full md:w-3/5 mx-auto px-4 py-6">
        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full">
          {packages.map((packageArray, index) => (
            <SwiperCard
              key={index}
              index={index}
              packageData={packageArray}
              hoveredIndex={hoveredIndex}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              ref={(el) => (swiperRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>

      {/* Sidebar for Selected Package */}
      <div className="relative z-10 w-full flex flex-col justify-center items-center sm:w-2/5 bg-gray-800 p-6 rounded-lg shadow-xl">
        {selectedPackage ? (
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Selected Package: {selectedPackage[0].data.name}
            </h3>
            <p className="text-lg mb-4">
              {selectedPackage[1].data.description}
            </p>
            <div className="bg-gray-700 p-4 rounded-md mb-6">
              <h4 className="text-xl font-semibold mb-2">Details:</h4>
              <p className="text-sm">
                {selectedPackage[1].data.specifications.join(" | ")}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">
                Price: {selectedPackage[0].data.price}
              </p>
              <button className="bg-teal-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-teal-400">
                Proceed to Payment
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center">
            Please select a package to view details.
          </p>
        )}
      </div>
    </div>
  );
}

export default WebDevPackage;
