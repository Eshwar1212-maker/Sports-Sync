"use client"

import Button from '@/app/components/Button'
import { FC } from 'react'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import { IoMdAdd } from 'react-icons/io'
import { LiaCalendarDaySolid } from 'react-icons/lia'
interface HeaderProps {
  
}
const Header: FC<HeaderProps> = ({
  
}) => {
  return (
    <div className='flex py-8 justify-between px-[500px]'>
      <div>
        <button>
        <LiaCalendarDaySolid size={50}/>
        </button>
        </div>
      <div>
         <Button>
            Add Workout
         </Button>
      </div>
    </div>
  )
}

export default Header