"use client"

import { Button } from "@/components/ui/button";
import { exercises } from "@/lib/exercises";
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
          className="w-[290px] p-2 border-[1px] border-black rounded-md"
          placeholder="Search Exercises..."
        />
      </div>
      <ul className="pl-5 space-y-1 overflow-y-scroll max-h-[510px] w-[100%] border-b-[2px] border-b-black my-2 py-2 border-t-[1px] border-t-black">
        {searchedExercises.map((exercise, index) => (
          <div key={index} className="flex justify-between py-1 my-auto">
            <li className="border-b-[1px] border-blue-200 w-full hover:bg-gray-50 cursor-pointer text-lg pb-1 font-light">
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
