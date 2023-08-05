import one from "../../../assets/dash.jpg";
import Image from "next/image";
import { FC } from "react";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row bg-green-100 mb-[-430px] sm:mb-[-38px]">
      <div className="w-[80%] lg:w-[500px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-3xl md:text-3xl lg:text-4xl font-thin">
          It all starts with tracking
        </h3>
        <p className="text-sm md:text-md py-4 text-gray-500">
         Visit your dashboard regularly to see how consistent and intense 
         you have been working out over the course of months, in order 
         for you to judge your progress. 
        </p>
      </div>
      <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center mb-[60px] sm:mb-[100px]">
        <div className="h-[500px]">
          <Image
            width={450}
            height={300} // adjust this value to fit your needs
            src={one}
            alt="basketball team image"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
