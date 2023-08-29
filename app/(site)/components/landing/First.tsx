import Image from "next/image";
import image from "../../../assets/social.jpg";

import { FC } from "react";
interface FirstProps {}
const First: FC<FirstProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row pb-9 bg-white">
      <div className="w-[80%] lg:w-[600px] py-20 text-center">
      <h3 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-thin">
          Sports Sync is the <br /> social network for athletes
        </h3>
        <p className="text-sm sm:text-md md:text-xl py-4 text-gray-500">
          Message your teammates or friends to schedule games, and create a
          custom calender for your team so you guys can manage your events, such
          as games, practices, meetings, and more.
        </p>
        </div>

        <div className="flex flex-col lg:py-10 w-full md:w-1/2 lg:w-2/5 xl:w-1/2 items-center px-2">
            <Image
              alt="calender tracker image"
              src={image}
              width={450}
              height={100}
              priority={true}
              />
        </div>
    </div>
  );
};

export default First;
