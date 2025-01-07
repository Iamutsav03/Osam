import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import { OsamContext } from "../../../../../context/Context";

function Companies() {
      const {companiesData} = useContext(OsamContext)
    
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Our Partners</h2>
      <Marquee gradient={false} speed={50}>
        {companiesData.map((company) => (
          <div key={company.id} className="flex flex-col items-center mr-10">
            <img
              src={company.image}
              alt={company.name}
              className="w-30 h-30 rounded-lg mb-2 shadow-lg"
            />
            <p className="text-gray-600 text-sm">{company.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Companies;
