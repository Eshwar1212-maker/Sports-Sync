"use client"

import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
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
      <div className="flex flex-col justify-center sm:flex-row py-10 lg:py-24 h-[90vh] lg:h-[70vh] pb-11 mb-6 2xl:px-[290px]"> 
      <div className="sm:w-full lg:w-1/2 p-8 flex flex-col items-center lg:items-start">
      <div className="space-y-5 text-center lg:text-left">
      <h1 style={inter.style} className="text-4xl md:text-6xl font-bold">
            The World's Best <br />Platform for athletes
          </h1>
          <p style={inter.style} className="text-lg md:text-2xl font-thin">
              Manage everything with Sports Sync
          </p>
          </div>
          <div className="text-xl my-4 flex items-center justify-center lg:justify-start">
          <button aria-label="Get Started, create your account" onClick={() => router.push("/auth")} className="bg-blue-900 text-sm md:text-xl p-3 text-white rounded-sm">
           Get Started
          </button>
          </div>
          <div className="md:hidden">
          <Image
            alt="landing page for team"
            width={700}
            height={900}
            src={four}
          />
          </div>   
        </div>

        <div className="flex justify-center bg-[#FFFFFF] relative">
          <div className="hidden md:block relative">
          <Image
            alt="landing page for team"
            width={700}
            height={900}
            src={four}
          />
          </div>    
        <div className="hidden md:block  absolute">
          <Image
            alt="landing page for team"
            width={370}
            height={500}
            src={soccer}
          />
          </div> 
        </div>
      </div>
      <div className="bg-gray-100 py-10">
        <h2 className="text-xl md:text-2xl text-center font-bold">
          Use our calender, workout tracker, messaging system, <br/> and fitness dashboard to reach your goals.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center text-center items-center xl:px-[200px]">
          <div className="flex flex-col py-10 space-x-4">
            <div className="bg-green-100">
              <Image
              alt="fitness dashboard"
              src={dashboard}
              width={640}
              height={440}
              />
            </div>
            <div>
              <h3 className="text-xl">Set Goals</h3>
              <p className="text-sm">
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
              <h3 className="text-xl">Plan your life as an athlete</h3>
              <p className="text-sm">
                Your life can be very busy as an athlete,<br />
                use our calender to track everything. 
              </p>
            </div>
            <div className="flex flex-col">
            <div className="bg-orange-200">
            <Image
              alt="fitness dashboard"
              src={message}
              width={640}
              height={440}
              />
            </div>
              <h3 className="text-xl">Schedule games with your teammates</h3>
              <p className="text-sm">
                Use our messaging system to schedule games,<br />
                or practices with your friends and teams.
              </p>
            </div>       

        </div>
      </div>
      <First />
      <Second />
      <Third />
      <Footer />
    </div>
  );
};

export default Hero;