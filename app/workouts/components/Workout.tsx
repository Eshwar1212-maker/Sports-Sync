"use client";

import { FC, useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import WorkoutModal from "./ui/WorkoutModal";
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SlCalender } from "react-icons/sl";
import clsx from "clsx";
import { useTheme } from "next-themes";


interface WorkoutProps {}
const Workout: FC<WorkoutProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<any>(new Date())
  const {theme} = useTheme()
  console.log(date);
  

  return (
    <div className="flex flex-col py-0 md:py-11 px-5">
      <div className="">
        <WorkoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        {/* HEADER */}
        <header className="flex justify-between max-w-[700px] py-11 mx-auto">
          <div>
          <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={clsx(
          "",
            !date && ""
          )}
        >
          <SlCalender size={20} className="" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
          </div>
          <div>
            <h1 className={clsx("text-lg font-semibold py-1 md:py-3", theme === "light" && "text-gray-800" )}>{format(date, "PPP")}</h1>
          </div>
          <div className="">
            <Button className={"text-[11px] md:text-[13px] py-1"} onClick={() => setIsOpen(true)}>Add Workout</Button>
          </div>
        </header>
        {/* BODY */}
        <div className=" mx-auto flex justify-center pr-7 md:pr-16 py-[270px]">
          <p className="text-xl text-gray-400">Workout log empty</p>
        </div>
      </div>
    </div>
  );
};

export default Workout;
