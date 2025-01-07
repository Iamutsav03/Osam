import React, { useContext, useRef, useState } from "react";
import FeedbackCard from "../Cards/FeedbackCard"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { OsamContext } from "../../../../../context/Context";

const FeedbackSection = () => {
  const {feedbacks} = useContext(OsamContext)
  return (
    <>
      <Swiper modules={[Pagination,Autoplay]} pagination={{clickable:true}} autoplay={{delay:3000,disableOnInteraction: false,}} className="mt-10 mb-10">
        {feedbacks.map((feedback)=>(
          <SwiperSlide><FeedbackCard profilePic={feedback.profilePic} name = {feedback.name} story = {feedback.story}/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeedbackSection;
