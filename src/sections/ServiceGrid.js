import React from "react";
import ServiceCard from "../components/ServiceCard";
import logo from "../assets/logo.png"; // Import the logo

const services = [
  {
    name: "Web Development",
    description: "Building responsive, user-friendly websites tailored to your needs.",
    icon: logo, // Use the imported logo
    link: "/services/web-development", // Replace with the actual link
  },
  {
    name: "SEO Optimization",
    description: "Improving your website's visibility on search engines with cutting-edge techniques.",
    icon: logo, // Replace with actual path
    link: "/services/seo-optimization",
  },
  {
    name: "Mobile App Development",
    description: "Creating high-performance mobile apps to grow your business.",
    icon: logo, // Replace with actual path
    link: "/services/mobile-app-development",
  },
  {
    name: "Digital Marketing",
    description: "Boosting your brand with effective online marketing strategies.",
    icon: logo, // Replace with actual path
    link: "/services/digital-marketing",
  },
  {
    name: "Web Development",
    description: "Building responsive, user-friendly websites tailored to your needs.",
    icon: logo, // Replace with actual path
    link: "/services/web-development", // Replace with actual link
  },
  {
    name: "SEO Optimization",
    description: "Improving your website's visibility on search engines with cutting-edge techniques.",
    icon: logo, // Replace with actual path
    link: "/services/seo-optimization",
  }
];

function ServiceGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-y-8 p-6">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
}

export default ServiceGrid;
