"use client";

import { FC, useEffect, useState } from "react";
import WorkoutModal from "./ui/AddWorkoutModal";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SlCalender } from "react-icons/sl";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Confetti from 'react-confetti';
import { DropdownMenuDemo } from "./WorkoutDrawer";
import { Calendar } from "@/components/ui/calendar";
import AddWorkoutToCalenderModal from "./ui/AddWorkoutToCalenderModal";

type exercise = {
  title: string;
  reps?: number | null;
  sets?: number | null;
  exercise?: string;
  weight?: number | null;
  id?: string;
};

interface WorkoutProps {
  workouts: any;
  workoutRecord: any

}

const Workout: FC<WorkoutProps> = ({ workouts, workoutRecord }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [date, setDate] = useState<any>(new Date());
  const [filteredWorkouts, setFilteredWorkouts] = useState<exercise[]>([]);
  const [edidtedExerciseName, setEditedExerciseName] = useState("");
  const [editedExerciseWeight, setEditedExerciseWeight] = useState();
  const [editedExerciseSets, setEditedExerciseSets] = useState();
  const [editedExerciseReps, setEditedExerciseReps] = useState();
  const [selectedExercise, setSelectedExercise] = useState(false);
  const [selectedExerciseId, setSelectedExerciseId] = useState("");
  const [allWorkouts, setAllWorkouts] = useState<exercise[]>(workouts);
  const [formattedDate, setFormattedDate] = useState(format(date!, "yyyy-MM-dd"))
  const [workout, setWorkout] = useState("");
  const [showConfetti, setShowConfetti] = useState<boolean>(false)

  console.log(workouts);
  
  
  const { theme } = useTheme();
  const handleCallbackExercises = ({ title, weight, reps, sets }: exercise) => {
    setFilteredWorkouts([...filteredWorkouts, { title, weight, reps, sets }]);
    setWorkout(workout + `\n\n - ${title}    \n         ${weight} lbs | ${sets} sets | ${reps} reps`)
  };

  console.log(workout);
  

  const handleEdit = (exerciseData: any) => {
    setSelectedExercise(true);
    setEditedExerciseName(exerciseData.title);
    setEditedExerciseReps(exerciseData.reps);
    setEditedExerciseSets(exerciseData.sets);
    setEditedExerciseWeight(exerciseData.weight);
    setIsOpen(true);
  };

  const updateWorkoutInState = (updatedWorkout: exercise) => {
    setAllWorkouts((prevWorkout: any) => {
      return prevWorkout.map((workout: any) =>
        workout.id === updatedWorkout.id ? updatedWorkout : workout
      );
    });
  };  
  

  

  useEffect(() => {
    const workoutsForSelectedDate = allWorkouts.filter(
      (workout: any) =>
        format(new Date(workout.date), "PPP") === format(date, "PPP")
    );

    const workoutsToNotes = workoutsForSelectedDate
      .map((workout) => {
        return `- ${workout.title}    \n         ${workout.weight} lbs | ${workout.sets} sets | ${workout.reps} reps`;
      })
      .join(`\n\n`);

    setWorkout(workoutsToNotes);
    setFilteredWorkouts(workoutsForSelectedDate);
  }, [date, allWorkouts]);


  useEffect(() => {
    setTimeout(() => {
      setShowConfetti(false);
  }, 3000);
  }, [showConfetti])
  

  return (
    <div className="flex flex-col py-0 md:py-7 px-5 h-[100vh]">
          {/* {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />} */}

      <div className="">
        <AddWorkoutToCalenderModal
          isOpen={isSecondOpen}
          onClose={() => setIsSecondOpen(false)}
          workout={workout}
          date={date}
          formattedDate={formattedDate}
        />
        <WorkoutModal
          date={date}
          handleCallbackExercises={handleCallbackExercises}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          editedName={edidtedExerciseName}
          editedReps={editedExerciseReps}
          editedSets={editedExerciseSets}
          editedWeight={editedExerciseWeight}
          selectedExercise={selectedExercise}
          setEditedExerciseWeight={setEditedExerciseWeight}
          setEditedExerciseSets={setEditedExerciseSets}
          setEditedExerciseReps={setEditedExerciseReps}
          workoutId={selectedExerciseId}
          updateWorkoutInState={updateWorkoutInState}
          workoutRecord={workoutRecord}
          showConfetti={setShowConfetti}
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
              {format(date!, "MM/dd/yyyy")}
            </h1>
          </div>
          <div className="">
            <Button
              variant={"default"}
              className={"text-[11px] md:text-[13px] py-1 md:mr-16"}
              onClick={() => {
                setSelectedExercise(false);
                setIsOpen(true);
              }}
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
              <ul className="overflow-y-auto flex flex-col gap-1 border-b-[2px] border-b-black">
                {filteredWorkouts.length > 0 &&
                  filteredWorkouts.map((exerciseData: any) => (
                    <li
                      onClick={() => {
                        setSelectedExerciseId(exerciseData.id);
                      }}
                      className="p-3 text-lg flex flex-col gap-4 rounded-sm border-[1px] border-gray-500 w-[340px] md:w-[600px] ml-8 sm:ml-0"
                    >
                      <div className="flex justify-between relative top-0">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {exerciseData.title}
                          </h3>
                        </div>
                        <div className="flex py-0 my-0">
                          <DropdownMenuDemo
                            onEdit={() => handleEdit(exerciseData)}
                          />
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
                          <dd className="text-sm m-auto">
                            {exerciseData.sets}
                          </dd>
                          <dt className="font-semibold m-auto text-[16px]">
                            Reps
                          </dt>
                          <dd className="text-sm m-auto">
                            {exerciseData.reps}
                          </dd>
                        </dl>
                      </div>
                    </li>
                  ))}
              </ul>
              <p
                onClick={() => {
                  setIsSecondOpen(true);
                }}
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
