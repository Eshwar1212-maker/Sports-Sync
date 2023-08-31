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
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

interface WorkoutDrawerProps{
  exerciseData?: Workout
  onEdit: () => void
  onViewProgression?: () => void
  exerciseName: string
  workouts: any
  workoutId: string
}

export function WorkoutDrawer({exerciseData, onEdit, exerciseName, workouts, workoutId}: WorkoutDrawerProps) {
  const {theme} = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  
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
          <DropdownMenuItem onClick={() => setIsOpen(true)} className="cursor-pointer">
          {exerciseName} progression
          <DropdownMenuShortcut><FcAreaChart className="border-[1px] border-black p-0 m-0 bg-blue-200" color="white" size={24}/></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
