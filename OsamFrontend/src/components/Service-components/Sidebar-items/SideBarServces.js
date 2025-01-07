import React from "react";

const NavServices = () => {
  const services = [
    {
      name: "Web Development",
      description:
        "Building responsive, user-friendly websites tailored to your needs.",
      icon: "🌐",
      link: "/services/web-development",
    },
    {
      name: "SEO Optimization",
      description:
        "Improving your website's visibility on search engines with cutting-edge techniques.",
      icon: "🔍",
      link: "/services/seo-optimization",
    },
    {
      name: "Mobile App Development",
      description:
        "Creating high-performance mobile apps to grow your business.",
      icon: "📱",
      link: "/services/mobile-app-development",
    },
    {
      name: "Digital Marketing",
      description:
        "Boosting your brand with effective online marketing strategies.",
      icon: "📈",
      link: "/services/digital-marketing",
    },
    {
      name: "App Reviews",
      description:
        "Boost your app's credibility on Play Store and App Store with positive reviews, helping you attract more users and build trust.",
      icon: "⭐",
      link: "/services/app-reviews",
    },
    {
      name: "App Registrations",
      description:
        "Drive real signups and expand your user base with our targeted app registration campaigns.",
      icon: "📝",
      link: "/services/app-registrations",
    },
    {
      name: "Map Reviews",
      description:
        "Enhance the visibility and reputation of your business locations with strategically placed positive reviews.",
      icon: "🗺️",
      link: "/services/map-reviews",
    },
    {
      name: "Advertisement Services",
      description:
        "We offer: Ad Production, Influencer Marketing, and Ad Management to help grow your brand's reach effectively.",
      icon: "📣",
      link: "/services/advertisement-services",
    },
    {
      name: "App Testing",
      description:
        "Real-User Testing: Identify potential issues with real-time user feedback. Technical Support: Expert teams for code and server optimization.",
      icon: "🧪",
      link: "/services/app-testing",
    },
    {
      name: "Video Editing",
      description:
        "Bring your video content to life with our professional editing services, catering to both short reels and long-form videos.",
      icon: "🎥",
      link: "/services/video-editing",
    },
  ];

  return (
    <div
      className="container mx-auto px-4 py-4 bg-gradient-to-r from-[#0d0d0e] to-[#08111d] text-white"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white bg-opacity-10 border border-white/20 rounded-md shadow-xl p-6 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] group"
          >
            {/* Card Icon */}
            <div className="text-5xl text-white mb-4">{service.icon}</div>
            {/* Card Content */}
            <div className="text-center">
              <h2 className="text-2xl font-extrabold text-white mb-2">{service.name}</h2>
              <p className="text-sm text-gray-300 mt-2">{service.description}</p>
            </div>

            {/* Hover Effect - Backdrop Blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

            {/* Buttons Section */}
            <div className="mt-6 w-full flex flex-col space-y-4 z-10">
              <button
                className="w-full py-2 bg-gradient-to-r from-[#E0E7FF] to-[#F1F5F9] text-gray-800 font-medium rounded-lg shadow-md hover:shadow-lg transition"
              >
                More Details
              </button>
              <button
                className="w-full py-2 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition"
              >
                Request a Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavServices;
