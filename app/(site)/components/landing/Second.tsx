import one from "../../../assets/planning.jpg";
import Image from "next/image";
import calenderTwo from "../../../assets/calendertwo.png"
import { FC } from "react";

interface SecondProps {}

const Second: FC<SecondProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row bg-orange-200">
      <div>


      <div className="w-[80%] lg:w-[500px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-thin">
          Productivity takes<br /> you to the next level
        </h3>
        <p className="text-md md:text-md py-4 text-gray-500">
          Use our calender to schedule all of your own events, such as practices, games, meetings, 
          or create a workspace with your team so all of you can stay connected. 
        </p>
        <div className="bg-black hidden md:block">
            <Image
              alt="calender tracker image"
              src={calenderTwo}
              width={600}
              height={100}
              />
            </div>
      </div>
      </div>
      <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center">
        <div className="">
          <Image
            width={450}
            height={300} // adjust this value to fit your needs
            src={one}
            alt="Calender tracker image"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;
