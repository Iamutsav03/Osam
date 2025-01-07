import React, { useRef } from "react";
import axios from "axios";

function Login({ isOpen, onClose }) {
  
  const formRef = {
    emailRef : useRef(),
    passwordRef: useRef(),
  }
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login API here
    const email = formRef.emailRef.current.value;
    const password = formRef.passwordRef.current.value;

    const data = {
      ContractorEmail: email,
      ContractorPassword: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("response: ", response.data);

      if (response.status === 200) {
        console.log("Logged In Successfully!");
        formRef.emailRef.current.value = "";
        formRef.passwordRef.current.value = "";
      }
    } catch (e) {
      console.error("Error Login", e);
      if (e.response && e.response.status === 401) {
        alert("Invalid Credentials!");
        return;
      } else {
        alert("An error occurred while logging in!");
        return;
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Popup Container */}
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Login Form */}
        <h2 className="text-2xl font-bold text-center text-[#026260] mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              ref={formRef.emailRef}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#026260]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              ref={formRef.passwordRef}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#026260]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#026260] text-white rounded-lg hover:bg-[#024a4a] transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-[#026260] font-medium">
              Register
            </a>
          </p>
          <p>
            <a href="/forgot-password" className="text-[#026260] font-medium">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
