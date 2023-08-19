"use client"

import { Button } from "@/components/ui/button";
import { exercises } from "@/lib/exercises";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { IoIosAddCircleOutline } from "react-icons/io";

interface ExercisesProps {
  selectedExercise?: string;
  handleCallbackExercises: (exercise: string) => void;
}

const Exercises: FC<ExercisesProps> = ({ selectedExercise, handleCallbackExercises }) => {
  const [userExercises, setUserExercises] = useState(exercises);
  const [searchInput, setSearchInput] = useState("");
  const {theme} = useTheme()
  const searchedExercises = userExercises.filter((exercise) =>
    exercise.toLowerCase().includes(searchInput.toLowerCase())
    
  );

  const addExercise = (exercise: string) => {
    const updatedExercises = [...userExercises, exercise];
    setUserExercises(updatedExercises);
    localStorage.setItem('userExercises', JSON.stringify(updatedExercises)); 
    toast.success(`${searchInput} added to your list!`);
    setSearchInput("");
};

useEffect(() => {
  const savedExercises = localStorage.getItem('userExercises');
  if (savedExercises) {
      setUserExercises(JSON.parse(savedExercises));
  }
}, []);



  return (
    <>
      <div className="">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className={clsx("w-[290px] p-2 border-[1px] font-bold border-black", theme === "dark" && "border-[2px] border-white rounded-sm text-white")}
          placeholder="Search Exercises..."
        />
      </div>
      <ul className={clsx("pl-5 space-y-1 overflow-y-scroll max-h-[510px] w-[100%] border-b-[2px] border-b-black my-2 py-2 border-t-[1px]", 
          theme === "dark" ? "border-t-white" : "border-t-black"
      )}>
        {searchedExercises.map((exercise, index) => (
          <div key={index} className="flex justify-between py-1 my-auto">
            <li className={clsx("border-b-[1px] cursor-pointer text-lg pb-1 font-light",
             theme === "dark" && "border-slate-400 w-full hover:bg-gray-900 ", theme === "light" && "border-blue-200 w-full hover:bg-gray-50 ")}
             >
              {exercise}
            </li>
            <button onClick={() => handleCallbackExercises(exercise)} className="pr-5 pb-2">
              <IoIosAddCircleOutline size={32} />
            </button>
          </div>
        ))}
      </ul>
      {searchedExercises.length === 0 && searchInput.trim().length > 0 && (
        <div className="flex gap-3 py-40 flex-col items-center">
          <p><span className="font-bold text-lg">{searchInput}</span> not found</p>
          <div className="flex gap-3">
            <Button onClick={() => {
              addExercise(searchInput)
              }}>
                Add to my exercises
              </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Exercises;
