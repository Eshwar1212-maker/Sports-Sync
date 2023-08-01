import Image from "next/image";
import { FC } from "react";
import CalenderOptions from "./CalenderOptions";
interface landingProps {}
const Landing: FC<landingProps> = ({}) => {
  return (
    <div className="py-[100px] sm:px-6 md:pl-60 container">
      <div className="flex flex-col md:flex-row space-x-9">
        <div className="space-y-8 w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-700">
            Use our Calenders to visualize your routine
          </h1>
          <p className="text-gray-500 text-md xl:text-lg ">
            Use our Calender feature to either schedule your own practices and
            workouts, or collaborate with your team so you guys can schedule
            games, practices, events, etc.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <Image
            alt="Logo"
            height={400}
            width={400}
            className="mx-auto w-auto"
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
          />
        </div>
      </div>
      <div className="flex flex-start">
        <div className="">
          <CalenderOptions />
        </div>
      </div>
    </div>
  );
};

export default Landing;
