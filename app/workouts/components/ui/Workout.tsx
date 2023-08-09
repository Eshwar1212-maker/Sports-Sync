import { FC } from 'react'
import {BiArrowBack} from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface WorkoutProps {
  
}
const Workout: FC<WorkoutProps> = ({
  
}) => {
  return (
    <div className='text-center flex flex-col justify-between py-3 md:py-0'>

      <div className='text-gray-300 text-xl py-60 hidden md:block'>
        Workout log empty
      </div>
    </div>
  )
}

export default Workout