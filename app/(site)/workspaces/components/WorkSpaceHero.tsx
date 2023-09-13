"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface heroProps {}
const WorkSpaceHero: FC<heroProps> = ({}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row justify-between] md:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[110px] lg:py-[200px] gap-10">
      <div className=" my-auto space-y-3 sm:space-y-4 w-[84%] sm:w-[80%] xl:w-[50%] mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-7xl">Create your own team and project calenders</h1>
        <p className="sm::text-lg xl:text-xl lg:max-w-[600px]">
          Syned is the easiest way for individual athletes or teams to plan, manage, and visualize their events in a shared team calender. <br />We're here to help you have
          as strong a season as ever.
        </p>
        <div className="text-sm sm:text-lg flex gap-8 py-2">
          <button className="hover:underline">Tracking</button>
          <button className="hover:underline">Planning</button>
          <button className="hover:underline">Collaborating</button>
          <button className="text-blue-700 cursor-default">Succeding</button>
        </div>
        <div className="hidden md:block mx-auto">
          <button onClick={() => router.push("/auth")} className="p-5 border-[1px] border-black text-md sm:text-xl hover:bg-blue-300 transition ease-out duration-300">
            Lets Get Your Workspace Set Up
          </button>
        </div>
      </div> 
      <div className="my-auto max-w-[89%] sm:max-w-[80%] lg:max-w-full mx-auto">
        <video
          className=" bg-slate-300"
          width="800" // increased from 850 to 950
          height="700" // increased from 800 to 900
          aria-label="Workout log video"
          autoPlay
          muted
          loop
        >
          <source src="/workspace.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="md:hidden mx-auto">
          <button className="p-5 border-[1px] border-black text-md sm:text-xl hover:bg-blue-300 transition ease-out duration-300">
          Lets Get Your Workspace Set Up
          </button>
        </div>
    </div>
  );
};

export default WorkSpaceHero;
