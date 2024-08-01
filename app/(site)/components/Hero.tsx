"use client";
import four from "../../assets/four.jpg";
import soccer from "../../assets/soccer.jpg";
import calendertwo from "../../assets/cal.png";
import dashboard from "../../assets/das.png";
import message from "../../assets/m.png";
import Image from "next/image";
import First from "./landing/First";
import Second from "./landing/Second";
import Third from "./landing/Third";
import { useRouter } from "next/navigation";
import Fourth from "./landing/Fourth";
import Fifth from "./landing/Fifth";
import Seventh from "./landing/Seventh";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";


const Hero = () => {
  const router = useRouter();

  const loginMutation = useMutation(
    (data: any) => {
      return signIn("credentials", {
        ...data,
        redirect: false,
      });
    },
    {
      onError: (error) => {
        console.log(error);
        toast.error(
          "Login failed, please make sure you are using the right email and password."
        );
      },
      onSuccess: (callback) => {
        if (callback?.error)
          toast.error(
            "Login failed, please make sure you are using the right email and password."
          );
        toast.success("You are logging in with our test account!");

        router.push("/workouts");
      },
    }
  );
  return (
    <div className="text-black bg-white">
      <div className="flex flex-col justify-between pb-11 py-20 sm:py-20 sm:my-6 lg:py-20 lg:my-10 h-[65vh] mb-40 md:h-[70vh] lg:flex-row lg:h-[59vh] lg:px-11 xl:px-[100px] 2xl:px-[90px] ">
        <div className="sm:w-full lg:w-1/2 p-4 flex flex-col lg:items-start lg:space-y-6 2xl:pl-40">
          <div className="space-y-5 text-center lg:text-left">
            <h1
              className="text-4xl lg:text-5xl 2xl:text-6xl my-4"
              data-test="hero-title"
            >
              The world's best platform for athletes
            </h1>
            <p className="md:text-lg lg:text-2xl font-light max-w-[80%] mx-auto lg:max-w-none">
              Manage everything with Synced to dominate your competition. Try
              our demo now, you don't need to sign in!
            </p>
          </div>
          <div className="text-xl my-4 flex justify-center lg:justify-start">
            <button
              data-test="hero-get-started"
              aria-label="Get Started, create your account"
              onClick={() => {
                loginMutation.mutate({
                  name: "",
                  email: "test@gmail.com",
                  password: "test",
                });
              }}
              className="bg-blue-700 hover:bg-blue-600 transition ease-in-out duration-200 text-sm md:text-md lg:text-xl p-3 md:p-5 text-white rounded-sm"
            >
              View Demo
            </button>
          </div>
        </div>

        <div className=" flex justify-center bg-[#FFFFFF] relative  mx-auto mb-11 sm:max-w-[70%]">
          <div className="px-10 relative my-14 ">
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
              className="max-h-[400px] px-14 sm:px-0 sm:max-h-[400px] md:max-h-[450px] lg:max-h-[700px]"
            />
          </div>
        </div>
      </div>
      <main className="mt-[120px] py-10">
        <h2 className="text-lg py-2 sm:py-14 md:py-4 sm:text-[22px] xl:text-2xl text-center font-bold px-4 max-w-[630px] mx-auto">
          Use our calendar, workout tracker, messaging system, and fitness
          dashboard to reach your goals.
        </h2>
        <div className="flex flex-col lg:flex-row justify-center text-center items-center xl:px-[120px] px-10 space-x-5 mx-auto space-y-10 sm:space-y-0 sm:py-10 mr-6 sm:mr-0 pb-10 sm:pb-0">
          <div className="flex flex-col pl-5 sm:pl-0">
            <div className="bg-blue-300">
              <Image
                alt="fitness tracker image"
                src={dashboard}
                width={603}
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
                alt="calendar image"
                src={calendertwo}
                width={600}
                height={440}
              />
            </div>
            <h3 className="text-2xl lg:text-3xl hidden 2xl:block">
              Plan your life as an athlete
            </h3>
            <h3 className="text-2xl lg:text-3xl 2xl:hidden">Plan your life</h3>
            <p className="text-sm md:text-lg hidden xl:block">
              Your life can be very busy as an athlete,
              <br />
              use our calendar to track everything.
            </p>
            <p className="text-sm md:text-lg xl:hidden">
              Your life can be very busy as an athlete,
            </p>
          </div>
          <div className="flex flex-col">
            <div className="bg-blue-50">
              <Image
                alt="messenger image"
                src={message}
                width={614}
                height={440}
              />
            </div>
            <h3 className="text-2xl lg:text-3xl">Schedule games</h3>
            <p className="text-[17px] sm:text-sm md:text-lg">
              Use our messaging system to schedule games.
              <span className="hidden 2xl:block">
                Or practices with your friends and teams.
              </span>
            </p>
          </div>
        </div>
        <Fifth />
        <First />
        <Second />
        <Third />
        <Fourth />
        <Seventh />
      </main>
    </div>
  );
};

export default Hero;
