"use client";

import four from "../../assets/four.jpg";
import soccer from "../../assets/soccer.jpg";
import calendertwo from "../../assets/calendertwo.png";
import dashboard from "../../assets/das.png";
import message from "../../assets/message.png";
import Image from "next/image";
import { PT_Sans, Bonheur_Royale } from "next/font/google";
import First from "./landing/First";
import Second from "./landing/Second";
import Third from "./landing/Third";
import { useRouter } from "next/navigation";
import Fourth from "./landing/Fourth";
import Fifth from "./landing/Fifth";
import { Footer } from "react-day-picker";
import Sixth from "./landing/Sixth";
import Seventh from "./landing/Seventh";

const inter = PT_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});
const bon = Bonheur_Royale({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: "400",
});

const Hero = () => {
  const router = useRouter();
  return (
    <div className="text-black bg-white">
      <div className="flex flex-col justify-between pb-11 py-20 sm:my-12 mb-6 md:h-[75vh] lg:flex-row lg:h-[70vh] lg:px-11 xl:px-[100px] 2xl:px-[90px]">
        <div className="sm:w-full lg:w-1/2 p-4 flex flex-col lg:items-start lg:space-y-6 2xl:pl-40">
          <div className="space-y-5 text-center lg:text-left">
            <h1 style={inter.style} className="text-4xl lg:text-5xl 2xl:text-6xl font-bold my-4">
              The world's best platform for athletes
            </h1>
            <p
              style={inter.style}
              className="text-lg md:text-2xl 2xl:text-4xl font-thin"
            >
              Manage everything with Synced
            </p>
          </div>
          <div className="text-xl my-4 flex justify-center lg:justify-start">
            <button
              aria-label="Get Started, create your account"
              onClick={() => router.push("/auth")}
              className="bg-blue-900 hover:bg-blue-800 transition ease-in-out duration-200 text-sm md:text-md lg:text-xl p-3 md:p-5 text-white rounded-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      
        <div className="flex justify-center bg-[#FFFFFF] relative  mx-auto mb-11">
          <div className="px-10 relative my-14">
            <Image
              alt="landing page for team"
              width={700}
              height={900}
              src={four}
            />
          </div>
          <div className="absolute px-5 md:px-0">
            <Image
              alt="landing page for team"
              width={400}
              height={500}
              src={soccer}
            />
          </div>
        </div>
      </div>
      <main className="mt-[120px] lg:my-20 py-10">
        <h2 className="text-[22px] xl:text-3xl text-center font-bold px-4">
          Use our calender, workout tracker, messaging system, <br /> and
          fitness dashboard to reach your goals.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center text-center items-center xl:px-[120px] px-10 space-x-6 mx-auto space-y-10 sm:space-y-0 py-10">
          <div className="flex flex-col">
            <div className="bg-blue-900">
              <Image
                alt="fitness tracker image"
                src={dashboard}
                width={600}
                height={440}
                className=""
              />
            </div>
            <div className="">
              <h3 className="text-2xl lg:text-3xl">Set Goals</h3>
              <p className="text-sm md:text-lg">
                Use our dashboard so you can <br />
                monitor your goals and progress.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-blue-900">
              <Image
                alt="calender image"
                src={calendertwo}
                width={690}
                height={440}
              />
            </div>
            <h3 className="text-2xl lg:text-3xl">
              Plan your life as an athlete
            </h3>
            <p className="text-sm md:text-lg">
              Your life can be very busy as an athlete,
              <br />
              use our calender to track everything.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="bg-blue-900 lg:max-w-[600px]">
              <Image
                alt="messenger image"
                src={message}
                width={690}
                height={440}
              />
            </div>
            <h3 className="text-2xl lg:text-3xl">Schedule games</h3>
            <p className="text-[17px] sm:text-sm md:text-lg">
              Use our messaging system to schedule games.
              <br />
             <span className="hidden 2xl:block">Or practices with your friends and teams.</span> 
            </p>
          </div>
        </div>
        <Fifth />
        <First />
        <Second />
        <Third />
        <Fourth />
        {/* <Sixth /> */}
      </main>
    </div>
  );
};

export default Hero;
