import React, { useRef } from "react";
import Nav from "./Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigation = useNavigate();

  const formRefs = {
    companyName: useRef(),
    industry: useRef(),
    website: useRef(),
    contractorName: useRef(),
    contractorEmail: useRef(),
    contractorPhone: useRef(),
    contractorPassword: useRef(),
    servicesRequired: useRef(),
    budget: useRef(),
    facebook: useRef(),
    instagram: useRef(),
    linkedin: useRef(),
    additionalNotes: useRef(),
  };

  const industries = [
    "Information Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Media and Entertainment",
    "Travel and Hospitality",
    "E-commerce",
    "Consulting",
    "Other",
  ];

  const services = [
    "App Reviews",
    "App Registration",
    "Map Reviews",
    "Advertisement",
    "SEO Improvements",
    "Website Design and Development",
    "App Design and Development",
    "Ratings Improvement",
    "App Testing",
    "Video Editing",
    "Photoshop and Logo Design",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedServices = Array.from(
      formRefs.servicesRequired.current.querySelectorAll(
        "input[type='checkbox']:checked"
      )
    ).map((checkbox) => checkbox.value);

    const formData = {
      companyName: formRefs.companyName.current.value,
      industry: formRefs.industry.current.value,
      website: formRefs.website.current.value,
      ContractorName: formRefs.contractorName.current.value,
      ContractorEmail: formRefs.contractorEmail.current.value,
      ContractorPhone: formRefs.contractorPhone.current.value,
      ContractorPassword: formRefs.contractorPassword.current.value,
      servicesRequired: selectedServices,
      budget: formRefs.budget.current.value,
      socialMediaLinks: {
        facebook: formRefs.facebook.current.value,
        instagram: formRefs.instagram.current.value,
        linkedin: formRefs.linkedin.current.value,
      },
      additionalNotes: formRefs.additionalNotes.current.value,
    };

    // const formData = {
    //   companyName: "Opticore Solutions",
    //   industry: "Information Technology",
    //   website: "https://www.opticoresolutions.com",
    //   ContractorName: "Utsav Singh",
    //   ContractorEmail: "utsav.singh@example.com",
    //   ContractorPhone: 9876543210,
    //   ContractorPassword: "SecurePassword123!",
    //   servicesRequired: [
    //     "App Reviews",
    //     "SEO Improvements",
    //     "Website Design and Development",
    //   ],
    //   budget: "5000 USD",
    //   socialMediaLinks: {
    //     facebook: "https://www.facebook.com/opticore",
    //     instagram: "https://www.instagram.com/opticore",
    //     linkedin: "https://www.linkedin.com/company/opticore",
    //   },
    //   additionalNotes:
    //     "We are looking for a complete digital transformation strategy.",
    // };
    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:4000/user/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        alert("Company registered successfully!");
        Object.values(formRefs).forEach((ref) => {
          if (ref.current) ref.current.value = "";
        });
        navigation(-1);
      } else {
        alert("Company registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error Registering", error);
    }
  };

  return (
    <>
      <Nav />
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(0, 128, 128, 0.8), rgba(0, 204, 204, 0.8)), url(https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full min-h-screen flex items-center justify-center py-10 px-4"
      >

        {/* Testing */}
        {/* <button
          onClick={handleSubmit}
          className="w-full py-3 bg-[#026261] text-white rounded-lg hover:bg-[#024a4a]"
        >
          Test
          </button> */}

        <div className="bg-white/80 backdrop-blur-md w-full max-w-4xl rounded-lg shadow-2xl p-8 md:p-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#026261]">
            Register Your Company
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  ref={formRefs.companyName}
                  placeholder="Enter your company name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Industry
                </label>
                <select
                  ref={formRefs.industry}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                  required
                >
                  <option value="">Select Industry</option>
                  {industries.map((industry, index) => (
                    <option key={index} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Website
                </label>
                <input
                  type="url"
                  ref={formRefs.website}
                  placeholder="Enter your website URL"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Budget
                </label>
                <input
                  type="text"
                  ref={formRefs.budget}
                  placeholder="Enter your budget"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Social Media Links
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="url"
                  ref={formRefs.facebook}
                  placeholder="Facebook URL"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                />
                <input
                  type="url"
                  ref={formRefs.instagram}
                  placeholder="Instagram URL"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                />
                <input
                  type="url"
                  ref={formRefs.linkedin}
                  placeholder="LinkedIn URL"
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Services Required
              </label>
              <div
                ref={formRefs.servicesRequired}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {services.map((service, index) => (
                  <label key={index} className="flex items-center">
                    <input type="checkbox" value={service} className="mr-2" />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Contact Name
                </label>
                <input
                  type="text"
                  ref={formRefs.contractorName}
                  placeholder="Contact Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  ref={formRefs.contractorEmail}
                  placeholder="Contact Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  ref={formRefs.contractorPhone}
                  placeholder="Contact Phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                />
              </div>
              <div>
                <label className="block mb-1 text-gray-700 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  ref={formRefs.contractorPassword}
                  placeholder="Enter Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">
                Additional Notes
              </label>
              <textarea
                ref={formRefs.additionalNotes}
                placeholder="Additional notes"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#026261] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#026261] text-white rounded-lg hover:bg-[#024a4a] transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
