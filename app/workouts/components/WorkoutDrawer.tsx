"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Workout } from "@prisma/client"
import { useTheme } from "next-themes"
import { AiOutlineAreaChart, AiOutlineDelete, AiOutlineEdit, AiOutlineLineChart } from "react-icons/ai"
import { FcAreaChart, FcComboChart } from "react-icons/fc"
import { HiEllipsisVertical } from "react-icons/hi2"
import ProgressionModal from "./ui/ProgressionModal"
import { useState } from "react"
import { BiLineChart } from "react-icons/bi"
import { SlChart } from "react-icons/sl"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"

interface WorkoutDrawerProps{
  exerciseData?: Workout
  onEdit: () => void
  onViewProgression?: () => void
  exerciseName: string
  workouts: any
  handleDelete?: () => void
}

export function WorkoutDrawer({exerciseData, onEdit, exerciseName, workouts, handleDelete}: WorkoutDrawerProps) {
  const {theme} = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const { mutate: deleteWorkout, isLoading: isDeleteLoading } = useMutation(
    (data: { weight: number; sets: number; reps: number, workoutId: string, isPersonalRecord?: boolean }) => {
      return axios.patch("/api/workouts/update", data);
    },
    {
      onSuccess: (response) => {
        // onClose();
        // updateWorkoutInState(response.data); 
        // toast.success("Workout updated");
        // findWorkoutRecord()
        // handleCallbackExercises({})
      },
      onError: (error) => {
        console.log("UPDATE EVENT ERROR: ", error);
      },
    }
  );

  console.log(workouts);
  

  // const handleDeleteWorkout = () => {
  //   const updatedExerciseData = {
  //     weight: editedWeight,
  //     sets: editedSets,
  //     reps: editedReps,
  //     workoutId: workoutId,
  //     isPersonalRecord: personalRecord,
  //     date: new Date("1900-02-21")
  //   };
  // }
  
  return (
    <DropdownMenu>
      <ProgressionModal 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        exerciseName={exerciseName}
        workouts={workouts}
      />
      <DropdownMenuTrigger asChild>
        <Button variant="link"><HiEllipsisVertical color={theme === "light" ? "black" : "white"} size={25}/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[340px]">
        <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onEdit} className="cursor-pointer">
            Edit
            <DropdownMenuShortcut><AiOutlineEdit color="black" size={22} /></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
           onClick={handleDelete}
           className="cursor-pointer">
          Delete
          <DropdownMenuShortcut><AiOutlineDelete color="black" size={22}/></DropdownMenuShortcut>
        </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsOpen(true)} className="cursor-pointer">
          {exerciseName} progression
          <DropdownMenuShortcut><FcAreaChart className="border-[1px] border-black p-0 m-0 bg-blue-200" color="white" size={24}/></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
