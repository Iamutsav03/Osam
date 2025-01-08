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
    <div className="bg-[#0d1117] text-white min-h-screen">
      <header className="bg-gradient-to-r from-[#161d27] to-[#0d1117] text-gray-100 flex justify-between items-center px-6 py-4 shadow-xl">
      <h1 className="text-3xl font-extrabold tracking-wide">Services</h1>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-[#161d27] rounded-lg p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-xl group"
          >
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              {/* Service Name */}
              <h2 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {service.name}
              </h2>
              {/* Description */}
              <p className="text-sm text-gray-400 text-center group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </div>

            {/* Animated Glow Border Effect */}
            <div className="absolute inset-0 border-2 border-solid border-transparent rounded-lg group-hover:border-[#3da077] group-hover:animate-pulse transition-all duration-300 z-10"></div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col space-y-2">
              <button className="py-2 text-sm bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-md hover:from-blue-400 hover:to-blue-500 transition-shadow shadow-md hover:shadow-lg">
                More Details
              </button>
              <button className="py-2 text-sm bg-gradient-to-r from-green-500 to-green-400 text-white rounded-md hover:from-green-400 hover:to-green-500 transition-shadow shadow-md hover:shadow-lg">
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
