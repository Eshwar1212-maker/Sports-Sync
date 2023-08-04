import one from "../../../assets/dash.jpg";
import Image from "next/image";
import { FC } from "react";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row bg-green-50 py-[200px]">
      <div>


      <div className="w-[80%] lg:w-[500px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-thin">
          It all starts with tracking
        </h3>
        <p className="text-md md:text-md py-4 text-gray-500">
         Visit your dashboard regularly to see how consistent and intense 
         you have been working out over the course of months, in order 
         for you to judge your progress. 
        </p>
      </div>
      </div>
      <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center">
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
