"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface WorkSpaceFourthProps {}
const WorkSpaceFourth: FC<WorkSpaceFourthProps> = ({}) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div id="" className=" bg-white h-[72vh] lg:h-[760px] py-20 md:py-11 w-full">
      <div
          data-aos="fade-up"
          data-aos-duration="3000"
        className="flex flex-col lg:flex-row lg:justify-between sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] mx-auto h-[400px] lg:py-11"
      >
        <div
          className="mx-auto my-auto max-w-[350px] sm:max-w-[500px] pt-[70px] pb-10 lg:py-[120px] text-2xl lg:text-4xl"
        >
          Customize your program or use out templates. The grind starts when
          nobody's watching.
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1200"
          className="my-auto max-w-[89%] sm:max-w-[80%] lg:max-w-full mx-auto"
        >
          <video
            className=" bg-slate-300"
            width="630" // increased from 850 to 950
            height="700" // increased from 800 to 900
            aria-label="Workout log video"
            autoPlay
            muted
            loop
          >
            <source src="/drag.mp4" type="video/mp4" />
          </video>
          <p className="mx-auto text-center text-sm font-semibold">
            Use drag and drop to make your life easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSpaceFourth;
