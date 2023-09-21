import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import one from "../../../assets/deadliftone.jpg";
import two from "../../../assets/hooptraining.jpg";
import three from "../../../assets/deadlifttwo.jpg";


const TrackingCarouselTwo= () => {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="bg-white"

    >
      <SwiperSlide className="bg-white">
        <Image
          alt="Training Carousel"
          height={700}
          width={700}
          src={one}
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
          alt="Training Carousel"
          height={600}
          width={600}
          src={two}
          
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
          alt="Training Carousel"
          height={600}
          width={600}
          src={three}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TrackingCarouselTwo;

export const TrackingCarouselThree= () => {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="bg-white"

    >
      <SwiperSlide className="">
        <Image
          alt="Training Carousel"
          height={600}
          width={600}
          src={three}
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
          alt="Training Carousel"
          height={600}
          width={600}
          src={one}
          
        />
      </SwiperSlide>
      <SwiperSlide className="">
        <Image
          alt="Training Carousel"
          height={600}
          width={600}
          src={two}
        />
      </SwiperSlide>
    </Swiper>
  );
};

