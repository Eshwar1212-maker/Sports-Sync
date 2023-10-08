"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";
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
        <h1 className="text-4xl sm:text-5xl lg:text-5xl 2xl:text-7xl">
          Create your own team calendars
        </h1>
        <p className="sm::text-lg xl:text-xl lg:max-w-[600px]">
          Syned is the easiest way for individual athletes or teams to plan,
          manage, and visualize their events in a shared team calendar.
          <br />
          <br />
          We're here to help you have as strong a season as ever.
        </p>
        <div className="text-[13px] sm:text-lg flex gap-6 sm:gap-8 py-2">
          <button onClick={onClickFirst} className="hover:underline">
            Collaborative
          </button>
          <button onClick={onClickSecond} className="hover:underline">
            Convenient
          </button>
          <button onClick={onClickThird} className="hover:underline">
            Managed
          </button>
          <button
            onClick={onClickThird}
            className="text-blue-700 cursor-default"
          >
            Succeeded
          </button>
        </div>
        <div className="hidden md:block mx-auto">
          <button
            onClick={() => router.push("/auth")}
            className="flex flex-row gap-2 py-6 px-6 text-xl bg-slate-200 hover:bg-blue-200 hoer:text-slate-100 transition border-slate-300 duration-500"
          >
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
        <button
          onClick={() => router.push("/auth")}
          className="p-5 border-[1px] border-black text-md sm:text-xl hover:bg-blue-300 hover:text-white transition ease-out duration-300"
        >
          Lets Get Your Workspace Set Up
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceHero;
