import React, { useState } from "react";
import "./styles.css";

const WebDevPackage = () => {
  const [showModal, setShowModal] = useState(true);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = (status) => {
    if (status === "success") {
      setPaymentStatus({
        success: true,
        message: "Payment Successful!",
      });
    } else {
      setPaymentStatus({
        success: false,
        message: "Payment Failed. Try Again!",
      });
    }
  };

  // Define the basic packages with darker gradient shades
  const packages = [
    {
      name: "Basic Package",
      description: "A simple static website with up to 3 pages.",
      price: 1000,
      details: "No animations, basic frontend.",
      gradient: "bg-gradient-to-r from-green-500 to-teal-600", // Darker shades
      gradientStart: "rgba(72, 187, 120, 1)", // Starting color of the gradient
      gradientEnd: "rgba(36, 153, 137, 1)", // Ending color of the gradient
    },
    {
      name: "Standard Package",
      description: "Static or dynamic website with basic animations.",
      price: 2500,
      details: "Frontend + Backend (basic features).",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-700", // Darker shades
      gradientStart: "rgba(37, 99, 235, 1)", // Starting color of the gradient
      gradientEnd: "rgba(56, 48, 163, 1)", // Ending color of the gradient
    },
    {
      name: "Premium Package",
      description: "Up to 10 pages, advanced animations, basic backend.",
      price: 5000,
      details: "Advanced frontend + Backend (authentication).",
      gradient: "bg-gradient-to-r from-purple-600 to-pink-700", // Darker shades
      gradientStart: "rgba(128, 90, 213, 1)", // Starting color of the gradient
      gradientEnd: "rgba(251, 126, 235, 1)", // Ending color of the gradient
    },
    {
      name: "Enterprise Package",
      description:
        "Fully dynamic website, real-time features, complex animations.",
      price: 10000,
      details: "Full-stack development with advanced backend.",
      gradient: "bg-gradient-to-r from-yellow-600 to-orange-700", // Darker shades
      gradientStart: "rgba(255, 160, 0, 1)", // Starting color of the gradient
      gradientEnd: "rgba(255, 87, 34, 1)", // Ending color of the gradient
    },
  ];

  const calculatePackage = (pkg) => {
    setSelectedPackage(pkg);
    setShowModal(false);
    setShowPayment(true);
  };

  return (
    <div className="flex flex-col items-center bg-[#0d1117] text-white min-h-screen py-8 p-4">
      {/* Left - Cards Section */}
      <div className="w-full flex justify-center gap-4 mb-8 p-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            onClick={() => calculatePackage(pkg)}
            className={`w-80 p-6 rounded-lg cursor-pointer transform hover:scale-105 transition duration-300 relative overflow-hidden group ${pkg.gradient}`}
            style={{
              "--start-color": pkg.gradientStart,
              "--end-color": pkg.gradientEnd,
            }}
          >
            <h3 className="text-2xl font-semibold">{pkg.name}</h3>
            <p className="my-2 text-lg">{pkg.description}</p>
            <p className="text-xl font-bold">₹{pkg.price}</p>

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:shine-card"></div>
          </div>
        ))}
      </div>

      {/* Right - Payment Section */}
      {showPayment && selectedPackage && (
        <div className="w-full bg-[#21262d] text-white flex flex-col justify-center items-center p-8 rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-bold mb-4">
            Selected Package: {selectedPackage.name}
          </h2>
          <p className="my-4 text-center">{selectedPackage.details}</p>
          <p className="text-lg font-bold mb-4">
            Price: ₹{selectedPackage.price}
          </p>

          {/* Payment Instructions */}
          <div className="text-center mb-6">
            <p>Make the payment via UPI to:</p>
            <p className="text-lg font-semibold text-green-400">example@upi</p>
          </div>

          {/* Payment Buttons */}
          <div className="w-full flex justify-between gap-4">
            <button
              onClick={() => handlePayment("success")}
              className="bg-green-500 hover:bg-green-600 p-3 rounded-lg text-white w-full transform transition duration-300"
            >
              Confirm Payment
            </button>
            <button
              onClick={() => setShowPayment(false)}
              className="bg-red-500 hover:bg-red-600 p-3 rounded-lg text-white w-full transform transition duration-300"
            >
              Cancel
            </button>
          </div>

          {/* Payment Confirmation Message (conditional rendering) */}
          {paymentStatus && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-75 bg-black rounded-lg">
              <div className="bg-white text-black p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold">{paymentStatus.message}</h3>
                <div className="mt-4">
                  {paymentStatus.success ? (
                    <span className="text-green-500 text-3xl">✔</span>
                  ) : (
                    <span className="text-red-500 text-3xl">✖</span>
                  )}
                </div>
                <button
                  onClick={() => setShowPayment(false)}
                  className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white w-full mt-4"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Modal Section */}
{showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-gradient-to-r from-[#0d1117] to-[#161d27] p-8 rounded-xl w-[700px] space-y-6 text-white shadow-xl transform transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-semibold text-center text-teal-400">
        Tell Us About Your Project
      </h2>

      <form className="space-y-4 w-full">
        <div className="flex gap-3">
          <div className="w-1/2">
            <label
              htmlFor="projectName"
              className="block text-lg font-medium"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              placeholder="Enter your project name"
              className="w-full p-3 mt-2 rounded-lg bg-[#1e242e] text-white border-2 border-transparent focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="projectType"
              className="block text-lg font-medium"
            >
              Project Type
            </label>
            <input
              type="text"
              id="projectType"
              placeholder="What type of project is this?"
              className="w-full p-3 mt-2 rounded-lg bg-[#1e242e] text-white border-2 border-transparent focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-lg font-medium">
            Project Budget
          </label>
          <input
            type="number"
            id="budget"
            placeholder="Your budget range"
            className="w-full p-3 mt-2 rounded-lg bg-[#1e242e] text-white border-2 border-transparent focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>

        <div>
          <label htmlFor="timeline" className="block text-lg font-medium">
            Project Timeline
          </label>
          <input
            type="text"
            id="timeline"
            placeholder="What’s your project timeline?"
            className="w-full p-3 mt-2 rounded-lg bg-[#1e242e] text-white border-2 border-transparent focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="additionalInfo"
            className="block text-lg font-medium"
          >
            Any Additional Information?
          </label>
          <textarea
            id="additionalInfo"
            placeholder="Any other details you want to provide?"
            rows="4"
            className="w-full p-3 mt-2 rounded-lg bg-[#1e242e] text-white border-2 border-transparent focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
          />
        </div>

        <div className="space-x-4 flex justify-center">
          <button
            onClick={() => setShowModal(false)}
            className="bg-teal-500 p-3 rounded-lg text-white w-1/2 hover:bg-teal-600 transition duration-300"
          >
            Calculate Package & Proceed
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="bg-red-500 p-3 rounded-lg text-white w-1/2 hover:bg-red-600 transition duration-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </div>
  );
};

export default WebDevPackage;
