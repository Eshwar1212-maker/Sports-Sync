"use client";

import Image from "next/image";
import { FC } from "react";
import CalenderOptions from "./CalenderOptions";
import clsx from "clsx";
import { useTheme } from "next-themes";
interface landingProps {}

const Landing: FC<landingProps> = ({}) => {
  const { theme } = useTheme();

  return (
    <>
      {/*DESKTOP MENU*/}

      <div className="hidden lg:block py-[100px] sm:px-6 md:pl-60 container">
        <main className="flex flex-col md:flex-row space-x-9 pb-11">
          <div className="space-y-4 w-[90vw] md:w-1/2">
            <h1
              className={clsx(
                "lg:text-4xl xl:text-5xl font-bold",
                theme === "dark" && "text-gray-200"
              )}
            >
              Use our Calenders to visualize your routine
            </h1>
            <p
              className={clsx(
                "lg:text-xl font-light py-6",
                theme === "dark" && "text-gray-300"
              )}
            >
              Use our Calender feature to either schedule your own practices and
              workouts, or collaborate with your team so you guys can schedule
              games, practices, events, etc.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              alt="Logo"
              height={1000}
              width={1000}
              className="mx-auto w-auto"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
              aria-label="fullcalenderjs image"
            />
            {/* <span className="text-md text-gray-200 flex justify-end">
              Powered by fullcalenderjs
            </span> */}
          </div>
        </main>
        <div className="flex flex-start">
            <CalenderOptions />
        </div>
      </div>
      {/*MOBILE MENU*/}
      <div className="px-4 items-center py-10 lg:hidden">
        <div className="space-y-7">
          <div className="space-y-7 px-7 md:px-20">
            <h1
              className={clsx(
                theme == "dark"
                  ? "text-3xl sm:text-4xl font-bold text-gray-300"
                  : "text-3xl sm:text-4xl text-black font-bold"
              )}
            >
              Use our Calenders to visualize your routine
            </h1>
            <p
              className={clsx(
                theme == "light"
                  ? "text-sm sm:text-lg font-light text-black"
                  : "text-sm font-light text-gray-300"
              )}
            >
              Use our Calender feature to either schedule your own practices and
              workouts, or collaborate with your team so you guys can schedule
              games, practices, events, etc.
            </p>
          </div>
          <div className="px-6">
            <Image
              alt="Logo"
              height={400}
              width={400}
              className="mx-auto w-auto"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
              aria-label="fullcalenderjs image"
            />
          </div>
        </div>
        <div className="my-5">
          <div className="mx-auto">
            <CalenderOptions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
