import Image from "next/image";
import { FC } from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SecondProps {}

const TrackingCarousel: FC<SecondProps> = ({}) => {
  return (
        <SwiperC />
  );
};

export default TrackingCarousel;

function SwiperC() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 24000
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
 
        <SwiperSlide className="">
          <video className=" h-auto mx-auto" aria-label="Calender feature video" autoPlay muted loop>
            <source 
            src="/cc.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
          <video className=" h-auto mx-auto" aria-label="Workout log video" autoPlay muted loop>
            <source 
            src="/dashboards.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
