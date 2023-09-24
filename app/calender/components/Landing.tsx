"use client";

import Image from "next/image";
import { FC, useState } from "react";
import CalenderOptions from "./CalenderOptions";
import clsx from "clsx";
import { useTheme } from "next-themes";
import {User} from "@prisma/client";
import CreateTeamModal from "./CreateTeamModal";
import { Button } from "@/components/ui/button";
import {IoMdAddCircleOutline } from "react-icons/io";
import ProModal from "./ProModal";

interface landingProps {
  users: User[];
  userTeams: { title: string | null }[] | null;
  currentUser: any
}
const Landing: FC<landingProps> = ({ users, userTeams, currentUser }) => {
  const { theme } = useTheme();
  const [isTeamModal, setIsTeamModal] = useState(false);
  const [isProModal, setIsProModal] = useState(false)
  
  
  return (
    <>
      {/*DESKTOP MENU*/}
      <CreateTeamModal
        users={users!}
        isOpen={isTeamModal}
        onClose={() => setIsTeamModal(false)}
      />

      <ProModal
        isOpen={isProModal}
        onClose={() => setIsProModal(false)}
      />
      <div className="hidden xl:block py-[100px] sm:px-6 md:pl-60 container">
        <main className="flex flex-col md:flex-row space-x-9 pb-11">
          <div className="space-y-4 w-[90vw] md:w-1/2">
            <h1
              className={clsx(
                "lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold",
                theme === "dark" && "text-gray-200"
              )}
            >
              Use our Calenders to visualize your routine
            </h1>
            <p
              className={clsx(
                "lg:text-xl py-6 pr-8",
                theme === "dark" && "text-gray-300"
              )}
            >
              Use our Calender feature to either schedule your own practices and
              workouts, or collaborate with your team so you guys can schedule
              games, practices, events, etc.
            </p>
            <div className="flex flex-start">
              <CalenderOptions userTeams={userTeams} />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              alt="Logo"
              height={1000}
              width={1000}
              className="mx-auto w-auto"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
              aria-label="fullcalenderjs image"
            />
            <Button
              onClick={() => {
                if(userTeams?.length! > 0 && currentUser?.email !== "eshwartangirala11@gmail.com"){
                  setIsProModal(true)
                }else{
                  setIsTeamModal(true)

                }
              }}
              className="my-8 text-xl p-10 border-[1px] border-black"
              variant={"six"}
            >
              Create a new workspace <IoMdAddCircleOutline className="pl-2" size={40}/>
            </Button>
          </div>
        </main>
      </div>

      {/*MOBILE MENU*/}
      <div className="px-4 items-center py-10 xl:hidden flex flex-col justify-center mx-auto">
        <div className="space-y-7">
          <div className="space-y-7 px-7 md:px-20">
            <h1
              className={clsx(
                theme == "dark"
                  ? "text-4xl sm:text-4xl font-bold "
                  : "text-4xl sm:text-4xl font-bold"
              )}
            >
              Use our Calenders to visualize your routine
            </h1>
            <p className={"text-lg sm:text-lg font-ligh"}>
              Use our Calender feature to either schedule your own practices and
              workouts, or collaborate with your team so you guys can schedule
              games, practices, events, etc.
            </p>
          </div>
          <div className="px-6">
            <Image
              alt="Logo"
              height={400}
              width={400}
              className="mx-auto w-auto"
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612787425944/MMJR2txbo.jpeg"
              aria-label="fullcalenderjs image"
            />
          </div>
        </div>
          <div className=" sm:ml-20">
            <CalenderOptions userTeams={userTeams}/>
          </div>
      </div>
    </>
  );
};

export default Landing;
