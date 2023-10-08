"use client";
import Image from "next/image";
import { FC } from "react";
import first from "../../../assets/Synced/charttwo.png";
import second from "../../../assets/das.png";
import third from "../../../assets/tr.png";
import { Button } from "@/components/ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface heroProps {}

const TrackerHero: FC<heroProps> = ({}) => {

  const router = useRouter();

  const scrollToFirst = () => {
    const element = document.getElementById("first")
    element?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className="flex flex-col mx-auto py-[120px] sm:py-[190px] lg:py-[170px] space-y-16">
      <div className=" my-auto space-y-3 sm:space-y-4 w-[76%] lg:w-[60%] xl:w-[50%] mx-auto">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          Charts tracking every inch of your progress
        </h1>
        <p className="lg:max-w-[900px] text-xl">
          Synced has charts tracking your intensity, consistency, personal
          records, and progressions.
        </p>
      </div>
      <div className="flex gap-8 mx-auto justify-center max-w-[85%] sm:max-w-[80%]">
        <div>
          <Image
            className="hidden md:block p-1 bg-slate-100"
            src={first}
            alt=""
            width={800}
            height={500}
          />
        </div>
        <div>
          <Image
            className="p-1 bg-slate-100"
            src={second}
            alt=""
            width={946}
            height={500}
          />
        </div>
        <div>
          <Image
            className="hidden md:block p-1 bg-slate-100"
            src={third}
            alt=""
            width={800}
            height={500}
          />
        </div>
      </div>
      <div className="mx-auto flex flex-row gap-4">
        <div className="flex flex-row gap-2">
          <button
            onClick={() => router.push("/auth")}
            className="flex flex-row gap-2 py-4 px-4 bg-slate-200 hover:bg-blue-200 hoer:text-slate-100 transition border-slate-300 duration-500"
          >
            <p>Start Tracking</p>
            <span className="my-auto">
              <AiOutlineArrowRight size={20} />
            </span>
          </button>
        </div>
        <button
          onClick={scrollToFirst}
          className="px-7 py-3 sm:py-4 bg-black text-white "
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TrackerHero;
