"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface heroProps {}
const WorkSpaceHero: FC<heroProps> = ({}) => {
  const router = useRouter();

  const onClickFirst = () => {
    const scroll = document.getElementById("third");
    scroll?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickSecond = () => {
    const scroll = document.getElementById("first");
    scroll?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickThird = () => {
    const scroll = document.getElementById("second");
    scroll?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-full md:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-[110px] lg:py-[200px] gap-10">
      <div className=" my-auto space-y-3 sm:space-y-4 w-[84%] sm:w-[80%] xl:w-[50%] mx-auto">
        <h1 
        className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-7xl"
        data-test="workspace-title"
        >
          Create your own team calendars
        </h1>
        <p 
        data-test="workspace-hero-description"
        className="sm::text-lg xl:text-xl lg:max-w-[600px]">
          Synced is the easiest way for individual athletes or teams to plan,
          manage, and visualize their events in a shared team calendar.
          <br />
          <br />
          We're here to help you have as strong a season as ever.
        </p>
        <div className="text-[13px] sm:text-lg flex gap-6 sm:gap-12 py-2">
          <button onClick={onClickFirst} className="hover:underline">
            Collaborate
          </button>
          <button onClick={onClickSecond} className="hover:underline">
            Track
          </button>
          <button onClick={onClickThird} className="hover:underline">
            Plan
          </button>
          <button
            onClick={onClickThird}
            className="text-blue-700 cursor-default"
          >
            Succeed
          </button>
        </div>
        <div className="hidden md:block mx-auto">
        <button
              aria-label="Get Started, create your account"
              onClick={() => router.push("/auth")}
              className="bg-white hover:bg-blue-700 border-black border-[1px] hover:text-white transition ease-in-out duration-200 text-sm md:text-md lg:text-xl p-3 md:p-5 text-black rounded-sm"
            >
              Start planning now
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
        <button
          onClick={() => router.push("/auth")}
          className="p-5 border-[1px] border-black text-black text-md sm:text-xl bg-white hover:text-white hover:bg-blue-700 transition ease-in-out duration-200"
        >
          Lets Get Your Workspace Set Up
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceHero;
