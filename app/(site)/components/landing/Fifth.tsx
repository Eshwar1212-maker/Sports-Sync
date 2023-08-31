

import Image from "next/image";
import { FC } from "react";
import Footer from "./Footer";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SecondProps {}

const Fifth: FC<SecondProps> = ({}) => {
  return (
    <div className="hidden md:block bg-gray-100 w-full mx-auto py-3 pb-7">
      <div className="flex flex-col justify-center items-center lg:flex-row sm:mb-[-37px] pb-11 py-6">
        <SwiperC />
      </div>
    </div>
  );
};

export default Fifth;

function SwiperC() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: false,
          delay: 24000
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <video className="w-full mx-auto h-[70vh] max-w-[1060px] py-7" width="450" height="450" aria-label="Workout log video" autoPlay muted loop >
            <source 
            src="/cc.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
          <video className="w-full h-[70vh] max-w-[1100px] m-auto px-10" width="450" height="300" aria-label="Calender feature video" autoPlay muted loop>
            <source 
            src="/c.mp4" 
            type="video/mp4" 

            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
          <video className="w-full h-[70vh] max-w-[1100px] m-auto px-10" width="450" height="300" aria-label="Messaging feature video" autoPlay muted loop>
            <source 
            src="/m.mp4" 
            type="video/mp4" 

            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
