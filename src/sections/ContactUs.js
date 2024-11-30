import React from "react";

function ContactUs() {
  return (
    <section id="contact-us" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          Let’s work together! Reach out to us for inquiries, collaborations, or support.
        </p>

        {/* Call-to-Action */}
        <a
          href="#contact-form"
          className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 mb-8"
        >
          Get in Touch
        </a>

        {/* Contact Form */}
        <div
          id="contact-form"
          className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto"
        >
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg p-4 w-full mt-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-2xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 text-2xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Location Map */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Us Here
          </h3>
          <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.875627835294!2d144.96487381567865!3d-37.81627964205651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a248f6c2fc3!2sGoogle!5e0!3m2!1sen!2sau!4v1634671485783!5m2!1sen!2sau"
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
