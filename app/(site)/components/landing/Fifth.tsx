

import { FC } from "react";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SecondProps {}

const Fifth: FC<SecondProps> = ({}) => {
  return (
    <div className=" w-full mx-auto px-4 md:px-20 xl:px-0">
      <div className="flex flex-col justify-center items-center lg:flex-row sm:mb-[-37px] pb-11">
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
          <video className="w-full mx-auto sm:h-[70vh] max-w-[1060px]" width="450" height="450" aria-label="Workout log video" autoPlay muted loop >
            <source 
            src="/cc.mp4" 
            type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
        <video className="w-full mx-auto sm:h-[70vh] max-w-[1060px]" width="450" height="450" aria-label="Workout log video" autoPlay muted loop >
            <source 
            src="/c.mp4" 
            type="video/mp4" 

            />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="">
        <video className="w-full mx-auto sm:h-[70vh] max-w-[1060px]" width="450" height="450" aria-label="Workout log video" autoPlay muted loop >
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
