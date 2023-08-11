"use client"

import { FC, useState } from "react";

interface ExercisesProps {
    selectedExercise?: string
}
const Exercises: FC<ExercisesProps> = ({
    selectedExercise
}) => {
    const [selected, setSelected] = useState()
  return (
<ul className="text-xl pl-5 py-3 space-y-1 overflow-y-scroll max-h-[560px] w-[45vw]">
      <li className="border-b-[1px] border-blue-200 p-2 w-full">Bench Press</li>
      <li className="border-b-[1px] border-blue-200 p-2 w-full">Bench Press</li>
      <li className="border-b-[1px] border-blue-200 p-2 w-full">Bench Press</li>
      <li className="border-b-[1px] border-blue-200 p-2 w-full">Bench Press</li>
      <li className="border-b-[1px] border-blue-200 p-2 w-full">Bench Press</li>
      <li className="border-b-[1px] border-blue-200 p-2 w-full">Bench Press</li>


      </ul>
  );
}

export default Exercises;
