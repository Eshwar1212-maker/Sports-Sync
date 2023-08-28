

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
    <div className="bg-white w-full mx-auto">
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
          delay: 16000
          
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
        <h2 className="text-center text-2xl font-semibold pb-5">Track progressive overload on every lift</h2>
          <video className="w-full h-[70vh]" width="450" height="300" autoPlay muted loop >
            <source 
            src="/workoutlog.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Image
            width={450}
            height={300}
            src={two}
            alt="progressive overload image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={450}
            height={300}
            src={three}
            alt="progressive overload image"
          />
        </SwiperSlide> */}
        <SwiperSlide>
            <h2 className="text-center text-2xl font-semibold pb-10">Customize your workout log</h2>
          <video className="w-full h-[70vh]" width="450" height="300" autoPlay muted loop>
            <source 
            src="/.mp4" 
            type="video/mp4" 

            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
