import Image from "next/image";
import { FC } from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SecondProps {}

const NavBarItemCarousel: FC<SecondProps> = ({}) => {
  return (
    <div className="hidden md:block w-full mx-auto">
        <SwiperC />
    </div>
  );
};

export default NavBarItemCarousel;

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
        className="mySwiper max-w-[300px] h-[300px]"
      >
        <SwiperSlide className="">
          <video className="w-full h-auto mx-auto" aria-label="Workout log video" autoPlay muted loop>
            <source 
            src="/cc.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
          <video className="w-full h-auto mx-auto" aria-label="Calendar feature video" autoPlay muted loop>
            <source 
            src="/c.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
          <video className="w-full h-auto mx-auto" aria-label="Messaging feature video" autoPlay muted loop>
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
