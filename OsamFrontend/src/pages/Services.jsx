import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceNavbar from "../components/Service-components/SideBarNav";

const Services = () => {
  const navigation = useNavigate();

  const handleNavigation = () => {
     navigation(-1);
  };
  return (
    <div  className='font-[Roboto Slab] bg-[#11292a]'>
      <ServiceNavbar/>
    </div>
  );
};

export default Services;
