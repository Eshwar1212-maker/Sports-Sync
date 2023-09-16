"use client";

import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";
const TrackerSecond = () => {
  const router = useRouter();
  return (
    <div className="mx-auto flex flex-col py-20 bg-slate-100 space-y-20">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl 2xl:text-5xl mx-auto">
          How to start tracking with Synced?
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto max-w-[80%] sm:max-w-[900px] md:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] gap-10 md:gap-20 lg:gap-40">
        <div className="max-w-[400px] flex flex-col gap-10 mx-auto">
          <h4 className="text-xl">
            Track progressive overload for every exercise
          </h4>
          <p className="font-light leading-relaxed">
            We have charts for every exercise logged, showing the dates on the x
            axis, and the respective weights on the y axis
          </p>
        </div>
        <div className="max-w-[400px] flex flex-col gap-10 mx-auto">
          <h4 className="text-xl">
            Get notified for personal records instantly
          </h4>
          <p className="font-light leading-relaxed">
            Every time you hit a PR we will show a trophy next to the logged
            exercise, giving you the reward from your hard work instantly.
          </p>
        </div>
        <div className="max-w-[400px] flex flex-col gap-10 mx-auto">
          <h4 className="text-xl">
            Monitor intensity/consistency with your dashboard
          </h4>
          <p className="font-light leading-relaxed">
            Our dashboard tracks how many times you hit the gym each month,
            along with the amount of exercises. As an athlete, its crucial to
            find a balance between overtraining and undertraining.
          </p>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-2 justify-center flex-col md:flex-row max-w-[60%] mx-auto">
        <button
          onClick={() => router.push("/auth")}
          className="flex h-20 flex-row gap-2 py-4 px-4 bg-slate-200 hover:bg-blue-200 hoer:text-slate-100 transition border-slate-300 duration-500"
        >
          <p className="mx-auto my-auto">Start Tracking</p>
          <span className="my-auto">
            <AiOutlineArrowRight size={20} />
          </span>
        </button>
        <button
          onClick={() => router.push("/guide")}
          className="py-2 h-20 md:py-4 px-4 bg-white border-[1px] border-slate-400 hover:bg-slate-100 transition duration-500"
        >
          Read how to start utilizing Synced now
        </button>
      </div>
    </div>
  );
};

export default TrackerSecond;
