import React, { useState } from "react";

const Consultation = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    media: null,
    mediaDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      media: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log("Form submitted", formData);
  };

  return (
    <section
      className="max-w-full px-4 py-2"
      style={{ backgroundColor: "#121212" }} // Dark background for modern aesthetic
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Description Section (Major Area) */}
        <div className="md:w-2/3 w-full p-6 rounded-2xl shadow-lg bg-[#1c1c1c]">
          <h2 className="text-4xl font-semibold mb-8 text-white">
            Tell Us Your Requirements
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name & Email Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="w-full p-4 rounded-lg bg-[#121212] border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-[#6272a4] text-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 rounded-lg bg-[#121212] border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-[#6272a4] text-white"
              />
            </div>

            {/* Message Textarea */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your needs here..."
              className="w-full p-4 rounded-lg bg-[#121212] border-none shadow-inner h-40 focus:outline-none focus:ring-2 focus:ring-[#6272a4] text-white resize-none"
            ></textarea>

            {/* File Upload */}
            <div>
              <label
                htmlFor="media"
                className="block text-lg text-white mb-2"
              >
                Upload Image or Video
              </label>
              <input
                type="file"
                name="media"
                onChange={handleFileChange}
                accept="image/*, video/*"
                className="w-full p-4 rounded-lg bg-[#121212] border-none shadow-inner focus:outline-none focus:ring-2 focus:ring-[#6272a4] text-white"
              />
              {formData.media && (
                <p className="mt-2 text-sm text-gray-400">
                  File selected: {formData.media.name}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#6272a4] to-[#44475a] text-white shadow-lg hover:shadow-xl transition"
              >
                Submit Your Request
              </button>
            </div>
          </form>
        </div>

        {/* Need Help Section */}
        <div className="md:w-1/3 w-full p-8 rounded-2xl shadow-lg bg-[#1c1c1c]">
          <div className="p-6 rounded-xl shadow-inner">
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Need Immediate Help?
            </h2>
            <p className="text-lg text-gray-300">
              Feel free to reach out to us directly for quick assistance and
              consultation:
            </p>
            <p className="text-lg mt-4 text-white">
              Email:{" "}
              <a
                href="mailto:contact@osam.com"
                className="text-[#6272a4] hover:underline"
              >
                contact@osam.com
              </a>
            </p>
            <p className="text-lg mt-2 text-white">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-[#6272a4] hover:underline"
              >
                +1 234 567 890
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
