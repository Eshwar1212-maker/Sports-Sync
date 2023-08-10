"use client"

import { FC, useState } from 'react'
import Header from './ui/Header'
import Workout from './ui/Workout'
interface DesktopProps {
  

}
const Desktop: FC<DesktopProps> = ({
  
}) => {

  const [workouts, setWorkouts] = useState<Array<any>>([]);  // Assuming a workout is an object, hence Array<any>

  const addWorkout = (workout: any) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };
  return (
    <div className=''>
        <Header addWorkout={addWorkout} />
        <Workout workouts={workouts} />
    </div>
  )
}

export default Desktop