import one from "../../../assets/dash.jpg";
import two from "../../../assets/das.png";
import Image from "next/image";
import { FC } from "react";
import Footer from "./Footer";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  return (
    <div>
    <div className="flex flex-col justify-center items-center lg:flex-row bg-slate-100 sm:mb-[-37px] pb-11">
      <div className="w-[80%] lg:w-[600px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-3xl md:text-3xl lg:text-5xl font-thin">
          It all starts with tracking
        </h3>
        <p className="text-sm md:text-xl py-4 text-gray-500">
         Visit your dashboard regularly to see how consistent and intense 
         you have been working out over the course of months, in order 
         for you to judge your progress. 
        </p>
        <div className="bg-black hidden lg:block">
            <Image
              alt="calender tracker image"
              src={two}
              width={800}
              height={100}
              priority={true}
              />
            </div>
      </div>
      <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center px-2 mx-2 my-9">
        <div className="">
          <Image
            width={450}
            height={300} 
            src={one}
            alt="tracker image"
            priority={true}

          />
        </div>
      </div>
    </div>
        </div>


  );
};

export default Second;
