import { Footer } from "react-day-picker";
import one from "../../../assets/hey.png";
import two from "../../../assets/tr.png";
import Image from "next/image";
import { FC } from "react";

interface SecondProps {}

const Fourth: FC<SecondProps> = ({}) => {
  return (
    <div>
    <div className="flex flex-col justify-center items-center lg:flex-row sm:mb-[-37px] pb-11 bg-white">
      <div className="w-[80%] lg:w-[600px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-3xl md:text-3xl lg:text-5xl font-thin">
          Monitor progressive overload and more
        </h3>
        <p className="text-sm md:text-xl py-4 text-gray-500">
         Track your progress on every exercise with beautiful charts, monitoring personal records, weight increase, 
         every time you log a workout.
        </p>
        <div className="bg-black hidden lg:block">
            <Image
              alt="workout log image"
              src={two}
              width={600}
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
            priority={true}
            alt="progressive overload image"
          />
        </div>
      </div>
    </div>
    {/* <Footer /> */}
   </div>


  );
};

export default Fourth;
