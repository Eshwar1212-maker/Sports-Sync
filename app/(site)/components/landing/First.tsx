import Image from "next/image";
import image from "../../../assets/team.jpg";

import { FC } from "react";
interface FirstProps {}
const First: FC<FirstProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row my-10 py-9 md:py-0 md:my-0 bg-white">
      <div className="w-[80%] lg:w-[500px] sm:py-20 items-center text-center">
        <h3 className="text-gray-800 text-3xl md:text-3xl lg:text-5xl font-thin">
          Sports Sync is the <br /> social network for athletes
        </h3>
        <p className="text-sm sm:text-md md:text-xl py-4 text-gray-500">
          Message your teammates or friends to schedule games, and create a
          custom calender for your team so you guys can manage your events, such
          as games, practices, meetings, and more.
        </p>
      </div>
      <div className="flex flex-col px-1 lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center lg:pl-[97px] mb-10">
        <div className="h-[470px]">
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

export default First;
