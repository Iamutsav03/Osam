import React from "react";

function AboutUs() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          Opticore Solutions and Marketing Company is dedicated to providing
          innovative, results-driven solutions to help businesses grow and thrive in the digital world.
        </p>

        {/* Company Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "App/Map Positive Reviews Marketing",
            "App Registration Increment",
            "Advertisement (Shooting to Telecasting)",
            "SEO Improvements",
            "Web and App Design & Development",
            "Ratings Improvement",
            "New App Testing",
            "Video Editing",
            "Photoshop Logo Design",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800">{service}</h3>
              <p className="text-gray-600 mt-2 text-sm">
                {service === "App/Map Positive Reviews Marketing"
                  ? "Enhance your app’s reputation with positive and genuine reviews."
                  : service === "App Registration Increment"
                  ? "Drive higher app downloads and registrations."
                  : service === "Advertisement (Shooting to Telecasting)"
                  ? "End-to-end advertising services for your brand."
                  : "Professional support to elevate your business."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
