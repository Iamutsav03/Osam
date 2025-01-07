import React from "react";

const packages = [
  {
    name: "Basic Package",
    price: "₹3,999",
    description:
      "A simple app with up to 3 pages. Includes basic functionality with no animations.",
    details: "Up to 3 pages | Basic functionality | No animations",
  },
  {
    name: "Standard Package",
    price: "₹8,499",
    description:
      "A feature-rich app with up to 6 pages and medium animations. Perfect for startups and small businesses.",
    details: "Up to 6 pages | Medium animations | 1 revision",
  },
  {
    name: "Premium Package",
    price: "₹14,999",
    description:
      "A fully custom app with up to 12 pages, advanced animations, and enhanced UI/UX. Great for growing businesses.",
    details: "Up to 12 pages | Advanced animations | Custom UI/UX",
  },
  {
    name: "Enterprise Package",
    price: "₹29,999",
    description:
      "An enterprise-grade app with full API integration, custom features, and unlimited revisions.",
    details: "Full API integration | Custom features | Unlimited revisions",
  },
];

function AppdevPackages() {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto bg-gradient-to-r from-[#0a0a2a] via-[#2e2b8d] to-[#7421d3] text-white border-4 border-[#ffcc00] shadow-xl">
      <h1 className="text-4xl font-extrabold text-[#ffcc00] tracking-widest my-6">
        App Development Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {packages.map((pkg, index) => (
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

export default AppdevPackages;
