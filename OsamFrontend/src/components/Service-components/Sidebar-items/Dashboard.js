import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { BsGraphUp, BsListCheck } from "react-icons/bs";
import { MdOutlineWeb, MdRateReview } from "react-icons/md";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] to-[#161d27] text-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#161d27] to-[#0d1117] text-gray-100 flex justify-between items-center px-6 py-4 shadow-xl">
        <h1 className="text-3xl font-extrabold tracking-wide">Dashboard</h1>
        <div className="flex items-center gap-6">
          <button className="relative group">
            <FaBell size={22} className="hover:text-yellow-400 transition duration-300 ease-in-out" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <FaUserCircle size={30} className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        {/* Overview Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center gap-4">
            <div className="p-3 bg-teal-100 rounded-full shadow-lg">
              <BsGraphUp size={28} className="text-teal-500" />
            </div>
            <div>
              <h2 className="text-xl text-white font-bold">Current Balance</h2>
              <p className="text-sm text-gray-100">$1,200.00</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-700 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center gap-4">
            <div className="p-3 bg-pink-100 rounded-full shadow-lg">
              <BsListCheck size={28} className="text-pink-500" />
            </div>
            <div>
              <h2 className="text-xl text-white font-bold">Active Orders</h2>
              <p className="text-sm text-gray-100">3 Orders</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-pink-700 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex items-center gap-4">
            <div className="p-3 bg-teal-100 rounded-full shadow-lg">
              <MdRateReview size={28} className="text-teal-500" />
            </div>
            <div>
              <h2 className="text-xl text-white font-bold">Reviews Progress</h2>
              <p className="text-sm text-gray-100">75% Completed</p>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-[#161d27] to-[#0d1117] backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-white">Order Progress</h3>
            <p className="text-sm text-gray-400 mb-6">
              Track daily updates on your active orders.
            </p>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-[#A7C7E7] to-[#F2F9FC] text-gray-800 font-bold rounded-lg hover:bg-[#38BDF8] transition duration-300 ease-in-out transform hover:scale-105">
              View Details
            </button>
          </div>
          <div className="bg-gradient-to-r from-[#161d27] to-[#0d1117] backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-white">Website Development</h3>
            <p className="text-sm text-gray-400 mb-6">
              Check out the designs and provide feedback.
            </p>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-[#A7C7E7] to-[#F2F9FC] text-gray-800 font-bold rounded-lg hover:bg-[#9333EA] transition duration-300 ease-in-out transform hover:scale-105">
              View Updates
            </button>
          </div>
          <div className="bg-gradient-to-r from-[#161d27] to-[#0d1117] backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-white">App Review Progress</h3>
            <p className="text-sm text-gray-400 mb-6">
              View ratings breakdown and progress updates.
            </p>
            <button className="w-full py-2 px-4 bg-gradient-to-r from-[#A7C7E7] to-[#F2F9FC] text-gray-800 font-bold rounded-lg hover:bg-[#38BDF8] transition duration-300 ease-in-out transform hover:scale-105">
              Track Progress
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
