"use client"

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import tracker from "../assets/tracker.png"
import AuthModal from "./AuthModal"
import calender from "../assets/calender.png"
import dashboard from "../assets/dashboard.png"
import message from "../assets/message.png"
import Image from "next/image";

import { PT_Sans, Bonheur_Royale } from "next/font/google";
import Button from "@/app/components/Button";
import { useState } from "react"


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
  return (
    <div className="">  

      <div className="flex flex-col sm:flex-row py-[100px] xl:px-[100px]">
        <div className="sm:w-1/2 p-8 flex flex-col">
          <div className="space-y-5">
          <h1 style={inter.style} className="text-center lg:block text-4xl md:text-5xl font-bold">
            The World's Best <br /> Platform for athletes and their team
          </h1>
          <p style={inter.style} className="text-2xl font-thin text-center">
            Use our app so you or your team can track your workouts, track your schedule in our calender and
            message each other.

          </p>
          </div>
          <div className="text-xl my-4 pl-9 flex items-center justify-center">
          <Button>
            Join Sports Sync for free
          </Button>
          </div>

        </div>
        <div className="flex justify-center">
          <Image
            alt="landing page for team"
            width={400}
            height={400}
            src={one}
          />
        </div>
      </div>
      <div className="">
        <h2 style={inter.style} className="text-3xl text-center">
          Use our calender, workout tracker, messaging system, <br/> and fitness dashboard to keep track of your goals
        </h2>
        <div className="flex flex-col md:flex-row justify-center text-center items-center ">
          <div className="flex flex-col py-10 space-x-4">
            <div className="">
              <Image
              alt="fitness dashboard"
              src={dashboard}
              width={340}
              height={440}
              />
            </div>
            <div>
              <h3>Set Goals</h3>
              <p>
                Use our dashboard so you can <br />
                monitor your goals and progress.
              </p>
            </div>
          </div>
            <div className="flex flex-col">
            <div>
            <Image
              alt="fitness dashboard"
              src={calender}
              width={340}
              height={440}
              />
            </div>
              <h3>Plan your life as an athlete</h3>
              <p>
                Your life can be very busy as an athlete,<br />
                use our calender to track everything. 
              </p>
            </div>
            <div className="flex flex-col">
            <div>
            <Image
              alt="fitness dashboard"
              src={message}
              width={340}
              height={440}
              />
            </div>
              <h3>Schedule games with your teammates</h3>
              <p>
                Use our messaging system to schedule games,<br />
                or practices with your friends and teams.
              </p>
            </div>       

        </div>
      </div>
    </div>
  );
};

export default Hero;

// <p style={cedarville_cursive.style} className=' font-cedarville-cursive'>Hero section</p>
