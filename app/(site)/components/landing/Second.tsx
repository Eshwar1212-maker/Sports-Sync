import one from "../../../assets/planning.jpg";
import Image from "next/image";
import calenderTwo from "../../../assets/cal.png"
import { FC } from "react";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row bg-gray-100 pb-9">
      <div className="w-[80%] lg:w-[600px] py-20 text-center">
      <h3 className="text-gray-800 text-3xl md:text-3xl lg:text-5xl font-thin mx-auto">
          Productivity takes<br /> you to the next level
        </h3>
        <p className="text-sm md:text-xl py-4 text-gray-500">
          Use our calender to schedule all of your own events, such as practices, games, meetings, 
          or create a workspace with your tddeam so all of you can stay connected. 
        </p>
        <div className="bg-black hidden lg:block">
            <Image
              alt="calender tracker image"
              src={calenderTwo}
              width={800}
              height={100}
              priority={true}
              />
            </div>
      </div>
      <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center px-2">
        <div className="">
          <Image
            width={450}
            height={300} // adjust this value to fit your needs
            src={one}
            alt="Calender tracker image"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
