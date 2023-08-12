"use client";

import { Button } from "@/components/ui/button";
import { exercises } from "@/lib/exercises";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { IoIosAddCircleOutline } from "react-icons/io";

interface ExercisesProps {
  selectedExercise?: string;
  handleCallbackExercises: any
}
const Exercises: FC<ExercisesProps> = ({ selectedExercise, handleCallbackExercises }) => {
  const [userExercises, setUserExercises] = useState(exercises);
  const [selected, setSelected] = useState();
  const [searchInput, setSearchInput] = useState("");

  const searchedExercises = userExercises.filter((exercise) =>
    exercise.toLowerCase().includes(searchInput.toLowerCase())
  );

  const addExercise = (exercise: string) => {
    setUserExercises([...userExercises, exercise])
    toast.success(`${searchInput} to your list!`)
    setSearchInput("")
    handleCallbackExercises(searchInput)
  }

  return (
    <>
      <div className="pl-5">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-[290px] p-2 border-[1px] border-black rounded-md"
          placeholder="Search Exercises..."
        />
      </div>
      <ul className="text-xl pl-5 py-3 space-y-1 overflow-y-scroll max-h-[510px] w-[100%] border-b-[2px] border-b-black">
        {searchedExercises.map((exercise, index) => {
          return (
            <div className="flex justify-between p-2">
            <li key={index} className="border-b-[1px] border-blue-200 p-2 w-full hover:bg-gray-50 cursor-pointer">
              {exercise}
            </li>
            <button onClick={() => handleCallbackExercises(exercise)} className="pr-5 pb-2">
            <IoIosAddCircleOutline color="" size={32}/>
            </button>
            </div>
          );
        })}
      </ul>
      {(searchedExercises.length == 0 && searchInput.trim().length > 0) && (
          <div className="flex gap-3 py-40 flex-col items-center">
          <p className=""><span className="font-bold text-lg">{searchInput}</span> not found</p>
          <div className="flex gap-3">
            <Button onClick={() =>  addExercise(searchInput)}>Add to my exercises</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Exercises;
