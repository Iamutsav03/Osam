import React from "react";
import logo from "../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles

// Example work data
const works = [
  {
    title: "E-Commerce Website",
    description: "A robust and user-friendly platform for online shopping.",
    image: logo,
  },
  {
    title: "SEO Campaign",
    description: "Improved organic traffic for a client's website by 200%.",
    image: logo,
  },
  {
    title: "Mobile App Design",
    description: "A sleek and intuitive design for a fitness tracking app.",
    image: logo,
  },
];

function WorkSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="w-full">
      <div className="mt-32">
        {/* Section Header */}
        <div className="bg-black h-[15vh] flex justify-center items-center gap-2">
          <Swiper
            spaceBetween={20} 
            slidesPerView={3}
            loop={true} 
            autoplay={{
              delay: 2000,
              disableOnInteraction: false, 
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2, 
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center gap-1 justify-center">
                  <h2 className="text-7xl font-bold text-white">Our Work</h2>
                  <img
                    src={logo}
                    className="h-32 object-contain"
                    alt={`Logo ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-gray-600 text-lg mb-12">
          Explore some of the projects and campaigns we've proudly delivered.
        </p>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-white shadow-lg rounded-lg"
            >
              {/* Work Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Work Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
