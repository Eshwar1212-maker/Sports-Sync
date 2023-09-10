"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import Navbar from "../Navbar";
import { AiOutlineTeam } from "react-icons/ai";
import { TbAnalyze } from "react-icons/Tb";
import { GiWeightLiftingUp } from "react-icons/gi";
interface FeaturesHeroProps {}
const FeaturesHero: FC<FeaturesHeroProps> = ({}) => {
  const router = useRouter();

  return (
    <div>
      <div
        className="bg-cover w-full"
        style={{ backgroundImage: `url(/back.jpg)` }}
      >
        <Navbar isHome={false} />
        <div className="flex justify-between max-w-[1130px] mx-auto py-[300px]">
          <div>
            <button
              aria-label="Get Started, create your account"
              onClick={() => router.push("/auth")}
              className="bg-slate-600 hover:bg-blue-100 transition ease-in-out duration-200 text-sm md:text-md lg:text-xl md:p-12 text-white rounded-sm my-10 hover:text-black"
            >
              Get Started for free
            </button>
          </div>
          <div className=" ">
            <h2 className="text-lg md:text-2xl 2xl:text-5xl font-semibold text-white">
              Dominate the <br />
              competition with <br />
              Synced
            </h2>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200 h-[140px]">
        <div className="flex justify-between mx-auto max-w-[1500px] py-11 font-semibold">
          <div className="flex flex-col">
            <p>Communicate. Schedule. Plan.</p>
            <AiOutlineTeam className="mx-auto" size={30} />
          </div>
          <div className="flex flex-col">
            <p>Track. Analyze. Reflect.</p>
            <TbAnalyze className="mx-auto" size={30} />
          </div>
          <div className="flex flex-col">
            <p> Log. Celebrate. Win.</p>
            <GiWeightLiftingUp className="mx-auto" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesHero;
