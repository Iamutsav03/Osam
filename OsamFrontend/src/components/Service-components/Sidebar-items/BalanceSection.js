import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { BsFillCreditCardFill, BsBank2 } from "react-icons/bs";
// import "../../../index.css";

function BalanceSection() {
  const [balance, setBalance] = useState(0); // Example balance
  const [amount, setAmount] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 }); // Initial rotation
  const [isDragging, setIsDragging] = useState(false); // Drag state
  const [startPos, setStartPos] = useState({ x: 0, y: 0 }); // Initial mouse position

  const calculateBonus = (amount) => {
    if (amount >= 25000) {
      return amount * 0.075; // 7.5% bonus
    } else if (amount >= 10000) {
      return amount * 0.03; // 3% bonus
    }
    return 0;
  };

  const handleAmountChange = (e) => {
    const value = Number(e.target.value);
    setAmount(value);
    setBonus(calculateBonus(value));
  };

  const handlePayment = () => {
    if (amount > 0) {
      const newBalance = balance + amount + bonus;
      setBalance(newBalance);
      alert(`Payment successful! Bonus added: ₹${bonus.toFixed(2)}`);
      setAmount(0); // Reset input
      setBonus(0); // Reset bonus
    } else {
      alert("Please enter a valid amount.");
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startPos.x;
      const deltaY = e.clientY - startPos.y;

      // Update rotation based on drag distance
      setRotation((prev) => ({
        x: prev.x - deltaY * 0.3, // Invert Y-axis movement for natural drag
        y: prev.y + deltaX * 0.3,
      }));

      setStartPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-[#2E2E2E] to-[#121212] p-8 flex flex-wrap md:flex-nowrap gap-8 w-full text-gray-300"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves
    >
      {/* Left Section: Add Money Form */}
      <div className="w-full md:w-2/3 border-l-4 border-[#00FFCC] bg-[#2B2B2B] shadow-lg rounded-lg p-8 transform">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-extrabold text-[#00FFCC] tracking-widest">
            Add Money to Wallet
          </h1>
          <div className="flex items-center gap-4 text-[#00FFCC]">
            <FaWallet className="text-3xl" />
            <div className="text-2xl font-semibold">
              ₹{balance.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="mb-6">
          <label className="block text-[#E5E7EB] font-medium mb-2">
            Amount (₹):
          </label>
          <input
            type="number"
            className="w-full p-3 border border-[#333333] rounded-lg bg-[#3A3A3A] text-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#00FFCC]"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#E5E7EB] mb-2">
            Payment Method
          </h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 p-3 bg-[#333333] text-[#E5E7EB] rounded-lg hover:bg-[#444444] transition">
              <BsFillCreditCardFill /> Pay with Card
            </button>
            <button className="flex items-center gap-2 p-3 bg-[#333333] text-[#E5E7EB] rounded-lg hover:bg-[#444444] transition">
              <BsBank2 /> Pay with UPI
            </button>
          </div>
        </div>

        {/* Add Money Button */}
        <button
          onClick={handlePayment}
          className="w-full py-3 bg-[#00FFCC] text-black font-semibold rounded-lg hover:bg-[#00e6b3] transition"
        >
          Add Money
        </button>
      </div>

      {/* Right Section: 3D Payment Details */}
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <div
          className="relative w-[200px] h-[250px] perspective"
          onMouseDown={handleMouseDown}
        >
          {/* 3D Machine */}
          <div
            className="relative w-full h-full transform-style-3d transition-transform duration-100"
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            {/* Front Face: Payment Details */}
            <div className="face front flex flex-col items-center justify-center bg-gray-900">
              <div className="w-[150px] h-[80px] bg-black border-2 border-teal-500 rounded-lg p-2">
                <h2 className="text-xs font-bold text-teal-400 mb-1">
                  Payment Details
                </h2>
                <p className="text-[10px] text-gray-300">
                  <strong>Entered Amount:</strong> ₹{amount.toLocaleString()}
                </p>
                <p className="text-[10px] text-gray-300">
                  <strong>Bonus:</strong> ₹{bonus.toFixed(2)}
                </p>
                <p className="text-[10px] text-gray-300">
                  <strong>Total Balance:</strong> ₹
                  {(balance + amount + bonus).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Back Face: Special Offers */}
            <div className="face back flex items-center justify-center bg-gray-800">
              <div className="text-center">
                <h2 className="text-teal-400 text-sm font-bold mb-1">
                  Special Offers
                </h2>
                <p className="text-[10px] text-gray-300">
                  Add ₹10,000+ for a <strong>3% bonus</strong>.
                </p>
                <p className="text-[10px] text-gray-300">
                  Add ₹25,000+ for a <strong>7.5% bonus</strong>.
                </p>
              </div>
            </div>

            {/* Other Faces */}
            <div className="face left flex items-center justify-center bg-gray-700">
              <p className="text-xs text-gray-300">Balance: ₹{balance}</p>
            </div>
            <div className="face right flex items-center justify-center bg-gray-700">
              <p className="text-xs text-gray-300">Amount: ₹{amount}</p>
            </div>
            <div className="face top flex items-center justify-center bg-gray-700">
              <p className="text-xs text-gray-300">Bonus: ₹{bonus.toFixed(2)}</p>
            </div>
            <div className="face bottom flex items-center justify-center bg-gray-700">
              <p className="text-xs text-gray-300">Happy Savings!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BalanceSection;
