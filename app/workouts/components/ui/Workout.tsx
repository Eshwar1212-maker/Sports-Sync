import { FC } from 'react'
import {BiArrowBack} from "react-icons/bi"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

interface WorkoutProps {
  
}
const Workout: FC<WorkoutProps> = ({
  
}) => {
  return (
    <div className='text-center flex flex-col justify-between'>
      <div className='flex justify-between px-[640px]'>
        <button>
        <IoIosArrowBack />
        </button>
      <h1 className='text-3xl font-bold'>
        Today
      </h1> 
      <button>
        <IoIosArrowForward />
      </button>
      </div>

      <div className='text-gray-300 text-xl py-60'>
        Workout log empty
      </div>
    </div>
  )
}

export default Workout