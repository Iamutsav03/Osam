import React, { useState } from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaClipboardList,
  FaBox,
  FaChartLine,
  FaComments,
  FaWallet,
  FaQuestionCircle,
} from "react-icons/fa";
import NavServices from "./Sidebar-items/SideBarServces";
import Dashboard from "./Sidebar-items/Dashboard";
import BalanceSection from "./Sidebar-items/BalanceSection";
import Consultation from "./Sidebar-items/Consultation";
import NavPackages from "./Sidebar-items/packages/NavPackages";
import FaqSection from "./Sidebar-items/FaqSection";

function ServiceNavbar() {
  const [selectedItem, setSelectedItem] = useState("Services");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", icon: <FaClipboardList /> },
    { name: "Packages", icon: <FaBox /> },
    { name: "Dashboard", icon: <FaChartLine /> },
    { name: "Consultation", icon: <FaComments /> },
    { name: "Balance", icon: <FaWallet /> },
  ];

  const renderContent = () => {
    switch (selectedItem) {
      case "Services":
        return <NavServices />;
      case "Dashboard":
        return <Dashboard />;
      case "Consultation":
        return <Consultation />;
      case "Balance":
        return <BalanceSection />;
      case "Packages":
        return <NavPackages />;
      case "FAQ":
        return <FaqSection />;
      default:
        return <NavServices />;
    }
  };

  const getSidebarStyle = () => {
    switch (selectedItem) {
      case "Consultation":
        return "bg-[#121A26] text-[#FFFFFF]";
      case "Services":
        return "bg-[#2A2E35] text-white";
      case "Dashboard":
        return "bg-gradient-to-r from-[#3A4C63] to-[#0A1929] text-white";
      case "Balance":
        return "bg-gradient-to-r from-[#2C3E50] to-[#121A26] text-[#E5E7EB]";
      case "Packages":
        return "bg-gradient-to-br from-[#6700F1] to-[#00FFCC] text-[#ffffff] shadow-[0_4px_10px_0px_rgba(255,255,255,0.2)] transition-all duration-500";
      default:
        return "bg-[#026261] text-white";
    }
  };

  return (
    <div className="flex h-screen">
      {/* Top Bar for Mobile */}
      <div className="bg-gradient-to-r from-[#026261] to-[#043d3b] text-white flex items-center justify-between px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center text-[#026261] text-lg font-bold">
            O
          </div>
          <span className="text-lg font-semibold">OSAM</span>
        </div>
        <button
          className="text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar for Larger Screens */}
      <div className="flex">
        <div
          className={`flex flex-col items-center top-0 left-0 h-full ${
            isSidebarOpen ? "w-48" : "w-16"
          } transition-all duration-300 ease-in-out ${getSidebarStyle()}`}
        >
          {/* Company Logo/Name */}
          <div className="p-4 flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              {isSidebarOpen && (
                <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center text-[#026261] text-lg font-bold">
                  O
                </div>
              )}
              {isSidebarOpen && (
                <span className="text-xl font-semibold text-white">OSAM</span>
              )}
            </div>
            <button
              className="text-white focus:outline-none text-2xl"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <TiArrowLeftThick /> : <TiArrowRightThick />}
            </button>
          </div>

          {/* Navigation Items */}
          <ul className="flex-1 space-y-4 mt-4 w-full">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-4 px-4 py-2 hover:bg-[#034946] rounded-md cursor-pointer transition-all ease-in-out duration-200 ${
                  selectedItem === item.name ? "bg-[#034946]" : ""
                }`}
                onClick={() => setSelectedItem(item.name)}
              >
                <span className="text-xl">{item.icon}</span>
                {isSidebarOpen && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </li>
            ))}
          </ul>

          {/* FAQ Option - Positioned at the Bottom */}
          <div className="mt-auto p-4 border-t border-gray-600 w-full">
            <div
              className="flex items-center gap-4 cursor-pointer hover:bg-[#034946] p-2 rounded-md transition-all ease-in-out duration-200"
              onClick={() => setSelectedItem("FAQ")}
            >
              <span className="text-xl">
                <FaQuestionCircle />
              </span>
              {isSidebarOpen && (
                <span className="text-sm font-medium">FAQ</span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="bg-gradient-to-r from-[#026261] to-[#043d3b] text-white w-full absolute z-50 md:hidden">
            <ul className="space-y-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 px-4 py-2 hover:bg-[#034946] rounded-md cursor-pointer"
                  onClick={() => {
                    setSelectedItem(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </li>
              ))}
              {/* Mobile FAQ Item */}
              <li
                className="flex items-center gap-4 px-4 py-2 hover:bg-[#034946] rounded-md cursor-pointer"
                onClick={() => {
                  setSelectedItem("FAQ");
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="text-xl">
                  <FaQuestionCircle />
                </span>
                <span className="text-sm font-medium">FAQ</span>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="w-full bg-green-800 h-full overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default ServiceNavbar;