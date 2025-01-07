import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import WebsiteCard from "../Cards/WebsiteCard";
import { OsamContext } from "../../../../../context/Context";

function WorkCard() {
  const { cardData } = useContext(OsamContext);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        pagination={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {cardData.map((card) => (
          <SwiperSlide>
            <WebsiteCard
              title={card.title}
              image={card.image}
              link={card.link}
              description={card.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default WorkCard;
