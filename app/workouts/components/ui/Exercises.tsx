"use client";

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
      <ul className="text-xl pl-5 py-3 space-y-1 overflow-y-scroll max-h-[510px] w-[45vw] border-b-[2px] border-b-black">
        {searchedExercises.map((exercise) => {
          return (
            <li className="border-b-[1px] border-blue-200 p-2 w-full">
              {exercise}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Exercises;
