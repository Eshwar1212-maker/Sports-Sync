"use client"

import ProModal from '@/app/calender/components/ProModal'
import { FC, useState } from 'react'
interface ProgramProps {
  
}
const Program: FC<ProgramProps> = ({
  
}) => {
    const [isOpen, setisOpen] = useState(false)
  return (
    <div className=''>
        <ProModal isOpen={isOpen} onClose={() => setisOpen(true)}/>
      <h3 className='py-3 font-semibold text-lg'>A rough summary of your program, favorite exercises, progressions, reccomendations.</h3>
      <div className='mt-4 flex flex-col gap-6'>
        <div className='py-2 flex flex-col gap-1'>
            <h4 className='font-semibold'>Most used exercises</h4>
            <p>Barbell Squats, Bench Press, Trice Push Downs, Lat Pulldown</p>
        </div>
        <div className='py-2 flex flex-col gap-1'>
            <h4 className='font-semibold'>Your Progress</h4>
            <p>
                You have been consistently making progress on Barbell Back Squats(a 20 pound increase the past month) and Barbell Bench Press(Increased 10 pounds the past week)
            </p>
        </div>
        <div className='py-2 flex flex-col gap-1'>
            <h4 className='font-semibold'>Reccomendations</h4>
            <p>
                Due to not progressing on Front Squats, Barbell Squats, and Pullups, we reccomend our compound movement plan:
                 <span className='underline font-semibold pl-3 cursor-pointer' onClick={() => setisOpen(true)}>
                    Compound Movements Program
                </span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Program