import React from "react";
import ServiceCard from "../components/ServiceCard";
import assets from "../assets/assets"

const services = [
  {
    name: "Web Development",
    description: "Building responsive, user-friendly websites tailored to your needs.",
    icon: assets.web, // Use the imported logo
    link: "/services/web-development", // Replace with the actual link
  },
  {
    name: "SEO Optimization",
    description: "Improving your website's visibility on search engines with cutting-edge techniques.",
    icon: assets.seo, // Replace with actual path
    link: "/services/seo-optimization",
  },
  {
    name: "Mobile App Development",
    description: "Creating high-performance mobile apps to grow your business.",
    icon: assets.mobile, // Replace with actual path
    link: "/services/mobile-app-development",
  },
  {
    name: "Digital Marketing",
    description: "Boosting your brand with effective online marketing strategies.",
    icon: assets.digital, // Replace with actual path
    link: "/services/digital-marketing",
  },
  {
    name: "Web Development",
    description: "Building responsive, user-friendly websites tailored to your needs.",
    icon: assets.web, // Replace with actual path
    link: "/services/web-development", // Replace with actual link
  },
  {
    name: "SEO Optimization",
    description: "Improving your website's visibility on search engines with cutting-edge techniques.",
    icon: assets.seo, // Replace with actual path
    link: "/services/seo-optimization",
  }
];

function ServiceGrid() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="mt-28 w-full h-full flex flex-col justify-center p-16">
      <h1 className="w-[60%] mx-auto text-center text-5xl font-bold tracking-wider">WE OFFER A WIDE RANGE OF INDUSTRY SERVICES.</h1>
      <div className="w-full mx-auto h-full mt-10 flex flex-wrap justify-center gap-8">
      {
        services.map((service, index) => (
          <ServiceCard key={index} service={service} icon = {service.icon} />
        ))
      }
      </div>
      </div>
    </div>
  );
}

export default ServiceGrid;
