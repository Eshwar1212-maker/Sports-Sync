"use client"

import Image from "next/image";
import { FC } from "react";
import CalenderOptions from "./CalenderOptions";
import clsx from "clsx";
import { useTheme } from "next-themes";
interface landingProps {}


const Landing: FC<landingProps> = ({}) => {
  const {theme} = useTheme()
  console.log(theme);
  
  return (
    <>
      {/*DESKTOP MENU*/}

      <div className="hidden lg:block py-[100px] sm:px-6 md:pl-60 container">
        <div className="flex flex-col md:flex-row space-x-9">
          <div className="space-y-8 w-full md:w-1/2">
            <h1 className={clsx(theme == "dark" ? "text-4xl font-bold text-gray-300" : "text-4xl font-bold text-black")}>
              Use our Calenders to visualize your routine
            </h1>
            <p className={clsx(theme == "light" ? "text-sm font-light text-black" : "text-sm font-light text-gray-400")}>
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
      {/*MOBILE MENU*/}
      <div className="px-10 items-center py-10 lg:hidden">
        <div className="space-y-7">
          <div className="space-y-7 px-7 md:px-20">
          <h1 className={clsx(theme == "dark" ? "text-4xl font-bold text-gray-300" : "text-4xl text-black font-bold")}>
              Use our Calenders to visualize your routine
            </h1>
            <p className={clsx(theme == "light" ? "text-sm font-light text-black" : "text-sm font-light text-gray-300")}>
              Use our Calender feature to either schedule your own practices and
              workouts, or collaborate with your team so you guys can schedule
              games, practices, events, etc.
            </p>
          </div>
          <div className="">
            <Image
              alt="Logo"
              height={400}
              width={400}
              className="mx-auto w-auto"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
            />
          </div>
        </div>
        <div className="">
          <div className="">
            <CalenderOptions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
