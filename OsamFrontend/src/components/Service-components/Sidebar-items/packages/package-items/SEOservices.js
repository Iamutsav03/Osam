import React from "react";

const seoPackages = [
  {
    name: "Basic SEO",
    price: "₹3,499",
    description:
      "Basic on-page SEO optimization for small websites. Includes keyword research, title tag optimization, and basic content improvements.",
    details: "On-page SEO | Keyword research | Title optimization",
  },
  {
    name: "Standard SEO",
    price: "₹7,999",
    description:
      "Comprehensive SEO with both on-page and off-page optimization. Includes link building, content creation, and SEO analysis.",
    details: "On-page & Off-page SEO | Link building | SEO analysis",
  },
  {
    name: "Premium SEO",
    price: "₹15,999",
    description:
      "Advanced SEO with a full audit and strategy. Includes technical SEO improvements, speed optimization, and full content strategy.",
    details: "Technical SEO | Speed optimization | Content strategy",
  },
  {
    name: "Enterprise SEO",
    price: "₹29,999",
    description:
      "Complete SEO strategy for large businesses, including local SEO, international SEO, and analytics integration for tracking success.",
    details: "Local SEO | International SEO | Analytics integration",
  },
];

function SEOservices() {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto bg-gradient-to-r from-[#0a0a2a] via-[#2e2b8d] to-[#7421d3] text-white border-4 border-[#ffcc00] shadow-xl">
      <h1 className="text-4xl font-extrabold text-[#ffcc00] tracking-widest my-6">
        SEO Services Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {seoPackages.map((pkg, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-tl from-[#ff0055] via-[#ff7e00] to-[#ffd700] text-black border-4 border-[#ffcc00] rounded-lg p-6 hover:bg-gradient-to-br hover:from-[#ffd700] hover:via-[#ff7e00] hover:to-[#ff0055] transition-all duration-500"
          >
            <h2 className="text-2xl font-bold text-center mb-2">{pkg.name}</h2>
            <p className="text-lg font-semibold text-center mb-4">{pkg.price}</p>
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/80 text-white rounded-lg p-4 transition-opacity duration-300">
              <p className="text-center text-sm">{pkg.description}</p>
            </div>

            <p className="text-sm text-center mt-2">{pkg.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SEOservices;
