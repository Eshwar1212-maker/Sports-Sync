"use client";

import { FC, useEffect, useState } from "react";
import WorkoutModal from "./ui/WorkoutModal";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlCalender } from "react-icons/sl";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-hot-toast";

type exercise = {
  title?: string;
  reps?: number | null;
  sets?: number | null;
  exercise?: string;
  weight?: number | null;
};

interface WorkoutProps {
    workouts: any
}

const Workout: FC<WorkoutProps> = ({workouts}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<any>(new Date());
  const [workout, setWorkout] = useState<exercise[]>([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState<exercise[]>([]);

  const { theme } = useTheme();

  const handleCallbackExercises = ({
    title,
    weight,
    reps,
    sets,
  }: exercise) => {
    setFilteredWorkouts([...filteredWorkouts, { title, weight, reps, sets}]);
  };

  useEffect(() => {
    const workoutsForSelectedDate = workouts.filter(
      (workout: any) => format(new Date(workout.date), 'PPP') === format(date, 'PPP')
    );
    setFilteredWorkouts(workoutsForSelectedDate);
  }, [date, workouts]);

  return (
    <div className="flex flex-col py-0 md:py-7 px-5 h-[100vh]">
      <div className="">
        <WorkoutModal
          date={date}
          handleCallbackExercises={handleCallbackExercises}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
        {/* HEADER */}
        <header className="flex justify-between max-w-[670px] py-5 mx-auto">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button>
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
            <h1
              className={clsx(
                "text-lg font-semibold py-1 md:py-3",
                theme === "light" && "text-gray-800"
              )}
            >
             {format(date, "MM/dd/yyyy")}

            </h1>
          </div>
          <div className="">
            <Button
              variant={"default"}
              className={"text-[11px] md:text-[13px] py-1 md:mr-16"}
              onClick={() => setIsOpen(true)}
            >
              Add Workout
            </Button>
          </div>
        </header>
        {/* BODY */}
        <div className="mx-auto flex justify-center pr-7 md:pr-16 h-[80vh]">
          {filteredWorkouts.length == 0 ? (
            <p className="text-2xl text-gray-300 py-[270px] md:pr-14">
              Workout log empty
            </p>
          ) : (
            <div className="flex flex-col">
              <ul className="overflow-y-auto  border-b-[2px] border-b-black">
                {filteredWorkouts.length > 0 && filteredWorkouts.map((exerciseData: any) => (
                  <li className="p-3 text-lg flex flex-col gap-4 rounded-md border-[1px] border-gray-500 w-[340px] md:w-[600px] cursor-pointer ml-8 sm:ml-0">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">
                          {exerciseData.title}
                        </h3>
                      </div>
                      <div className="flex gap-3">
                        <button>
                          <AiOutlineEdit size={25} />
                        </button>
                        <button>
                          <BsTrash size={23} />
                        </button>
                      </div>
                    </div>
                    <div className="flex">
                      <dl className="flex gap-3">
                        <dt className="font-semibold m-auto text-[16px]">
                          Weight
                        </dt>
                        <dd className="text-sm m-auto">
                          {exerciseData.weight} lbs
                        </dd>
                        <dt className="font-semibold m-auto text-[16px]">
                          Sets
                        </dt>
                        <dd className="text-sm m-auto">{exerciseData.sets}</dd>
                        <dt className="font-semibold m-auto text-[16px]">
                          Reps
                        </dt>
                        <dd className="text-sm m-auto">{exerciseData.reps}</dd>
                      </dl>
                    </div>
                  </li>
                ))}
              </ul>
              <p
                onClick={() => toast.success(`Workout added to calender!`)}
                className="underline text-center py-3 cursor-pointer"
              >
                Add todays workout to your calender?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workout;
