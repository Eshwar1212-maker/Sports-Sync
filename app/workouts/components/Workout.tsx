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


interface WorkoutProps {}
const Workout: FC<WorkoutProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<any>(new Date())
  console.log(date);
  

  return (
    <div className="lex flex-col py-11">
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
            <h1 className="text-lg text-gray-800 py-1 font-semibold">{format(date, "PPP")}</h1>
          </div>
          <div className="text-sm">
            <Button onClick={() => setIsOpen(true)}>Add Workout</Button>
          </div>
        </header>
        {/* BODY */}
        <div className=" mx-auto flex justify-center pr-16 py-[270px]">
          <p className="text-xl text-gray-400">Workout log empty</p>
        </div>
      </div>
    </div>
  );
};

export default Workout;
