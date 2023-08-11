"use client"

import Button from '@/app/components/Button'
import { FC, useState } from 'react'
import {LuCalendarDays} from "react-icons/lu"
import WorkoutModal from './ui/WorkoutModal'


interface WorkoutProps {
  
}
const Workout: FC<WorkoutProps> = ({
  
}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (

    <div className=''>
    <WorkoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* HEADER */}
      <header className='flex justify-between max-w-[700px] py-11 mx-auto'>
        <div>
        <LuCalendarDays size={30}/>
        </div>
        <div>
            <h1 className='text-xl text-gray-800'>Today</h1>
        </div>
        <div className='text-sm'>
            <Button onClick={() => setIsOpen(true)}>
                Add Workout
            </Button>
        </div>
       
      </header>
      {/* BODY */}
    </div>
  )
}

export default Workout