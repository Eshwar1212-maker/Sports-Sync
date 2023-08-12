"use client";

import { Button } from "@/components/ui/button";
import { exercises } from "@/lib/exercises";
import { FC, useState } from "react";

interface ExercisesProps {
  selectedExercise?: string;
}
const Exercises: FC<ExercisesProps> = ({ selectedExercise }) => {
  const [userExercises, setUserExercises] = useState(exercises);
  const [selected, setSelected] = useState();
  const [searchInput, setSearchInput] = useState("");

  const searchedExercises = userExercises.filter((exercise) =>
    exercise.toLowerCase().includes(searchInput.toLowerCase())
  );

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
        {searchedExercises.map((exercise) => {
          return (
            <li className="border-b-[1px] border-blue-200 p-2 w-full hover:bg-gray-50 cursor-pointer">
              {exercise}
            </li>
          );
        })}
      </ul>
      {searchedExercises.length == 0 && (
          <div className="flex gap-3 py-40 flex-col items-center">
          <p className="font-semibold">{searchInput} not found</p>

          <div className="flex gap-3">
            <input
              placeholder="Enter new exercise name..."
              className="w-[290px] p-2 border-[1px] border-black rounded-md"
            />
            <Button>Add to my exercises</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Exercises;
