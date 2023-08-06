"use client"


import four from "../../assets/four.jpg";
import soccer from "../../assets/soccer.jpg"
import AuthModal from "./AuthModal"
import calendertwo from "../../assets/calendertwo.png"
import dashboard from "../../assets/dashboard.png"
import message from "../../assets/message.png"
import Image from "next/image";

import { PT_Sans, Bonheur_Royale } from "next/font/google";
import First from "./landing/First";
import Second from "./landing/Second";
import Third from "./landing/Third";
import Footer from "./landing/Footer";
import { useRouter } from "next/navigation";



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
  const router = useRouter()
  return (
    <div className="bg-white text-black">  
<div className="flex flex-col justify-center py-10 h-[50vh] pb-11 mb-6 sm:h-[80vh] lg:flex-row lg:py-20 lg:h-[70vh] lg:px-11 xl:px-[100px] 2xl:px-[290px]">
      <div className="sm:w-full lg:w-1/2 p-4 flex flex-col lg:items-start">
      <div className="space-y-5 text-center lg:text-left">
      <h1 style={inter.style} className="text-3xl sm:text-5xl 2xl:text-6xl font-bold">
            The world's best platform for athletes
          </h1>
          <p style={inter.style} className="text-lg md:text-2xl 2xl:text-4xl font-thin">
              Manage everything with Sports Sync
          </p>
          </div>
          <div className="text-xl my-4 flex justify-center lg:justify-start">
          <button aria-label="Get Started, create your account" onClick={() => router.push("/auth")} className="bg-blue-900 text-sm md:text-xl p-3 text-white rounded-sm">
           Get Started
          </button>
          </div> 
        </div>

        <div className="flex justify-center bg-[#FFFFFF] relative">
          <div className="px-10 relative">
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
            width={370}
            height={500}
            src={soccer}
          />
          </div> 
        </div>
      </div>
      <div className="my-[400px] sm:my-20 bg-gray-100 py-10">
        <h2 className="text-[25px] xl:text-3xl text-center font-bold px-4">
          Use our calender, workout tracker, messaging system, <br/> and fitness dashboard to reach your goals.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center text-center items-center xl:px-[200px] px-6">
          <div className="flex flex-col py-3 sm:py-10 space-x-4">
            <div className="bg-green-100">
              <Image
              alt="fitness dashboard"
              src={dashboard}
              width={600}
              height={440}
              />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl">Set Goals</h3>
              <p className="text-[17px] sm:text-sm md:text-lg">
                Use our dashboard so you can <br />
                monitor your goals and progress.
              </p>
            </div>
          </div>
            <div className="flex flex-col">
            <div className="bg-green-100">
            <Image
              alt="fitness dashboard"
              src={calendertwo}
              width={680}
              height={440}
              />
            </div>
              <h3 className="text-2xl lg:text-3xl">Plan your life as an athlete</h3>
              <p className="text-[17px] sm:text-sm md:text-lg">
                Your life can be very busy as an athlete,<br />
                use our calender to track everything. 
              </p>
            </div>
            <div className="flex flex-col">
            <div className="bg-orange-200 lg:max-w-[380px]">
            <Image
              alt="fitness dashboard"
              src={message}
              width={680}
              height={440}
              />
            </div>
              <h3 className="text-2xl lg:text-3xl">Schedule games</h3>
              <p className="text-[17px] sm:text-sm md:text-lg">
                Use our messaging system to schedule games,
                or practices with your friends and teams.
              </p>
            </div>       
        </div>
        <First />
        <Second />
        <Third />
      </div>
    </div>
  );
};

export default Hero;