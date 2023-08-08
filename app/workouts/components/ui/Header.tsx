"use client"

import Button from '@/app/components/Button'
import { FC, useState } from 'react'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { IoMdAdd } from 'react-icons/io'
import { LiaCalendarDaySolid } from 'react-icons/lia'
import AddWorkoutModal from './AddWorkoutModal'
interface HeaderProps {
  
}
const Header: FC<HeaderProps> = ({
  
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex justify-between py-10 max-w-[900px] mx-auto'>
      <AddWorkoutModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <div>
        <button>
        <LiaCalendarDaySolid size={50}/>
        </button>
        </div>
      <div className='my-2' onClick={() => setIsOpen(true)}>
         <Button>
            Add Workout
         </Button>
      </div>
    </div>
  )
}

export default Header