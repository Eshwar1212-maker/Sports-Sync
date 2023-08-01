import Image from "next/image";
import { FC } from "react";
interface landingProps {}
const Landing: FC<landingProps> = ({}) => {
  return (
    <div className="pl-80 py-[100px]">
      <div className="flex flex-row px-20">
        <div className="space-y-8 w-1/2">
          <h1 className="text-3xl font-bold text-gray-700">
            Use our Calenders to visualize your routine
          </h1>
          <p className="text-gray-500 text-lg ">
            Use our Calender feature to either schedule your own practices and
            workouts, or collaborate with your team so you guys can schedule
            games, practices, events, etc.
          </p>
        </div>
        <div className="w-1/2">
            <Image
             alt='Logo'
             height={370}
             width={370}
             className='mx-auto w-auto'
             src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
             />
        </div>
      </div>
    </div>
  );
};

export default Landing;
