import { FC } from 'react'
import {BiArrowBack} from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface WorkoutProps {
  
}
const Workout: FC<WorkoutProps> = ({
  
}) => {
  return (
    <div className='text-center flex flex-col justify-between py-3 md:py-0'>
      <div className='flex justify-between mx-auto space-x-20 max-w-[500px] pl-20 sm:pl-0'>
        <button className=''>
        <IoIosArrowBack size={25}/>
        </button>
      <h1 className='text-xl md:text-2xl font-bold'>
        Today
      </h1> 
      <button className=''>
        <IoIosArrowForward size={25}/>
      </button>
      </div>

      <div className='text-gray-300 text-xl py-60 hidden md:block'>
        Workout log empty
      </div>
    </div>
  )
}

export default Workout