import Image from "next/image";
import image from "../../../assets/basketballTeam.jpg";

import { FC } from "react";
interface FirstProps {}
const Third: FC<FirstProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row py-[300px] bg-green-50 h-[70%]">
      <div className="w-[80%] lg:w-[500px] py-20 items-center text-center">
        <h3 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-thin">
          Productivity takes you to the next level
        </h3>
        <p className="text-sm md:text-md py-4 text-gray-500">
          Use our calender to schedule all of your own events, such as practices, games, meetings, 
          or create a workspace with your team so all of you can stay connected. 
        </p>
      </div>
      <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center">
        <div className="h-[500px]">
          <Image
            width={450}
            height={300} // adjust this value to fit your needs
            src={image}
            alt="basketball team image"
          />
        </div>
        <div className="py-0">
          <video
            className="w-[450px] h-[300px] my-[-40px]"
            autoPlay
            loop
            muted
            src="/messagingVideo.mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default Third;
