import React, { useContext } from "react";
import ServiceCard from "../components/ServiceCard";
import { OsamContext } from "../context/Context";


function ServiceGrid() {

  const {services} = useContext(OsamContext)
  return (
    <div className="w-full flex flex-col items-center bg-lightGray py-16">  {/* Updated background color */}
      {/* Title with black color */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white mb-12">
        We Offer a Wide Range of Industry Services
      </h1>

      {/* Service Cards Grid with better responsiveness */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

export default ServiceGrid;
