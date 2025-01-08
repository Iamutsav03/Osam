import React, { useState } from "react";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";
import {
  FaBars,
  FaTimes,
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

// Extracted NavItem for reusability
const NavItem = ({ name, icon, isSelected, onClick, isSidebarOpen }) => (
  <li
    className={`flex items-center justify-between gap-4 px-6 py-4 text-zinc-400 hover:text-white cursor-pointer transition-all ${
      isSelected ? "text-white bg-[#161d27]" : "text-zinc-400"
    }`}
    onClick={onClick}
  >
    <div className="flex items-center gap-5">
      <span className="text-xl">{icon}</span>
      {isSidebarOpen && <span className="text-sm font-medium">{name}</span>}
    </div>
    <span
      className={`h-1 w-1 rounded-full ${
        isSelected ? "bg-transparent" : "bg-green-600 bg-transparent animate-glowBlink"
      }`}
    ></span>
  </li>
);

// Extracted Logo for consistency
const Logo = ({ isSidebarOpen }) => (
  <div className="flex items-center gap-2">
    <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center text-blue-600 text-lg font-bold">
      O
    </div>
    {isSidebarOpen && <span className="text-xl font-semibold">OSAM</span>}
  </div>
);

function ServiceNavbar() {
  const [selectedItem, setSelectedItem] = useState("Services");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Services", icon: <FaClipboardList />, component: <NavServices /> },
    { name: "Packages", icon: <FaBox />, component: <NavPackages /> },
    { name: "Dashboard", icon: <FaChartLine />, component: <Dashboard /> },
    { name: "Consultation", icon: <FaComments />, component: <Consultation /> },
    { name: "Balance", icon: <FaWallet />, component: <BalanceSection /> },
    { name: "FAQ", icon: <FaQuestionCircle />, component: <FaqSection /> },
  ];

  const renderContent = () => {
    const selectedNavItem = navItems.find((item) => item.name === selectedItem);
    return selectedNavItem?.component || <NavServices />;
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-white">
      {/* Top Bar for Mobile */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        <Logo isSidebarOpen={true} />
        <button
          className="text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar for Larger Screens */}
      <div
        className={`flex flex-col h-full ${
          isSidebarOpen ? "w-48" : "w-24"
        } transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between w-full">
          <Logo isSidebarOpen={isSidebarOpen} />
          <button
            className="text-white text-2xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <TiArrowLeftThick /> : <TiArrowRightThick />}
          </button>
        </div>

        {/* Navigation Items */}
        <ul className="flex-1 space-y-5 mt-4 w-full">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              name={item.name}
              icon={item.icon}
              isSelected={selectedItem === item.name}
              onClick={() => setSelectedItem(item.name)}
              isSidebarOpen={isSidebarOpen}
            />
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-blue-600 text-white z-50 p-4 md:hidden">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                icon={item.icon}
                isSelected={selectedItem === item.name}
                onClick={() => {
                  setSelectedItem(item.name);
                  setIsMobileMenuOpen(false);
                }}
                isSidebarOpen={true}
              />
            ))}
          </ul>
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>
    </div>
  );
}

export default ServiceNavbar;
