"use client";

import Image from "next/image";
import { FC, useState } from "react";
import CalenderOptions from "./CalenderOptions";
import clsx from "clsx";
import { useTheme } from "next-themes";
import {User} from "@prisma/client";
import CreateTeamModal from "./CreateTeamModal";
import ProModal from "./ProModal";
import calendar from "../../assets/cal.png"
import { MdOutlineGroupAdd } from "react-icons/md";


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
              Use our Calendars to visualize your routine
            </h1>
            <p
              className={clsx(
                "lg:text-xl py-6 pr-8",
                theme === "dark" && "text-gray-300"
              )}
            >
              Use our Calendar feature to either schedule your own practices and
              workouts, or collaborate with your team in a shared calendar to schedule
              games, practices, events, etc.
            </p>
            <div className="flex flex-start">
              <CalenderOptions userTeams={userTeams} />
            </div>
          </div>
          <div className="w-full md:w-1/2 py-8">
            <Image
              alt="Logo"
              height={1000}
              width={1000}
              className="mx-auto w-auto border-[1px] border-slate-400"
              src={calendar}
              aria-label="calendar image"
            />
            <button
              onClick={() => {
                if(userTeams?.length! > 0 && currentUser?.email !== "eshwartangirala11@gmail.com"){
                  setIsProModal(true)
                }else{
                  setIsTeamModal(true)

                }
              }}
              className="my-4 text-lg px-8 py-4 border-[1px] transition ease-in-out duration-400 bg-white  border-slate-400 flex gap-3
              rounded-sm text-slate-900 hover:bg-slate-200 hover:text-black dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700"
            >
              Create a team workspace <MdOutlineGroupAdd className="" size={29}/>
            </button>
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
              Use our Calendars to visualize your routine
            </h1>
            <p className={"text-lg sm:text-lg font-light"}>
              Use our Calendar feature to either schedule your own practices and
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
              src={calendar}
              aria-label="calendar image"
            />
          </div>
        </div>
          <div className="my-12 sm:ml-20">
            <CalenderOptions userTeams={userTeams}/>
          </div>
      </div>
    </>
  );
};

export default Landing;
